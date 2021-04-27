module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XAsQ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5X2e":
/***/ (function(module, exports) {

module.exports = require("urql");

/***/ }),

/***/ "DGsd":
/***/ (function(module, exports) {

module.exports = require("next-urql");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "ULzA":
/***/ (function(module, exports) {

module.exports = require("@urql/exchange-graphcache");

/***/ }),

/***/ "XAsQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DGsd");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_urql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gix7");
/* harmony import */ var _utils_urqlClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YyP0");








const Pay = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    pid,
    key
  } = router.query;
  const [, pay] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__[/* usePayMutation */ "q"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const classroom = typeof pid == 'string' ? pid : '-1';
    const payment_key = typeof key == 'string' ? key : '-1';

    async function makePayment() {
      const payment = await pay({
        id: classroom,
        key: payment_key
      });
      return payment;
    }

    makePayment().finally(() => {
      router.push('/home');
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {});
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_1__["withUrqlClient"])(_utils_urqlClient__WEBPACK_IMPORTED_MODULE_5__[/* urqlClient */ "a"], {
  ssr: true
})(Pay));

/***/ }),

/***/ "YyP0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ urqlClient; });

// EXTERNAL MODULE: external "@urql/exchange-graphcache"
var exchange_graphcache_ = __webpack_require__("ULzA");

// EXTERNAL MODULE: external "urql"
var external_urql_ = __webpack_require__("5X2e");

// EXTERNAL MODULE: ./generated/graphql.tsx
var graphql = __webpack_require__("gix7");

// CONCATENATED MODULE: ./utils/updateQuery.tsx
// Wrapper
function updateQuery(cache, qi, result, fn) {
  return cache.updateQuery(qi, data => fn(result, data));
}
// CONCATENATED MODULE: ./utils/urqlClient.ts




const urqlClient = ssrExchange => ({
  url: "http://18.189.235.128/graphql",
  fetchOptions: {
    credentials: "include"
  },
  exchanges: [external_urql_["dedupExchange"], Object(exchange_graphcache_["cacheExchange"])({
    updates: {
      Mutation: {
        logout: (_result, args, cache, info) => {
          updateQuery(cache, {
            query: graphql["a" /* VerifyLoginDocument */]
          }, _result, () => ({
            verifyLogin: null
          }));
        },
        register: (_result, args, cache, info) => {
          updateQuery(cache, {
            query: graphql["a" /* VerifyLoginDocument */]
          }, _result, (result, query) => {
            if (result.register.errors) {
              return query;
            } else {
              return {
                verifyLogin: result.register.user
              };
            }
          });
        },
        login: (_result, args, cache, info) => {
          updateQuery(cache, {
            query: graphql["a" /* VerifyLoginDocument */]
          }, _result, (result, query) => {
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
  }), ssrExchange, external_urql_["fetchExchange"]]
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gix7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RegularUserFragmentDoc */
/* unused harmony export RegularClassroomFragmentDoc */
/* unused harmony export RegularCourseFragmentDoc */
/* unused harmony export GetActivitiesDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useGetActivitiesMutation; });
/* unused harmony export ChangeClassRoomStateDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useChangeClassRoomStateMutation; });
/* unused harmony export ChangeCourseStateDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useChangeCourseStateMutation; });
/* unused harmony export ChangePasswordDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useChangePasswordMutation; });
/* unused harmony export CreateCheckoutSessionDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useCreateCheckoutSessionMutation; });
/* unused harmony export GetcodeDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return useGetcodeMutation; });
/* unused harmony export LoginDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return useLoginMutation; });
/* unused harmony export LogoutDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return useLogoutMutation; });
/* unused harmony export PayDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return usePayMutation; });
/* unused harmony export ReceiptDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return useReceiptMutation; });
/* unused harmony export RegisterDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return useRegisterMutation; });
/* unused harmony export RestoreDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return useRestoreMutation; });
/* unused harmony export GetClassroomDatesDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useGetClassroomDatesQuery; });
/* unused harmony export GetClassroomDocument */
/* unused harmony export useGetClassroomQuery */
/* unused harmony export GetClassroomsByCourseDocument */
/* unused harmony export useGetClassroomsByCourseQuery */
/* unused harmony export GetClassroomsDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return useGetClassroomsQuery; });
/* unused harmony export GetCoursesDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return useGetCoursesQuery; });
/* unused harmony export GetTeacherDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return useGetTeacherQuery; });
/* unused harmony export GetUserDocument */
/* unused harmony export useGetUserQuery */
/* unused harmony export IsPaidDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return useIsPaidQuery; });
/* unused harmony export MyCoursesDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return useMyCoursesQuery; });
/* unused harmony export MyReceiptsDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return useMyReceiptsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyLoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useVerifyLoginQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5X2e");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const RegularUserFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularUser on User {
  id
  name
  email
}
    `;
const RegularClassroomFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularClassroom on VirtualClassroom {
  id
  teacher {
    id
    user {
      ...RegularUser
    }
  }
  capacity
  link
  createdAt
  updatedAt
  enable
}
    ${RegularUserFragmentDoc}`;
const RegularCourseFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment RegularCourse on Course {
  id
  name
  price
  language {
    id
    name
    code
  }
}
    `;
const GetActivitiesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation GetActivities($date: DateTime!) {
  activities(date: $date) {
    id
    link
    description
    capacity
    time_start
    course {
      id
      name
    }
  }
}
    `;
function useGetActivitiesMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](GetActivitiesDocument);
}
;
const ChangeClassRoomStateDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation changeClassRoomState($id: ID!, $state: Boolean!) {
  changeClassRoomState(id: $id, newState: $state)
}
    `;
function useChangeClassRoomStateMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ChangeClassRoomStateDocument);
}
;
const ChangeCourseStateDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation changeCourseState($id: ID!, $state: Boolean!) {
  changeCourseState(id: $id, newState: $state)
}
    `;
function useChangeCourseStateMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ChangeCourseStateDocument);
}
;
const ChangePasswordDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation changePassword($password: String!, $email: String!) {
  changePassword(password: $password, email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useChangePasswordMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ChangePasswordDocument);
}
;
const CreateCheckoutSessionDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation createCheckoutSession($id: ID!) {
  createCheckout(classroom: $id) {
    errors {
      field
      message
    }
    stripeID
  }
}
    `;
function useCreateCheckoutSessionMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](CreateCheckoutSessionDocument);
}
;
const GetcodeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation getcode($email: String!) {
  getCode(email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useGetcodeMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](GetcodeDocument);
}
;
const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Login($email: String!, $password: String!) {
  login(password: $password, email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument);
}
;
const LogoutDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation logout {
  logout
}
    `;
function useLogoutMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LogoutDocument);
}
;
const PayDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation pay($id: ID!, $key: String!) {
  pay(classroom: $id, key: $key) {
    errors {
      field
      message
    }
    receipt {
      id
      amount
    }
  }
}
    `;
function usePayMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](PayDocument);
}
;
const ReceiptDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Receipt($id: ID!) {
  receipt(id: $id) {
    id
    paid
    amount
    createdAt
    virtual {
      id
      description
      capacity
      enable
      teacher {
        id
        user {
          id
          name
          email
        }
      }
      course {
        id
        name
        createdAt
        updatedAt
        language {
          id
          name
        }
      }
    }
  }
}
    `;
function useReceiptMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ReceiptDocument);
}
;
const RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Register($name: String!, $email: String!, $password: String!) {
  register(name: $name, email: $email, password: $password) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](RegisterDocument);
}
;
const RestoreDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation restore($code: String!, $email: String!) {
  restore(code: $code, email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useRestoreMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](RestoreDocument);
}
;
const GetClassroomDatesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query GetClassroomDates {
  classroomdates
}
    `;
function useGetClassroomDatesQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetClassroomDatesDocument
  }, options));
}
;
const GetClassroomDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getClassroom($id: ID!) {
  classroom(id: $id) {
    id
    link
    description
    capacity
    createdAt
    updatedAt
    enable
    course {
      id
      name
      price
      language {
        id
        name
        code
      }
    }
    teacher {
      id
      user {
        ...RegularUser
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useGetClassroomQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetClassroomDocument
  }, options));
}
;
const GetClassroomsByCourseDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getClassroomsByCourse($id: ID!) {
  classroomsByCourse(id: $id) {
    id
    description
    capacity
    link
    createdAt
    updatedAt
    enable
    course {
      ...RegularCourse
    }
    teacher {
      id
      user {
        ...RegularUser
      }
    }
  }
}
    ${RegularCourseFragmentDoc}
${RegularUserFragmentDoc}`;
function useGetClassroomsByCourseQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetClassroomsByCourseDocument
  }, options));
}
;
const GetClassroomsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getClassrooms {
  classrooms {
    id
    link
    description
    capacity
    time_start
    createdAt
    updatedAt
    enable
    course {
      id
      name
      price
      language {
        id
        name
        code
      }
    }
    teacher {
      id
      user {
        ...RegularUser
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;
function useGetClassroomsQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetClassroomsDocument
  }, options));
}
;
const GetCoursesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getCourses {
  courses {
    id
    name
    price
    active
    createdAt
    updatedAt
    language {
      id
      name
      code
    }
    classrooms {
      id
      description
      teacher {
        id
        user {
          id
          name
        }
      }
    }
  }
}
    `;
function useGetCoursesQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetCoursesDocument
  }, options));
}
;
const GetTeacherDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getTeacher($id: ID!) {
  teacher(id: $id) {
    user {
      id
      name
      email
    }
    classrooms {
      id
      link
      description
      capacity
      course {
        id
        name
        price
        language {
          id
          name
          code
        }
      }
    }
  }
}
    `;
function useGetTeacherQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetTeacherDocument
  }, options));
}
;
const GetUserDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getUser($id: ID!) {
  user(id: $id) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
function useGetUserQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: GetUserDocument
  }, options));
}
;
const IsPaidDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query isPaid($id: ID!) {
  isPaid(id: $id)
}
    `;
function useIsPaidQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: IsPaidDocument
  }, options));
}
;
const MyCoursesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query myCourses {
  mycourses {
    id
    name
    price
    language {
      id
      name
      code
    }
    classrooms {
      id
      link
      description
      capacity
      teacher {
        id
        user {
          id
          name
          email
        }
      }
    }
  }
}
    `;
function useMyCoursesQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: MyCoursesDocument
  }, options));
}
;
const MyReceiptsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query myReceipts {
  myreceipts {
    id
    paid
    amount
    createdAt
  }
}
    `;
function useMyReceiptsQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: MyReceiptsDocument
  }, options));
}
;
const VerifyLoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query VerifyLogin {
  verifyLogin {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
function useVerifyLoginQuery(options = {}) {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useQuery"](_objectSpread({
    query: VerifyLoginDocument
  }, options));
}
;

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });