"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ BlogPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/seo */ \"./components/common/seo.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout */ \"./components/layout/index.ts\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Divider_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Divider!=!@mui/material */ \"__barrel_optimize__?names=Box,Container,Divider!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar __N_SSG = true;\nfunction BlogPage(param) {\n    let { post } = param;\n    var _post_author;\n    if (!post) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_seo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                data: {\n                    title: post.title,\n                    description: post.description,\n                    url: \"/blog/\".concat(post.slug),\n                    thumbnailUrl: post.thumbnailUrl\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (_post_author = post.author) === null || _post_author === void 0 ? void 0 : _post_author.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.mdContent\n                    }, void 0, false, {\n                        fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Divider_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                        fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.htmlContent || \"\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\app\\\\pages\\\\blog\\\\[slug].tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_c = BlogPage;\nBlogPage.Layout = _components_layout__WEBPACK_IMPORTED_MODULE_2__.MainLayout;\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNPO0FBSU87QUFHekI7O0FBWWhCLFNBQVNNLFNBQVUsS0FBcUI7UUFBckIsRUFBQ0MsSUFBSSxFQUFnQixHQUFyQjtRQWNkQTtJQWJoQixJQUFHLENBQUNBLE1BQU0sT0FBTztJQUVqQixxQkFDSSw4REFBQ0wsMEZBQUdBOzswQkFDQSw4REFBQ0YsOERBQUdBO2dCQUFDUSxNQUFNO29CQUNQQyxPQUFPRixLQUFLRSxLQUFLO29CQUNqQkMsYUFBYUgsS0FBS0csV0FBVztvQkFDN0JDLEtBQUssU0FBbUIsT0FBVkosS0FBS0ssSUFBSTtvQkFDdkJDLGNBQWNOLEtBQUtNLFlBQVk7Z0JBQ25DOzs7Ozs7MEJBRUEsOERBQUNWLGdHQUFTQTs7a0NBQ04sOERBQUNXO2tDQUFJUCxLQUFLRSxLQUFLOzs7Ozs7a0NBQ2YsOERBQUNNO21DQUFHUixlQUFBQSxLQUFLUyxNQUFNLGNBQVhULG1DQUFBQSxhQUFhVSxJQUFJOzs7Ozs7a0NBQ3JCLDhEQUFDRjtrQ0FBR1IsS0FBS1csU0FBUzs7Ozs7O2tDQUVsQiw4REFBQ2QsOEZBQU9BOzs7OztrQ0FDUiw4REFBQ2U7d0JBQUlDLHlCQUF5Qjs0QkFBRUMsUUFBUWQsS0FBS2UsV0FBVyxJQUFJO3dCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0U7S0F0QndCaEI7QUF1QnhCQSxTQUFTaUIsTUFBTSxHQUFHdEIsMERBQVVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW3NsdWddLnRzeD9hZmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZW8gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9zZW8nO1xyXG5pbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICdAL21vZGVscyc7XHJcbmltcG9ydCB7IGdldFBvc3RMaXN0IH0gZnJvbSAnQC91dGlscy9wb3N0cyc7XHJcbmltcG9ydCB7IFBvc3RBZGRSb3VuZGVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHNDb250ZXh0IH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcmVoeXBlRG9jdW1lbnQgZnJvbSAncmVoeXBlLWRvY3VtZW50JztcclxuaW1wb3J0IHJlaHlwZUZvcm1hdCBmcm9tICdyZWh5cGUtZm9ybWF0JztcclxuaW1wb3J0IHJlaHlwZVN0cmluZ2lmeSBmcm9tICdyZWh5cGUtc3RyaW5naWZ5JztcclxuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSc7XHJcbmltcG9ydCByZW1hcmtSZWh5cGUgZnJvbSAncmVtYXJrLXJlaHlwZSc7XHJcbmltcG9ydCB7IHVuaWZpZWQgfSBmcm9tICd1bmlmaWVkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxvZ1BhZ2VQcm9wcyB7XHJcbiAgICBwb3N0OiBQb3N0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQYWdlICh7cG9zdH06IEJsb2dQYWdlUHJvcHMpIHtcclxuICAgIGlmKCFwb3N0KSByZXR1cm4gbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPFNlbyBkYXRhPXt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcG9zdC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwb3N0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgL2Jsb2cvJHtwb3N0LnNsdWd9YCxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbFVybDogcG9zdC50aHVtYm5haWxVcmxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmF1dGhvcj8ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57cG9zdC5tZENvbnRlbnR9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5odG1sQ29udGVudCB8fCAnJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbkJsb2dQYWdlLkxheW91dCA9IE1haW5MYXlvdXRcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHBvc3RMaXN0ID0gYXdhaXQgZ2V0UG9zdExpc3QoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9zdExpc3QubWFwKChwb3N0OiBQb3N0KSA9PiAoeyBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnIH0gfSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxCbG9nUGFnZVByb3BzPiA9IGFzeW5jICggY29udGV4dDogR2V0U3RhdGljUHJvcHNDb250ZXh0ICkgPT4ge1xyXG4gICAgY29uc3QgcG9zdExpc3QgPSBhd2FpdCBnZXRQb3N0TGlzdCgpXHJcbiAgICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXM/LnNsdWdcclxuICAgIGlmKCFzbHVnKSByZXR1cm4ge25vdEZvdW5kOiB0cnVlfVxyXG4gICAgY29uc3QgcG9zdCA9IHBvc3RMaXN0LmZpbmQoeCA9PiB4LnNsdWcgPT09IHNsdWcpXHJcbiAgICBpZighcG9zdCkgcmV0dXJuIHsgbm90Rm91bmQ6IHRydWUgfVxyXG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IHVuaWZpZWQoKVxyXG4gICAgICAgIC51c2UocmVtYXJrUGFyc2UpXHJcbiAgICAgICAgLnVzZShyZW1hcmtSZWh5cGUpXHJcbiAgICAgICAgLnVzZShyZWh5cGVEb2N1bWVudCwge3RpdGxlOiAnQmxvZyBEZXRhaWxzIFBhZ2UnfSlcclxuICAgICAgICAudXNlKHJlaHlwZUZvcm1hdClcclxuICAgICAgICAudXNlKHJlaHlwZVN0cmluZ2lmeSlcclxuICAgICAgICAucHJvY2Vzcyhwb3N0Lm1kQ29udGVudCB8fCAnJylcclxuICAgIHBvc3QuaHRtbENvbnRlbnQgPSBmaWxlLnRvU3RyaW5nKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBwb3N0LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJTZW8iLCJNYWluTGF5b3V0IiwiQm94IiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIlJlYWN0IiwiQmxvZ1BhZ2UiLCJwb3N0IiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzbHVnIiwidGh1bWJuYWlsVXJsIiwiaDEiLCJwIiwiYXV0aG9yIiwibmFtZSIsIm1kQ29udGVudCIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaHRtbENvbnRlbnQiLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n"));

/***/ })

});