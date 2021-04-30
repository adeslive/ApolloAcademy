webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/InputField */ "./components/InputField.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var _utils_error_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/error-map */ "./utils/error-map.tsx");
/* harmony import */ var _utils_urqlClient__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/urqlClient */ "./utils/urqlClient.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");







var _jsxFileName = "C:\\Users\\Usuario\\Documents\\Proyectos\\apollo-academy\\apollo-academy-web\\pages\\login.tsx",
    _this = undefined,
    _s = $RefreshSig$();
















// TO DO Cambiar mutacion
// Luego de que se cambie el proceso de registro, se tiene que cambiar la mutacion a un UserResponse
var Login = function Login(_ref) {
  _s();

  Object(C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useLoginMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_12__["useLoginMutation"])(),
      _useLoginMutation2 = Object(C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useLoginMutation, 2),
      login = _useLoginMutation2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_17__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      bgGradient: "linear(to-r, green.200, pink.500)",
      position: "fixed",
      width: "100%",
      height: "100%",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__["Center"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          maxW: "md",
          borderWidth: "1px",
          borderRadius: "lg",
          backgroundColor: "white",
          width: "100%",
          margin: "1%",
          height: "520px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__["Text"], {
            fontSize: "28px",
            fontWeight: "bold",
            padding: "25px 25px 0 25px",
            color: "#D7933A",
            children: "Iniciar Sesi\xF3n"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
              initialValues: {
                password: "",
                email: ""
              },
              onSubmit: /*#__PURE__*/function () {
                var _ref3 = Object(C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values, _ref2) {
                  var _res$data, _res$data3;

                  var setErrors, res, _res$data2;

                  return C_Users_Usuario_Documents_Proyectos_apollo_academy_apollo_academy_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          setErrors = _ref2.setErrors;
                          _context.next = 3;
                          return login(values);

                        case 3:
                          res = _context.sent;

                          if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.login.errors) {
                            setErrors(Object(_utils_error_map__WEBPACK_IMPORTED_MODULE_13__["default"])((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.login.errors));
                          } else if ((_res$data3 = res.data) !== null && _res$data3 !== void 0 && _res$data3.login.user) {
                            router.push('/');
                          }

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x, _x2) {
                  return _ref3.apply(this, arguments);
                };
              }(),
              children: function children(_ref4) {
                var isSubmitting = _ref4.isSubmitting;
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    name: "email",
                    label: "Correo Electr\xF3nico",
                    placeholder: "juan@ejemplo.com",
                    type: "email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__["Box"], {
                    mt: 4,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_10__["default"], {
                      name: "password",
                      label: "Contrase\xF1a",
                      placeholder: "Contrase\xF1a",
                      type: "password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__["Stack"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                      mt: 4,
                      type: "submit",
                      isLoading: isSubmitting,
                      colorScheme: "teal",
                      children: "Ingresar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "http://localhost:8080/auth/facebook",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                        width: "100%",
                        mt: 2,
                        type: "button",
                        colorScheme: "facebook",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__["Image"], {
                          src: "facebook_icon.png",
                          boxSize: "20px",
                          borderRadius: "full",
                          marginX: "7px"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 140
                        }, _this), "Iniciar con Facebook"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 75
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "http://localhost:8080/google",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                        width: "100%",
                        mt: 2,
                        type: "button",
                        colorScheme: "gray",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__["Image"], {
                          src: "gmail_icon.png",
                          boxSize: "20px",
                          borderRadius: "full",
                          marginX: "7px"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 54,
                          columnNumber: 129
                        }, _this), "Iniciar con Google"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 68
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 29
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 17
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__["Box"], {
              paddingTop: "25px",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
                href: "/restorepassword",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__["Link"], {
                  color: "teal.500",
                  children: ["Olvidaste tu contrase\xF1a", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_18__["ExternalLinkIcon"], {
                    mx: "2px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 63
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Login, "kMbi+SizPk0JXSoMzn2K0cQs6NU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], _generated_graphql__WEBPACK_IMPORTED_MODULE_12__["useLoginMutation"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_8__["withUrqlClient"])(_utils_urqlClient__WEBPACK_IMPORTED_MODULE_14__["urqlClient"])(Login));

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/urqlClient.ts":
/*!*****************************!*\
  !*** ./utils/urqlClient.ts ***!
  \*****************************/
/*! exports provided: urqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urqlClient", function() { return urqlClient; });
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/exchange-graphcache */ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var _updateQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateQuery */ "./utils/updateQuery.tsx");




var urqlClient = function urqlClient(ssrExchange) {
  return {
    url: "http://localhost:8080/graphql",
    fetchOptions: {
      credentials: "include"
    },
    exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__["dedupExchange"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__["cacheExchange"])({
      updates: {
        Mutation: {
          logout: function logout(_result, args, cache, info) {
            Object(_updateQuery__WEBPACK_IMPORTED_MODULE_3__["updateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["VerifyLoginDocument"]
            }, _result, function () {
              return {
                verifyLogin: null
              };
            });
          },
          register: function register(_result, args, cache, info) {
            Object(_updateQuery__WEBPACK_IMPORTED_MODULE_3__["updateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["VerifyLoginDocument"]
            }, _result, function (result, query) {
              if (result.register.errors) {
                return query;
              } else {
                return {
                  verifyLogin: result.register.user
                };
              }
            });
          },
          login: function login(_result, args, cache, info) {
            Object(_updateQuery__WEBPACK_IMPORTED_MODULE_3__["updateQuery"])(cache, {
              query: _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["VerifyLoginDocument"]
            }, _result, function (result, query) {
              if (result.login.errors) {
                return query;
              } else {
                return {
                  verifyLogin: result.login.user
                };
              }
            });
          }
        }
      }
    }), ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__["fetchExchange"]]
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4Iiwid2VicGFjazovL19OX0UvLi91dGlscy91cnFsQ2xpZW50LnRzIl0sIm5hbWVzIjpbIkxvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTG9naW5NdXRhdGlvbiIsImxvZ2luIiwicGFzc3dvcmQiLCJlbWFpbCIsInZhbHVlcyIsInNldEVycm9ycyIsInJlcyIsImRhdGEiLCJlcnJvcnMiLCJFcnJvck1hcCIsInVzZXIiLCJwdXNoIiwiaXNTdWJtaXR0aW5nIiwid2l0aFVycWxDbGllbnQiLCJ1cnFsQ2xpZW50Iiwic3NyRXhjaGFuZ2UiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4Y2hhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9nb3V0IiwiX3Jlc3VsdCIsImFyZ3MiLCJjYWNoZSIsImluZm8iLCJ1cGRhdGVRdWVyeSIsInF1ZXJ5IiwiVmVyaWZ5TG9naW5Eb2N1bWVudCIsInZlcmlmeUxvZ2luIiwicmVnaXN0ZXIiLCJyZXN1bHQiLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFFQSxJQUFNQSxLQUE0QixHQUFJLFNBQWhDQSxLQUFnQyxPQUFRO0FBQUE7O0FBQUE7O0FBQzFDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDBDLDBCQUV4QkMsNEVBQWdCLEVBRlE7QUFBQTtBQUFBLE1BRWpDQyxLQUZpQzs7QUFJMUMsc0JBQ0k7QUFBQSw0QkFDQSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFQSxxRUFBQyxxREFBRDtB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YUFGTyxFQUdQTixPQUhPLEVBSVAsVUFBQ1MsTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2Ysa0JBQUlJLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQnpCLE1BQXBCLEVBQTRCO0FBQ3hCLHVCQUFPc0IsS0FBUDtBQUNILGVBRkQsTUFFTztBQUNILHVCQUFPO0FBQ0hFLDZCQUFXLEVBQUVFLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQnZCO0FBRDFCLGlCQUFQO0FBR0g7QUFDSixhQVpNLENBQVg7QUFjSCxXQXhCSztBQXlCTlQsZUFBSyxFQUFFLGVBQUN3QixPQUFELEVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUNuQ0MsNEVBQVcsQ0FDUEYsS0FETyxFQUVQO0FBQUVHLG1CQUFLLEVBQUVDLHNFQUFtQkE7QUFBNUIsYUFGTyxFQUdQTixPQUhPLEVBSVAsVUFBQ1MsTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2Ysa0JBQUlJLE1BQU0sQ0FBQ2pDLEtBQVAsQ0FBYU8sTUFBakIsRUFBeUI7QUFDckIsdUJBQU9zQixLQUFQO0FBQ0gsZUFGRCxNQUVPO0FBQ0gsdUJBQU87QUFDSEUsNkJBQVcsRUFBRUUsTUFBTSxDQUFDakMsS0FBUCxDQUFhUztBQUR2QixpQkFBUDtBQUdIO0FBQ0osYUFaTSxDQUFYO0FBY0g7QUF4Q0s7QUFETDtBQUQ0QixLQUFELENBQTdCLEVBOENYSyxXQTlDVyxFQStDWG9CLGtEQS9DVztBQUxrQyxHQUF2QjtBQUFBLENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjUwMWZiYmFhY2VkMTE5MWFkYzVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL2J1dHRvbic7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tICduZXh0LXVycWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VMb2dpbk11dGF0aW9uIH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgRXJyb3JNYXAgZnJvbSAnLi4vdXRpbHMvZXJyb3ItbWFwJztcclxuaW1wb3J0IHsgdXJxbENsaWVudCB9IGZyb20gJy4uL3V0aWxzL3VycWxDbGllbnQnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTGluaywgVGV4dCwgQ2VudGVyLCBJbWFnZSwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXHJcblxyXG5pbnRlcmZhY2UgbG9naW5Qcm9wcyB7fVxyXG5cclxuLy8gVE8gRE8gQ2FtYmlhciBtdXRhY2lvblxyXG4vLyBMdWVnbyBkZSBxdWUgc2UgY2FtYmllIGVsIHByb2Nlc28gZGUgcmVnaXN0cm8sIHNlIHRpZW5lIHF1ZSBjYW1iaWFyIGxhIG11dGFjaW9uIGEgdW4gVXNlclJlc3BvbnNlXHJcblxyXG5jb25zdCBMb2dpbiA6IFJlYWN0LkZDPGxvZ2luUHJvcHM+ICA9ICh7fSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbLCBsb2dpbl0gPSB1c2VMb2dpbk11dGF0aW9uKCk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgIDxCb3ggYmdHcmFkaWVudD1cImxpbmVhcih0by1yLCBncmVlbi4yMDAsIHBpbmsuNTAwKVwiIHBvc2l0aW9uPVwiZml4ZWRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgPlxyXG4gICAgICAgIDxDZW50ZXI+XHJcbiAgICAgICAgPEJveCBtYXhXPVwibWRcIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cImxnXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIiB3aWR0aD1cIjEwMCVcIiBtYXJnaW49XCIxJVwiIGhlaWdodD1cIjUyMHB4XCI+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyOHB4XCIgZm9udFdlaWdodD1cImJvbGRcIiBwYWRkaW5nPVwiMjVweCAyNXB4IDAgMjVweFwiIGNvbG9yPVwiI0Q3OTMzQVwiPkluaWNpYXIgU2VzacOzbjwvVGV4dD5cclxuICAgICAgICA8TGF5b3V0ID5cclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e3Bhc3N3b3JkOlwiXCIsIGVtYWlsOlwiXCJ9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtzZXRFcnJvcnN9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbG9naW4odmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YT8ubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9ycyhFcnJvck1hcChyZXMuZGF0YT8ubG9naW4uZXJyb3JzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzLmRhdGE/LmxvZ2luLnVzZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIHsoe2lzU3VibWl0dGluZ30pID0+IChcclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBuYW1lPVwiZW1haWxcIiBsYWJlbD1cIkNvcnJlbyBFbGVjdHLDs25pY29cIiBwbGFjZWhvbGRlcj1cImp1YW5AZWplbXBsby5jb21cIiB0eXBlPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IG10PXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIG5hbWU9XCJwYXNzd29yZFwiIGxhYmVsPVwiQ29udHJhc2XDsWFcIiBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCIgdHlwZT1cInBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBtdD17NH0gdHlwZT1cInN1Ym1pdFwiICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ30gY29sb3JTY2hlbWU9XCJ0ZWFsXCI+SW5ncmVzYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvZmFjZWJvb2tcIj48QnV0dG9uIHdpZHRoPVwiMTAwJVwiIG10PXsyfSB0eXBlPVwiYnV0dG9uXCIgY29sb3JTY2hlbWU9XCJmYWNlYm9va1wiPjxJbWFnZSBzcmM9XCJmYWNlYm9va19pY29uLnBuZ1wiIGJveFNpemU9XCIyMHB4XCIgYm9yZGVyUmFkaXVzPVwiZnVsbFwiIG1hcmdpblg9XCI3cHhcIj48L0ltYWdlPkluaWNpYXIgY29uIEZhY2Vib29rPC9CdXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nb29nbGVcIj48QnV0dG9uIHdpZHRoPVwiMTAwJVwiIG10PXsyfSB0eXBlPVwiYnV0dG9uXCIgY29sb3JTY2hlbWU9XCJncmF5XCI+PEltYWdlIHNyYz1cImdtYWlsX2ljb24ucG5nXCIgYm94U2l6ZT1cIjIwcHhcIiBib3JkZXJSYWRpdXM9XCJmdWxsXCIgbWFyZ2luWD1cIjdweFwiPjwvSW1hZ2U+SW5pY2lhciBjb24gR29vZ2xlPC9CdXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgIDxCb3ggcGFkZGluZ1RvcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVzdG9yZXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjb2xvcj1cInRlYWwuNTAwXCI+T2x2aWRhc3RlIHR1IGNvbnRyYXNlw7FhPEV4dGVybmFsTGlua0ljb24gbXg9XCIycHhcIiAvPjwvTGluaz5cclxuICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudCh1cnFsQ2xpZW50KShMb2dpbik7IiwiaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSB9IGZyb20gJ0B1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGUnO1xyXG5pbXBvcnQgeyBkZWR1cEV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlIH0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgTG9naW5NdXRhdGlvbiwgUmVnaXN0ZXJEb2N1bWVudCwgUmVnaXN0ZXJNdXRhdGlvbiwgVmVyaWZ5TG9naW5Eb2N1bWVudCwgVmVyaWZ5TG9naW5RdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVRdWVyeSB9IGZyb20gJy4vdXBkYXRlUXVlcnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSkgPT4gKHtcclxuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZ3JhcGhxbFwiLFxyXG4gICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0XHJcbiAgICB9LFxyXG4gICAgZXhjaGFuZ2VzOiBbZGVkdXBFeGNoYW5nZSwgY2FjaGVFeGNoYW5nZSh7XHJcbiAgICAgICAgdXBkYXRlczoge1xyXG4gICAgICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBWZXJpZnlMb2dpblF1ZXJ5PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlcnk6IFZlcmlmeUxvZ2luRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gKHsgdmVyaWZ5TG9naW46IG51bGwgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIFZlcmlmeUxvZ2luUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVyeTogVmVyaWZ5TG9naW5Eb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmeUxvZ2luOiByZXN1bHQucmVnaXN0ZXIudXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgVmVyaWZ5TG9naW5RdWVyeT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBWZXJpZnlMb2dpbkRvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZ5TG9naW46IHJlc3VsdC5sb2dpbi51c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBzc3JFeGNoYW5nZSwgXHJcbiAgICBmZXRjaEV4Y2hhbmdlXVxyXG59KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==