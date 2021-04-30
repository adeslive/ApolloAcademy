webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXJxbENsaWVudC50cyJdLCJuYW1lcyI6WyJ1cnFsQ2xpZW50Iiwic3NyRXhjaGFuZ2UiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4Y2hhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9nb3V0IiwiX3Jlc3VsdCIsImFyZ3MiLCJjYWNoZSIsImluZm8iLCJ1cGRhdGVRdWVyeSIsInF1ZXJ5IiwiVmVyaWZ5TG9naW5Eb2N1bWVudCIsInZlcmlmeUxvZ2luIiwicmVnaXN0ZXIiLCJyZXN1bHQiLCJlcnJvcnMiLCJ1c2VyIiwibG9naW4iLCJmZXRjaEV4Y2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxXQUFEO0FBQUEsU0FBdUI7QUFDN0NDLE9BQUcsRUFBRSwrQkFEd0M7QUFFN0NDLGdCQUFZLEVBQUU7QUFDVkMsaUJBQVcsRUFBRTtBQURILEtBRitCO0FBSzdDQyxhQUFTLEVBQUUsQ0FBQ0Msa0RBQUQsRUFBZ0JDLCtFQUFhLENBQUM7QUFDckNDLGFBQU8sRUFBRTtBQUNMQyxnQkFBUSxFQUFFO0FBQ05DLGdCQUFNLEVBQUUsZ0JBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ3BDQyw0RUFBVyxDQUNQRixLQURPLEVBRVA7QUFBRUcsbUJBQUssRUFBRUMsc0VBQW1CQTtBQUE1QixhQUZPLEVBR1BOLE9BSE8sRUFJUDtBQUFBLHFCQUFPO0FBQUVPLDJCQUFXLEVBQUU7QUFBZixlQUFQO0FBQUEsYUFKTyxDQUFYO0FBTUgsV0FSSztBQVNOQyxrQkFBUSxFQUFFLGtCQUFDUixPQUFELEVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN0Q0MsNEVBQVcsQ0FDUEYsS0FETyxFQUVQO0FBQUVHLG1CQUFLLEVBQUVDLHNFQUFtQkE7QUFBNUIsYUFGTyxFQUdQTixPQUhPLEVBSVAsVUFBQ1MsTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2Ysa0JBQUlJLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsTUFBcEIsRUFBNEI7QUFDeEIsdUJBQU9MLEtBQVA7QUFDSCxlQUZELE1BRU87QUFDSCx1QkFBTztBQUNIRSw2QkFBVyxFQUFFRSxNQUFNLENBQUNELFFBQVAsQ0FBZ0JHO0FBRDFCLGlCQUFQO0FBR0g7QUFDSixhQVpNLENBQVg7QUFjSCxXQXhCSztBQXlCTkMsZUFBSyxFQUFFLGVBQUNaLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ25DQyw0RUFBVyxDQUNQRixLQURPLEVBRVA7QUFBRUcsbUJBQUssRUFBRUMsc0VBQW1CQTtBQUE1QixhQUZPLEVBR1BOLE9BSE8sRUFJUCxVQUFDUyxNQUFELEVBQVNKLEtBQVQsRUFBbUI7QUFDZixrQkFBSUksTUFBTSxDQUFDRyxLQUFQLENBQWFGLE1BQWpCLEVBQXlCO0FBQ3JCLHVCQUFPTCxLQUFQO0FBQ0gsZUFGRCxNQUVPO0FBQ0gsdUJBQU87QUFDSEUsNkJBQVcsRUFBRUUsTUFBTSxDQUFDRyxLQUFQLENBQWFEO0FBRHZCLGlCQUFQO0FBR0g7QUFDSixhQVpNLENBQVg7QUFjSDtBQXhDSztBQURMO0FBRDRCLEtBQUQsQ0FBN0IsRUE4Q1hyQixXQTlDVyxFQStDWHVCLGtEQS9DVztBQUxrQyxHQUF2QjtBQUFBLENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwMWZiYmFhY2VkMTE5MWFkYzVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWNoZUV4Y2hhbmdlIH0gZnJvbSAnQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZSc7XHJcbmltcG9ydCB7IGRlZHVwRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2UgfSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBMb2dpbk11dGF0aW9uLCBSZWdpc3RlckRvY3VtZW50LCBSZWdpc3Rlck11dGF0aW9uLCBWZXJpZnlMb2dpbkRvY3VtZW50LCBWZXJpZnlMb2dpblF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVF1ZXJ5IH0gZnJvbSAnLi91cGRhdGVRdWVyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgdXJxbENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55KSA9PiAoe1xyXG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ncmFwaHFsXCIsXHJcbiAgICBmZXRjaE9wdGlvbnM6IHtcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3RcclxuICAgIH0sXHJcbiAgICBleGNoYW5nZXM6IFtkZWR1cEV4Y2hhbmdlLCBjYWNoZUV4Y2hhbmdlKHtcclxuICAgICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgICAgIE11dGF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIFZlcmlmeUxvZ2luUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBxdWVyeTogVmVyaWZ5TG9naW5Eb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiAoeyB2ZXJpZnlMb2dpbjogbnVsbCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgVmVyaWZ5TG9naW5RdWVyeT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBWZXJpZnlMb2dpbkRvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZ5TG9naW46IHJlc3VsdC5yZWdpc3Rlci51c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBWZXJpZnlMb2dpblF1ZXJ5PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcXVlcnk6IFZlcmlmeUxvZ2luRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZnlMb2dpbjogcmVzdWx0LmxvZ2luLnVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSxcclxuICAgIHNzckV4Y2hhbmdlLCBcclxuICAgIGZldGNoRXhjaGFuZ2VdXHJcbn0pXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9