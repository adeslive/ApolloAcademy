module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lL6G");


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

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "TBXV":
/***/ (function(module, exports) {

module.exports = require("@daily-co/daily-js");

/***/ }),

/***/ "ULzA":
/***/ (function(module, exports) {

module.exports = require("@urql/exchange-graphcache");

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
  url: "http://18.189.235.128:8080/graphql",
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

/***/ "lL6G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "next-urql"
var external_next_urql_ = __webpack_require__("DGsd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@daily-co/daily-js"
var daily_js_ = __webpack_require__("TBXV");
var daily_js_default = /*#__PURE__*/__webpack_require__.n(daily_js_);

// CONCATENATED MODULE: ./components/Call.tsx




const DEFAULT_HEIGHT = 400;

const Call = ({
  url
}) => {
  const CALL_OPTIONS = {
    iframeStyle: {
      width: "100%",
      height: "100%",
      border: "1px solid #e6eaef",
      borderRadius: "6px 6px 0 0"
    },
    showLeaveButton: true,
    showFullscreenButton: true,
    url: `https://apolloacademy.daily.co/${url}` //   showLocalVideo: false,
    //   showParticipantsBar: false,

  };
  const videoRef = Object(external_react_["useRef"])(null);
  const {
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])(DEFAULT_HEIGHT);
  const {
    0: callframe,
    1: setCallframe
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (!videoRef || !(videoRef !== null && videoRef !== void 0 && videoRef.current) || callframe) return;
    const newCallframe = daily_js_default.a.createFrame(videoRef.current, CALL_OPTIONS);
    newCallframe.join().then(() => {
      var _videoRef$current;

      setHeight(((videoRef === null || videoRef === void 0 ? void 0 : (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.clientWidth) || 500) * 0.75);
      setCallframe(newCallframe);
    });
  }, [videoRef]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
    h: '100%',
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
      height: height,
      margin: "auto",
      maxW: '1000px',
      h: '100%',
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
        ref: videoRef,
        w: '100%',
        h: '100%'
      })
    })
  });
};

/* harmony default export */ var components_Call = (Call);
// EXTERNAL MODULE: ./utils/urqlClient.ts + 1 modules
var urqlClient = __webpack_require__("YyP0");

// CONCATENATED MODULE: ./pages/course/meeting/[pid].tsx








const Meeting = () => {
  const router = Object(router_["useRouter"])();
  const {
    pid
  } = router.query;
  const url = typeof pid == 'string' ? pid : '-1';
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
    h: '100vh',
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Call, {
      url: url
    })
  });
};

/* harmony default export */ var _pid_ = __webpack_exports__["default"] = (Object(external_next_urql_["withUrqlClient"])(urqlClient["a" /* urqlClient */], {
  ssr: true
})(Meeting));

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });