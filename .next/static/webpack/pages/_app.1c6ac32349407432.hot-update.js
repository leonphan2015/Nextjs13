"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./hooks/user-auth.ts":
/*!****************************!*\
  !*** ./hooks/user-auth.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/index */ \"./api-client/index.ts\");\n\n\nfunction useAuth(options) {\n    const { data: json, error, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/profile\", {\n        dedupingInterval: 60 * 60 * 1000,\n        revalidateOnFocus: false,\n        ...options\n    });\n    // Extract data from json if json is defined\n    const profile = json === null || json === void 0 ? void 0 : json.data;\n    const firstloading = !json && !error;\n    async function login() {\n        await _api_index__WEBPACK_IMPORTED_MODULE_1__.authApi.login({\n            username: \"test1\",\n            password: \"123123\"\n        });\n        await mutate();\n    }\n    async function logout() {\n        await _api_index__WEBPACK_IMPORTED_MODULE_1__.authApi.logout();\n        mutate({}, false);\n    }\n    return {\n        profile,\n        error,\n        login,\n        logout,\n        firstloading\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VyLWF1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBQ1Q7QUFFL0IsU0FBU0UsUUFBUUMsT0FBbUM7SUFDdkQsTUFBTSxFQUNGQyxNQUFNQyxJQUFJLEVBQ1ZDLEtBQUssRUFDTEMsTUFBTSxFQUNULEdBQUdQLCtDQUFNQSxDQUFDLFlBQVk7UUFDbkJRLGtCQUFrQixLQUFLLEtBQUs7UUFDNUJDLG1CQUFtQjtRQUNuQixHQUFHTixPQUFPO0lBQ2Q7SUFFQSw0Q0FBNEM7SUFDNUMsTUFBTU8sVUFBVUwsaUJBQUFBLDJCQUFBQSxLQUFNRCxJQUFJO0lBRTFCLE1BQU1PLGVBQWUsQ0FBQ04sUUFBUSxDQUFDQztJQUUvQixlQUFlTTtRQUNYLE1BQU1YLCtDQUFPQSxDQUFDVyxLQUFLLENBQUM7WUFDaEJDLFVBQVU7WUFDVkMsVUFBVTtRQUNkO1FBQ0EsTUFBTVA7SUFDVjtJQUVBLGVBQWVRO1FBQ1gsTUFBTWQsK0NBQU9BLENBQUNjLE1BQU07UUFDcEJSLE9BQU8sQ0FBQyxHQUFHO0lBQ2Y7SUFFQSxPQUFPO1FBQ0hHO1FBQ0FKO1FBQ0FNO1FBQ0FHO1FBQ0FKO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VyLWF1dGgudHM/MDRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSLCB7IFNXUkNvbmZpZ3VyYXRpb24gfSBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyBhdXRoQXBpIH0gZnJvbSAnQC9hcGkvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgob3B0aW9ucz86IFBhcnRpYWw8U1dSQ29uZmlndXJhdGlvbj4pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiBqc29uLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgIH0gPSB1c2VTV1IoJy9wcm9maWxlJywge1xyXG4gICAgICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDYwICogNjAgKiAxMDAwLFxyXG4gICAgICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXh0cmFjdCBkYXRhIGZyb20ganNvbiBpZiBqc29uIGlzIGRlZmluZWRcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBqc29uPy5kYXRhO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0bG9hZGluZyA9ICFqc29uICYmICFlcnJvcjtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2dpbigpIHtcclxuICAgICAgICBhd2FpdCBhdXRoQXBpLmxvZ2luKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICd0ZXN0MScsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnMTIzMTIzJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBtdXRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICAgICAgYXdhaXQgYXV0aEFwaS5sb2dvdXQoKTtcclxuICAgICAgICBtdXRhdGUoe30sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2ZpbGUsXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgbG9naW4sXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIGZpcnN0bG9hZGluZ1xyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJhdXRoQXBpIiwidXNlQXV0aCIsIm9wdGlvbnMiLCJkYXRhIiwianNvbiIsImVycm9yIiwibXV0YXRlIiwiZGVkdXBpbmdJbnRlcnZhbCIsInJldmFsaWRhdGVPbkZvY3VzIiwicHJvZmlsZSIsImZpcnN0bG9hZGluZyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/user-auth.ts\n"));

/***/ })

});