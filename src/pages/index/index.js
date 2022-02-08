// DOM elements
const versionElements = document.getElementsByClassName('version')
const windowsDownloadElements =
	document.getElementsByClassName('windows-download')
const windowsDownloadSizeElements = document.getElementsByClassName(
	'windows-download-size'
)
const macDownloadElements = document.getElementsByClassName('mac-download')
const macDownloadSizeElements =
	document.getElementsByClassName('mac-download-size')

const bytesToMegabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1)

const setupDownloadButtons = async () => {
	// get latest release from Github
	const releases = await fetch(
		'https://api.github.com/repos/c-o-l-i-n/presto-parts/releases'
	).then((response) => response.json())
	const latestRelease = releases[0]

	// get download info
	const version = latestRelease.tag_name
	const windowsDownloadSize = latestRelease.assets.find((asset) =>
		asset.name.toLowerCase().includes('windows')
	).size
	const macDownloadSize = latestRelease.assets.find((asset) =>
		asset.name.toLowerCase().includes('mac')
	).size

	// set version number
	for (const versionElement of versionElements) {
		versionElement.innerHTML = version
	}

	// set windows download size
	for (const windowsDownloadSizeElement of windowsDownloadSizeElements) {
		windowsDownloadSizeElement.innerHTML = `(${bytesToMegabytes(
			windowsDownloadSize
		)} MB)`
	}

	// set mac download size
	for (const macDownloadSizeElement of macDownloadSizeElements) {
		macDownloadSizeElement.innerHTML = `(${bytesToMegabytes(
			macDownloadSize
		)} MB)`
	}
}
setupDownloadButtons()
