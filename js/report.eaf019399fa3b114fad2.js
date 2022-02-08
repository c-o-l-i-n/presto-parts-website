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

/***/ }),

/***/ "./src/pages/report/index.js":
/*!***********************************!*\
  !*** ./src/pages/report/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index/index */ \"./src/pages/index/index.js\");\n/* harmony import */ var _index_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_index__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst issueForm = document.getElementById('issue-form')\nconst statusElement = document.getElementById('status')\n\nconst action = 'https://formspree.io/f/xayveble'\nconst method = 'POST'\n\nissueForm.action = action\nissueForm.method = method\n\nconst submit = async (data, type) => {\n\tissueForm.hidden = true\n\tstatusElement.hidden = false\n\tstatusElement.innerHTML = `Submitting ${type} report...`\n\n\tfetch(action, {\n\t\tmethod: method,\n\t\tbody: data,\n\t\theaders: {\n\t\t\tAccept: 'application/json',\n\t\t},\n\t})\n\t\t.then((response) => {\n\t\t\tconsole.log(response)\n\t\t\tif (response.ok) {\n\t\t\t\tstatusElement.innerHTML = 'Thanks for your submission!'\n\t\t\t} else {\n\t\t\t\tresponse.json().then((data) => {\n\t\t\t\t\tif (Object.hasOwn(data, 'errors')) {\n\t\t\t\t\t\tstatusElement.innerHTML = data['errors']\n\t\t\t\t\t\t\t.map((error) => error['message'])\n\t\t\t\t\t\t\t.join(', ')\n\t\t\t\t\t} else {\n\t\t\t\t\t\tstatusElement.innerHTML = `Oops! There was a problem submitting the ${type} report`\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t}\n\t\t})\n\t\t.catch((error) => {\n\t\t\tconsole.log(error)\n\t\t\tstatusElement.innerHTML = `Oops! There was a problem submitting the ${type} report`\n\t\t})\n}\n\nconst submitErrorReport = async () => {\n\tconst data = new FormData()\n\tconst params = new URLSearchParams(window.location.search)\n\n\tfor (const [key, value] of params) {\n\t\tdata.append(key, value)\n\t}\n\n\tawait submit(data, 'error')\n\twindow.history.replaceState(null, null, window.location.pathname)\n}\n\nissueForm.addEventListener('submit', async (e) => {\n\te.preventDefault()\n\tconst data = new FormData(e.target)\n\tsubmit(data, 'issue')\n})\n\nif (new URLSearchParams(window.location.search).toString()) {\n\tsubmitErrorReport()\n}\n\n\n//# sourceURL=webpack://presto-parts-website/./src/pages/report/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/report/index.js");
/******/ 	
/******/ })()
;