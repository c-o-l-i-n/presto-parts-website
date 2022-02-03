const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
					chunks: [template.name],
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
	entry: getEntry(),
	output: {
		path: `${__dirname}/dist`,
		filename: 'js/[name].[contenthash].js',
		clean: true,
	},
	plugins: [
		...getHtmlTemplate(),
		new MiniCssExtractPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: './src/CNAME', to: 'CNAME', toType: 'file' },
				{ from: './src/assets', to: 'assets' },
				{ from: './src/icons', to: 'icons' },
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					'sass-loader',
				],
			},
		],
	},
}
