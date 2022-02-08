const downloadIframe = document.getElementById('download-iframe')
const downloadLink = document.getElementById('download-link')

// get latest release from Github
setupDownload = async () => {
	const releases = await fetch(
		'https://api.github.com/repos/c-o-l-i-n/presto-parts/releases'
	).then((response) => response.json())
	const latestRelease = releases[0]

	// get windows download link
	const windowsDownloadLink = latestRelease.assets.find((asset) =>
		asset.name.toLowerCase().includes('windows')
	).browser_download_url

	// set windows download link
	downloadIframe.src = windowsDownloadLink
	downloadLink.href = windowsDownloadLink
}
setupDownload()
