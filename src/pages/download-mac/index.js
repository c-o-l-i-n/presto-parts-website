const downloadIframe = document.getElementById('download-iframe')
const downloadLink = document.getElementById('download-link')

// get latest release from Github
setupDownload = async () => {
	const releases = await fetch(
		'https://api.github.com/repos/c-o-l-i-n/presto-parts/releases'
	).then((response) => response.json())
	const latestRelease = releases[0]

	// get mac download link
	const macDownloadLink = latestRelease.assets.find((asset) =>
		asset.name.toLowerCase().includes('mac')
	).browser_download_url

	// set mac download link
	downloadIframe.src = macDownloadLink
	downloadLink.href = macDownloadLink
}
setupDownload()
