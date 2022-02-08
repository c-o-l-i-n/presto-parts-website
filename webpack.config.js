const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const glob = require('glob')

// Multi page entry
function getEntry() {
	const entry = {}
	glob.sync('./src/pages/**/index.js').forEach((file) => {
		const name = file.match(/\/pages\/(.+)\/index.js/)[1]
		entry[name] = file
	})
	return entry
}

// Multi page template
function getHtmlTemplate() {
	return glob
		.sync('./src/pages/**/index.html')
		.map((file) => {
			return { name: file.match(/\/pages\/(.+)\/index.html/)[1], path: file }
		})
		.map(
			(template) =>
				new HtmlWebpackPlugin({
					template: template.path,
					chunks: ['shared', template.name],
					filename:
						(template.name === 'index' ? '' : `${template.name}/`) +
						'index.html',
				})
		)
}

module.exports = {
	mode: 'development',
	devServer: {
		static: './dist',
	},
	entry: { ...getEntry(), shared: './src/shared.js' },
	output: {
		path: `${__dirname}/dist`,
		filename: 'js/[name].[contenthash].js',
		clean: true,
	},
	plugins: [
		...getHtmlTemplate(),
		new MiniCssExtractPlugin(),
		new PurgeCSSPlugin({
			paths: glob.sync('./src/**/*', { nodir: true }),
		}),
		new CopyPlugin({
			patterns: [{ from: './src/static', to: '' }],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(svg|eot|woff|woff2|ttf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext][query]',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
}
