/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ (() => {

eval("// DOM elements\nconst versionElements = document.getElementsByClassName('version')\nconst windowsDownloadElements =\n\tdocument.getElementsByClassName('windows-download')\nconst windowsDownloadSizeElements = document.getElementsByClassName(\n\t'windows-download-size'\n)\nconst macDownloadElements = document.getElementsByClassName('mac-download')\nconst macDownloadSizeElements =\n\tdocument.getElementsByClassName('mac-download-size')\n\nconst bytesToMegabytes = (bytes) => (bytes / 1024 / 1024).toFixed(1)\n\nconst setupDownloads = async () => {\n\t// get latest release from Github\n\tconst releases = await fetch(\n\t\t'https://api.github.com/repos/c-o-l-i-n/presto-parts/releases'\n\t).then((response) => response.json())\n\tconst latestRelease = releases[0]\n\n\t// get download info\n\tconst version = latestRelease.tag_name\n\tconst windowsDownload = latestRelease.assets.find((asset) =>\n\t\tasset.name.toLowerCase().includes('windows')\n\t)\n\tconst macDownload = latestRelease.assets.find((asset) =>\n\t\tasset.name.toLowerCase().includes('mac')\n\t)\n\n\t// set version number\n\tfor (const versionElement of versionElements) {\n\t\tversionElement.innerHTML = version\n\t}\n\n\t// set windows download link\n\tfor (const windowsDownloadElement of windowsDownloadElements) {\n\t\twindowsDownloadElement.href = windowsDownload.browser_download_url\n\t}\n\n\t// set windows download size\n\tfor (const windowsDownloadSizeElement of windowsDownloadSizeElements) {\n\t\twindowsDownloadSizeElement.innerHTML = `(${bytesToMegabytes(\n\t\t\twindowsDownload.size\n\t\t)} MB)`\n\t}\n\n\t// set mac download link\n\tfor (const macDownloadElement of macDownloadElements) {\n\t\tmacDownloadElement.href = macDownload.browser_download_url\n\t}\n\n\t// set mac download size\n\tfor (const macDownloadSizeElement of macDownloadSizeElements) {\n\t\tmacDownloadSizeElement.innerHTML = `(${bytesToMegabytes(\n\t\t\tmacDownload.size\n\t\t)} MB)`\n\t}\n}\nsetupDownloads()\n\n\n//# sourceURL=webpack://presto-parts-website/./src/pages/index/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/index/index.js"]();
/******/ 	
/******/ })()
;