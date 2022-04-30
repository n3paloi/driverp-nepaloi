/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rage-rpc/dist/rage-rpc.min.js":
/*!****************************************************!*\
  !*** ./node_modules/rage-rpc/dist/rage-rpc.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}("undefined"!=typeof self?self:this,(function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e,r,n){"use strict";var t;function o(e,r){const n="client"===s();if(e&&"object"==typeof e&&void 0!==e.id){const o=(r,t,o)=>n?e.type===r&&t.at(e.id)===e:e instanceof o;switch(r){case t.Blip:return o("blip",mp.blips,mp.Blip);case t.Checkpoint:return o("checkpoint",mp.checkpoints,mp.Checkpoint);case t.Colshape:return o("colshape",mp.colshapes,mp.Colshape);case t.Label:return o("textlabel",mp.labels,mp.TextLabel);case t.Marker:return o("marker",mp.markers,mp.Marker);case t.Object:return o("object",mp.objects,mp.Object);case t.Pickup:return o("pickup",mp.pickups,mp.Pickup);case t.Player:return o("player",mp.players,mp.Player);case t.Vehicle:return o("vehicle",mp.vehicles,mp.Vehicle)}}return!1}function c(){const e=46656*Math.random()|0,r=46656*Math.random()|0;return("000"+e.toString(36)).slice(-3)+("000"+r.toString(36)).slice(-3)}function s(){return mp.joaat?"server":mp.game&&mp.game.joaat?"client":mp.trigger?"cef":void 0}function i(e){const r=s();return JSON.stringify(e,(e,n)=>{if("client"===r||"server"===r&&n&&"object"==typeof n){let e;if(o(n,t.Blip)?e=t.Blip:o(n,t.Checkpoint)?e=t.Checkpoint:o(n,t.Colshape)?e=t.Colshape:o(n,t.Marker)?e=t.Marker:o(n,t.Object)?e=t.Object:o(n,t.Pickup)?e=t.Pickup:o(n,t.Player)?e=t.Player:o(n,t.Vehicle)&&(e=t.Vehicle),e)return{__t:e,i:"number"==typeof n.remoteId?n.remoteId:n.id}}return n})}function a(e){const r=s();return JSON.parse(e,(e,n)=>{if(("client"===r||"server"===r)&&n&&"object"==typeof n&&"string"==typeof n.__t&&"number"==typeof n.i&&2===Object.keys(n).length){const e=n.i;let o;switch(n.__t){case t.Blip:o=mp.blips;break;case t.Checkpoint:o=mp.checkpoints;break;case t.Colshape:o=mp.colshapes;break;case t.Label:o=mp.labels;break;case t.Marker:o=mp.markers;break;case t.Object:o=mp.objects;break;case t.Pickup:o=mp.pickups;break;case t.Player:o=mp.players;break;case t.Vehicle:o=mp.vehicles}if(o)return o["client"===r?"atRemoteId":"at"](e)}return n})}function l(e){return new Promise(r=>setTimeout(()=>r(e),0))}function u(e){return new Promise((r,n)=>setTimeout(()=>n(e),0))}function p(e,r){return"number"==typeof r?Promise.race([new Promise((e,n)=>{setTimeout(()=>n("TIMEOUT"),r)}),e]):e}function f(e){try{e.url}catch(e){return!1}return!0}n.d(r,"h",(function(){return c})),n.d(r,"a",(function(){return s})),n.d(r,"g",(function(){return i})),n.d(r,"c",(function(){return a})),n.d(r,"e",(function(){return l})),n.d(r,"d",(function(){return u})),n.d(r,"f",(function(){return p})),n.d(r,"b",(function(){return f})),function(e){e.Blip="b",e.Checkpoint="cp",e.Colshape="c",e.Label="l",e.Marker="m",e.Object="o",e.Pickup="p",e.Player="pl",e.Vehicle="v"}(t||(t={}))},function(e,r,n){"use strict";n.r(r),function(e){n.d(r,"register",(function(){return d})),n.d(r,"unregister",(function(){return h})),n.d(r,"call",(function(){return w})),n.d(r,"callServer",(function(){return v})),n.d(r,"callClient",(function(){return y})),n.d(r,"callBrowsers",(function(){return B})),n.d(r,"callBrowser",(function(){return x})),n.d(r,"on",(function(){return j})),n.d(r,"off",(function(){return O})),n.d(r,"trigger",(function(){return C})),n.d(r,"triggerClient",(function(){return S})),n.d(r,"triggerServer",(function(){return E})),n.d(r,"triggerBrowsers",(function(){return L})),n.d(r,"triggerBrowser",(function(){return M}));var t=n(0);const o=t.a();if(!o)throw"Unknown RAGE environment";const c="PROCEDURE_NOT_FOUND",s="__rpc:id",i="__rpc:process",a="__rpc:browserRegister",l="__rpc:browserUnregister",u="__rpc:triggerEvent",p="__rpc:triggerEventBrowsers",f="cef"===o?window:e;if(!f[i]){if(f.__rpcListeners={},f.__rpcPending={},f.__rpcEvListeners={},f[i]=(e,r)=>{"server"!==o&&(r=e);const n=t.c(r);if(n.req){const r={id:n.id,environment:n.fenv||n.env};"server"===o&&(r.player=e);const c={ret:1,id:n.id,env:o};let s;switch(o){case"server":s=e=>r.player.call(i,[t.g(e)]);break;case"client":if("server"===n.env)s=e=>mp.events.callRemote(i,t.g(e));else if("cef"===n.env){const e=n.b&&f.__rpcBrowsers[n.b];r.browser=e,s=r=>e&&t.b(e)&&g(e,r,!0)}break;case"cef":s=e=>mp.trigger(i,t.g(e))}if(s){const e=m(n.name,n.args,r);n.noRet||e.then(e=>s({...c,res:e})).catch(e=>s({...c,err:e}))}}else if(n.ret){const r=f.__rpcPending[n.id];if("server"===o&&r.player!==e)return;r&&(r.resolve(n.err?t.d(n.err):t.e(n.res)),delete f.__rpcPending[n.id])}},"cef"!==o){if(mp.events.add(i,f[i]),"client"===o){d("__rpc:callServer",([e,r,n],t)=>_(e,r,{fenv:t.environment,noRet:n})),d("__rpc:callBrowsers",([e,r,n],t)=>P(null,e,r,{fenv:t.environment,noRet:n})),f.__rpcBrowsers={};const e=e=>{const r=t.h();Object.keys(f.__rpcBrowsers).forEach(r=>{const n=f.__rpcBrowsers[r];n&&t.b(n)&&n!==e||delete f.__rpcBrowsers[r]}),f.__rpcBrowsers[r]=e,e.execute(`\n                    window.name = '${r}';\n                    if(typeof window['${s}'] === 'undefined'){\n                        window['${s}'] = Promise.resolve(window.name);\n                    }else{\n                        window['${s}:resolve'](window.name);\n                    }\n                `)};mp.browsers.forEach(e),mp.events.add("browserCreated",e),f.__rpcBrowserProcedures={},mp.events.add(a,e=>{const[r,n]=JSON.parse(e);f.__rpcBrowserProcedures[n]=r}),mp.events.add(l,e=>{const[r,n]=JSON.parse(e);f.__rpcBrowserProcedures[n]===r&&delete f.__rpcBrowserProcedures[n]}),d(p,([e,r],n)=>{Object.values(f.__rpcBrowsers).forEach(t=>{k(t,u,[e,r],{fenv:n.environment,noRet:1})})})}}else void 0===f[s]&&(f[s]=new Promise(e=>{window.name?e(window.name):f[s+":resolve"]=e}));d(u,([e,r],n)=>R(e,r,n))}function g(e,r,n){const o=t.g(r);e.execute(`var process = window["${i}"]; if(process){ process(${JSON.stringify(o)}); }else{ ${n?"":`mp.trigger("${i}", '{"ret":1,"id":"${r.id}","err":"${c}","env":"cef"}');`} }`)}function m(e,r,n){const o=f.__rpcListeners[e];return o?t.e(o(r,n)):t.d(c)}function d(e,r){if(2!==arguments.length)throw'register expects 2 arguments: "name" and "cb"';return"cef"===o&&f[s].then(r=>mp.trigger(a,JSON.stringify([r,e]))),f.__rpcListeners[e]=r,()=>h(e)}function h(e){if(1!==arguments.length)throw'unregister expects 1 argument: "name"';"cef"===o&&f[s].then(r=>mp.trigger(l,JSON.stringify([r,e]))),f.__rpcListeners[e]=void 0}function w(e,r,n={}){return arguments.length<1||arguments.length>3?t.d('call expects 1 to 3 arguments: "name", optional "args", and optional "options"'):t.f(m(e,r,{environment:o}),n.timeout)}function _(e,r,n={}){switch(o){case"server":return w(e,r);case"client":{const c=t.h();return new Promise(s=>{n.noRet||(f.__rpcPending[c]={resolve:s});const a={req:1,id:c,name:e,env:o,args:r,...n};mp.events.callRemote(i,t.g(a))})}case"cef":return y("__rpc:callServer",[e,r,+n.noRet])}}function v(e,r,n={}){if(arguments.length<1||arguments.length>3)return t.d('callServer expects 1 to 3 arguments: "name", optional "args", and optional "options"');let o={};return n.noRet&&(o.noRet=1),t.f(_(e,r,o),n.timeout)}function b(e,r,n,c={}){switch(o){case"client":return w(r,n);case"server":{const s=t.h();return new Promise(a=>{c.noRet||(f.__rpcPending[s]={resolve:a,player:e});const l={req:1,id:s,name:r,env:o,args:n,...c};e.call(i,[t.g(l)])})}case"cef":{const e=t.h();return f[s].then(s=>new Promise(a=>{c.noRet||(f.__rpcPending[e]={resolve:a});const l={b:s,req:1,id:e,name:r,env:o,args:n,...c};mp.trigger(i,t.g(l))}))}}}function y(e,r,n,c={}){switch(o){case"client":if(c=n||{},n=r,r=e,e=null,arguments.length<1||arguments.length>3||"string"!=typeof r)return t.d('callClient from the client expects 1 to 3 arguments: "name", optional "args", and optional "options"');break;case"server":if(arguments.length<2||arguments.length>4||"object"!=typeof e)return t.d('callClient from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');break;case"cef":if(c=n||{},n=r,r=e,e=null,arguments.length<1||arguments.length>3||"string"!=typeof r)return t.d('callClient from the browser expects 1 to 3 arguments: "name", optional "args", and optional "options"')}let s={};return c.noRet&&(s.noRet=1),t.f(b(e,r,n,s),c.timeout)}function k(e,r,n,c={}){return new Promise(s=>{const i=t.h();c.noRet||(f.__rpcPending[i]={resolve:s}),g(e,{req:1,id:i,name:r,env:o,args:n,...c},!1)})}function P(e,r,n,s={}){switch(o){case"client":const o=f.__rpcBrowserProcedures[r];if(!o)return t.d(c);const i=f.__rpcBrowsers[o];return i&&t.b(i)?k(i,r,n,s):t.d(c);case"server":return b(e,"__rpc:callBrowsers",[r,n,+s.noRet],s);case"cef":return b(null,"__rpc:callBrowsers",[r,n,+s.noRet],s)}}function B(e,r,n,c={}){let s,i={};switch(o){case"client":case"cef":if(c=n||{},n=r,r=e,arguments.length<1||arguments.length>3)return t.d('callBrowsers from the client or browser expects 1 to 3 arguments: "name", optional "args", and optional "options"');c.noRet&&(i.noRet=1),s=P(null,r,n,i);break;case"server":if(arguments.length<2||arguments.length>4)return t.d('callBrowsers from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');c.noRet&&(i.noRet=1),s=P(e,r,n,i)}if(s)return t.f(s,c.timeout)}function x(e,r,n,c={}){if("client"!==o)return t.d("callBrowser can only be used in the client environment");if(arguments.length<2||arguments.length>4)return t.d('callBrowser expects 2 to 4 arguments: "browser", "name", optional "args", and optional "options"');let s={};return c.noRet&&(s.noRet=1),t.f(k(e,r,n,s),c.timeout)}function R(e,r,n){const t=f.__rpcEvListeners[e];t&&t.forEach(e=>e(r,n))}function j(e,r){if(2!==arguments.length)throw'on expects 2 arguments: "name" and "cb"';const n=f.__rpcEvListeners[e]||new Set;return n.add(r),f.__rpcEvListeners[e]=n,()=>O(e,r)}function O(e,r){if(2!==arguments.length)throw'off expects 2 arguments: "name" and "cb"';const n=f.__rpcEvListeners[e];n&&n.delete(r)}function C(e,r){if(arguments.length<1||arguments.length>2)throw'trigger expects 1 or 2 arguments: "name", and optional "args"';R(e,r,{environment:o})}function S(e,r,n){switch(o){case"client":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2||"string"!=typeof r)throw'triggerClient from the client expects 1 or 2 arguments: "name", and optional "args"';break;case"server":if(arguments.length<2||arguments.length>3||"object"!=typeof e)throw'triggerClient from the server expects 2 or 3 arguments: "player", "name", and optional "args"';break;case"cef":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2||"string"!=typeof r)throw'triggerClient from the browser expects 1 or 2 arguments: "name", and optional "args"'}b(e,u,[r,n],{noRet:1})}function E(e,r){if(arguments.length<1||arguments.length>2)throw'triggerServer expects 1 or 2 arguments: "name", and optional "args"';_(u,[e,r],{noRet:1})}function L(e,r,n){switch(o){case"client":case"cef":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2)throw'triggerBrowsers from the client or browser expects 1 or 2 arguments: "name", and optional "args"';break;case"server":if(arguments.length<2||arguments.length>3)throw'triggerBrowsers from the server expects 2 or 3 arguments: "player", "name", and optional "args"'}b(e,p,[r,n],{noRet:1})}function M(e,r,n){if("client"!==o)throw"callBrowser can only be used in the client environment";if(arguments.length<2||arguments.length>4)throw'callBrowser expects 2 or 3 arguments: "browser", "name", and optional "args"';k(e,u,[r,n],{noRet:1})}r.default={register:d,unregister:h,call:w,callServer:v,callClient:y,callBrowsers:B,callBrowser:x,on:j,off:O,trigger:C,triggerServer:E,triggerClient:S,triggerBrowsers:L,triggerBrowser:M}}.call(this,n(2))},function(e,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])}));

/***/ }),

/***/ "./src/basic/admin/demorgan.ts":
/*!*************************************!*\
  !*** ./src/basic/admin/demorgan.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _prison__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prison */ "./src/basic/prison.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions */ "./src/basic/admin/permissions.ts");





class AdminDemorgan {
  constructor() {
    mp.events.subscribe({
      'Admin-SetDemorgan': this.setDemorgan.bind(this),
      'Admin-ReleaseFromPrison': this.releasePlayer.bind(this)
    });
  }

  async setDemorgan(admin, id, term, reason) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasPermission(admin, 'helper')) return;
    const minutes = this.getMinutesAmount(term);

    if (!_permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasPermission(admin, 'admin') && minutes > 4 * 60) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].error(admin, 'Максимальный срок - 4 часа');
    }

    const target = mp.players.getById(id);

    if (target) {
      await _prison__WEBPACK_IMPORTED_MODULE_2__["default"].toDemorgan(target, minutes, reason);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].success(admin, 'Игрок отправлен в деморган');
    }
  }

  async releasePlayer(admin, id) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_3__["default"].hasPermission(admin, 'gm')) return;
    const target = mp.players.at(id);

    if (target && _prison__WEBPACK_IMPORTED_MODULE_2__["default"].isImprisoned(target)) {
      await _prison__WEBPACK_IMPORTED_MODULE_2__["default"].deleteViolator(target);
      _prison__WEBPACK_IMPORTED_MODULE_2__["default"].releaseViolator(target);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].success(admin, 'Игрок освобожден из тюрьмы');
    }
  }

  getMinutesAmount(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'minutes');
  }

}

const demorgan = new AdminDemorgan();

/***/ }),

/***/ "./src/basic/admin/index.ts":
/*!**********************************!*\
  !*** ./src/basic/admin/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _models_Faction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Faction */ "./src/models/Faction.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _factions_police__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../factions/police */ "./src/factions/police/index.ts");
/* harmony import */ var _factions_security__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../factions/security */ "./src/factions/security/index.ts");
/* harmony import */ var _factions_fbi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../factions/fbi */ "./src/factions/fbi/index.ts");
/* harmony import */ var _factions_sheriff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../factions/sheriff */ "./src/factions/sheriff/index.ts");
/* harmony import */ var _factions_italianMafia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../factions/italianMafia */ "./src/factions/italianMafia/index.ts");
/* harmony import */ var _factions_ems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../factions/ems */ "./src/factions/ems/index.ts");
/* harmony import */ var _property_house__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../property/house */ "./src/property/house/index.ts");
/* harmony import */ var _property_business__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../property/business */ "./src/property/business/index.ts");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _vehicle_despawn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vehicle/despawn */ "./src/basic/vehicle/despawn.ts");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../chat */ "./src/basic/chat.ts");
/* harmony import */ var _referal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../referal */ "./src/basic/referal.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./permissions */ "./src/basic/admin/permissions.ts");
/* harmony import */ var _utils_savepos__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/savepos */ "./src/utils/savepos.ts");
/* harmony import */ var _demorgan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./demorgan */ "./src/basic/admin/demorgan.ts");
/* harmony import */ var _reports__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reports */ "./src/basic/admin/reports.ts");























class Admin {
  constructor() {
    this.subscribeToEvents();
  }

  notifyAll(message) {
    mp.players.forEach(player => _permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'helper') && _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].info(player, message));
  }

  kick(admin, id) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'helper')) return;
    const player = mp.players.getById(id);
    if (!player) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].info(player, 'Вас кикнул администратор!');
    player.kick('ADMIN KICK');
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(admin, 'Игрок кикнут!');
  }

  async ban(admin, id, term, reason) {
    const player = mp.players.getById(id);
    if (!player || !_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'admin')) return;

    if (moment__WEBPACK_IMPORTED_MODULE_0___default()(term).diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'month') > 12 && !_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'gm')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(admin, 'Максимальный срок бана - 12 месяцев');
    }

    await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(player.dbId, {
      $set: {
        ban: {
          adminId: admin.dbId,
          perm: false,
          reason,
          term
        }
      }
    });
    player.kick(reason);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(admin, 'Игрок успешно забанен!');
  }

  async unban(admin, email, firstName, lastName) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'gm')) return;
    let player = await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
      email
    });

    if (!player) {
      const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
        firstName,
        lastName
      });
      if (!user) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(admin, 'Игрок не найден!');
      player = user;
    }

    player.ban = {};
    await player.save();
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(admin, 'Игрок успешно разбанен!');
  }

  async changeMoney(admin, id, amount) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'gm')) return;
    const player = mp.players.getById(id);

    if (player) {
      await player.moneyHelper.change(amount, 'bank', 'admin');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(admin, 'Операция успешна');
    }
  }

  async setFactionLeader(admin, id, faction) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'admin')) return;
    const player = mp.players.getById(id);
    if (!player) return;

    switch (faction) {
      case 'Полиция':
        await _factions_police__WEBPACK_IMPORTED_MODULE_6__["default"].setAsLeader(admin, player);
        break;

      case 'ЧОП':
        await _factions_security__WEBPACK_IMPORTED_MODULE_7__["default"].setAsLeader(admin, player);
        break;

      case 'FBI':
        await _factions_fbi__WEBPACK_IMPORTED_MODULE_8__["default"].setAsLeader(admin, player);
        break;

      case 'Итальянская мафия':
        await _factions_italianMafia__WEBPACK_IMPORTED_MODULE_10__["default"].setAsLeader(admin, player);
        break;

      case 'Шериф':
        await _factions_sheriff__WEBPACK_IMPORTED_MODULE_9__["default"].setAsLeader(admin, player);
        break;

      case 'EMS':
        await _factions_ems__WEBPACK_IMPORTED_MODULE_11__["default"].setAsLeader(admin, player);
        break;

      default:
        break;
    }
  }

  setPlayerSkin(admin, id, name) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'admin')) return;
    const player = mp.players.getById(id);

    if (player) {
      player.model = mp.joaat(name);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(admin, 'Операция успешна!');
    }
  }

  teleport(admin, id, type, coords) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'helper')) return;
    const player = mp.players.getById(id);

    switch (type) {
      case 'player':
        if (!player) return;
        admin.tp({ ...player.position,
          dimension: player.dimension
        });
        break;

      case 'yourself':
        if (!player) return;
        player.tp({ ...admin.position,
          dimension: admin.dimension
        });
        break;

      case 'waypoint':
        admin.tp(admin.waypoint);
        break;

      case 'coords':
        admin.tp(coords);
        break;

      default:
        break;
    }
  }

  createVehicle(admin, id, model, temporary) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'gm')) return;
    const player = mp.players.getById(id);
    if (!player) return;
    _vehicle__WEBPACK_IMPORTED_MODULE_14__["default"].create(model, Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_2__["xyInFrontOfPos"])(player.position, player.heading, 3.0), {
      type: 'user',
      id: player.dbId
    }, temporary, false, player);
  }

  despawnVehicle(admin) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'admin')) return;
    const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_2__["getNearestVehicleInRange"])(admin.position, 3);
    if (vehicle) _vehicle_despawn__WEBPACK_IMPORTED_MODULE_15__["default"].despawnVehicle(vehicle);
  }

  createPromocode(admin, income, award, code) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'gm')) return;
    _referal__WEBPACK_IMPORTED_MODULE_17__["default"].createCustomCode(admin, income, award, code);
  }

  createProperty(admin, type, data) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'gm')) return;

    switch (type) {
      case 'house':
        _property_house__WEBPACK_IMPORTED_MODULE_12__["default"].create(admin, data.propertyClass);
        break;

      case 'business':
        _property_business__WEBPACK_IMPORTED_MODULE_13__["default"].create(admin, data.name, data.cost, data.income);
        break;

      default:
        break;
    }
  }

  sendChatMessage(admin, text, target) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(admin, 'admin')) return;
    const player = mp.players.getById(target);
    _chat__WEBPACK_IMPORTED_MODULE_16__["default"].sendSystem(`[ADMIN]${admin.getName()}: ${text}`, player);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(admin, 'Сообщение отправлено!');
  }

  openMenu(player) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'helper')) return;
    const players = [];
    mp.players.toArray().forEach(item => item.dbId && players.push({
      id: item.id,
      name: `${item.getVariable('realName')} #${item.uid}`
    }));
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Admin-ShowMenu', [player.adminLvl, players]);
  }

  async getFactions() {
    const factions = await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].find().lean();
    return factions.map(faction => faction.name);
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      'Keys-F4': this.openMenu.bind(this)
    });
    mp.events.subscribe({
      'Admin-Ban': this.ban.bind(this),
      'Admin-Unban': this.unban.bind(this),
      'Admin-Kick': this.kick.bind(this),
      'Admin-SetFactionLeader': this.setFactionLeader.bind(this),
      'Admin-ChangeMoney': this.changeMoney.bind(this),
      'Admin-SetPlayerSkin': this.setPlayerSkin.bind(this),
      'Admin-CreatePromocode': this.createPromocode.bind(this),
      'Admin-Teleport': this.teleport.bind(this),
      'Admin-CreateVehicle': this.createVehicle.bind(this),
      'Admin-DespawnVehicle': this.despawnVehicle.bind(this),
      'Admin-GetFactions': this.getFactions,
      'Admin-CreateProperty': this.createProperty.bind(this),
      'Admin-SendChatMessage': this.sendChatMessage.bind(this),
      'Admin-NotifyAll': (player, message) => this.notifyAll(message)
    });
    mp.events.addCommand({
      gm: player => {
        if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'helper')) return;
        player.setVariable('AGM', !player.getVariable('AGM'));
        player.call('AGM');
      },
      sp: (player, value) => {
        if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'helper')) return;
        const target = mp.players.getById(parseInt(value, 10));
        rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Admin-Spectate', target);
      },
      esp: player => {
        if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'helper')) return;
        rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Admin-ToggleESP');
      },
      inv: player => {
        if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'helper')) return;
        if (!player.alpha) player.alpha = 255;else player.alpha = 0;
        player.setVariable('invisible', !player.alpha);
      },
      clothes: player => {
        if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'gm')) return;
        rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'ClothesViewer-ShowMenu');
      },
      nick: player => {
        if (!_permissions__WEBPACK_IMPORTED_MODULE_18__["default"].hasPermission(player, 'helper')) return;
        const status = player.getVariable('adminNickname');
        player.setVariable('adminNickname', !status);
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].info(player, status ? 'Статус админа выключен' : 'Статус админа включен');
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Admin());

/***/ }),

/***/ "./src/basic/admin/permissions.ts":
/*!****************************************!*\
  !*** ./src/basic/admin/permissions.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/User */ "./src/models/User.ts");



class AdminPermissions {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "list", void 0);

    this.list = {
      helper: 1,
      admin: 2,
      gm: 3
    };
  }

  hasPermission(player, level) {
    return player.adminLvl >= this.list[level];
  }

  async giveAccess(player, level) {
    await this.setPermission(player, level);
  }

  async withdrawAccess(player) {
    await this.setPermission(player);
  }

  async setPermission(player, level) {
    const index = this.list[level] || 0;
    await models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(player.dbId, {
      $set: {
        adminLvl: index
      }
    });
    player.adminLvl = index;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AdminPermissions());

/***/ }),

/***/ "./src/basic/admin/reports.ts":
/*!************************************!*\
  !*** ./src/basic/admin/reports.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _models_Report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Report */ "./src/models/Report.ts");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat */ "./src/basic/chat.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions */ "./src/basic/admin/permissions.ts");






class Reports {
  constructor() {
    mp.events.subscribe({
      'Admin-GetReports': Reports.getReports.bind(this),
      'Admin-CreateReport': this.create.bind(this),
      'Admin-ReplyOnReport': this.reply.bind(this)
    });
  }

  async create(player, message) {
    const isReported = await Reports.isReported(player.dbId);
    if (isReported) return;
    await _models_Report__WEBPACK_IMPORTED_MODULE_2__["default"].create({
      sender: player.dbId,
      message
    });
    this.notifyAll(message);
  }

  async reply(admin, reportId, message) {
    if (!_permissions__WEBPACK_IMPORTED_MODULE_4__["default"].hasPermission(admin, 'helper')) {
      return mp.events.reject();
    }

    const report = await _models_Report__WEBPACK_IMPORTED_MODULE_2__["default"].findById(reportId);
    const sender = Object(_utils_players__WEBPACK_IMPORTED_MODULE_1__["getPlayerByDbId"])(report === null || report === void 0 ? void 0 : report.sender);
    if (!sender) return mp.events.reject('Игрока нет в сети');
    await report.remove();
    _chat__WEBPACK_IMPORTED_MODULE_3__["default"].sendSystem(`[ADMIN]${admin.getName()}: ${message}`, sender);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].info(sender, 'Администратор ответил на ваш репорт. Проверьте игровой чат!');
  }

  static async isReported(sender) {
    const count = await _models_Report__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      sender
    }).countDocuments();
    return count >= 3;
  }

  static async getReports(player, page) {
    const data = await _models_Report__WEBPACK_IMPORTED_MODULE_2__["default"].find({
      admin: {
        $exists: false
      }
    }).skip(page * 20).limit(20).sort({
      _id: -1
    }).populate({
      path: 'sender',
      select: 'uid firstName lastName'
    }).lean();
    return data.map(item => {
      const {
        sender
      } = item;
      return { ...item,
        sender: sender ? `${sender.firstName} ${sender.lastName} #${sender.uid}` : 'Deleted'
      };
    });
  }

  notifyAll(message) {
    mp.players.forEach(player => _permissions__WEBPACK_IMPORTED_MODULE_4__["default"].hasPermission(player, 'helper') && _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].info(player, message));
  }

}

const reports = new Reports();

/***/ }),

/***/ "./src/basic/auth/auth.ts":
/*!********************************!*\
  !*** ./src/basic/auth/auth.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

class Auth {
  hashPassword(text) {
    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0__["createCipher"]('aes192', 'a pass');
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

}

/***/ }),

/***/ "./src/basic/auth/index.ts":
/*!*********************************!*\
  !*** ./src/basic/auth/index.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/basic/auth/login.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "./src/basic/auth/register.ts");



/***/ }),

/***/ "./src/basic/auth/login.ts":
/*!*********************************!*\
  !*** ./src/basic/auth/login.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./src/basic/auth/auth.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player */ "./src/basic/player/index.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ "./src/basic/auth/token.ts");








class Login extends _auth__WEBPACK_IMPORTED_MODULE_3__["default"] {
  checkExpiresBanDate(date) {
    if (moment__WEBPACK_IMPORTED_MODULE_0__(date).valueOf() > moment__WEBPACK_IMPORTED_MODULE_0__().valueOf()) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('DD.MM.YYYY HH:mm');
    }
  }

  isPlayingNow(email) {
    return mp.players.toArray().findIndex(item => item.dbId && item.email === email) >= 0;
  }

  isRecognizedDevice(player, serial, social) {
    return social === player.socialClub && serial === player.serial;
  }

  async checkBan(player, user) {
    let {
      ban
    } = user;
    if (ban && Object.keys(ban).length === 0) return false;
    const expiresDate = this.checkExpiresBanDate(ban.term);

    if (expiresDate || ban.perm) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, `Вы забанены! Причина: ${ban.reason}. Бан истекает: ${ban.perm ? 'Никогда' : expiresDate}`);
      player.kick(ban.reason);
      return true;
    }

    ban = null;
    await user.save();
    return false;
  }

  async loadUser(player, user) {
    await _player__WEBPACK_IMPORTED_MODULE_4__["default"].loadAccount(player, user);
    user.loginAt = Date.now();
    user.ip = player.ip;
    user.serial = player.serial;
    user.socialClub = player.socialClub;
    await user.save();
    player.loggedIn = true;
    mp.events.call('Auth-SuccessLogin', player);
  }

  async tryLoginWithCode(player, email, code) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    });

    if (!user || !_token__WEBPACK_IMPORTED_MODULE_6__["default"].isValid(user.token, code)) {
      return Promise.reject(new Error());
    }

    user.token = null;
    this.loadUser(player, user);
  }

  async sendRecoveryCode(email) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    });
    if (!user) return Promise.reject(new Error());
    _token__WEBPACK_IMPORTED_MODULE_6__["default"].send('recovery', email);
  }

  async checkRecoveryCode(player, email, code) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    });
    player.token = code;
    return user && _token__WEBPACK_IMPORTED_MODULE_6__["default"].isValid(user.token, code);
  }

  async resetPassword(player, email, password) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    });

    if (!user || !_token__WEBPACK_IMPORTED_MODULE_6__["default"].isValid(user.token, player.token)) {
      return Promise.reject(new Error());
    }

    user.password = this.hashPassword(password);
    user.token = null;
    user.save();
  }

  async tryLogin(player, email, password) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email: new RegExp(`^${email}$`, 'i')
    });

    if (!user) {
      return Promise.reject({
        field: 'email',
        message: 'Аккаунт не существует'
      });
    }

    const hash = await this.hashPassword(password);

    if (user.password !== hash) {
      return Promise.reject({
        field: 'password',
        message: 'Неверный пароль!'
      });
    }

    if (await this.checkBan(player, user)) return;
    const account = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      serial: player.serial
    });
    if (account && (await this.checkBan(player, account))) return;
    if (this.isPlayingNow(email)) return player.kick('');

    if (!this.isRecognizedDevice(player, user.serial, user.socialClub)) {
      await _token__WEBPACK_IMPORTED_MODULE_6__["default"].send('login', email);
      return Promise.reject(new Error());
    }

    this.loadUser(player, user);
  }

}

const login = new Login();
mp.events.subscribe({
  'Auth-TryLogin': (player, email, password) => login.tryLogin(player, email, password),
  'Auth-TryLoginWithCode': (player, email, code) => login.tryLoginWithCode(player, email, code),
  'Auth-GetRecoveryCode': (player, email) => login.sendRecoveryCode(email),
  'Auth-CheckCode': (player, email, code) => login.checkRecoveryCode(player, email, code),
  'Auth-ResetPassword': (player, email, password) => login.resetPassword(player, email, password)
}, false);
mp.events.subscribeToDefault({
  playerReady: player => rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Auth-ShowLoginWindow')
});

/***/ }),

/***/ "./src/basic/auth/register.ts":
/*!************************************!*\
  !*** ./src/basic/auth/register.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_spawn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/spawn */ "./src/data/spawn.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./src/basic/auth/auth.ts");
/* harmony import */ var _referal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../referal */ "./src/basic/referal.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");








class Register extends _auth__WEBPACK_IMPORTED_MODULE_3__["default"] {
  async tryCreateAccount(player, email, firstName, lastName, password, password2) {
    if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email)) {
      return Promise.reject({
        field: 'email',
        message: 'Указан некорректный email!'
      });
    }

    let isExist = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      socialClub: player.socialClub
    }).countDocuments();

    if (isExist) {
      return Promise.reject({
        field: 'email',
        message: 'Вы уже регистрировали аккаунт!'
      });
    }

    isExist = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    }).countDocuments();

    if (isExist) {
      return Promise.reject({
        field: 'email',
        message: 'Этот email уже используется'
      });
    }

    const error = await Object(_utils_validation__WEBPACK_IMPORTED_MODULE_5__["validateName"])(firstName, lastName);
    if (error) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, error);

    if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(password, {
      min: 4
    })) {
      return Promise.reject({
        field: 'password',
        message: 'Минимальная длина пароля 4 символа'
      });
    }

    if (password !== password2) {
      return Promise.reject({
        field: 'password',
        message: 'Пароли не совпадают!'
      });
    }

    const user = await new _models_User__WEBPACK_IMPORTED_MODULE_2__["default"]({
      firstName,
      lastName,
      email,
      socialClub: player.socialClub,
      ip: player.ip,
      serial: player.serial,
      password: this.hashPassword(password),
      position: _data_spawn__WEBPACK_IMPORTED_MODULE_1__["default"],
      money: {
        cash: 1000000
      } // Деньги при регистрации

    }).save();
    await _referal__WEBPACK_IMPORTED_MODULE_4__["default"].createRandomCode(user._id);
  }

}

const register = new Register();
mp.events.subscribe({
  'Auth-TryCreateAccount': (player, email, firstName, lastName, password, password2) => register.tryCreateAccount(player, email, firstName, lastName, password, password2)
}, false);

/***/ }),

/***/ "./src/basic/auth/token.ts":
/*!*********************************!*\
  !*** ./src/basic/auth/token.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/escape */ "lodash/escape");
/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_escape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _utils_mailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/mailer */ "./src/utils/mailer.ts");





class AuthToken {
  isValid(token, code) {
    return token && token.code === lodash_escape__WEBPACK_IMPORTED_MODULE_0___default()(code) && moment__WEBPACK_IMPORTED_MODULE_1__().diff(token.expiresDate, 'minutes') < 0;
  }

  async send(type, email) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    });
    if (!user || !user.token || this.isValid(user.token, user.token.code)) return;
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
      email
    }, {
      $set: {
        token: {
          code,
          expiresDate: Date.now() + 300000
        }
      }
    });
    _utils_mailer__WEBPACK_IMPORTED_MODULE_3__["default"].sendMail(email, type === 'login' ? 'Вход с неизвестного устройства' : 'Восстановление пароля', type === 'login' ? `Код для подтверждения авторизации: ${code}` : `Код восстановления: ${code}`);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthToken());

/***/ }),

/***/ "./src/basic/building.ts":
/*!*******************************!*\
  !*** ./src/basic/building.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Building; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");



class Building {
  constructor(data) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "outPos", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "inPos", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "blipData", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "markerData", void 0);

    this.name = data.name;
    this.outPos = data.outPos;
    this.inPos = data.inPos;
    this.blipData = data.blipData;
    this.markerData = data.markerData;
    this.createMainEntities();
  }

  getEntranceCoords() {
    const {
      x,
      y,
      z
    } = this.outPos;
    return new mp.Vector3(x, y, z);
  }

  tryToEnter(player) {
    if (player.dist(this.getEntranceCoords()) <= 3) player.tp(this.inPos);else player.tp(this.outPos);
  }

  createDoorShape({
    model,
    x,
    y,
    z
  }) {
    const doorShape = mp.colshapes.newSphere(x, y, z, 1.2);
    doorShape.doorId = model;
    doorShape.pos = {
      x,
      y,
      z
    };
  }

  enteredEntranceShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
  }

  enteredExitShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
  }

  createEntrance() {
    const {
      x,
      y,
      z
    } = this.outPos;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.outPos, this.markerData.radius, {
      onEnter: this.enteredEntranceShape.bind(this),
      onKeyPress: this.tryToEnter.bind(this),
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), this.markerData.radius, {
      color: this.markerData.color,
      visible: true
    });
  }

  createExit() {
    const {
      x,
      y,
      z
    } = this.inPos;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.inPos, this.markerData.radius, {
      onEnter: this.enteredExitShape.bind(this),
      onKeyPress: this.tryToEnter.bind(this),
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), this.markerData.radius, {
      color: this.markerData.color,
      visible: true
    });
  }

  createMainEntities() {
    if (this.inPos) {
      this.createEntrance();
      this.createExit();
    }

    const {
      x,
      y,
      z
    } = this.outPos;
    mp.blips.new(this.blipData.model, new mp.Vector3(x, y, z), {
      name: this.name,
      shortRange: true,
      scale: 1.2,
      color: this.blipData.color
    });
  }

}

/***/ }),

/***/ "./src/basic/chat.ts":
/*!***************************!*\
  !*** ./src/basic/chat.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./src/basic/time.ts");



class Chat {
  constructor() {
    mp.events.subscribeToDefault({
      playerChat: this.sendChatMessage.bind(this)
    });
  }

  sendSystem(message, player) {
    const text = `!{242,19,37}${message}`;
    if (player) this.sendToPlayer(player, 'near', text);else this.sendToAll(text);
  }

  sendChatMessage(player, data) {
    const {
      type,
      message
    } = JSON.parse(data);
    const color = player.getVariable('inMask') ? [255, 255, 255] : player.chatColor;
    const time = _time__WEBPACK_IMPORTED_MODULE_1__["default"].getTime();
    const text = `!{${color}}[${time}] ${player.name}: ${message}`;
    if (type === 'faction') this.sendToFaction(player, text);else this.sayNear(player, text);
  }

  sayNear(player, message) {
    mp.players.forEachInRange(player.position, 100, entity => this.sendToPlayer(entity, 'near', message));
  }

  sendToAll(message) {
    mp.players.forEach(player => this.sendToPlayer(player, 'near', message));
  }

  sendToFaction(player, message) {
    if (!player.faction || !player.faction.name) return;
    const players = mp.players.toArray();
    players.forEach(item => {
      if (!item.faction) return;
      if (!item.faction.name || player.faction.name !== item.faction.name) return;
      this.sendToPlayer(item, 'faction', message);
    });
  }

  sendToPlayer(player, type, message) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'chatMessage', [type, message]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Chat());

/***/ }),

/***/ "./src/basic/cityhall/cityHallBuilding.ts":
/*!************************************************!*\
  !*** ./src/basic/cityhall/cityHallBuilding.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../building */ "./src/basic/building.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");




class CityHallBuilding extends _building__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const info = {
      name: 'Мэрия',
      blipData: {
        model: 419,
        color: 37
      },
      markerData: {
        radius: 0.75,
        color: [58, 226, 206, 85]
      },
      outPos: {
        x: 230.0961456298828,
        y: 214.58436584472656,
        z: 105.55398559570312
      },
      inPos: {
        x: 233.93283081054688,
        y: 216.17578125,
        z: 106.28671264648438
      }
    };
    super(info);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "entities", void 0);

    this.entities = {
      //Метки в Мерии
      licenses: {
        x: 242.88784790039062,
        y: 223.89781188964844,
        z: 106.28681945800781,
        color: [58, 226, 206, 75]
      },
      card: {
        x: 251.9730682373047,
        y: 220.93588256835938,
        z: 106.28668975830078,
        color: [255, 234, 95, 75]
      },
      passport: {
        x: 246.36061096191406,
        y: 222.77207946777344,
        z: 106.28681945800781,
        color: [186, 85, 211, 75]
      }
    };
    this.createEntities();
  }

  createEntities() {
    Object.keys(this.entities).forEach(name => {
      const {
        x,
        y,
        z,
        color
      } = this.entities[name];
      mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
        color,
        visible: true
      });
      const shape = mp.colshapes.newSphere(x, y, z, 0.75);
      shape.name = name;
    });
  }

}

const building = new CityHallBuilding();
/* harmony default export */ __webpack_exports__["default"] = (building);
mp.events.add({
  playerEnterColshape: (player, shape) => {
    if (!player.loggedIn) return;
    const {
      name
    } = shape;

    if (building.entities[name]) {
      player.canOpen.cityHall = name;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
    }
  },
  playerExitColshape: (player, shape) => {
    if (!player.loggedIn) return;
    const {
      name
    } = shape;
    if (building.entities[name]) delete player.canOpen.cityHall;
  }
});

/***/ }),

/***/ "./src/basic/cityhall/index.ts":
/*!*************************************!*\
  !*** ./src/basic/cityhall/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _cityHallBuilding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cityHallBuilding */ "./src/basic/cityhall/cityHallBuilding.ts");







class CityHall {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      licenses: {
        car: 2000,
        truck: 6000,
        motorcycle: 4000,
        gun: 100000,
        house: 500000,
        business: 250000,
        gold: 15000,
        diver: 10000,
        processing: 35000,
        boat: 30000,
        air: 100000,
        fishing: 120000
      },
      card: 1000,
      passport: 50
    };
  }

  openMenu(player, type) {
    const licenses = type === 'licenses' ? player.licenses : null;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'CityHall-ShowMenu', [type, this.prices[type], licenses]);
  }

  async generateCardNumber() {
    let number;

    do {
      const cardNumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000); // eslint-disable-next-line no-await-in-loop

      const isExists = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
        cardNumber
      }).countDocuments();
      if (!isExists) number = cardNumber;
    } while (!number);

    return number;
  }

  async buyCard(player) {
    try {
      if (player.cardNumber) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'У вас уже есть банковский счет!');
      }

      await player.moneyHelper.different(this.prices.card, 'card');
      const cardNumber = await this.generateCardNumber();
      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          cardNumber
        }
      });
      player.cardNumber = cardNumber;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  getFinalPrice(licenses) {
    let finalPrice = 0;
    licenses.forEach(name => {
      const price = this.prices.licenses[name];
      finalPrice += price;
    });
    return finalPrice;
  }

  async buyLicenses(player, licenses) {
    try {
      const cost = this.getFinalPrice(licenses);
      await player.moneyHelper.different(cost, 'licenses');
      licenses.forEach(name => player.licenses.push({
        name,
        legal: true
      }));
      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          licenses: player.licenses
        }
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
      return player.licenses;
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

  async changeDocs(player, {
    firstName,
    lastName
  }) {
    try {
      const error = await Object(_utils_validation__WEBPACK_IMPORTED_MODULE_3__["validateName"])(firstName, lastName);
      if (error) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, error);
      const canBuy = await player.moneyHelper.change(-this.prices.passport, 'drivepoints', 'change name');

      if (!canBuy) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Недостаточно средств!');
        return Promise.reject();
      }

      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          firstName,
          lastName
        }
      });
      player.setVariable('realName', `${firstName} ${lastName}`);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

}

const cityHall = new CityHall();
mp.events.subscribe({
  'CityHall-BuyLicenses': (player, ...basket) => cityHall.buyLicenses(player, basket),
  'CityHall-BuyCard': player => cityHall.buyCard(player),
  'CityHall-BuyDocs': (player, data) => cityHall.changeDocs(player, data)
});
mp.events.subscribeToDefault({
  'Keys-E': player => {
    if (!player.canOpen.cityHall) return;
    cityHall.openMenu(player, player.canOpen.cityHall);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (cityHall);

/***/ }),

/***/ "./src/basic/donation.ts":
/*!*******************************!*\
  !*** ./src/basic/donation.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _prison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prison */ "./src/basic/prison.ts");




const moneyItems = {
  '100k': 100000,
  '1kk': 1000000,
  '5kk': 5000000
};
const prices = {
  '100k': 100,
  '1kk': 1000,
  '5kk': 5000,
  escape: 250,
  vehicleSlot: 500
};

class Donation {
  constructor() {
    mp.events.subscribe({
      'Donation-GetMultiplier': this.getMultiplier,
      'Donation-ShowMenu': this.showMenu,
      'Donation-Buy': this.buy.bind(this)
    });
  }

  getMultiplier() {
    return parseInt(process.env.DONATION_MULTIPLIER, 10);
  }

  showMenu(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Donation-ShowMenu', prices);
  }

  async buy(player, product) {
    try {
      switch (product) {
        case 'escape':
          await this.escapeFromPrison(player);
          break;

        case 'wanted':
          await this.clearWanted(player);
          break;

        case 'vehicleSlot':
          await this.addVehicleSlot(player);
          break;

        default:
          await this.giveMoney(player, product);
          break;
      }

      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

  async addVehicleSlot(player) {
    const canBuy = await player.moneyHelper.change(-prices.vehicleSlot, 'drivepoints', 'vehicle slot');

    if (!canBuy) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Недостаточно средств!');
      return Promise.reject();
    }

    await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(player.dbId, {
      $inc: {
        vehicleSlots: 1
      }
    });
    player.vehicleSlots += 1;
  }

  async clearWanted(player) {
    if (!_prison__WEBPACK_IMPORTED_MODULE_3__["default"].getViolator(player.id) || player.getVariable('insideJail')) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Вас не розыскивают!');
      return Promise.reject();
    }

    const canBuy = await player.moneyHelper.change(-prices.wanted, 'drivepoints', 'clear wanted');

    if (!canBuy) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Недостаточно средств!');
      return Promise.reject();
    }

    await _prison__WEBPACK_IMPORTED_MODULE_3__["default"].deleteViolator(player);
  }

  async escapeFromPrison(player) {
    const violator = _prison__WEBPACK_IMPORTED_MODULE_3__["default"].getViolator(player.id);

    if (!violator || !violator.inside) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Вы не находитесь в заключении!');
      return Promise.reject();
    }

    const canBuy = await player.moneyHelper.change(-prices.escape, 'drivepoints', 'escape from prison');

    if (!canBuy) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Недостаточно средств!');
      return Promise.reject();
    }

    await _prison__WEBPACK_IMPORTED_MODULE_3__["default"].deleteViolator(player);
    _prison__WEBPACK_IMPORTED_MODULE_3__["default"].releaseViolator(player);
  }

  async giveMoney(player, item) {
    const amount = moneyItems[item];
    if (!amount) return Promise.reject();
    const canBuy = await player.moneyHelper.change(-prices[item], 'drivepoints', 'buy money');

    if (!canBuy) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Недостаточно средств!');
      return Promise.reject();
    }

    await player.moneyHelper.change(amount, 'bank', 'donation');
  }

}

const donation = new Donation();

/***/ }),

/***/ "./src/basic/forbes.ts":
/*!*****************************!*\
  !*** ./src/basic/forbes.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");



class Forbes {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "members", void 0);

    this.members = [];
    this.subscribeToEvents();
  }

  async loadMembers() {
    const users = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].find({
      adminLvl: 0
    }).sort({
      'money.bank': -1
    }).limit(5).select({
      firstName: 1,
      lastName: 1,
      _id: 0
    });
    users.forEach(user => {
      const member = `${user.firstName} ${user.lastName}`;
      this.members.push(member);
    });
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      databaseConnected: this.loadMembers.bind(this)
    });
    mp.events.subscribe({
      'Forbes-GetMembers': () => this.members
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Forbes());

/***/ }),

/***/ "./src/basic/inventory.ts":
/*!********************************!*\
  !*** ./src/basic/inventory.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inventory; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");



class Inventory {
  constructor(name) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "thingSlots", void 0);

    this.name = name;
    this.thingSlots = {
      food: 2,
      fish: 1,
      rod: 1,
      fish_bait: 1,
      weapons: 6,
      jerrycan: 2,
      repairKit: 2,
      medication: 1,
      lockPick: 1,
      ammo: 1,
      resources: 1,
      pineapple: 2,
      gold: 10,
      pickaxe: 4
    };
  }

  getItem(inventory, name) {
    const item = inventory.find(thing => thing.name === name);
    return item;
  }

  getItemByIndex(inventory, index) {
    return inventory[index];
  }

  removeItem(inventory, item) {
    const index = inventory.findIndex(thing => thing === item);
    inventory.splice(index, 1);
  }

  getCurrentSlots(inventory) {
    let slots = 0;
    inventory.forEach(thing => {
      if (this.thingSlots[thing.name]) {
        slots += this.thingSlots[thing.name] * thing.count;
      } else if (this.thingSlots[thing.type]) {
        slots += this.thingSlots[thing.type] * thing.count;
      }
    });
    return slots;
  }

  getMaxSlots(player) {}

  isEnoughSlots(player, inventory, thing, count) {
    const currentSlots = this.getCurrentSlots(inventory);
    const maxSlots = this.getMaxSlots(player);
    const freeSlots = maxSlots - currentSlots;
    let slots;

    if (this.thingSlots[thing.name]) {
      slots = this.thingSlots[thing.name] * count;
    } else if (this.thingSlots[thing.type]) {
      slots = this.thingSlots[thing.type] * count;
    }

    if (freeSlots < slots) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Недостаточно места в инвентаре!');
      return false;
    }

    return true;
  }

  isEnoughSlotsForItems(player, inventory, items) {
    const currentSlots = this.getCurrentSlots(inventory);
    const maxSlots = this.getMaxSlots(player);
    const freeSlots = maxSlots - currentSlots;
    return freeSlots >= this.getCurrentSlots(items);
  }

  async updateInventoryInDb(dbId, inventory) {}

  decItemCount(player, inventory, item, count = 1) {
    return new Promise((resolve, reject) => {
      if (item.type === 'ammo' && player.currentWeapon) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Уберите из рук оружие');
        return reject();
      }

      if (item.count < count || count <= 0) return reject();
      if (item.hasOwnProperty('count') && item.count > count) item.count -= count;else this.removeItem(inventory, item);
      resolve();
    });
  }

  addItem(player, inventory, item) {
    return new Promise(async (resolve, reject) => {
      const thing = this.getItem(inventory.items, item.name);
      if (thing && thing.hasOwnProperty('count')) thing.count += item.count;else if (thing) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Вы можете хранить только один предмет данного типа');
        return reject();
      } else inventory.items.push(item);

      if (!item.temp) {
        await this.updateInventoryInDb(inventory.dbId, inventory.items);
      }

      resolve();
    });
  }

  async swapItems(inventory, picked, target) {
    const pickedItem = this.getItemByIndex(inventory, picked);
    const targetItem = this.getItemByIndex(inventory, target);
    if (!pickedItem || !targetItem) throw new Error('item for swap does not exists');
    [inventory[picked], inventory[target]] = [inventory[target], inventory[picked]];
  }

  async moveItem(player, inventory, from, name, count) {
    try {
      if (count < 0) return Promise.reject();

      if (from !== 'default') {
        let item = this.getItem(inventory.items, name);
        if (item.used || !player.isEnoughSlots({ ...item,
          ...(item.count && {
            count
          })
        })) return Promise.reject();
        await this.decItemCount(player, inventory.items, item, count);
        await this.updateInventoryInDb(inventory.dbId, inventory.items);
        item = { ...item,
          ...(item.count && {
            count
          })
        };
        await player.addToInventory(item);
      } else {
        let item = this.getItem(player.inventory, name);
        if (item.used || !this.isEnoughSlots(player, inventory.items, item, count)) return Promise.reject();
        await this.decItemCount(player, player.inventory, item, count);
        await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(player.dbId, {
          $set: {
            inventory: player.inventory
          }
        });
        item = { ...item,
          ...(item.count && {
            count
          })
        };
        await this.addItem(player, inventory, item);
      }

      return {
        items: player.inventory,
        storageItems: inventory.items,
        occupiedSlots: this.getCurrentSlots(player.inventory),
        occupiedStorageSlots: this.getCurrentSlots(inventory.items)
      };
    } catch (err) {
      return Promise.reject();
    }
  }

}

/***/ }),

/***/ "./src/basic/object-cleaner.ts":
/*!*************************************!*\
  !*** ./src/basic/object-cleaner.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ObjectCleaner {
  isInventoryItem(shape) {
    return !!shape.thing;
  }

  clear() {
    mp.colshapes.forEach(item => {
      try {
        if (!this.isInventoryItem(item)) return;
        const {
          shape,
          object,
          label
        } = item.thing.obj;
        const shapeItem = mp.colshapes.at(shape);
        const labelItem = mp.labels.at(label);
        const objectItem = mp.objects.at(object);
        if (shapeItem) shapeItem.destroy();
        if (labelItem) labelItem.destroy();
        if (objectItem) objectItem.destroy();
      } catch (err) {
        console.log(err, 'object cleaner err');
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ObjectCleaner());

/***/ }),

/***/ "./src/basic/payday.ts":
/*!*****************************!*\
  !*** ./src/basic/payday.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _factions_faction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factions/faction */ "./src/factions/faction.ts");
/* harmony import */ var _property_house__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../property/house */ "./src/property/house/index.ts");
/* harmony import */ var _property_business__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property/business */ "./src/property/business/index.ts");





class Payday {
  trigger(bonus = false) {
    this.processPlayers(bonus);
  }

  getTaxes() {
    _property_house__WEBPACK_IMPORTED_MODULE_2__["default"].taxEvent();
    _property_business__WEBPACK_IMPORTED_MODULE_3__["default"].taxEvent();
  }

  processPlayers(bonus) {
    mp.players.forEach(player => {
      try {
        var _player$faction;

        if (!mp.players.exists(player)) return;

        if (player.paydayTime < 10) {
          return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].info(player, 'Для получения пейдея, нужно наиграть минимум 10 мин');
        }

        player.paydayTime = 0;
        const faction = _factions_faction__WEBPACK_IMPORTED_MODULE_1__["factions"][(_player$faction = player.faction) === null || _player$faction === void 0 ? void 0 : _player$faction.name];
        if (faction) this.giveFactionSalary(player, faction, bonus);else if (!player.job) this.giveUnemploymentBenefits(player);
      } catch (e) {
        console.log(e, 'payday error');
      }
    });
  }

  async giveUnemploymentBenefits(player) {
    await player.moneyHelper.change(10000, 'bank', 'unemployment benefits');
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].show(player, 'Уведомление', 'FLEECA BANK', 'Вы получили пособие по безработице в размере $10000', 'CHAR_BANK_FLEECA', 9);
  }

  async giveFactionSalary(player, faction, bonus) {
    if (!faction.isWorking(player)) return;
    const salary = faction.getSalaryOfRank(player.faction.rank - 1);
    const award = faction.government && bonus ? salary * 0.5 : 0;
    const sum = salary + award;
    await player.moneyHelper.change(sum, 'bank', 'faction salary');
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].show(player, 'Уведомление', 'FLEECA BANK', `Вы заработали $${sum}! Продолжайте в том же духе!`, 'CHAR_BANK_FLEECA', 9);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Payday());

/***/ }),

/***/ "./src/basic/phone/calls.ts":
/*!**********************************!*\
  !*** ./src/basic/phone/calls.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");



class PhoneCalls {
  constructor() {
    this.subscribeToEvents();
  }

  call(player, phoneNumber) {
    if (!player.phone.number || player.phone.number === phoneNumber) {
      return Promise.reject();
    }

    const recipient = mp.players.toArray().find(item => item.loggedIn && item.phone.number === phoneNumber);

    if (!mp.players.exists(recipient) || recipient.phone.blackList.indexOf(player.phone.number) >= 0) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].error(player, 'Абонент временно недоступен!');
      return Promise.reject();
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callBrowsers"](recipient, 'Phone-IncomingCall', player.phone.number);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].info(recipient, 'Входящий звонок, проверьте телефон!');
  }

  acceptCall(player, phoneNumber) {
    const caller = mp.players.toArray().find(item => item.loggedIn && item.phone.number === phoneNumber);
    if (!mp.players.exists(caller)) return Promise.reject();
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](caller, 'Phone-AcceptCall', player);
    return caller;
  }

  declineCall(player, phoneNumber) {
    const caller = mp.players.toArray().find(item => item.loggedIn && item.phone.number === phoneNumber);
    if (mp.players.exists(caller)) rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](caller, 'Phone-DeclineCall');
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Phone-Call': this.call.bind(this),
      'Phone-AcceptCall': this.acceptCall.bind(this),
      'Phone-DeclineCall': this.declineCall.bind(this)
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PhoneCalls());

/***/ }),

/***/ "./src/basic/phone/contacts.ts":
/*!*************************************!*\
  !*** ./src/basic/phone/contacts.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");




class PhoneContacts {
  constructor() {
    this.subscribeToEvents();
  }

  getContact(player, phoneNumber) {
    return player.phone.contacts.find(({
      phone
    }) => phone === phoneNumber);
  }

  async addContact(player, data) {
    if (!player.phone.number || !validator__WEBPACK_IMPORTED_MODULE_0__["isLength"](data.phone, {
      min: 6,
      max: 6
    })) {
      return Promise.reject();
    }

    if (this.getContact(player, data.phone)) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].error(player, 'Контакт с таким номером уже существует!');
      return Promise.reject();
    }

    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
      $push: {
        'phone.contacts': data
      }
    });
    player.phone.contacts.push(data);
  }

  async editContact(player, data) {
    if (!player.phone.number || !validator__WEBPACK_IMPORTED_MODULE_0__["isLength"](data.phone, {
      min: 6,
      max: 6
    })) {
      return Promise.reject();
    }

    if (this.getContact(player, data.phone)) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].error(player, 'Контакт с таким номером уже существует!');
      return Promise.reject();
    }

    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
      _id: player.dbId,
      'phone.contacts.phone': data.phone
    }, {
      $set: {
        'phone.contacts.$': data
      }
    });
    player.phone.contacts[player.phone.contacts.findIndex(item => item.phone === data.phone)] = data;
  }

  async deleteContact(player, phoneNumber) {
    const index = player.phone.contacts.findIndex(contact => {
      return contact.phone === phoneNumber;
    });
    if (index < 0) return Promise.reject();
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
      $pull: {
        'phone.contacts': {
          phone: phoneNumber
        }
      }
    });
    player.phone.contacts.splice(index, 1);
  }

  async unblockContact(player, phoneNumber) {
    const index = player.phone.blackList.indexOf(phoneNumber);
    if (index < 0) return Promise.reject();
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
      $pull: {
        'phone.blackList': phoneNumber
      }
    });
    player.phone.blackList.splice(index, 1);
  }

  async blockContact(player, phoneNumber) {
    const index = player.phone.blackList.indexOf(phoneNumber);
    if (index >= 0) return Promise.reject();
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
      $push: {
        'phone.blackList': phoneNumber
      }
    });
    player.phone.blackList.push(phoneNumber);
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Phone-AddContact': this.addContact.bind(this),
      'Phone-EditContact': this.editContact.bind(this),
      'Phone-DeleteContact': this.deleteContact.bind(this),
      'Phone-BlockContact': this.blockContact.bind(this),
      'Phone-UnblockContact': this.unblockContact.bind(this)
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PhoneContacts());

/***/ }),

/***/ "./src/basic/phone/index.ts":
/*!**********************************!*\
  !*** ./src/basic/phone/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_objects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/objects */ "./src/helpers/objects.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _weapons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../weapons */ "./src/basic/weapons/index.ts");
/* harmony import */ var _forbes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forbes */ "./src/basic/forbes.ts");
/* harmony import */ var _calls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calls */ "./src/basic/phone/calls.ts");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contacts */ "./src/basic/phone/contacts.ts");















class Phone {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicleTimeout", void 0);

    this.prices = {
      spawnVehicle: 100,
      randomNumber: 4000,
      customNumber: 1000
    };
    this.vehicleTimeout = 5;
  }

  canSpawnVehicle(player, dbId) {
    const vehicles = Object.keys(player.vehicles);

    if (vehicles.indexOf(dbId) >= player.vehicleSlots && player.vehicleSlots < vehicles.length) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Для вызова данного авто, приобретите дом классом выше или гараж!');
    }

    return true;
  }

  async spawnPersonalVehicle(player, dbId) {
    try {
      if (player.carDelivery || !dbId || !this.canSpawnVehicle(player, dbId)) return;
      const data = player.vehicles[dbId];
      const vehicle = lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.id) ? mp.vehicles.at(data.id) : null;
      if (vehicle && vehicle.name !== (data === null || data === void 0 ? void 0 : data.name) || (data === null || data === void 0 ? void 0 : data.type) === 'boat' || (data === null || data === void 0 ? void 0 : data.type) === 'air') return;

      if (vehicle && vehicle.getOccupants().length) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'В вашем ТС сидит пассажир!');
      }

      await player.moneyHelper.different(this.prices.spawnVehicle);
      const position = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_5__["xyInFrontOfPos"])(player.position, player.heading, 3.0);
      setTimeout(() => {
        if (!mp.players.exists(player)) return;

        if (mp.vehicles.exists(vehicle) && vehicle.getOccupants().length) {
          player.carDelivery = false;
          return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'В ваше ТС кто-то сел...');
        }

        _vehicle__WEBPACK_IMPORTED_MODULE_9__["default"].spawnPlayerVehicle(player, dbId, position);
        player.carDelivery = false;
      }, this.vehicleTimeout * 500);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].info(player, `Механик доставит ваше ТС через ${this.vehicleTimeout} секунд`);
      player.carDelivery = true;
    } catch (err) {
      return Promise.reject();
    }
  }

  async showPhoneMenu(player) {
    const canOpen = await rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](player, 'Phone-CanOpen');
    if (!canOpen || player.cuff || player.getVariable('isPlayingAnim')) return;
    _utils_animations__WEBPACK_IMPORTED_MODULE_8__["default"].playOnServer(player, 'phone_press');
    _helpers_objects__WEBPACK_IMPORTED_MODULE_7__["default"].attach(player, 'phone');
    _weapons__WEBPACK_IMPORTED_MODULE_10__["default"].hideCurrentWeapon(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](player, 'Phone-ShowMenu');
  }

  async buyRandomNumber(player) {
    try {
      await player.moneyHelper.different(this.prices.randomNumber, 'phone number');
      const phoneNumber = await this.generatePhoneNumber();
      await this.setNewNumber(player, phoneNumber);
      return phoneNumber;
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

  async buyCustomNumber(player, phoneNumber) {
    try {
      if (!validator__WEBPACK_IMPORTED_MODULE_2__["isLength"](phoneNumber, {
        min: 6,
        max: 6
      }) || !phoneNumber.match(/^[0-9]+$/)) {
        return Promise.reject(new Error());
      }

      const isExists = await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].find({
        'phone.number': phoneNumber
      }).countDocuments();

      if (isExists) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Данный номер занят!');
        return Promise.reject(new Error());
      }

      const canBuy = await player.moneyHelper.change(-this.prices.customNumber, 'drivepoints', 'custom phone number');

      if (!canBuy) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Недостаточно средств!');
        return Promise.reject();
      }

      await this.setNewNumber(player, phoneNumber);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Успешная покупка!');
      return phoneNumber;
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

  getPhoneData(player) {
    const {
      number: phoneNumber,
      contacts,
      blackList: blacklist
    } = player.phone;
    return {
      phoneNumber,
      contacts,
      blacklist
    };
  }

  async setNewNumber(player, phoneNumber) {
    await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(player.dbId, {
      $set: {
        'phone.number': phoneNumber
      }
    });
    player.phone.number = phoneNumber;
  }

  async generatePhoneNumber() {
    let phoneNumber;

    do {
      const str = Math.floor(100000 + Math.random() * 900000).toString();
      const isExists = await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
        'phone.number': str
      }).countDocuments();
      if (!isExists) phoneNumber = str;
    } while (!phoneNumber);

    return phoneNumber;
  }

}

const phone = new Phone();
mp.events.subscribe({
  'Phone-SpawnVehicle': (player, id) => phone.spawnPersonalVehicle(player, id),
  'Phone-CloseMenu': player => {
    _helpers_objects__WEBPACK_IMPORTED_MODULE_7__["default"].detach(player);
    _utils_animations__WEBPACK_IMPORTED_MODULE_8__["default"].stopOnServer(player);
  },
  'Phone-BuyRandomNumber': player => phone.buyRandomNumber(player),
  'Phone-BuyCustomNumber': (player, number) => phone.buyCustomNumber(player, number),
  'Phone-LoadData': player => phone.getPhoneData(player)
});
mp.events.subscribeToDefault({
  'Keys-M': player => phone.showPhoneMenu(player)
});
/* harmony default export */ __webpack_exports__["default"] = (phone);

/***/ }),

/***/ "./src/basic/player/actions.ts":
/*!*************************************!*\
  !*** ./src/basic/player/actions.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _playerInventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/vehicles */ "./src/utils/vehicles.ts");







class PlayerActions {
  constructor() {
    mp.events.subscribe({
      setActionObject: this.setActionObject,
      toggleHandcuffs: this.toggleHandcuffs.bind(this),
      disableHandcuffs: this.disableHandcuffs.bind(this),
      toggleVehicleSeat: this.toggleVehicleSeat.bind(this),
      toggleHeadSack: this.toggleHeadSack.bind(this),
      disableHeadSack: this.disableHeadSack.bind(this)
    });
  }

  targetIsNear(target, position) {
    return target && target.dist(position) <= 3;
  }

  enableHandcuffs(player, target) {
    if (player.vehicle || !this.targetIsNear(target, player.position) || target.getVariable('isDying')) return;
    target.cuff = true;
    _utils_animations__WEBPACK_IMPORTED_MODULE_2__["default"].playOnServer(target, 'arresting');
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](target, 'Police-TieUp', player);
  }

  disableHandcuffs(player, playerId) {
    if (player.vehicle || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(playerId) || playerId === -1) return;
    const target = mp.players.at(playerId);

    if (this.targetIsNear(target, player.position) && !target.getVariable('isDying')) {
      target.cuff = false;
      rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](target, 'Police-Untie');
      _utils_animations__WEBPACK_IMPORTED_MODULE_2__["default"].stopOnServer(target);
    }
  }

  toggleHandcuffs(player, targetId, callback) {
    if (player.vehicle || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(targetId) || targetId === -1) return;
    const target = mp.players.at(targetId);
    if (!this.targetIsNear(target, player.position)) return;
    if (target.cuff) this.disableHandcuffs(player, target.id);else this.enableHandcuffs(player, target);
    if (callback) callback();
  }

  toggleVehicleSeat(player, targetId) {
    if (player.vehicle) return;

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(targetId) && targetId !== -1) {
      const target = mp.players.at(targetId);
      const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_5__["getNearestVehicleInRange"])(player.position, 3);

      if (vehicle && this.targetIsNear(target, player.position) && !target.getVariable('isDying')) {
        rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](target, 'Police-PutToCar', vehicle);
      }
    } else {
      const target = Object(_utils_players__WEBPACK_IMPORTED_MODULE_4__["getNearestPlayerInRange"])(player.position, 6);

      if (target && target.vehicle && this.targetIsNear(target, player.position)) {
        target.removeFromVehicle();
        this.enableHandcuffs(player, target);
      }
    }
  }

  enableHeadSack(player) {
    if (player.getVariable('isDying')) return;
    player.sack = true;
    player.setClothes(1, 89, 0, 0);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Headsack-SetStatus', true);
  }

  async disableHeadSack(player, playerId) {
    if (player.vehicle || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(playerId) || playerId === -1) return;
    const target = mp.players.at(playerId);

    if (this.targetIsNear(target, player.position) && !target.getVariable('isDying')) {
      target.sack = false;
      await _playerInventory__WEBPACK_IMPORTED_MODULE_3__["default"].takeOffItem(target, 'clothes', 'masks');
      rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](target, 'Headsack-SetStatus', false);
    }
  }

  toggleHeadSack(player, targetId, callback) {
    if (player.vehicle || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(targetId) || targetId === -1) return;
    const target = mp.players.at(targetId);
    if (!this.targetIsNear(target, player.position)) return;
    if (target.sack) this.disableHeadSack(player, target.id);else this.enableHeadSack(target);
    if (callback) callback();
  }

  setActionObject(player, id) {
    player.setVariable('actionObject', id);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PlayerActions());

/***/ }),

/***/ "./src/basic/player/death.ts":
/*!***********************************!*\
  !*** ./src/basic/player/death.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _data_prisonCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/prisonCells */ "./src/data/prisonCells.js");
/* harmony import */ var _data_hospitals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/hospitals */ "./src/data/hospitals.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _factions_ems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../factions/ems */ "./src/factions/ems/index.ts");
/* harmony import */ var _factions_ems_pc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../factions/ems/pc */ "./src/factions/ems/pc.ts");
/* harmony import */ var _prison__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../prison */ "./src/basic/prison.ts");
/* harmony import */ var _hunger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hunger */ "./src/basic/player/hunger.ts");
/* harmony import */ var _playerInventory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions */ "./src/basic/player/actions.ts");














class PlayerDeath {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "deathTimeout", void 0);

    this.deathTimeout = 10 * 60 * 1000;
    mp.events.subscribeToDefault({
      playerDeath: this.onDeath.bind(this)
    });
    mp.events.subscribe({
      'Player-Die': this.death.bind(this)
    });
  }

  spawn(player) {
    const {
      x,
      y,
      z
    } = player.getVariable('insideJail') ? _data_prisonCells__WEBPACK_IMPORTED_MODULE_4__["default"][lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, _data_prisonCells__WEBPACK_IMPORTED_MODULE_4__["default"].length - 1)] : Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getNearestPosition"])(player, _data_hospitals__WEBPACK_IMPORTED_MODULE_5__["default"]);
    player.spawn(new mp.Vector3(x, y, z));
  }

  async onDeath(player, reason, killer) {
    if (player.getVariable('isDying') || player.getVariable('insideJail')) {
      return this.death(player);
    }

    player.spawn(player.position);
    player.health = 100;
    await _actions__WEBPACK_IMPORTED_MODULE_12__["default"].disableHeadSack(player, player.id);
    _actions__WEBPACK_IMPORTED_MODULE_12__["default"].disableHandcuffs(player, player.id);
    _actions__WEBPACK_IMPORTED_MODULE_12__["default"].setActionObject(player, null);
    _utils_animations__WEBPACK_IMPORTED_MODULE_6__["default"].set(player, 'dead');
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Player-ShowDeathMenu', [new Date().toString(), this.deathTimeout, _factions_ems__WEBPACK_IMPORTED_MODULE_7__["default"].getMembers(true).length, killer ? `Вас убил #${killer === null || killer === void 0 ? void 0 : killer.uid}` : 'Потрачено']);
    if (player.deathTimeout) clearTimeout(player.deathTimeout);
    player.deathTimeout = setTimeout(() => this.death(player), this.deathTimeout);
    if (killer) _prison__WEBPACK_IMPORTED_MODULE_9__["default"].onPlayerKnock(player, killer);
    player.setVariable('isDying', true);
  }

  async death(player) {
    try {
      clearTimeout(player.deathTimeout);
      _factions_ems_pc__WEBPACK_IMPORTED_MODULE_8__["default"].deleteCall(player.id);
      _hunger__WEBPACK_IMPORTED_MODULE_10__["default"].reset(player);
      await _playerInventory__WEBPACK_IMPORTED_MODULE_11__["default"].clearInventory(player);
      player.setVariable('isDying', false);
      _utils_animations__WEBPACK_IMPORTED_MODULE_6__["default"].stop(player);
      rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Player-CloseDeathMenu');
      this.spawn(player);
    } catch (err) {
      console.error(err, 'death error');
    }
  }

}

const death = new PlayerDeath();

/***/ }),

/***/ "./src/basic/player/events.ts":
/*!************************************!*\
  !*** ./src/basic/player/events.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _data_spawn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/spawn */ "./src/data/spawn.js");




class PlayerEvents {
  constructor() {
    mp.events.add('playerJoin', this.onJoin);
    mp.events.add('playerQuit', this.onLeave);
    mp.events.subscribe({
      playerCreateWaypoint: this.onSetWaypoint
    });
  }

  onSetWaypoint(player, position) {
    if (!position) return;
    const {
      vehicle
    } = player;
    player.waypoint = position;
    const driver = vehicle && vehicle.getOccupant(-1);
    if (driver && (driver === null || driver === void 0 ? void 0 : driver.id) !== player.id) _helpers_blips__WEBPACK_IMPORTED_MODULE_0__["default"].createWaypoint(driver, position);
  }

  onJoin(player) {
    player.loggedIn = false;
    player.dimension = 1000 + player.id;
    player.spawn(new mp.Vector3(34.58, 856.84, 197.76));
  }

  async onLeave(player) {
    clearTimeout(player.deathTimeout);
    await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(player.dbId, {
      $set: {
        playedTime: player.playedTime,
        paydayTime: player.paydayTime,
        position: player.dimension > 0 ? _data_spawn__WEBPACK_IMPORTED_MODULE_2__["default"] : { ...player.position,
          dimension: player.dimension
        },
        health: player.getVariable('isDying') ? 0 : player.health,
        hunger: player.hunger,
        inventory: player.inventory,
        exitAt: Date.now()
      }
    });
  }

}

const events = new PlayerEvents();

/***/ }),

/***/ "./src/basic/player/forefinger.ts":
/*!****************************************!*\
  !*** ./src/basic/player/forefinger.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

mp.events.add({
  'fpsync.update': (player, camPitch, camHeading) => {
    mp.players.call(player.streamedPlayers, 'fpsync.update', [player.id, camPitch, camHeading]);
  },
  pointingStop: player => player.stopAnimation()
});

/***/ }),

/***/ "./src/basic/player/hunger.ts":
/*!************************************!*\
  !*** ./src/basic/player/hunger.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Hunger {
  decrease(player) {
    if (player.getVariable('AGM') || player.getVariable('insideJail')) return;
    if (player.hunger > 0) this.updatePlayerHunger(player, player.hunger - 0.5);else player.health -= 5;
  }

  reset(player) {
    player.health = 100;
    this.updatePlayerHunger(player, 100);
  }

  updatePlayerHunger(player, hunger) {
    player.hunger = hunger;
    player.dialog.showSatiety(hunger);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Hunger());

/***/ }),

/***/ "./src/basic/player/index.ts":
/*!***********************************!*\
  !*** ./src/basic/player/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_factions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/factions */ "./src/data/factions.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _character_characterCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../character/characterCreator */ "./src/character/characterCreator.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _factions_faction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../factions/faction */ "./src/factions/faction.ts");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _property_house__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../property/house */ "./src/property/house/index.ts");
/* harmony import */ var _property_business__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../property/business */ "./src/property/business/index.ts");
/* harmony import */ var _gangs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../gangs */ "./src/gangs/index.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../time */ "./src/basic/time.ts");
/* harmony import */ var _prison__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../prison */ "./src/basic/prison.ts");
/* harmony import */ var _hunger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hunger */ "./src/basic/player/hunger.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./events */ "./src/basic/player/events.ts");
/* harmony import */ var _death__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./death */ "./src/basic/player/death.ts");
/* harmony import */ var _forefinger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forefinger */ "./src/basic/player/forefinger.ts");
/* harmony import */ var _forefinger__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_forefinger__WEBPACK_IMPORTED_MODULE_18__);




















class PlayerManager {
  constructor() {
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Player-ShowPassport': this.showPassport,
      'Player-ShowLicenses': this.showLicenses,
      'Player-ShowInfo': this.showInfoMenu,
      'Player-GetInfo': this.getInfo,
      'Player-SendMoney': this.sendMoney,
      'Player-FriendRequest': this.friendRequest,
      'Player-Spawn': this.selectSpawn,
      'Player-Kick': player => {
        player.tp({
          x: 1726.80712890625,
          y: 2640.588134765625,
          z: 45.56507110595703
        });
      }
    });
    mp.events.subscribeToDefault({
      'Keys-U': _utils_animations__WEBPACK_IMPORTED_MODULE_14__["default"].stop,
      'Keys-Y': this.addFriend
    });
  }

  async loadAccount(player, user) {
    player.setVariable('uid', user.uid);
    player.setVariable('dbId', user._id);
    player.setVariable('adminLvl', user.adminLvl);
    player.setVariable('firstLogin', !user.loginAt);
    player.dbId = user._id.toString();
    player.uid = user.uid;
    player.email = user.email;
    player.firstName = user.firstName;
    player.lastName = user.lastName;
    player.tempName = user.tempName;
    player.adminLvl = user.adminLvl;
    player.licenses = user.licenses;
    player.health = user.health;
    player.inventory = user.inventory;
    player.cardNumber = user.cardNumber;
    player.appearance = user.character;
    player.chatColor = [255, 255, 255];
    player.jobs = user.jobs;
    player.registerDate = moment__WEBPACK_IMPORTED_MODULE_0__(user.registrationAt).format('DD.MM.YYYY');
    player.money = user.money;
    player.phone = user.phone;
    player.playedTime = user.playedTime;
    player.paydayTime = user.paydayTime;
    player.exitDate = user.exitAt;
    player.vehicleSlots = user.vehicleSlots;
    player.canOpen = {};
    player.canEnter = {};
    player.canAction = {};
    player.gender = 'male';
    player.job = null;
    player.vehicles = {};
    player.garages = 0;
    player.faction = {};
    player.gang = {};
    player.housesCount = 0;
    player.businesses = 0;
    player.attachments = [];
    player.moneyHelper.updateMoney();
    _hunger__WEBPACK_IMPORTED_MODULE_13__["default"].updatePlayerHunger(player, user.hunger);
    _time__WEBPACK_IMPORTED_MODULE_11__["default"].setTimeForPlayer(player);
    _property_house__WEBPACK_IMPORTED_MODULE_8__["default"].loadPlayerItems(player);
    _property_business__WEBPACK_IMPORTED_MODULE_9__["default"].loadPlayerItems(player);
    Object(_factions_faction__WEBPACK_IMPORTED_MODULE_6__["loadPlayerFaction"])(player);
    await _gangs__WEBPACK_IMPORTED_MODULE_10__["default"].loadPlayer(player);
    await _prison__WEBPACK_IMPORTED_MODULE_12__["default"].loadViolator(player);
    await _vehicle__WEBPACK_IMPORTED_MODULE_7__["default"].loadPlayerVehicles(player);
    player.updateName();
    player.tp(user.position);
    _character_characterCreator__WEBPACK_IMPORTED_MODULE_4__["default"].loadPlayerCharacter(player, user.character, user.loginAt);
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].load(player);
  }

  savePlayers(players) {
    const operations = [];
    players.forEach(player => {
      if (!mp.players.exists(player) || !player.dbId) return;
      operations.push({
        updateOne: {
          filter: {
            _id: player.dbId
          },
          update: {
            playedTime: player.playedTime,
            paydayTime: player.paydayTime,
            position: { ...player.position,
              dimension: 0
            }
          }
        }
      });
    });
    if (operations.length) _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].bulkWrite(operations);
  }

  showPassport(player, id) {
    const player2 = mp.players.at(id);
    if (!player2) return;
    const data = {
      name: player.getVariable('realName'),
      registerDate: player.registerDate,
      gender: player.appearance.gender,
      faction: player.faction.name
    };
    _utils_animations__WEBPACK_IMPORTED_MODULE_14__["default"].playOnServer(player, 'docs', 2500);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'Player-ShowPassport', data);
  }

  showLicenses(player, id) {
    const player2 = mp.players.at(id);
    if (!player2) return;
    _utils_animations__WEBPACK_IMPORTED_MODULE_14__["default"].playOnServer(player, 'docs', 2500);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'Player-ShowLicenses', player.licenses);
  }

  async sendMoney(player, id, value) {
    const player2 = mp.players.at(id);
    if (!player2) return;
    const amount = parseInt(value, 10);
    await player.moneyHelper.transfer(amount, 'cash', player2.dbId);
  }

  friendRequest(player, id) {
    const player2 = mp.players.at(id);
    if (!player2) return;
    player2.friendReq = player.id;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_15__["default"].info(player2, `Нажмите Y, чтобы принять запрос на рукопожатие от ${player.name}`);
    setTimeout(() => {
      try {
        player2.friendReq = null;
      } catch (err) {
        console.log(err);
      }
    }, 4000);
  }

  addFriend(player) {
    if (typeof player.friendReq !== 'number') return;
    const player2 = mp.players.at(player.friendReq);
    if (!player2) return;
    _utils_animations__WEBPACK_IMPORTED_MODULE_14__["default"].playOnServer(player, 'handshake', 5000);
    _utils_animations__WEBPACK_IMPORTED_MODULE_14__["default"].playOnServer(player2, 'handshake', 5000);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Player-AddFriend', player2);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'Player-AddFriend', player);
  }

  selectSpawn(player, type) {
    if (type !== 'exit' && !player.getVariable('insideJail')) {
      const position = type === 'faction' ? _data_factions__WEBPACK_IMPORTED_MODULE_2__["default"][player.faction.name] : player.getVariable('spawnHouse');
      player.tp(position);
    } else player.dimension = 0;

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Player-Spawn');
  }

  getInfo(player) {
    return {
      name: player.getVariable('realName'),
      cardNumber: `${player.cardNumber}`
    };
  }

  showInfoMenu(player) {
    const equipment = {
      houses: player.housesCount,
      businesses: player.businesses,
      garages: player.garages
    };
    const {
      licenses,
      vehicleSlots,
      registerDate,
      cardNumber,
      playedTime,
      phone
    } = player;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Player-ShowPlayerInfo', [equipment, vehicleSlots, registerDate, `${cardNumber}`, phone.number, playedTime, licenses]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PlayerManager());

/***/ }),

/***/ "./src/basic/player/playerInventory.ts":
/*!*********************************************!*\
  !*** ./src/basic/player/playerInventory.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory */ "./src/basic/inventory.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _weapons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weapons */ "./src/basic/weapons/index.ts");
/* harmony import */ var _services_vehicleRepair__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vehicleRepair */ "./src/services/vehicleRepair.ts");
/* harmony import */ var _services_gasStation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/gasStation */ "./src/services/gasStation.ts");
/* harmony import */ var _services_foodShop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/foodShop */ "./src/services/foodShop.ts");
/* harmony import */ var _services_illegalMarket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/illegalMarket */ "./src/services/illegalMarket.ts");
/* harmony import */ var _services_pharmacy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/pharmacy */ "./src/services/pharmacy.ts");
/* harmony import */ var _services_nightClub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/nightClub */ "./src/services/nightClub.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");















class PlayerInventory extends _inventory__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super('player');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "defaultInventory", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "models", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "slots", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "bagSlots", void 0);

    this.models = {
      food: 'ng_proc_food_bag01a',
      weapons: 'ex_prop_adv_case_sm_flash',
      ammo: 'prop_box_ammo07a',
      medication: 'prop_ld_health_pack',
      jerrycan: 'prop_jerrycan_01a',
      repairKit: 'v_ind_cs_toolbox2',
      lockPick: 'bkr_prop_jailer_keys_01a',
      weed: 'hei_prop_heist_weed_block_01b',
      pineapple: 'prop_pineapple',
      gold: 'prop_gold_bar',
      coral: 'prop_coral_02',
      orange: 'ng_proc_food_ornge1a',
      hats: 'prop_ld_hat_01',
      tops: 'prop_cs_tshirt_ball_01',
      underwears: 'prop_cs_tshirt_ball_01',
      legs: 'prop_ld_jeans_01',
      shoes: 'prop_ld_shoe_01',
      masks: 'p_trevor_prologe_bally_s',
      watches: 'p_watch_05',
      glasses: 'p_sunglass_m_s',
      jewerly: 'p_jewel_necklace01_s',
      bag: 'hei_p_f_bag_var20_arm_s',
      pickaxe: 'prop_tool_pickaxe',
      joint: 'p_amb_joint_01',
      alcohol: 'prop_wine_bot_01',
      sack: 'prop_cs_sack_01',
      rope: 'p_cs_para_ropebit_s',
      rod: 'prop_fishing_rod_01',
      fish: 'prop_tool_box_05',
      fish_bait: 'prop_coolbox_01'
    };
    this.slots = 80;
    this.bagSlots = 80;
  }

  async updateInventoryInDb(dbId, updInventory) {
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(dbId, {
      $set: {
        inventory: updInventory
      }
    });
  }

  getMaxSlots(player) {
    const bag = this.getItem(player.inventory, 'bag');
    return bag && bag.used ? this.slots + this.bagSlots : this.slots;
  }

  async clearInventory(player) {
    const weapon = player.currentWeapon;
    const items = player.inventory.filter(item => !(item.used && item.name === weapon));
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
      $set: {
        inventory: items
      }
    });
    _weapons__WEBPACK_IMPORTED_MODULE_5__["default"].hideCurrentWeapon(player);
    player.inventory = items;
  }

  async useItemByIndex(player, index) {
    try {
      const item = this.getItemByIndex(player.inventory, index);
      if (!item) return;

      if (!item.used) {
        await this.useItem(player, item.type, item.name);
      } else await this.takeOffItem(player, item.type, item.name);
    } catch (err) {
      return 0;
    }
  }

  async useItem(player, type, name) {
    const item = this.getItem(player.inventory, name);
    if (!item) return Promise.reject();

    switch (type) {
      case 'clothes':
        _character_clothes__WEBPACK_IMPORTED_MODULE_4__["default"].set(player, name, item);
        item.used = true;
        break;

      case 'weapons':
        if (player.currentWeapon) {
          _helpers_notifications__WEBPACK_IMPORTED_MODULE_13__["default"].error(player, 'Уберите текущее оружие из рук');
          return Promise.reject(new Error());
        }

        _weapons__WEBPACK_IMPORTED_MODULE_5__["default"].giveWeapon(player, item.category, name);
        item.used = true;
        break;

      case 'food':
        Object(_services_foodShop__WEBPACK_IMPORTED_MODULE_8__["default"])(player, name);
        await this.decItemCount(player, player.inventory, item);
        break;

      case 'alcohol':
        Object(_services_nightClub__WEBPACK_IMPORTED_MODULE_11__["default"])(player, name);
        await this.decItemCount(player, player.inventory, item);
        break;

      case 'medication':
        Object(_services_pharmacy__WEBPACK_IMPORTED_MODULE_10__["useMedicine"])(player, name);
        await this.decItemCount(player, player.inventory, item);
        break;

      default:
        break;
    }

    if (name === 'repairKit') _services_vehicleRepair__WEBPACK_IMPORTED_MODULE_6__["default"].useRepairKit(player, item);else if (name === 'jerrycan') _services_gasStation__WEBPACK_IMPORTED_MODULE_7__["default"].useJerrycan(player, item);else if (name === 'lockPick') _services_illegalMarket__WEBPACK_IMPORTED_MODULE_9__["default"].useLockPick(player, item);else if (name === 'joint') {
      this.useJoint(player);
      await this.decItemCount(player, player.inventory, item);
    }
    if ('count' in item && item.count <= 0) this.removeItem(player.inventory, item);

    if (type !== 'weapons') {
      await this.updateInventoryInDb(player.dbId, player.inventory);
    }

    return {
      items: player.inventory,
      currentWeapon: player.currentWeapon,
      maxSlots: this.getMaxSlots(player),
      occupiedSlots: this.getCurrentSlots(player.inventory)
    };
  }

  useJoint(player) {
    const duration = 30 * 1000;
    _utils_animations__WEBPACK_IMPORTED_MODULE_12__["default"].playScenario(player, 'WORLD_HUMAN_AA_SMOKE', 9000);
    player.call('startScreenEffect', ['DrugsDrivingIn', duration]);
  }

  async takeOffItem(player, type, name) {
    switch (type) {
      case 'clothes':
        if (name === 'bag' && this.getCurrentSlots(player.inventory) > this.slots) {
          _helpers_notifications__WEBPACK_IMPORTED_MODULE_13__["default"].error(player, 'Выложите предметы из сумки!');
          return Promise.reject();
        }

        _character_clothes__WEBPACK_IMPORTED_MODULE_4__["default"].hide(player, name);
        break;

      case 'weapons':
        _weapons__WEBPACK_IMPORTED_MODULE_5__["default"].hideCurrentWeapon(player);
        break;

      default:
        break;
    }

    const item = this.getItem(player.inventory, name);
    if (item) item.used = false;

    if (type !== 'weapons' && item) {
      await this.updateInventoryInDb(player.dbId, player.inventory);
    }

    return {
      items: player.inventory,
      currentWeapon: player.currentWeapon,
      maxSlots: this.getMaxSlots(player)
    };
  }

  getModelObject(name, type) {
    return this.models[name] ? this.models[name] : this.models[type];
  }

  async dropItem(player, type, name, count) {
    try {
      if (player.vehicle || count <= 0) return Promise.reject();
      const {
        position
      } = player;
      let item = this.getItem(player.inventory, name);
      const model = this.getModelObject(name, type);
      await this.decItemCount(player, player.inventory, item, count);

      if (!item.temp) {
        await this.updateInventoryInDb(player.dbId, player.inventory);
      }

      item = { ...item,
        ...(item.count && {
          count
        })
      };
      this.createObject(model, item, position, player.dimension);
      return {
        items: player.inventory,
        currentWeapon: player.currentWeapon,
        occupiedSlots: this.getCurrentSlots(player.inventory)
      };
    } catch (err) {
      return Promise.reject();
    }
  }

  async takeItem(player, item, {
    shape,
    object,
    label
  }) {
    const itemShape = mp.colshapes.at(shape);
    if (!player.isEnoughSlots(item)) return;
    itemShape.thing.taked = true;
    await this.addItem(player, item);
    _utils_animations__WEBPACK_IMPORTED_MODULE_12__["default"].playOnServer(player, 'pickup', 2000);
    mp.objects.at(object).destroy();
    mp.labels.at(label).destroy();
    mp.colshapes.at(shape).destroy();
  }

  addItem(player, item) {
    return new Promise(async (resolve, reject) => {
      if (!player.isEnoughSlots(item)) return reject();
      const thing = this.getItem(player.inventory, item.name);
      if (thing && thing.hasOwnProperty('count')) thing.count += item.count;else if (thing) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_13__["default"].error(player, 'Вы можете хранить только один предмет данного типа');
        reject();
      } else player.inventory.push(item);

      if (!item.temp) {
        await this.updateInventoryInDb(player.dbId, player.inventory);
      }

      resolve();
    });
  }

  createObject(model, item, {
    x,
    y,
    z
  }, dimension) {
    const object = mp.objects.new(model, new mp.Vector3(x, y, z - 0.9), {
      dimension,
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255
    });
    const label = mp.labels.new('F2', new mp.Vector3(x, y, z - 0.2), {
      dimension,
      los: true,
      font: 2,
      drawDistance: 2,
      color: [255, 255, 255, 255]
    });
    const shape = mp.colshapes.newSphere(x, y, z, 1);
    shape.dimension = dimension;
    shape.thing = {
      item,
      taked: false,
      obj: {
        shape: shape.id,
        object: object.id,
        label: label.id
      }
    };
  }

  showInventoryMenu(player) {
    if (player.cuff) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Inventory-ShowMenu', [player.inventory, this.getCurrentSlots(player.inventory), this.getMaxSlots(player), player.currentWeapon]);
  }

  showDoubleMenu(player, player2) {
    player.nearestPlayer = player2;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Inventory-ShowDoubleMenu', [player.inventory, player2.inventory, this.getCurrentSlots(player.inventory), this.getMaxSlots(player), this.getCurrentSlots(player2.inventory), this.getMaxSlots(player2), this.name]);
  }

}

const inventory = new PlayerInventory();
mp.events.subscribe({
  'Inventory-Use': (player, type, name) => inventory.useItem(player, type, name),
  'Inventory-TakeOff': (player, type, name) => inventory.takeOffItem(player, type, name),
  'Inventory-Drop': (player, type, name, count) => inventory.dropItem(player, type, name, count),
  'Inventory-UseItemByIndex': (player, index) => inventory.useItemByIndex(player, index),
  'Player-MoveInventoryItem': (player, from, name, count) => {
    if (!player.nearestPlayer || !mp.players.exists(player.nearestPlayer)) return;
    const {
      nearestPlayer
    } = player;
    return inventory.moveItem(player, {
      dbId: nearestPlayer.dbId,
      items: nearestPlayer.inventory
    }, from, name, count);
  },
  'Player-SwapInventoryItems': (player, picked, target) => {
    inventory.swapItems(player.inventory, picked, target);
  }
});
mp.events.subscribeToDefault({
  'Keys-I': player => inventory.showInventoryMenu(player),
  'Keys-F2': player => {
    if (!player.canAction.thing) return;
    const {
      item,
      obj,
      taked
    } = player.canAction.thing;

    if (!taked) {
      player.canAction.thing = false;
      inventory.takeItem(player, item, obj);
    }
  },
  playerEnterColshape: (player, shape) => {
    if (!player.loggedIn) return;

    if (shape.thing && !shape.thing.taked) {
      player.canAction.thing = shape.thing;
    }
  },
  playerExitColshape: (player, shape) => {
    if (!player.loggedIn) return;

    if (shape.thing && !shape.thing.taked) {
      player.canAction.thing = false;
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (inventory);

/***/ }),

/***/ "./src/basic/prison.ts":
/*!*****************************!*\
  !*** ./src/basic/prison.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_Violator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Violator */ "./src/models/Violator.ts");
/* harmony import */ var _data_prisonCells__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/prisonCells */ "./src/data/prisonCells.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _jobs_job__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jobs/job */ "./src/jobs/job.ts");








const articles = {
  1.1: {
    title: 'Убийство мирного жителя',
    time: 15
  },
  1.2: {
    title: 'Убийство сотрудника гос. службы',
    time: 20
  },
  1.3: {
    title: 'Угон транспортного средства',
    time: 10
  },
  1.4: {
    title: 'Работа на нелегальной плантации',
    time: 10
  },
  1.5: {
    title: 'Сбыт нелегальных веществ',
    time: 5
  },
  1.6: {
    title: 'Покупка нелегального оружия',
    time: 5
  },
  1.7: {
    title: 'Ограбление мирного жителя',
    time: 5
  },
  1.8: {
    title: 'Подделка гос. номера ТС',
    time: 10
  },
  1.9: {
    title: 'Подделка документов',
    time: 10
  },
  2.0: {
    title: 'Взлом гос. базы данных',
    time: 10
  },
  2.1: {
    title: 'Подделка лицензий',
    time: 10
  }
};

class Prison {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "violators", void 0);

    this.violators = new Map();
    this.subscribeToEvents();
  }

  getViolator(id) {
    return this.violators.get(id);
  }

  isImprisoned(player) {
    return !!player.getVariable('insideJail');
  }

  startJail(player, policeman) {
    var _violator$reason;

    const violator = this.getViolator(player.id);

    if (!player.cuff && policeman) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(policeman, 'Наденьте наручники на подозреваемого!');
    }

    if (!violator || violator.inside) return Promise.reject(new Error());
    Object(_jobs_job__WEBPACK_IMPORTED_MODULE_7__["finishWork"])(player);
    player.tp(_data_prisonCells__WEBPACK_IMPORTED_MODULE_5__["default"][lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, _data_prisonCells__WEBPACK_IMPORTED_MODULE_5__["default"].length - 1)]);
    player.setVariable('insideJail', true);
    player.setVariable('isPlayingAnim', false);
    player.cuff = false;
    rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](player, 'Police-Untie');
    violator.reason = (_violator$reason = violator.reason) !== null && _violator$reason !== void 0 ? _violator$reason : violator.violations.join();
    violator.inside = true;
    violator.violations = [];
    this.violators.set(player.id, violator);
    if (policeman) _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].info(policeman, `Общее время заключения: ${violator.time} минут`);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].info(player, `Общее время заключения: ${violator.time} минут. Причина: ${violator.reason}`);
  }

  async toDemorgan(player, time, reason) {
    if (this.isImprisoned(player)) return mp.events.reject();
    const violator = this.getViolator(player.id);

    if (violator) {
      violator.time += time;
      violator.reason = reason;
    } else await this.addViolator(player, time, reason);

    this.startJail(player);
  }

  jailEvent() {
    const operations = [];
    this.violators.forEach((violator, id) => {
      const player = mp.players.at(id);
      if (!violator.inside || !mp.players.exists(player)) return;

      if (--violator.time <= 0) {
        operations.push({
          deleteOne: {
            filter: {
              userId: player.dbId
            }
          }
        });
        return this.releaseViolator(player);
      }

      this.violators.set(id, violator);
      operations.push({
        updateOne: {
          filter: {
            userId: player.dbId
          },
          update: {
            inside: violator.inside,
            time: violator.time,
            violations: violator.violations,
            reason: violator.reason
          }
        }
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].info(player, `Оставшееся время: ${violator.time} минут. Причина: ${violator.reason}`);
    });
    if (operations.length) _models_Violator__WEBPACK_IMPORTED_MODULE_4__["default"].bulkWrite(operations);
  }

  async addViolation(player, article) {
    let violator = this.getViolator(player.id);
    if (!violator) violator = await this.addViolator(player);
    if (violator.violations.includes(article)) return;
    violator.time += articles[article].time;
    violator.violations.push(article);
    await _models_Violator__WEBPACK_IMPORTED_MODULE_4__["default"].findOneAndUpdate({
      userId: player.dbId
    }, {
      $set: {
        time: violator.time,
        violations: violator.violations,
        violatedAt: Date.now()
      }
    });
    this.violators.set(player.id, violator);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].show(player, 'Преступление', 'LS POLICE', `${articles[article].title}`, 'CHAR_CALL911', 0);
  }

  async deleteViolator(violator) {
    await _models_Violator__WEBPACK_IMPORTED_MODULE_4__["default"].findOneAndRemove({
      userId: violator.dbId
    });
    this.violators.delete(violator.id);
  }

  async loadViolator(player) {
    const violator = await _models_Violator__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
      userId: player.dbId
    }).lean();

    if (violator) {
      if (violator.inside) player.setVariable('insideJail', true);
      this.violators.set(player.id, {
        inside: violator.inside,
        time: violator.time,
        violations: violator.violations,
        reason: violator.reason
      });
    }
  }

  releaseViolator(player) {
    this.violators.delete(player.id);
    player.setVariable('insideJail', false);
    player.call('Police-Untie');
    player.tp({
      x: 1848.781,
      y: 2585.884,
      z: 45.672
    });
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Вы свободны!');
  }

  onPlayerKnock(player, killer) {
    if (player === killer || killer.isGovMember() && killer.faction.working || player.getVariable('isDying')) return;
    if (player.isGovMember()) this.addViolation(killer, 1.2);else this.addViolation(killer, 1.1);
  }

  async addViolator(player, time = 0, reason) {
    const data = {
      inside: false,
      time,
      reason,
      violations: []
    };
    await new _models_Violator__WEBPACK_IMPORTED_MODULE_4__["default"]({
      userId: player.dbId,
      ...data
    }).save();
    this.violators.set(player.id, data);
    return data;
  }

  async clearOldViolators() {
    await _models_Violator__WEBPACK_IMPORTED_MODULE_4__["default"].deleteMany({
      violatedAt: {
        $lt: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(7, 'days').toISOString()
      }
    });
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      databaseConnected: this.clearOldViolators
    });
    mp.events.subscribe({
      'Prison-GetViolators': () => {
        const data = [];
        this.violators.forEach((violator, id) => {
          const player = mp.players.at(id);
          if (!player || violator.inside) return;
          data.push({
            id,
            name: player.getVariable('realName'),
            violations: violator.violations
          });
        });
        return data;
      }
    });
    mp.events.add('playerQuit', player => {
      if (player.dbId && this.violators.has(player.id)) {
        this.violators.delete(player.id);
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Prison());

/***/ }),

/***/ "./src/basic/referal.ts":
/*!******************************!*\
  !*** ./src/basic/referal.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Promo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Promo */ "./src/models/Promo.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");






class Referal {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "fullfiledTime", 3);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "income", 15000);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "award", 25000);

    mp.events.subscribe({
      'Referal-GetData': this.getCodeData.bind(this),
      'Referal-UseCode': this.useCode.bind(this)
    });
  }

  async createRandomCode(userId) {
    const code = await this.generateCode();
    const promoData = {
      userId,
      code,
      income: this.income,
      award: this.award
    };
    await new _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"](promoData).save();
  }

  async createCustomCode(player, income, award, code) {
    await new _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"]({
      code,
      income,
      award
    }).save();
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Промокод успешно создан!');
  }

  async removeCode(player, code) {
    const isExists = await this.checkCode(player, code);
    if (!code || !isExists) return;
    await _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndRemove({
      code
    });
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Промокод успешно удалён');
  }

  async giveMoney(player) {
    const code = await _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      used: {
        $elemMatch: {
          userId: player.dbId
        }
      }
    });
    if (!code) return;
    await player.moneyHelper.change(code.award, 'bank', 'referal');

    if (code.userId) {
      const inviter = mp.players.toArray().find(item => item.loggedIn && item.dbId === code.userId);

      if (inviter) {
        await inviter.moneyHelper.change(code.income, 'bank', 'referal income');
      } else {
        await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(code.userId, {
          $inc: {
            'money.bank': code.income
          }
        });
      }
    }
  }

  async useCode(player, code) {
    const promo = await _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      code,
      userId: {
        $ne: player.dbId
      }
    });
    if (!promo) return Promise.reject({
      err: 'Неверный промо-код'
    });
    const alreadyUsed = await _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      'used.userId': player.dbId
    }).countDocuments();
    if (alreadyUsed) return Promise.reject({
      err: 'Вы уже использовали промо-код'
    });
    promo.used.push({
      userId: player.dbId
    });
    await promo.save();

    if (player.playedTime >= this.fullfiledTime * 60) {
      await this.giveMoney(player);
    }
  }

  async checkCode(player, code) {
    const isExists = await _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      code
    });

    if (!isExists) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Неверный промокод!');
      return false;
    }

    return true;
  }

  async getCodeData(player) {
    const promo = await _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      userId: player.dbId
    }).lean();
    const users = await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].find({
      _id: {
        $in: promo.used.map(({
          userId
        }) => userId)
      }
    }).sort({
      _id: -1
    }).limit(5).select({
      firstName: 1,
      lastName: 1,
      _id: 0
    }).lean();
    return {
      code: promo.code,
      income: promo.income,
      award: promo.award,
      referals: users.map(item => `${item.firstName} ${item.lastName}`),
      totalAmount: promo.used.length
    };
  }

  async generateCode() {
    let code;

    do {
      const hash = crypto__WEBPACK_IMPORTED_MODULE_1__["randomBytes"](20).toString('hex').slice(0, 6).toUpperCase(); // eslint-disable-next-line no-await-in-loop

      const isExists = await _models_Promo__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
        code: hash
      }).countDocuments().exec();
      if (!isExists) code = hash;
    } while (!code);

    return code;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Referal());

/***/ }),

/***/ "./src/basic/time.ts":
/*!***************************!*\
  !*** ./src/basic/time.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var math_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! math-random */ "math-random");
/* harmony import */ var math_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(math_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _object_cleaner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-cleaner */ "./src/basic/object-cleaner.ts");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather */ "./src/basic/weather.ts");
/* harmony import */ var _prison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prison */ "./src/basic/prison.ts");
/* harmony import */ var _referal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./referal */ "./src/basic/referal.ts");
/* harmony import */ var _payday__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payday */ "./src/basic/payday.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player */ "./src/basic/player/index.ts");
/* harmony import */ var _player_hunger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/hunger */ "./src/basic/player/hunger.ts");
/* harmony import */ var _services_selling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/selling */ "./src/services/selling/index.ts");












class Time {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "exchangeHour", void 0);

    this.exchangeHour = Math.floor(math_random__WEBPACK_IMPORTED_MODULE_2___default()() * 4) + 1;
    this.runTimer();
  }

  get isNight() {
    const hours = new Date().getHours();
    return hours >= 22 || hours <= 6;
  }

  getTime() {
    return moment__WEBPACK_IMPORTED_MODULE_1__().format('HH:mm');
  }

  setTimeForPlayer(player) {
    player.dialog.showDate(new Date().toString());
  }

  runTimer() {
    const remainingTime = (60 - moment__WEBPACK_IMPORTED_MODULE_1__().seconds()) * 1000 + (1000 - moment__WEBPACK_IMPORTED_MODULE_1__().milliseconds());
    setTimeout(() => setInterval(() => this.changeTime(), 60000), remainingTime);
    this.changeTime(true);
  }

  everyHourEvent() {
    _payday__WEBPACK_IMPORTED_MODULE_7__["default"].trigger(this.isNight);
    _object_cleaner__WEBPACK_IMPORTED_MODULE_3__["default"].clear();
  }

  changeTime(firstRunning = false) {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    mp.world.time.hour = hour;
    mp.world.time.minute = minutes;

    if (hour % this.exchangeHour === 0 && minutes === 0) {
      Object(_services_selling__WEBPACK_IMPORTED_MODULE_10__["setRandomExchangePrice"])();
      this.exchangeHour = Math.floor(math_random__WEBPACK_IMPORTED_MODULE_2___default()() * 4) + 1;
    }

    if (hour === 0 && minutes === 30) _payday__WEBPACK_IMPORTED_MODULE_7__["default"].getTaxes();
    if (firstRunning) return;

    if (minutes === 0) {
      this.everyHourEvent();
      if (hour % 3 === 0) _weather__WEBPACK_IMPORTED_MODULE_4__["default"].change();
    }

    _prison__WEBPACK_IMPORTED_MODULE_5__["default"].jailEvent();
    this.updateForPlayers(minutes % 2 === 0);
  }

  updateForPlayers(save = false) {
    const updated = [];
    mp.players.toArray().forEach(player => {
      if (!mp.players.exists(player) || !player.dbId) return;
      this.setTimeForPlayer(player);
      _player_hunger__WEBPACK_IMPORTED_MODULE_9__["default"].decrease(player);
      player.playedTime += 1;
      player.paydayTime += 1;

      if (player.playedTime === _referal__WEBPACK_IMPORTED_MODULE_6__["default"].fullfiledTime * 60) {
        _referal__WEBPACK_IMPORTED_MODULE_6__["default"].giveMoney(player);
      }

      updated.push(player);
    });
    if (save) _player__WEBPACK_IMPORTED_MODULE_8__["default"].savePlayers(updated);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Time());

/***/ }),

/***/ "./src/basic/vehicle/despawn.ts":
/*!**************************************!*\
  !*** ./src/basic/vehicle/despawn.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _factions_garage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../factions/garage */ "./src/factions/garage.ts");






class VehicleDespawn {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "despawnTimeout", void 0);

    this.despawnTimeout = 10;
    mp.events.add('playerQuit', this.despawnPlayerVehicles);
    mp.events.subscribe({
      despawnPlayerVehicle: this.despawnWithTimeout.bind(this)
    });
  }

  despawnVehicle(vehicle) {
    if (!mp.vehicles.exists(vehicle) || vehicle.getOccupants().length) return;
    const {
      owner
    } = vehicle;
    if (!owner) return vehicle.destroy();
    const player = Object(_utils_players__WEBPACK_IMPORTED_MODULE_2__["getPlayerByDbId"])(owner.id);

    if (player && player.vehicles[vehicle.dbId]) {
      player.vehicles[vehicle.dbId].id = undefined;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(player, 'Ваше ТС эвакуировано');
    } else if (owner.type === 'faction') {
      return _factions_garage__WEBPACK_IMPORTED_MODULE_4__["default"].despawnVehicle(vehicle);
    }

    vehicle.destroy();
  }

  despawnWithTimeout(player, dbId) {
    if (player.vehicleDespawn || !dbId) return;
    const data = player.vehicles[dbId];
    const vehicle = lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.id) ? mp.vehicles.at(data.id) : null;
    if (!vehicle) return;

    if (vehicle && vehicle.getOccupants().length) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'В вашем ТС сидит пассажир!');
    }

    setTimeout(() => {
      if (!mp.players.exists(player)) return;

      if (mp.vehicles.exists(vehicle) && vehicle.getOccupants().length) {
        player.vehicleDespawn = false;
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'В ваше ТС кто-то сел...');
      }

      this.despawnVehicle(vehicle);
      player.vehicleDespawn = false;
    }, this.despawnTimeout * 1000);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(player, `Механик эвакуирует ваше ТС через ${this.despawnTimeout} сек.`);
    player.vehicleDespawn = true;
  }

  despawnPlayerVehicles(player) {
    if (!player.dbId) return;
    Object.values(player.vehicles).forEach(item => {
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(item.id)) return;
      const vehicle = mp.vehicles.at(item.id);
      if (mp.vehicles.exists(vehicle)) vehicle.destroy();
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new VehicleDespawn());

/***/ }),

/***/ "./src/basic/vehicle/fuel.ts":
/*!***********************************!*\
  !*** ./src/basic/vehicle/fuel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class VehicleFuel {
  constructor() {
    this.runFuelInterval();
  }

  fillUp(vehicle, amount) {
    const totalFuel = Math.round(vehicle.getVariable('fuel') + amount);
    const maxFuel = vehicle.getVariable('maxFuel');
    vehicle.setVariable('fuel', totalFuel < maxFuel ? totalFuel : maxFuel);
  }

  decreaseFuel(vehicle) {
    if (vehicle.engine) {
      const fuel = vehicle.getVariable('fuel');

      if (fuel >= 0) {
        vehicle.setVariable('fuel', fuel > 0 ? fuel - 1.5 : fuel);
      }
    }
  }

  runFuelInterval() {
    setInterval(() => mp.vehicles.forEach(vehicle => this.decreaseFuel(vehicle)), 60 * 1000);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new VehicleFuel());

/***/ }),

/***/ "./src/basic/vehicle/health.ts":
/*!*************************************!*\
  !*** ./src/basic/vehicle/health.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/basic/vehicle/state.ts");



class VehicleHealth {
  constructor() {
    mp.events.subscribeToDefault({
      vehicleDamage: this.onGotDamage.bind(this)
    });
  }

  set(vehicle, body, engine) {
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].setHealth(vehicle, body, engine);
  }

  isCriticalDamage(vehicle, health) {
    const damage = health.body - vehicle.bodyHealth + (health.engine - vehicle.engineHealth);
    return damage > 120;
  }

  setEngineCoolDown(vehicle, duration) {
    if (!vehicle.canStart) return;
    vehicle.engine = false;
    vehicle.canStart = false;
    setTimeout(() => {
      vehicle.canStart = true;
    }, duration);
  }

  onGotDamage(vehicle) {
    const {
      health
    } = _state__WEBPACK_IMPORTED_MODULE_1__["default"].get(vehicle);

    if (lodash_random__WEBPACK_IMPORTED_MODULE_0___default()(0, 2) && this.isCriticalDamage(vehicle, health)) {
      this.setEngineCoolDown(vehicle, 4500);
    }

    this.set(vehicle, vehicle.bodyHealth, vehicle.engineHealth);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new VehicleHealth());

/***/ }),

/***/ "./src/basic/vehicle/index.ts":
/*!************************************!*\
  !*** ./src/basic/vehicle/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Vehicle */ "./src/models/Vehicle.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _data_vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/vehicles */ "./src/data/vehicles.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./src/basic/vehicle/state.ts");
/* harmony import */ var _tuning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tuning */ "./src/basic/vehicle/tuning.ts");
/* harmony import */ var _despawn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./despawn */ "./src/basic/vehicle/despawn.ts");
/* harmony import */ var _fuel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fuel */ "./src/basic/vehicle/fuel.ts");
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sync */ "./src/basic/vehicle/sync.ts");
/* harmony import */ var _health__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./health */ "./src/basic/vehicle/health.ts");
/* harmony import */ var _vehicleInventory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vehicleInventory */ "./src/basic/vehicle/vehicleInventory.ts");













class Vehicle {
  constructor() {
    mp.events.subscribe({
      'Vehicle-CheckOwner': (player, vehicle) => {
        if (!player || !vehicle) return false;
        return this.isOwner(vehicle, player, !vehicle.dbId);
      },
      'Vehicle-GetModelInfo': (player, model) => this.getTypeOptions(model),
      toggleIndicator: (player, vehicle, value) => {
        _state__WEBPACK_IMPORTED_MODULE_5__["default"].toggleIndicator(vehicle, value);
      },
      toggleTrunk: (player, vehicle) => {
        _state__WEBPACK_IMPORTED_MODULE_5__["default"].toggleTrunk(player, vehicle);
      },
      toggleEngine: this.toggleEngine,
      'Vehicle-IsOwner': (player, vehicle) => this.isOwner(vehicle, player, true),
      'Vehicle-MarkPosition': this.markPosition,
      getPlayerVehicles: player => player.vehicles
    });
  }

  getType(model) {
    return _data_vehicles__WEBPACK_IMPORTED_MODULE_4__["default"][model] ? _data_vehicles__WEBPACK_IMPORTED_MODULE_4__["default"][model].type : Object.keys(_data_vehicles__WEBPACK_IMPORTED_MODULE_4__["vehicleTypes"])[0];
  }

  getTypeOptions(model) {
    return _data_vehicles__WEBPACK_IMPORTED_MODULE_4__["vehicleTypes"][this.getType(model)];
  }

  isTemporary(vehicle) {
    return !vehicle.dbId;
  }

  isOwner(vehicle, player, temporary = false) {
    const owner = vehicle === null || vehicle === void 0 ? void 0 : vehicle.owner;
    if (!owner || !temporary && this.isTemporary(vehicle)) return false;
    return owner.type === 'faction' ? player.faction.id === owner.id : temporary ? player.dbId.toString() === owner.id.toString() : !!player.vehicles[vehicle.dbId];
  }

  async setOwner(vehicle, owner) {
    vehicle.owner = owner;

    if (!this.isTemporary(vehicle)) {
      await _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(vehicle.dbId, {
        $set: {
          owner: owner.id
        }
      });
    }
  }

  async create(model, position, owner, temporary, locked = false, player, spawn = true) {
    let vehicle;
    const number = temporary ? 'PROJECT1' : await this.generateNumber();
    const {
      tank,
      health
    } = this.getTypeOptions(model);

    if (spawn) {
      vehicle = this.spawn(model, position, owner, number, tank, {
        locked,
        health: {
          body: health,
          engine: health
        }
      });
    }

    if (!temporary) {
      const doc = await new _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        model,
        owner: owner.id,
        numberPlate: number,
        fuel: tank
      }).save();
      if (vehicle) vehicle.dbId = doc._id;

      if (owner.type === 'user') {
        var _vehicle;

        player.vehicles[doc._id.toString()] = {
          name: model,
          id: (_vehicle = vehicle) === null || _vehicle === void 0 ? void 0 : _vehicle.id,
          type: this.getType(model),
          number
        };
      }
    }

    return vehicle;
  }

  spawn(model, position, owner, number, fuel, state = {}, tuning = {}) {
    const hash = mp.joaat(model);
    const {
      x,
      y,
      z,
      dimension = 0,
      rot = 90
    } = position;
    const {
      trunk,
      tank,
      health
    } = this.getTypeOptions(model);
    const vehicle = mp.vehicles.new(hash, new mp.Vector3(x, y, z), {
      dimension,
      heading: rot
    });
    vehicle.owner = owner;
    vehicle.name = model;
    vehicle.numberPlate = number;
    vehicle.inventory = [];
    vehicle.owners = [];
    vehicle.slots = trunk;
    vehicle.maxHealth = health;
    vehicle.canStart = true;
    vehicle.setVariable('fuel', fuel);
    vehicle.setVariable('maxFuel', tank);
    vehicle.setVariable('state', { ..._state__WEBPACK_IMPORTED_MODULE_5__["default"].initial,
      ...state
    });
    vehicle.setVariable('tuning', { ..._tuning__WEBPACK_IMPORTED_MODULE_6__["default"].default,
      ...tuning
    });
    return vehicle;
  }

  async delete(vehicle) {
    if (!this.isTemporary(vehicle)) await _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndDelete(vehicle.dbId);
    const owner = Object(_utils_players__WEBPACK_IMPORTED_MODULE_2__["getPlayerByDbId"])(vehicle.owner.id);
    if (owner) delete owner.vehicles[vehicle.dbId];
    vehicle.destroy();
  }

  async setNumberPlate(vehicle, customNumber) {
    const number = !customNumber ? await this.generateNumber() : customNumber;
    await _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(vehicle.dbId, {
      $set: {
        numberPlate: number
      }
    });
    vehicle.numberPlate = number;
  }

  async loadPlayerVehicles(player) {
    const items = await _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].find({
      owner: player.dbId
    }).select({
      model: 1,
      numberPlate: 1,
      label: 1
    }).lean();
    items.forEach(item => {
      player.vehicles[item._id.toString()] = {
        type: this.getType(item.model),
        name: item.model,
        number: item.numberPlate,
        label: item.label
      };
    });
  }

  async spawnPlayerVehicle(player, dbId, position) {
    const data = player.vehicles[dbId];

    if (typeof data.id === 'number') {
      const vehicle = mp.vehicles.at(data.id);
      vehicle.position = new mp.Vector3(position.x, position.y, position.z);
      vehicle.dimension = 0;
      setTimeout(() => {
        vehicle.rotation = new mp.Vector3(0, 0, 90);
      }, 100);
    } else {
      const doc = await _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].findById(dbId).lean();
      const vehicle = this.spawn(doc.model, position, {
        type: 'user',
        id: doc.owner
      }, doc.numberPlate, doc.fuel, doc.state, doc.tuning);
      vehicle.dbId = doc._id;
      vehicle.inventory = doc.inventory;
      vehicle.owners = doc.owners;
      player.vehicles[vehicle.dbId].id = vehicle.id;
    }
  }

  async generateNumber() {
    let number;

    do {
      const hash = crypto__WEBPACK_IMPORTED_MODULE_0__["randomBytes"](48).toString('hex').slice(0, 8).toUpperCase(); // eslint-disable-next-line no-await-in-loop

      const isExists = await _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
        numberPlate: hash
      }).countDocuments();
      if (!isExists) number = hash;
    } while (!number);

    return number;
  }

  toggleEngine(player, vehicle) {
    _state__WEBPACK_IMPORTED_MODULE_5__["default"].setEngineState(player, vehicle, !_state__WEBPACK_IMPORTED_MODULE_5__["default"].get(vehicle).engine, true);
  }

  markPosition(player, id) {
    const data = player.vehicles[id];
    const vehicle = typeof data.id === 'number' && mp.vehicles.at(data.id);
    if (!vehicle) return mp.events.reject();
    _helpers_blips__WEBPACK_IMPORTED_MODULE_3__["default"].createWaypoint(player, vehicle.position);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Vehicle());

/***/ }),

/***/ "./src/basic/vehicle/state.ts":
/*!************************************!*\
  !*** ./src/basic/vehicle/state.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Vehicle */ "./src/models/Vehicle.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");





class VehicleState {
  constructor() {
    this.runAutosaveInterval();
  }

  get initial() {
    return {
      engine: false,
      locked: false,
      health: {
        body: 1000,
        engine: 1000
      },
      roof: true,
      trunk: false,
      dirtLevel: 0,
      radioIndex: 0,
      doors: [],
      wheels: [],
      indicators: {
        left: false,
        right: false
      }
    };
  }

  get(vehicle) {
    return (vehicle === null || vehicle === void 0 ? void 0 : vehicle.getVariable('state')) || {};
  }

  setEngineState(player, vehicle, status, instantly = false) {
    if (!vehicle.canStart) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].info(player, 'Черт! Что-то с движком...');
    }

    vehicle.engine = status;
    this.update(vehicle, {
      engine: status
    });
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'VehicleSync-SetEngine', [vehicle, status, instantly]);
  }

  setRadioStation(vehicle, station) {
    this.update(vehicle, {
      radioIndex: station
    });
  }

  setDirtLevel(vehicle, value) {
    this.update(vehicle, {
      dirtLevel: value
    });
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getStreamedPlayers"])(vehicle.position).forEach(player => rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'VehicleSync-SetDirtLevel', [vehicle, value]));
  }

  setDoors(vehicle, doors) {
    this.update(vehicle, {
      doors
    });
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getStreamedPlayers"])(vehicle.position).forEach(player => rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'VehicleSync-SetDoorsState', [vehicle, doors]));
  }

  setRoof(vehicle, status) {
    this.update(vehicle, {
      roof: status
    });
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getStreamedPlayers"])(vehicle.position).forEach(player => rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'VehicleSync-SetRoofState', [vehicle, status]));
  }

  setLockStatus(vehicle, status) {
    this.update(vehicle, {
      locked: status
    });
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getStreamedPlayers"])(vehicle.position).forEach(player => rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'VehicleSync-SetLockStatus', [vehicle, status]));
  }

  setHealth(vehicle, body, engine) {
    this.update(vehicle, {
      health: {
        body,
        engine
      }
    });
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getStreamedPlayers"])(vehicle.position).forEach(player => rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'VehicleSync-SetHealth', [vehicle, body, engine]));
  }

  toggleIndicator(vehicle, indicator) {
    const {
      indicators
    } = this.get(vehicle);
    indicators[indicator] = !indicators[indicator];
    this.update(vehicle, {
      indicators
    });
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getStreamedPlayers"])(vehicle.position).forEach(player => rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'VehicleSync-SetIndicators', [vehicle, indicators.left, indicators.right]));
  }

  toggleTrunk(player, vehicle) {
    const {
      trunk,
      doors
    } = this.get(vehicle);
    this.update(vehicle, {
      trunk: !trunk
    });
    doors[5] = trunk ? 0 : 1;
    this.setDoors(vehicle, doors);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].info(player, trunk ? 'Багажник закрыт' : 'Багажник открыт для всех');
  }

  update(vehicle, data) {
    const state = this.get(vehicle);
    vehicle.setVariable('state', { ...state,
      ...data
    });
  }

  runAutosaveInterval() {
    setInterval(() => {
      try {
        const operations = [];
        mp.vehicles.forEach(vehicle => {
          if (!mp.vehicles.exists(vehicle) || !vehicle.dbId) return;
          operations.push({
            updateOne: {
              filter: {
                _id: vehicle.dbId
              },
              update: {
                fuel: vehicle.getVariable('fuel'),
                state: this.get(vehicle)
              }
            }
          });
        });
        if (operations.length) _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].bulkWrite(operations);
      } catch (err) {
        console.log(err, 'state interval');
      }
    }, 3 * 60 * 1000);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new VehicleState());

/***/ }),

/***/ "./src/basic/vehicle/sync.ts":
/*!***********************************!*\
  !*** ./src/basic/vehicle/sync.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/basic/vehicle/state.ts");


class VehicleSync {
  constructor() {
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      'VehicleSync-SetDirtLevel': (player, vehicle, level) => {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].setDirtLevel(vehicle, level);
      }
    });
    mp.events.subscribe({
      'VehicleSync-SetRadioStation': (player, vehicle, station) => {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].setRadioStation(vehicle, station);
      },
      'VehicleSync-SetRoof': (player, vehicle, status) => {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].setRoof(vehicle, status);
      },
      'VehicleSync-SetDoors': (player, vehicle, doors) => {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].setDoors(vehicle, doors);
      },
      'VehicleSync-SetLockStatus': (player, vehicle, status) => {
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].setLockStatus(vehicle, status);
      }
    });
  }

}

const sync = new VehicleSync();

/***/ }),

/***/ "./src/basic/vehicle/tuning.ts":
/*!*************************************!*\
  !*** ./src/basic/vehicle/tuning.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class VehicleTuning {
  get default() {
    return {
      engine: -1,
      turbo: -1,
      horn: -1,
      transmission: -1,
      glasses: 0,
      suspention: -1,
      brakes: -1,
      lights: -1,
      armour: -1,
      neon: {
        color: [255, 255, 255],
        position: -1
      },
      spoiler: -1,
      sideskirt: -1,
      exhaust: -1,
      frame: -1,
      grille: -1,
      hood: -1,
      roof: -1,
      bumpers: {
        front: -1,
        rear: -1
      },
      numbers: 0,
      livery: -1,
      wheels: {
        model: -1,
        color: 0,
        tyres: 0,
        smoke: [255, 255, 255]
      },
      paint: {
        primary: [0, 0, 0],
        secondary: [0, 0, 0],
        type: 0
      }
    };
  }

  update(vehicle, data) {
    vehicle.setVariable('tuning', { ...this.get(vehicle),
      ...data
    });
  }

  setPaint(vehicle, color, type = 0) {
    this.update(vehicle, {
      paint: {
        type,
        primary: color,
        secondary: color
      }
    });
  }

  get(vehicle) {
    return (vehicle === null || vehicle === void 0 ? void 0 : vehicle.getVariable('tuning')) || {};
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new VehicleTuning());

/***/ }),

/***/ "./src/basic/vehicle/vehicleInventory.ts":
/*!***********************************************!*\
  !*** ./src/basic/vehicle/vehicleInventory.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Vehicle */ "./src/models/Vehicle.ts");
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inventory */ "./src/basic/inventory.ts");
/* harmony import */ var _player_playerInventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ "./src/basic/vehicle/state.ts");









class VehicleInventory extends _inventory__WEBPACK_IMPORTED_MODULE_2__["default"] {
  async updateInventoryInDb(dbId, updInventory) {
    await _models_Vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(dbId, {
      $set: {
        inventory: updInventory
      }
    });
  }

  getMaxSlots(player) {
    return player.nearestVehicle.slots;
  }

  showInventoryMenu(player) {
    const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_4__["getNearestVehicleInRange"])(player.position, 3);
    if (player.vehicle || !vehicle) return;

    if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(vehicle, player) && !_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(vehicle, player, true) && !_state__WEBPACK_IMPORTED_MODULE_7__["default"].get(vehicle).trunk) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Багажник закрыт!');
    }

    player.nearestVehicle = vehicle;
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Inventory-ShowDoubleMenu', [player.inventory, vehicle.inventory, this.getCurrentSlots(player.inventory), _player_playerInventory__WEBPACK_IMPORTED_MODULE_3__["default"].getMaxSlots(player), this.getCurrentSlots(vehicle.inventory), this.getMaxSlots(player), this.name]);
  }

}

const vehicleInventory = new VehicleInventory('vehicle');
mp.events.subscribe({
  'Vehicle-MoveInventoryItem': (player, from, name, count) => {
    if (!player.nearestVehicle || !mp.players.exists(player.nearestVehicle) || player.nearestVehicle.dist(player.position) > 3) return;
    const {
      nearestVehicle: vehicle
    } = player;
    return vehicleInventory.moveItem(player, {
      dbId: vehicle.dbId,
      items: vehicle.inventory
    }, from, name, count);
  },
  'Vehicle-SwapInventoryItems': (player, picked, target) => {
    if (!player.nearestVehicle || !mp.players.exists(player.nearestVehicle) || player.nearestVehicle.dist(player.position) > 3) return;
    const {
      nearestVehicle: vehicle
    } = player;
    vehicleInventory.swapItems(vehicle.inventory, picked, target);
  },
  'Inventory-CloseMenu': player => {
    player.nearestVehicle = null;
    player.nearestPlayer = null;
  }
});
mp.events.subscribeToDefault({
  'Keys-Y': player => vehicleInventory.showInventoryMenu(player)
});
/* harmony default export */ __webpack_exports__["default"] = (vehicleInventory);

/***/ }),

/***/ "./src/basic/voip.ts":
/*!***************************!*\
  !*** ./src/basic/voip.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

mp.events.add({
  add_voice_listener: (player, target) => {
    if (target) player.enableVoiceTo(target);
  },
  remove_voice_listener: (player, target) => {
    if (target) player.disableVoiceTo(target);
  },
  set_voice_speaker: (player, status) => {
    player.setVariable('speaker', status);
  }
});

/***/ }),

/***/ "./src/basic/weapons/index.ts":
/*!************************************!*\
  !*** ./src/basic/weapons/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _player_playerInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sync */ "./src/basic/weapons/sync.ts");






class Weapons {
  constructor() {
    mp.events.subscribe({
      'Weapons-SaveAmmo': this.saveAmmo.bind(this)
    });
  }

  giveWeapon(player, type, name) {
    if (!player.isHasLicense('gun')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'У вас нет лицензии на ношение оружия!');
    }

    this.hideCurrentWeapon(player);
    const hash = mp.joaat(`weapon_${name}`);
    const weaponType = type === 'smgs' ? 'handguns' : type;
    player.currentWeapon = name;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'giveWeapon', [hash.toString(), this.getAmmoCount(player, weaponType), type]);
  }

  hideCurrentWeapon(player) {
    player.setWeaponAmmo(player.weapon, 0);
    player.removeAllWeapons();
    player.currentWeapon = null;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'takeOffWeapon');
  }

  removeWeapons(player) {
    const weapons = player.inventory.filter(item => item.type === 'weapons');
    const items = player.inventory.filter(item => item.type !== 'weapons');
    this.hideCurrentWeapon(player);
    player.inventory = items;
    return weapons;
  }

  getAmmoCount(player, name) {
    const item = _player_playerInventory__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(player.inventory, name);
    return item ? item.count : 0;
  }

  async saveAmmo(player, count, type) {
    const item = _player_playerInventory__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(player.inventory, type === 'smgs' ? 'handguns' : type);
    if (item && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(count)) item.count = count;

    if (item && !item.count) {
      _player_playerInventory__WEBPACK_IMPORTED_MODULE_2__["default"].removeItem(player.inventory, item);
      await _player_playerInventory__WEBPACK_IMPORTED_MODULE_2__["default"].updateInventoryInDb(player.dbId, player.inventory);
    }
  }

}

mp.events.addCommand({
  rpg: player => {
    if (player.adminLvl < 3) return;
    player.giveWeapon(0xb1ca77b1, 100);
  },
  firework: player => {
    if (player.adminLvl < 3) return;
    player.giveWeapon(0x7f7497e5, 100);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new Weapons());

/***/ }),

/***/ "./src/basic/weapons/sync.ts":
/*!***********************************!*\
  !*** ./src/basic/weapons/sync.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prison */ "./src/basic/prison.ts");

const damageMultiplier = {
  head: 2,
  neck: 1.5,
  torso: 1,
  pelvis: 1,
  leftArm: 1,
  rightArm: 1,
  leftLeg: 1,
  rightLeg: 1
};
const weaponsDamage = {
  pistol: 10,
  combatpistol: 15,
  pistol50: 25,
  snspistol: 15,
  heavypistol: 25,
  vintagepistol: 30,
  revolver: 50,
  doubleaction: 40,
  microsmg: 12,
  smg: 20,
  assaultsmg: 20,
  machinepistol: 12,
  minismg: 12,
  pumpshotgun: 25,
  sawnoffshotgun: 35,
  assaultshotgun: 30,
  musket: 50,
  heavyshotgun: 35,
  dbshotgun: 45,
  assaultrifle: 20,
  carbinerifle: 15,
  advancedrifle: 25,
  specialcarbine: 20,
  bullpuprifle: 25,
  compactrifle: 20
};

class WeaponSync {
  constructor() {
    mp.events.subscribe({
      playerWeaponShot: this.onWeaponShot.bind(this)
    });
  }

  getDamage(weapon, bodyPart) {
    return Math.round(weaponsDamage[weapon] * damageMultiplier[bodyPart]);
  }

  onWeaponShot(player, target, bodyPart) {
    if (!player.currentWeapon || !weaponsDamage[player.currentWeapon] || target.getVariable('AGM')) return;
    const {
      armour
    } = target;
    let damage = this.getDamage(player.currentWeapon, bodyPart);

    if (armour >= damage) {
      target.armour -= damage;
    } else {
      damage -= armour;
      target.armour = 0;
      target.health -= damage;
    }

    if (target.health <= 0) _prison__WEBPACK_IMPORTED_MODULE_0__["default"].onPlayerKnock(target, player);
  }

}

const sync = new WeaponSync();

/***/ }),

/***/ "./src/basic/weather.ts":
/*!******************************!*\
  !*** ./src/basic/weather.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/round */ "lodash/round");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





const weatherTypes = {
  Thunderstorm: ['THUNDER'],
  Drizzle: ['CLEARING'],
  Rain: ['RAIN', 'CLEARING'],
  Snow: ['XMAS', 'SNOWLIGHT'],
  Clear: ['EXTRASUNNY', 'CLEAR'],
  Clouds: ['CLOUDS', 'OVERCAST'],
  Fog: ['SMOG', 'FOGGY', 'NEUTRAL']
};

class Weather {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "city", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "forecast", void 0);

    this.city = 'Los Angeles';
    this.forecast = [];
    this.subscribeToEvents();
  }

  get currentWeather() {
    return this.forecast[0];
  }

  change(firstRunning = false) {
    if (!firstRunning) this.removePrevForecastItem();
    mp.world.weather = this.currentWeather.condition;
    mp.world.setWeatherTransition(this.currentWeather.condition);
    mp.players.call('Weather-Change', [this.currentWeather.condition]);
  }

  addForecastItem(item) {
    this.forecast.push(item);
  }

  removePrevForecastItem() {
    this.forecast.splice(0, 1);
  }

  async loadForecast() {
    const apiKey = process.env.WEATHER_KEY;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&lang=ru&appid=${apiKey}`;
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url);
    data.list.forEach(item => {
      const temperature = lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(item.main.temp);

      const types = weatherTypes[item.weather[0].main];
      if (!types) return;
      const weather = {
        temperature,
        condition: types[lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(0, types.length - 1)],
        date: moment__WEBPACK_IMPORTED_MODULE_3__["unix"](item.dt).toLocaleString()
      };
      this.addForecastItem(weather);
    });
    this.change(true);
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      databaseConnected: this.loadForecast.bind(this),
      'Auth-SuccessLogin': player => {
        player.call('Weather-Change', [this.currentWeather.condition]);
      }
    });
    mp.events.subscribe({
      'Weather-GetForecast': () => this.forecast
    });
    mp.events.addCommand({
      weather: (player, name = 'CLEAR') => {
        if (!player.adminLvl) return;
        this.currentWeather.condition = name;
        mp.world.weather = name;
        mp.world.setWeatherTransition(name);
        mp.players.call('Weather-Change', [this.currentWeather.condition]);
      }
    });
  }

}

const weather = new Weather();
/* harmony default export */ __webpack_exports__["default"] = (weather);

/***/ }),

/***/ "./src/character/characterCreator.ts":
/*!*******************************************!*\
  !*** ./src/character/characterCreator.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _data_spawn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/spawn */ "./src/data/spawn.js");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _clothes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clothes */ "./src/character/clothes.ts");









class CharCreator {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "exitCoord", void 0);

    this.exitCoord = {
      x: 405.215,
      y: -997.179,
      z: -99.01
    };
    this.createExitShape();
  }

  openMenu(player) {
    player.model = mp.joaat('mp_m_freemode_01');
    player.tp({
      x: 402.82,
      y: -996.449,
      z: -99.001,
      dimension: player.id + 1
    });
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'CharCreator-OpenMenu');
  }

  enteredExitShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ для выхода на спавн');
  }

  createExitShape() {
    const {
      x,
      y,
      z
    } = this.exitCoord;
    mp.markers.new(1, new mp.Vector3(x, y, z - 1), 0.75, {
      color: [255, 219, 0, 70],
      visible: true
    });
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_5__["default"].create(this.exitCoord, 0.75, {
      onEnter: this.enteredExitShape,
      onKeyPress: player => player.tp(_data_spawn__WEBPACK_IMPORTED_MODULE_4__["default"]),
      keyName: 'E'
    });
  }

  loadPlayerCharacter(player, data, firstLogin) {
    player.gender = 'male';
    if (data.gender) player.gender = 'female';
    if (!firstLogin) return this.openMenu(player);
    this.loadPlayerBody(player, data);
    this.loadHeadOverlay(player, data);
    this.loadPlayerHead(player, data);
  }

  loadPlayerBody(player, character) {
    if (character.gender === 0) player.model = mp.joaat('mp_m_freemode_01');else player.model = mp.joaat('mp_f_freemode_01');
    player.setVariable('gender', character.gender);
    this.setBody(player, character.skindata);
    this.setFace(player, character.facedata);
    this.setTattoos(player, character.tattoos);
  }

  loadPlayerHead(player, character) {
    this.setHair(player, character.hair);
    this.setBrowStyle(player, character.brow);
    this.setBeardStyle(player, character.beard);
  }

  loadHeadOverlay(player, character) {
    this.setHeadOverlay(player, character.headOverlayData);
  }

  setTattoos(player, tattoos) {
    player.clearDecorations();
    tattoos.forEach(tattoo => {
      player.setDecoration(mp.joaat(tattoo.dictionary), mp.joaat(tattoo.texture));
    });
  }

  setBody(player, skindata) {
    if (!skindata || !skindata.length) return;
    player.setHeadBlend(skindata[0], skindata[1], 0, skindata[0], skindata[1], 0, skindata[2], skindata[3], 0.0);
  }

  setFace(player, facedata) {
    if (!facedata || !facedata.length) return;

    for (let i = 0; i < facedata.length; i++) {
      player.setFaceFeature(i, facedata[i] || 0);
    }
  }

  setHair(player, hair) {
    if (!hair || !Object.keys(hair).length) return;
    this.setHairStyle(player, hair.style);
    this.setHairColor(player, hair.color);
  }

  setHairStyle(player, hairStyle) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(hairStyle)) return;
    player.setClothes(2, hairStyle, 0, 0);
  }

  setHairColor(player, hairColor) {
    if (!hairColor || !hairColor.length) return;
    player.setHairColor(hairColor[0], hairColor[1]);
  }

  setBrowStyle(player, brow) {
    if (!brow || !Object.keys(brow).length || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(brow.style)) return;
    player.setHeadOverlay(2, [brow.style, brow.opacity, 1, 1]);
  }

  setBeardStyle(player, beard) {
    if (!beard || !Object.keys(beard).length || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(beard.style)) return;
    player.setHeadOverlay(1, [beard.style, beard.opacity, 1, 1]);
  }

  setHeadOverlay(player, headOverlay) {
    if (!headOverlay || !headOverlay.length) return;
    headOverlay.forEach((item, index) => {
      const style = item === -1 ? 255 : item;
      player.setHeadOverlay(index, [style !== null && style !== void 0 ? style : 0, 1.0, 0, 0]);
    });
  }

}

const charCreator = new CharCreator();
mp.events.subscribe({
  'CharCreator-Save': async (player, data) => {
    const inventory = data.gender ? [{
      type: 'clothes',
      name: 'underwears',
      style: 0,
      color: 0,
      torsos: 0,
      under: 0,
      used: true
    }, {
      type: 'clothes',
      name: 'legs',
      style: 14,
      color: 0,
      used: true
    }, {
      type: 'clothes',
      name: 'shoes',
      style: 5,
      color: 0,
      used: true
    }] : [{
      type: 'clothes',
      name: 'underwears',
      style: 5,
      color: 0,
      torsos: 5,
      under: 5,
      used: true
    }, {
      type: 'clothes',
      name: 'legs',
      style: 12,
      color: 0,
      used: true
    }, {
      type: 'clothes',
      name: 'shoes',
      style: 6,
      color: 0,
      used: true
    }];
    await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(player.dbId, {
      $set: {
        character: data,
        inventory
      }
    });
    player.inventory = inventory;
    player.tp(_data_spawn__WEBPACK_IMPORTED_MODULE_4__["default"]);
    charCreator.loadPlayerCharacter(player, data, true);
    _clothes__WEBPACK_IMPORTED_MODULE_7__["default"].load(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'CharCreator-CloseEditor');
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Player-ShowStartScreen');
  },
  'CharCreator-ChangeGender': (player, gender) => {
    if (gender) player.model = mp.joaat('mp_f_freemode_01');else player.model = mp.joaat('mp_m_freemode_01');
  },
  'CharCreator-UpdateHairStyle': (player, hair) => {
    const isMale = player.isMale();

    if (isMale && hair !== 23 || !isMale && hair !== 24) {
      player.setClothes(2, hair, 0, 0);
    }
  },
  'CharCreator-LoadPlayerCharacter': player => {
    charCreator.loadPlayerCharacter(player, player.appearance, true);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (charCreator);

/***/ }),

/***/ "./src/character/clothes.ts":
/*!**********************************!*\
  !*** ./src/character/clothes.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_clothes_empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/clothes/empty */ "./src/data/clothes/empty.js");
/* harmony import */ var _data_clothes_torsos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/clothes/torsos */ "./src/data/clothes/torsos.js");
/* harmony import */ var _data_clothes_undershirts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/clothes/undershirts */ "./src/data/clothes/undershirts.js");
/* harmony import */ var _data_clothes_tops__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/clothes/tops */ "./src/data/clothes/tops.js");







const components = {
  masks: 1,
  torso: 3,
  legs: 4,
  bag: 5,
  shoes: 6,
  jewerly: 7,
  undershirt: 8,
  armor: 9,
  decals: 10,
  tops: 11,
  underwears: 11
};
const props = {
  hats: 0,
  glasses: 1,
  ears: 2,
  watches: 6,
  bracelet: 7
};

class Clothes {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "set", (player, type, item) => {
      const {
        gender,
        style,
        color
      } = item;

      if (gender && player.gender !== gender) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Данная одежда несовместима с вашим полом');
        throw new Error('wrong clothes');
      }

      switch (type) {
        case 'masks':
          return this.setMask(player, item);

        case 'tops':
          return this.setJacket(player, item);

        case 'underwears':
          return this.setShirt(player, item);

        case 'bag':
          player.setClothes(components.bag, 31, 0, 2);
          break;

        default:
          if (this.isComponent(type)) player.setClothes(components[type], style, color, 2);else player.setProp(props[type], style, color);
      }
    });

    mp.events.subscribe({
      'Clothes-LoadPlayerClothes': this.load.bind(this)
    });
  }

  hide(player, type) {
    const {
      gender
    } = player;

    if (type === 'bag') {
      player.setClothes(components.bag, _data_clothes_empty__WEBPACK_IMPORTED_MODULE_3__["default"][gender][components.bag], 0, 2);
    } else {
      this.set(player, type, {
        style: this.isComponent(type) ? _data_clothes_empty__WEBPACK_IMPORTED_MODULE_3__["default"][gender][components[type]] : 255,
        color: 0,
        gender
      });
    }
  }

  load(player) {
    this.clear(player);
    player.inventory.forEach(item => {
      if (item.type !== 'clothes' || !item.used) return;
      this.set(player, item.name, item);
    });
  }

  clear(player) {
    Object.keys(props).forEach(item => this.hide(player, item));
    Object.keys(components).forEach(item => this.hide(player, item));
  }

  isComponent(name) {
    return typeof components[name] === 'number';
  }

  getComponentData(player, name) {
    var _player$getVariable;

    return components[name] === 11 ? (_player$getVariable = player.getVariable(name)) !== null && _player$getVariable !== void 0 ? _player$getVariable : player.getClothes(components[name]) : player.getClothes(components[name]);
  }

  isEmpty(player, component, style) {
    const {
      gender
    } = player;
    const id = components[component];
    return _data_clothes_empty__WEBPACK_IMPORTED_MODULE_3__["default"][gender][id] === style;
  }

  setJacket(player, data) {
    const top = this.getComponentData(player, 'underwears');
    this.setClientClothes(player, 'tops', data);
    this.setShirt(player, {
      style: top.drawable,
      color: top.texture
    });
  }

  setShirt(player, data) {
    const {
      gender
    } = player;
    let {
      drawable: top
    } = this.getComponentData(player, 'tops');
    this.setClientClothes(player, 'underwears', data);

    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(_data_clothes_tops__WEBPACK_IMPORTED_MODULE_6__["default"][gender][top])) {
      top = data.style;
      this.setClientClothes(player, 'tops', data);
    }

    this.setUndershirt(player, top, data);
    this.applyCorrectTorso(player, top);
  }

  setUndershirt(player, top, {
    style,
    color
  }) {
    var _ref, _undershirts$gender$s;

    const {
      gender
    } = player;
    const type = _data_clothes_tops__WEBPACK_IMPORTED_MODULE_6__["default"][gender][top];
    const drawable = (_ref = (_undershirts$gender$s = _data_clothes_undershirts__WEBPACK_IMPORTED_MODULE_5__["default"][gender][style]) === null || _undershirts$gender$s === void 0 ? void 0 : _undershirts$gender$s[type]) !== null && _ref !== void 0 ? _ref : _data_clothes_empty__WEBPACK_IMPORTED_MODULE_3__["default"][gender][8];
    player.setClothes(8, drawable, color, 2);
  }

  applyCorrectTorso(player, top) {
    var _torsos$gender$top;

    const {
      gender
    } = player;
    const torso = (_torsos$gender$top = _data_clothes_torsos__WEBPACK_IMPORTED_MODULE_4__["default"][gender][top]) !== null && _torsos$gender$top !== void 0 ? _torsos$gender$top : _data_clothes_empty__WEBPACK_IMPORTED_MODULE_3__["default"][gender][3];
    player.setClothes(3, torso, 0, 2);
  }

  setMask(player, data) {
    player.setClothes(1, data.style, data.color, 2);
    player.setVariable('inMask', !this.isEmpty(player, 'masks', data.style));
  }

  setClientClothes(player, type, data) {
    const {
      style: drawable,
      color: texture
    } = data;
    player.setVariable(type, {
      drawable,
      texture
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Clothes());

/***/ }),

/***/ "./src/data/animations.js":
/*!********************************!*\
  !*** ./src/data/animations.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  masturbation1: {
    dict: 'amb@code_human_in_car_mp_actions@wank@bodhi@rps@',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  masturbation2: {
    dict: 'amb@code_human_in_car_mp_actions@wank@std@ds@base',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  nosePick: {
    dict: 'anim@mp_player_intcelebrationfemale@nose_pick',
    name: 'nose_pick',
    speed: 8,
    flag: 49
  },
  fuck: {
    dict: 'anim@mp_player_intselfiethe_bird',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  ass: {
    dict: 'anim@mp_freemode_return@f@idle',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  drunk: {
    dict: 'amb@world_human_bum_standing@drunk@idle_a',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  speak1: {
    dict: 'abigail_mcs_1_concat-8',
    name: 'player_zero_dual-8',
    speed: 8,
    flag: 49
  },
  speak2: {
    dict: 'amb@world_human_hang_out_street@male_c@idle_a',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  speak3: {
    dict: 'abigail_mcs_1_concat-9',
    name: 'csb_abigail_dual-9',
    speed: 8,
    flag: 49
  },
  speak4: {
    dict: 'ah_2_ext_alt-5',
    name: 'cs_lestercrest_dual-5',
    speed: 8,
    flag: 49
  },
  speak5: {
    dict: 'abigail_mcs_1_concat-2',
    name: 'player_zero_dual-2',
    speed: 8,
    flag: 49
  },
  squat: {
    dict: 'amb@world_human_bum_wash@male@low@idle_a',
    name: 'idle_a',
    speed: 8,
    flag: 1
  },
  search: {
    dict: 'amb@code_human_police_investigate@idle_b',
    name: 'idle_f',
    speed: 8,
    flag: 1
  },
  fear: {
    dict: 'amb@code_human_cower@female@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  grief: {
    dict: 'amb@code_human_cower@female@idle_a',
    name: 'idle_c',
    speed: 8,
    flag: 1
  },
  ground: {
    dict: 'amb@world_human_picnic@male@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  stomach: {
    dict: 'amb@world_human_sunbathe@female@front@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  groundChangeName: {
    dict: 'amb@world_human_picnic@male@enter',
    name: 'enter',
    speed: 8,
    flag: 1
  },
  chill: {
    dict: 'amb@world_human_sunbathe@male@back@idle_a',
    name: 'idle_a',
    speed: 8,
    flag: 1
  },
  sleep: {
    dict: 'amb@world_human_bum_slumped@male@laying_on_left_side@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  two: {
    dict: 'amb@code_human_in_car_mp_actions@v_sign@bodhi@rps@base',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  applause: {
    dict: 'amb@world_human_cheering@female_d',
    name: 'base',
    speed: 8,
    flag: 49
  },
  chicken: {
    dict: 'anim@mp_player_intcelebrationmale@chicken_taunt',
    name: 'chicken_taunt',
    speed: 8,
    flag: 49
  },
  facepalm: {
    dict: 'anim@mp_player_intcelebrationmale@face_palm',
    name: 'face_palm',
    speed: 8,
    flag: 49
  },
  salute: {
    dict: 'anim@mp_player_intcelebrationmale@salute',
    name: 'salute',
    speed: 8,
    flag: 49
  },
  ok: {
    dict: 'anim@mp_player_intselfiedock',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  like: {
    dict: 'anim@mp_player_intselfiethumbs_up',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  no: {
    dict: 'anim@mp_player_intupperno_way',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  dance1: {
    dict: 'amb@world_human_strip_watch_stand@male_b@base',
    name: 'base',
    speed: 8,
    flag: 49
  },
  dance2: {
    dict: 'special_ped@pamela@monologue_8@monologue_8d',
    name: 'pamela_ig_1_p8_wonderfultimes_3',
    speed: 8,
    flag: 49
  },
  dance3: {
    dict: 'amb@world_human_cheering@female_a',
    name: 'base',
    speed: 8,
    flag: 49
  },
  dance4: {
    dict: 'amb@world_human_cheering@female_c',
    name: 'base',
    speed: 8,
    flag: 49
  },
  dance5: {
    dict: 'amb@world_human_partying@female@partying_beer@base',
    name: 'base',
    speed: 8,
    flag: 49
  },
  barbell: {
    dict: 'amb@world_human_muscle_free_weights@male@barbell@base',
    name: 'base',
    speed: 8,
    flag: 49
  },
  warmUp: {
    dict: 'amb@world_human_yoga@female@base',
    name: 'base_b',
    speed: 8,
    flag: 49
  },
  pullUp: {
    dict: 'amb@prop_human_muscle_chin_ups@male@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  pushUp: {
    dict: 'amb@world_human_push_ups@male@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  fists: {
    dict: 'anim@mp_player_intupperknuckle_crunch',
    name: 'idle_a',
    speed: 8,
    flag: 49
  },
  press: {
    dict: 'amb@world_human_sit_ups@male@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  muscles: {
    dict: 'amb@world_human_muscle_flex@arms_in_front@idle_a',
    name: 'idle_b',
    speed: 8,
    flag: 49
  },
  crossArms: {
    dict: 'amb@world_human_stand_guard@male@idle_a',
    name: 'idle_a',
    speed: 8,
    flag: 1
  },
  crossLegs: {
    dict: 'impexp_int_l1-8',
    name: 'mp_m_waremech_01_dual-8',
    speed: 8,
    flag: 1
  },
  drink: {
    dict: 'amb@world_human_aa_coffee@idle_a',
    name: 'idle_a',
    speed: 8,
    flag: 1
  },
  guard: {
    dict: 'anim@amb@code_human_patrol@male@2h@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  handsUp: {
    dict: 'mp_defend_base',
    name: 'guard_handsup_loop',
    speed: 8,
    flag: 1
  },
  headUp: {
    dict: 'anim@mp_player_intupperchin_brush',
    name: 'idle_a',
    speed: 8,
    flag: 1
  },
  phone: {
    dict: 'amb@world_human_stand_mobile@female@standing@call@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  shoulders: {
    dict: 'amb@world_human_cop_idles@female@idle_b',
    name: 'idle_e',
    speed: 8,
    flag: 1
  },
  smoke: {
    dict: 'amb@world_human_smoking@female@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  think: {
    dict: 'amb@code_human_police_investigate@idle_a',
    name: 'idle_a',
    speed: 8,
    flag: 1
  },
  turnAround: {
    dict: 'anim@amb@code_human_in_car_idles@arm@generic@ds@idle_l',
    name: 'idle_lowdoor',
    speed: 8,
    flag: 1
  },
  waveHand: {
    dict: 'amb@world_human_car_park_attendant@male@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  zombie: {
    dict: 'amb@world_human_bum_standing@depressed@base',
    name: 'base',
    speed: 8,
    flag: 1
  },
  docs: {
    dict: 'amb@world_human_stand_mobile_fat@male@text@enter',
    name: 'enter',
    speed: 1,
    flag: 33
  },
  handshake: {
    dict: 'anim@mp_player_intcelebrationpaired@m_m_manly_handshake',
    name: 'manly_handshake_right',
    speed: 1,
    flag: 33
  },
  pickup: {
    dict: 'anim@mp_snowball',
    name: 'pickup_snowball',
    speed: 1,
    flag: 47
  },
  arresting: {
    dict: 'mp_arresting',
    name: 'idle',
    speed: 1,
    flag: 49
  },
  holdBox: {
    dict: 'anim@heists@box_carry@',
    name: 'idle',
    speed: 8,
    flag: 49
  },
  hammering: {
    dict: 'amb@world_human_hammering@male@base',
    name: 'base',
    speed: 1,
    flag: 47
  },
  casino: {
    dict: 'anim@special_peds@casino@dean@slots@',
    name: 'that_actor_sp_dean',
    speed: 8,
    flag: 1
  },
  dead: {
    dict: 'dead',
    name: 'dead_a',
    speed: 8,
    flag: 1
  },
  resuscitation: {
    dict: 'amb@medic@standing@tendtodead@idle_a',
    name: 'idle_a',
    speed: 1,
    flag: 39
  },
  fishing_wait: {
    dict: 'amb@world_human_stand_fishing@base',
    name: 'base',
    speed: 1,
    flag: 31
  },
  fishing_take: {
    dict: 'amb@world_human_stand_fishing@idle_a',
    name: 'idle_c',
    speed: 1,
    flag: 31
  },
  phone_press: {
    dict: 'cellphone@str',
    name: 'cellphone_text_press_a',
    speed: 8,
    flag: 49
  }
});

/***/ }),

/***/ "./src/data/clothes/empty.js":
/*!***********************************!*\
  !*** ./src/data/clothes/empty.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  female: {
    '1': 0,
    '3': 15,
    '4': 15,
    '5': 0,
    '6': 35,
    '7': 0,
    '8': 6,
    '9': 0,
    '10': 0,
    '11': 15
  },
  male: {
    '1': 0,
    '3': 15,
    '4': 21,
    '5': 0,
    '6': 34,
    '7': 0,
    '8': 15,
    '9': 0,
    '10': 0,
    '11': 15
  }
});

/***/ }),

/***/ "./src/data/clothes/tops.js":
/*!**********************************!*\
  !*** ./src/data/clothes/tops.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  //Верхняя одежда
  female: {
    '1': 0,
    '3': 2,
    '6': 0,
    '7': 0,
    '8': 0,
    '10': 1,
    '20': 0,
    '21': 2,
    '24': 0,
    '25': 0,
    '31': 0,
    '34': 0,
    '35': 0,
    '37': 2,
    '44': 2,
    '45': 2,
    '50': 2,
    '51': 0,
    '53': 1,
    '54': 2,
    '55': 2,
    '58': 1,
    '62': 2,
    '63': 2,
    '64': 0,
    '65': 0,
    '66': 2,
    '69': 2,
    '70': 2,
    '71': 2,
    '72': 2,
    '77': 2,
    '78': 2,
    '80': 2,
    '81': 2,
    '87': 2,
    '90': 0,
    '91': 1,
    '92': 0,
    '95': 1,
    '97': 0,
    '98': 2,
    '99': 1,
    '102': 2,
    '103': 2,
    '104': 1,
    '106': 2,
    '107': 0,
    '108': 1,
    '110': 2,
    '112': 2,
    '113': 2,
    '114': 2,
    '115': 2,
    '116': 2,
    '121': 2,
    '122': 2,
    '123': 2,
    '127': 2,
    '131': 2,
    '133': 0,
    '134': 2,
    '135': 2,
    '137': 1,
    '138': 2,
    '139': 0,
    '140': 2,
    '143': 1,
    '144': 2,
    '145': 2,
    '147': 2,
    '148': 0,
    '150': 2,
    '151': 2,
    '153': 0,
    '156': 2,
    '158': 1,
    '160': 0,
    '162': 2,
    '163': 0,
    '164': 0,
    '165': 2,
    '166': 0,
    '172': 2,
    '174': 0,
    '176': 1,
    '178': 2,
    '183': 0,
    '184': 2,
    '185': 1,
    '186': 2,
    '187': 0,
    '189': 2,
    '190': 2,
    '191': 0,
    '192': 2,
    '193': 0,
    '194': 0,
    '196': 2,
    '198': 2,
    '200': 2,
    '202': 2,
    '206': 2,
    '210': 2,
    '216': 0,
    '217': 2,
    '219': 0,
    '228': 2,
    '240': 0,
    '242': 1,
    '248': 0,
    '253': 2,
    '259': 2,
    '264': 2,
    '265': 2,
    '266': 2,
    '267': 2,
    '268': 2,
    '271': 2,
    '275': 0,
    '278': 0,
    '292': 2,
    '301': 2,
    '307': 2,
    '309': 2,
    '314': 0,
    '315': 0,
    '316': 2,
    '318': 2,
    '319': 2,
    '320': 0,
    '322': 2,
    '323': 3,
    '341': 2,
    '344': 2,
    '345': 2,
    '353': 0,
    '354': 0,
    '363': 0,
    '365': 0
  },
  male: {
    '3': 0,
    '4': 0,
    '6': 1,
    '7': 0,
    '10': 0,
    '11': 3,
    '19': 0,
    '20': 0,
    '21': 3,
    '23': 0,
    '24': 0,
    '25': 3,
    '27': 0,
    '28': 0,
    '35': 0,
    '37': 1,
    '40': 3,
    '45': 3,
    '46': 0,
    '57': 2,
    '58': 0,
    '59': 0,
    '61': 2,
    '62': 0,
    '64': 1,
    '65': 1,
    '68': 1,
    '69': 1,
    '70': 0,
    '72': 0,
    '74': 0,
    '75': 2,
    '76': 1,
    '77': 0,
    '78': 2,
    '79': 2,
    '84': 2,
    '85': 2,
    '86': 2,
    '87': 2,
    '88': 0,
    '89': 2,
    '90': 2,
    '96': 2,
    '106': 0,
    '107': 2,
    '108': 2,
    '109': 3,
    '110': 2,
    '111': 2,
    '112': 1,
    '113': 2,
    '114': 1,
    '115': 0,
    '116': 1,
    '118': 0,
    '119': 0,
    '120': 3,
    '121': 2,
    '122': 0,
    '124': 0,
    '125': 2,
    '126': 2,
    '129': 2,
    '130': 0,
    '134': 2,
    '136': 0,
    '137': 3,
    '138': 2,
    '140': 1,
    '141': 2,
    '142': 0,
    '143': 2,
    '145': 2,
    '147': 2,
    '148': 2,
    '149': 1,
    '150': 2,
    '151': 0,
    '153': 2,
    '154': 2,
    '156': 0,
    '157': 0,
    '159': 3,
    '160': 0,
    '161': 1,
    '162': 3,
    '163': 0,
    '165': 2,
    '166': 0,
    '167': 0,
    '168': 1,
    '169': 0,
    '171': 2,
    '172': 0,
    '174': 1,
    '176': 3,
    '177': 3,
    '178': 2,
    '181': 0,
    '182': 2,
    '184': 2,
    '185': 0,
    '187': 2,
    '188': 2,
    '189': 0,
    '190': 2,
    '191': 0,
    '192': 0,
    '194': 2,
    '196': 2,
    '198': 2,
    '200': 2,
    '203': 2,
    '204': 2,
    '206': 3,
    '210': 2,
    '213': 3,
    '214': 2,
    '215': 0,
    '218': 2,
    '220': 2,
    '229': 2,
    '232': 0,
    '240': 0,
    '244': 2,
    '245': 2,
    '249': 2,
    '251': 2,
    '254': 2,
    '256': 2,
    '257': 2,
    '258': 2,
    '259': 2,
    '262': 2,
    '266': 0,
    '269': 0,
    '270': 2,
    '272': 2,
    '279': 2,
    '281': 2,
    '288': 2,
    '296': 2,
    '298': 2,
    '300': 2,
    '304': 0,
    '305': 2,
    '307': 2,
    '309': 0,
    '310': 1,
    '324': 2,
    '326': 2,
    '329': 2,
    '330': 2,
    '332': 2,
    '336': 2,
    '338': 0,
    '339': 0,
    '341': 2,
    '344': 0
  }
});

/***/ }),

/***/ "./src/data/clothes/torsos.js":
/*!************************************!*\
  !*** ./src/data/clothes/torsos.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  female: {
    '0': 0,
    '1': 5,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 4,
    '6': 5,
    '7': 5,
    '8': 5,
    '9': 0,
    '10': 5,
    '11': 4,
    '12': 12,
    '13': 15,
    '14': 14,
    '15': 15,
    '16': 15,
    '17': 0,
    '18': 15,
    '19': 15,
    '20': 5,
    '21': 4,
    '22': 4,
    '23': 4,
    '24': 5,
    '25': 5,
    '26': 12,
    '27': 0,
    '28': 15,
    '29': 9,
    '30': 2,
    '31': 5,
    '32': 4,
    '33': 4,
    '34': 6,
    '35': 5,
    '36': 4,
    '37': 4,
    '38': 2,
    '39': 1,
    '40': 2,
    '41': 5,
    '42': 5,
    '43': 3,
    '44': 3,
    '45': 3,
    '46': 3,
    '47': 3,
    '48': 14,
    '49': 14,
    '50': 14,
    '51': 5,
    '52': 6,
    '53': 15,
    '54': 5,
    '55': 5,
    '56': 14,
    '57': 5,
    '58': 5,
    '60': 14,
    '61': 3,
    '62': 5,
    '63': 5,
    '64': 5,
    '65': 5,
    '66': 6,
    '67': 2,
    '68': 0,
    '69': 0,
    '70': 0,
    '71': 0,
    '72': 0,
    '73': 14,
    '74': 15,
    '75': 9,
    '76': 9,
    '77': 9,
    '78': 9,
    '79': 9,
    '80': 9,
    '81': 9,
    '82': 15,
    '83': 9,
    '84': 14,
    '85': 14,
    '86': 9,
    '87': 9,
    '88': 0,
    '89': 0,
    '90': 6,
    '91': 7,
    '92': 5,
    '93': 5,
    '94': 5,
    '95': 5,
    '96': 4,
    '97': 5,
    '98': 5,
    '99': 5,
    '100': 0,
    '101': 15,
    '102': 3,
    '103': 3,
    '104': 5,
    '105': 4,
    '106': 6,
    '107': 6,
    '108': 6,
    '109': 6,
    '110': 6,
    '111': 4,
    '112': 4,
    '113': 4,
    '114': 4,
    '115': 4,
    '116': 4,
    '117': 11,
    '118': 11,
    '119': 11,
    '120': 6,
    '121': 6,
    '122': 2,
    '125': 14,
    '126': 14,
    '127': 14,
    '128': 14,
    '129': 14,
    '130': 9,
    '131': 3,
    '132': 2,
    '133': 5,
    '135': 3,
    '136': 3,
    '137': 5,
    '138': 6,
    '139': 5,
    '140': 5,
    '141': 14,
    '142': 9,
    '143': 5,
    '144': 3,
    '145': 3,
    '146': 7,
    '147': 1,
    '148': 5,
    '149': 5,
    '150': 0,
    '151': 0,
    '152': 7,
    '153': 5,
    '154': 15,
    '155': 15,
    '156': 15,
    '157': 15,
    '158': 7,
    '159': 15,
    '160': 5,
    '161': 11,
    '162': 0,
    '163': 5,
    '164': 5,
    '165': 5,
    '166': 5,
    '167': 15,
    '168': 15,
    '169': 15,
    '170': 15,
    '171': 15,
    '172': 14,
    '173': 15,
    '174': 15,
    '175': 15,
    '176': 15,
    '177': 15,
    '178': 15,
    '179': 11,
    '180': 3,
    '181': 15,
    '182': 15,
    '183': 15,
    '184': 14,
    '185': 6,
    '186': 6,
    '187': 6,
    '188': 6,
    '189': 6,
    '190': 6,
    '191': 6,
    '192': 5,
    '193': 5,
    '194': 6,
    '195': 4,
    '196': 1,
    '197': 1,
    '198': 1,
    '199': 1,
    '200': 1,
    '201': 1,
    '202': 2,
    '203': 8,
    '204': 4,
    '205': 2,
    '206': 1,
    '207': 4,
    '208': 11,
    '209': 11,
    '210': 11,
    '211': 11,
    '212': 0,
    '213': 1,
    '214': 1,
    '215': 1,
    '216': 5,
    '217': 4,
    '218': 0,
    '219': 5,
    '220': 15,
    '221': 15,
    '222': 15,
    '223': 15,
    '224': 14,
    '225': 15,
    '226': 11,
    '227': 3,
    '228': 3,
    '229': 4,
    '230': 0,
    '231': 0,
    '232': 0,
    '233': 11,
    '234': 6,
    '235': 1,
    '236': 14,
    '237': 3,
    '238': 3,
    '239': 3,
    '240': 5,
    '241': 3,
    '242': 6,
    '243': 6,
    '244': 9,
    '245': 14,
    '246': 14,
    '247': 4,
    '248': 5,
    '249': 14,
    '265': 3,
    '266': 6,
    '267': 1,
    '269': 9,
    '271': 9,
    '280': 14,
    '292': 3,
    '309': 3,
    '315': 5,
    '316': 3,
    '319': 3,
    '322': 11,
    '323': 11,
    '324': 14,
    '335': 14,
    '337': 14,
    '344': 3,
    '345': 3,
    '349': 14,
    '353': 6,
    '354': 6,
    '359': 9,
    '368': 14,
    '369': 14
  },
  male: {
    '0': 0,
    '1': 0,
    '2': 2,
    '3': 14,
    '4': 14,
    '5': 5,
    '6': 14,
    '7': 14,
    '8': 8,
    '9': 0,
    '10': 14,
    '11': 15,
    '12': 12,
    '13': 11,
    '14': 12,
    '15': 15,
    '16': 0,
    '17': 5,
    '18': 0,
    '19': 14,
    '20': 14,
    '21': 15,
    '22': 0,
    '23': 14,
    '24': 14,
    '25': 15,
    '26': 11,
    '27': 14,
    '28': 14,
    '29': 14,
    '30': 14,
    '31': 14,
    '32': 14,
    '33': 0,
    '34': 0,
    '35': 14,
    '36': 5,
    '37': 14,
    '38': 8,
    '39': 0,
    '40': 15,
    '41': 12,
    '42': 11,
    '43': 11,
    '44': 0,
    '45': 15,
    '46': 14,
    '47': 0,
    '48': 1,
    '49': 1,
    '50': 1,
    '51': 1,
    '52': 2,
    '53': 0,
    '54': 1,
    '55': 0,
    '56': 0,
    '57': 0,
    '58': 14,
    '59': 14,
    '60': 15,
    '61': 4,
    '62': 14,
    '63': 5,
    '64': 14,
    '65': 14,
    '66': 15,
    '67': 1,
    '68': 14,
    '69': 14,
    '70': 14,
    '71': 0,
    '72': 14,
    '73': 0,
    '74': 14,
    '75': 11,
    '76': 14,
    '77': 14,
    '78': 14,
    '79': 14,
    '80': 0,
    '81': 0,
    '82': 0,
    '83': 0,
    '84': 1,
    '85': 1,
    '86': 1,
    '87': 1,
    '88': 14,
    '89': 14,
    '90': 14,
    '91': 15,
    '92': 6,
    '93': 0,
    '94': 0,
    '95': 11,
    '96': 11,
    '97': 0,
    '98': 0,
    '100': 14,
    '101': 14,
    '103': 14,
    '105': 11,
    '106': 14,
    '107': 14,
    '108': 14,
    '109': 5,
    '110': 1,
    '111': 4,
    '112': 14,
    '113': 6,
    '114': 14,
    '115': 14,
    '116': 14,
    '117': 6,
    '118': 14,
    '119': 14,
    '120': 5,
    '121': 14,
    '122': 14,
    '123': 11,
    '124': 14,
    '125': 14,
    '126': 1,
    '127': 14,
    '128': 0,
    '129': 0,
    '130': 14,
    '131': 0,
    '132': 0,
    '133': 11,
    '134': 0,
    '135': 0,
    '136': 14,
    '137': 6,
    '138': 14,
    '139': 12,
    '140': 14,
    '141': 6,
    '142': 14,
    '143': 14,
    '144': 6,
    '145': 14,
    '146': 0,
    '147': 4,
    '148': 4,
    '149': 14,
    '150': 14,
    '151': 14,
    '152': 14,
    '153': 14,
    '154': 14,
    '155': 14,
    '156': 14,
    '157': 15,
    '158': 15,
    '159': 15,
    '160': 15,
    '161': 14,
    '162': 15,
    '163': 14,
    '164': 0,
    '165': 0,
    '166': 14,
    '167': 14,
    '168': 14,
    '169': 14,
    '170': 15,
    '171': 1,
    '172': 14,
    '173': 15,
    '174': 14,
    '175': 15,
    '176': 15,
    '177': 15,
    '178': 1,
    '179': 15,
    '180': 15,
    '181': 15,
    '182': 1,
    '184': 14,
    '185': 14,
    '186': 14,
    '187': 14,
    '188': 14,
    '189': 14,
    '190': 14,
    '191': 14,
    '192': 14,
    '193': 0,
    '194': 1,
    '195': 1,
    '196': 1,
    '197': 1,
    '198': 15,
    '199': 1,
    '200': 1,
    '201': 3,
    '202': 4,
    '203': 1,
    '204': 6,
    '205': 5,
    '206': 5,
    '207': 5,
    '208': 0,
    '209': 0,
    '210': 0,
    '211': 0,
    '212': 14,
    '213': 15,
    '214': 14,
    '215': 14,
    '216': 15,
    '217': 14,
    '218': 14,
    '219': 15,
    '220': 14,
    '221': 14,
    '222': 11,
    '223': 5,
    '224': 1,
    '225': 8,
    '226': 0,
    '227': 4,
    '228': 4,
    '229': 14,
    '230': 14,
    '231': 4,
    '232': 14,
    '233': 14,
    '234': 11,
    '235': 0,
    '236': 0,
    '237': 5,
    '238': 2,
    '239': 2,
    '240': 14,
    '251': 0,
    '249': 6,
    '250': 0,
    '254': 4,
    '255': 15,
    '257': 6,
    '259': 6,
    '260': 11,
    '262': 4,
    '270': 4,
    '271': 0,
    '272': 4,
    '279': 4,
    '298': 4,
    '300': 6,
    '304': 14,
    '305': 4,
    '313': 0,
    '321': 1,
    '323': 0,
    '324': 4,
    '325': 0,
    '329': 4,
    '330': 4,
    '332': 4,
    '334': 0,
    '335': 8,
    '336': 4,
    '337': 11,
    '338': 14,
    '339': 14,
    '341': 4,
    '345': 0,
    '348': 1,
    '350': 0
  }
});

/***/ }),

/***/ "./src/data/clothes/undershirts.js":
/*!*****************************************!*\
  !*** ./src/data/clothes/undershirts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  //Верхняя одежда
  female: {
    '0': [0, 1],
    '5': [5, 5],
    '11': [11, 11],
    '13': [13, 13],
    '16': [16, 16],
    '19': [18, 19],
    '22': [22, 22],
    '23': [20, 21],
    '26': [23],
    '30': [26],
    '32': [27, 27],
    '33': [28, 28],
    '36': [29, 29],
    '38': [30],
    '40': [31],
    '48': [35],
    '49': [51],
    '67': [49],
    '68': [50, 45],
    '73': [57, 59],
    '74': [60, 60],
    '75': [61, 63],
    '103': [67],
    '111': [68, 68],
    '117': [71, 71],
    '118': [74, 74],
    '141': [80, 80],
    '149': [82, 83],
    '208': [111, 108],
    '212': [128, 129],
    '246': [149, 150],
    '280': [167, 167],
    '283': [176, 176],
    '284': [null, 175]
  },
  male: {
    '0': [0, 2],
    '1': [1, 14],
    '5': [5],
    '8': [8],
    '9': [9],
    '13': [13, 13],
    '14': [29, 30],
    '16': [16, 18],
    '18': [19, 20],
    '22': [23, 24],
    '26': [27, 27],
    '33': [37, 39],
    '34': [38, 44],
    '38': [41],
    '39': [42],
    '41': [43],
    '42': [45, 45],
    '44': [47, 48],
    '47': [53, 54],
    '71': [67, 68],
    '73': [65, 66],
    '152': [79, 80],
    '208': [101, 102],
    '226': [106, 107],
    '235': [109, 110],
    '271': [135, 136],
    '345': [168, 169]
  }
});

/***/ }),

/***/ "./src/data/doors.js":
/*!***************************!*\
  !*** ./src/data/doors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  police: [{
    model: mp.joaat('gabz_mrpd_cells_door'),
    x: 476.6157,
    y: -1008.875,
    z: 26.48005
  }, {
    model: mp.joaat('gabz_mrpd_cells_door'),
    x: 481.0084,
    y: -1004.118,
    z: 26.48005
  }, {
    model: mp.joaat('gabz_mrpd_cells_door'),
    x: 484.1764,
    y: -1007.734,
    z: 26.48005
  }, {
    model: mp.joaat('gabz_mrpd_cells_door'),
    x: 486.9131,
    y: -1012.189,
    z: 26.48005
  }, {
    model: mp.joaat('gabz_mrpd_cells_door'),
    x: 483.9127,
    y: -1012.189,
    z: 26.48005
  }, {
    model: mp.joaat('gabz_mrpd_cells_door'),
    x: 480.9128,
    y: -1012.189,
    z: 26.48005
  }, {
    model: mp.joaat('gabz_mrpd_cells_door'),
    x: 477.9126,
    y: -1012.189,
    z: 26.48005
  }]
});

/***/ }),

/***/ "./src/data/factions.js":
/*!******************************!*\
  !*** ./src/data/factions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  Полиция: {
    x: 441.09,
    y: -982.429,
    z: 30.69,
    rotation: 178.7,
    dimension: 0
  },
  ЧОП: {
    x: 1418.71435546875,
    y: 1138.9951171875,
    z: 114.33403778076172,
    rotation: 95.20927429199219,
    dimension: 0
  },
  FBI: {
    x: 112.091,
    y: -749.255,
    z: 45.763,
    rotation: 178.7,
    dimension: 0
  },
  'Итальянская мафия': {
    x: -2586.18994140625,
    y: 1914.18701171875,
    z: 167.31275939941406,
    rotation: 142.84368896484375,
    dimension: 0
  },
  Шериф: {
    x: -444.765,
    y: 6011.797,
    z: 31.716,
    rotation: 244,
    dimension: 0
  },
  EMS: {
    x: 307.048,
    y: -594.872,
    z: 43.284,
    rotation: 244,
    dimension: 0
  }
});

/***/ }),

/***/ "./src/data/factions/coords.ts":
/*!*************************************!*\
  !*** ./src/data/factions/coords.ts ***!
  \*************************************/
/*! exports provided: garageCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "garageCoords", function() { return garageCoords; });
const garageCoords = {
  ems: {
    all: [{
      x: 323.8373107910156,
      y: -541.5528564453125,
      z: 28.523391723632812,
      rot: 180.8024139404297
    }, {
      x: 326.61920166015625,
      y: -541.5902709960938,
      z: 28.524730682373047,
      rot: 180.74427795410156
    }, {
      x: 329.3594970703125,
      y: -541.7579956054688,
      z: 28.52420425415039,
      rot: 180.74917602539062
    }, {
      x: 332.1861267089844,
      y: -541.3641357421875,
      z: 28.524768829345703,
      rot: 180.07220458984375
    }, {
      x: 316.5430908203125,
      y: -547.994384765625,
      z: 28.524587631225586,
      rot: 270.4905090332031
    }],
    helicopter: [{
      x: 351.94525146484375,
      y: -589.27001953125,
      z: 74.26790618896484,
      rot: 71.08663940429688
    }]
  },
  fbi: {
    all: [{
      x: 100.23711395263672,
      y: -728.8741455078125,
      z: 32.78530502319336,
      rot: 339.4847106933594
    }, {
      x: 104.43256378173828,
      y: -729.7334594726562,
      z: 32.7881965637207,
      rot: 340.6422119140625
    }, {
      x: 107.98893737792969,
      y: -731.4922485351562,
      z: 32.78622817993164,
      rot: 339.7969665527344
    }, {
      x: 115.2495346069336,
      y: -734.533447265625,
      z: 32.786014556884766,
      rot: 339.0509338378906
    }, {
      x: 118.84574890136719,
      y: -735.9999389648438,
      z: 32.787288665771484,
      rot: 338.95343017578125
    }],
    helicopter: [{
      x: 202.35374450683594,
      y: -719.5108642578125,
      z: 47.18095397949219,
      rot: 0.003448486328125
    }]
  },
  lssd: {
    all: [{
      x: -482.1913757324219,
      y: 6024.34130859375,
      z: 30.99365997314453,
      rot: 225.618896484375
    }, {
      x: -479.14373779296875,
      y: 6027.52685546875,
      z: 30.993520736694336,
      rot: 277.8463134765625
    }, {
      x: -475.6172790527344,
      y: 6031.109375,
      z: 30.99532127380371,
      rot: 277.8463134765625
    }, {
      x: -471.5708923339844,
      y: 6034.30908203125,
      z: 30.996423721313477,
      rot: 277.8463134765625
    }, {
      x: -468.2393798828125,
      y: 6037.87060546875,
      z: 30.993722915649414,
      rot: 277.8463134765625
    }],
    helicopter: [{
      x: -474.95556640625,
      y: 5989.4833984375,
      z: 31.43916893005371,
      rot: 312.1757507324219
    }]
  },
  lspd: {
    all: [{
      x: 426.008,
      y: -997.197,
      z: 25.306,
      rot: -90.097
    }, {
      x: 425.416,
      y: -991.686,
      z: 25.306,
      rot: -90.639
    }, {
      x: 425.821,
      y: -984.173,
      z: 25.306,
      rot: -90.112
    }, {
      x: 425.974,
      y: -978.766,
      z: 25.306,
      rot: -90.323
    }, {
      x: 437.392,
      y: -989.045,
      z: 25.306,
      rot: 89.04
    }, {
      x: 437.603,
      y: -994.286,
      z: 25.305,
      rot: 91.297
    }, {
      x: 445.558,
      y: -986.092,
      z: 25.306,
      rot: -88.422
    }, {
      x: 445.628,
      y: -991.628,
      z: 25.306,
      rot: -89.923
    }, {
      x: 445.71,
      y: -996.94,
      z: 25.305,
      rot: -90.165
    }],
    helicopter: [{
      x: 449.905,
      y: -981.031,
      z: 44.079,
      rot: 89.809
    }, {
      x: 480.322,
      y: -982.149,
      z: 41.395,
      rot: 89.415
    }]
  },
  secure: {
    all: [{
      x: 1414.027,
      y: 1116.429,
      z: 114.653,
      rot: 90.085
    }, {
      x: 1404.451,
      y: 1116.414,
      z: 114.654,
      rot: 90.105
    }, {
      x: 1414.488,
      y: 1120.801,
      z: 114.653,
      rot: 90.519
    }, {
      x: 1405.096,
      y: 1120.715,
      z: 114.652,
      rot: 90.509
    }]
  },
  italy: {
    all: [{
      x: -2602.999,
      y: 1921.944,
      z: 167.145,
      rot: 6.549
    }, {
      x: -2595.155,
      y: 1921.899,
      z: 167.147,
      rot: 5.807
    }]
  }
};

/***/ }),

/***/ "./src/data/hospitals.ts":
/*!*******************************!*\
  !*** ./src/data/hospitals.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 313.453,
  y: -583.313,
  z: 43.284
}
/*{ Спавн в двух больницах сенди и палето бэй
	x: 1826.674,
	y: 3677.704,
	z: 34.27
},
{
	x: -259.118,
	y: 6323.816,
	z: 32.427
}*/
]);

/***/ }),

/***/ "./src/data/houses.ts":
/*!****************************!*\
  !*** ./src/data/houses.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  low: {
    price: 120000,
    vehicles: 1,
    inventory: 250,
    coords: {
      location: {
        x: 151.307,
        y: -1007.592,
        z: -98.999
      },
      wardrobe: {
        x: 151.913,
        y: -1001.344,
        z: -98.999
      },
      inventory: {
        x: 151.679,
        y: -1003.158,
        z: -98.999
      }
    }
  },
  average: {
    price: 500000,
    vehicles: 3,
    inventory: 500,
    coords: {
      location: {
        x: 266.041,
        y: -1007.285,
        z: -101.011
      },
      wardrobe: {
        x: 259.816,
        y: -1003.735,
        z: -99.008
      },
      inventory: {
        x: 265.582,
        y: -999.401,
        z: -99.008
      }
    }
  },
  elite: {
    price: 3800000,
    vehicles: 8,
    inventory: 1400,
    coords: {
      location: {
        x: -1902.575,
        y: -572.832,
        z: 19.097
      },
      wardrobe: {
        x: -1909.315,
        y: -571.5443,
        z: 19.097
      },
      inventory: {
        x: -1905.008,
        y: -571.072,
        z: 19.097
      }
    }
  },
  premium: {
    price: 10000000,
    vehicles: 16,
    inventory: 10000,
    coords: {
      location: {
        x: 117.257,
        y: 559.563,
        z: 184.305
      },
      wardrobe: {
        x: 122.132,
        y: 548.926,
        z: 180.497
      },
      inventory: {
        x: 118.366,
        y: 566.385,
        z: 176.697
      }
    }
  }
});

/***/ }),

/***/ "./src/data/moods.ts":
/*!***************************!*\
  !*** ./src/data/moods.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  normal: null,
  aiming: 'mood_aiming_1',
  angry: 'mood_angry_1',
  drunk: 'mood_drunk_1',
  happy: 'mood_happy_1',
  injured: 'mood_injured_1',
  stressed: 'mood_stressed_1',
  sulking: 'mood_sulk_1'
});

/***/ }),

/***/ "./src/data/objects.ts":
/*!*****************************!*\
  !*** ./src/data/objects.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  pickaxe: {
    bone: 73,
    model: 'prop_tool_pickaxe',
    x: 0.085,
    y: -0.3,
    z: 0.0,
    rx: -90.0,
    ry: 0.0,
    rz: 0.0
  },
  vehicleBox: {
    bone: 'forks_attach',
    model: 'prop_box_wood07a',
    x: 0,
    y: 0.075,
    z: 0.075,
    rx: 0,
    ry: 0,
    rz: 0
  },
  woodenBox: {
    bone: 48,
    model: 'hei_prop_heist_wooden_box',
    x: 0.0,
    y: -0.3,
    z: 0.3,
    rx: -45.0,
    ry: 20.0,
    rz: 120.0
  },
  rod: {
    bone: 61,
    model: 'prop_fishing_rod_01',
    x: 0.03,
    y: 0,
    z: 0.02,
    rx: 0,
    ry: 0,
    rz: 50
  },
  phone: {
    bone: 90,
    model: 'p_cs_cam_phone',
    x: 0,
    y: 0,
    z: 0,
    rx: 0,
    ry: 0,
    rz: 30
  }
});

/***/ }),

/***/ "./src/data/prisonCells.js":
/*!*********************************!*\
  !*** ./src/data/prisonCells.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 1728.2470703125,
  y: 2630.140869140625,
  z: 45.5649299621582
}, {
  x: 1727.3319091796875,
  y: 2636.626708984375,
  z: 45.56507110595703
}, {
  x: 1726.80712890625,
  y: 2640.588134765625,
  z: 45.56507110595703
}, {
  x: 1726.036376953125,
  y: 2647.470947265625,
  z: 45.565181732177734
}, {
  x: 1747.4569091796875,
  y: 2646.283935546875,
  z: 45.5651741027832
}, {
  x: 1747.38818359375,
  y: 2635.142822265625,
  z: 45.56507110595703
}, {
  x: 1746.5032958984375,
  y: 2630.67578125,
  z: 45.564971923828125
}]);

/***/ }),

/***/ "./src/data/services/airShop.js":
/*!**************************************!*\
  !*** ./src/data/services/airShop.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -1104.8885498046875,
  y: -2892.277099609375,
  z: 13.945975303649902
}]);

/***/ }),

/***/ "./src/data/services/airports.js":
/*!***************************************!*\
  !*** ./src/data/services/airports.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -1229.2120361328125,
  y: -3376.934326171875,
  z: 13.945050239562988,
  stand: {
    x: -1242.343017578125,
    y: -3345.632080078125,
    z: 13.945040702819824,
    rotation: 336.0616760253906
  }
}]);

/***/ }),

/***/ "./src/data/services/appearance.js":
/*!*****************************************!*\
  !*** ./src/data/services/appearance.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 319.867,
  y: -568.591,
  z: 43.284
}, {
  x: 1820.113,
  y: 3673.207,
  z: 34.27
}, {
  x: -252.971,
  y: 6315.504,
  z: 32.427
}]);

/***/ }),

/***/ "./src/data/services/bagShops.js":
/*!***************************************!*\
  !*** ./src/data/services/bagShops.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -1337.867919921875,
  y: -1277.9178466796875,
  z: 4.875597953796387
}]);

/***/ }),

/***/ "./src/data/services/bank.js":
/*!***********************************!*\
  !*** ./src/data/services/bank.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 150.0041961669922,
  y: -1040.5150146484375,
  z: 29.374082565307617
}, {
  x: -2962.898193359375,
  y: 482.88958740234375,
  z: 15.70309829711914
}, {
  x: 314.3460693359375,
  y: -278.779541015625,
  z: 54.170780181884766
}, {
  x: -1212.5716552734375,
  y: -330.58685302734375,
  z: 37.78703689575195
}, {
  x: 1174.9228515625,
  y: 2706.789306640625,
  z: 38.094032287597656
}, {
  x: -112.46031188964844,
  y: 6468.82861328125,
  z: 31.626697540283203
}]);

/***/ }),

/***/ "./src/data/services/barberShops.js":
/*!******************************************!*\
  !*** ./src/data/services/barberShops.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 137.47,
  y: -1708.16,
  z: 29.29
}, {
  x: 1931.893,
  y: 3730.902,
  z: 32.844
}]);

/***/ }),

/***/ "./src/data/services/boatRental.js":
/*!*****************************************!*\
  !*** ./src/data/services/boatRental.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 1297.42578125,
  y: 4216.93212890625,
  z: 33.90867233276367
}]);

/***/ }),

/***/ "./src/data/services/boatShop.js":
/*!***************************************!*\
  !*** ./src/data/services/boatShop.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -754.054931640625,
  y: -1510.7506103515625,
  z: 5.017014980316162
}]);

/***/ }),

/***/ "./src/data/services/carMarkets.js":
/*!*****************************************!*\
  !*** ./src/data/services/carMarkets.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -1609.7081298828125,
  y: -823.296875,
  z: 10.053910255432129
}, {
  x: 527.4244384765625,
  y: -3177.550048828125,
  z: 1.4174871444702148
}]);

/***/ }),

/***/ "./src/data/services/carRepairs.js":
/*!*****************************************!*\
  !*** ./src/data/services/carRepairs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 717.127,
  y: -1070.899,
  z: 22.2493
}, {
  x: -6.8201,
  y: -1082.974,
  z: 26.705
}, {
  x: -83.6234,
  y: -820.473,
  z: 35.6
}, {
  x: 966.0039,
  y: -119.832,
  z: 73.925
}, {
  x: -1822.6838,
  y: 781.762,
  z: 137.473
}, {
  x: -727.047,
  y: -912.332,
  z: 18.555
}, {
  x: 477.695,
  y: -1020.637,
  z: 27.555
}, {
  x: 11.237,
  y: -1822.959,
  z: 24.61
}, {
  x: 1481.995,
  y: 1131.949,
  z: 113.874
}, {
  x: 260.722,
  y: 2579.697,
  z: 44.6026
}, {
  x: -96.868,
  y: 6396.469,
  z: 31.4524
}, {
  x: 170.269,
  y: -1706.061,
  z: 29.2916
}, {
  x: 250.838,
  y: -1970.828,
  z: 21.9208
}, {
  x: -351.613,
  y: -116.219,
  z: 38.8029
}, {
  x: -2061.509033203125,
  y: -304.5740661621094,
  z: 13.148566246032715
}, {
  x: -341.4289855957031,
  y: -1468.0467529296875,
  z: 30.6114501953125
}, {
  x: 548.229248046875,
  y: -206.8004150390625,
  z: 54.10398483276367
}, {
  x: 1153.51318359375,
  y: -331.91729736328125,
  z: 68.84007263183594
}, {
  x: -1744.5198974609375,
  y: -727.5223388671875,
  z: 10.42267894744873
}, {
  x: -547.1578979492188,
  y: -1226.1507568359375,
  z: 18.275781631469727
}, {
  x: -1468.7335205078125,
  y: -927.36083984375,
  z: 10.122760772705078
}, {
  x: 1695.7613525390625,
  y: 3587.904052734375,
  z: 35.620933532714844
}, {
  x: 766.779541015625,
  y: -3202.61767578125,
  z: 5.900539875030518
}, {
  x: -1906.757568359375,
  y: 2000.045166015625,
  z: 142.0161590576172
}, {
  x: -1626.5335693359375,
  y: -946.1775512695312,
  z: 8.327047348022461
}]);

/***/ }),

/***/ "./src/data/services/carSell.js":
/*!**************************************!*\
  !*** ./src/data/services/carSell.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -1256.544677734375,
  y: -642.5027465820312,
  z: 25.901281356811523
}, {
  x: -355.2153625488281,
  y: 6067.224609375,
  z: 31.498577117919922
}, {
  x: 570.400146484375,
  y: -3148.646728515625,
  z: 1.4768661260604858
}]);

/***/ }),

/***/ "./src/data/services/carShops.js":
/*!***************************************!*\
  !*** ./src/data/services/carShops.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -32.2615,
  y: -1112.419,
  z: 26.422,
  stand: {
    x: -35.707069396972656,
    y: -1099.385986328125,
    z: 26.422351837158203,
    rotation: 156.0934600830078
  }
}]);

/***/ }),

/***/ "./src/data/services/carWash.js":
/*!**************************************!*\
  !*** ./src/data/services/carWash.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -699.718,
  y: -931.76,
  z: 19.013
}, {
  x: 30.0922,
  y: -1392.1268,
  z: 28.777
}, {
  x: 170.63015747070312,
  y: -1717.9580078125,
  z: 29.297199249267578
}, {
  x: 2524.69775390625,
  y: 4195.8017578125,
  z: 39.95529556274414
}, {
  x: -62.24767303466797,
  y: 6443.9541015625,
  z: 31.49053955078125
}, {
  x: -1635.86572265625,
  y: -955.6863403320312,
  z: 7.9875168800354
}]);

/***/ }),

/***/ "./src/data/services/clothingShops.js":
/*!********************************************!*\
  !*** ./src/data/services/clothingShops.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 429.8365478515625,
  y: -803.162353515625,
  z: 29.491147994995117
}, {
  x: -167.9098,
  y: -299.7829,
  z: 39.733
}, {
  x: -704.3206,
  y: -151.275,
  z: 37.415
}, {
  x: -827.958,
  y: -1071.4859,
  z: 11.334
}, {
  x: -1107.877685546875,
  y: 2710.7666015625,
  z: 19.107881546020508
}, {
  x: -1447.2872314453125,
  y: -242.92648315429688,
  z: 49.8221321105957
}, {
  x: 119.32295227050781,
  y: -228.20370483398438,
  z: 54.55783462524414
}, {
  x: -1185.563720703125,
  y: -767.94921875,
  z: 17.326940536499023
}, {
  x: -3177.484375,
  y: 1039.9739990234375,
  z: 20.86321258544922
}, {
  x: 1697.7479248046875,
  y: 4828.3759765625,
  z: 42.063114166259766
}, {
  x: -2965.447021484375,
  y: 455.0312194824219,
  z: 15.316431999206543
}, {
  x: 618.2330322265625,
  y: 2769.6064453125,
  z: 42.088134765625
}, {
  x: 1193.29052734375,
  y: 2714.553466796875,
  z: 38.22853469848633
}]);

/***/ }),

/***/ "./src/data/services/foodShops.js":
/*!****************************************!*\
  !*** ./src/data/services/foodShops.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 26.339,
  y: -1347.229,
  z: 29.497
}, {
  x: -48.43887710571289,
  y: -1757.2220458984375,
  z: 29.421009063720703
}, {
  x: -707.556396484375,
  y: -913.0000610351562,
  z: 19.21558952331543
}, {
  x: -1821.6826171875,
  y: 793.419189453125,
  z: 138.12322998046875
}, {
  x: -457.377197265625,
  y: 2860.117431640625,
  z: 35.014163970947266
}, {
  x: 1136.2484130859375,
  y: -981.7443237304688,
  z: 46.41579818725586
}, {
  x: 1162.720947265625,
  y: -322.88494873046875,
  z: 69.20506286621094
}, {
  x: -1222.7734375,
  y: -906.38720703125,
  z: 12.326349258422852
}, {
  x: 2529.72607421875,
  y: 2037.51806640625,
  z: 19.84293556213379
}, {
  x: -1487.928466796875,
  y: -378.94329833984375,
  z: 40.16339111328125
}, {
  x: -3243.964599609375,
  y: 1001.8536376953125,
  z: 12.830704689025879
}, {
  x: 814.8787231445312,
  y: -2972.111328125,
  z: 6.020654201507568
}, {
  x: 1698.617431640625,
  y: 4925.07373046875,
  z: 42.06366729736328
}, {
  x: 1961.55419921875,
  y: 3741.497802734375,
  z: 32.343753814697266
}, {
  x: 1263.061279296875,
  y: 3545.165771484375,
  z: 35.157386779785156
}, {
  x: 1088.1220703125,
  y: 6506.62353515625,
  z: 21.057842254638672
}, {
  x: -2968.323486328125,
  y: 391.2749328613281,
  z: 15.043312072753906
}, {
  x: 2677.126953125,
  y: 3281.41943359375,
  z: 55.24113464355469
}, {
  x: -1044.1395263671875,
  y: 5327.701171875,
  z: 44.575557708740234
}, {
  x: 549.3951416015625,
  y: 2669.647705078125,
  z: 42.15652847290039
}, {
  x: 1165.40771484375,
  y: 2709.1689453125,
  z: 38.1577033996582
}, {
  x: 547.7788696289062,
  y: 2669.605224609375,
  z: 42.15652847290039
}, {
  x: -1657.20068359375,
  y: -824.6206665039062,
  z: 9.982166290283203
}]);

/***/ }),

/***/ "./src/data/services/gangCreator.js":
/*!******************************************!*\
  !*** ./src/data/services/gangCreator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 2331.152587890625,
  y: 3048.75146484375,
  z: 48.15153884887695
}]);

/***/ }),

/***/ "./src/data/services/gasStations.js":
/*!******************************************!*\
  !*** ./src/data/services/gasStations.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 174.95,
  y: -1560.4,
  z: 28.56
}, {
  x: 614.624,
  y: 263.452,
  z: 103.894
}, {
  x: 820.671,
  y: -1026.431,
  z: 26.265
}, {
  x: 2586.075,
  y: 364.492,
  z: 108.457
}, {
  x: -1795.52,
  y: 802.258,
  z: 138.515
}, {
  x: 48.305,
  y: 2777.542,
  z: 57.884
}, {
  x: -98.199,
  y: 6417.932,
  z: 31.458
}, {
  x: -98.199,
  y: 6417.932,
  z: 31.458
}, {
  x: 261.8645,
  y: 2610.7517,
  z: 44.4049
}, {
  x: -2099.169677734375,
  y: -319.72760009765625,
  z: 13.025915145874023
}, {
  x: -319.19146728515625,
  y: -1476.8162841796875,
  z: 30.5487117767334
}, {
  x: 1184.659423828125,
  y: -332.2773742675781,
  z: 69.17455291748047
}, {
  x: -721.6434936523438,
  y: -933.0595703125,
  z: 19.01701545715332
}, {
  x: -519.8001708984375,
  y: -1211.63623046875,
  z: 18.184829711914062
}, {
  x: 181.98037719726562,
  y: 6604.92138671875,
  z: 31.848485946655273
}, {
  x: 2002.6632080078125,
  y: 3775.88330078125,
  z: 32.18082046508789
}, {
  x: 1702.7515869140625,
  y: 6419.4501953125,
  z: 32.638572692871094
}, {
  x: -2558.052978515625,
  y: 2337.301513671875,
  z: 33.06005096435547
}, {
  x: 276.55517578125,
  y: -1261.8865966796875,
  z: 29.168058395385742
}, {
  x: 1786.5396728515625,
  y: 3332.489501953125,
  z: 41.21748352050781
}, {
  x: 2680.256103515625,
  y: 3261.515869140625,
  z: 55.24052429199219
}, {
  x: 1210.3768310546875,
  y: 2660.234130859375,
  z: 37.809932708740234
}, {
  x: -79.83438110351562,
  y: -1754.496826171875,
  z: 29.5996150970459
}, {
  x: 6.6582770347595215,
  y: -2793.576416015625,
  z: 1.3274364471435547
}]);

/***/ }),

/***/ "./src/data/services/illegalMarkets.js":
/*!*********************************************!*\
  !*** ./src/data/services/illegalMarkets.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 2338.12255859375,
  y: 3055.597412109375,
  z: 48.15184020996094
}]);

/***/ }),

/***/ "./src/data/services/lsCustoms.js":
/*!****************************************!*\
  !*** ./src/data/services/lsCustoms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 716.943,
  y: -1088.34,
  z: 22.362
}, {
  x: -363.418,
  y: -132.552,
  z: 38.68
}, {
  x: 111.301,
  y: 6615.314,
  z: 31.887
}, {
  x: 1182.397,
  y: 2649.146,
  z: 37.834
}, {
  x: -1143.113,
  y: -1988.464,
  z: 13.163
}]);

/***/ }),

/***/ "./src/data/services/motoShops.js":
/*!****************************************!*\
  !*** ./src/data/services/motoShops.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 486.0122,
  y: -1308.662,
  z: 29.258
}]);

/***/ }),

/***/ "./src/data/services/nightClubs.js":
/*!*****************************************!*\
  !*** ./src/data/services/nightClubs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 127.317,
  y: -1283.761,
  z: 29.278
}]);

/***/ }),

/***/ "./src/data/services/pharmacies.js":
/*!*****************************************!*\
  !*** ./src/data/services/pharmacies.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 307.048,
  y: -594.872,
  z: 43.284
}, {
  x: 1833.298,
  y: 3682.382,
  z: 34.27
}, {
  x: -252.176,
  y: 6334.169,
  z: 32.427
}]);

/***/ }),

/***/ "./src/data/services/piers.js":
/*!************************************!*\
  !*** ./src/data/services/piers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -773.4033813476562,
  y: -1431.8858642578125,
  z: 1.5952190160751343,
  stand: {
    x: -782.01025390625,
    y: -1432.0753173828125,
    z: -0.47479337453842163,
    rotation: 151.20980834960938
  }
}, {
  x: -263.13653564453125,
  y: 6660.8271484375,
  z: 1.7177544832229614,
  stand: {
    x: -269.9032897949219,
    y: 6677.4716796875,
    z: -0.12701576948165894,
    rotation: 46.55215835571289
  }
}]);

/***/ }),

/***/ "./src/data/services/scooterRental.js":
/*!********************************************!*\
  !*** ./src/data/services/scooterRental.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: -69.09895324707031,
  y: -1824.476806640625,
  z: 26.942529678344727
}, {
  x: -2031.44921875,
  y: -358.3207092285156,
  z: 44.10616683959961
}, {
  x: 1683.4271240234375,
  y: 3608.54443359375,
  z: 35.3889045715332
}, {
  x: 1718.74462890625,
  y: 6426.47412109375,
  z: 33.09402084350586
}, {
  x: 142.35621643066406,
  y: 6651.08056640625,
  z: 31.506149291992188
}, {
  x: -569.2942504882812,
  y: 5241.5859375,
  z: 70.46910095214844
}, {
  x: 274.6155090332031,
  y: 2592.649169921875,
  z: 44.50761032104492
}, {
  x: 163.37684631347656,
  y: -299.6499938964844,
  z: 46.150489807128906
}, {
  x: 795.1886596679688,
  y: -2986.152099609375,
  z: 6.021188735961914
}, {
  x: 1853.896484375,
  y: 2581.348388671875,
  z: 45.67201232910156
}]);

/***/ }),

/***/ "./src/data/services/tattooParlors.js":
/*!********************************************!*\
  !*** ./src/data/services/tattooParlors.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 323.9142150878906,
  y: 180.16583251953125,
  z: 103.58651733398438
}, {
  x: -1155.32177734375,
  y: -1426.9722900390625,
  z: 4.954461097717285
}, {
  x: 1864.86572265625,
  y: 3747.166259765625,
  z: 33.03187942504883
}, {
  x: 1321.4158935546875,
  y: -1653.4228515625,
  z: 52.275203704833984
}, {
  x: -294.64678955078125,
  y: 6200.45166015625,
  z: 31.487985610961914
}, {
  x: -3169.28515625,
  y: 1077.0634765625,
  z: 20.829181671142578
}]);

/***/ }),

/***/ "./src/data/services/weaponShops.js":
/*!******************************************!*\
  !*** ./src/data/services/weaponShops.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  x: 842.255,
  y: -1033.394,
  z: 28.195
}, {
  x: 21.835,
  y: -1107.485,
  z: 29.797
}, {
  x: -1117.4720458984375,
  y: 2698.18505859375,
  z: 18.554147720336914
}, {
  x: -1305.849853515625,
  y: -394.8763427734375,
  z: 36.69577407836914
}, {
  x: 251.64988708496094,
  y: -49.482208251953125,
  z: 69.94107818603516
}, {
  x: -3172.024169921875,
  y: 1088.046142578125,
  z: 20.838748931884766
}, {
  x: -330.1504821777344,
  y: 6083.4306640625,
  z: 31.454782485961914
}, {
  x: -662.2586669921875,
  y: -935.8416748046875,
  z: 21.8292236328125
}, {
  x: 2568.1005859375,
  y: 294.0195007324219,
  z: 108.73487091064453
}, {
  x: 1693.4833984375,
  y: 3759.974853515625,
  z: 34.70534896850586
}]);

/***/ }),

/***/ "./src/data/spawn.js":
/*!***************************!*\
  !*** ./src/data/spawn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  x: 797.208984375,
  y: -2978.392822265625,
  z: 6.020942211151123,
  rotation: 88.2339096069336,
  dimension: 0
});

/***/ }),

/***/ "./src/data/vehicles.ts":
/*!******************************!*\
  !*** ./src/data/vehicles.ts ***!
  \******************************/
/*! exports provided: vehicleTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleTypes", function() { return vehicleTypes; });
const vehicles = {
  vwtoua19c: {
    type: 'SUV',
    price: 950000
  },
  q820: {
    type: 'SUV',
    price: 2400000
  },
  pts21: {
    type: 'sport',
    price: 5900000
  },
  havok: {
    type: 'air',
    price: 9500000
  },
  swift2: {
    type: 'air',
    price: 40000000
  },
  duster: {
    type: 'air',
    price: 7000000
  },
  dodo: {
    type: 'air',
    price: 12000000
  },
  vestra: {
    type: 'air',
    price: 30000000
  },
  luxor2: {
    type: 'air',
    price: 100000000
  },
  shamal: {
    type: 'air',
    price: 55000000
  },
  safeteam: {
    type: 'SUV',
    price: 0
  },
  dodgesamu: {
    type: 'sedan',
    price: 0
  },
  m6f13: {
    type: 'sport',
    price: 600000
  },
  amggtr: {
    type: 'sport',
    price: 600000
  },
  cullinan: {
    type: 'SUV',
    price: 15000000
  },
  rs7: {
    type: 'sport',
    price: 1800000
  },
  amggt63s: {
    type: 'sport',
    price: 600000
  },
  bmx: {
    type: 'bicycle',
    price: 1500
  },
  cruiser: {
    type: 'bicycle',
    price: 800
  },
  fixter: {
    type: 'bicycle',
    price: 2000
  },
  scorcher: {
    type: 'bicycle',
    price: 5000
  },
  tribike: {
    type: 'bicycle',
    price: 15000
  },
  tribike2: {
    type: 'bicycle',
    price: 20000
  },
  tribike3: {
    type: 'bicycle',
    price: 50000
  },
  divo: {
    type: 'sport',
    price: 120000000
  },
  supraa90: {
    type: 'sport',
    price: 600000
  },
  b63s: {
    type: 'SUV',
    price: 600000
  },
  gls63: {
    type: 'SUV',
    price: 600000
  },
  lx2018: {
    type: 'SUV',
    price: 2000000
  },
  fct: {
    type: 'sport',
    price: 600000
  },
  fgt: {
    type: 'sport',
    price: 600000
  },
  boss302: {
    type: 'sport',
    price: 600000
  },
  dinghy: {
    type: 'boat',
    price: 650000
  },
  jetmax: {
    type: 'boat',
    price: 2200000
  },
  seashark: {
    type: 'boat',
    price: 320000
  },
  speeder: {
    type: 'boat',
    price: 3000000
  },
  toro: {
    type: 'boat',
    price: 3800000
  },
  tropic2: {
    type: 'boat',
    price: 1500000
  },
  C7: {
    type: 'sport',
    price: 2700000
  },
  cliffhanger: {
    type: 'motorcycle',
    price: 600000
  },
  fcr2: {
    type: 'motorcycle',
    price: 410000
  },
  hakuchou: {
    type: 'motorcycle',
    price: 610000
  },
  sanctus: {
    type: 'motorcycle',
    price: 3100000
  },
  vader: {
    type: 'motorcycle',
    price: 540000
  },
  shotaro: {
    type: 'motorcycle',
    price: 3910000
  },
  chimera: {
    type: 'motorcycle',
    price: 2500000
  },
  double: {
    type: 'motorcycle',
    price: 950000
  },
  hexer: {
    type: 'motorcycle',
    price: 1000000
  },
  carbonrs: {
    type: 'motorcycle',
    price: 1250000
  },
  faggio3: {
    type: 'motorcycle',
    price: 15000
  },
  apriora: {
    type: 'sedan',
    price: 600000
  },
  jzx100: {
    type: 'sport',
    price: 600000
  },
  gx71: {
    type: 'sedan',
    price: 280000
  },
  rt70: {
    type: 'muscle',
    price: 600000
  },
  btsupra94: {
    type: 'coupe',
    price: 600000
  },
  bmeclipse95: {
    type: 'coupe',
    price: 600000
  },
  e92: {
    type: 'sport',
    price: 790000
  },
  tahoe: {
    type: 'SUV',
    price: 520000
  },
  rx7: {
    type: 'sedan',
    price: 600000
  },
  silvias15: {
    type: 'sedan',
    price: 600000
  },
  e63brabus: {
    type: 'sport',
    price: 600000
  },
  e63: {
    type: 'sport',
    price: 1100000
  },
  chiron: {
    type: 'sport',
    price: 600000
  },
  bmwm8: {
    type: 'sport',
    price: 600000
  },
  supra2: {
    type: 'coupe',
    price: 370000
  },
  camry55: {
    type: 'sedan',
    price: 350000
  },
  lc100: {
    type: 'SUV',
    price: 290000
  },
  m5e60: {
    type: 'sport',
    price: 900000
  },
  z419: {
    type: 'coupe',
    price: 600000
  },
  brabus850: {
    type: 'sport',
    price: 600000
  },
  m3f80: {
    type: 'sport',
    price: 600000
  },
  slsamg: {
    type: 'sport',
    price: 600000
  },
  z3m: {
    type: 'sport',
    price: 600000
  },
  XPERIA38: {
    type: 'SUV',
    price: 600000
  },
  emsroamer: {
    type: 'SUV',
    price: 0
  },
  emsnspeedo: {
    type: 'offroad',
    price: 0
  },
  policeb: {
    type: 'motorcycle',
    price: 0
  },
  g55pol: {
    type: 'SUV',
    price: 0
  },
  srtpol: {
    type: 'sport',
    price: 0
  },
  riot: {
    type: 'SUV',
    price: 0
  },
  escpol: {
    type: 'SUV',
    price: 0
  },
  lspdthppv: {
    type: 'SUV',
    price: 0
  },
  '2015polstang': {
    type: 'sport',
    price: 0
  },
  pol718: {
    type: 'sport',
    price: 0
  },
  polamggtr: {
    type: 'sport',
    price: 0
  },
  polaventa: {
    type: 'sport',
    price: 0
  },
  MTA: {
    type: 'SUV',
    price: 0
  },
  bmm: {
    type: 'sedan',
    price: 7000000
  },
  '675lt': {
    type: 'sport',
    price: 16000000
  },
  urus: {
    type: 'SUV',
    price: 12000000
  },
  lamboavj: {
    type: 'sport',
    price: 20000000
  },
  supersport: {
    type: 'sport',
    price: 60000000
  },
  ff: {
    type: 'sport',
    price: 10000000
  },
  bati: {
    type: 'motorcycle',
    price: 800000
  },
  daemon: {
    type: 'motorcycle',
    price: 1450000
  },
  enduro: {
    type: 'motorcycle',
    price: 120000
  },
  evo10: {
    type: 'sport',
    price: 380000
  },
  skyline: {
    type: 'coupe',
    price: 340000
  },
  gs350: {
    type: 'sedan',
    price: 490000
  },
  cox2013: {
    type: 'coupe',
    price: 170000
  },
  f458: {
    type: 'sport',
    price: 6500000
  },
  r8v10: {
    type: 'sport',
    price: 5000000
  },
  '16challenger': {
    type: 'muscle',
    price: 860000
  },
  '17m760i': {
    type: 'sedan',
    price: 1700000
  },
  '69charger': {
    type: 'muscle',
    price: 380000
  },
  a8audi: {
    type: 'sedan',
    price: 160000
  },
  ap2: {
    type: 'coupe',
    price: 180000
  },
  bentayga17: {
    type: 'SUV',
    price: 6500000
  },
  m5f90: {
    type: 'sport',
    price: 2200000
  },
  m5: {
    type: 'sedan',
    price: 200000
  },
  bmwe36: {
    type: 'coupe',
    price: 170000
  },
  c63w204: {
    type: 'sedan',
    price: 430000
  },
  civic: {
    type: 'sedan',
    price: 60000
  },
  focusrs: {
    type: 'sport',
    price: 210000
  },
  g65amg: {
    type: 'SUV',
    price: 850000
  },
  gtr: {
    type: 'sport',
    price: 1600000
  },
  impala: {
    type: 'sedan',
    price: 150000
  },
  toyotasj: {
    type: 'SUV',
    price: 800000
  },
  lhuracan: {
    type: 'sport',
    price: 6200000
  },
  m2f22: {
    type: 'sport',
    price: 400000
  },
  m3e46: {
    type: 'coupe',
    price: 190000
  },
  silv86: {
    type: 'SUV',
    price: 50000
  },
  oldm6: {
    type: 'coupe',
    price: 140000
  },
  panamera17turbo: {
    type: 'sport',
    price: 1300000
  },
  AUDIRS6TK: {
    type: 'sport',
    price: 1500000
  },
  S63AMG: {
    type: 'sedan',
    price: 2600000
  },
  mustangbkit: {
    type: 'muscle',
    price: 800000
  },
  urban: {
    type: 'sedan',
    price: 15000
  },
  vaz2106: {
    type: 'sedan',
    price: 3000
  },
  volga: {
    type: 'sedan',
    price: 8500
  },
  w140: {
    type: 'sedan',
    price: 190000
  },
  w210: {
    type: 'sedan',
    price: 130000
  },
  wraith: {
    type: 'coupe',
    price: 3500000
  },
  x5e53: {
    type: 'SUV',
    price: 160000
  },
  x5m2016: {
    type: 'SUV',
    price: 2500000
  },
  gle450: {
    type: 'SUV',
    price: 5200000
  },
  bmwg07: {
    type: 'SUV',
    price: 4700000
  },
  '18performante': {
    type: 'sport',
    price: 13500000
  },
  bmwm5f90: {
    type: 'sedan',
    price: 2700000
  },
  brabus700: {
    type: 'exclusive',
    price: 30000000
  },
  srt8: {
    type: 'SUV',
    price: 800000
  },
  svr16: {
    type: 'SUV',
    price: 1300000
  },
  dl2016: {
    type: 'offroad',
    price: 350000
  },
  '500w124': {
    type: 'sedan',
    price: 100000
  },
  '63lb': {
    type: 'sport',
    price: 380000
  },
  m4f82: {
    type: 'coupe',
    price: 1050000
  },
  teslax: {
    type: 'SUV',
    price: 4000000
  },
  tts: {
    type: 'coupe',
    price: 900000
  },
  models: {
    type: 'sedan',
    price: 1200000
  },
  laferrari: {
    type: 'sport',
    price: 24500000
  },
  polmav: {
    type: 'helicopter',
    price: 0
  },
  maverick: {
    type: 'helicopter',
    price: 0
  },
  frogger: {
    type: 'helicopter',
    price: 0
  }
};
const vehicleTypes = {
  sedan: {
    tank: 60,
    health: 1000,
    trunk: 100
  },
  coupe: {
    tank: 40,
    health: 1000,
    trunk: 30
  },
  SUV: {
    tank: 80,
    health: 1100,
    trunk: 250
  },
  offroad: {
    tank: 100,
    health: 1200,
    trunk: 400
  },
  sport: {
    tank: 55,
    health: 1000,
    trunk: 90
  },
  muscle: {
    tank: 70,
    health: 1000,
    trunk: 100
  },
  motorcycle: {
    tank: 30,
    health: 1000,
    trunk: 10
  },
  exclusive: {
    tank: 120,
    health: 1600,
    trunk: 1000
  },
  boat: {
    tank: 40,
    health: 1000,
    trunk: 50
  },
  air: {
    tank: 140,
    health: 2000,
    trunk: 300
  },
  helicopter: {
    tank: 140,
    health: 2000,
    trunk: 300
  },
  bicycle: {
    tank: 0,
    health: 1000,
    trunk: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vehicles);

/***/ }),

/***/ "./src/data/walkingStyles.ts":
/*!***********************************!*\
  !*** ./src/data/walkingStyles.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  normal: null,
  brave: 'move_m@brave',
  confident: 'move_m@confident',
  drunk: 'move_m@drunk@verydrunk',
  fat: 'move_m@fat@a',
  gangster: 'move_m@shadyped@a',
  hurry: 'move_m@hurry@a',
  injured: 'move_m@injured',
  intimidated: 'move_m@intimidation@1h',
  quick: 'move_m@quick',
  sad: 'move_m@sad@a',
  tough: 'move_m@tool_belt@a'
});

/***/ }),

/***/ "./src/factions/ems/building.ts":
/*!**************************************!*\
  !*** ./src/factions/ems/building.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/building */ "./src/basic/building.ts");


class EmsBuilding extends _basic_building__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'EMS',
      outPos: {
        x: 311.2546,
        y: -592.4204,
        z: 42.32737
      },
      //inPos: { x:319.01153564453125, y:-559.0020751953125, z:28.743432998657227},
      markerData: {
        radius: 0.75,
        color: [58, 226, 206, 85]
      },
      blipData: {
        model: 61,
        color: 1
      }
    };
    super(info);
  }

}

const building = new EmsBuilding();
/* harmony default export */ __webpack_exports__["default"] = (building);

/***/ }),

/***/ "./src/factions/ems/garage.ts":
/*!************************************!*\
  !*** ./src/factions/ems/garage.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_factions_coords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/factions/coords */ "./src/data/factions/coords.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../garage */ "./src/factions/garage.ts");






class EmsGarageElevator {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "id", 'ems');

    this.createElevator({
      entrance: {
        x: 331.6086730957031,
        y: -595.4246215820312,
        z: 43.283992767333984
      },
      exit: {
        x: 319.01153564453125,
        y: -559.0020751953125,
        z: 28.743432998657227
      }
    });
    this.createElevator({
      entrance: {
        x: 339.0078430175781,
        y: -584.071533203125,
        z: 74.16558074951172
      },
      exit: {
        x: 329.39056396484375,
        y: -600.800048828125,
        z: 43.28402328491211
      }
    });
  }

  enteredEntranceShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
  }

  enteredExitShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
  }

  createElevator(elevator) {
    const {
      entrance,
      exit
    } = elevator;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(entrance, 0.75, {
      onEnter: this.enteredEntranceShape.bind(this),
      onKeyPress: player => {
        if (player.faction.id !== this.id) {
          return _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Вы не состоите во фракции');
        }

        player.tp(exit);
      },
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(entrance.x, entrance.y, entrance.z - 1.2), 0.75, {
      color: [0, 128, 128, 100],
      visible: true
    });
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(exit, 0.75, {
      onEnter: this.enteredExitShape.bind(this),
      onKeyPress: player => {
        if (player.faction.id !== this.id) {
          return _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Вы не состоите во фракции');
        }

        player.tp(entrance);
      },
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(exit.x, exit.y, exit.z - 1.2), 0.75, {
      color: [0, 128, 128, 100],
      visible: true
    });
  }

}

const elevator = new EmsGarageElevator();
/* harmony default export */ __webpack_exports__["default"] = (new _garage__WEBPACK_IMPORTED_MODULE_4__["default"]('ems', {
  x: 317.0,
  y: -541.68,
  z: 28.74
}, _data_factions_coords__WEBPACK_IMPORTED_MODULE_3__["garageCoords"].ems, [['emsnspeedo'], ['emsnspeedo'], ['emsnspeedo'], ['emsnspeedo'], ['emsnspeedo'], ['emsnspeedo'], ['emsnspeedo'], ['emsnspeedo'], ['emsnspeedo', 'dodgesamu'], ['emsnspeedo', 'dodgesamu']], {
  paint: {
    primary: [255, 255, 255],
    secondary: [255, 255, 255],
    type: 0
  },
  engine: 3,
  turbo: 0,
  transmission: 2,
  brakes: 2
}));

/***/ }),

/***/ "./src/factions/ems/index.ts":
/*!***********************************!*\
  !*** ./src/factions/ems/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../faction */ "./src/factions/faction.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _basic_player_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/player/actions */ "./src/basic/player/actions.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _pc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pc */ "./src/factions/ems/pc.ts");
/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./building */ "./src/factions/ems/building.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./garage */ "./src/factions/ems/garage.ts");
/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaderboard */ "./src/factions/ems/leaderboard.ts");












class Ems extends _faction__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      id: 'ems',
      name: 'EMS',
      mainMenu: {
        x: 301.234,
        y: -599.238,
        z: 43.284
      },
      inventoryCoords: {
        x: 309.188,
        y: -562.418,
        z: 43.284
      },
      government: true,
      ranks: ['Интерн', 'Фельдшер', 'Реаниматолог', 'Физиолог', 'Терапевт', 'Врач', 'Психолог', 'Врач хирург', 'Зам. Главного врача', 'Глав. врач'],
      salary: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 55000],
      chatColor: [245, 66, 66]
    };
    super(info);
  }

  async revive(player, id) {
    const victim = mp.players.at(id);

    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id) || !victim || !_basic_player_actions__WEBPACK_IMPORTED_MODULE_5__["default"].targetIsNear(victim, player.position) || !victim.getVariable('isDying') || player.healing) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(player, 'Гражданин в нормальном состоянии!');
    }

    player.healing = true;
    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["default"].playOnServer(player, 'resuscitation');
    await player.moneyHelper.change(600, 'bank', 'revive');
    this.addToStatistic(player.dbId, 'revive');
    player.timeout(() => {
      delete player.healing;
      _utils_animations__WEBPACK_IMPORTED_MODULE_4__["default"].stopOnServer(player);
      _pc__WEBPACK_IMPORTED_MODULE_7__["default"].deleteCall(victim.id);
      if (!mp.players.exists(victim) || !_basic_player_actions__WEBPACK_IMPORTED_MODULE_5__["default"].targetIsNear(victim, player.position)) return;
      victim.ressurect();
    }, 15000);
  }

  async heal(player, id) {
    const victim = mp.players.at(id);

    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id) || !victim || !_basic_player_actions__WEBPACK_IMPORTED_MODULE_5__["default"].targetIsNear(victim, player.position) || victim.getVariable('isDying')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(player, 'Гражданин слишком далеко!');
    }

    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["default"].playOnServer(player, 'resuscitation');
    player.timeout(() => {
      _utils_animations__WEBPACK_IMPORTED_MODULE_4__["default"].stopOnServer(player);
      if (!mp.players.exists(victim)) return;
      victim.health = 100;
    }, 5000);
  }

  changeClothesMan(player) {
    player.setProp(6, 1, 0);
    player.setClothes(4, 96, 0, 0);
    player.setClothes(6, 8, 0, 0);
    player.setClothes(7, 127, 0, 0);
    player.setClothes(10, 58, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_6__["default"].set(player, 'underwears', {
      style: 250,
      color: 0,
      gender: 'male'
    });
    player.setClothes(3, 85, 1, 0);
  }

  changeClothesWoman(player) {
    player.setProp(6, 4, 0);
    player.setClothes(7, 97, 0, 0);
    player.setClothes(6, 1, 3, 0);
    player.setClothes(4, 23, 3, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_6__["default"].set(player, 'underwears', {
      style: 73,
      color: 0,
      gender: 'female'
    });
    player.setClothes(3, 109, 0, 0);
  }

  openInteractionMenu(player, target) {
    const id = lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(target) ? target : -1;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'EMS-ShowMenu', id);
  }

  showFactionDocs(player, id) {
    if (!this.isInThisFaction(player) || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id)) return;
    const {
      rank
    } = player.getVariable('faction');
    const player2 = mp.players.at(id);
    if (!player2) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'EMS-ShowDocs', [player.getVariable('realName'), rank]);
  }

}

const ems = new Ems();
mp.events.subscribe({
  'EMS-Revive': (player, id) => ems.revive(player, id),
  'EMS-Heal': (player, id) => ems.heal(player, id)
});
/* harmony default export */ __webpack_exports__["default"] = (ems);

/***/ }),

/***/ "./src/factions/ems/leaderboard.ts":
/*!*****************************************!*\
  !*** ./src/factions/ems/leaderboard.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leaderBoard */ "./src/factions/leaderBoard.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/factions/ems/index.ts");




class EmsLeaderBoard extends _leaderBoard__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const coords = {
      x: 306.774,
      y: -567.855,
      z: 43.284
    };
    super(coords);
  }

  showMenu(player) {
    const members = ___WEBPACK_IMPORTED_MODULE_2__["default"].getMembers();
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'EMS-ShowLeaderBoard', members);
  }

}

const leaderBoard = new EmsLeaderBoard();

/***/ }),

/***/ "./src/factions/ems/pc.ts":
/*!********************************!*\
  !*** ./src/factions/ems/pc.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./src/factions/ems/index.ts");








class EmsPC {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "coords", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "calls", void 0);

    this.name = 'ems';
    this.coords = [];
    this.calls = new Map();
    this.createMainShape();
    this.subscribeToEvents();
  }

  deleteCall(id) {
    const call = this.calls.get(id);
    if (!call) return;

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(call.medic)) {
      const medic = mp.players.at(call.medic);
      medic.faction.call = false;
      _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].deleteWorkBlip(medic);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(medic, 'Ваш вызов отменили');
    }

    this.calls.delete(id);
  }

  getCalls(player) {
    const data = [];
    this.calls.forEach(({
      medic
    }, id) => {
      const victim = mp.players.at(id);
      if (!victim) return;
      data.push({
        id,
        medic,
        name: victim.getVariable('realName'),
        distance: player.dist(victim.position)
      });
    });
    return data;
  }

  createCall(victim) {
    const {
      id,
      position
    } = victim;
    if (this.calls.has(id)) return;
    this.calls.set(id, {
      position
    });
    _index__WEBPACK_IMPORTED_MODULE_6__["default"].implementForMembers(player => _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, 'В штате новый вызов! Езжайте быстрее!'));
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(victim, 'Ваш вызов зарегистрирован!');
  }

  acceptCall(player, id) {
    const call = this.calls.get(id);

    if (!call || lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(call.medic) || player.faction.call) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Этот вызов уже принят!');
      return Promise.reject(new Error());
    }

    this.calls.set(id, { ...call,
      medic: player.id
    });
    player.faction.call = true;
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].createWorkBlip(player, call.position, 1);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, 'Вы приняли вызов, поторопитесь!');
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callBrowsers"](mp.players.at(id), 'EMS-AcceptNotify');
  }

  openMenu(player) {
    if (player.faction.id !== this.name) return;
    const {
      vehicle
    } = player;

    if (vehicle && (!vehicle.owner || vehicle.owner.id !== this.name)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Нужно находиться в служебном ТС');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'EMS-ShowPC', this.getCalls(player));
  }

  createMainShape() {
    this.coords.forEach(position => {
      const {
        x,
        y,
        z
      } = position;
      mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
        color: [15, 192, 252, 70],
        visible: true
      });
      _helpers_colshapes__WEBPACK_IMPORTED_MODULE_3__["default"].create(position, 0.75, {
        onEnter: this.enteredShape.bind(this),
        onKeyPress: this.openMenu.bind(this),
        keyName: 'E'
      });
    });
  }

  enteredShape(player) {
    if (player.faction.id !== this.name) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'EMS-ShowPC': player => {
        if (!player.vehicle) return;
        this.openMenu(player);
      },
      'EMS-AcceptCall': this.acceptCall.bind(this),
      'EMS-CallMedic': this.createCall.bind(this)
    });
    mp.events.add('playerQuit', player => this.deleteCall(player.id));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new EmsPC());

/***/ }),

/***/ "./src/factions/faction.ts":
/*!*********************************!*\
  !*** ./src/factions/faction.ts ***!
  \*********************************/
/*! exports provided: factions, loadPlayerFaction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factions", function() { return factions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPlayerFaction", function() { return loadPlayerFaction; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _models_Faction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Faction */ "./src/models/Faction.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./garage */ "./src/factions/garage.ts");
/* harmony import */ var _factionInventory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factionInventory */ "./src/factions/factionInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");










const factions = {};

class Faction {
  constructor(data) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "id", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "government", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "inventoryCoords", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "members", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "dbId", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "money", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "ranks", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "salary", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "chatColor", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "mainMenu", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "mainMarker", void 0);

    this.id = data.id;
    this.name = data.name;
    this.mainMenu = data.mainMenu;
    this.ranks = data.ranks;
    this.salary = data.salary;
    this.chatColor = data.chatColor;
    this.inventoryCoords = data.inventoryCoords;
    this.government = data.government;
    this.dbId = null;
    this.members = {};
    this.money = 0;
    this.createMainEntities();
    factions[data.name] = this;
  }

  openLeaderMenu(leader) {
    if (leader.cuff || !this.isLeaderThisFaction(leader)) return;
    const players = [];
    mp.players.forEachInRange(leader.position, 50, player => {
      if (!player.loggedIn || player.getVariable('invisible') || this.members[player.dbId]) return;
      players.push({
        name: player.name,
        id: player.id
      });
    });
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](leader, 'Faction-LeaderMenu', [this.getMembers(), players, this.ranks, this.salary]);
  }

  createMainEntities() {
    const {
      x,
      y,
      z
    } = this.mainMenu;
    const shape = mp.colshapes.newSphere(x, y, z, 1);
    shape.faction = this.name;
    this.mainMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      color: [255, 255, 0, 85],
      visible: false
    });
  }

  updateMarkers(player) {
    this.updateClothingMarker(player);
    Object(_garage__WEBPACK_IMPORTED_MODULE_6__["updateGarageMarker"])(player, this.id);
    Object(_factionInventory__WEBPACK_IMPORTED_MODULE_7__["updateInventoryMarker"])(player, this.name);
  }

  updateClothingMarker(player) {
    if (this.isInThisFaction(player)) this.mainMarker.showFor(player);else this.mainMarker.hideFor(player);
  }

  pressedKeyOnMainShape(player) {
    if (!this.isInThisFaction(player)) return;
    if (this.isWorking(player)) this.finishWork(player);else this.startWork(player);
  }

  startWork(player) {
    if (player.job) return;
    player.chatColor = this.chatColor;
    player.faction.working = true;
    player.setVariable('faction', { ...player.getVariable('faction'),
      working: true
    });
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].clear(player);
    if (player.model === mp.joaat('mp_m_freemode_01')) this.changeClothesMan(player);else this.changeClothesWoman(player);
  }

  changeClothesMan(player) {}

  changeClothesWoman(player) {}

  finishWork(player) {
    player.armour = 0;
    player.chatColor = [255, 255, 255];
    player.faction.working = false;
    player.setVariable('faction', { ...player.getVariable('faction'),
      working: false
    });
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].load(player);
  }

  isMainLeader(player) {
    return this.isInThisFaction(player) && this.members[player.dbId].rank >= this.ranks.length;
  }

  isLeaderThisFaction(player) {
    return this.isInThisFaction(player) && this.members[player.dbId].rank >= this.ranks.length - 1;
  }

  isInThisFaction(player) {
    return !!this.members[player.dbId];
  }

  isWorking(player) {
    return player.faction.working;
  }

  getFactionMoney() {
    return this.money;
  }

  getFactionMember(dbId) {
    return this.members[dbId];
  }

  getSalaryOfRank(rank) {
    return this.salary[rank];
  }

  getMembers(working = false) {
    const members = [];
    Object.keys(this.members).forEach(dbId => {
      const member = this.getFactionMember(dbId);
      if (working && (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(member.id) || !this.isWorking(mp.players.at(member.id)))) return;
      members.push({ ...member,
        dbId,
        rank: this.ranks[member.rank - 1]
      });
    });
    return members;
  }

  async changeFactionMoney(value) {
    if (this.money + value < 0) return;
    await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(this.dbId, {
      $inc: {
        money: value
      }
    });
    this.money += value;
    return this.money;
  }

  addToStatistic(memberGuid, name) {
    const member = this.getFactionMember(memberGuid);
    if (!member) return;
    if (member.statistics[name]) member.statistics[name]++;else member.statistics[name] = 1;
    _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].findOneAndUpdate({
      _id: this.dbId,
      members: {
        $elemMatch: {
          userId: memberGuid
        }
      }
    }, {
      $set: {
        'members.$.statistics': member.statistics
      }
    }).exec();
  }

  async setAsLeader(admin, player) {
    if (this.isInThisFaction(player)) {
      await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].findOneAndUpdate({
        _id: this.dbId,
        members: {
          $elemMatch: {
            userId: player.dbId
          }
        }
      }, {
        $set: {
          'members.$.rank': this.ranks.length
        }
      });
    } else {
      await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(this.dbId, {
        $push: {
          members: {
            userId: player.dbId,
            rank: this.ranks.length
          }
        }
      });
    }

    this.members[player.dbId] = {
      name: `${player.getVariable('realName')} #${player.uid}`,
      id: player.id,
      rank: this.ranks.length,
      statistics: {}
    };
    this.setFactionData(player, this.ranks.length);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].info(player, `Теперь вы лидер фракции "${this.name}"`);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].success(admin, `${player.name} назначен лидером фракции ${this.name}`);
    this.updateMarkers(player);
  }

  async setRank(leader, dbId, rank) {
    if (!this.isLeaderThisFaction(leader)) return;
    const member = this.members[dbId];
    if (!member || !this.isMainLeader(leader) && rank === this.ranks.length) return;
    await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].findOneAndUpdate({
      _id: this.dbId,
      members: {
        $elemMatch: {
          userId: dbId
        }
      }
    }, {
      $set: {
        'members.$.rank': rank
      }
    });
    member.rank = rank;

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(member.id) && mp.players.at(member.id)) {
      const player = mp.players.at(member.id);
      this.setFactionData(player, rank);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].info(player, `${leader.name} изменил(а) ваш ранг на ${this.ranks[rank - 1]}`);
    }

    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].success(leader, `Теперь ранг игрока ${member.name}: ${this.ranks[rank - 1]}`);
    return this.getMembers();
  }

  async invite(leader, id) {
    if (!this.isLeaderThisFaction(leader) && leader.adminLvl < 3) return;
    const player = mp.players.at(id);
    if (!player || player.faction.name) return;
    await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(this.dbId, {
      $push: {
        members: {
          userId: player.dbId,
          rank: 1
        }
      }
    });
    this.setFactionData(player, 1);
    this.members[player.dbId] = {
      id,
      rank: 1,
      name: `${player.getVariable('realName')} #${player.uid}`,
      statistics: {}
    };
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].info(player, `${leader.name} устроил(а) вас во фракцию "${this.name}"`);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].success(leader, `${player.name} устроен во фракцию "${this.name}"`);
    this.updateMarkers(player);
    return this.getMembers();
  }

  async uninvite(leader, dbId) {
    if (!this.isLeaderThisFaction(leader) && leader.adminLvl < 3) return;
    const member = this.members[dbId];
    if (!member || leader.faction.rank < member.rank) return;
    await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(this.dbId, {
      $pull: {
        members: {
          userId: dbId
        }
      }
    });
    delete this.members[dbId];

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(member.id) && mp.players.at(member.id)) {
      const player = mp.players.at(member.id);
      this.finishWork(player);
      player.faction = {};
      player.setVariable('faction', {});
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].info(player, `${leader.name} уволил(а) вас из фракции "${this.name}"`);
      this.updateMarkers(player);
      _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].load(player);
    }

    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].success(leader, `Вы уволили ${member.name} из фракции "${this.name}"`);
    return this.getMembers();
  }

  setFactionData(player, rank) {
    player.faction = {
      rank,
      name: this.name,
      id: this.id
    };
    player.setVariable('faction', {
      id: this.id,
      name: this.name,
      rank: this.ranks[rank - 1],
      government: this.government
    });
  }

  implementForMembers(callback) {
    let count = 0;
    Object.values(this.members).forEach(member => {
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(member.id)) return;
      const player = mp.players.at(member.id);

      if (player && this.isInThisFaction(player) && this.isWorking(player)) {
        callback(player);
        count++;
      }
    });
    return count;
  }

  showFactionDocs(player, id) {}

}

function loadPlayerFaction(player) {
  player.setVariable('faction', {});
  Object.keys(factions).forEach(name => {
    const faction = factions[name];
    const member = faction.members[player.dbId];
    if (!member) return;
    faction.setFactionData(player, member.rank);
    faction.updateMarkers(player);
    member.id = player.id;
  });
}
mp.events.subscribe({
  'Faction-SetRank': (player, dbId, rank) => {
    if (!player.faction.name) return;
    const faction = factions[player.faction.name];
    return faction.setRank(player, dbId, rank);
  },
  'Faction-Invite': (player, id) => {
    if (!player.faction.name) return;
    const faction = factions[player.faction.name];
    return faction.invite(player, id);
  },
  'Faction-Kick': (player, dbId) => {
    if (!player.faction.name) return;
    const faction = factions[player.faction.name];
    return faction.uninvite(player, dbId);
  },
  'Faction-ShowDocs': (player, id) => {
    if (!player.faction.name) {
      return mp.events.call('Gang-ShowDocs', player, id);
    }

    const faction = factions[player.faction.name];
    faction.showFactionDocs(player, id);
    _utils_animations__WEBPACK_IMPORTED_MODULE_9__["default"].playOnServer(player, 'docs', 2500);
  },
  'Faction-Menu': (player, target) => {
    if (player.sack || player.cuff || !player.faction.name || !player.faction.working) return;
    const faction = factions[player.faction.name];
    faction.openInteractionMenu(player, target);
  }
});
mp.events.subscribeToDefault({
  databaseConnected: async () => {
    const cursor = await _models_Faction__WEBPACK_IMPORTED_MODULE_4__["default"].find().cursor();
    cursor.on('data', async doc => {
      const members = {};
      const faction = factions[doc.name];
      doc.members.forEach(({
        userId,
        rank,
        statistics = {}
      }) => {
        members[userId] = {
          rank,
          statistics
        };
      });
      const users = await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].find({
        _id: {
          $in: Object.keys(members)
        }
      }).select({
        uid: 1,
        firstName: 1,
        lastName: 1
      });
      users.forEach(({
        _id,
        uid,
        firstName,
        lastName
      }) => {
        Object.assign(members[_id], {
          name: `${firstName} ${lastName} #${uid}`
        });
      });
      faction.members = members;
      faction.dbId = doc._id;
      faction.money = doc.money; // tslint:disable-next-line: no-unused-expression

      new _factionInventory__WEBPACK_IMPORTED_MODULE_7__["default"]({
        dbId: doc._id,
        name: doc.name,
        inventory: doc.inventory,
        inventoryCoords: faction.inventoryCoords
      });
    });
  },
  'Keys-E': player => {
    if (!player.canOpen.faction) return;
    const faction = factions[player.canOpen.faction];
    faction.pressedKeyOnMainShape(player);
  },
  'Keys-F5': player => {
    if (!player.faction.name) return;
    const faction = factions[player.faction.name];
    faction.openLeaderMenu(player);
  },
  playerEnterColshape: (player, shape) => {
    if (!player.loggedIn || !shape.faction) return;
    const faction = factions[shape.faction];

    if (faction.isInThisFaction(player)) {
      player.canOpen.faction = shape.faction;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы переодеться');
    }
  },
  playerExitColshape: (player, shape) => {
    if (!player.loggedIn || !shape.faction) return;
    const faction = factions[shape.faction];

    if (faction.isInThisFaction(player)) {
      player.canOpen.faction = false;
    }
  }
});
mp.events.add('playerQuit', player => {
  var _player$faction;

  if (!mp.players.exists(player)) return;
  const faction = factions[(_player$faction = player.faction) === null || _player$faction === void 0 ? void 0 : _player$faction.name];
  if (!faction) return;
  faction.finishWork(player);
  delete faction.members[player.dbId].id;
});
/* harmony default export */ __webpack_exports__["default"] = (Faction);

/***/ }),

/***/ "./src/factions/factionInventory.ts":
/*!******************************************!*\
  !*** ./src/factions/factionInventory.ts ***!
  \******************************************/
/*! exports provided: default, updateInventoryMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FactionInventory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInventoryMarker", function() { return updateInventoryMarker; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Faction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Faction */ "./src/models/Faction.ts");
/* harmony import */ var _basic_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic/inventory */ "./src/basic/inventory.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");






const inventories = {};
class FactionInventory extends _basic_inventory__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(data) {
    super('faction');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "factionName", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "inventory", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "dbId", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "inventoryCoords", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "marker", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "slots", void 0);

    this.dbId = data.dbId;
    this.factionName = data.name;
    this.inventory = data.inventory;
    this.inventoryCoords = data.inventoryCoords;
    this.slots = 50000;
    this.createInventory();
    inventories[data.name] = this;
  }

  createInventory() {
    const {
      x,
      y,
      z
    } = this.inventoryCoords;
    const shape = mp.colshapes.newSphere(x, y, z, 1);
    shape.factionInventory = this.factionName;
    this.marker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      color: [0, 72, 186, 85],
      visible: false
    });
  }

  updateMarkerVisible(player) {
    if (player.faction.name) this.marker.showFor(player);else this.marker.hideFor(player);
  }

  async updateInventoryInDb(dbId, updInventory) {
    await _models_Faction__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(dbId, {
      $set: {
        inventory: updInventory
      }
    });
  }

  getMaxSlots() {
    return this.slots;
  }

  showInventoryMenu(player) {
    if (player.faction.rank < 5) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У вас недостаточно полномочий');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Inventory-ShowDoubleMenu', [player.inventory, this.inventory, this.getCurrentSlots(player.inventory), _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].getMaxSlots(player), this.getCurrentSlots(this.inventory), this.getMaxSlots(), this.name]);
  }

}
function updateInventoryMarker(player, faction) {
  const inventory = inventories[faction];
  if (inventory) inventory.updateMarkerVisible(player);
}
mp.events.subscribeToDefault({
  playerEnterColshape: (player, shape) => {
    if (!player.loggedIn || !shape.factionInventory) return;
    const inventory = inventories[shape.factionInventory];

    if (player.faction.name === inventory.factionName && player.faction.working) {
      player.canOpen.factionInventory = inventory.factionName;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
    }
  },
  playerExitColshape: (player, shape) => {
    if (!player.loggedIn || !shape.factionInventory) return;
    const inventory = inventories[shape.factionInventory];

    if (player.faction.name === inventory.factionName) {
      player.canOpen.factionInventory = false;
    }
  },
  'Keys-E': player => {
    if (player.canOpen.factionInventory) {
      const inventory = inventories[player.canOpen.factionInventory];
      inventory.showInventoryMenu(player);
    }
  }
});
mp.events.subscribe({
  'Faction-MoveInventoryItem': (player, from, name, count) => {
    if (!player.canOpen.factionInventory) return;
    const storage = inventories[player.canOpen.factionInventory];
    return storage.moveItem(player, {
      dbId: storage.dbId,
      items: storage.inventory
    }, from, name, count);
  },
  'Faction-SwapInventoryItems': (player, picked, target) => {
    if (!player.canOpen.factionInventory) return;
    const storage = inventories[player.canOpen.factionInventory];
    storage.swapItems(storage.inventory, picked, target);
  }
});

/***/ }),

/***/ "./src/factions/fbi/fbiBuilding.ts":
/*!*****************************************!*\
  !*** ./src/factions/fbi/fbiBuilding.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _basic_building__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/building */ "./src/basic/building.ts");



class FbiBuilding extends _basic_building__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const info = {
      name: 'FBI',
      blipData: {
        model: 60,
        color: 0
      },
      markerData: {
        radius: 0.75,
        color: [0, 133, 199, 100]
      },
      outPos: {
        x: 135.27674865722656,
        y: -764.1279296875,
        z: 45.76328659057617
      },
      inPos: {
        x: 135.3935546875,
        y: -764.075927734375,
        z: 242.15199279785156
      }
    };
    super(info);
  }

  tryToEnter(player) {
    if (player.faction.name !== this.name) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, `Вы не состоите во фракции ${this.name}`);
    }

    super.tryToEnter(player);
  }

}

const building = new FbiBuilding();
/* harmony default export */ __webpack_exports__["default"] = (building);

/***/ }),

/***/ "./src/factions/fbi/garage.ts":
/*!************************************!*\
  !*** ./src/factions/fbi/garage.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_factions_coords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/factions/coords */ "./src/data/factions/coords.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../garage */ "./src/factions/garage.ts");






class FibGarageElevator {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "elevator", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "id", 'fbi');

    this.elevator = {
      entrance: {
        x: 140.964,
        y: -766.488,
        z: 45.752
      },
      exit: {
        x: 133.232,
        y: -700.698,
        z: 33.113
      }
    };
    this.createElevator();
  }

  enteredEntranceShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
  }

  enteredExitShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
  }

  createElevator() {
    const {
      entrance,
      exit
    } = this.elevator;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(entrance, 0.75, {
      onEnter: this.enteredEntranceShape.bind(this),
      onKeyPress: player => {
        if (player.faction.id !== this.id) {
          return _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Вы не состоите во фракции');
        }

        player.tp(exit);
      },
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(entrance.x, entrance.y, entrance.z - 1.2), 0.75, {
      color: [0, 128, 128, 100],
      visible: true
    });
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(exit, 0.75, {
      onEnter: this.enteredExitShape.bind(this),
      onKeyPress: player => {
        if (player.faction.id !== this.id) {
          return _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Вы не состоите во фракции');
        }

        player.tp(entrance);
      },
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(exit.x, exit.y, exit.z - 1.2), 0.75, {
      color: [0, 128, 128, 100],
      visible: true
    });
  }

}

const elevator = new FibGarageElevator();
/* harmony default export */ __webpack_exports__["default"] = (new _garage__WEBPACK_IMPORTED_MODULE_4__["default"]('fbi', {
  x: 94.207,
  y: -727.533,
  z: 33.133
}, _data_factions_coords__WEBPACK_IMPORTED_MODULE_3__["garageCoords"].fbi, [['towtruck'], ['towtruck', 'lspdthppv'], ['towtruck', 'lspdthppv'], ['towtruck', 'lspdthppv'], ['towtruck', 'lspdthppv'], ['towtruck', 'lspdthppv', 'escpol'], ['towtruck', 'lspdthppv', 'escpol'], ['towtruck', 'lspdthppv', 'escpol'], ['towtruck', 'lspdthppv', 'escpol', 'riot'], ['towtruck', 'lspdthppv', 'escpol', 'riot', 'frogger'], ['towtruck', 'lspdthppv', 'escpol', 'riot', 'frogger', 'polamggtr'], ['towtruck', 'lspdthppv', 'escpol', 'riot', 'frogger', 'polamggtr']], {
  paint: {
    primary: [0, 0, 0],
    secondary: [0, 0, 0],
    type: 0
  },
  armour: 4,
  glasses: 1,
  engine: 3,
  turbo: 0,
  transmission: 2,
  brakes: 2
}));

/***/ }),

/***/ "./src/factions/fbi/index.ts":
/*!***********************************!*\
  !*** ./src/factions/fbi/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../faction */ "./src/factions/faction.ts");
/* harmony import */ var _fbiBuilding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fbiBuilding */ "./src/factions/fbi/fbiBuilding.ts");
/* harmony import */ var _pc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pc */ "./src/factions/fbi/pc.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./garage */ "./src/factions/fbi/garage.ts");











class Fbi extends _faction__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor() {
    const info = {
      id: 'fbi',
      name: 'FBI',
      mainMenu: {
        x: 132.567138671875,
        y: -769.840087890625,
        z: 242.15206909179688
      },
      inventoryCoords: {
        x: 119.65833282470703,
        y: -729.2630615234375,
        z: 242.1519317626953
      },
      government: true,
      ranks: ['Стажёр', 'Младший Агент', 'Федеральный Агент', 'Агент ФБР', 'Старший Агент', 'Агент Безопасности', 'Агент Расследований', 'Специальный Агент', 'Секретный Агент', 'Глава Управления', 'Зам Директора ФБР', 'Директор ФБР'],
      salary: [4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000, 36000, 40000, 45000, 50000],
      chatColor: [0, 47, 107]
    };
    super(info);
  }

  changeClothesMan(player) {
    player.setProp(1, 8, 0);
    player.setProp(2, 0, 0);
    player.setProp(6, 1, 0);
    player.setClothes(4, 24, 0, 0);
    player.setClothes(6, 21, 0, 0);
    player.setClothes(7, 38, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].set(player, 'underwears', {
      style: 13,
      color: 0,
      gender: 'male'
    });
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].set(player, 'tops', {
      style: 72,
      color: 2,
      gender: 'male'
    });
  }

  changeClothesWoman(player) {
    player.setProp(2, 1, 0);
    player.setClothes(4, 6, 0, 0);
    player.setClothes(6, 7, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].set(player, 'tops', {
      style: 58,
      color: 0,
      gender: 'female'
    });
  }

  openInteractionMenu(player, target) {
    const id = lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(target) ? target : -1;
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'FBI-ShowMenu', id);
  }

  startWork(player) {
    super.startWork(player);
    if (this.isWorking(player)) this.setWeapons(player);
  }

  setWeapons(player) {
    player.armour = 100;
  }

  showFactionDocs(player, id) {
    if (!this.isInThisFaction(player) || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(id)) return;
    const {
      rank
    } = player.getVariable('faction');
    const player2 = mp.players.at(id);
    if (!player2) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player2, 'FBI-ShowDocs', [player.getVariable('realName'), rank]);
  }

  trackPlayer(player, id) {
    const suspect = mp.players.at(id);
    if (!suspect) return;

    if (player.faction.tracked === 2) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Отслеживать можно максимум 2х людей');
    }

    player.call('createDynamicBlip', ['player', id, 1, lodash_random__WEBPACK_IMPORTED_MODULE_0___default()(24, 30)]);
    player.timeout(() => {
      player.call('removeDynamicBlip', ['player', id]);
      player.faction.tracked--;
    }, 600000);
    if (player.faction.tracked) player.faction.tracked++;else player.faction.tracked = 1;
  }

  async withdrawPassport(player, id) {
    const intruder = mp.players.at(id);

    if (!mp.players.exists(intruder) || !intruder.getVariable('isActiveTempName')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Данный гражданин имеет официальные документы!');
    }

    await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(intruder.dbId, {
      $set: {
        tempName: {}
      }
    });
    intruder.tempName = {};
    intruder.updateName();
    await player.moneyHelper.change(5000, 'bank', 'withdraw passport');
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Поддельный документ изъят!');
  }

}

const fbi = new Fbi();
mp.events.subscribe({
  'FBI-TrackPlayer': (player, id) => {
    if (player.sack || player.cuff) return;
    fbi.trackPlayer(player, id);
  },
  'FBI-WithdrawPassport': (player, id) => fbi.withdrawPassport(player, id)
});
/* harmony default export */ __webpack_exports__["default"] = (fbi);

/***/ }),

/***/ "./src/factions/fbi/pc.ts":
/*!********************************!*\
  !*** ./src/factions/fbi/pc.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");





class FbiPC {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "coords", void 0);

    this.name = 'fbi';
    this.coords = [{
      x: 108.76289367675781,
      y: -746.5542602539062,
      z: 242.15223693847656
    }, {
      x: 111.3006591796875,
      y: -754.2066650390625,
      z: 242.15225219726562
    }, {
      x: 118.04336547851562,
      y: -748.447021484375,
      z: 45.751564025878906
    }];
    this.createEntities();
  }

  createEntities() {
    this.coords.forEach(position => {
      const {
        x,
        y,
        z
      } = position;
      mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
        color: [15, 192, 252, 70],
        visible: true
      });
      _helpers_colshapes__WEBPACK_IMPORTED_MODULE_2__["default"].create(position, 0.75, {
        onEnter: this.enteredShape.bind(this),
        onKeyPress: this.openMenu.bind(this),
        keyName: 'E'
      });
    });
  }

  enteredShape(player) {
    if (player.faction.id !== this.name) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  openMenu(player) {
    if (player.faction.id !== this.name) return;
    const {
      vehicle
    } = player;

    if (vehicle && (!vehicle.owner || vehicle.owner.id !== this.name)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Нужно находиться в служебном ТС');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'FBI-ShowPC');
  }

  hackPhone(player, phoneNumber) {
    const target = mp.players.toArray().find(item => item.loggedIn && item.phone.number === phoneNumber);

    if (!target) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Владелец не найден!');
      return Promise.reject();
    }

    return {
      name: `${target.firstName} ${target.lastName}`,
      registerDate: target.registerDate,
      cardNumber: `${target.cardNumber}`,
      money: target.money.bank,
      vehicles: Object.keys(target.vehicles).length
    };
  }

}

const fbiPC = new FbiPC();
mp.events.subscribe({
  'FBI-ShowPC': player => {
    if (!player.vehicle) return;
    fbiPC.openMenu(player);
  },
  'FBI-HackPhone': (player, phoneNumber) => fbiPC.hackPhone(player, phoneNumber)
});

/***/ }),

/***/ "./src/factions/garage.ts":
/*!********************************!*\
  !*** ./src/factions/garage.ts ***!
  \********************************/
/*! exports provided: updateGarageMarker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGarageMarker", function() { return updateGarageMarker; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _basic_vehicle_tuning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../basic/vehicle/tuning */ "./src/basic/vehicle/tuning.ts");
/* harmony import */ var _data_vehicles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/vehicles */ "./src/data/vehicles.ts");







const garages = {};

class FactionGarage {
  constructor(id, position, spawnPositions, models, tuning = {}) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "id", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicles", new Map());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "models", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "positions", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "tuning", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "marker", void 0);

    this.id = id;
    this.positions = spawnPositions;
    this.models = models;
    this.tuning = tuning;
    this.createMainShape(position);
    garages[id] = this;
  }

  static despawnVehicle(vehicle) {
    var _vehicle$owner;

    if (!mp.vehicles.exists(vehicle)) return;
    const garage = garages[(_vehicle$owner = vehicle.owner) === null || _vehicle$owner === void 0 ? void 0 : _vehicle$owner.id];

    if (garage) {
      const holder = vehicle.getVariable('holderId');
      garage.vehicles.delete(holder);
      vehicle.destroy();
    }
  }

  getAvailableVehicles(player) {
    return this.models[player.faction.rank - 1];
  }

  showMenu(player) {
    if (player.faction.id !== this.id) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1___default.a.callClient(player, 'Factions-ShowGarageMenu', [this.id, this.vehicles.has(player.dbId), this.getAvailableVehicles(player)]);
  }

  async spawnVehicle(player, model) {
    if (this.vehicles.has(player.dbId) || !this.models[player.faction.rank - 1].includes(model)) return mp.events.reject('Вы уже брали ТС');
    const position = this.getFreePosition(model);
    if (!position) return mp.events.reject('Нет свободных паркомест');
    const vehicle = await _basic_vehicle__WEBPACK_IMPORTED_MODULE_4__["default"].create(model, position, {
      type: 'faction',
      id: this.id
    }, true, true);
    vehicle.setVariable('holderId', player.dbId);
    vehicle.numberPlate = this.getNumberPlate();
    _basic_vehicle_tuning__WEBPACK_IMPORTED_MODULE_5__["default"].update(vehicle, this.tuning);
    this.vehicles.set(player.dbId, vehicle);
  }

  updateMarkerVisible(player) {
    if (player.faction.name) this.marker.showFor(player);else this.marker.hideFor(player);
  }

  getNumberPlate() {
    const vehiclesAmount = this.vehicles.size + 1;
    return this.id.toUpperCase() + vehiclesAmount;
  }

  getFreePosition(model) {
    var _vehicles$model, _this$positions$vehic;

    const vehicleType = (_vehicles$model = _data_vehicles__WEBPACK_IMPORTED_MODULE_6__["default"][model]) === null || _vehicles$model === void 0 ? void 0 : _vehicles$model.type;
    const positions = (_this$positions$vehic = this.positions[vehicleType]) !== null && _this$positions$vehic !== void 0 ? _this$positions$vehic : this.positions.all;
    return positions && positions.find(item => {
      const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_2__["getNearestVehicleInRange"])(new mp.Vector3(item.x, item.y, item.z), 2);
      return !vehicle;
    });
  }

  createMainShape(coords) {
    const {
      x,
      y,
      z
    } = coords;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_3__["default"].create({
      x,
      y,
      z
    }, 1, {
      onKeyPress: this.showMenu.bind(this),
      keyName: 'E'
    });
    this.marker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 1, {
      color: [255, 92, 0, 255],
      visible: false
    });
  }

}

mp.events.subscribe({
  'Faction-SpawnVehicle': (player, model) => {
    const garage = garages[player.faction.id];
    return garage && garage.spawnVehicle(player, model);
  },
  'Faction-DespawnVehicle': player => {
    const garage = garages[player.faction.id];
    if (!garage) return;
    const vehicle = garage.vehicles.get(player.dbId);
    if (vehicle) FactionGarage.despawnVehicle(vehicle);
  }
});
function updateGarageMarker(player, faction) {
  const garage = garages[faction];
  if (garage) garage.updateMarkerVisible(player);
}
/* harmony default export */ __webpack_exports__["default"] = (FactionGarage);

/***/ }),

/***/ "./src/factions/index.ts":
/*!*******************************!*\
  !*** ./src/factions/index.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _police__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./police */ "./src/factions/police/index.ts");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security */ "./src/factions/security/index.ts");
/* harmony import */ var _fbi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fbi */ "./src/factions/fbi/index.ts");
/* harmony import */ var _italianMafia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./italianMafia */ "./src/factions/italianMafia/index.ts");
/* harmony import */ var _sheriff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sheriff */ "./src/factions/sheriff/index.ts");
/* harmony import */ var _ems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ems */ "./src/factions/ems/index.ts");







/***/ }),

/***/ "./src/factions/italianMafia/garage.ts":
/*!*********************************************!*\
  !*** ./src/factions/italianMafia/garage.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/factions/coords */ "./src/data/factions/coords.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../garage */ "./src/factions/garage.ts");


/* harmony default export */ __webpack_exports__["default"] = (new _garage__WEBPACK_IMPORTED_MODULE_1__["default"]('italy', {
  x: -2598.978,
  y: 1929.757,
  z: 167.311
}, _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__["garageCoords"].italy, [['dl2016'], ['dl2016'], ['dl2016', 'S63AMG'], ['dl2016', 'S63AMG'], ['dl2016', 'S63AMG'], ['dl2016', 'S63AMG', 'bentayga17'], ['dl2016', 'S63AMG', 'bentayga17'], ['dl2016', 'S63AMG', 'bentayga17', 'svr16'], ['dl2016', 'S63AMG', 'bentayga17', 'svr16'], ['dl2016', 'S63AMG', 'bentayga17', 'svr16', 'urus'], ['dl2016', 'S63AMG', 'bentayga17', 'svr16', 'urus'], ['dl2016', 'S63AMG', 'bentayga17', 'svr16', 'urus']], {
  paint: {
    primary: [240, 240, 240],
    secondary: [240, 240, 240],
    type: 0
  },
  armour: 1,
  glasses: 1,
  engine: 3,
  turbo: 0,
  transmission: 2,
  brakes: 2
}));

/***/ }),

/***/ "./src/factions/italianMafia/index.ts":
/*!********************************************!*\
  !*** ./src/factions/italianMafia/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../faction */ "./src/factions/faction.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var _mafiaBuilding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mafiaBuilding */ "./src/factions/italianMafia/mafiaBuilding.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _pc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pc */ "./src/factions/italianMafia/pc.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./garage */ "./src/factions/italianMafia/garage.ts");
/* harmony import */ var _mafiaLeaderBoard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mafiaLeaderBoard */ "./src/factions/italianMafia/mafiaLeaderBoard.ts");

















class ItalianMafia extends _faction__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    const info = {
      id: 'italy',
      name: 'Итальянская мафия',
      mainMenu: {
        x: -2586.75927734375,
        y: 1877.803955078125,
        z: 163.72415161132812
      },
      government: false,
      ranks: ['Посвященный', 'Подручный', 'Сообщник', 'Солдато', 'Громила', 'Сотто-Капо', 'Капо', 'Младший Босс', 'Босс', 'Советник', 'Консильере', 'Дон'],
      salary: [5000, 7000, 9000, 11000, 14000, 17000, 20000, 23000, 26000, 29000, 32000, 35000],
      chatColor: [190, 85, 211],
      inventoryCoords: {
        x: -2582.910888671875,
        y: 1892.3502197265625,
        z: 163.72413635253906
      }
    };
    super(info);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      vehicleNumber: 50000,
      passport: 30000
    };
  }

  startWork(player) {
    super.startWork(player);
    if (this.isWorking(player)) this.setWeapons(player);
  }

  setWeapons(player) {
    player.armour = 100;
  }

  changeClothesMan(player) {
    player.setProp(6, 1, 0);
    player.setClothes(4, 20, 2, 0);
    player.setClothes(6, 21, 0, 0);
    player.setClothes(7, 38, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_11__["default"].set(player, 'underwears', {
      style: 13,
      color: 0,
      gender: 'male'
    });
    _character_clothes__WEBPACK_IMPORTED_MODULE_11__["default"].set(player, 'tops', {
      style: 20,
      color: 2,
      gender: 'male'
    });
  }

  changeClothesWoman(player) {
    player.setProp(6, 3, 0);
    player.setClothes(4, 6, 0, 0);
    player.setClothes(6, 6, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_11__["default"].set(player, 'underwears', {
      style: 13,
      color: 0,
      gender: 'female'
    });
    _character_clothes__WEBPACK_IMPORTED_MODULE_11__["default"].set(player, 'tops', {
      style: 6,
      color: 0,
      gender: 'female'
    });
  }

  openInteractionMenu(player, target) {
    const id = lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(target) ? target : -1;
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'ItalianMafia-ShowMenu', id);
  }

  showFactionDocs(player, id) {
    if (!this.isInThisFaction(player) || typeof id !== 'number') return;
    const {
      rank
    } = player.getVariable('faction');
    const player2 = mp.players.at(id);
    if (!player2) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player2, 'ItalianMafia-ShowDocs', [player.getVariable('realName'), rank]);
  }

  showBuyerMenu(player, product) {
    const buyer = Object(_utils_players__WEBPACK_IMPORTED_MODULE_7__["getNearestPlayerInRange"])(player.position, 3);

    if (!mp.players.exists(buyer) || buyer.dist(_mafiaBuilding__WEBPACK_IMPORTED_MODULE_10__["default"].getEntranceCoords()) > 60) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_12__["default"].error(player, 'Нужно находиться на территории фракции!');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](buyer, 'ItalianMafia-ShowBuyerMenu', [product, this.prices[product], player.dbId]);
  }

  async changeVehicleNumber(player, sellerId) {
    try {
      const {
        id
      } = this.getFactionMember(sellerId);
      const price = this.prices.vehicleNumber;

      if (!Number.isInteger(id) || !player.vehicle || !_basic_vehicle__WEBPACK_IMPORTED_MODULE_8__["default"].isOwner(player.vehicle, player)) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_12__["default"].error(player, 'Вы не являетесь владельцем данного ТС!');
      }

      const seller = mp.players.at(id);
      await player.moneyHelper.different(price, 'mafia number');
      const earnedMoney = price / 100 * 20;
      await this.changeFactionMoney(price - earnedMoney);
      await seller.moneyHelper.change(earnedMoney, 'bank', 'mafia income');
      await _basic_vehicle__WEBPACK_IMPORTED_MODULE_8__["default"].setNumberPlate(player.vehicle);
      await _basic_prison__WEBPACK_IMPORTED_MODULE_9__["default"].addViolation(seller, 1.8);
      this.addToStatistic(seller.dbId, 'vehicleNumber');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_12__["default"].success(seller, 'Успешная продажа!');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_12__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  async changePassport(player, sellerId, data) {
    try {
      const {
        id
      } = this.getFactionMember(sellerId);
      const price = this.prices.passport;
      const {
        firstName,
        lastName
      } = data;
      const error = await Object(_utils_validation__WEBPACK_IMPORTED_MODULE_6__["validateName"])(firstName, lastName);
      if (error || !Number.isInteger(id)) return;
      const seller = mp.players.at(id);
      await player.moneyHelper.different(price, 'mafia docs');
      const earnedMoney = price / 100 * 20;
      await this.changeFactionMoney(price - earnedMoney);
      await seller.moneyHelper.change(earnedMoney, 'bank', 'mafia income');
      const tempName = {
        firstName,
        lastName,
        expiresDate: moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).add(1, 'days')
      };
      await _models_User__WEBPACK_IMPORTED_MODULE_5__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          tempName
        }
      });
      player.tempName = tempName;
      player.updateName();
      await _basic_prison__WEBPACK_IMPORTED_MODULE_9__["default"].addViolation(seller, 1.9);
      this.addToStatistic(seller.dbId, 'passport');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_12__["default"].success(seller, 'Успешная продажа!');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_12__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

}

const italianMafia = new ItalianMafia();
mp.events.subscribe({
  'ItalianMafia-VehicleNumber': (player, id) => {
    italianMafia.changeVehicleNumber(player, id);
  },
  'ItalianMafia-Passport': (player, id, data) => {
    italianMafia.changePassport(player, id, data);
  },
  'ItalianMafia-ShowBuyerMenu': (player, product) => {
    if (player.sack || player.cuff) return;
    italianMafia.showBuyerMenu(player, product);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (italianMafia);

/***/ }),

/***/ "./src/factions/italianMafia/mafiaBuilding.ts":
/*!****************************************************!*\
  !*** ./src/factions/italianMafia/mafiaBuilding.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/building */ "./src/basic/building.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");



class MafiaBuilding extends _basic_building__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'Итальянская мафия',
      outPos: {
        x: -2586.75927734375,
        y: 1877.803955078125,
        z: 163.72415161132812
      },
      blipData: {
        model: 680,
        color: 6
      },
      markerData: {
        radius: 0.75,
        color: [190, 85, 211, 90]
      }
    };
    super(info);
  }

  tryToEnter(player) {
    if (player.faction.name !== this.name) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].error(player, `Вы не состоите во фракции ${this.name}`);
    }

    super.tryToEnter(player);
  }

}

const building = new MafiaBuilding();
/* harmony default export */ __webpack_exports__["default"] = (building);

/***/ }),

/***/ "./src/factions/italianMafia/mafiaLeaderBoard.ts":
/*!*******************************************************!*\
  !*** ./src/factions/italianMafia/mafiaLeaderBoard.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leaderBoard */ "./src/factions/leaderBoard.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/factions/italianMafia/index.ts");




class MafiaLeaderBoard extends _leaderBoard__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const coords = {
      x: -2590.527099609375,
      y: 1882.3876953125,
      z: 167.3199920654297
    };
    super(coords);
  }

  showMenu(player) {
    const members = ___WEBPACK_IMPORTED_MODULE_2__["default"].getMembers();
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'ItalianMafia-ShowLeaderBoard', members);
  }

}

const leaderBoard = new MafiaLeaderBoard();

/***/ }),

/***/ "./src/factions/italianMafia/pc.ts":
/*!*****************************************!*\
  !*** ./src/factions/italianMafia/pc.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/factions/italianMafia/index.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");








class MafiaPС {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "mainCoords", void 0);

    this.name = 'Итальянская мафия';
    this.mainCoords = {
      x: -2586.64404296875,
      y: 1880.81640625,
      z: 167.31658935546875
    };
    this.createMainShape();
  }

  enteredShape(player) {
    if (player.faction.name !== this.name) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  createMainShape() {
    const {
      x,
      y,
      z
    } = this.mainCoords;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_5__["default"].create(this.mainCoords, 0.75, {
      onEnter: this.enteredShape.bind(this),
      onKeyPress: this.openMenu.bind(this),
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      color: [83, 119, 83, 150],
      visible: true
    });
  }

  openMenu(player) {
    if (!player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Переоденьтесь во фракционную одежду');
    }

    if (!___WEBPACK_IMPORTED_MODULE_4__["default"].isMainLeader(player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'У тебя недостаточно полномочий');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'ItalianMafia-ShowPС', [___WEBPACK_IMPORTED_MODULE_4__["default"].getFactionMoney(), ___WEBPACK_IMPORTED_MODULE_4__["default"].getMembers()]);
  }

  async giveFactionMoney(player, memberGuid, value) {
    if (!___WEBPACK_IMPORTED_MODULE_4__["default"].isMainLeader(player)) return Promise.reject();
    const member = ___WEBPACK_IMPORTED_MODULE_4__["default"].getFactionMember(memberGuid);
    const sum = parseInt(value, 10);
    if (!member || sum <= 0) return Promise.reject();
    const money = await ___WEBPACK_IMPORTED_MODULE_4__["default"].changeFactionMoney(-sum);
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(money)) return Promise.reject();

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(member.id)) {
      await mp.players.at(member.id).moneyHelper.change(sum, 'bank', 'mafia money');
    } else {
      await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(memberGuid, {
        $inc: {
          'money.bank': sum
        }
      });
    }

    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Операция успешна!');
    return money;
  }

}

const mafiaPC = new MafiaPС();
mp.events.subscribe({
  'ItalianMafia-GiveMoney': (player, dbId, value) => mafiaPC.giveFactionMoney(player, dbId, value)
});

/***/ }),

/***/ "./src/factions/leaderBoard.ts":
/*!*************************************!*\
  !*** ./src/factions/leaderBoard.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeaderBoard; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");


/* eslint-disable lines-between-class-members */


class LeaderBoard {
  constructor(coords) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "mainCoords", void 0);

    this.mainCoords = coords;
    this.createMainShape();
  }

  showMenu(player) {}

  createMainShape() {
    const {
      x,
      y,
      z
    } = this.mainCoords;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.mainCoords, 0.75, {
      onEnter: this.enteredMainShape.bind(this),
      onKeyPress: this.showMenu.bind(this),
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      color: [255, 65, 74, 95],
      visible: true
    });
  }

  enteredMainShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы посмотреть');
  }

}

/***/ }),

/***/ "./src/factions/police/garage.ts":
/*!***************************************!*\
  !*** ./src/factions/police/garage.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/factions/coords */ "./src/data/factions/coords.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../garage */ "./src/factions/garage.ts");


/* harmony default export */ __webpack_exports__["default"] = (new _garage__WEBPACK_IMPORTED_MODULE_1__["default"]('lspd', {
  x: 458.185,
  y: -999.186,
  z: 25.699
}, _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__["garageCoords"].lspd, [['towtruck', 'MTA'], ['towtruck', 'MTA'], ['towtruck', 'MTA'], ['towtruck', 'MTA'], ['towtruck', 'MTA', 'pol718'], ['towtruck', 'MTA', 'pol718'], ['towtruck', 'MTA', 'pol718', 'srtpol'], ['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang'], ['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang'], ['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang', 'g55pol', 'riot'], ['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang', 'g55pol', 'riot', 'polmav'], ['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang', 'g55pol', 'riot', 'polmav', 'polaventa'], ['towtruck', 'MTA', 'pol718', 'srtpol', '2015polstang', 'g55pol', 'riot', 'polmav', 'polaventa']], {
  paint: {
    primary: [0, 0, 0],
    secondary: [0, 0, 0],
    type: 0
  },
  armour: 3,
  engine: 3,
  turbo: 0,
  transmission: 2,
  brakes: 2
}));

/***/ }),

/***/ "./src/factions/police/index.ts":
/*!**************************************!*\
  !*** ./src/factions/police/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faction */ "./src/factions/faction.ts");
/* harmony import */ var _basic_weapons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../basic/weapons */ "./src/basic/weapons/index.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var _weaponsOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weaponsOrder */ "./src/factions/police/weaponsOrder.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _policeBuilding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./policeBuilding */ "./src/factions/police/policeBuilding.ts");
/* harmony import */ var _pc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pc */ "./src/factions/police/pc.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./garage */ "./src/factions/police/garage.ts");
/* harmony import */ var _policeLeaderBoard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./policeLeaderBoard */ "./src/factions/police/policeLeaderBoard.ts");















class Police extends _faction__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      id: 'lspd',
      name: 'Полиция',
      mainMenu: {
        x: 461.4183349609375,
        y: -999.1173095703125,
        z: 30.689584732055664
      },
      inventoryCoords: {
        x: 485.6922607421875,
        y: -995.9817504882812,
        z: 30.689802169799805
      },
      government: true,
      ranks: ['Кадет', 'Рекрут', 'Капрал', 'Сержант', 'Офицер', 'Лейтенант', 'Капитан', 'Майор', 'Коммандер', 'Ассистент шефа', 'Заместитель шефа', 'Шеф'],
      salary: [4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000, 36000, 40000, 45000, 50000],
      chatColor: [0, 102, 255]
    };
    super(info);
  }

  updateMarkers(player) {
    _weaponsOrder__WEBPACK_IMPORTED_MODULE_6__["default"].updateMainMarker(player, this.name);
    super.updateMarkers(player);
  }

  async putToJail(player, id) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id) || player.dist(_policeBuilding__WEBPACK_IMPORTED_MODULE_10__["default"].getEntranceCoords()) > 50) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].info(player, 'Преступник должен находиться в департаменте.');
    }

    try {
      const intruder = mp.players.at(id);
      if (!mp.players.exists(intruder)) return;
      await _basic_prison__WEBPACK_IMPORTED_MODULE_5__["default"].startJail(intruder, player);

      if (this.isInThisFaction(player)) {
        this.addToStatistic(player.dbId, 'arrest');
      }
    } catch (err) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].info(player, 'У гражданина нет нарушений!');
    }
  }

  startWork(player) {
    super.startWork(player);
    if (this.isWorking(player)) this.setWeapons(player);
  }

  setWeapons(player) {
    player.armour = 100;
  }

  pickUpWeapons(player, id) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id)) return;
    const intruder = mp.players.at(id);
    if (!mp.players.exists(intruder)) return;

    if (!intruder.cuff) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Для изъятия наденьте наручники на подозреваемого');
    }

    const weapons = _basic_weapons__WEBPACK_IMPORTED_MODULE_4__["default"].removeWeapons(intruder);
    weapons.forEach(weapon => player.addToInventory(weapon));
  }

  searchInventory(player, id) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id)) return;
    const intruder = mp.players.at(id);
    if (!mp.players.exists(intruder)) return;

    if (!intruder.cuff) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Для обыска наденьте наручники на подозреваемого');
    }

    _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_7__["default"].showDoubleMenu(player, intruder);
  }

  changeClothesMan(player) {
    player.setProp(0, 46, 0);
    player.setClothes(6, 25, 0, 0);
    player.setClothes(4, 35, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_9__["default"].set(player, 'underwears', {
      style: 55,
      color: 0,
      gender: 'male'
    });
    player.setClothes(8, 58, 0, 0);
  }

  changeClothesWoman(player) {
    player.setProp(0, 45, 0);
    player.setClothes(6, 25, 0, 0);
    player.setClothes(4, 34, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_9__["default"].set(player, 'underwears', {
      style: 48,
      color: 0,
      gender: 'female'
    });
    player.setClothes(8, 35, 0, 0);
  }

  openInteractionMenu(player, target) {
    const id = lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(target) ? target : -1;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Police-ShowMenu', id);
  }

  async withdrawLicenses(player, id) {
    const intruder = mp.players.at(id);
    if (!mp.players.exists(intruder)) return;
    const hasIllegal = intruder.licenses.find(license => !license.legal);
    if (!hasIllegal) return;
    intruder.licenses = intruder.licenses.filter(license => license.legal);
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(intruder.dbId, {
      $set: {
        licenses: intruder.licenses
      }
    });
    await player.moneyHelper.change(10000, 'bank', 'withdraw licenses');
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].success(player, 'Операция успешна!');
  }

  showFactionDocs(player, id) {
    if (!this.isInThisFaction(player) || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id)) return;
    const {
      rank
    } = player.getVariable('faction');
    const player2 = mp.players.at(id);
    if (!player2) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'Police-ShowDocs', [player.getVariable('realName'), rank]);
  }

}

const police = new Police();
mp.events.subscribe({
  'Police-PutToJail': (player, id) => {
    police.putToJail(player, id);
  },
  'Police-PickUpWeapons': (player, id) => {
    if (player.vehicle) return;
    police.pickUpWeapons(player, id);
  },
  'Police-ToSearch': (player, id) => {
    if (player.vehicle) return;
    police.searchInventory(player, id);
  },
  'Police-WithdrawLicenses': (player, id) => {
    police.withdrawLicenses(player, id);
  }
});
mp.events.subscribeToDefault({
  playerEnterColshape: (player, shape) => {
    if (!player.loggedIn || !shape.doorId || !police.isInThisFaction(player) || !police.isWorking(player)) return;
    player.canEnter.door = {
      id: shape.doorId,
      pos: shape.pos
    };
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть/закрыть камеру');
  },
  playerExitColshape: (player, shape) => {
    if (!player.loggedIn || !police.isInThisFaction(player) || !police.isWorking(player) || !shape.doorId) return;
    player.canEnter.door = false;
  },
  'Keys-E': player => {
    if (!police.isInThisFaction(player) || !player.canEnter.door) return;
    const {
      id,
      pos
    } = player.canEnter.door;
    mp.players.forEach(item => rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](item, 'Police-ToggleDoor', [id, pos]));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (police);

/***/ }),

/***/ "./src/factions/police/pc.ts":
/*!***********************************!*\
  !*** ./src/factions/police/pc.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _models_Vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Vehicle */ "./src/models/Vehicle.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");







class PolicePC {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "coords", void 0);

    this.coords = [{
      x: 443.273193359375,
      y: -980.83251953125,
      z: 30.6895809173584
    }, {
      x: -1648.165,
      y: 165.678,
      z: 61.782
    }, {
      x: -1652.995,
      y: 163.454,
      z: 61.782
    }, {
      x: 450.08251953125,
      y: -987.4801635742188,
      z: 30.6895751953125
    }, {
      x: 413.5072021484375,
      y: -1024.0865478515625,
      z: 29.50324058532715
    }, {
      x: -1093.606,
      y: -842.954,
      z: 19.308
    }, {
      x: -1096.414,
      y: -845.126,
      z: 19.308
    }];
    this.name = 'lspd';
    this.createEntities();
  }

  createEntities() {
    this.coords.forEach(position => {
      const {
        x,
        y,
        z
      } = position;
      mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
        color: [15, 192, 252, 70],
        visible: true
      });
      _helpers_colshapes__WEBPACK_IMPORTED_MODULE_4__["default"].create(position, 0.75, {
        onEnter: this.enteredShape.bind(this),
        onKeyPress: this.openMenu.bind(this),
        keyName: 'E'
      });
    });
  }

  enteredShape(player) {
    if (player.faction.id !== this.name) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  openMenu(player) {
    if (player.faction.id !== this.name) return;
    const {
      vehicle
    } = player;

    if (vehicle && (!vehicle.owner || vehicle.owner.id !== this.name)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Нужно находиться в служебном ТС');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Police-ShowPC');
  }

  async getVehicleOwner(player, numberPlate) {
    const vehicle = await _models_Vehicle__WEBPACK_IMPORTED_MODULE_3__["default"].findOne({
      numberPlate
    });

    if (!vehicle || !vehicle.owner) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Неверный номер!');
      return Promise.reject();
    }

    const owner = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findById(vehicle.owner);

    if (!owner) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Владелец не найден!');
      return Promise.reject();
    }

    return {
      name: `${owner.firstName} ${owner.lastName}`,
      vehicleModel: vehicle.model
    };
  }

  async getLicenses(player, userData) {
    const {
      firstName,
      lastName
    } = userData;
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      firstName,
      lastName
    });

    if (!user) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Гражданин не найден!');
      return Promise.reject();
    }

    return user.licenses;
  }

}

const policePC = new PolicePC();
mp.events.subscribe({
  'Police-ShowPC': player => {
    if (!player.vehicle) return;
    policePC.openMenu(player);
  },
  'Police-GetVehicleOwner': (player, number) => policePC.getVehicleOwner(player, number),
  'Police-GetLicenses': (player, data) => policePC.getLicenses(player, data)
});

/***/ }),

/***/ "./src/factions/police/policeBuilding.ts":
/*!***********************************************!*\
  !*** ./src/factions/police/policeBuilding.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/building */ "./src/basic/building.ts");
/* harmony import */ var _data_doors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/doors */ "./src/data/doors.js");



class PoliceBuilding extends _basic_building__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'Полицейский участок',
      outPos: {
        x: 441.09,
        y: -982.429,
        z: 30.69
      },
      blipData: {
        model: 461,
        color: 3
      }
    };
    super(info);
    this.createDoors();
  }

  createDoors() {
    _data_doors__WEBPACK_IMPORTED_MODULE_1__["default"].police.forEach(door => this.createDoorShape(door));
  }

}

const building = new PoliceBuilding();
/* harmony default export */ __webpack_exports__["default"] = (building);

/***/ }),

/***/ "./src/factions/police/policeLeaderBoard.ts":
/*!**************************************************!*\
  !*** ./src/factions/police/policeLeaderBoard.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leaderBoard */ "./src/factions/leaderBoard.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/factions/police/index.ts");




class PoliceLeaderBoard extends _leaderBoard__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const coords = {
      x: 472.4600524902344,
      y: -992.0211791992188,
      z: 30.689800262451172
    };
    super(coords);
  }

  showMenu(player) {
    const members = ___WEBPACK_IMPORTED_MODULE_2__["default"].getMembers();
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Police-ShowLeaderBoard', members);
  }

}

const leaderBoard = new PoliceLeaderBoard();

/***/ }),

/***/ "./src/factions/police/weaponsOrder.ts":
/*!*********************************************!*\
  !*** ./src/factions/police/weaponsOrder.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/factions/police/index.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");






class WeaponsOrder {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "weaponsBox", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "mainEntityCoord", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "deliveryCoord", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "orderTimeout", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "mainMarker", void 0);

    this.name = 'Полиция';
    this.prices = {
      melee: 3000,
      handguns: 14000,
      smgs: 20000,
      shotguns: 27000,
      rifles: 34000,
      ammo: {
        handguns: 10,
        rifles: 15,
        shotguns: 50
      }
    };
    this.mainEntityCoord = {
      x: 483.85321044921875,
      y: -998.1717529296875,
      z: 30.689802169799805
    };
    this.deliveryCoord = {
      x: -1821.449,
      y: 3129.922,
      z: 32.81
    };
    this.orderTimeout = 5;
    this.createMainShape();
  }

  updateMainMarker(player, faction) {
    if (player.faction.name === faction) this.mainMarker.showFor(player);else this.mainMarker.hideFor(player);
  }

  createMainShape() {
    const {
      x,
      y,
      z
    } = this.mainEntityCoord;
    const shape = mp.colshapes.newSphere(x, y, z, 0.75);
    shape.weaponsOrder = this.name;
    this.mainMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      color: [83, 119, 83, 170],
      visible: true
    });
  }

  openMenu(player) {
    if (!player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Переоденьтесь во фракционную одежду');
    }

    if (player.faction.rank < 10) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'У вас недостаточно полномочий');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Police-ShowWeaponsMenu', this.prices);
  }

  getFinalPrice({
    weapons,
    ammo
  }) {
    let finalPrice = 0;
    Object.keys(weapons).forEach(weapon => {
      finalPrice += this.prices[weapons[weapon]];
    });
    Object.keys(ammo).forEach(name => {
      if (ammo[name] <= 0) return;
      finalPrice += this.prices.ammo[name] * ammo[name];
    });
    return finalPrice;
  }

  spawnWeaponsBox(weapons) {
    const {
      x,
      y,
      z
    } = this.deliveryCoord;
    this.weaponsBox = mp.colshapes.newSphere(x, y, z, 2);
    this.weaponsBox.loot = weapons;
    this.weaponsBox.object = mp.objects.new('prop_box_wood02a_mws', new mp.Vector3(x, y, z - 1), {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: 0
    });
    ___WEBPACK_IMPORTED_MODULE_2__["default"].implementForMembers(member => {
      member.call('createBlip', [556, 'Товар', 25, this.deliveryCoord]);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(member, 'Товар прибыл, местоположение отмечено на карте');
    });
  }

  removeWeaponsBox() {
    this.weaponsBox.object.destroy();
    this.weaponsBox.destroy();
    this.weaponsBox = null;
    ___WEBPACK_IMPORTED_MODULE_2__["default"].implementForMembers(member => member.call('removeBlip', ['Товар']));
  }

  async order(player, data) {
    try {
      if (this.weaponsBox) return Promise.reject();
      const cost = this.getFinalPrice(data);
      await player.moneyHelper.different(cost, 'police weapons');
      setTimeout(() => this.spawnWeaponsBox(data), this.orderTimeout * 60 * 1000);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, `Ожидайте прибытие товара (примерно ${this.orderTimeout} мин)`);
    } catch (err) {
      return Promise.reject();
    }
  }

  getLootFromWeaponsBox(player) {
    if (!this.weaponsBox) return;
    const {
      loot
    } = this.weaponsBox;
    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["default"].playOnServer(player, 'pickup', 2000);
    Object.keys(loot.weapons).forEach(weapon => {
      player.addToInventory({
        type: 'weapons',
        name: weapon,
        count: 1,
        category: loot.weapons[weapon]
      });
    });
    Object.keys(loot.ammo).forEach(name => {
      player.addToInventory({
        name,
        type: 'ammo',
        count: loot.ammo[name]
      });
    });
    this.removeWeaponsBox();
  }

}

const weaponsOrder = new WeaponsOrder();
mp.events.subscribe({
  'Police-OrderWeapons': (player, data) => weaponsOrder.order(player, data)
});
mp.events.subscribeToDefault({
  playerEnterColshape: (player, shape) => {
    if (!player.loggedIn) return;

    if (shape.weaponsOrder && shape.weaponsOrder === player.faction.name) {
      player.canOpen.weaponsOrder = shape.weaponsOrder;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы откыть меню');
    }

    if (shape === weaponsOrder.weaponsBox && player.faction.name) {
      player.canOpen.weaponsBox = weaponsOrder.name;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы обыскать ящик');
    }
  },
  playerExitColshape: (player, shape) => {
    if (!player.loggedIn) return;
    if (shape.weaponsOrder) player.canOpen.weaponsOrder = false;

    if (shape === weaponsOrder.weaponsBox && player.faction.name) {
      player.canOpen.weaponsBox = false;
    }
  },
  'Keys-E': player => {
    if (player.canOpen.weaponsOrder === weaponsOrder.name) weaponsOrder.openMenu(player);
    if (player.canOpen.weaponsBox === weaponsOrder.name) weaponsOrder.getLootFromWeaponsBox(player);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (weaponsOrder);

/***/ }),

/***/ "./src/factions/security/garage.ts":
/*!*****************************************!*\
  !*** ./src/factions/security/garage.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/factions/coords */ "./src/data/factions/coords.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../garage */ "./src/factions/garage.ts");


/* harmony default export */ __webpack_exports__["default"] = (new _garage__WEBPACK_IMPORTED_MODULE_1__["default"]('secure', {
  x: 1417.192,
  y: 1115.393,
  z: 114.831
}, _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__["garageCoords"].secure, [['w140'], ['w140'], ['w140'], ['w140', '16challenger'], ['w140', '16challenger'], ['w140', '16challenger', 'lx2018'], ['w140', '16challenger', 'lx2018', 'g65amg'], ['w140', '16challenger', 'lx2018', 'g65amg'], ['w140', '16challenger', 'lx2018', 'g65amg', 'srt8'], ['w140', '16challenger', 'lx2018', 'g65amg', 'srt8', 'bmwm5f90'], ['w140', '16challenger', 'lx2018', 'g65amg', 'srt8', 'bmwm5f90', '18performante'], ['w140', '16challenger', 'lx2018', 'g65amg', 'srt8', 'bmwm5f90', '18performante']], {
  paint: {
    primary: [0, 0, 0],
    secondary: [0, 0, 0],
    type: 0
  },
  armour: 1,
  glasses: 1,
  engine: 3,
  turbo: 0,
  transmission: 2,
  brakes: 2
}));

/***/ }),

/***/ "./src/factions/security/index.ts":
/*!****************************************!*\
  !*** ./src/factions/security/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../faction */ "./src/factions/faction.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var _securityBuilding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./securityBuilding */ "./src/factions/security/securityBuilding.ts");
/* harmony import */ var _pc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pc */ "./src/factions/security/pc.ts");
/* harmony import */ var _vehiclePc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehiclePc */ "./src/factions/security/vehiclePc.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./garage */ "./src/factions/security/garage.ts");
/* harmony import */ var _securityLeaderBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./securityLeaderBoard */ "./src/factions/security/securityLeaderBoard.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");












class Security extends _faction__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      id: 'secure',
      name: 'ЧОП',
      mainMenu: {
        x: 1404.2537841796875,
        y: 1165.0020751953125,
        z: 114.34660339355469
      },
      //Передевалка
      government: false,
      ranks: ['Соучастник', 'Залётный', 'Босота', 'Бывалый', 'Фраер', 'Приблатнённый', 'Блатной', 'Решала', 'Уважаемый', 'Вор в законе', 'Пахан', 'Авторитет'],
      salary: [5000, 7000, 9000, 11000, 14000, 17000, 20000, 23000, 26000, 29000, 32000, 35000],
      chatColor: [255, 132, 0],
      inventoryCoords: {
        x: 1399.920654296875,
        y: 1139.7105712890625,
        z: 114.3336410522461
      }
    };
    super(info);
  }

  startWork(player) {
    super.startWork(player);
    if (this.isWorking(player)) this.setWeapons(player);
  }

  setWeapons(player) {
    player.armour = 100;
  }

  async toRob(player, id) {
    const victim = mp.players.at(id);

    if (!victim || !victim.cuff) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].error(player, 'Для ограбления свяжите жертву');
    }

    await player.moneyHelper.change(victim.money.cash, 'cash', 'secure rob');
    await victim.moneyHelper.resetCash();
    _basic_prison__WEBPACK_IMPORTED_MODULE_3__["default"].addViolation(player, 1.7);
  }

  changeClothesMan(player) {
    player.setProp(6, 1, 0);
    player.setClothes(4, 10, 0, 0);
    player.setClothes(6, 10, 0, 0);
    player.setClothes(7, 38, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_10__["default"].set(player, 'underwears', {
      style: 13,
      color: 0,
      gender: 'male'
    });
    _character_clothes__WEBPACK_IMPORTED_MODULE_10__["default"].set(player, 'tops', {
      style: 28,
      color: 0,
      gender: 'male'
    });
  }

  changeClothesWoman(player) {
    player.setProp(6, 2, 0);
    player.setClothes(3, 5, 0, 0);
    player.setClothes(4, 6, 0, 0);
    player.setClothes(6, 6, 0, 0);
    _character_clothes__WEBPACK_IMPORTED_MODULE_10__["default"].set(player, 'underwears', {
      style: 74,
      color: 0,
      gender: 'female'
    });
    _character_clothes__WEBPACK_IMPORTED_MODULE_10__["default"].set(player, 'tops', {
      style: 58,
      color: 0,
      gender: 'female'
    });
  }

  openInteractionMenu(player, target) {
    const id = lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(target) ? target : -1;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Security-ShowMenu', id);
  }

  showFactionDocs(player, id) {
    if (!this.isInThisFaction(player) || typeof id !== 'number') return;
    const {
      rank
    } = player.getVariable('faction');
    const player2 = mp.players.at(id);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'Security-ShowDocs', [player.getVariable('realName'), rank]);
  }

}

const security = new Security();
mp.events.subscribe({
  'Security-ToRob': (player, id) => {
    if (player.vehicle) return;
    security.toRob(player, id);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (security);

/***/ }),

/***/ "./src/factions/security/pc.ts":
/*!*************************************!*\
  !*** ./src/factions/security/pc.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _police__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../police */ "./src/factions/police/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./src/factions/security/index.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");












class SecurityPС {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "weaponsBox", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "mainCoords", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "orderPoints", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "orderTimeout", void 0);

    this.name = 'ЧОП';
    this.prices = {
      melee: 3000,
      handguns: 14000,
      smgs: 20000,
      shotguns: 27000,
      rifles: 34000,
      ammo: {
        handguns: 10,
        rifles: 15,
        shotguns: 50
      },
      others: 250
    };
    this.mainCoords = {
      x: 1394.1397705078125,
      y: 1160.2906494140625,
      z: 114.37232971191406
    }; // Заказ оружия

    this.orderPoints = [{
      x: 1497.5262451171875,
      y: 6630.33203125,
      z: 2.594790458679199
    }];
    this.orderTimeout = 5;
    this.createEntities();
  }

  createEntities() {
    const {
      x,
      y,
      z
    } = this.mainCoords;
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      color: [83, 119, 83, 150],
      visible: true
    });
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_8__["default"].create(this.mainCoords, 0.75, {
      onEnter: this.enteredMainShape.bind(this),
      onKeyPress: this.openMenu.bind(this),
      keyName: 'E'
    });
  }

  enteredMainShape(player) {
    if (player.faction.name !== this.name) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  openMenu(player) {
    if (!player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].error(player, 'Переоденьтесь во фракционную одежду');
    }

    if (player.faction.rank < 10 || player.faction.name !== this.name) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].error(player, 'У тебя недостаточно полномочий');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](player, 'Security-ShowPС', [this.prices, ___WEBPACK_IMPORTED_MODULE_6__["default"].getFactionMoney(), ___WEBPACK_IMPORTED_MODULE_6__["default"].getMembers()]);
  }

  getFinalPrice({
    weapons,
    ammo
  }) {
    let finalPrice = 0;
    Object.keys(weapons).forEach(weapon => {
      if (!this.prices[weapons[weapon]]) return;
      finalPrice += this.prices[weapons[weapon]];
    });
    Object.keys(ammo).forEach(name => {
      if (!ammo[name] || ammo[name] <= 0 || !this.prices.ammo[name]) return;
      finalPrice += this.prices.ammo[name] * ammo[name];
    });
    return finalPrice;
  }

  spawnWeaponsBox(weapons) {
    const position = this.orderPoints[lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(0, this.orderPoints.length - 1)];

    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_8__["default"].create(position, 0.75, {
      onEnter: player => _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы обыскать ящик'),
      onKeyPress: this.getLootFromWeaponsBox.bind(this),
      keyName: 'E'
    });
    this.weaponsBox = mp.objects.new('prop_box_ammo03a_set2', new mp.Vector3(position.x, position.y, position.z - 1), {
      rotation: new mp.Vector3(0, 0, 0),
      alpha: 255,
      dimension: 0
    });
    this.weaponsBox.loot = weapons;

    const offset = lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(10.5, 20.5);

    ___WEBPACK_IMPORTED_MODULE_6__["default"].implementForMembers(member => {
      member.call('createBlip', [587, 'Товар', 25, position]);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].info(member, 'Товар прибыл, местоположение отмечено на карте');
    });
    _police__WEBPACK_IMPORTED_MODULE_5__["default"].implementForMembers(member => {
      member.call('createRadiusBlip', ['weapons', 3, {
        x: position.x + offset,
        y: position.y + offset,
        z: position.z
      }]);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].info(member, 'В городе новое преступление! Территория отмечена на карте');
    });
  }

  removeWeaponsBox() {
    this.weaponsBox.destroy();
    this.weaponsBox = null;
    ___WEBPACK_IMPORTED_MODULE_6__["default"].implementForMembers(member => member.call('removeBlip', ['Товар']));
    _police__WEBPACK_IMPORTED_MODULE_5__["default"].implementForMembers(member => member.call('removeRadiusBlip', ['weapons']));
  }

  async orderWeapons(player, weapons) {
    try {
      if (this.weaponsBox) return;
      const cost = this.getFinalPrice(weapons);
      await player.moneyHelper.different(cost, 'secure weapons');
      setTimeout(() => this.spawnWeaponsBox(weapons), this.orderTimeout * 60 * 1000);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].info(player, `Ожидайте прибытие товара (примерно ${this.orderTimeout} мин)`);
      _basic_prison__WEBPACK_IMPORTED_MODULE_7__["default"].addViolation(player, 1.6);
    } catch (err) {
      return Promise.reject();
    }
  }

  getLootFromWeaponsBox(player) {
    if (!this.weaponsBox || !player.faction.name) return;
    const {
      loot
    } = this.weaponsBox;
    _utils_animations__WEBPACK_IMPORTED_MODULE_9__["default"].playOnServer(player, 'pickup', 2000);
    Object.keys(loot.weapons).forEach(weapon => {
      const category = loot.weapons[weapon];

      if (category === 'others') {
        player.addToInventory({
          type: category,
          name: weapon,
          count: 1
        });
      } else if (category) {
        player.addToInventory({
          category,
          name: weapon,
          type: 'weapons',
          count: 1
        });
      }
    });
    Object.keys(loot.ammo).forEach(name => {
      if (!loot.ammo[name] || loot.ammo[name] <= 0) return;
      player.addToInventory({
        name,
        type: 'ammo',
        count: loot.ammo[name]
      });
    });
    this.removeWeaponsBox();
  }

  async giveFactionMoney(player, memberGuid, value) {
    if (!___WEBPACK_IMPORTED_MODULE_6__["default"].isMainLeader(player)) return Promise.reject();
    const member = ___WEBPACK_IMPORTED_MODULE_6__["default"].getFactionMember(memberGuid);
    const sum = parseInt(value, 10);
    if (!member || sum <= 0) return Promise.reject();
    const money = await ___WEBPACK_IMPORTED_MODULE_6__["default"].changeFactionMoney(-sum);
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(money)) return Promise.reject();

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(member.id)) {
      await mp.players.at(member.id).moneyHelper.change(sum, 'bank', 'secure money');
    } else {
      await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(memberGuid, {
        $inc: {
          'money.bank': sum
        }
      });
    }

    _helpers_notifications__WEBPACK_IMPORTED_MODULE_10__["default"].info(player, 'Операция успешна!');
    return money;
  }

}

const securityPC = new SecurityPС();
mp.events.subscribe({
  'Security-OrderWeapons': (player, data) => securityPC.orderWeapons(player, data),
  'Security-GiveMoney': (player, dbId, value) => securityPC.giveFactionMoney(player, dbId, value)
});

/***/ }),

/***/ "./src/factions/security/securityBuilding.ts":
/*!***************************************************!*\
  !*** ./src/factions/security/securityBuilding.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/building */ "./src/basic/building.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");



class SecurityBuilding extends _basic_building__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'База ЧОП',
      outPos: {
        x: 1399.920654296875,
        y: 1139.7105712890625,
        z: 114.3336410522461
      },
      //Блип ЧОП
      blipData: {
        model: 487,
        color: 55
      },
      markerData: {
        radius: 0.75,
        color: [194, 42, 42, 85]
      }
    };
    super(info);
  }

  tryToEnter(player) {
    if (!player.faction.name || player.faction.name && player.faction.name !== 'ЧОП') return _helpers_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].error(player, 'Вы не состоите во фракции ЧОП');
    super.tryToEnter(player);
  }

}

const building = new SecurityBuilding();
/* harmony default export */ __webpack_exports__["default"] = (building);

/***/ }),

/***/ "./src/factions/security/securityLeaderBoard.ts":
/*!******************************************************!*\
  !*** ./src/factions/security/securityLeaderBoard.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leaderBoard */ "./src/factions/leaderBoard.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/factions/security/index.ts");




class SecurityLeaderBoard extends _leaderBoard__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const coords = {
      x: 1401.9302978515625,
      y: 1132.4140625,
      z: 114.33364868164062
    }; //Доска почета

    super(coords);
  }

  showMenu(player) {
    const members = ___WEBPACK_IMPORTED_MODULE_2__["default"].getMembers();
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Security-ShowLeaderBoard', members);
  }

}

const leaderBoard = new SecurityLeaderBoard();

/***/ }),

/***/ "./src/factions/security/vehiclePc.ts":
/*!********************************************!*\
  !*** ./src/factions/security/vehiclePc.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/factions/security/index.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");







class SecurityVehiclePC {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.name = 'secure';
    this.prices = {
      license: 30000,
      wanted: 160000
    };
  }

  openMenu(player) {
    if (player.faction.id !== this.name) return;
    const {
      vehicle
    } = player;

    if (!vehicle || !vehicle.owner || vehicle.owner.id !== this.name) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Нужно находиться в служебном ТС');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Security-ShowVehiclePC', this.prices);
  }

  showBuyerMenu(player, product, data) {
    const {
      firstName,
      lastName
    } = data;
    const buyer = mp.players.toArray().find(item => item.firstName === firstName && item.lastName === lastName);

    if (!mp.players.exists(buyer) || buyer.cuff || buyer.getVariable('insideJail')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Гражданин не найден!');
    }

    if (product === 'license' && buyer.isHasLicense('gun')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У этого гражданина уже есть лицензия!');
    }

    if (product === 'wanted' && !_basic_prison__WEBPACK_IMPORTED_MODULE_3__["default"].getViolator(buyer.id)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У этого гражданина нет розысков!');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](buyer, 'Security-ShowBuyerMenu', [product, this.prices[product], player.dbId]);
  }

  async buyLicense(player, sellerId) {
    try {
      const {
        id
      } = ___WEBPACK_IMPORTED_MODULE_4__["default"].getFactionMember(sellerId);
      const price = this.prices.license;
      if (!Number.isInteger(id)) return;
      await player.moneyHelper.different(price, 'secure license');
      const seller = mp.players.at(id);
      const earnedMoney = price / 100 * 20;
      await ___WEBPACK_IMPORTED_MODULE_4__["default"].changeFactionMoney(price - earnedMoney);
      await seller.moneyHelper.change(earnedMoney, 'bank', 'secure income');
      player.licenses.push({
        name: 'gun',
        legal: false
      });
      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          licenses: player.licenses
        }
      });
      await _basic_prison__WEBPACK_IMPORTED_MODULE_3__["default"].addViolation(seller, 2.1);
      ___WEBPACK_IMPORTED_MODULE_4__["default"].addToStatistic(seller.dbId, 'license');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(seller, 'Успешная продажа!');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  async clearWanted(player, sellerId) {
    try {
      const {
        id
      } = ___WEBPACK_IMPORTED_MODULE_4__["default"].getFactionMember(sellerId);
      const price = this.prices.wanted;
      if (!Number.isInteger(id)) return;
      await player.moneyHelper.different(price, 'secure wanted');
      const seller = mp.players.at(id);
      const earnedMoney = price / 100 * 20;
      await ___WEBPACK_IMPORTED_MODULE_4__["default"].changeFactionMoney(price - earnedMoney);
      await seller.moneyHelper.change(earnedMoney, 'bank', 'secure income');
      await _basic_prison__WEBPACK_IMPORTED_MODULE_3__["default"].deleteViolator(player);
      await _basic_prison__WEBPACK_IMPORTED_MODULE_3__["default"].addViolation(seller, 2.0);
      ___WEBPACK_IMPORTED_MODULE_4__["default"].addToStatistic(seller.dbId, 'wanted');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(seller, 'Успешная продажа!');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

}

const vehiclePC = new SecurityVehiclePC();
mp.events.subscribe({
  'Security-ShowVehiclePC': player => {
    if (!player.vehicle) return;
    vehiclePC.openMenu(player);
  },
  'Security-ShowBuyerMenu': (player, product, data) => {
    if (player.sack || player.cuff) return;
    vehiclePC.showBuyerMenu(player, product, data);
  },
  'Security-Wanted': (player, sellerId) => {
    vehiclePC.clearWanted(player, sellerId);
  },
  'Security-License': (player, sellerId) => {
    vehiclePC.buyLicense(player, sellerId);
  }
});

/***/ }),

/***/ "./src/factions/sheriff/building.ts":
/*!******************************************!*\
  !*** ./src/factions/sheriff/building.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/building */ "./src/basic/building.ts");


class SheriffBuilding extends _basic_building__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'Департамент шерифа',
      outPos: {
        x: -444.765,
        y: 6011.797,
        z: 31.716
      },
      blipData: {
        model: 461,
        color: 16
      }
    };
    super(info);
  }

}

const building = new SheriffBuilding();
/* harmony default export */ __webpack_exports__["default"] = (building);

/***/ }),

/***/ "./src/factions/sheriff/garage.ts":
/*!****************************************!*\
  !*** ./src/factions/sheriff/garage.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/factions/coords */ "./src/data/factions/coords.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../garage */ "./src/factions/garage.ts");


/* harmony default export */ __webpack_exports__["default"] = (new _garage__WEBPACK_IMPORTED_MODULE_1__["default"]('lssd', {
  x: -447.472,
  y: 5990.538,
  z: 31.341
}, _data_factions_coords__WEBPACK_IMPORTED_MODULE_0__["garageCoords"].lssd, [['towtruck', 'MTA'], ['towtruck', 'MTA'], ['towtruck', 'MTA'], ['towtruck', 'MTA'], ['towtruck', 'MTA', '2015polstang'], ['towtruck', 'MTA', '2015polstang'], ['towtruck', 'MTA', '2015polstang'], ['towtruck', 'MTA', '2015polstang', 'g55pol'], ['towtruck', 'MTA', '2015polstang', 'g55pol'], ['towtruck', 'MTA', '2015polstang', 'g55pol'], ['towtruck', 'MTA', '2015polstang', 'g55pol', 'riot'], ['towtruck', 'MTA', '2015polstang', 'g55pol', 'riot'], ['towtruck', 'MTA', '2015polstang', 'g55pol', 'riot']], {
  paint: {
    primary: [249, 246, 240],
    secondary: [249, 246, 240],
    type: 0
  },
  armour: 3,
  engine: 3,
  turbo: 0,
  transmission: 2,
  brakes: 2
}));

/***/ }),

/***/ "./src/factions/sheriff/index.ts":
/*!***************************************!*\
  !*** ./src/factions/sheriff/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _faction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../faction */ "./src/factions/faction.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./building */ "./src/factions/sheriff/building.ts");
/* harmony import */ var _pc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pc */ "./src/factions/sheriff/pc.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./garage */ "./src/factions/sheriff/garage.ts");
/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaderboard */ "./src/factions/sheriff/leaderboard.ts");











class Sheriff extends _faction__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      id: 'lssd',
      name: 'Шериф',
      mainMenu: {
        x: -451.567,
        y: 6009.616,
        z: 31.844
      },
      inventoryCoords: {
        x: -425.552,
        y: 5998.533,
        z: 31.716
      },
      government: true,
      ranks: ['Помощник Шерифа', 'Помощник Шерифа Сержант', 'Помощник Шерифа Лейтенант', 'Инспектор', 'Старший Инспектор', 'Руководитель Штаба', 'Заместитель Начальника Штаба', 'Начальник Штаба', 'Помощник Шерифа Капитан', 'Ассистент Заместителя Шерифа', 'Заместитель Шерифа', 'Первый Заместитель Шерифа', 'Шериф'],
      salary: [4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000, 36000, 40000, 44000, 48000, 52000],
      chatColor: [230, 208, 150]
    };
    super(info);
  }

  async putToJail(player, id) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id) || player.dist(_building__WEBPACK_IMPORTED_MODULE_6__["default"].getEntranceCoords()) > 50) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, 'Преступник должен находиться в департаменте.');
    }

    try {
      const intruder = mp.players.at(id);
      if (!mp.players.exists(intruder)) return;
      await _basic_prison__WEBPACK_IMPORTED_MODULE_3__["default"].startJail(intruder, player);

      if (this.isInThisFaction(player)) {
        this.addToStatistic(player.dbId, 'arrest');
      }
    } catch (err) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, 'У гражданина нет нарушений!');
    }
  }

  startWork(player) {
    super.startWork(player);
    if (this.isWorking(player)) this.setWeapons(player);
  }

  setWeapons(player) {
    player.armour = 100;
  }

  changeClothesMan(player) {
    player.setProp(0, 13, 1); // hat

    player.setProp(6, 10, 0);
    player.setClothes(6, 25, 0, 0); // shoes

    player.setClothes(7, 38, 0, 0);
    player.setClothes(4, 22, 1, 0); // legs

    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].set(player, 'underwears', {
      style: 13,
      color: 1,
      gender: 'male'
    });
    player.setClothes(8, 58, 0, 0);
  }

  changeClothesWoman(player) {
    player.setProp(6, 20, 1);
    player.setClothes(6, 27, 0, 0); // shoes

    player.setClothes(4, 23, 5, 0); // legs

    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].set(player, 'underwears', {
      style: 9,
      color: 1,
      gender: 'female'
    });
    player.setClothes(8, 35, 0, 0); // under
  }

  openInteractionMenu(player, target) {
    const id = lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(target) ? target : -1;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Sheriff-ShowMenu', id);
  }

  showFactionDocs(player, id) {
    if (!this.isInThisFaction(player) || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id)) return;
    const {
      rank
    } = player.getVariable('faction');
    const player2 = mp.players.at(id);
    if (!player2) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'Sheriff-ShowDocs', [player.getVariable('realName'), rank]);
  }

}

const sheriff = new Sheriff();
mp.events.subscribe({
  'Sheriff-PutToJail': (player, id) => {
    sheriff.putToJail(player, id);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (sheriff);

/***/ }),

/***/ "./src/factions/sheriff/leaderboard.ts":
/*!*********************************************!*\
  !*** ./src/factions/sheriff/leaderboard.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leaderBoard */ "./src/factions/leaderBoard.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/factions/sheriff/index.ts");




class SheriffLeaderBoard extends _leaderBoard__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const coords = {
      x: -440.497,
      y: 6005.873,
      z: 31.716
    };
    super(coords);
  }

  showMenu(player) {
    const members = ___WEBPACK_IMPORTED_MODULE_2__["default"].getMembers();
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Sheriff-ShowLeaderBoard', members);
  }

}

const leaderBoard = new SheriffLeaderBoard();

/***/ }),

/***/ "./src/factions/sheriff/pc.ts":
/*!************************************!*\
  !*** ./src/factions/sheriff/pc.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");





class SheriffPC {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "coords", void 0);

    this.name = 'lssd';
    this.coords = [{
      x: -448.5984802246094,
      y: 6011.57177734375,
      z: 31.71654510498047
    }, {
      x: -446.2485046386719,
      y: 6013.6982421875,
      z: 36.68670654296875
    }, {
      x: -433.5337219238281,
      y: 6004.265625,
      z: 31.71653175354004
    }, {
      x: -1645.7198486328125,
      y: 160.27952575683594,
      z: 61.780216217041016
    }, {
      x: -1650.474609375,
      y: 157.98887634277344,
      z: 61.780216217041016
    }];
    this.createMainShape();
  }

  createMainShape() {
    this.coords.forEach(position => {
      const {
        x,
        y,
        z
      } = position;
      mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
        color: [15, 192, 252, 70],
        visible: true
      });
      _helpers_colshapes__WEBPACK_IMPORTED_MODULE_2__["default"].create(position, 0.75, {
        onEnter: this.enteredShape.bind(this),
        onKeyPress: this.openMenu.bind(this),
        keyName: 'E'
      });
    });
  }

  enteredShape(player) {
    if (player.faction.id !== this.name) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  openMenu(player) {
    if (player.faction.id !== this.name) return;
    const {
      vehicle
    } = player;

    if (vehicle && (!vehicle.owner || vehicle.owner.id !== this.name)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Нужно находиться в служебном ТС');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Sheriff-ShowPC');
  }

}

const sheriffPC = new SheriffPC();
mp.events.subscribe({
  'Sheriff-ShowPC': player => {
    if (!player.vehicle) return;
    sheriffPC.openMenu(player);
  }
});

/***/ }),

/***/ "./src/gangs/actions.ts":
/*!******************************!*\
  !*** ./src/gangs/actions.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _basic_player_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../basic/player/actions */ "./src/basic/player/actions.ts");







class GangActions {
  constructor() {
    mp.events.subscribe({
      'Gang-Menu': this.openInteractionMenu.bind(this),
      'Gang-UseRope': this.useRope.bind(this),
      'Gang-UseSack': this.useSack.bind(this)
    });
    mp.events.add({
      'Gang-ShowDocs': this.showDocs.bind(this)
    });
  }

  async useRope(player, id) {
    if (player.vehicle || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id)) return;
    const rope = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].getItem(player.inventory, 'rope');
    if (!rope) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'У вас нет веревки!');
    _basic_player_actions__WEBPACK_IMPORTED_MODULE_5__["default"].toggleHandcuffs(player, id, () => _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].decItemCount(player, player.inventory, rope));
  }

  async useSack(player, id) {
    if (player.vehicle || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id)) return;
    const sack = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].getItem(player.inventory, 'sack');
    if (!sack) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'У вас нет мешка!');
    _basic_player_actions__WEBPACK_IMPORTED_MODULE_5__["default"].toggleHeadSack(player, id, () => _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].decItemCount(player, player.inventory, sack));
  }

  openInteractionMenu(player, target) {
    if (!player.gang.name) return;
    const id = lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(target) ? target : -1;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Gang-ShowMenu', id);
  }

  showDocs(player, id) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id) || !player.gang.name) return;
    const player2 = mp.players.at(id);
    const {
      name,
      rank
    } = player.gang;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player2, 'Gang-ShowDocs', [player.getVariable('realName'), name, rank]);
    _utils_animations__WEBPACK_IMPORTED_MODULE_2__["default"].playOnServer(player, 'docs', 2500);
  }

}

const actions = new GangActions();

/***/ }),

/***/ "./src/gangs/index.ts":
/*!****************************!*\
  !*** ./src/gangs/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Gang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Gang */ "./src/models/Gang.ts");
/* harmony import */ var _members__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members */ "./src/gangs/members.ts");
/* harmony import */ var _ranks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranks */ "./src/gangs/ranks.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/gangs/actions.ts");
/* harmony import */ var _leader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leader */ "./src/gangs/leader.ts");







class Gangs {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "items", void 0);

    this.items = new Map();
    this.subscribeToEvents();
  }

  get(name) {
    return this.items.get(name);
  }

  isOwner(player, gang) {
    return gang && gang.owner.toString() === player.dbId.toString();
  }

  isAlreadyExists(name) {
    return !!this.get(name);
  }

  async create(player, name) {
    const doc = await new _models_Gang__WEBPACK_IMPORTED_MODULE_1__["default"]({
      name,
      owner: player.dbId
    }).save();
    const data = doc.toObject();
    this.items.set(data.name, data);
    this.setPlayerData(player, name, 'Глава');
  }

  async delete(gang) {
    await _models_Gang__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndDelete(gang._id);
    this.items.delete(gang.name);
  }

  setPlayerData(player, gang, rank) {
    if (!player) return;
    player.gang = {
      rank,
      name: gang
    };
    player.setVariable('gang', player.gang);
  }

  hasPremission(player, premission) {
    const gang = this.get(player.gang.name);
    if (this.isOwner(player, gang)) return true;
    const rank = gang.ranks.find(item => item.name === player.gang.rank);
    return rank && rank.permissions[premission];
  }

  async loadPlayer(player) {
    const [data] = await _models_Gang__WEBPACK_IMPORTED_MODULE_1__["default"].aggregate([{
      $match: {
        $or: [{
          owner: player.dbId
        }, {
          'members.userId': player.dbId
        }]
      }
    }, {
      $project: {
        name: 1,
        members: {
          $filter: {
            input: '$members',
            as: 'member',
            cond: {
              $eq: ['$$member.userId', player.dbId]
            }
          }
        },
        _id: 0
      }
    }]);
    if (!data) return;
    const gang = this.get(data.name);
    const rank = data.members.length && _ranks__WEBPACK_IMPORTED_MODULE_3__["default"].getById(gang, data.members[0].rank);
    this.setPlayerData(player, data.name, this.isOwner(player, gang) ? 'Глава' : rank && rank.name);
    _members__WEBPACK_IMPORTED_MODULE_2__["default"].toggleOnline(player, gang, true);
  }

  getNearbyPlayers(player) {
    const players = [];
    mp.players.forEachInRange(player.position, 20, item => {
      if (!item.loggedIn || item.faction.name || item.gang.name || item.getVariable('invisible')) return;
      players.push({
        name: item.name,
        id: item.id
      });
    });
    return players;
  }

  async loadItems() {
    const cursor = await _models_Gang__WEBPACK_IMPORTED_MODULE_1__["default"].find().lean().cursor();
    cursor.on('data', data => this.items.set(data.name, data));
    cursor.on('close', () => console.log(`Gangs loaded. Count: ${this.items.size}`));
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      databaseConnected: this.loadItems.bind(this)
    });
    mp.events.subscribe({
      'Gang-GetRanksData': player => {
        const gang = this.get(player.gang.name);
        if (gang) return {
          ranks: _ranks__WEBPACK_IMPORTED_MODULE_3__["default"].getAll(gang),
          price: _ranks__WEBPACK_IMPORTED_MODULE_3__["default"].price,
          limit: _ranks__WEBPACK_IMPORTED_MODULE_3__["default"].maxCount
        };
      },
      'Gang-GetMembersData': async player => {
        const gang = this.get(player.gang.name);

        if (gang) {
          const data = await _members__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(gang);
          return {
            members: data,
            price: _members__WEBPACK_IMPORTED_MODULE_2__["default"].price,
            limit: _members__WEBPACK_IMPORTED_MODULE_2__["default"].maxCount
          };
        }
      },
      'Gang-GetMoney': player => {
        const gang = this.get(player.gang.name);
        if (gang) return gang.money;
      },
      'Gang-GetNearbyPlayers': this.getNearbyPlayers,
      'Gang-Leave': player => {
        const gang = this.get(player.gang.name);
        if (gang) _members__WEBPACK_IMPORTED_MODULE_2__["default"].kick(gang, player.dbId);
      }
    });
    mp.events.add('playerQuit', player => {
      var _player$gang;

      const name = player === null || player === void 0 ? void 0 : (_player$gang = player.gang) === null || _player$gang === void 0 ? void 0 : _player$gang.name;
      if (name) _members__WEBPACK_IMPORTED_MODULE_2__["default"].toggleOnline(player, this.get(name), false);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Gangs());

/***/ }),

/***/ "./src/gangs/leader.ts":
/*!*****************************!*\
  !*** ./src/gangs/leader.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _property_house__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property/house */ "./src/property/house/index.ts");
/* harmony import */ var _members__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members */ "./src/gangs/members.ts");
/* harmony import */ var _ranks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ranks */ "./src/gangs/ranks.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./src/gangs/index.ts");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./money */ "./src/gangs/money.ts");









class GangLeader {
  constructor() {
    this.subscribeToEvents();
  }

  async dissolve(player) {
    const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
    if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
    const gangHouse = _property_house__WEBPACK_IMPORTED_MODULE_3__["default"].getPlayerItems(player).find(item => item.active);
    if (gangHouse) this.setHouse(player, gangHouse.index, false);
    _index__WEBPACK_IMPORTED_MODULE_6__["default"].setPlayerData(player);
    gang.members.forEach(item => {
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(item.id)) return;
      const member = mp.players.at(item.id);
      _index__WEBPACK_IMPORTED_MODULE_6__["default"].setPlayerData(member);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].info(member, 'Вас исключили из банды!');
    });
    await _index__WEBPACK_IMPORTED_MODULE_6__["default"].delete(gang);
  }

  async changeMoney(player, operation, value) {
    const sum = parseInt(value, 10);
    const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(sum) || sum <= 0 || !_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());

    try {
      if (operation === 'add') await _money__WEBPACK_IMPORTED_MODULE_7__["default"].add(player, gang, sum);else await _money__WEBPACK_IMPORTED_MODULE_7__["default"].withdraw(player, gang, sum);
      return gang.money;
    } catch (err) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Недостаточно средств!');
      return Promise.reject(new Error());
    }
  }

  async setHouse(player, index, status = true) {
    const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
    if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
    _property_house__WEBPACK_IMPORTED_MODULE_3__["default"].setGang(player, index, status ? gang._id : null);
  }

  async addMember(player, id) {
    try {
      const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
      const invited = mp.players.at(id);
      if (!invited || !_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
      await _members__WEBPACK_IMPORTED_MODULE_4__["default"].add(player, gang, invited);
      return {
        id: invited.id,
        userId: invited.dbId,
        name: invited.getVariable('realName')
      };
    } catch (err) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, err);
      return Promise.reject(new Error());
    }
  }

  async updateMember(player, data) {
    const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
    if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
    const rank = await _members__WEBPACK_IMPORTED_MODULE_4__["default"].update(gang, data);
    return rank.name;
  }

  async kickMember(player, id) {
    const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
    if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
    await _members__WEBPACK_IMPORTED_MODULE_4__["default"].kick(gang, id);
  }

  async createRank(player, data) {
    try {
      const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
      if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
      const rank = await _ranks__WEBPACK_IMPORTED_MODULE_5__["default"].create(player, gang, data);
      return rank;
    } catch (err) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, err);
      return Promise.reject(new Error());
    }
  }

  async updateRank(player, name, data) {
    try {
      const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
      if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
      await _ranks__WEBPACK_IMPORTED_MODULE_5__["default"].update(gang, name, data);
      if (data.name === name) return;
      gang.members.forEach(member => {
        var _member$rank;

        if (((_member$rank = member.rank) === null || _member$rank === void 0 ? void 0 : _member$rank.toString()) === data._id) {
          _index__WEBPACK_IMPORTED_MODULE_6__["default"].setPlayerData(mp.players.at(member.id), gang.name, data.name);
        }
      });
    } catch (err) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, err);
      return Promise.reject(new Error());
    }
  }

  async deleteRank(player, id) {
    const gang = _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name);
    if (!_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, gang)) return Promise.reject(new Error());
    await _ranks__WEBPACK_IMPORTED_MODULE_5__["default"].delete(gang, id);
    gang.members.forEach(member => {
      var _member$rank2;

      if (((_member$rank2 = member.rank) === null || _member$rank2 === void 0 ? void 0 : _member$rank2.toString()) === id) {
        member.rank = null;
        _index__WEBPACK_IMPORTED_MODULE_6__["default"].setPlayerData(mp.players.at(member.id), gang.name);
      }
    });
  }

  openMenu(player) {
    if (_index__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player, _index__WEBPACK_IMPORTED_MODULE_6__["default"].get(player.gang.name))) {
      rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Gang-ShowLeaderMenu');
    } else if (player.gang.name) {
      rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Gang-ShowLeaveMenu');
    }
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      'Keys-F5': this.openMenu
    });
    mp.events.subscribe({
      'Gang-SetHouse': this.setHouse,
      'Gang-ChangeMoney': this.changeMoney,
      'Gang-AddMember': this.addMember,
      'Gang-UpdateMember': this.updateMember,
      'Gang-KickMember': this.kickMember,
      'Gang-CreateRank': this.createRank,
      'Gang-UpdateRank': this.updateRank,
      'Gang-DeleteRank': this.deleteRank,
      'Gang-Dissolve': this.dissolve.bind(this)
    });
  }

}

const leader = new GangLeader();

/***/ }),

/***/ "./src/gangs/members.ts":
/*!******************************!*\
  !*** ./src/gangs/members.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Gang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Gang */ "./src/models/Gang.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/gangs/index.ts");
/* harmony import */ var _ranks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranks */ "./src/gangs/ranks.ts");








class GangMembers {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "maxCount", 25);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "price", 330);
  }

  async getAll(gang) {
    const members = [];

    for (const member of gang.members) {
      let name;
      if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(member.id)) name = mp.players.at(member.id).getVariable('realName');else {
        const {
          firstName,
          lastName
        } = await _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].findById(member.userId).select({
          firstName: 1,
          lastName: 1
        }).lean();
        name = `${firstName} ${lastName}`;
      }
      const rank = _ranks__WEBPACK_IMPORTED_MODULE_6__["default"].getById(gang, member.rank);
      members.push({
        name,
        ...member,
        rank: rank ? rank.name : ''
      });
    }

    return members;
  }

  async add(player, gang, invited) {
    if (gang.members.length >= this.maxCount) {
      const canBuy = await player.moneyHelper.change(-this.price, 'drivepoints', 'gang member');
      if (!canBuy) return Promise.reject('Недостаточно средств!');
    }

    if (!invited || invited.faction.name || invited.gang.name) {
      return Promise.reject('Гражданин уже состоит в организации');
    }

    await _models_Gang__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(gang._id, {
      $push: {
        members: {
          userId: invited.dbId
        }
      }
    });
    gang.members.push({
      userId: invited.dbId,
      id: invited.id
    });
    _index__WEBPACK_IMPORTED_MODULE_5__["default"].setPlayerData(invited, gang.name);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(invited, `Вас пригласили в банду "${gang.name}"`);
  }

  async update(gang, {
    userId,
    id,
    ...data
  }) {
    await _models_Gang__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
      _id: gang._id,
      'members.userId': userId
    }, {
      $set: {
        'members.$.rank': data.rank
      }
    });
    gang.members = gang.members.map(item => item.userId.toString() === userId ? { ...item,
      ...data
    } : item);
    const rank = _ranks__WEBPACK_IMPORTED_MODULE_6__["default"].getById(gang, data.rank);

    if (rank && lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(id)) {
      const player = mp.players.at(id);
      _index__WEBPACK_IMPORTED_MODULE_5__["default"].setPlayerData(player, gang.name, rank.name);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, `Ваш ранк изменен на "${rank.name}"`);
    }

    return rank;
  }

  async kick(gang, id) {
    await _models_Gang__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(gang._id, {
      $pull: {
        members: {
          userId: id
        }
      }
    });
    const index = gang.members.findIndex(item => item.userId.toString() === id.toString());
    const {
      id: playerId
    } = gang.members[index];
    gang.members.splice(index, 1);

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(playerId)) {
      const player = mp.players.at(playerId);
      _index__WEBPACK_IMPORTED_MODULE_5__["default"].setPlayerData(player);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, 'Вас исключили из банды!');
    }
  }

  toggleOnline(player, gang, status) {
    const member = gang.members.find(item => item.userId.toString() === player.dbId.toString());
    if (member) Object.assign(member, {
      id: status ? player.id : null
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new GangMembers());

/***/ }),

/***/ "./src/gangs/money.ts":
/*!****************************!*\
  !*** ./src/gangs/money.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Gang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Gang */ "./src/models/Gang.ts");


class GangMoney {
  async add(player, gang, amount) {
    const canChange = await player.moneyHelper.change(-amount, 'bank', 'gang money add');
    if (!canChange) return Promise.reject();
    await this.change(gang, amount);
  }

  async withdraw(player, gang, amount) {
    await this.change(gang, -amount);
    await player.moneyHelper.change(amount, 'bank', 'gang money withdraw');
  }

  async change(gang, amount) {
    if (gang.money + amount < 0) return Promise.reject();
    await _models_Gang__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdAndUpdate(gang._id, {
      $inc: {
        money: amount
      }
    });
    gang.money += amount;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new GangMoney());

/***/ }),

/***/ "./src/gangs/ranks.ts":
/*!****************************!*\
  !*** ./src/gangs/ranks.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/last */ "lodash/last");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Gang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Gang */ "./src/models/Gang.ts");




class GangRanks {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "maxCount", 4);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "price", 230);
  }

  getAll(gang) {
    return gang.ranks;
  }

  getById(gang, id) {
    return id && gang.ranks.find(item => item._id.toString() === id.toString());
  }

  async create(player, gang, data) {
    if (gang.ranks.length >= this.maxCount) {
      const canBuy = await player.moneyHelper.change(-this.price, 'drivepoints', 'gang rank');
      if (!canBuy) return Promise.reject('Недостаточно средств!');
    }

    await this.checkExists(gang, data.name);
    const {
      ranks
    } = await _models_Gang__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(gang._id, {
      $push: {
        ranks: data
      }
    }, {
      new: true
    }).select({
      ranks: 1
    }).lean();

    const rank = lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(ranks);

    gang.ranks.push(rank);
    return rank;
  }

  async update(gang, name, data) {
    if (name !== data.name) await this.checkExists(gang, data.name);
    await _models_Gang__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
      _id: gang._id,
      'ranks._id': data._id
    }, {
      $set: {
        'ranks.$': data
      }
    });
    gang.ranks = gang.ranks.map(item => item._id.toString() === data._id ? { ...item,
      ...data
    } : item);
  }

  async delete(gang, id) {
    await _models_Gang__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(gang._id, {
      $pull: {
        ranks: {
          _id: id
        }
      }
    });
    gang.ranks = gang.ranks.filter(item => item._id.toString() !== id);
  }

  async checkExists(gang, name) {
    const index = gang.ranks.findIndex(rank => rank.name.toLowerCase() === name.toLowerCase());
    if (index >= 0) return Promise.reject('Ранг, с указаным названием, уже существует');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new GangRanks());

/***/ }),

/***/ "./src/helpers/blips.ts":
/*!******************************!*\
  !*** ./src/helpers/blips.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Blips {
  constructor() {
    mp.events.subscribe({
      getBlipNames: this.getAllBlipNames,
      markNearestBlip: this.getNearestBlip.bind(this)
    });
  }

  get count() {
    return mp.blips.length;
  }

  create(data) {
    const {
      position,
      model,
      name,
      color,
      scale = 1
    } = data;
    const {
      x,
      y,
      z,
      dimension = 0
    } = position;
    return mp.blips.new(model, new mp.Vector3(x, y, z), {
      name,
      scale,
      color,
      dimension,
      shortRange: true
    });
  }

  createForPlayer(player, data) {
    const {
      position,
      model,
      name,
      color,
      scale = 1
    } = data;
    player.call('createBlip', [model, name, color, position, scale]);
  }

  createWorkBlip(player, position, color) {
    player.call('createWorkBlip', [position, color]);
  }

  createWaypoint(player, position) {
    player.waypoint = position;
    player.call('createWaypoint', [position.x, position.y]);
  }

  delete(blip) {
    blip.destroy();
  }

  deleteForPlayer(player, name) {
    player.call('removeBlip', [name]);
  }

  deleteWorkBlip(player) {
    player.call('deleteWorkBlip');
  }

  getNearestBlip(player, name) {
    const {
      position
    } = player;
    const blips = mp.blips.toArray();
    let nearestEntity = blips[0];
    blips.forEach(blip => {
      if (blip.name !== name) return;

      if (nearestEntity.name !== name || blip.dist(position) < nearestEntity.dist(position)) {
        nearestEntity = blip;
      }
    });
    this.createWaypoint(player, nearestEntity.position);
  }

  getAllBlipNames() {
    const names = [];
    mp.blips.forEach(blip => {
      if (!names.includes(blip.name)) names.push(blip.name);
    });
    return names;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Blips());

/***/ }),

/***/ "./src/helpers/checkpoints.ts":
/*!************************************!*\
  !*** ./src/helpers/checkpoints.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


class Checkpoints {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handlers", void 0);

    this.handlers = new Map();
    this.subscribeToEvents();
  }

  create(props, onEnter, onExit) {
    const {
      position,
      type,
      radius,
      color,
      visible = false
    } = props;
    const {
      x,
      y,
      z,
      dimension = 0
    } = position;
    const checkpoint = mp.checkpoints.new(type, new mp.Vector3(x, y, z - 1), radius, {
      direction: new mp.Vector3(0, 0, 75),
      visible,
      color,
      dimension
    });
    this.handlers.set(checkpoint.id, {
      onEnter,
      onExit
    });
    return checkpoint;
  }

  getHandlers(id) {
    return this.handlers.get(id);
  }

  playerEnterCheckpoint(player, checkpoint) {
    const handlers = this.getHandlers(checkpoint.id);

    if (handlers && handlers.onEnter) {
      handlers.onEnter(player);
    }
  }

  playerExitCheckpoint(player, checkpoint) {
    const handlers = this.getHandlers(checkpoint.id);

    if (handlers && handlers.onExit) {
      handlers.onExit(player);
    }
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      playerEnterCheckpoint: this.playerEnterCheckpoint.bind(this),
      playerExitCheckpoint: this.playerExitCheckpoint.bind(this),
      'Auth-SuccessLogin': player => {
        mp.checkpoints.toArray().forEach(checkpoint => !checkpoint.visible && checkpoint.hideFor(player));
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Checkpoints());

/***/ }),

/***/ "./src/helpers/colshapes.ts":
/*!**********************************!*\
  !*** ./src/helpers/colshapes.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);



class ColshapeManager {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handlers", void 0);

    this.handlers = new Map();
    this.subscribeToEvents();
  }

  create(position, radius, handlers, data) {
    const {
      x,
      y,
      z,
      dimension = 0
    } = position;
    const shape = mp.colshapes.newSphere(x, y, z, radius);
    shape.dimension = dimension;
    shape.customData = data;
    this.handlers.set(shape.id, handlers);
    return shape;
  }

  getHandlers(id) {
    return this.handlers.get(id);
  }

  playerEnterColshape(player, shape) {
    player.colshapeId = shape.id;
    const handlers = this.getHandlers(shape.id);

    if (handlers && handlers.onEnter) {
      handlers.onEnter(player, shape);
    }
  }

  playerExitColshape(player, shape) {
    const handlers = this.getHandlers(shape.id);

    if (handlers && handlers.onExit) {
      handlers.onExit(player);
    }

    delete player.colshapeId;
  }

  playerKeyPress(player, key) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(player.colshapeId)) return;
    const handlers = this.getHandlers(player.colshapeId);

    if (handlers && handlers.keyName === key && handlers.onKeyPress) {
      handlers.onKeyPress(player, mp.colshapes.at(player.colshapeId).customData);
    }
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      playerEnterColshape: this.playerEnterColshape.bind(this),
      playerExitColshape: this.playerExitColshape.bind(this),
      playerKeyPress: this.playerKeyPress.bind(this)
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ColshapeManager());

/***/ }),

/***/ "./src/helpers/dialog.ts":
/*!*******************************!*\
  !*** ./src/helpers/dialog.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);



class DialogHelper {
  constructor(player) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "player", void 0);

    this.player = player;
  }

  showDate(data) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callBrowsers"](this.player, 'App-SetDate', data);
  }

  showMoneyData(data) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callBrowsers"](this.player, 'Player-SetMoney', data);
  }

  showSatiety(value) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callBrowsers"](this.player, 'Player-SetSatiety', value);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DialogHelper);

/***/ }),

/***/ "./src/helpers/events/errors.ts":
/*!**************************************!*\
  !*** ./src/helpers/events/errors.ts ***!
  \**************************************/
/*! exports provided: ClientError, SilentError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientError", function() { return ClientError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilentError", function() { return SilentError; });
/* eslint-disable max-classes-per-file */
class ClientError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ClientError';
  }

}
class SilentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SilentError';
  }

}

/***/ }),

/***/ "./src/helpers/events/index.ts":
/*!*************************************!*\
  !*** ./src/helpers/events/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "lodash/isObject");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isArray */ "lodash/isArray");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! async */ "async");
/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(async__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors */ "./src/helpers/events/errors.ts");







class Events {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "callbackQueue", void 0);

    this.callbackQueue = new Map();
    this.setup();
  }

  reject(reason) {
    return Promise.reject(new _errors__WEBPACK_IMPORTED_MODULE_5__["ClientError"](reason));
  }

  subscribe(events, authorized = true) {
    Object.entries(events).forEach(([name, callback]) => rage_rpc__WEBPACK_IMPORTED_MODULE_3___default.a.register(name, async (data, info) => {
      const player = info.player;
      if (!mp.players.exists(player) || player.performing || authorized && !player.dbId) return;

      try {
        player.performing = true;
        const result = lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(data) ? await callback(player, ...data) : await callback(player, data);
        player.performing = false;
        return result;
      } catch (err) {
        player.performing = false; // if (err instanceof ClientError) return { err: { msg: err.message } };
        // if (!(err instanceof SilentError) && !err.field) {
        // 	console.error(err, `rpc event error "${name}"`);
        // }

        return Promise.reject(err);
      }
    }));
  }

  subscribeToDefault(events) {
    Object.entries(events).forEach(([name, callback]) => {
      mp.events.add(name, (...args) => {
        const player = args[0];

        if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(player) && player.type === 'player') {
          this.addToQueue(player.id, [...args], callback);
        } else {
          callback(...args);
        }
      });
    });
  }

  createQueue(player) {
    this.callbackQueue.set(player.id, async__WEBPACK_IMPORTED_MODULE_4__["queue"](async ({
      data,
      callback
    }) => callback(...data)));
  }

  getQueue(playerId) {
    return this.callbackQueue.get(playerId);
  }

  removeQueue(player) {
    this.callbackQueue.delete(player.id);
  }

  addToQueue(playerId, data, callback) {
    const queue = this.getQueue(playerId);
    if (!queue) return;
    queue.push({
      data,
      callback
    });
  }

  trackPlayerEvents() {
    mp.events.add({
      playerJoin: this.createQueue.bind(this),
      playerQuit: this.removeQueue.bind(this)
    });
  }

  setup() {
    global.ClientError = _errors__WEBPACK_IMPORTED_MODULE_5__["ClientError"];
    mp.events.subscribe = this.subscribe.bind(this);
    mp.events.subscribeToDefault = this.subscribeToDefault.bind(this);
    mp.events.reject = this.reject;
    this.trackPlayerEvents();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Events());

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/helpers/events/index.ts");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/helpers/players.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog */ "./src/helpers/dialog.ts");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./money */ "./src/helpers/money.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/helpers/player.ts");






function setPlayerHelpers(player) {
  player.dialog = new _dialog__WEBPACK_IMPORTED_MODULE_2__["default"](player);
  player.moneyHelper = new _money__WEBPACK_IMPORTED_MODULE_3__["default"](player);
  _player__WEBPACK_IMPORTED_MODULE_4__["default"].extend(player);
}

mp.events.add('playerJoin', player => setPlayerHelpers(player));

/***/ }),

/***/ "./src/helpers/money.ts":
/*!******************************!*\
  !*** ./src/helpers/money.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! log4js */ "log4js");
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(log4js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications */ "./src/helpers/notifications.ts");






const logger = log4js__WEBPACK_IMPORTED_MODULE_2__["getLogger"]('money');

class MoneyHelper {
  constructor(player) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "player", void 0);

    this.player = player;
  }

  static isNumeric(value) {
    const convertedValue = parseInt(value, 10);
    return convertedValue && lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(convertedValue);
  }

  updateMoney() {
    this.player.dialog.showMoneyData(this.player.money);
  }

  async resetCash() {
    await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].updateOne({
      _id: this.player.dbId
    }, {
      $set: {
        'money.cash': 0
      }
    });
    this.player.money.cash = 0;
    this.updateMoney();
  }

  async change(value, type, product = 'clear') {
    if (!MoneyHelper.isNumeric(value)) return false;
    const status = await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].updateOne(value < 0 ? {
      _id: this.player.dbId,
      [`money.${type}`]: {
        $gt: -value - 1
      }
    } : {
      _id: this.player.dbId
    }, {
      $inc: {
        [`money.${type}`]: value
      }
    });
    if (!status.nModified) return false;
    this.player.money[type] += value;
    this.updateMoney();
    logger.info(`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: ${product}\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
			drivepoints: ${this.player.money.drivepoints}\n
      -------------------------------------------
      `);
    return true;
  }

  async different(value, product = 'clear') {
    const cost = parseInt(value, 10);
    if (!MoneyHelper.isNumeric(cost) || cost <= 0) return Promise.reject();
    if (this.player.money.bank >= cost) await this.change(-cost, 'bank');else if (this.player.money.cash >= cost) await this.change(-cost, 'cash');else {
      _notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(this.player, 'Недостаточно средств!');
      return Promise.reject();
    }
    logger.info(`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: ${product}\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
      -------------------------------------------
      `);
  }

  async move(value, fromType, toType) {
    const amount = parseInt(value, 10);
    if (!MoneyHelper.isNumeric(amount) || amount < 0) return false;
    const status = await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].updateOne({
      _id: this.player.dbId,
      [`money.${fromType}`]: {
        $gt: amount - 1
      }
    }, {
      $inc: {
        [`money.${fromType}`]: -amount,
        [`money.${toType}`]: amount
      }
    });

    if (!status.nModified) {
      _notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(this.player, fromType === 'bank' ? 'Недостаточно банковских средств' : 'Недостаточно наличных');
      return false;
    }

    this.player.money[fromType] -= amount;
    this.player.money[toType] += amount;
    this.updateMoney();
    logger.info(`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: ATM exchange from ${fromType}\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
      -------------------------------------------
      `);
    return true;
  }

  async transfer(value, type, id) {
    const cost = parseInt(value, 10);
    if (!MoneyHelper.isNumeric(cost) || cost < 0) return false;
    const amount = this.player.money[type];

    if (!amount || amount - cost < 0) {
      _notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(this.player, 'Недостаточно средств!');
      return false;
    }

    await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].bulkWrite([{
      updateOne: {
        filter: {
          _id: this.player.dbId
        },
        update: {
          $inc: {
            [`money.${type}`]: -cost
          }
        }
      }
    }, {
      updateOne: {
        filter: {
          _id: id
        },
        update: {
          $inc: {
            [`money.${type}`]: cost
          }
        }
      }
    }]);
    this.player.money[type] -= cost;
    const user = mp.players.toArray().filter(player => {
      if (!player || !player.loggedIn) return false;
      return player.dbId === id;
    })[0];

    if (user) {
      user.money[type] += cost;
      user.moneyHelper.updateMoney();
    }

    this.updateMoney();
    _notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(this.player, 'Успешная операция!');
    logger.info(`\nname: ${this.player.getVariable('realName')}\n
			email: ${this.player.email}\n
			value: ${value} - ${typeof value}\n
      product: money transfer\n
			bank: ${this.player.money.bank}\n
			cash: ${this.player.money.cash}\n
			recipient: ${id}\n
      -------------------------------------------
      `);
    return true;
  }

  static async changeById(dbId, type, amount, meta = '') {
    if (!MoneyHelper.isNumeric(amount)) throw new Error('wrong amount of money');
    const status = await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].updateOne(amount < 0 ? {
      _id: dbId,
      [`money.${type}`]: {
        $gt: -amount - 1
      }
    } : {
      _id: dbId
    }, {
      $inc: {
        [`money.${type}`]: amount
      }
    });
    if (!status.nModified) throw new Error('not enough money');
    const player = Object(_utils_players__WEBPACK_IMPORTED_MODULE_3__["getPlayerByDbId"])(dbId);

    if (player) {
      player.money[type] += amount;
      player.dialog.showMoneyData(player.money);
    }

    logger.info(`\n dbId: ${dbId}\n
			value: ${amount} - ${typeof amount}\n
      product: ${meta}\n
      -------------------------------------------
      `);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MoneyHelper);

/***/ }),

/***/ "./src/helpers/notifications.ts":
/*!**************************************!*\
  !*** ./src/helpers/notifications.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);


class Notifications {
  info(player, message) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Notifications-Info', message);
  }

  warning(player, message) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Notifications-Warning', message);
  }

  error(player, message) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Notifications-Error', message);
  }

  success(player, message) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Notifications-Success', message);
  }

  help(player, message) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Notifications-Help', message);
  }

  show(player, title, sender, message, picture, icon = 0) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Notifications-ShowWithImage', [title, sender, message, picture, icon]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Notifications());

/***/ }),

/***/ "./src/helpers/objects.ts":
/*!********************************!*\
  !*** ./src/helpers/objects.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/objects */ "./src/data/objects.ts");


class Objects {
  hasObject(entity, name) {
    const data = _data_objects__WEBPACK_IMPORTED_MODULE_0__["default"][name];
    const object = entity.getVariable('attachedObject');
    return data && (object === null || object === void 0 ? void 0 : object.model) === data.model;
  }

  attach(entity, name) {
    const object = _data_objects__WEBPACK_IMPORTED_MODULE_0__["default"][name];
    if (!object || !entity) return;
    entity.setVariable('attachedObject', object);
    mp.players.call('attachObject', [entity]);
  }

  detach(entity) {
    if (!entity) return;
    entity.setVariable('attachedObject', null);
    mp.players.call('detachObject', [entity]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Objects());

/***/ }),

/***/ "./src/helpers/player.ts":
/*!*******************************!*\
  !*** ./src/helpers/player.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");





class PlayerHelper {
  extend(player) {
    player.getName = this.getName.bind(this, player);
    player.updateName = this.updateName.bind(this, player);
    player.tp = this.tp.bind(this, player);
    player.timeout = this.timeout.bind(this, player);
    player.isHasLicense = this.isHasLicense.bind(this, player);
    player.isMale = this.isMale.bind(this, player);
    player.isDriver = this.isDriver.bind(this, player);
    player.addToInventory = this.addToInventory.bind(this, player);
    player.isEnoughSlots = this.isEnoughSlots.bind(this, player);
    player.isGovMember = this.isGovMember.bind(this, player);
    player.ressurect = this.ressurect.bind(this, player);
  }

  getName(player) {
    return player.getVariable('realName');
  }

  updateName(player) {
    player.name = `Гражданин (${player.id})`;
    const isValid = moment__WEBPACK_IMPORTED_MODULE_1__().isBefore(player.tempName.expiresDate || moment__WEBPACK_IMPORTED_MODULE_1__().subtract(10, 'minutes'), 'minute');
    const {
      firstName,
      lastName
    } = isValid ? player.tempName : player;
    player.setVariable('realName', `${firstName} ${lastName}`);
    player.setVariable('isActiveTempName', isValid);
  }

  tp(player, position, rotation = 90) {
    const {
      x,
      y,
      z,
      dimension = 0
    } = position;
    player.position = new mp.Vector3(x, y, z);
    player.heading = rotation;
    player.dimension = dimension;
  }

  timeout(player, callback, duration) {
    setTimeout(() => {
      try {
        if (!mp.players.exists(player)) return;
        callback();
      } catch (err) {
        console.log(err);
      }
    }, duration);
  }

  isHasLicense(player, license) {
    return !!player.licenses.find(item => item.name === license);
  }

  isMale(player) {
    return player.model === mp.joaat('mp_m_freemode_01');
  }

  isGovMember(player) {
    const govFactions = ['Полиция', 'FBI', 'Шериф'];
    return player.faction && govFactions.includes(player.faction.name);
  }

  isDriver(player) {
    const {
      vehicle
    } = player;
    return vehicle && vehicle.getOccupant(-1) && vehicle.getOccupant(-1).id === player.id;
  }

  ressurect(player) {
    clearTimeout(player.deathTimeout);
    player.health = 50;
    player.setVariable('isDying', false);
    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["default"].stop(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Player-CloseDeathMenu');
  }

  addToInventory(player, item) {
    return _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_2__["default"].addItem(player, item);
  }

  isEnoughSlots(player, item) {
    return _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_2__["default"].isEnoughSlots(player, player.inventory, item, item.count);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PlayerHelper());

/***/ }),

/***/ "./src/helpers/players.ts":
/*!********************************!*\
  !*** ./src/helpers/players.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);



class Players {
  constructor() {
    mp.players.getById = this.getById.bind(this);
    mp.players.callInStream = this.callInStream.bind(this);
  }

  getById(id) {
    return lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(id) && id >= 0 ? mp.players.at(id) : null;
  }

  callInStream(position, event, args) {
    mp.players.forEachInRange(position, mp.config['stream-distance'], player => rage_rpc__WEBPACK_IMPORTED_MODULE_1___default.a.callClient(player, event, args));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Players());

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/database */ "./src/utils/database.ts");
/* harmony import */ var _utils_udp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/udp */ "./src/utils/udp.js");
/* harmony import */ var _utils_mailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/mailer */ "./src/utils/mailer.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/logger */ "./src/utils/logger.js");
/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/debug */ "./src/utils/debug.ts");
/* harmony import */ var _utils_anim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/anim */ "./src/utils/anim.js");
/* harmony import */ var _utils_anim__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_anim__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.ts");
/* harmony import */ var _basic_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/auth */ "./src/basic/auth/index.ts");
/* harmony import */ var _basic_chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/chat */ "./src/basic/chat.ts");
/* harmony import */ var _basic_voip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic/voip */ "./src/basic/voip.ts");
/* harmony import */ var _basic_voip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_basic_voip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _basic_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./basic/time */ "./src/basic/time.ts");
/* harmony import */ var _basic_admin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basic/admin */ "./src/basic/admin/index.ts");
/* harmony import */ var _basic_phone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./basic/phone */ "./src/basic/phone/index.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _basic_cityhall__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./basic/cityhall */ "./src/basic/cityhall/index.ts");
/* harmony import */ var _basic_donation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./basic/donation */ "./src/basic/donation.ts");
/* harmony import */ var _character_characterCreator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./character/characterCreator */ "./src/character/characterCreator.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./property */ "./src/property/index.ts");
/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./jobs */ "./src/jobs/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services */ "./src/services/index.ts");
/* harmony import */ var _factions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./factions */ "./src/factions/index.ts");
/* harmony import */ var _gangs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gangs */ "./src/gangs/index.ts");


























const config = dotenv__WEBPACK_IMPORTED_MODULE_2__["config"]({
  debug: true
});
console.log(`Node JS version: ${process.version}`);
console.log('//------------- Config loading --------------//');
console.log(`Path: ${path__WEBPACK_IMPORTED_MODULE_1__["resolve"](process.cwd(), '.env')}`);
if (config.error) throw config.error;
console.log(config.parsed);
console.log('//-------------------------------------------//');
Object(_utils_database__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_utils_udp__WEBPACK_IMPORTED_MODULE_4__["default"])();
_utils_mailer__WEBPACK_IMPORTED_MODULE_5__["default"].init();

/***/ }),

/***/ "./src/jobs/carThief.ts":
/*!******************************!*\
  !*** ./src/jobs/carThief.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _factions_police__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../factions/police */ "./src/factions/police/index.ts");
/* harmony import */ var _factions_fbi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../factions/fbi */ "./src/factions/fbi/index.ts");
/* harmony import */ var _factions_sheriff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../factions/sheriff */ "./src/factions/sheriff/index.ts");
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./levels */ "./src/jobs/levels.ts");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vehicle */ "./src/jobs/vehicle.ts");














class CarThief extends _job__WEBPACK_IMPORTED_MODULE_10__["default"] {
  constructor() {
    const data = {
      name: 'Автоугонщик',
      position: {
        x: -106.79,
        y: 2795.676,
        z: 53.308
      },
      blip: {
        model: 229,
        color: 83
      }
    };
    super(data, 24);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicles", void 0);

    this.cooldown.setTimeLimit(20 * 60 * 1000);
    this.levels = new _levels__WEBPACK_IMPORTED_MODULE_11__["default"](this.name, [{
      points: 0,
      salary: 10000
    }, {
      points: 500,
      salary: 15000
    }, {
      points: 1500,
      salary: 22000
    }, {
      points: 4000,
      salary: 30000
    }, {
      points: 10000,
      salary: 35000
    }], 50);
    this.vehicles = new _vehicle__WEBPACK_IMPORTED_MODULE_12__["default"](['m2f22', '69charger', 'bentayga17', 'S63AMG', 'm3e46', 'panamera17turbo', 'mustangbkit', 'm5f90', 'gtr', 'c63w204'], [{
      x: 1970.389404296875,
      y: 5180.01220703125,
      z: 47.87272262573242
    }, {
      x: 841.9498901367188,
      y: 4387.953125,
      z: 52.37052917480469
    }, {
      x: 856.8762817382812,
      y: 3605.33642578125,
      z: 34.08975601196289
    }, {
      x: 1224.9683837890625,
      y: 3609.32861328125,
      z: 33.63547134399414
    }, {
      x: 1776.0828857421875,
      y: 3304.3125,
      z: 41.25278091430664
    }, {
      x: 160.21490478515625,
      y: -1458.0869140625,
      z: 29.141599655151367
    }, {
      x: 463.21337890625,
      y: -1700.411376953125,
      z: 29.294849395751953
    }, {
      x: 40.34590530395508,
      y: -1719.943115234375,
      z: 29.30301284790039
    }]);
    this.subscribeToEvents();
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_4__["default"].create({
        position,
        type: 29,
        color: [94, 255, 85, 85],
        radius: 3
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    if (this.workers.count === 3) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(player, 'Сейчас заказов нет, приходи позже');
    }

    await super.startWork(player);
    this.generateNewOrder(player);
  }

  finishWork(player) {
    _factions_police__WEBPACK_IMPORTED_MODULE_7__["default"].implementForMembers(member => {
      member.call('removeRadiusBlip', [`${this.name}${player.id}`]);
      member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
    });
    _factions_fbi__WEBPACK_IMPORTED_MODULE_8__["default"].implementForMembers(member => {
      member.call('removeRadiusBlip', [`${this.name}${player.id}`]);
      member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
    });
    _factions_sheriff__WEBPACK_IMPORTED_MODULE_9__["default"].implementForMembers(member => {
      member.call('removeRadiusBlip', [`${this.name}${player.id}`]);
      member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
    });
    super.finishWork(player);
  }

  pressedKeyOnMainShape(player) {
    let error;
    if (player.isGovMember()) error = 'Иди отсюда, легавый!';
    if (!player.isHasLicense('car')) error = 'Рулить научись для начала!';
    const lockPick = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(player.inventory, 'lockPick');
    if (!lockPick) error = 'Для начала купи отмычки, сынок.';
    if (error) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, error);
    const currentLevel = this.levels.getCurrentLevel(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Job-ShowMenu', [this.name, this.isWorksHere(player), this.levels.getCurrentPoints(player), this.levels.getLevelNumber(currentLevel), this.levels.needPoints(currentLevel)]);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || !this.checkCurrentOrder(player) || !this.checkCarInDeliveryPoint(player)) return;
    await super.successOrder(player);
    await this.levels.giveAward(player);
    this.finishWork(player);
  }

  generateNewOrder(player) {
    const worker = this.workers.get(player);

    const currentOrder = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, this.checkpoints.length - 1);

    if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);
    this.vehicles.spawn(player, false).then(car => {
      this.workers.update(player, {
        cargo: car,
        currentOrder
      });
      _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].createWorkBlip(player, car.position, 83);
    });
  }

  cancelCurrentOrder(player, worker) {
    if (worker.cargo) worker.cargo.destroy();
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null,
      cargo: null
    });
  }

  onLockPicked(player, vehicle) {
    if (!this.isWorksHere(player) || !this.isWorkVehicle(vehicle)) return;
    const {
      currentOrder
    } = this.workers.get(player);
    const {
      position
    } = this.checkpoints[currentOrder];
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].deleteWorkBlip(player);
    this.showCheckpoint(player, currentOrder);
    _factions_police__WEBPACK_IMPORTED_MODULE_7__["default"].implementForMembers(member => {
      member.call('createRadiusBlip', [`${this.name}${player.id}`, 3, position, 100]);
      member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(member, 'Направляйтесь к точке сбыта!');
    });
    _factions_fbi__WEBPACK_IMPORTED_MODULE_8__["default"].implementForMembers(member => {
      member.call('createRadiusBlip', [`${this.name}${player.id}`, 3, position, 100]);
      member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(member, 'Направляйтесь к точке сбыта!');
    });
    _factions_sheriff__WEBPACK_IMPORTED_MODULE_9__["default"].implementForMembers(member => {
      member.call('createRadiusBlip', [`${this.name}${player.id}`, 3, position, 100]);
      member.call('removeRadiusBlip', [`Угонщик ${player.id}`]);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(member, 'Направляйтесь к точке сбыта!');
    });
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(player, 'Вали на точку сбыта скорее! Копы получили сигнал!');
  }

  checkCarInDeliveryPoint(player) {
    const {
      cargo,
      currentOrder
    } = this.workers.get(player);
    return cargo && this.checkpoints[currentOrder].dist(cargo.position) <= 8;
  }

  subscribeToEvents() {
    mp.events.subscribeToDefault({
      playerUnlockVehicle: this.onLockPicked.bind(this)
    });
  }

}

const job = new CarThief();

/***/ }),

/***/ "./src/jobs/cluckinBell.ts":
/*!*********************************!*\
  !*** ./src/jobs/cluckinBell.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./src/jobs/levels.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");









class CluckinBellCourier extends _job__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const data = {
      name: 'Курьер в Cluckin Bell',
      position: {
        x: -180.843,
        y: -1428.875,
        z: 31.309
      },
      blip: {
        model: 440,
        color: 60
      }
    };
    super(data, 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getOrderCoords", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getOrderMarker", void 0);

    this.getOrderCoords = {
      x: -184.848,
      y: -1427.292,
      z: 31.474
    };
    this.levels = new _levels__WEBPACK_IMPORTED_MODULE_3__["default"](this.name, [{
      points: 0,
      salary: 250
    }, {
      points: 2000,
      salary: 500
    }, {
      points: 5000,
      salary: 750
    }, {
      points: 20000,
      salary: 1100
    }, {
      points: 50000,
      salary: 1300
    }], 50);
    this.createOrderPoint();
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_5__["default"].create({
        position,
        type: 29,
        color: [255, 165, 0, 85],
        radius: 2
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    this.getOrderMarker.showFor(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_4__["default"].createWorkBlip(player, this.getOrderCoords, 60);
  }

  finishWork(player) {
    this.getOrderMarker.hideFor(player);
    super.finishWork(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_4__["default"].deleteWorkBlip(player);
  }

  pressedKeyOnMainShape(player) {
    if (this.isWorksOnOtherJob(player) || player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].error(player, 'Вы уже работаете на другой работе');
    }

    const currentLevel = this.levels.getCurrentLevel(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Job-ShowMenu', [this.name, this.isWorksHere(player), this.levels.getCurrentPoints(player), this.levels.getLevelNumber(currentLevel), this.levels.needPoints(currentLevel)]);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || !this.checkCurrentOrder(player) || player.vehicle) return;
    await super.successOrder(player);
    await this.levels.giveAward(player);
  }

  generateNewOrder(player) {
    if (this.checkCurrentOrder(player) || player.vehicle) return;
    _helpers_blips__WEBPACK_IMPORTED_MODULE_4__["default"].deleteWorkBlip(player);
    super.generateNewOrder(player);
  }

  cancelCurrentOrder(player, worker) {
    this.hideCheckpoint(player, worker.currentOrder);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_4__["default"].createWorkBlip(player, this.getOrderCoords, 60);
    this.workers.update(player, {
      currentOrder: null
    });
  }

  createOrderPoint() {
    const {
      x,
      y,
      z
    } = this.getOrderCoords;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_6__["default"].create(this.getOrderCoords, 1, {
      onEnter: this.enteredGetOrderShape.bind(this),
      onKeyPress: this.generateNewOrder.bind(this),
      keyName: 'E'
    });
    this.getOrderMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1), 1, {
      color: [0, 72, 142, 85],
      visible: false
    });
  }

  enteredGetOrderShape(player) {
    if (!this.isWorksHere(player) || player.vehicle) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы взять заказ');
  }

}

const job = new CluckinBellCourier();

/***/ }),

/***/ "./src/jobs/diver.ts":
/*!***************************!*\
  !*** ./src/jobs/diver.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../character/clothes */ "./src/character/clothes.ts");










class Diver extends _job__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Дайвер',
      position: {
        x: -1612.618,
        y: 5260.329,
        z: 3.974
      },
      blip: {
        model: 729,
        color: 26
      }
    };
    super(info, 12, {
      male: {
        glasses: [26, 0],
        shoes: [67, 0],
        legs: [94, 0]
      },
      female: {
        glasses: [28, 0],
        shoes: [70, 0],
        legs: [97, 0]
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prizes", void 0);

    this.cooldown.setTimeLimit(2 * 60 * 1000);
    this.prizes = [{
      type: 'resources',
      name: 'gold',
      count: lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(1, 3)
    }, {
      type: 'resources',
      name: 'coral',
      count: lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(1, 3)
    }, {
      type: 'resources',
      name: 'joint',
      count: lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(1, 4)
    }, {
      name: 'whisky',
      type: 'alcohol',
      count: 1
    }, {
      name: 'pill',
      type: 'medication',
      count: lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(1, 2)
    }, {
      name: 'handguns',
      type: 'ammo',
      count: lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(1, 10)
    }, {
      name: 'lockPick',
      type: 'others',
      count: 1
    }];
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_5__["default"].create({
        position,
        type: 29,
        color: [0, 110, 0, 0],
        radius: 2
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    await rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Diver-StartWork');
    this.generateNewOrder(player);
  }

  finishWork(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Diver-FinishWork');
    super.finishWork(player);
  }

  pressedKeyOnMainShape(player) {
    if (!player.isHasLicense('diver')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'У вас нет лицензии на дайвинг!');
    }

    super.pressedKeyOnMainShape(player);
  }

  async successOrder(player) {
    try {
      if (!this.isWorksHere(player) || player.vehicle) return;
      const worker = this.workers.get(player);
      await super.successOrder(player);
      _utils_animations__WEBPACK_IMPORTED_MODULE_7__["default"].playOnServer(player, 'pickup', 2400);
      await player.addToInventory(worker.cargo.prize);
      this.generateNewOrder(player);
    } catch (err) {
      this.finishWork(player);
    }
  }

  generateNewOrder(player) {
    if (this.checkCurrentOrder(player) || player.vehicle) return;
    const worker = this.workers.get(player);

    const currentOrder = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, this.checkpoints.length - 1);

    if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);
    const container = this.createContainer(this.checkpoints[currentOrder].position);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_4__["default"].deleteWorkBlip(player);
    this.showCheckpoint(player, currentOrder);
    this.workers.update(player, {
      currentOrder,
      cargo: container
    });
  }

  cancelCurrentOrder(player, worker) {
    if (worker.cargo) worker.cargo.destroy();
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null,
      cargo: null
    });
  }

  setClothes(player) {
    const color = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, 25);

    const clothes = {
      male: { ...this.clothes.male,
        legs: [94, color],
        underwears: [243, color],
        undershirt: [151, 0],
        torso: [96, 0]
      },
      female: { ...this.clothes.female,
        legs: [97, color],
        underwears: [251, color],
        undershirt: [187, 0],
        torso: [111, 0]
      }
    };
    _character_clothes__WEBPACK_IMPORTED_MODULE_8__["default"].clear(player);
    Object.entries(clothes[player.gender]).forEach(([name, item]) => {
      _character_clothes__WEBPACK_IMPORTED_MODULE_8__["default"].set(player, name, {
        style: item[0],
        color: item[1]
      });
    });
  }

  createContainer(position) {
    const object = mp.objects.new('prop_box_wood05a', position, {
      rotation: new mp.Vector3(0, 0, 0)
    });
    object.prize = { ...this.prizes[lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, this.prizes.length - 1)]
    };
    return object;
  }

}

const job = new Diver();

/***/ }),

/***/ "./src/jobs/forkliftDriver.ts":
/*!************************************!*\
  !*** ./src/jobs/forkliftDriver.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ "./src/jobs/levels.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _helpers_objects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/objects */ "./src/helpers/objects.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicle */ "./src/jobs/vehicle.ts");












class ForkliftDriver extends _job__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const data = {
      name: 'Погрузчик',
      position: {
        x: 1211.743,
        y: -3331.747,
        z: 6.028
      },
      blip: {
        model: 532,
        color: 29
      }
    };
    super(data, 12, {
      male: {
        shoes: [12, 0],
        legs: [36, 0],
        underwears: [0, 0],
        torso: [52, 0],
        undershirt: [59, 0]
      },
      female: {
        shoes: [26, 0],
        legs: [35, 0],
        underwears: [0, 0],
        torso: [59, 0],
        undershirt: [36, 0]
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getOrderCoords", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getOrderMarker", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicle", void 0);

    this.getOrderCoords = {
      x: 1218.166,
      y: -3006.39,
      z: 5.865
    };
    this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_10__["default"](['forklift'], [{
      x: 1213.493,
      y: -3345.657,
      z: 5.822
    }, {
      x: 1226.383,
      y: -3346.773,
      z: 5.862
    }, {
      x: 1243.226,
      y: -3347.161,
      z: 5.875
    }, {
      x: 1190.808,
      y: -3347.168,
      z: 5.81
    }, {
      x: 1179.723,
      y: -3345.084,
      z: 5.897
    }], [255, 255, 255]);
    this.levels = new _levels__WEBPACK_IMPORTED_MODULE_4__["default"](this.name, [{
      points: 0,
      salary: 380
    }, {
      points: 2500,
      salary: 750
    }, {
      points: 6000,
      salary: 1150
    }, {
      points: 24000,
      salary: 1500
    }, {
      points: 60000,
      salary: 1900
    }], 50);
    this.createOrderPoint();
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_9__["default"].create({
        position,
        type: 29,
        color: [0, 72, 186, 85],
        radius: 2
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    const vehicle = await this.vehicle.spawn(player);
    this.getOrderMarker.showFor(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_6__["default"].createWorkBlip(player, this.getOrderCoords, 5);
    this.workers.update(player, {
      vehicle
    });
  }

  finishWork(player) {
    this.getOrderMarker.hideFor(player);
    super.finishWork(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_6__["default"].deleteWorkBlip(player);
  }

  pressedKeyOnMainShape(player) {
    if (this.isWorksOnOtherJob(player) || player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Вы уже работаете на другой работе');
    }

    if (!player.isHasLicense('car')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'У вас нет прав категории B!');
    }

    const currentLevel = this.levels.getCurrentLevel(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Job-ShowMenu', [this.name, this.isWorksHere(player), this.levels.getCurrentPoints(player), this.levels.getLevelNumber(currentLevel), this.levels.needPoints(currentLevel)]);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || !this.checkCurrentOrder(player) || !this.isWorkVehicle(player.vehicle)) return;
    await super.successOrder(player);
    await this.levels.giveAward(player);
  }

  generateNewOrder(player) {
    if (this.checkCurrentOrder(player) || !this.isWorkVehicle(player.vehicle)) return;
    const worker = this.workers.get(player);

    const currentOrder = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, this.checkpoints.length - 1);

    if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_6__["default"].deleteWorkBlip(player);
    _helpers_objects__WEBPACK_IMPORTED_MODULE_7__["default"].attach(player.vehicle, 'vehicleBox');
    this.showCheckpoint(player, currentOrder);
    this.workers.update(player, {
      currentOrder
    });
  }

  cancelCurrentOrder(player, worker) {
    const {
      vehicle,
      currentOrder
    } = worker;
    this.hideCheckpoint(player, currentOrder);
    _helpers_objects__WEBPACK_IMPORTED_MODULE_7__["default"].detach(vehicle);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_6__["default"].createWorkBlip(player, this.getOrderCoords, 5);
    this.workers.update(player, {
      currentOrder: null
    });
  }

  enteredGetOrderShape(player) {
    if (!this.isWorksHere(player) || !player.vehicle) return;

    if (this.checkCurrentOrder(player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Вы не можете взять ещё ящик!');
    }

    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы взять груз');
  }

  createOrderPoint() {
    const {
      x,
      y,
      z
    } = this.getOrderCoords;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_5__["default"].create(this.getOrderCoords, 1, {
      onEnter: this.enteredGetOrderShape.bind(this),
      onKeyPress: this.generateNewOrder.bind(this),
      keyName: 'E'
    });
    this.getOrderMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1), 2, {
      color: [255, 165, 0, 85],
      visible: false
    });
  }

}

const job = new ForkliftDriver();

/***/ }),

/***/ "./src/jobs/goldMiner.ts":
/*!*******************************!*\
  !*** ./src/jobs/goldMiner.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/objects */ "./src/helpers/objects.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");










class GoldMiner extends _job__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      name: 'Добытчик золота',
      position: {
        x: -599.762,
        y: 2094.386,
        z: 131.091
      },
      blip: {
        model: 618,
        color: 5
      }
    };
    super(info, 24);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "pickaxePrice", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "postToExit", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "exitMarker", void 0);

    this.pickaxePrice = 500;
    this.postToExit = {
      x: -595.284,
      y: 2086.155,
      z: 131.411
    };
    this.createExit();
    this.subscribeToEvents();
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_4__["default"].create({
        position,
        type: 29,
        color: [0, 110, 0, 0],
        radius: 2
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    this.exitMarker.showFor(player);
    this.generateNewOrder(player);
    player.tp(this.postToExit);
  }

  finishWork(player) {
    this.exitMarker.hideFor(player);
    player.tp(this.position);
    super.finishWork(player);
  }

  pressedKeyOnMainShape(player) {
    if (!player.isHasLicense('gold')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У вас нет лицензии на добычу золота!');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'GoldMiner-ShowMenu', [this.isWorksHere(player), this.pickaxePrice]);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || player.vehicle) return;

    if (!this.getPickaxeCount(player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У вас нет кирки!');
    }

    await super.successOrder(player);
    _helpers_objects__WEBPACK_IMPORTED_MODULE_6__["default"].attach(player, 'pickaxe');
    _utils_animations__WEBPACK_IMPORTED_MODULE_7__["default"].playOnServer(player, 'hammering', 5400);
    await player.addToInventory({
      type: 'resources',
      name: 'gold',
      count: 1
    });
    player.timeout(() => _helpers_objects__WEBPACK_IMPORTED_MODULE_6__["default"].detach(player), 5400);
    this.generateNewOrder(player);
  }

  cancelCurrentOrder(player, worker) {
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null
    });
  }

  createExit() {
    const {
      x,
      y,
      z
    } = this.postToExit;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_3__["default"].create(this.postToExit, 0.75, {
      onEnter: player => _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы уволиться с работы'),
      onKeyPress: this.pressedKeyOnMainShape.bind(this),
      keyName: 'E'
    });
    this.exitMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1), 0.75, {
      color: [0, 255, 0, 100],
      visible: false
    });
  }

  async buyPickaxe(player) {
    try {
      await player.moneyHelper.different(this.pickaxePrice);
      player.addToInventory({
        name: 'pickaxe',
        type: 'tool',
        count: 1
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  getPickaxeCount(player) {
    const pickaxe = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_8__["default"].getItem(player.inventory, 'pickaxe');
    return pickaxe ? pickaxe.count : 0;
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'GoldMiner-Buy': this.buyPickaxe.bind(this),
      'GoldMiner-StartWork': this.startWork.bind(this),
      'GoldMiner-FinishWork': this.finishWork.bind(this)
    });
  }

}

const job = new GoldMiner();

/***/ }),

/***/ "./src/jobs/index.ts":
/*!***************************!*\
  !*** ./src/jobs/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trucker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trucker */ "./src/jobs/trucker.ts");
/* harmony import */ var _taxi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taxi */ "./src/jobs/taxi.ts");
/* harmony import */ var _pineappleCollector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pineappleCollector */ "./src/jobs/pineappleCollector.ts");
/* harmony import */ var _weedCollector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weedCollector */ "./src/jobs/weedCollector.ts");
/* harmony import */ var _orangeCollector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orangeCollector */ "./src/jobs/orangeCollector.ts");
/* harmony import */ var _goldMiner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goldMiner */ "./src/jobs/goldMiner.ts");
/* harmony import */ var _cluckinBell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cluckinBell */ "./src/jobs/cluckinBell.ts");
/* harmony import */ var _forkliftDriver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forkliftDriver */ "./src/jobs/forkliftDriver.ts");
/* harmony import */ var _carThief__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carThief */ "./src/jobs/carThief.ts");
/* harmony import */ var _portMover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portMover */ "./src/jobs/portMover.ts");
/* harmony import */ var _diver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./diver */ "./src/jobs/diver.ts");












/***/ }),

/***/ "./src/jobs/job-cooldown.ts":
/*!**********************************!*\
  !*** ./src/jobs/job-cooldown.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


class JobCoolDown {
  constructor(ms) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "timeLimit", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "recentWorkers", void 0);

    this.setTimeLimit(ms);
  }

  isEnded(player) {
    const time = this.recentWorkers.get(player.dbId);
    return !time || Date.now() >= time;
  }

  setTimeLimit(ms) {
    this.timeLimit = ms;
    this.reset();
  }

  apply(player) {
    this.recentWorkers.set(player.dbId, Date.now() + this.timeLimit);
  }

  reset(player) {
    if (player) this.recentWorkers.delete(player.dbId);else this.recentWorkers = new Map();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (JobCoolDown);

/***/ }),

/***/ "./src/jobs/job.ts":
/*!*************************!*\
  !*** ./src/jobs/job.ts ***!
  \*************************/
/*! exports provided: finishWork, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishWork", function() { return finishWork; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workers */ "./src/jobs/workers.ts");
/* harmony import */ var _models_Job__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Job */ "./src/models/Job.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _job_cooldown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-cooldown */ "./src/jobs/job-cooldown.ts");











const jobs = {};

class Job {
  constructor(data, playedHours, clothes) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "position", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "playedHours", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "workers", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "cooldown", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "checkpoints", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "clothes", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "blip", void 0);

    this.name = data.name;
    this.position = data.position;
    this.blip = data.blip;
    this.playedHours = playedHours;
    this.checkpoints = [];
    this.clothes = clothes;
    this.workers = new _workers__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.cooldown = new _job_cooldown__WEBPACK_IMPORTED_MODULE_10__["default"](5000);
    this.createMainEntities();
    jobs[this.name] = this;
  }

  async startWork(player) {
    if (this.isWorksHere(player)) return Promise.reject();

    if (Math.floor(player.playedTime / 60) < this.playedHours) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].error(player, `Для этой работы нужно наиграть ${this.playedHours}ч.`);
      return Promise.reject();
    }

    if (!this.cooldown.isEnded(player)) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].error(player, 'Слишком часто, попробуйте позже');
      return Promise.reject();
    }

    player.job = this.name;
    this.setClothes(player);
    this.workers.add(player);
    this.cooldown.apply(player);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].success(player, `Вы устроились работать как "${this.name}"`);
  }

  finishWork(player) {
    if (!this.isWorksHere(player)) return;
    const worker = this.workers.get(player);
    if (this.checkCurrentOrder(player)) this.cancelCurrentOrder(player, worker);
    if (worker.vehicle) worker.vehicle.destroy();
    clearInterval(worker.interval);
    if (this.clothes) _character_clothes__WEBPACK_IMPORTED_MODULE_9__["default"].load(player);
    this.workers.remove(player);
    player.job = null;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].info(player, `Вы уволились с работы "${this.name}"`);
  }

  setClothes(player) {
    if (!this.clothes) return;
    _character_clothes__WEBPACK_IMPORTED_MODULE_9__["default"].clear(player);
    Object.entries(this.clothes[player.gender]).forEach(([name, item]) => {
      _character_clothes__WEBPACK_IMPORTED_MODULE_9__["default"].set(player, name, {
        style: item[0],
        color: item[1]
      });
    });
  }

  pressedKeyOnMainShape(player) {
    if (this.isWorksHere(player)) return this.finishWork(player);

    if (this.isWorksOnOtherJob(player) || player.faction.working) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].error(player, 'Вы уже работаете на другой работе');
    } else this.startWork(player);
  }

  async successOrder(player) {
    if (!this.checkCurrentOrder(player)) return Promise.reject();
    const worker = this.workers.get(player);
    this.cancelCurrentOrder(player, worker);

    if (worker.lastOrderTime && moment__WEBPACK_IMPORTED_MODULE_3__().diff(worker.lastOrderTime, 'seconds') <= 3) {
      this.finishWork(player);
      return Promise.reject();
    }

    this.workers.update(player, {
      lastOrderTime: new Date(),
      prevOrder: worker.currentOrder
    });
  }

  generateNewOrder(player) {
    const worker = this.workers.get(player);

    const currentOrder = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, this.checkpoints.length - 1);

    if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);
    this.workers.update(player, {
      currentOrder
    });
    this.showCheckpoint(player, currentOrder);
  }

  showCheckpoint(player, order) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default()(order)) return;
    const {
      position
    } = this.checkpoints[order];
    this.checkpoints[order].showFor(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_8__["default"].createWorkBlip(player, position, this.blip.color);
  }

  hideCheckpoint(player, order) {
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default()(order)) return;
    this.checkpoints[order].hideFor(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_8__["default"].deleteWorkBlip(player);
  }

  isWorksHere(player) {
    return !!this.workers.get(player);
  }

  isWorkVehicle(vehicle) {
    return vehicle && vehicle.job === this.name;
  }

  isWorksOnOtherJob(player) {
    return player.job && !this.isWorksHere(player);
  }

  checkCurrentOrder(player) {
    const worker = this.workers.get(player);
    return worker && lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default()(worker.currentOrder);
  }

  createMainEntities() {
    const {
      x,
      y,
      z
    } = this.position;
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      color: [0, 255, 0, 100],
      visible: true
    });
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_6__["default"].create(this.position, 0.75, {
      onEnter: this.enteredMainShape.bind(this),
      onKeyPress: this.pressedKeyOnMainShape.bind(this),
      keyName: 'E'
    });
    _helpers_blips__WEBPACK_IMPORTED_MODULE_8__["default"].create({ ...this.blip,
      name: this.name,
      position: this.position
    });
  }

  enteredMainShape(player) {
    const message = this.isWorksHere(player) ? 'Нажмите ~INPUT_CONTEXT~ чтобы уволиться с работы' : 'Нажмите ~INPUT_CONTEXT~ чтобы устроиться на работу';
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].help(player, message);
  }

}

function finishWork(player) {
  const job = jobs[player.job];
  if (job) job.finishWork(player);
}
mp.events.subscribe({
  'Job-StartWork': async (player, name) => {
    const job = jobs[name];
    if (job) job.startWork(player);
  },
  'Job-FinishWork': finishWork
});
mp.events.subscribeToDefault({
  databaseConnected: async () => {
    const cursor = await _models_Job__WEBPACK_IMPORTED_MODULE_5__["default"].find().lean().cursor();
    let count = 0;
    cursor.on('data', data => {
      const job = jobs[data.name];
      if (!job) return;
      job.createCheckpoints(data.checkpoints);
      count++;
    });
    cursor.on('close', () => console.log(`Jobs loaded. Count: ${count}`));
  }
});
mp.events.add('playerQuit', finishWork);
/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ }),

/***/ "./src/jobs/levels.ts":
/*!****************************!*\
  !*** ./src/jobs/levels.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobLevels; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/last */ "lodash/last");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");



class JobLevels {
  constructor(name, levels, award) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "awardPoints", void 0);

    this.name = name;
    this.levels = levels;
    this.awardPoints = award;
  }

  getCurrentLevel(player) {
    const points = this.getCurrentPoints(player);
    return this.levels.slice().sort(level => level.points >= points ? 1 : -1)[0];
  }

  needPoints(level) {
    const levelNumber = this.getLevelNumber(level);
    const {
      points
    } = this.levels[levelNumber] || level;
    return points;
  }

  getLevelNumber(level) {
    return this.levels.findIndex(item => level.points <= item.points) + 1;
  }

  getCurrentPoints(player) {
    return player.jobs[this.name] || 0;
  }

  isMaxLevel(level) {
    const {
      points: maxPoints
    } = lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(this.levels);

    return maxPoints === level.points;
  }

  async giveAward(player) {
    const currentLevel = this.getCurrentLevel(player);
    const {
      salary
    } = currentLevel;
    if (salary) await player.moneyHelper.change(salary, 'cash');
    if (this.isMaxLevel(currentLevel)) return;
    if (player.jobs[this.name]) player.jobs[this.name] += this.awardPoints;else player.jobs[this.name] = this.awardPoints;
    await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
      jobs: player.jobs
    });
  }

}

/***/ }),

/***/ "./src/jobs/orangeCollector.ts":
/*!*************************************!*\
  !*** ./src/jobs/orangeCollector.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");




class OrangeCollector extends _job__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'Сборщик апельсинов',
      position: {
        x: 403.746,
        y: 6526.144,
        z: 27.716
      },
      blip: {
        model: 514,
        color: 17
      }
    };
    super(info, 0, {
      male: {
        hats: [14, 0],
        torso: [14, 0],
        undershirt: [15, 0],
        legs: [0, 2],
        tops: [78, 2]
      },
      female: {
        hats: [14, 0],
        torso: [9, 0],
        undershirt: [2, 0],
        legs: [1, 4],
        tops: [78, 4]
      }
    });
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_1__["default"].create({
        position,
        type: 29,
        color: [0, 110, 0, 0],
        radius: 2.5
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    this.generateNewOrder(player);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || player.vehicle) return;
    await super.successOrder(player);
    _utils_animations__WEBPACK_IMPORTED_MODULE_2__["default"].playOnServer(player, 'pickup', 2600);
    await player.addToInventory({
      type: 'resources',
      name: 'orange',
      count: 1
    });
    this.generateNewOrder(player);
  }

  cancelCurrentOrder(player, worker) {
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null
    });
  }

}

const job = new OrangeCollector();

/***/ }),

/***/ "./src/jobs/pineappleCollector.ts":
/*!****************************************!*\
  !*** ./src/jobs/pineappleCollector.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");




class PineappleCollector extends _job__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'Сборщик ананасов',
      position: {
        x: 2865.686,
        y: 4729.744,
        z: 48.711
      },
      blip: {
        model: 76,
        color: 46
      }
    };
    super(info, 0, {
      male: {
        hats: [14, 0],
        torso: [14, 0],
        undershirt: [15, 0],
        legs: [0, 4],
        tops: [78, 4]
      },
      female: {
        hats: [14, 0],
        torso: [9, 0],
        undershirt: [2, 0],
        legs: [1, 2],
        tops: [78, 2]
      }
    });
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const {
        x,
        y,
        z
      } = position;
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_1__["default"].create({
        position,
        type: 29,
        color: [0, 110, 0, 0],
        radius: 2
      }, this.successOrder.bind(this));
      mp.objects.new('prop_pineapple', new mp.Vector3(x, y, z - 1), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: 0
      });
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    this.generateNewOrder(player);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || player.vehicle) return;
    await super.successOrder(player);
    _utils_animations__WEBPACK_IMPORTED_MODULE_2__["default"].playOnServer(player, 'pickup', 2600);
    await player.addToInventory({
      type: 'resources',
      name: 'pineapple',
      count: 1
    });
    this.generateNewOrder(player);
  }

  cancelCurrentOrder(player, worker) {
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null
    });
  }

}

const job = new PineappleCollector();

/***/ }),

/***/ "./src/jobs/portMover.ts":
/*!*******************************!*\
  !*** ./src/jobs/portMover.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ "./src/jobs/levels.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _helpers_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/objects */ "./src/helpers/objects.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");












class PortMover extends _job__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const data = {
      name: 'Грузчик',
      position: {
        x: 1012.583,
        y: -2893.085,
        z: 15.215
      },
      blip: {
        model: 615,
        color: 64
      }
    };
    super(data, 0, {
      male: {
        shoes: [12, 0],
        legs: [36, 0],
        underwears: [0, 0],
        torso: [52, 0],
        undershirt: [59, 0]
      },
      female: {
        shoes: [26, 0],
        legs: [35, 0],
        underwears: [0, 0],
        torso: [59, 0],
        undershirt: [36, 0]
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getOrderCoords", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getOrderMarker", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    this.getOrderCoords = {
      x: 966.922,
      y: -2968.455,
      z: 5.901
    };
    this.levels = new _levels__WEBPACK_IMPORTED_MODULE_4__["default"](this.name, [{
      points: 0,
      salary: 250
    }, {
      points: 2500,
      salary: 500
    }, {
      points: 6000,
      salary: 750
    }, {
      points: 24000,
      salary: 1100
    }, {
      points: 60000,
      salary: 1300
    }], 50);
    this.createOrderPoint();
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const {
        x,
        y,
        z
      } = position;
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_8__["default"].create({
        position: {
          x,
          y,
          z
        },
        type: 29,
        color: [205, 80, 0, 85],
        radius: 2
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    this.getOrderMarker.showFor(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].createWorkBlip(player, this.getOrderCoords, 5);
  }

  finishWork(player) {
    this.getOrderMarker.hideFor(player);
    super.finishWork(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].deleteWorkBlip(player);
  }

  pressedKeyOnMainShape(player) {
    if (this.isWorksOnOtherJob(player) || player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].error(player, 'Вы уже работаете на другой работе');
    }

    const currentLevel = this.levels.getCurrentLevel(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Job-ShowMenu', [this.name, this.isWorksHere(player), this.levels.getCurrentPoints(player), this.levels.getLevelNumber(currentLevel), this.levels.needPoints(currentLevel)]);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || !this.checkCurrentOrder(player) || player.vehicle) return;
    await super.successOrder(player);
    await this.levels.giveAward(player);
  }

  generateNewOrder(player) {
    if (this.checkCurrentOrder(player) || player.vehicle) return;
    const worker = this.workers.get(player);

    const currentOrder = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, this.checkpoints.length - 1);

    if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].deleteWorkBlip(player);
    _utils_animations__WEBPACK_IMPORTED_MODULE_10__["default"].playOnServer(player, 'holdBox');
    _helpers_objects__WEBPACK_IMPORTED_MODULE_6__["default"].attach(player, 'woodenBox');
    this.showCheckpoint(player, currentOrder);
    this.workers.update(player, {
      currentOrder
    });
  }

  cancelCurrentOrder(player, worker) {
    this.hideCheckpoint(player, worker.currentOrder);
    _helpers_objects__WEBPACK_IMPORTED_MODULE_6__["default"].detach(player);
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].createWorkBlip(player, this.getOrderCoords, 5);
    player.stopAnimation();
    player.setVariable('isPlayingAnim', false);
    this.workers.update(player, {
      currentOrder: null
    });
  }

  createOrderPoint() {
    const {
      x,
      y,
      z
    } = this.getOrderCoords;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_9__["default"].create(this.getOrderCoords, 1, {
      onEnter: this.enteredGetOrderShape.bind(this),
      onKeyPress: this.generateNewOrder.bind(this),
      keyName: 'E'
    });
    this.getOrderMarker = mp.markers.new(1, new mp.Vector3(x, y, z - 1), 1, {
      color: [0, 72, 142, 85],
      visible: false
    });
  }

  enteredGetOrderShape(player) {
    if (!this.isWorksHere(player) || player.vehicle) return;
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы взять ящик');
  }

}

const job = new PortMover();

/***/ }),

/***/ "./src/jobs/taxi.ts":
/*!**************************!*\
  !*** ./src/jobs/taxi.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./src/jobs/levels.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle */ "./src/jobs/vehicle.ts");








class Taxi extends _job__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const data = {
      name: 'Таксист',
      position: {
        x: 895.81,
        y: -179.3139,
        z: 74.7
      },
      blip: {
        model: 198,
        color: 5
      }
    };
    super(data, 12);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicle", void 0);

    this.cooldown.setTimeLimit(5 * 60 * 1000);
    this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_6__["default"](['priustaxi'], [{
      x: 920.323,
      y: -163.689,
      z: 74.413
    }, {
      x: 918.441,
      y: -167.246,
      z: 74.23
    }, {
      x: 916.175,
      y: -170.821,
      z: 74.0311
    }, {
      x: 903.301,
      y: -191.829,
      z: 73.407
    }, {
      x: 904.986,
      y: -189.141,
      z: 73.441
    }, {
      x: 906.857,
      y: -186.498,
      z: 73.619
    }], [0, 0, 0]);
    this.levels = new _levels__WEBPACK_IMPORTED_MODULE_3__["default"](this.name, [{
      points: 0,
      salary: 350
    }, {
      points: 5000,
      salary: 600
    }, {
      points: 12000,
      salary: 950
    }, {
      points: 32000,
      salary: 1300
    }, {
      points: 65000,
      salary: 1700
    }], 50);
    this.subscribeToEvents();
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_5__["default"].create({
        position,
        type: 29,
        color: [255, 165, 0, 85],
        radius: 7
      }, this.showConfirmDialog.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    const vehicle = await this.vehicle.spawn(player);
    this.workers.update(player, {
      vehicle
    });
    this.generateNewOrder(player);
  }

  pressedKeyOnMainShape(player) {
    if (this.isWorksOnOtherJob(player) || player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Вы уже работаете на другой работе');
    }

    if (!player.isHasLicense('car')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'У вас нет прав категории B!');
    }

    const currentLevel = this.levels.getCurrentLevel(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Job-ShowMenu', [this.name, this.isWorksHere(player), this.levels.getCurrentPoints(player), this.levels.getLevelNumber(currentLevel), this.levels.needPoints(currentLevel)]);
  }

  showConfirmDialog(player) {
    if (!this.isWorksHere(player) || !player.vehicle || !this.checkCarInCheckPoint(player)) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Taxi-ShowConfirm');
  }

  async succesOrder(player) {
    if (!this.isWorksHere(player) || !this.checkCurrentOrder(player) || !player.vehicle || !this.checkCarInCheckPoint(player)) return;
    await super.successOrder(player);
    await this.levels.giveAward(player);
    this.generateNewOrder(player);
  }

  cancelCurrentOrder(player, worker) {
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null
    });
  }

  checkCarInCheckPoint(player) {
    const {
      vehicle,
      currentOrder
    } = this.workers.get(player);
    return this.isWorkVehicle(vehicle) && this.checkpoints[currentOrder].dist(vehicle.position) <= 10;
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Taxi-SubmitOrder': this.succesOrder.bind(this)
    });
  }

}

const job = new Taxi();

/***/ }),

/***/ "./src/jobs/trucker.ts":
/*!*****************************!*\
  !*** ./src/jobs/trucker.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ "./src/jobs/levels.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicle */ "./src/jobs/vehicle.ts");










class Trucker extends _job__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Дальнобойщик',
      position: {
        x: 836.1334,
        y: -1211.5408,
        z: 28.0148
      },
      blip: {
        model: 477,
        color: 1
      }
    };
    super(info, 24);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicle", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "trailers", void 0);

    this.cooldown.setTimeLimit(5 * 60 * 1000);
    this.levels = new _levels__WEBPACK_IMPORTED_MODULE_4__["default"](this.name, [{
      points: 0,
      salary: 5000
    }, {
      points: 500,
      salary: 10000
    }, {
      points: 1000,
      salary: 15000
    }, {
      points: 2000,
      salary: 20000
    }, {
      points: 6000,
      salary: 26000
    }], 50);
    this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_8__["default"](['hauler'], [{
      x: 904.6157,
      y: -1221.966,
      z: 26.447
    }, {
      x: 911.1196,
      y: -1221.101,
      z: 26.468
    }, {
      x: 920.639,
      y: -1221.268,
      z: 26.5035
    }]);
    this.trailers = new _vehicle__WEBPACK_IMPORTED_MODULE_8__["default"](['tr4', 'tvtrailer', 'trailers', 'trailers2', 'docktrailer'], [{
      x: 1013.5301513671875,
      y: -3208.603759765625,
      z: 5.886550426483154
    }, {
      x: 1049.9942626953125,
      y: -3210.67919921875,
      z: 5.865447998046875
    }, {
      x: 997.4450073242188,
      y: -3210.643310546875,
      z: 5.901791095733643
    }, {
      x: 953.78564453125,
      y: -3211.7919921875,
      z: 5.900662422180176
    }, {
      x: 912.9066772460938,
      y: -3187.865478515625,
      z: 5.900801658630371
    }, {
      x: 904.8016967773438,
      y: -3157.775634765625,
      z: 5.900800704956055
    }, {
      x: 920.2920532226562,
      y: -3131.984375,
      z: 5.90079927444458
    }, {
      x: 829.6629028320312,
      y: -3128.057373046875,
      z: 5.900819301605225
    }, {
      x: 1273.2265625,
      y: -3197.66796875,
      z: 5.90410184
    }, {
      x: 1275.7923583984375,
      y: -3228.995361328125,
      z: 5.90159512
    }], [0, 0, 0]);
    this.subscribeToEvents();
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_6__["default"].create({
        position,
        type: 29,
        color: [194, 42, 42, 85],
        radius: 4
      }, this.successOrder.bind(this));
      this.checkpoints.push(checkpoint);
    });
  }

  async startWork(player) {
    await super.startWork(player);
    const vehicle = await this.vehicle.spawn(player);
    this.workers.update(player, {
      vehicle
    });
    this.generateNewOrder(player);
  }

  pressedKeyOnMainShape(player) {
    if (this.isWorksOnOtherJob(player) || player.faction.working) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].error(player, 'Вы уже работаете на другой работе');
    }

    if (!player.isHasLicense('truck')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].help(player, 'У вас нет прав категории С!');
    }

    const currentLevel = this.levels.getCurrentLevel(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Job-ShowMenu', [this.name, this.isWorksHere(player), this.levels.getCurrentPoints(player), this.levels.getLevelNumber(currentLevel), this.levels.needPoints(currentLevel)]);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || !this.checkTrailerInCheckPoint(player)) return;
    await super.successOrder(player);
    await this.levels.giveAward(player);
    this.generateNewOrder(player);
  }

  generateNewOrder(player) {
    const worker = this.workers.get(player);

    const currentOrder = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, this.checkpoints.length - 1);

    if (currentOrder === worker.prevOrder) return this.generateNewOrder(player);
    setTimeout(() => this.trailers.spawn(player).then(trailer => {
      this.workers.update(player, {
        cargo: trailer,
        currentOrder
      });
      _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].createWorkBlip(player, trailer.position, 1);
    }), 100);
  }

  cancelCurrentOrder(player, worker) {
    if (worker.cargo) worker.cargo.destroy();
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null,
      cargo: null
    });
  }

  attachedTrailer(vehicle, trailer) {
    if (!this.isWorkVehicle(trailer)) return;
    const player = vehicle.getOccupant(-1);
    const worker = this.workers.get(player);
    if (!worker || worker.cargo.id !== trailer.id) return;
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].deleteWorkBlip(player);
    this.showCheckpoint(player, worker.currentOrder);
  }

  checkTrailerInCheckPoint(player) {
    const {
      cargo,
      currentOrder
    } = this.workers.get(player);
    return this.checkpoints[currentOrder].dist(cargo.position) <= 12;
  }

  subscribeToEvents() {
    mp.events.add('trailerAttached', this.attachedTrailer.bind(this));
  }

}

const job = new Trucker();

/***/ }),

/***/ "./src/jobs/vehicle.ts":
/*!*****************************!*\
  !*** ./src/jobs/vehicle.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/sample */ "lodash/sample");
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _basic_vehicle_tuning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basic/vehicle/tuning */ "./src/basic/vehicle/tuning.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../basic/vehicle */ "./src/basic/vehicle/index.ts");







class JobVehicle {
  constructor(models, positions, color) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "models", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "positions", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "color", void 0);

    this.models = models;
    this.positions = positions;
    this.color = color;
  }

  async spawn(player, owning = true) {
    const model = lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(this.models);

    const position = this.getFreePosition() || lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(this.positions);

    const vehicle = await _basic_vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].create(model, position, {
      type: 'user',
      id: owning ? player.dbId : 'temp'
    }, true, true);
    vehicle.job = player.job;
    this.paintVehicle(vehicle);
    return vehicle;
  }

  paintVehicle(vehicle) {
    const color = this.color || [lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(0, 255), lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(0, 255), lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(0, 255)];
    _basic_vehicle_tuning__WEBPACK_IMPORTED_MODULE_4__["default"].setPaint(vehicle, color);
  }

  getFreePosition() {
    return this.positions.find(item => {
      const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_3__["getNearestVehicleInRange"])(new mp.Vector3(item.x, item.y, item.z), 2);
      return !vehicle;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (JobVehicle);

/***/ }),

/***/ "./src/jobs/weedCollector.ts":
/*!***********************************!*\
  !*** ./src/jobs/weedCollector.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job */ "./src/jobs/job.ts");
/* harmony import */ var _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/checkpoints */ "./src/helpers/checkpoints.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _factions_police__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factions/police */ "./src/factions/police/index.ts");
/* harmony import */ var _factions_fbi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factions/fbi */ "./src/factions/fbi/index.ts");
/* harmony import */ var _factions_sheriff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factions/sheriff */ "./src/factions/sheriff/index.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basic/prison */ "./src/basic/prison.ts");









class WeedCollector extends _job__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const info = {
      name: 'Сборщик травки',
      position: {
        x: 263.381,
        y: 3624.281,
        z: 33.597
      },
      blip: {
        model: 496,
        color: 25
      }
    };
    super(info, 0);
    this.cooldown.setTimeLimit(60 * 1000);
  }

  createCheckpoints(coords) {
    coords.forEach(position => {
      const {
        x,
        y,
        z
      } = position;
      const checkpoint = _helpers_checkpoints__WEBPACK_IMPORTED_MODULE_1__["default"].create({
        position,
        type: 29,
        color: [0, 110, 0, 0],
        radius: 2
      }, this.successOrder.bind(this));
      mp.objects.new('prop_weed_01', new mp.Vector3(x, y, z - 1), {
        rotation: new mp.Vector3(0, 0, 0),
        alpha: 255,
        dimension: 0
      });
      this.checkpoints.push(checkpoint);
    });
  }

  notifyAboutCrime(member, violator) {
    member.call('createRadiusBlip', [`Травка ${violator.id}`, 3, this.position]);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].info(member, 'В городе новое преступление! Территория отмечена на карте');
  }

  async startWork(player) {
    await super.startWork(player);
    this.generateNewOrder(player);
    _factions_police__WEBPACK_IMPORTED_MODULE_4__["default"].implementForMembers(member => this.notifyAboutCrime(member, player));
    _factions_fbi__WEBPACK_IMPORTED_MODULE_5__["default"].implementForMembers(member => this.notifyAboutCrime(member, player));
    _factions_sheriff__WEBPACK_IMPORTED_MODULE_6__["default"].implementForMembers(member => this.notifyAboutCrime(member, player));
    if (!player.getVariable('inMask')) _basic_prison__WEBPACK_IMPORTED_MODULE_7__["default"].addViolation(player, 1.4);
  }

  finishWork(player) {
    _factions_police__WEBPACK_IMPORTED_MODULE_4__["default"].implementForMembers(member => {
      member.call('removeRadiusBlip', [`Травка ${player.id}`]);
    });
    _factions_fbi__WEBPACK_IMPORTED_MODULE_5__["default"].implementForMembers(member => {
      member.call('removeRadiusBlip', [`Травка ${player.id}`]);
    });
    _factions_sheriff__WEBPACK_IMPORTED_MODULE_6__["default"].implementForMembers(member => {
      member.call('removeRadiusBlip', [`Травка ${player.id}`]);
    });
    super.finishWork(player);
  }

  pressedKeyOnMainShape(player) {
    if (player.isGovMember()) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].error(player, 'Иди отсюда, легавый!');
    }

    super.pressedKeyOnMainShape(player);
  }

  async successOrder(player) {
    if (!this.isWorksHere(player) || player.vehicle) return;
    await super.successOrder(player);
    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["default"].playOnServer(player, 'pickup', 2600);
    await player.addToInventory({
      type: 'resources',
      name: 'weed',
      count: 1
    });
    this.generateNewOrder(player);
  }

  cancelCurrentOrder(player, worker) {
    this.hideCheckpoint(player, worker.currentOrder);
    this.workers.update(player, {
      currentOrder: null
    });
  }

}

const job = new WeedCollector();

/***/ }),

/***/ "./src/jobs/workers.ts":
/*!*****************************!*\
  !*** ./src/jobs/workers.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Workers; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

class Workers {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "workers", void 0);

    this.workers = new Map();
  }

  get count() {
    return this.workers.size;
  }

  add(player) {
    this.workers.set(player.id, {});
  }

  get(player) {
    return this.workers.get(player.id);
  }

  update(player, data) {
    const worker = this.get(player);
    if (!worker) return;
    this.workers.set(player.id, { ...worker,
      ...data
    });
  }

  remove(player) {
    this.workers.delete(player.id);
  }

}

/***/ }),

/***/ "./src/models/Business.ts":
/*!********************************!*\
  !*** ./src/models/Business.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const pointSchema = new Schema({
  x: Number,
  y: Number,
  z: Number
});
const businessSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  customCost: {
    type: Number,
    default: 0
  },
  forSale: {
    type: Boolean,
    default: true
  },
  position: {
    type: pointSchema,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  paymentTime: {
    type: Date,
    default: null
  },
  paidDays: {
    type: Number,
    default: 1
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Business', businessSchema));

/***/ }),

/***/ "./src/models/Counter.ts":
/*!*******************************!*\
  !*** ./src/models/Counter.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const counterSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    default: 0
  }
});
counterSchema.index({
  _id: 1,
  seq: 1
}, {
  unique: true
});
const CounterModel = mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Counter', counterSchema);

const autoIncrementId = (doc, field, next) => {
  CounterModel.findByIdAndUpdate(doc.constructor.modelName, {
    $inc: {
      seq: 1
    }
  }, {
    new: true,
    upsert: true
  }, (error, counter) => {
    if (error) return next(error);
    doc[field] = counter.seq;
    next();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (autoIncrementId);

/***/ }),

/***/ "./src/models/Faction.ts":
/*!*******************************!*\
  !*** ./src/models/Faction.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const memberSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  rank: {
    type: Number,
    default: 1
  },
  statistics: {
    type: Object,
    default: {}
  }
});
const factionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  money: {
    type: Number,
    default: 0
  },
  members: [memberSchema],
  inventory: []
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Faction', factionSchema));

/***/ }),

/***/ "./src/models/Gang.ts":
/*!****************************!*\
  !*** ./src/models/Gang.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const memberSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  rank: Schema.Types.ObjectId
});
const rankSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  permissions: {
    type: Object,
    default: {}
  }
});
const gangSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  money: {
    type: Number,
    default: 0
  },
  ranks: [rankSchema],
  members: [memberSchema]
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Gang', gangSchema));

/***/ }),

/***/ "./src/models/House.ts":
/*!*****************************!*\
  !*** ./src/models/House.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const pointSchema = new Schema({
  x: Number,
  y: Number,
  z: Number
});
const houseSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  customCost: {
    type: Number,
    default: 0
  },
  houseClass: {
    type: String,
    required: true
  },
  forSale: {
    type: Boolean,
    default: true
  },
  entrance: {
    type: pointSchema,
    required: true
  },
  locked: {
    type: Boolean,
    default: false
  },
  gang: {
    type: Schema.Types.ObjectId,
    ref: 'Gang'
  },
  paidDays: {
    type: Number,
    default: 1
  },
  inventory: []
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('House', houseSchema));

/***/ }),

/***/ "./src/models/Job.ts":
/*!***************************!*\
  !*** ./src/models/Job.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const pointSchema = new Schema({
  x: Number,
  y: Number,
  z: Number
});
const jobSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  checkpoints: [pointSchema]
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Job', jobSchema));

/***/ }),

/***/ "./src/models/Promo.ts":
/*!*****************************!*\
  !*** ./src/models/Promo.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const promoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  code: {
    type: String,
    required: true
  },
  used: [{
    userId: Schema.Types.ObjectId,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  income: {
    type: Number,
    required: true
  },
  award: {
    type: Number,
    required: true
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Promo', promoSchema));

/***/ }),

/***/ "./src/models/Report.ts":
/*!******************************!*\
  !*** ./src/models/Report.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const reportSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Report = mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Report', reportSchema);
/* harmony default export */ __webpack_exports__["default"] = (Report);

/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter */ "./src/models/Counter.ts");


const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});
const userSchema = new Schema({
  uid: {
    type: Number,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  tempName: {
    firstName: String,
    lastName: String,
    expiresDate: Date
  },
  socialClub: {
    type: String,
    required: true
  },
  serial: String,
  ip: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  adminLvl: {
    type: Number,
    default: 0
  },
  token: {
    code: String,
    expiresDate: Date
  },
  money: {
    cash: {
      type: Number,
      default: 0
    },
    bank: {
      type: Number,
      default: 0
    },
    drivepoints: {
      type: Number,
      default: 0
    }
  },
  cardNumber: Number,
  phone: {
    number: String,
    contacts: [contactSchema],
    blackList: [String]
  },
  mute: {
    type: Date,
    default: null
  },
  health: {
    type: Number,
    default: 100
  },
  hunger: {
    type: Number,
    default: 100
  },
  position: {
    type: Object,
    required: true
  },
  loginAt: Date,
  exitAt: Date,
  playedTime: {
    type: Number,
    default: 0
  },
  paydayTime: {
    type: Number,
    default: 0
  },
  registrationAt: {
    type: Date,
    default: Date.now
  },
  ban: {
    adminId: Schema.Types.ObjectId,
    reason: String,
    term: Date,
    perm: Boolean
  },
  licenses: [],
  character: {
    gender: {
      type: Number,
      default: 0
    },
    skindata: [],
    facedata: [],
    headOverlayData: [],
    tattoos: [],
    hair: {},
    brow: {},
    beard: {}
  },
  inventory: [],
  vehicleSlots: {
    type: Number,
    default: 1
  },
  jobs: {
    type: Object,
    default: {}
  }
});
userSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  Object(_Counter__WEBPACK_IMPORTED_MODULE_1__["default"])(this, 'uid', next);
});
const User = mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('User', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/models/Vehicle.ts":
/*!*******************************!*\
  !*** ./src/models/Vehicle.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const vehicleSchema = new Schema({
  owner: Schema.Types.ObjectId,
  owners: [Schema.Types.ObjectId],
  model: {
    type: String,
    required: true
  },
  numberPlate: {
    type: String,
    required: true
  },
  fuel: {
    type: Number,
    required: true
  },
  inventory: [],
  state: {
    type: Object,
    default: {}
  },
  tuning: {
    type: Object,
    default: {}
  },
  label: String
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Vehicle', vehicleSchema));

/***/ }),

/***/ "./src/models/Violator.ts":
/*!********************************!*\
  !*** ./src/models/Violator.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0__;
const violatorSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  inside: {
    type: Boolean,
    default: false
  },
  time: {
    type: Number,
    default: 0
  },
  reason: String,
  violations: [],
  violatedAt: {
    type: Date,
    default: Date.now
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__["model"]('Violator', violatorSchema));

/***/ }),

/***/ "./src/property/business/businessBuilding.ts":
/*!***************************************************!*\
  !*** ./src/property/business/businessBuilding.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/property/business/index.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");




class BusinessBuilding {
  onEnterPassage(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  createBlip(business) {
    const {
      x,
      y,
      z
    } = business.position;

    if (business.forSale) {
      const blip = mp.blips.new(108, new mp.Vector3(x, y, z), {
        name: 'Бизнес (продаётся)',
        color: 2,
        shortRange: true,
        scale: 0.7
      });
      if (business.customCost) blip.color = 5;
      return blip;
    }
  }

  createMainShape(position) {
    const {
      x,
      y,
      z
    } = position;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_0__["default"].create(position, 0.75, {
      onEnter: this.onEnterPassage,
      onKeyPress: _index__WEBPACK_IMPORTED_MODULE_1__["default"].openMenu,
      keyName: 'E'
    }, _index__WEBPACK_IMPORTED_MODULE_1__["default"].count);
    mp.markers.new(29, new mp.Vector3(x, y, z), 0.75, {
      color: [0, 255, 0, 100],
      visible: true
    });
  }

  create(business) {
    const blip = this.createBlip(business);
    this.createMainShape(business.position);
    return {
      index: _index__WEBPACK_IMPORTED_MODULE_1__["default"].count,
      blipId: blip && blip.id,
      ...business
    };
  }

  setBlipStatus(blip, customSelling) {
    blip.model = 108;
    blip.name = 'Бизнес (продаётся)';
    blip.color = customSelling ? 5 : 2;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new BusinessBuilding());

/***/ }),

/***/ "./src/property/business/index.ts":
/*!****************************************!*\
  !*** ./src/property/business/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property */ "./src/property/property.ts");
/* harmony import */ var _models_Business__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Business */ "./src/models/Business.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _businessBuilding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./businessBuilding */ "./src/property/business/businessBuilding.ts");









class Business extends _property__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super('Business', {
      maxPlayerItems: 1,
      sellPercent: 50,
      taxPercent: 0.025
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "items", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "workTime", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "openMenu", async (player, index) => {
      this.setNearestProperty(player, index);
      const business = this.getPropertyData(player);
      if (!business) return;
      const owner = await this.getOwnerName(business);
      const isOwner = this.isOwner(player, business.ownerId);
      const cost = isOwner ? this.getSellPrice(business) : business.cost;
      const forSale = this.isOwnedSelling(business);
      await rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Business-ShowMenu', [index, business.name, isOwner, owner, forSale && !isOwner ? business.customCost : cost, forSale, business.paymentTime && business.paymentTime.getTime() - Date.now(), business.income, business.paidDays, business.cost * 2, this.getTax(business), this.workTime]);
    });

    this.items = [];
    this.workTime = 24;
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Business-Go': this.start.bind(this)
    });
    super.subscribeToEvents();
  }

  changePlayerData(player, business, increase) {
    player.businesses += increase ? 1 : -1;
  }

  async updateProperty(business, newData) {
    await _models_Business__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(business._id, {
      $set: newData
    });
    Object.assign(business, newData);
  }

  async setDefaultState(business) {
    const state = {
      ownerId: null,
      forSale: true,
      paidDays: 1,
      customCost: 0,
      paymentTime: null
    };
    await this.updateProperty(business, state);
  }

  getPrice(business) {
    return business.cost;
  }

  getSellPrice(business) {
    return business.cost / 100 * this.sellPercent;
  }

  showOwn(player, business) {
    _helpers_blips__WEBPACK_IMPORTED_MODULE_6__["default"].createForPlayer(player, {
      model: 108,
      name: `Бизнес №${business.index}`,
      position: business.position,
      color: 3,
      scale: 0.7
    });
  }

  canBuy(player) {
    let error;

    if (!player.isHasLicense('business')) {
      error = 'У вас нет лицензии на бизнесы!';
    } else if (player.businesses === this.maxPlayerItems) {
      error = 'Достигнут лимит на владение бизнесами!';
    }

    return error ? _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, error) : true;
  }

  updateBlipSellingStatus(business, player) {
    const blip = lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(business.blipId) && mp.blips.at(business.blipId);

    if (blip && !business.forSale) {
      blip.destroy();
      this.updateProperty(business, {
        blipId: undefined
      });
      return this.showOwn(player, business);
    }

    if (player) _helpers_blips__WEBPACK_IMPORTED_MODULE_6__["default"].deleteForPlayer(player, `Бизнес №${business.index}`);
    _businessBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].setBlipStatus(blip || _businessBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].createBlip(business), this.isOwnedSelling(business));
  }

  getPropertyData(player) {
    const index = player.nearestProperty;
    return this.items[index];
  }

  async start(player) {
    const business = this.getPropertyData(player);

    if (!business.paymentTime) {
      const date = new Date();
      date.setHours(date.getHours() + this.workTime);
      await this.updateProperty(business, {
        paymentTime: date
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].info(player, `Работа началась! Вы получите прибыль через ${this.workTime}ч`);
    } else if (business.paymentTime.getTime() - Date.now() <= 0) {
      await this.updateProperty(business, {
        paymentTime: null
      });
      await player.moneyHelper.change(business.income, 'bank', 'business income');
    }

    return business.paymentTime && business.paymentTime.getTime() - Date.now();
  }

  taxEvent() {
    const operations = [];
    this.items.forEach(business => {
      if (!business.ownerId) return;
      if (business.paidDays <= 0) return this.withdraw(business);
      operations.push({
        updateOne: {
          filter: {
            _id: business._id
          },
          update: {
            $inc: {
              paidDays: -1
            }
          }
        }
      });
      business.paidDays--;
    });
    if (operations.length) _models_Business__WEBPACK_IMPORTED_MODULE_4__["default"].bulkWrite(operations);
  }

  loadBusiness(data) {
    const business = _businessBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].create(data);
    this.items.push(business);
  }

  async create(player, name, cost, income) {
    const business = new _models_Business__WEBPACK_IMPORTED_MODULE_4__["default"]({
      name,
      cost,
      income,
      position: player.position
    });
    await business.save();
    this.loadBusiness(business.toObject());
  }

  loadPlayerItems(player) {
    this.items.forEach(business => {
      if (!this.isOwner(player, business.ownerId)) return;
      this.changePlayerData(player, business, true);
      if (!this.isOwnedSelling(business)) this.showOwn(player, business);
    });
  }

}

const business = new Business();
mp.events.subscribeToDefault({
  databaseConnected: async () => {
    const cursor = await _models_Business__WEBPACK_IMPORTED_MODULE_4__["default"].find().lean().cursor();
    let count = 0;
    cursor.on('data', data => {
      business.loadBusiness(data);
      count++;
    });
    cursor.on('close', () => console.log(`Businesses loaded. Count: ${count}`));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (business);

/***/ }),

/***/ "./src/property/house/houseBuilding.ts":
/*!*********************************************!*\
  !*** ./src/property/house/houseBuilding.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_houses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/houses */ "./src/data/houses.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/property/house/index.ts");
/* harmony import */ var _houseInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./houseInventory */ "./src/property/house/houseInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");







class HouseBuilding {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "nextFreeDimension", void 0);

    this.nextFreeDimension = 1000;
  }

  onEnterPassage(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  createBlip(house) {
    const {
      x,
      y,
      z
    } = house.entrance;

    if (house.forSale) {
      const blip = mp.blips.new(374, new mp.Vector3(x, y, z), {
        name: 'Дом (продаётся)',
        color: 2,
        shortRange: true,
        scale: 0.4
      });
      if (house.customCost) blip.color = 5;
      return blip;
    }
  }

  createPassage(position) {
    const {
      x,
      y,
      z,
      dimension = 0
    } = position;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_2__["default"].create(position, 0.75, {
      onEnter: this.onEnterPassage,
      onKeyPress: _index__WEBPACK_IMPORTED_MODULE_3__["default"].openMenu,
      keyName: 'E'
    }, _index__WEBPACK_IMPORTED_MODULE_3__["default"].count);
    const color = dimension ? [194, 42, 42, 85] : [0, 255, 0, 85];
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      dimension,
      color,
      visible: true
    });
  }

  create(house) {
    const {
      coords
    } = _data_houses__WEBPACK_IMPORTED_MODULE_1__["default"][house.houseClass];
    if (!coords) return;
    const blip = this.createBlip(house);
    const dimension = this.nextFreeDimension;
    this.createPassage(house.entrance);
    this.createPassage({
      dimension,
      ...coords.location
    });
    _houseInventory__WEBPACK_IMPORTED_MODULE_4__["default"].create({
      dimension,
      ...coords.inventory
    }, {
      dbId: house._id,
      inventory: house.inventory,
      houseClass: house.houseClass
    }); // refactoring

    return {
      index: _index__WEBPACK_IMPORTED_MODULE_3__["default"].count,
      blipId: blip && blip.id,
      exit: { ...coords.location,
        dimension: this.nextFreeDimension++
      },
      ...house
    };
  }

  tryToEnter(player, house) {
    if (house.locked) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Дверь заперта');
    const isEntrance = this.isEntrance(player, house.entrance);
    player.tp(isEntrance ? house.exit : house.entrance);
  }

  setBlipStatus(blip, customSelling) {
    blip.model = 374;
    blip.name = 'Дом (продаётся)';
    blip.color = customSelling ? 5 : 2;
    blip.scale = 0.4;
  }

  isEntrance(player, entrance) {
    const position = new mp.Vector3(entrance.x, entrance.y, entrance.z);
    return player.dist(position) <= 3;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new HouseBuilding());

/***/ }),

/***/ "./src/property/house/houseInventory.ts":
/*!**********************************************!*\
  !*** ./src/property/house/houseInventory.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_House__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/House */ "./src/models/House.ts");
/* harmony import */ var _basic_inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic/inventory */ "./src/basic/inventory.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/property/house/index.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _gangs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gangs */ "./src/gangs/index.ts");









class HouseInventory extends _basic_inventory__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super('house');
    mp.events.subscribe({
      'House-MoveInventoryItem': this.moveInventoryItem.bind(this),
      'House-SwapInventoryItems': this.swapInventoryItems.bind(this)
    });
  }

  async updateInventoryInDb(dbId, updInventory) {
    await _models_House__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(dbId, {
      $set: {
        inventory: updInventory
      }
    });
  }

  getMaxSlots(player) {
    return _index__WEBPACK_IMPORTED_MODULE_5__["default"].getInventorySlots(player);
  }

  showMenu(player, data) {
    if (!_index__WEBPACK_IMPORTED_MODULE_5__["default"].hasOwner(player) || _index__WEBPACK_IMPORTED_MODULE_5__["default"].isGangProperty(player) && !_gangs__WEBPACK_IMPORTED_MODULE_7__["default"].hasPremission(player, 'inventory')) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Нет доступа');
    player.canOpen.houseInventory = data;
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Inventory-ShowDoubleMenu', [player.inventory, data.inventory, this.getCurrentSlots(player.inventory), _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_3__["default"].getMaxSlots(player), this.getCurrentSlots(data.inventory), this.getMaxSlots(player), this.name]);
  }

  enteredMainShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ для открытия меню');
  }

  create(position, data) {
    const {
      x,
      y,
      z,
      dimension
    } = position;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_4__["default"].create(position, 0.75, {
      onEnter: this.enteredMainShape.bind(this),
      onKeyPress: this.showMenu.bind(this),
      keyName: 'E'
    }, data);
    mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
      dimension,
      color: [255, 219, 0, 100],
      visible: true
    });
  }

  moveInventoryItem(player, from, name, count) {
    const {
      dbId,
      inventory
    } = player.canOpen.houseInventory;
    return this.moveItem(player, {
      dbId,
      items: inventory
    }, from, name, count);
  }

  swapInventoryItems(player, picked, target) {
    const {
      inventory
    } = player.canOpen.houseInventory;
    return this.swapItems(inventory, picked, target);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new HouseInventory());

/***/ }),

/***/ "./src/property/house/index.ts":
/*!*************************************!*\
  !*** ./src/property/house/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property */ "./src/property/property.ts");
/* harmony import */ var _models_House__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/House */ "./src/models/House.ts");
/* harmony import */ var _helpers_blips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/blips */ "./src/helpers/blips.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _houseBuilding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./houseBuilding */ "./src/property/house/houseBuilding.ts");
/* harmony import */ var _data_houses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/houses */ "./src/data/houses.ts");










class House extends _property__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super('House', {
      maxPlayerItems: 2,
      sellPercent: 50,
      taxPercent: 0.15
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "items", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "openMenu", async (player, index) => {
      this.setNearestProperty(player, index);
      const house = this.getPropertyData(player);
      if (!house) return;
      const owner = await this.getOwnerName(house);
      const isOwner = this.isOwner(player, house.ownerId, true);
      const price = this.getPrice(house);
      const cost = owner ? this.getSellPrice(house) : price;
      const forSale = this.isOwnedSelling(house);
      await rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'House-ShowMenu', [index, isOwner, owner, _houseBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].isEntrance(player, house.entrance), house.locked, house.houseClass, house.paidDays, forSale, forSale && !isOwner ? house.customCost : cost, price * 2, this.getTax(house)]);
    });

    this.items = [];
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'House-ToggleLockStatus': this.toggleLockStatus.bind(this),
      'House-Go': this.go.bind(this)
    });
    super.subscribeToEvents();
  }

  changePlayerData(player, house, increase) {
    const vehicleSlots = this.getVehicleSlots(house.houseClass);
    player.housesCount += increase ? 1 : -1;
    player.vehicleSlots += increase ? vehicleSlots : -vehicleSlots;
  }

  async updateProperty(house, newData) {
    await _models_House__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(house._id, {
      $set: newData
    });
    Object.assign(house, newData);
  }

  async setDefaultState(house) {
    const state = {
      paidDays: 1,
      locked: false,
      ownerId: null,
      forSale: true,
      customCost: 0,
      inventory: [],
      gang: null
    };
    await this.updateProperty(house, state);
  }

  getPrice(house) {
    return _data_houses__WEBPACK_IMPORTED_MODULE_8__["default"][house.houseClass].price;
  }

  getSellPrice(house) {
    return _data_houses__WEBPACK_IMPORTED_MODULE_8__["default"][house.houseClass].price / 100 * this.sellPercent;
  }

  showOwn(player, house) {
    _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].createForPlayer(player, {
      model: 40,
      name: `Дом №${house.index}`,
      position: house.entrance,
      color: 3,
      scale: 0.5
    });
  }

  canBuy(player) {
    let error;

    if (!player.isHasLicense('house') && player.housesCount) {
      error = 'У вас нет лицензии на дома!';
    } else if (player.housesCount === this.maxPlayerItems) {
      error = 'Достигнут лимит на владение домами!';
    }

    return error ? _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, error) : true;
  }

  updateBlipSellingStatus(house, player) {
    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(house.blipId) && !house.forSale) {
      mp.blips.at(house.blipId).destroy();
      this.updateProperty(house, {
        blipId: undefined
      });
      return this.showOwn(player, house);
    }

    if (player) _helpers_blips__WEBPACK_IMPORTED_MODULE_5__["default"].deleteForPlayer(player, `Дом №${house.index}`);
    const blip = lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(house.blipId) ? mp.blips.at(house.blipId) : _houseBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].createBlip(house);
    this.updateProperty(house, {
      blipId: blip.id
    });
    _houseBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].setBlipStatus(blip, this.isOwnedSelling(house));
  }

  getPropertyData(player) {
    const index = player.nearestProperty;
    return this.items[index];
  }

  getVehicleSlots(houseClass) {
    return _data_houses__WEBPACK_IMPORTED_MODULE_8__["default"][houseClass].vehicles;
  }

  go(player) {
    const house = this.getPropertyData(player);
    _houseBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].tryToEnter(player, house);
  }

  async toggleLockStatus(player) {
    const house = this.getPropertyData(player);
    if (!this.isOwner(player, house.ownerId, true)) return;
    await this.updateProperty(house, {
      locked: !house.locked
    });
    return house.locked;
  }

  getInventorySlots(player) {
    const house = this.getPropertyData(player);
    if (!house) return;
    return _data_houses__WEBPACK_IMPORTED_MODULE_8__["default"][house.houseClass].inventory;
  }

  hasOwner(player) {
    const house = this.getPropertyData(player);
    return house && !!house.ownerId;
  }

  taxEvent() {
    const operations = [];
    this.items.forEach(house => {
      if (!house.ownerId) return;
      if (house.paidDays <= 0) return this.withdraw(house);
      operations.push({
        updateOne: {
          filter: {
            _id: house._id
          },
          update: {
            $inc: {
              paidDays: -1
            }
          }
        }
      });
      house.paidDays--;
    });
    if (operations.length) _models_House__WEBPACK_IMPORTED_MODULE_4__["default"].bulkWrite(operations);
  }

  loadHouse(data) {
    const house = _houseBuilding__WEBPACK_IMPORTED_MODULE_7__["default"].create(data);
    this.items.push(house);
  }

  async create(player, houseClass) {
    const house = new _models_House__WEBPACK_IMPORTED_MODULE_4__["default"]({
      houseClass,
      entrance: player.position
    });
    await house.save();
    this.loadHouse(house.toObject());
  }

  loadPlayerItems(player) {
    this.items.forEach(house => {
      if (!this.isOwner(player, house.ownerId)) return;
      this.changePlayerData(player, house, true);
      if (!this.isOwnedSelling(house)) this.showOwn(player, house);
      player.setVariable('spawnHouse', house.exit);
    });
  }

  getPlayerItems(player) {
    const items = [];
    this.items.forEach(house => {
      player.nearestProperty = house.index;
      if (!this.isOwner(player, house.ownerId, true)) return;
      items.push({
        index: house.index,
        type: house.houseClass,
        active: !!house.gang
      });
    });
    player.nearestProperty = null;
    return items;
  }

}

const house = new House();
mp.events.subscribeToDefault({
  databaseConnected: async () => {
    const cursor = await _models_House__WEBPACK_IMPORTED_MODULE_4__["default"].find().lean().cursor();
    let count = 0;
    cursor.on('data', data => {
      house.loadHouse(data);
      count++;
    });
    cursor.on('close', () => console.log(`Houses loaded. Count: ${count}`));
  }
});
mp.events.subscribe({
  'House-GetPlayerHouses': player => house.getPlayerItems(player)
});
/* harmony default export */ __webpack_exports__["default"] = (house);

/***/ }),

/***/ "./src/property/index.ts":
/*!*******************************!*\
  !*** ./src/property/index.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _house__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./house */ "./src/property/house/index.ts");
/* harmony import */ var _business__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business */ "./src/property/business/index.ts");

 // import './garage';

/***/ }),

/***/ "./src/property/property.ts":
/*!**********************************!*\
  !*** ./src/property/property.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Property; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_money__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/money */ "./src/helpers/money.ts");
/* harmony import */ var _gangs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gangs */ "./src/gangs/index.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/players */ "./src/utils/players.ts");







class Property {
  constructor(name, data) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "items", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "maxPlayerItems", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "sellPercent", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "taxPercent", void 0);

    this.items = [];
    this.name = name;
    this.maxPlayerItems = data.maxPlayerItems;
    this.sellPercent = data.sellPercent;
    this.taxPercent = data.taxPercent;
    this.subscribeToEvents();
  }

  get count() {
    return this.items.length;
  }

  isGangProperty(player) {
    const gang = _gangs__WEBPACK_IMPORTED_MODULE_5__["default"].get(player.gang.name);
    const data = this.getPropertyData(player);
    return gang && data.gang && data.gang.toString() === gang._id.toString();
  }

  setGang(player, index, gang) {
    player.nearestProperty = index;
    this.updateProperty(this.getPropertyData(player), {
      gang
    });
  }

  subscribeToEvents() {
    mp.events.subscribe({
      [`${this.name}-Trade`]: this.trade.bind(this),
      [`${this.name}-PayTax`]: this.payTax.bind(this),
      [`${this.name}-PutForSell`]: this.putForSell.bind(this),
      [`${this.name}-WithdrawFromSale`]: this.withdrawFromSale.bind(this)
    });
  }

  setNearestProperty(player, index) {
    player.nearestProperty = index;
  }

  getPropertyData(player) {
    const index = player.nearestProperty;
    return this.items[index];
  }

  getTax(data) {
    const price = this.getPrice(data);
    return price / 100 * this.taxPercent;
  }

  isOwner(player, ownerId, gang = false) {
    if (!player.dbId || !ownerId) return;
    return player.dbId.toString() === ownerId.toString() || gang && this.isGangProperty(player) && _gangs__WEBPACK_IMPORTED_MODULE_5__["default"].hasPremission(player, 'house');
  }

  isOwnedSelling(data) {
    return lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.customCost) && data.customCost > 0;
  }

  async putForSell(player, value) {
    const data = this.getPropertyData(player);
    const price = parseInt(value, 10);

    if (!this.isOwner(player, data.ownerId) || this.isGangProperty(player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Это имущество банды');
    }

    if (price > this.getPrice(data) * 2) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Ваше значение больше макс. суммы продажи!');
    }

    await this.updateProperty(data, {
      customCost: price,
      forSale: true
    });
    this.updateBlipSellingStatus(data, player);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].success(player, 'Операция успешна!');
    return true;
  }

  async withdrawFromSale(player) {
    const data = this.getPropertyData(player);
    if (!this.isOwner(player, data.ownerId)) return;
    await this.updateProperty(data, {
      customCost: 0,
      forSale: false
    });
    this.updateBlipSellingStatus(data, player);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].success(player, 'Операция успешна!');
    return false;
  }

  async buy(player, data) {
    try {
      if (!this.canBuy(player)) return;
      const cost = this.isOwnedSelling(data) ? data.customCost : this.getPrice(data);
      await player.moneyHelper.different(cost, 'property buy');

      if (data.ownerId) {
        const owner = Object(_utils_players__WEBPACK_IMPORTED_MODULE_6__["getPlayerByDbId"])(data.ownerId);

        if (owner) {
          await owner.moneyHelper.change(cost, 'bank', 'buying custom prop');
          this.changePlayerData(player, data, false);
        } else await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(data.ownerId, {
          $inc: {
            'money.bank': cost
          }
        });
      }

      await this.updateProperty(data, {
        ownerId: player.dbId,
        forSale: false,
        customCost: 0
      });
      this.changePlayerData(player, data, true);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].success(player, 'Операция успешна!');
    } catch (err) {
      return Promise.reject();
    }
  }

  async sell(player, data) {
    if (!this.isOwner(player, data.ownerId)) return;
    await player.moneyHelper.change(this.getSellPrice(data), 'bank', 'sell prop');
    await this.setDefaultState(data);
    this.changePlayerData(player, data, false);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].success(player, 'Операция успешна!');
  }

  async trade(player) {
    const data = this.getPropertyData(player);
    const isOwner = this.isOwner(player, data.ownerId);

    if (data.gang) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Это имущество банды');
    }

    if (data.forSale && !isOwner) await this.buy(player, data);else await this.sell(player, data);
    this.updateBlipSellingStatus(data, player);
  }

  async payTax(player, value) {
    try {
      const days = parseInt(value, 10);
      const data = this.getPropertyData(player);
      if (!data) return;

      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(days) || days < 0 || data.paidDays + days > 16) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Максимальное кол-во дней для оплаты - 16');
      }

      const tax = this.getTax(data) * days;
      await player.moneyHelper.different(tax, 'tax');
      await this.updateProperty(data, {
        paidDays: data.paidDays + days
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].success(player, 'Операция успешна!');
      return data.paidDays;
    } catch (err) {
      return Promise.reject();
    }
  }

  async withdraw(data) {
    const owner = Object(_utils_players__WEBPACK_IMPORTED_MODULE_6__["getPlayerByDbId"])(data.ownerId);
    const price = this.getSellPrice(data);
    await this.setDefaultState(data);
    if (owner) this.changePlayerData(owner, data, false);
    await _helpers_money__WEBPACK_IMPORTED_MODULE_4__["default"].changeById(data.ownerId, 'bank', price, 'withdraw house');
    this.updateBlipSellingStatus(data, owner);
  }

  async getOwnerName(data) {
    if (!data.ownerId) return '';
    const player = Object(_utils_players__WEBPACK_IMPORTED_MODULE_6__["getPlayerByDbId"])(data.ownerId);
    let name = player && player.getVariable('realName');

    if (!name) {
      const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findById(data.ownerId).select({
        _id: 0,
        firstName: 1,
        lastName: 1
      }).lean();
      name = user ? `${user.firstName} ${user.lastName}` : '';
    }

    return name;
  }

}

/***/ }),

/***/ "./src/services/airport.ts":
/*!*********************************!*\
  !*** ./src/services/airport.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _data_services_airports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/airports */ "./src/data/services/airports.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");






class Airport extends _service__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const info = {
      name: 'Аэропорт',
      entities: _data_services_airports__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 585,
        color: 26
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);
    this.subscribeToEvents();
  }

  spawn(player, id) {
    const index = mp.colshapes.at(player.colshapeId).customData;
    const position = { ..._data_services_airports__WEBPACK_IMPORTED_MODULE_3__["default"][index].stand,
      dimension: 0
    };
    _basic_vehicle__WEBPACK_IMPORTED_MODULE_2__["default"].spawnPlayerVehicle(player, id, position);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Ваше ТС успешно доставлено!');
  }

  pressedKeyOnMainShape(player) {
    if (!player.isHasLicense('air')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'У вас нет лицензии на воздушный транспорт!');
    }

    const vehicles = [];
    Object.entries(player.vehicles).forEach(([dbId, vehicle]) => vehicle.type === 'air' && vehicles.push({
      dbId,
      ...vehicle
    }));
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Airport-ShowMenu', [vehicles]);
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Airport-SpawnVehicle': (player, id) => this.spawn(player, id)
    });
  }

}

const airport = new Airport();

/***/ }),

/***/ "./src/services/appearance.ts":
/*!************************************!*\
  !*** ./src/services/appearance.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _data_services_appearance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/services/appearance */ "./src/data/services/appearance.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");








class Appearance extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Хирург',
      entities: _data_services_appearance__WEBPACK_IMPORTED_MODULE_5__["default"],
      markerData: {
        radius: 0.75
      }
    };
    super(info.name, info.entities, info.markerData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "price", void 0);

    this.price = 40000;
  }

  pressedKeyOnMainShape(player) {
    if (player.vehicle || player.faction.working) return;
    _character_clothes__WEBPACK_IMPORTED_MODULE_4__["default"].clear(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Appearance-ShowMenu', [this.price, player.appearance]);
  }

  async buy(player, appearance) {
    try {
      await player.moneyHelper.different(this.price, 'appearance');
      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          character: appearance
        }
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

}

const appearance = new Appearance();
mp.events.subscribe({
  'Appearance-Buy': (player, data) => appearance.buy(player, data)
});

/***/ }),

/***/ "./src/services/bagShop.ts":
/*!*********************************!*\
  !*** ./src/services/bagShop.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _data_services_bagShops__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/bagShops */ "./src/data/services/bagShops.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");






class BagShop extends _service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      name: 'Магазин сумок',
      entities: _data_services_bagShops__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 408,
        color: 2
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "products", void 0);

    this.products = {
      bag: {
        price: 5000,
        slots: 60
      }
    };
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'BagShop-ShowBuyerMenu', this.products);
  }

  async buy(player, name) {
    try {
      if (!name) return;
      await player.moneyHelper.different(this.products[name].price, 'bag');
      player.addToInventory({
        name,
        type: 'clothes',
        count: 1
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

}

const bagShop = new BagShop();
mp.events.subscribe({
  'BagShop-Buy': (player, name) => bagShop.buy(player, name)
});
/* harmony default export */ __webpack_exports__["default"] = (bagShop);

/***/ }),

/***/ "./src/services/bank.ts":
/*!******************************!*\
  !*** ./src/services/bank.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _data_services_bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/bank */ "./src/data/services/bank.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");







class Bank extends _service__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    const info = {
      name: 'Банк',
      entities: _data_services_bank__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 500,
        color: 2
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Bank-ShowMenu');
  }

  async getCash(player, value) {
    if (!player.cardNumber) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У вас нет банковского счета!');
    }

    await player.moneyHelper.move(value, 'bank', 'cash');
  }

  async putCash(player, value) {
    if (!player.cardNumber) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У вас нет банковского счета!');
    }

    await player.moneyHelper.move(value, 'cash', 'bank');
  }

  async sendMoney(player, value, number) {
    const cardNumber = parseInt(number, 10);
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      cardNumber: lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(cardNumber) ? cardNumber : 0
    });

    if (!user) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Неверный номер счета!');
    }

    await player.moneyHelper.transfer(parseInt(value, 10), 'bank', user._id);
  }

}

const bank = new Bank();
mp.events.subscribe({
  'Bank-GetCash': (player, value) => bank.getCash(player, value),
  'Bank-PutCash': (player, value) => bank.putCash(player, value),
  'Bank-SendMoney': (player, value, cardNumber) => bank.sendMoney(player, value, cardNumber)
});

/***/ }),

/***/ "./src/services/barberShop.ts":
/*!************************************!*\
  !*** ./src/services/barberShop.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _character_characterCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../character/characterCreator */ "./src/character/characterCreator.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _data_services_barberShops__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/services/barberShops */ "./src/data/services/barberShops.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");









class Barbershop extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Барбершоп',
      entities: _data_services_barberShops__WEBPACK_IMPORTED_MODULE_6__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 71,
        color: 9
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "standCoord", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "price", void 0);

    this.standCoord = {
      x: 402.55,
      y: -996.37,
      z: -99.01,
      rotation: 180,
      dimension: 1000
    };
    this.price = 9500;
  }

  pressedKeyOnMainShape(player) {
    if (player.vehicle || player.faction.working) return;

    if (player.model === mp.joaat('mp_m_freemode_01')) {
      player.setProp(0, 8, 0);
      player.setProp(1, 0, 0);
    } else {
      player.setProp(0, 57, 0);
      player.setProp(1, 5, 0);
    }

    player.setClothes(1, 0, 0, 0);
    player.dimension = ++this.standCoord.dimension;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'Barbershop-ShowBuyerMenu', [this.price, player.appearance]);
  }

  async buy(player, character) {
    try {
      await player.moneyHelper.different(this.price, 'bshop');
      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          character
        }
      });
      player.appearance = character;
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

}

const barbershop = new Barbershop();
mp.events.subscribe({
  'Barbershop-Buy': (player, data) => barbershop.buy(player, data),
  'Barbershop-CloseMenu': player => {
    _character_characterCreator__WEBPACK_IMPORTED_MODULE_4__["default"].loadPlayerCharacter(player, player.appearance, true);
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].load(player);
    player.dimension = 0;
  }
});

/***/ }),

/***/ "./src/services/carMarket.ts":
/*!***********************************!*\
  !*** ./src/services/carMarket.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _models_Vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Vehicle */ "./src/models/Vehicle.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _data_services_carMarkets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/services/carMarkets */ "./src/data/services/carMarkets.js");
/* harmony import */ var _data_vehicles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/vehicles */ "./src/data/vehicles.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");










class CarMarket extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Авторынок',
      entities: _data_services_carMarkets__WEBPACK_IMPORTED_MODULE_6__["default"],
      markerData: {
        radius: 2
      },
      blipData: {
        model: 498,
        color: 2
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "maxOwners", void 0);

    this.maxOwners = 5;
  }

  getMinimalPrice(player) {
    return _data_vehicles__WEBPACK_IMPORTED_MODULE_7__["default"][player.vehicle.name].price / 100 * 10;
  }

  checkPassangerCount(player) {
    return new Promise((resolve, reject) => {
      if (player.vehicle.getOccupants().length < 2) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Нужен пассажир для продажи автомобиля');
        reject();
      }

      if (player.vehicle.getOccupants().length > 2) {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Оставьте только одного пассажира');
        reject();
      }

      resolve();
    });
  }

  async showSellerMenu(player) {
    if (!_basic_vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].isOwner(player.vehicle, player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Нужно быть в своём ТС!');
    }

    await this.checkPassangerCount(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'CarMarket-ShowMenu', [player.vehicle.name, this.getMinimalPrice(player), true]);
  }

  async showBuyerMenu(player, value) {
    await this.checkPassangerCount(player);
    const buyer = player.vehicle.getOccupants()[1];
    const price = parseInt(value, 10);
    if (!mp.players.exists(buyer) || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(price)) return;

    if (price < this.getMinimalPrice(player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Ваше значение меньше мин. суммы продажи!');
    }

    const {
      vehicle
    } = player;
    vehicle.customPrice = price;
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](buyer, 'CarMarket-ShowMenu', [vehicle.name, price, false, vehicle.owners.length, this.maxOwners]);
  }

  async trade(player) {
    if (!player.vehicle) return Promise.reject();
    const seller = player.vehicle.getOccupant(-1);
    const {
      vehicle
    } = player;
    const {
      customPrice: price
    } = vehicle;

    if (!mp.players.exists(seller) || !mp.vehicles.exists(vehicle) || !_basic_vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].isOwner(vehicle, seller) || price < 0) {
      return Promise.reject();
    }

    if (vehicle.owners.length >= this.maxOwners) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Достигнут лимит владельцев у данного ТС');
      return Promise.reject();
    }

    const canBuy = await player.moneyHelper.change(-price, 'bank', 'car market buy');

    if (!canBuy) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Недостаточно средств!');
      return Promise.reject();
    }

    await seller.moneyHelper.change(price, 'bank', 'car market sell');
    player.vehicles[vehicle.dbId] = {
      name: vehicle.name,
      id: vehicle.id,
      type: _basic_vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].getType(vehicle.name),
      number: vehicle.numberPlate
    };
    delete seller.vehicles[vehicle.dbId];
    vehicle.owners.push(seller.dbId);
    await _basic_vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].setOwner(vehicle, {
      type: 'user',
      id: player.dbId
    });
    await _models_Vehicle__WEBPACK_IMPORTED_MODULE_4__["default"].findByIdAndUpdate(vehicle.dbId, {
      $push: {
        owners: seller.dbId
      }
    });
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].success(seller, 'Успешная продажа!');
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].success(player, 'Успешная покупка!');
  }

  pressedKeyOnMainShape(player) {
    if (!player.vehicle) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_8__["default"].error(player, 'Нужно быть в ТС!');
    this.showSellerMenu(player);
  }

}

const carMarket = new CarMarket();
mp.events.subscribe({
  'CarMarket-Confirm': player => carMarket.trade(player),
  'CarMarket-ShowBuyerMenu': (player, price) => carMarket.showBuyerMenu(player, price)
});

/***/ }),

/***/ "./src/services/carWash.ts":
/*!*********************************!*\
  !*** ./src/services/carWash.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _data_services_carWash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/carWash */ "./src/data/services/carWash.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _basic_vehicle_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../basic/vehicle/state */ "./src/basic/vehicle/state.ts");







class CarWash extends _service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      name: 'Автомойка',
      entities: _data_services_carWash__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 2.5
      },
      blipData: {
        model: 100,
        color: 48
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "price", void 0);

    this.price = 500;
  }

  async buy(player) {
    try {
      await player.moneyHelper.different(this.price, 'car wash');
      _basic_vehicle_state__WEBPACK_IMPORTED_MODULE_5__["default"].setDirtLevel(player.vehicle, 0);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  pressedKeyOnMainShape(player) {
    if (!player.vehicle) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'CarWash-ShowBuyerMenu', this.price);
  }

}

const carWash = new CarWash();
mp.events.subscribe({
  'CarWash-Buy': player => carWash.buy(player)
});

/***/ }),

/***/ "./src/services/casino/index.ts":
/*!**************************************!*\
  !*** ./src/services/casino/index.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");
/* harmony import */ var _slots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slots */ "./src/services/casino/slots.ts");





const exitPosition = {
  x: 935.596,
  y: 46.284,
  z: 81.095
};

class Casino extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Казино',
      entities: [exitPosition],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 617,
        color: 50
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "interiorPosition", void 0);

    this.interiorPosition = {
      x: 1089.586,
      y: 207.081,
      z: -48.99
    };
    this.createExit();
  }

  async pressedKeyOnMainShape(player) {
    try {
      player.tp(this.interiorPosition);
    } catch (err) {
      return Promise.reject();
    }
  }

  enteredMainShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы войти');
  }

  createExit() {
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.interiorPosition, 0.75, {
      onEnter: player => {
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы выйти');
      },
      onKeyPress: player => player.tp(exitPosition),
      keyName: 'E'
    });
    mp.markers.new(1, new mp.Vector3(this.interiorPosition.x, this.interiorPosition.y, this.interiorPosition.z - 1.2), 0.75, {
      color: [0, 255, 0, 60],
      visible: true
    });
  }

}

const casino = new Casino();

/***/ }),

/***/ "./src/services/casino/slots.ts":
/*!**************************************!*\
  !*** ./src/services/casino/slots.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/players */ "./src/utils/players.ts");








class CasinoSlots {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "minimalBet", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "maxBet", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "machines", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "rotations", void 0);

    this.minimalBet = 1000;
    this.maxBet = 100000;
    this.rotations = [5, 25, 45, 70, 95, 115, 160];
    this.machines = new Map();
    this.subscribeToEvents();
  }

  canOccupyMachine(player, machineId) {
    return !this.machines.has(machineId);
  }

  getRandomRotation() {
    return this.rotations[lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(0, this.rotations.length - 1)];
  }

  getAwardMultiplier(rotations) {
    let multiplier = 1;
    rotations.forEach((rotation, index, array) => {
      const count = array.filter(item => item === rotation).length;
      multiplier = count > multiplier ? count : multiplier;
    });
    return multiplier;
  }

  async moneyOperation(player, bet, multiplier) {
    if (multiplier >= 2) {
      const award = bet * multiplier;
      await player.moneyHelper.change(award, 'bank', 'casino slots award');
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, `Ваш выигрыш составил ${award}$`);
    } else {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, `Вы проиграли ${bet}$`);
    }
  }

  async spin(player, value) {
    try {
      const bet = parseInt(value, 10);
      const machine = player.getVariable('slotMachine');
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(bet) || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(machine) || bet < this.minimalBet || bet > this.maxBet) return;
      await player.moneyHelper.different(bet, 'casino slots');
      const rotations = [];

      for (let index = 0; index < 3; index++) rotations[index] = this.getRandomRotation();

      Object(_utils_players__WEBPACK_IMPORTED_MODULE_6__["getStreamedPlayers"])(player.position).forEach(item => rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](item, 'Casino-SpinSlotMachine', [machine, rotations]));
      setTimeout(() => {
        try {
          this.moneyOperation(player, bet, this.getAwardMultiplier(rotations));
          rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callBrowsers"](player, 'Casino-AllowSpin');
        } catch (err) {
          console.log(err, 'casino slots err');
        }
      }, 6000);
    } catch (err) {
      return Promise.reject();
    }
  }

  occupyMachine(player, machineId) {
    if (!this.canOccupyMachine(player, machineId)) return;
    this.machines.set(machineId, player.dbId);
    player.setVariable('slotMachine', machineId);
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_6__["getStreamedPlayers"])(player.position).forEach(item => rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](item, 'playerSitAtSlotMachine', [player, machineId]));
    _utils_animations__WEBPACK_IMPORTED_MODULE_5__["default"].setWalkingStyle(player, 'normal');
    _utils_animations__WEBPACK_IMPORTED_MODULE_5__["default"].set(player, 'casino');
    this.showMenu(player);
  }

  leaveFromMachine(player, machine) {
    this.machines.delete(machine);
    player.setVariable('slotMachine', null);
    _utils_animations__WEBPACK_IMPORTED_MODULE_5__["default"].stop(player);
  }

  showMenu(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](player, 'Casino-ShowSlotMachineMenu', [this.minimalBet, this.maxBet]);
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Casino-SpinSlotMachine': this.spin.bind(this),
      'Casino-OccupySlotMachine': this.occupyMachine.bind(this),
      'Casino-LeaveSlotMachine': this.leaveFromMachine.bind(this),
      'Casino-CanOccupyMachine': this.canOccupyMachine.bind(this)
    });
  }

}

const slots = new CasinoSlots();

/***/ }),

/***/ "./src/services/clothing-shop/clothes.ts":
/*!***********************************************!*\
  !*** ./src/services/clothing-shop/clothes.ts ***!
  \***********************************************/
/*! exports provided: male, female */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "male", function() { return male; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "female", function() { return female; });
const male = {
  masks: [[1, 20300], [2, 12069], [3, 14351], [4, 14472], [5, 19834], [6, 13119], [7, 10082], [8, 30000], [9, 14580], [10, 17420], [11, 14988], [12, 18907], [13, 10747], [14, 13196], [15, 19379], [16, 17032], [17, 18850], [18, 15421], [19, 13176], [20, 16984], [21, 17631], [22, 9812], [23, 13764], [24, 20323], [25, 13145], [26, 13365], [29, 17600], [30, 11861], [31, 20861], [32, 14418], [33, 21935], [34, 11510], [35, 18042], [37, 15365], [39, 10921], [40, 20659], [41, 11176], [42, 12854], [43, 13437], [44, 11392], [45, 15351], [47, 10047], [48, 15245], [49, 20478], [50, 20003], [51, 15014], [52, 19024], [53, 11665], [54, 21695], [55, 14186], [56, 19048], [57, 10157], [58, 14942], [59, 20692], [60, 11169], [61, 19354], [62, 14177], [63, 16406], [64, 15664], [65, 21370], [66, 14318], [67, 20473], [68, 10345], [69, 10421], [70, 13927], [71, 14003], [72, 13837], [74, 14898], [75, 12337], [76, 14757], [77, 21059], [78, 12907], [79, 9902], [80, 17396], [81, 16488], [82, 14121], [83, 50000], [84, 20903], [85, 17594], [86, 12953], [87, 40000], [88, 12610], [90, 14456], [92, 18527], [93, 15641], [94, 19436], [95, 11896], [96, 11947], [97, 16119], [98, 17958], [99, 21361], [100, 15230], [101, 13444], [103, 18146], [104, 20624], [106, 15079], [107, 13648], [108, 17701], [110, 10895], [111, 18636], [112, 13254], [113, 18818], [115, 50000], [116, 40000], [117, 11790], [118, 9914], [119, 13408], [124, 19181], [127, 12614], [128, 11579], [131, 16143], [133, 100000], [136, 16062], [137, 21741], [138, 14252], [139, 14257], [140, 12006], [141, 15580], [143, 11131], [144, 19352], [147, 20706], [149, 11334], [150, 11949], [151, 10958], [152, 20751], [153, 20294], [154, 18154], [155, 11569], [156, 15532], [157, 20915], [158, 21292], [159, 17148], [160, 20000], [161, 12524], [162, 13218], [163, 20039], [164, 15379], [165, 18182], [167, 19304], [168, 21673], [169, 20454], [170, 10545], [171, 16023], [172, 14681], [173, 13492], [174, 11311], [176, 11378], [178, 17721], [179, 11506], [180, 11741], [181, 17557], [182, 12549], [184, 15852]],
  hats: [[1, 200], [2, 400], [4, 450], [5, 350], [6, 400], [7, 400], [12, 450], [13, 500], [14, 550], [20, 500], [21, 500], [22, 40000], [23, 15000], [24, 25000], [25, 550], [26, 550], [27, 600], [28, 500], [29, 400], [30, 400], [31, 13000], [32, 14000], [33, 14000], [34, 15000], [35, 18000], [36, 20000], [37, 400], [40, 15000], [41, 15000], [42, 12000], [43, 15000], [44, 400], [45, 400], [54, 400], [55, 350], [56, 350], [64, 350], [65, 350], [66, 300], [83, 300], [94, 300], [95, 300], [96, 450], [99, 20000], [100, 25000], [101, 30000], [110, 500], [135, 10000]],
  glasses: [[2, 1000], [3, 1000], [4, 1100], [5, 2500], [7, 2000], [8, 2300], [9, 2200], [10, 5000], [12, 30000], [13, 10000], [15, 25000], [16, 20000], [17, 25000], [18, 21000], [19, 35000], [20, 13000], [21, 40000], [23, 15000], [28, 20000], [29, 28000]],
  jewerly: [[10, 10000], [12, 11000], [18, 15000], [19, 16000], [21, 18000], [22, 15000], [23, 15000], [30, 40000], [31, 40000], [32, 50000], [34, 45000], [35, 45000], [37, 15000], [38, 15000], [39, 20000], [49, 40000], [51, 45000], [52, 50000], [53, 60000], [54, 60000], [55, 65000], [85, 70000], [86, 80000], [87, 90000], [88, 100000], [89, 110000], [90, 120000], [91, 130000], [92, 80000], [93, 90000], [94, 100000], [111, 110000], [112, 32000], [114, 50000], [117, 20000], [118, 20000], [120, 80000], [122, 90000], [123, 60000], [124, 60000], [131, 80000]],
  watches: [[0, 40000], [1, 30000], [3, 35000], [4, 80000], [5, 40000], [6, 95000], [7, 30000], [8, 140000], [9, 60000], [10, 140000], [11, 120000], [12, 90000], [14, 150000], [15, 90000], [16, 175000], [17, 70000], [18, 85000], [19, 68000], [20, 59000], [31, 110000], [32, 120000], [33, 185000], [34, 210000], [35, 50000], [36, 130000], [37, 95000]],
  legs: [[0, 800], [1, 800], [3, 1200], [4, 1800], [5, 1600], [6, 1200], [7, 1700], [8, 1900], [9, 2000], [10, 2100], [12, 1400], [13, 1900], [14, 1000], [15, 1500], [16, 1500], [17, 1500], [18, 1300], [19, 2200], [20, 2200], [22, 2500], [23, 2500], [24, 2500], [25, 2500], [26, 2500], [27, 2600], [28, 2600], [29, 3000], [32, 5000], [35, 2500], [37, 2500], [42, 2000], [43, 2000], [45, 2000], [48, 2000], [49, 2000], [50, 2000], [51, 20000], [52, 5000], [53, 16000], [54, 5000], [55, 5000], [58, 6000], [60, 6000], [61, 2000], [62, 2000], [63, 2000], [64, 4000], [65, 15000], [69, 21000], [71, 6000], [73, 10000], [75, 8000], [76, 10000], [78, 8000], [79, 7000], [80, 6000], [81, 5000], [82, 5000], [96, 5000], [98, 40000], [99, 8000], [100, 14000], [102, 10000], [103, 9000], [104, 9000], [105, 8000], [116, 60000], [117, 25000], [118, 30000], [128, 10000]],
  shoes: [[1, 1000], [3, 1100], [4, 1200], [5, 700], [7, 2000], [8, 2100], [9, 2200], [10, 5000], [12, 8000], [14, 6000], [15, 9000], [16, 1000], [17, 10000], [18, 11000], [19, 12000], [20, 13000], [21, 14000], [22, 10000], [23, 13000], [26, 11000], [28, 13000], [29, 10000], [30, 10000], [31, 15000], [32, 11000], [36, 11000], [38, 15000], [40, 10000], [41, 30000], [42, 20000], [43, 25000], [45, 10000], [46, 10000], [48, 10000], [49, 10000], [51, 12000], [52, 20000], [54, 10000], [56, 10000], [57, 10000], [58, 80000], [64, 20000], [65, 15000], [66, 15000], [69, 18000], [73, 12000], [74, 12000], [75, 25000], [76, 25000], [77, 50000], [78, 19000], [89, 19000], [92, 90000], [93, 35000], [94, 35000], [95, 60000]],
  underwears: [[1, 1000], [5, 1500], [8, 3000], [9, 3000], [12, 5000], [13, 5000], [14, 5000], [16, 6000], [17, 4000], [18, 30000], [22, 5000], [26, 5000], [33, 5000], [36, 4000], [38, 5000], [39, 5000], [41, 5000], [42, 12000], [44, 8000], [47, 8000], [71, 8000], [73, 30000], [80, 10000], [81, 10000], [82, 20000], [83, 20000], [92, 15000], [93, 20000], [95, 10000], [105, 30000], [117, 30000], [123, 20000], [128, 20000], [131, 10000], [133, 10000], [135, 25000], [139, 20000], [144, 15000], [152, 8000], [164, 8000], [193, 17000], [225, 22000], [226, 23000], [235, 24000], [241, 15000], [250, 10000], [260, 40000], [271, 10000], [299, 35000], [313, 20000], [321, 10000], [323, 15000], [325, 18000], [334, 32000], [335, 41000], [337, 10000], [345, 10000], [348, 7000], [350, 45000]],
  tops: [[3, 2000], [4, 8000], [6, 5000], [7, 4000], [10, 7000], [11, 7000], [19, 10000], [20, 10000], [21, 9000], [23, 10000], [24, 10000], [25, 9000], [27, 9000], [28, 9000], [35, 12000], [37, 10000], [40, 10000], [45, 15000], [46, 15000], [57, 10000], [58, 10000], [59, 10000], [61, 8000], [62, 8000], [64, 8000], [68, 8000], [69, 8000], [70, 15000], [72, 15000], [74, 60000], [75, 60000], [76, 10000], [77, 12000], [78, 5000], [79, 8000], [84, 8000], [85, 8000], [86, 8000], [87, 6000], [88, 6000], [89, 6000], [90, 6000], [96, 10000], [106, 10000], [107, 10000], [108, 15000], [110, 15000], [111, 12000], [112, 12000], [113, 7000], [115, 10000], [116, 45000], [118, 8000], [119, 8000], [120, 8000], [121, 6000], [122, 6000], [124, 6000], [125, 8000], [126, 8000], [129, 8000], [130, 8000], [134, 6000], [136, 10000], [138, 10000], [140, 10000], [141, 10000], [142, 10000], [143, 9000], [145, 15000], [147, 12000], [148, 12000], [150, 9000], [151, 9000], [153, 9000], [154, 9000], [156, 9000], [157, 8000], [159, 8000], [160, 8000], [161, 8000], [163, 8000], [166, 8000], [167, 10000], [168, 10000], [169, 10000], [171, 10000], [172, 10000], [174, 10000], [176, 10000], [182, 10000], [184, 12000], [185, 12000], [187, 9000], [188, 10000], [189, 10000], [190, 12000], [191, 12000], [192, 12000], [194, 55000], [196, 25000], [198, 25000], [200, 10000], [203, 10000], [204, 10000], [218, 10000], [240, 40000], [244, 20000], [245, 30000], [249, 30000], [251, 40000], [254, 25000], [256, 70000], [257, 75000], [258, 10000], [259, 20000], [262, 25000], [266, 45000], [269, 25000], [270, 10000], [272, 10000], [279, 20000], [281, 25000], [288, 30000], [296, 25000], [300, 50000], [304, 80000], [305, 70000], [307, 95000], [309, 110000], [324, 20000], [326, 40000], [329, 20000], [330, 20000], [332, 15000], [336, 15000], [338, 15000], [339, 30000], [341, 20000], [344, 75000]]
};
const female = {
  masks: [[1, 20300], [2, 12069], [3, 14351], [4, 14472], [5, 19834], [6, 13119], [7, 10082], [8, 30000], [9, 14580], [10, 17420], [11, 14988], [12, 18907], [13, 10747], [14, 13196], [15, 19379], [16, 17032], [17, 18850], [18, 15421], [19, 13176], [20, 16984], [21, 17631], [22, 9812], [23, 13764], [24, 20323], [25, 13145], [26, 13365], [29, 17600], [30, 11861], [31, 20861], [32, 14418], [33, 21935], [34, 11510], [35, 18042], [37, 15365], [39, 10921], [40, 20659], [41, 11176], [42, 12854], [43, 13437], [44, 11392], [45, 15351], [47, 10047], [48, 15245], [49, 20478], [50, 20003], [51, 15014], [52, 19024], [53, 11665], [54, 21695], [55, 14186], [56, 19048], [57, 10157], [58, 14942], [59, 20692], [60, 11169], [61, 19354], [62, 14177], [63, 16406], [64, 15664], [65, 21370], [66, 14318], [67, 20473], [68, 10345], [69, 10421], [70, 13927], [71, 14003], [72, 13837], [74, 14898], [75, 12337], [76, 14757], [77, 21059], [78, 12907], [79, 9902], [80, 17396], [81, 16488], [82, 14121], [83, 50000], [84, 20903], [85, 17594], [86, 12953], [87, 40000], [88, 12610], [90, 14456], [92, 18527], [93, 15641], [94, 19436], [95, 11896], [96, 11947], [97, 16119], [98, 17958], [99, 21361], [100, 15230], [101, 13444], [103, 18146], [104, 20624], [106, 15079], [107, 13648], [108, 17701], [110, 10895], [111, 18636], [112, 13254], [113, 18818], [115, 50000], [116, 40000], [117, 11790], [118, 9914], [119, 13408], [124, 19181], [127, 12614], [128, 11579], [131, 16143], [133, 100000], [136, 16062], [137, 21741], [138, 14252], [139, 14257], [140, 12006], [141, 15580], [143, 11131], [144, 19352], [147, 20706], [149, 11334], [150, 11949], [151, 10958], [152, 20751], [153, 20294], [154, 18154], [155, 11569], [156, 15532], [157, 20915], [158, 21292], [159, 17148], [160, 20000], [161, 12524], [162, 13218], [163, 20039], [164, 15379], [165, 18182], [167, 19304], [168, 21673], [169, 20454], [170, 10545], [171, 16023], [172, 14681], [173, 13492], [174, 11311], [176, 11378], [178, 17721], [179, 11506], [180, 11741], [181, 17557], [182, 12549], [184, 15852]],
  hats: [[1, 400], [4, 450], [5, 450], [7, 450], [9, 450], [12, 450], [13, 450], [14, 450], [20, 800], [21, 800], [22, 800], [23, 40000], [24, 40000], [25, 45000], [28, 1000], [29, 800], [30, 10000], [31, 15000], [32, 20000], [33, 20000], [34, 25000], [35, 30000], [36, 5000], [39, 10000], [40, 10000], [41, 15000], [42, 2000], [43, 900], [44, 900], [53, 900], [54, 1000], [55, 1000], [56, 1000], [64, 1000], [65, 1000], [93, 1000], [94, 1000], [95, 1500], [96, 20000], [97, 20000], [98, 25000], [99, 25000], [100, 30000], [108, 1000], [134, 20000]],
  glasses: [[0, 1000], [1, 4000], [2, 4500], [3, 6000], [4, 6500], [6, 10000], [7, 4000], [8, 2500], [9, 5000], [10, 3000], [11, 2800], [14, 5200], [16, 12000], [17, 2000], [18, 4000], [19, 5000], [20, 3500], [21, 4000], [22, 40000], [24, 3500], [25, 5000], [30, 8000], [31, 22000]],
  jewerly: [[6, 60000], [7, 22000], [9, 15000], [11, 28000], [12, 45000], [15, 20000], [17, 35000], [20, 12000], [21, 13000], [22, 15000], [23, 18000], [36, 18000], [37, 55000], [38, 40000], [39, 35000], [40, 40000], [41, 45000], [42, 50000], [53, 50000], [54, 60000], [55, 70000], [56, 80000], [57, 90000], [58, 100000], [59, 110000], [60, 120000], [61, 130000], [62, 140000], [64, 80000], [65, 90000], [66, 100000], [67, 110000], [68, 120000], [69, 130000], [70, 140000], [71, 150000], [72, 160000], [73, 170000], [82, 70000], [83, 30000], [85, 30000], [86, 20000], [87, 22000], [90, 65000], [92, 75000], [93, 40000], [94, 50000], [99, 60000]],
  watches: [[2, 65000], [3, 70000], [4, 30000], [5, 80000], [6, 60000], [7, 20000], [8, 35000], [9, 30000], [10, 55000], [19, 110000], [20, 140000], [21, 160000], [22, 170000], [23, 100000], [24, 50000], [25, 40000], [26, 70000]],
  legs: [[0, 800], [1, 900], [2, 1000], [3, 1100], [4, 1200], [6, 1300], [7, 1500], [8, 1600], [9, 10000], [10, 2000], [11, 2100], [12, 4000], [14, 3500], [15, 1000], [16, 4000], [17, 1100], [18, 1200], [19, 5000], [20, 20000], [23, 10000], [24, 8000], [25, 5000], [26, 7000], [27, 8000], [28, 10000], [30, 5000], [31, 6000], [34, 6000], [36, 4000], [43, 8000], [44, 9000], [50, 10000], [51, 8000], [52, 10000], [53, 20000], [54, 8000], [55, 15000], [56, 2000], [60, 6000], [62, 5000], [63, 12000], [65, 15000], [67, 12000], [71, 22000], [73, 11000], [74, 12000], [78, 13000], [80, 11000], [82, 11000], [87, 21000], [101, 15000], [103, 11000], [104, 22000], [106, 13000], [107, 6000], [108, 15000], [123, 9000], [124, 18000]],
  shoes: [[0, 1000], [1, 1000], [2, 1500], [3, 1200], [4, 1200], [5, 700], [6, 1200], [7, 2000], [8, 3000], [10, 2500], [11, 3000], [13, 2500], [14, 3500], [15, 4000], [16, 800], [17, 25000], [19, 5000], [20, 8000], [22, 7000], [23, 15000], [27, 5000], [28, 3000], [29, 7000], [30, 12000], [31, 21000], [32, 12000], [37, 6000], [42, 13000], [43, 25000], [44, 28000], [47, 5000], [49, 7000], [50, 7000], [60, 7000], [61, 79999], [67, 8000], [68, 8000], [69, 8000], [77, 18000], [78, 6000], [79, 12000], [80, 11000], [81, 50000], [96, 20000], [97, 19000], [98, 90000], [99, 60000]],
  underwears: [[0, 1000], [5, 1000], [9, 1500], [11, 2000], [13, 2500], [14, 4000], [15, 1000], [16, 2000], [17, 20000], [18, 1500], [19, 30000], [22, 8000], [23, 1800], [26, 2000], [27, 2100], [30, 2100], [32, 3000], [33, 3000], [36, 3200], [38, 3200], [40, 3200], [49, 3200], [67, 3200], [68, 25000], [73, 3000], [74, 3500], [75, 4000], [76, 5000], [83, 5000], [84, 6000], [86, 6000], [88, 6000], [96, 30000], [101, 2000], [105, 12000], [109, 8000], [111, 6000], [117, 5000], [119, 5000], [125, 5000], [128, 5000], [130, 5000], [132, 28000], [136, 8000], [141, 8000], [142, 16000], [149, 10000], [161, 10000], [171, 19000], [173, 21000], [208, 21000], [235, 23000], [246, 16000], [249, 14000], [269, 28000], [279, 2500], [280, 14000], [283, 8000], [284, 12000], [310, 29000], [321, 40000], [324, 27000], [335, 15000], [337, 16000], [349, 16000], [359, 16000], [368, 60000], [369, 45000]],
  tops: [[1, 2000], [3, 2000], [6, 10000], [7, 10000], [8, 8000], [10, 6000], [20, 12000], [21, 12000], [24, 12000], [25, 12000], [31, 8000], [34, 8000], [35, 10000], [37, 15000], [44, 45000], [45, 5000], [50, 6000], [51, 10000], [53, 10000], [54, 6000], [55, 8000], [58, 8000], [63, 9000], [64, 15000], [65, 22000], [66, 15000], [69, 20000], [70, 15000], [71, 10000], [72, 8000], [77, 8000], [78, 8000], [80, 8000], [81, 8000], [87, 10000], [90, 10000], [91, 10000], [92, 15000], [95, 30000], [97, 20000], [98, 10000], [99, 19000], [102, 15000], [103, 10000], [104, 10000], [106, 8000], [107, 20000], [108, 55000], [110, 13000], [112, 12000], [113, 14000], [114, 16000], [115, 18000], [116, 25000], [121, 15000], [122, 15000], [127, 19000], [131, 12000], [133, 12000], [135, 12000], [137, 12000], [138, 12000], [139, 22000], [140, 20000], [143, 25000], [144, 20000], [145, 20000], [147, 20000], [148, 18000], [150, 18000], [151, 18000], [153, 18000], [156, 18000], [158, 18000], [160, 18000], [163, 18000], [164, 18000], [165, 18000], [166, 18000], [172, 16000], [174, 16000], [178, 16000], [183, 16000], [184, 16000], [185, 20000], [187, 17000], [189, 17000], [190, 17000], [192, 12000], [193, 13000], [194, 13000], [196, 50000], [198, 32000], [200, 33000], [202, 12000], [206, 12000], [228, 12000], [240, 12000], [242, 12000], [248, 25000], [253, 28000], [259, 30000], [265, 70000], [266, 75000], [267, 15000], [268, 20000], [271, 25000], [275, 28000], [278, 30000], [292, 25000], [301, 30000], [307, 20000], [309, 25000], [314, 50000], [315, 90000], [316, 52000], [318, 80000], [319, 11000], [320, 110000], [322, 68000], [323, 88000], [341, 15000], [344, 10000], [345, 10000], [353, 10000], [354, 20000], [363, 72000], [365, 32000]]
};

/***/ }),

/***/ "./src/services/clothing-shop/index.ts":
/*!*********************************************!*\
  !*** ./src/services/clothing-shop/index.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _data_services_clothingShops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/services/clothingShops */ "./src/data/services/clothingShops.js");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _clothes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clothes */ "./src/services/clothing-shop/clothes.ts");







 // import './price';

class ClothingShop extends _service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      name: 'Магазин одежды',
      entities: _data_services_clothingShops__WEBPACK_IMPORTED_MODULE_4__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 73,
        color: 73
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "standDimension", void 0);

    this.standDimension = 1000;
  }

  getClothesOfGender(player) {
    return player.isMale() ? _clothes__WEBPACK_IMPORTED_MODULE_7__["male"] : _clothes__WEBPACK_IMPORTED_MODULE_7__["female"];
  }

  getPrice(clothes, type, index) {
    return clothes[type][index][1];
  }

  getItemForInventory(player, clothes, data) {
    const {
      type: name,
      index,
      color
    } = data;
    const style = clothes[name][index][0];
    return {
      name,
      type: 'clothes',
      used: true,
      gender: player.gender,
      style,
      color
    };
  }

  async buyThing(player, product) {
    try {
      const {
        type: name
      } = product;
      const clothes = this.getClothesOfGender(player);
      const price = this.getPrice(clothes, name, product.index);
      await player.moneyHelper.different(price, 'clothes');
      const item = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_5__["default"].getItem(player.inventory, name);
      if (item) _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_5__["default"].removeItem(player.inventory, item);
      const thing = this.getItemForInventory(player, clothes, product);
      await player.addToInventory(thing);
      _character_clothes__WEBPACK_IMPORTED_MODULE_3__["default"].set(player, name, thing);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Успешная покупка');
    } catch (err) {
      return Promise.reject();
    }
  }

  pressedKeyOnMainShape(player) {
    if (player.vehicle || player.faction.working) return;
    player.dimension = ++this.standDimension;
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'ClothingShop-ShowBuyerMenu', this.getClothesOfGender(player));
  }

}

const clothingShop = new ClothingShop();
mp.events.subscribe({
  'ClothingShop-SetItem': _character_clothes__WEBPACK_IMPORTED_MODULE_3__["default"].set,
  'ClothingShop-GetClothes': (player, type) => {
    const items = player.isMale() ? _clothes__WEBPACK_IMPORTED_MODULE_7__["male"] : _clothes__WEBPACK_IMPORTED_MODULE_7__["female"];
    return items[type];
  },
  'ClothingShop-Buy': (player, data) => clothingShop.buyThing(player, data),
  'ClothingShop-CloseMenu': player => {
    player.dimension = 0;
    _character_clothes__WEBPACK_IMPORTED_MODULE_3__["default"].load(player);
  }
});

/***/ }),

/***/ "./src/services/fishing/data.ts":
/*!**************************************!*\
  !*** ./src/services/fishing/data.ts ***!
  \**************************************/
/*! exports provided: locations, fishList, levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locations", function() { return locations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fishList", function() { return fishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levels", function() { return levels; });
const locations = [{
  x: -1256.4078369140625,
  y: 4378.82373046875,
  z: 4.243556976318359,
  radius: 18,
  level: 1
}, {
  x: -1214.171142578125,
  y: 4392.4208984375,
  z: 8.165022850036621,
  radius: 18,
  level: 1
}, {
  x: -536.6519775390625,
  y: 2924.71533203125,
  z: 14.13345718383789,
  radius: 18,
  level: 1
}, {
  x: 2036.510498046875,
  y: 4222.33056640625,
  z: 97.13554382324219,
  radius: 150,
  level: 2
}, {
  x: 1195.7783203125,
  y: 3999.5146484375,
  z: 83.49668884277344,
  radius: 150,
  level: 2
}, {
  x: -1449.1395263671875,
  y: 5840.072265625,
  z: 3.423810005187988,
  radius: 350,
  level: 3
}, {
  x: 4292.72265625,
  y: 4810.630859375,
  z: 3.211575746536255,
  radius: 350,
  level: 3
}];
const fishList = {
  perch: 'Окунь',
  eel: 'Угорь',
  pike: 'Щука',
  trout: 'Форель',
  salmon: 'Лосось',
  sturgeon: 'Осётр',
  zander: 'Судак',
  catfish: 'Сом',
  stingray: 'Морской скат',
  tuna: 'Тунец',
  fugu: 'Фугу'
};
const levels = [{
  points: 0,
  fish: {
    perch: 40,
    pike: 30,
    eel: 20,
    trout: 10
  }
}, {
  points: 1500,
  fish: {
    perch: 30,
    zander: 20,
    pike: 15,
    catfish: 15,
    trout: 10,
    sturgeon: 10
  }
}, {
  points: 5000,
  fish: {
    eel: 40,
    tuna: 30,
    salmon: 15,
    stingray: 10,
    fugu: 5
  }
}];

/***/ }),

/***/ "./src/services/fishing/index.ts":
/*!***************************************!*\
  !*** ./src/services/fishing/index.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var math_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! math-random */ "math-random");
/* harmony import */ var math_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(math_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _helpers_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/objects */ "./src/helpers/objects.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _jobs_levels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../jobs/levels */ "./src/jobs/levels.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data */ "./src/services/fishing/data.ts");











class Fishing extends _service__WEBPACK_IMPORTED_MODULE_8__["default"] {
  constructor() {
    super('Рыбалка', _data__WEBPACK_IMPORTED_MODULE_9__["locations"], null, {
      model: 68,
      color: 30
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "levels", void 0);

    this.levels = new _jobs_levels__WEBPACK_IMPORTED_MODULE_7__["default"](this.name, _data__WEBPACK_IMPORTED_MODULE_9__["levels"].map(({
      points
    }) => ({
      points,
      salary: 0
    })), 1);
    mp.events.subscribe({
      'Fishing-Success': this.takeFish.bind(this),
      'Fishing-Drop': this.stopFishing.bind(this)
    });
  }

  async pressedKeyOnMainShape(player) {
    const canStart = await rage_rpc__WEBPACK_IMPORTED_MODULE_1___default.a.callClient(player, 'Phone-CanOpen');
    if (player.vehicle || !canStart) return;

    if (this.isAlreadyFishing(player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Вы уже рыбачите');
    }

    const location = this.getCurrentLocation(player);
    const jobLevel = this.levels.getLevelNumber(this.levels.getCurrentLevel(player));

    if (location.level > jobLevel) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, `Для этого места нужен ${location.level}й уровень`);
    }

    const rod = player.inventory.find(item => item.type === 'rod');
    if (!rod) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'У вас нет удочки');
    const bait = player.inventory.find(item => item.name === 'fish_bait');
    if (!(bait === null || bait === void 0 ? void 0 : bait.count)) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'У вас нет наживки');
    await this.startFishing(player, rod, bait);
  }

  isAlreadyFishing(player) {
    return _helpers_objects__WEBPACK_IMPORTED_MODULE_5__["default"].hasObject(player, 'rod');
  }

  getCurrentLocation(player) {
    var _mp$colshapes$at;

    const index = (_mp$colshapes$at = mp.colshapes.at(player.colshapeId)) === null || _mp$colshapes$at === void 0 ? void 0 : _mp$colshapes$at.customData;
    return _data__WEBPACK_IMPORTED_MODULE_9__["locations"][index];
  }

  enteredMainShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы закинуть удочку');
  }

  onExitShape(player) {
    if (this.isAlreadyFishing(player)) {
      this.stopFishing(player);
      rage_rpc__WEBPACK_IMPORTED_MODULE_1___default.a.callClient(player, 'Fishing-HideMinigame');
    }
  }

  async startFishing(player, rod, bait) {
    await this.useTools(player, rod, bait);
    const waitTime = (Math.floor(math_random__WEBPACK_IMPORTED_MODULE_2___default()() * 10) + 20) * 1000;
    player.timeout(() => this.showMinigame(player), waitTime);
  }

  showMinigame(player) {
    if (!this.isAlreadyFishing(player)) return;
    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["default"].playOnServer(player, 'fishing_take');
    rage_rpc__WEBPACK_IMPORTED_MODULE_1___default.a.callClient(player, 'Fishing-ShowMinigame');
  }

  stopFishing(player) {
    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["default"].stopOnServer(player);
    _helpers_objects__WEBPACK_IMPORTED_MODULE_5__["default"].detach(player);
  }

  async useTools(player, rod, bait) {
    await _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__["default"].decItemCount(player, player.inventory, bait);
    rod.capacity -= 1;
    if (rod.capacity <= 0) await _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__["default"].removeItem(player.inventory, rod);else if (rod.capacity <= 3) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, `Вашей удочки хватит ещё на ${rod.capacity} раз`);
    }
    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["default"].playOnServer(player, 'fishing_wait');
    _helpers_objects__WEBPACK_IMPORTED_MODULE_5__["default"].attach(player, 'rod');
  }

  async takeFish(player) {
    const location = this.getCurrentLocation(player);
    if (!location || !this.isAlreadyFishing(player)) return Promise.reject();
    const fish = this.getRandomFishByLevel(location.level);
    await player.addToInventory({
      name: fish,
      type: 'fish',
      count: 1
    });
    await this.levels.giveAward(player);
    const level = this.levels.getCurrentLevel(player);
    const points = this.levels.getCurrentPoints(player);
    const jobLevel = this.levels.getLevelNumber(level);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].info(player, `Вы вытащили рыбу "${_data__WEBPACK_IMPORTED_MODULE_9__["fishList"][fish]}". Текущий уровень: ${jobLevel}. Всего поймано: ${points}`);
    this.stopFishing(player);
  }

  getRandomFishByLevel(level) {
    const randomValue = math_random__WEBPACK_IMPORTED_MODULE_2___default()();
    const items = Object.entries(_data__WEBPACK_IMPORTED_MODULE_9__["levels"][level - 1].fish).filter(([, chance]) => chance / 100 > randomValue);
    if (!items.length) return this.getRandomFishByLevel(level);
    const fish = items[Math.floor(math_random__WEBPACK_IMPORTED_MODULE_2___default()() * items.length)];
    return fish[0];
  }

}

const job = new Fishing();

/***/ }),

/***/ "./src/services/fishing/shop.ts":
/*!**************************************!*\
  !*** ./src/services/fishing/shop.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");





class FishingShop extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Рыбацкий магазин',
      entities: [{
        x: -2193.079,
        y: 4286.591,
        z: 49.175
      }],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 356,
        color: 30
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "products", void 0);

    this.products = {
      rod: {
        type: 'rod',
        price: 1000,
        capacity: 10
      },
      rod_mk2: {
        type: 'rod',
        price: 2500,
        capacity: 20
      },
      rod_special: {
        type: 'rod',
        price: 7000,
        capacity: 50
      },
      fish_bait: {
        type: 'tools',
        price: 700,
        capacity: 10
      }
    };
    mp.events.subscribe({
      'FishingShop-Buy': this.buy.bind(this)
    });
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'FishingShop-ShowBuyerMenu', this.products);
  }

  async buy(player, name) {
    const product = this.products[name];
    if (!product) return;
    await player.moneyHelper.different(product.price, 'fishing shop');
    await player.addToInventory({
      name,
      type: product.type,
      count: 1,
      ...(product.type === 'rod' ? {
        capacity: product.capacity
      } : {
        count: product.capacity
      })
    });
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].success(player, 'Успешная покупка!');
  }

}

const shop = new FishingShop();

/***/ }),

/***/ "./src/services/foodShop.ts":
/*!**********************************!*\
  !*** ./src/services/foodShop.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eatFood; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_services_foodShops__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/foodShops */ "./src/data/services/foodShops.js");
/* harmony import */ var _basic_player_hunger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basic/player/hunger */ "./src/basic/player/hunger.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");








class FoodShop extends _service__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor() {
    const info = {
      name: 'Магазин еды',
      entities: _data_services_foodShops__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 52,
        color: 25
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      burger: 150,
      noodles: 140,
      donut: 10,
      potato: 15,
      hotDog: 60,
      kebab: 200,
      pizza: 40,
      taco: 30,
      coffee: 5,
      soda: 5,
      cola: 5
    };
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'FoodShop-ShowBuyerMenu', this.prices);
  }

  getFinalPrice(products) {
    let finalPrice = 0;

    for (const name in products) {
      if (products[name] > 0) {
        const price = this.prices[name];
        finalPrice += price * products[name];
      }
    }

    return finalPrice;
  }

  async buy(player, products) {
    try {
      const cost = parseInt(this.getFinalPrice(products), 10);
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(cost) || cost < 0) return Promise.reject(new Error());
      await player.moneyHelper.different(cost, 'food');

      for (const name in products) {
        if (products[name] || products[name] < 0) {
          player.addToInventory({
            name,
            type: 'food',
            count: products[name]
          });
        }
      }

      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

}

const foodShop = new FoodShop();
mp.events.subscribe({
  'FoodShop-Buy': (player, data) => foodShop.buy(player, data)
});
function eatFood(player, name) {
  const food = {
    burger: 100,
    noodles: 90,
    donut: 5,
    potato: 10,
    hotDog: 70,
    kebab: 100,
    pizza: 60,
    taco: 25,
    beer: 5,
    coffee: 3,
    soda: 3,
    cola: 3,
    'orange-juice': 3,
    'pineapple-juice': 5
  };
  const satiety = player.hunger + food[name] <= 100 ? player.hunger + food[name] : 100;
  _basic_player_hunger__WEBPACK_IMPORTED_MODULE_4__["default"].updatePlayerHunger(player, satiety);
}

/***/ }),

/***/ "./src/services/gangCreator.ts":
/*!*************************************!*\
  !*** ./src/services/gangCreator.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _data_services_gangCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/gangCreator */ "./src/data/services/gangCreator.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _gangs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gangs */ "./src/gangs/index.ts");







class GangCreator extends _service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      name: 'Решала',
      entities: _data_services_gangCreator__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 525,
        color: 60
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "creatingPrice", void 0);

    this.creatingPrice = 10000000;
    this.subsribeToEvents();
  }

  async buy(player, name) {
    try {
      if (_gangs__WEBPACK_IMPORTED_MODULE_5__["default"].isAlreadyExists(name)) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Банда с данным названием уже существует!');
      }

      await player.moneyHelper.different(this.creatingPrice, 'gang');
      await _gangs__WEBPACK_IMPORTED_MODULE_5__["default"].create(player, name);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  pressedKeyOnMainShape(player) {
    if (player.faction.name || player.gang.name) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Вы уже состоите в организации!');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'GangCreator-ShowBuyerMenu', this.creatingPrice);
  }

  subsribeToEvents() {
    mp.events.subscribe({
      'GangCreator-Buy': this.buy.bind(this)
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new GangCreator());

/***/ }),

/***/ "./src/services/gasStation.ts":
/*!************************************!*\
  !*** ./src/services/gasStation.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _data_services_gasStations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/services/gasStations */ "./src/data/services/gasStations.js");
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _basic_vehicle_fuel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basic/vehicle/fuel */ "./src/basic/vehicle/fuel.ts");









class GasStation extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'АЗС',
      entities: _data_services_gasStations__WEBPACK_IMPORTED_MODULE_4__["default"],
      markerData: {
        radius: 2.5
      },
      blipData: {
        model: 361,
        color: 78
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      liter: 20,
      jerrycan: 600
    };
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'GasStation-ShowDialog', this.prices);
  }

  useJerrycan(player, jerrycans) {
    if (player.vehicle) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Выйдите из ТС, чтобы использовать данный предмет');
    }

    const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_5__["getNearestVehicleInRange"])(player.position, 3.2);

    if (vehicle) {
      _basic_vehicle_fuel__WEBPACK_IMPORTED_MODULE_7__["default"].fillUp(vehicle, vehicle.getVariable('maxFuel') / 1.5);
      jerrycans.count--;
    }
  }

  async buyJerrycan(player, value) {
    try {
      const count = parseInt(value, 10);
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(count) || count < 0) return;
      await player.moneyHelper.different(this.prices.jerrycan * count, 'jerrycan');
      await player.addToInventory({
        count,
        type: 'others',
        name: 'jerrycan'
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  async fillUp(player, value) {
    try {
      if (!player.isDriver()) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Сядьте на водительское место!');
      }

      const liters = parseInt(value, 10);
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(liters) || liters < 0) return;
      const cost = liters * this.prices.liter;
      await player.moneyHelper.different(cost, 'fuel');
      _basic_vehicle_fuel__WEBPACK_IMPORTED_MODULE_7__["default"].fillUp(player.vehicle, liters);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Вы успешно заправились');
    } catch (err) {
      return Promise.reject();
    }
  }

  async buy(player, liters, jerrycans) {
    if (jerrycans) await this.buyJerrycan(player, jerrycans);
    if (liters) await this.fillUp(player, liters);
  }

}

const gasStation = new GasStation();
mp.events.subscribe({
  'GasStation-Buy': (player, liters, jerrycans) => {
    gasStation.buy(player, liters, jerrycans);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (gasStation);

/***/ }),

/***/ "./src/services/illegalMarket.ts":
/*!***************************************!*\
  !*** ./src/services/illegalMarket.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _data_services_illegalMarkets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/services/illegalMarkets */ "./src/data/services/illegalMarkets.js");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _basic_vehicle_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../basic/vehicle/state */ "./src/basic/vehicle/state.ts");










class IllegalMarket extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Барыга',
      entities: _data_services_illegalMarkets__WEBPACK_IMPORTED_MODULE_5__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 543,
        color: 56
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      lockPick: 500,
      sack: 1000,
      rope: 500
    };
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'IllegalMarket-ShowBuyerMenu', this.prices);
  }

  getFinalPrice(items) {
    let finalPrice = 0;

    for (const name in items) {
      if (items[name] || items[name] < 0) {
        const price = this.prices[name];
        finalPrice += price * items[name];
      }
    }

    return finalPrice;
  }

  async buy(player, things) {
    try {
      const cost = parseInt(this.getFinalPrice(things), 10);
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(cost) || cost < 0) return Promise.reject();
      await player.moneyHelper.different(cost, 'illegal market');

      for (const name in things) {
        if (things[name]) {
          player.addToInventory({
            name,
            type: 'others',
            count: things[name]
          });
        }
      }

      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  useLockPick(player, items) {
    const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_4__["getNearestVehicleInRange"])(player.position, 3);
    if (player.vehicle || !vehicle || vehicle.dbId || !_basic_vehicle_state__WEBPACK_IMPORTED_MODULE_8__["default"].get(vehicle).locked) return;
    items.count--;
    player.playAnimation('mini@cpr@char_a@cpr_str', 'cpr_success', 1, 33);
    player.timeout(() => {
      _basic_vehicle_state__WEBPACK_IMPORTED_MODULE_8__["default"].setLockStatus(vehicle, false);
      player.stopAnimation();
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].success(player, 'Машина успешно взломана');
      _basic_prison__WEBPACK_IMPORTED_MODULE_6__["default"].addViolation(player, 1.3);
      mp.events.call('playerUnlockVehicle', player, vehicle);
    }, 15000);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].info(player, 'Щас... ещё немножко....');
  }

}

const illegalMarket = new IllegalMarket();
mp.events.subscribe({
  'IllegalMarket-Buy': (player, basket) => illegalMarket.buy(player, basket)
});
/* harmony default export */ __webpack_exports__["default"] = (illegalMarket);

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank */ "./src/services/bank.ts");
/* harmony import */ var _clothing_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clothing-shop */ "./src/services/clothing-shop/index.ts");
/* harmony import */ var _barberShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barberShop */ "./src/services/barberShop.ts");
/* harmony import */ var _foodShop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foodShop */ "./src/services/foodShop.ts");
/* harmony import */ var _weaponShop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weaponShop */ "./src/services/weaponShop.ts");
/* harmony import */ var _appearance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appearance */ "./src/services/appearance.ts");
/* harmony import */ var _pharmacy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pharmacy */ "./src/services/pharmacy.ts");
/* harmony import */ var _lsCustoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lsCustoms */ "./src/services/lsCustoms.ts");
/* harmony import */ var _carWash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carWash */ "./src/services/carWash.ts");
/* harmony import */ var _vehicleSell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicleSell */ "./src/services/vehicleSell.ts");
/* harmony import */ var _vehicleRepair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicleRepair */ "./src/services/vehicleRepair.ts");
/* harmony import */ var _vehicle_rent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vehicle-rent */ "./src/services/vehicle-rent/index.ts");
/* harmony import */ var _carMarket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carMarket */ "./src/services/carMarket.ts");
/* harmony import */ var _gasStation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gasStation */ "./src/services/gasStation.ts");
/* harmony import */ var _bagShop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bagShop */ "./src/services/bagShop.ts");
/* harmony import */ var _illegalMarket__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./illegalMarket */ "./src/services/illegalMarket.ts");
/* harmony import */ var _nightClub__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nightClub */ "./src/services/nightClub.ts");
/* harmony import */ var _tattooParlor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tattooParlor */ "./src/services/tattooParlor.ts");
/* harmony import */ var _gangCreator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gangCreator */ "./src/services/gangCreator.ts");
/* harmony import */ var _selling_illegal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./selling/illegal */ "./src/services/selling/illegal.ts");
/* harmony import */ var _selling_legal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./selling/legal */ "./src/services/selling/legal.ts");
/* harmony import */ var _selling_fish__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./selling/fish */ "./src/services/selling/fish.ts");
/* harmony import */ var _processing_illegal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./processing/illegal */ "./src/services/processing/illegal.ts");
/* harmony import */ var _processing_legal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./processing/legal */ "./src/services/processing/legal.ts");
/* harmony import */ var _casino__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./casino */ "./src/services/casino/index.ts");
/* harmony import */ var _pier__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pier */ "./src/services/pier.ts");
/* harmony import */ var _airport__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./airport */ "./src/services/airport.ts");
/* harmony import */ var _vehicle_shop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./vehicle-shop */ "./src/services/vehicle-shop/index.ts");
/* harmony import */ var _fishing__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fishing */ "./src/services/fishing/index.ts");
/* harmony import */ var _fishing_shop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fishing/shop */ "./src/services/fishing/shop.ts");































/***/ }),

/***/ "./src/services/lsCustoms.ts":
/*!***********************************!*\
  !*** ./src/services/lsCustoms.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isNull */ "lodash/isNull");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _models_Vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Vehicle */ "./src/models/Vehicle.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _data_vehicles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/vehicles */ "./src/data/vehicles.ts");
/* harmony import */ var _data_services_lsCustoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/services/lsCustoms */ "./src/data/services/lsCustoms.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");




/* eslint-disable @typescript-eslint/camelcase */








class LsCustoms extends _service__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    super('Los Santos Customs', _data_services_lsCustoms__WEBPACK_IMPORTED_MODULE_8__["default"], {
      radius: 2.5
    }, {
      model: 72,
      color: 4
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "standCoord", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "multipliers", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "buyCustomNumberText", async (player, text) => {
      const price = this.prices.numbers.text;

      if (text.trim().length < 4) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].error(player, 'Минимальная длина номерного знака 4 символа!');
      }

      const isExists = await _models_Vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
        numberPlate: text
      });

      if (isExists) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].error(player, 'Данный номерной знак уже зарегистрирован');
      }

      const canBuy = await player.moneyHelper.change(-price, 'drivepoints', 'lsc number');

      if (!canBuy) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].error(player, 'Недостаточно средств!');
      }

      await _basic_vehicle__WEBPACK_IMPORTED_MODULE_6__["default"].setNumberPlate(player.vehicle, text);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].success(player, 'Операция успешна!');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "buyTuning", async (player, type, subtype, model, color) => {
      try {
        const {
          vehicle
        } = player;

        if (!vehicle || !_basic_vehicle__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(vehicle, player)) {
          return Promise.reject(new Error());
        }

        const cost = this.getPrice(vehicle, type, subtype, model);
        await player.moneyHelper.different(cost, 'tuning');
        const tuning = this.setTuning(vehicle, type, subtype, model, color);
        await _models_Vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].findByIdAndUpdate(vehicle.dbId, {
          $set: {
            tuning
          }
        });
        vehicle.setVariable('tuning', tuning);
        _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].success(player, 'Успешная покупка!');
        return tuning;
      } catch (err) {
        return Promise.reject(new Error());
      }
    });

    this.standCoord = {
      x: -210.2097930908203,
      y: -1325.9105224609375,
      z: 30.453493118286133
    };
    this.prices = {
      armour: {
        '-1': 500,
        0: 200000,
        1: 500000,
        2: 1000000,
        3: 2000000,
        4: 3500000
      },
      engine: {
        '-1': 3000,
        0: 10000,
        1: 40000,
        2: 80000,
        3: 160000
      },
      turbo: {
        '-1': 3000,
        0: 150000
      },
      horn: 5000,
      transmission: {
        '-1': 3000,
        0: 10000,
        1: 40000,
        2: 80000
      },
      glasses: {
        0: 1000,
        1: 5000,
        2: 2500,
        3: 1500
      },
      suspention: {
        '-1': 3000,
        0: 10000,
        1: 30000,
        2: 60000,
        3: 80000
      },
      brakes: {
        '-1': 3000,
        0: 10000,
        1: 40000,
        2: 80000
      },
      lights: 5000,
      neon: {
        '-1': 500,
        0: 8000,
        1: 8000,
        2: 10000,
        3: 10000,
        4: 40000,
        color: 10000
      },
      numbers: {
        color: 5000,
        text: 1900
      },
      wheels: {
        model: 25000,
        color: 15000,
        smoke: 25000,
        tyres: {
          0: 500,
          1: 30000
        }
      },
      paint: {
        primary: 15000,
        secondary: 20000,
        type: 15000
      },
      spoiler: 20000,
      bumpers: 40000,
      sideskirt: 15000,
      exhaust: 40000,
      frame: 20000,
      grille: 18000,
      hood: 30000,
      roof: 50000,
      livery: 40000
    };
    this.multipliers = {
      armour: 2,
      engine: 2,
      turbo: 2,
      horn: 0,
      transmission: 2,
      glasses: 0.5,
      suspention: 2,
      brakes: 2,
      lights: 0.5,
      neon: 0.5,
      numbers: 0,
      wheels: 0,
      paint: 0.5,
      spoiler: 0.5,
      bumpers: 0.5,
      sideskirt: 0.5,
      exhaust: 0.5,
      frame: 0.5,
      grille: 0.5,
      hood: 0.5,
      roof: 0.5,
      livery: 0.5
    };
  }

  getPricesWithMargin(vehicle) {
    const prices = {};
    Object.entries(this.prices).forEach(([name, data]) => {
      prices[name] = {};
      if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data)) prices[name] = this.getPrice(vehicle, name, null, 0);else {
        Object.entries(data).forEach(([subtype, price]) => {
          if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(price)) {
            prices[name][subtype] = this.getPrice(vehicle, name, subtype, +subtype);
          } else prices[name][subtype] = price;
        });
      }
    });
    return prices;
  }

  getPrice(vehicle, type, subtype, model) {
    var _ref, _vehicleList;

    let cost = 0;

    if (type === 'wheels' && subtype === 'tyres') {
      cost = this.prices[type][subtype][model];
    } else if (type === 'wheels' || type === 'paint' || subtype === 'color' || type === 'transmission' && subtype === 'type') {
      cost = this.prices[type][subtype];
    } else if (type === 'lights' || type === 'horn' || typeof this.prices[type] === 'number') {
      cost = this.prices[type];
    } else if (this.prices[type][model]) {
      cost = this.prices[type][model];
    } else if (this.prices[type][subtype]) {
      cost = this.prices[type][subtype];
    }

    const vehiclePrice = (_ref = (_vehicleList = _data_vehicles__WEBPACK_IMPORTED_MODULE_7__["default"][vehicle === null || vehicle === void 0 ? void 0 : vehicle.name]) === null || _vehicleList === void 0 ? void 0 : _vehicleList.price) !== null && _ref !== void 0 ? _ref : 0;
    const margin = vehiclePrice / 100 * this.multipliers[type];
    return cost + margin;
  }

  setTuning(vehicle, type, subtype, model, color) {
    const tuning = vehicle.getVariable('tuning');
    const nullExists = ['smoke', 'primary', 'secondary', 'color'];

    if (!nullExists.includes(subtype) && lodash_isNull__WEBPACK_IMPORTED_MODULE_2___default()(model)) {
      console.error(type, subtype, model, 'LSC null exists');
      return tuning;
    }

    if (type === 'wheels' && subtype === 'smoke' || type === 'paint' && subtype !== 'type' || type === 'neon' && subtype === 'color') {
      tuning[type][subtype] = color;
    } else if (type === 'wheels' && subtype === 'tyres' || type !== 'numbers' && subtype === 'color' || type === 'bumpers' || type === 'paint') {
      tuning[type][subtype] = model;
    } else if (type === 'wheels') {
      tuning[type] = { ...tuning[type],
        model
      };
    } else if (type === 'neon' && !subtype) {
      tuning[type].position = model;
    } else tuning[type] = model;

    return tuning;
  }

  pressedKeyOnMainShape(player) {
    if (!player.vehicle || player.job) return;
    const index = mp.colshapes.at(player.colshapeId).customData;

    if (!_basic_vehicle__WEBPACK_IMPORTED_MODULE_6__["default"].isOwner(player.vehicle, player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].error(player, 'Сядьте в личный транспорт');
    }

    if (player.vehicle.getOccupants().length > 1) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_9__["default"].error(player, 'Высадите пассажиров для въезда в LS Customs');
    }

    const {
      vehicle
    } = player;
    const {
      x,
      y,
      z
    } = this.standCoord;
    vehicle.position = new mp.Vector3(x, y, z - 0.5);
    player.serviceIndex = index;
    player.dimension = player.id + 1;
    vehicle.dimension = player.dimension;
    setTimeout(() => {
      vehicle.rotation = new mp.Vector3(0, 0, 322.911);
    }, 100);
    rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](player, 'LsCustoms-ShowBuyerMenu', this.getPricesWithMargin(vehicle));
  }

}

const lsCustoms = new LsCustoms();
mp.events.subscribe({
  'LsCustoms-Buy': lsCustoms.buyTuning,
  'LsCustoms-BuyCustomNumber': lsCustoms.buyCustomNumberText,
  'LsCustoms-CloseMenu': player => {
    const {
      x,
      y,
      z
    } = _data_services_lsCustoms__WEBPACK_IMPORTED_MODULE_8__["default"][player.serviceIndex];
    player.vehicle.position = new mp.Vector3(x, y, z - 0.5);
    player.dimension = 0;
    player.vehicle.dimension = 0;
    setTimeout(() => {
      try {
        if (!mp.players.exists(player)) return;
        player.vehicle.rotation = new mp.Vector3(0, 0, 90);
      } catch (err) {
        console.log(err);
      }
    }, 100);
  }
});

/***/ }),

/***/ "./src/services/nightClub.ts":
/*!***********************************!*\
  !*** ./src/services/nightClub.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return drinkAlcohol; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_services_nightClubs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/nightClubs */ "./src/data/services/nightClubs.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/animations */ "./src/utils/animations.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");








class NightClub extends _service__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor() {
    const info = {
      name: 'Ночной клуб',
      entities: _data_services_nightClubs__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 121,
        color: 48
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "moneyForDrop", void 0);

    this.prices = {
      beer: 50,
      wine: 300,
      vodka: 250,
      whisky: 400
    };
    this.moneyForDrop = 100;
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'NightClub-ShowBuyerMenu', this.prices);
  }

  getFinalPrice(products) {
    let finalPrice = 0;

    for (const name in products) {
      if (products[name] > 0) {
        const price = this.prices[name];
        finalPrice += price * products[name];
      }
    }

    return finalPrice;
  }

  async dropMoney(player) {
    const canBuy = await player.moneyHelper.change(-this.moneyForDrop, 'cash', 'night-club');

    if (!canBuy) {
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'Недостаточно наличных!');
      return Promise.reject();
    }

    _utils_animations__WEBPACK_IMPORTED_MODULE_5__["default"].playScenario(player, 'WORLD_HUMAN_STRIP_WATCH_STAND', 5000);
  }

  async buy(player, products) {
    try {
      const cost = parseInt(this.getFinalPrice(products), 10);
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(cost) || cost < 0) return Promise.reject(new Error());
      await player.moneyHelper.different(cost, 'night-club');

      for (const name in products) {
        if (products[name] || products[name] < 0) {
          player.addToInventory({
            name,
            type: 'alcohol',
            count: products[name]
          });
        }
      }

      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

}

const nightClub = new NightClub();
mp.events.subscribe({
  'NightClub-Buy': (player, data) => nightClub.buy(player, data),
  'NightClub-DropMoney': player => nightClub.dropMoney(player)
});
function drinkAlcohol(player, name) {
  const drunkDurations = {
    beer: 30,
    wine: 50,
    vodka: 80,
    whisky: 100
  };
  _utils_animations__WEBPACK_IMPORTED_MODULE_5__["default"].playScenario(player, 'WORLD_HUMAN_DRINKING', 6000);
  player.call('startScreenEffect', ['DrugsMichaelAliensFightIn', drunkDurations[name] * 1000]);
}

/***/ }),

/***/ "./src/services/pharmacy.ts":
/*!**********************************!*\
  !*** ./src/services/pharmacy.ts ***!
  \**********************************/
/*! exports provided: useMedicine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedicine", function() { return useMedicine; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_services_pharmacies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/pharmacies */ "./src/data/services/pharmacies.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");







class Pharmacy extends _service__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor() {
    const info = {
      name: 'Госпиталь',
      entities: _data_services_pharmacies__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 153,
        color: 1
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      aidKit: 5000,
      adrenalin: 2000,
      pill: 300
    };
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Pharmacy-ShowBuyerMenu', this.prices);
  }

  getFinalPrice(products) {
    let finalPrice = 0;

    for (const name in products) {
      if (products[name] > 0) {
        const price = this.prices[name];
        finalPrice += price * products[name];
      }
    }

    return finalPrice;
  }

  async buy(player, products) {
    try {
      const cost = parseInt(this.getFinalPrice(products), 10);
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(cost) || cost < 0) return Promise.reject(new Error());
      await player.moneyHelper.different(cost, 'medication');

      for (const name in products) {
        if (products[name]) {
          player.addToInventory({
            name,
            type: 'medication',
            count: products[name]
          });
        }
      }

      _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

}

const pharmacy = new Pharmacy();
mp.events.subscribe({
  'Pharmacy-Buy': (player, data) => pharmacy.buy(player, data)
});
function useMedicine(player, name) {
  const healthRecovery = {
    aidKit: 100,
    adrenalin: 50,
    pill: 10
  };

  if (player.health + healthRecovery[name] <= 100) {
    player.health += healthRecovery[name];
  } else player.health = 100;
}

/***/ }),

/***/ "./src/services/pier.ts":
/*!******************************!*\
  !*** ./src/services/pier.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _data_services_piers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/piers */ "./src/data/services/piers.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");






class Pier extends _service__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    const info = {
      name: 'Пирс',
      entities: _data_services_piers__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 471,
        color: 26
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);
    this.subscribeToEvents();
  }

  spawn(player, id) {
    const index = mp.colshapes.at(player.colshapeId).customData;
    const position = { ..._data_services_piers__WEBPACK_IMPORTED_MODULE_3__["default"][index].stand,
      dimension: 0
    };
    _basic_vehicle__WEBPACK_IMPORTED_MODULE_2__["default"].spawnPlayerVehicle(player, id, position);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].success(player, 'Ваше ТС успешно доставлено!');
  }

  pressedKeyOnMainShape(player) {
    if (!player.isHasLicense('boat')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].error(player, 'У вас нет лицензии на водный транспорт!');
    }

    const boats = [];
    Object.entries(player.vehicles).forEach(([dbId, vehicle]) => vehicle.type === 'boat' && boats.push({
      dbId,
      ...vehicle
    }));
    rage_rpc__WEBPACK_IMPORTED_MODULE_0__["callClient"](player, 'Pier-ShowMenu', [boats]);
  }

  subscribeToEvents() {
    mp.events.subscribe({
      'Pier-SpawnBoat': (player, id) => this.spawn(player, id)
    });
  }

}

const pier = new Pier();

/***/ }),

/***/ "./src/services/processing/illegal.ts":
/*!********************************************!*\
  !*** ./src/services/processing/illegal.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/services/processing/index.ts");


class IllegalProcessing extends _index__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const serviceData = {
      name: 'Переработка наркотиков',
      entities: [{
        x: 1390.273,
        y: 3607.683,
        z: 38.941
      }],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 140,
        color: 66
      }
    };
    const products = {
      joint: {
        type: 'resources',
        need: {
          name: 'weed',
          count: 4
        }
      }
    };
    super(false, serviceData, products);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new IllegalProcessing());

/***/ }),

/***/ "./src/services/processing/index.ts":
/*!******************************************!*\
  !*** ./src/services/processing/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");







class Processing extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(legal, serviceData, products) {
    super(serviceData.name, serviceData.entities, serviceData.markerData, serviceData.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "legal", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "products", void 0);

    this.legal = legal;
    this.products = products;
    mp.events.subscribe({
      [`Processing-GetProduct${legal ? 'Legal' : 'Illegal'}`]: this.getProduct.bind(this)
    });
  }

  pressedKeyOnMainShape(player) {
    if (this.legal && !player.isHasLicense('processing')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У вас нет лицензии на переработку!');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'Processing-ShowMenu', [this.legal, this.products]);
  }

  async getProduct(player, name, count) {
    const product = this.products[name];
    if (!product) return;
    const item = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].getItem(player.inventory, product.need.name);
    const requiredAmount = parseInt(count, 10) * product.need.count;

    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(requiredAmount) || requiredAmount <= 0 || !item || item.count < requiredAmount) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'Недостаточно ресурсов!');
    }

    await _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].decItemCount(player, player.inventory, item, requiredAmount);
    await _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_4__["default"].updateInventoryInDb(player.dbId, player.inventory);
    await player.addToInventory({
      name,
      count,
      type: product.type
    });
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(player, 'Операция успешна!');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Processing);

/***/ }),

/***/ "./src/services/processing/legal.ts":
/*!******************************************!*\
  !*** ./src/services/processing/legal.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/services/processing/index.ts");


class LegalProcessing extends _index__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const serviceData = {
      name: 'Переработка ресурсов',
      entities: [{
        x: 980.209,
        y: -1705.758,
        z: 31.117
      }],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 467,
        color: 71
      }
    };
    const products = {
      'orange-juice': {
        type: 'food',
        need: {
          name: 'orange',
          count: 4
        }
      },
      'pineapple-juice': {
        type: 'food',
        need: {
          name: 'pineapple',
          count: 2
        }
      }
    };
    super(true, serviceData, products);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new LegalProcessing());

/***/ }),

/***/ "./src/services/selling/fish.ts":
/*!**************************************!*\
  !*** ./src/services/selling/fish.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/services/selling/index.ts");


class FishSelling extends _index__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const serviceData = {
      name: 'Продажа рыбы',
      entities: [{
        x: -2195.029,
        y: 4289.911,
        z: 49.174
      }],
      markerData: {
        radius: 0.75
      }
    };
    const prices = {
      perch: [950],
      eel: [1300],
      pike: [1050],
      trout: [1900],
      zander: [1300],
      catfish: [2500],
      salmon: [4000],
      sturgeon: [3000],
      stingray: [7000],
      tuna: [1500],
      fugu: [20000]
    };
    super(true, serviceData, prices);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new FishSelling());

/***/ }),

/***/ "./src/services/selling/illegal.ts":
/*!*****************************************!*\
  !*** ./src/services/selling/illegal.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/services/selling/index.ts");


class IllegalSelling extends _index__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const serviceData = {
      name: 'Сбыт наркотиков',
      entities: [{
        x: 2484.767,
        y: 3446.91,
        z: 51.065
      }],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 480,
        color: 1
      }
    };
    const prices = {
      weed: [210, 80, 156, 180, 288, 400, 350, 329, 104],
      joint: [1600, 1000, 800, 1200, 1500, 900, 600]
    };
    super(false, serviceData, prices);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new IllegalSelling());

/***/ }),

/***/ "./src/services/selling/index.ts":
/*!***************************************!*\
  !*** ./src/services/selling/index.ts ***!
  \***************************************/
/*! exports provided: setRandomExchangePrice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRandomExchangePrice", function() { return setRandomExchangePrice; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");
/* harmony import */ var _basic_prison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/prison */ "./src/basic/prison.ts");
/* harmony import */ var _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../basic/player/playerInventory */ "./src/basic/player/playerInventory.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");








const sellPoints = {};

class SellPoint extends _service__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(legal, serviceData, prices) {
    super(serviceData.name, serviceData.entities, serviceData.markerData, serviceData.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "currentPrices", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "legal", void 0);

    this.legal = legal;
    this.prices = prices;
    this.currentPrices = {};
    this.setRandomPrices();
    sellPoints[serviceData.name] = this;
    mp.events.subscribe({
      'SellPoint-Exchange': this.exchangeItems.bind(this),
      'SellPoint-GetItems': this.getAllExchangePrices
    });
  }

  get exchangePrices() {
    return this.currentPrices;
  }

  getAllExchangePrices() {
    const data = [];
    Object.values(sellPoints).forEach(point => {
      Object.entries(point.currentPrices).forEach(([name, price]) => data.push({
        name,
        price
      }));
    });
    return data;
  }

  setRandomPrices() {
    Object.keys(this.prices).forEach(name => {
      const arr = this.prices[name];

      const price = arr[lodash_random__WEBPACK_IMPORTED_MODULE_2___default()(0, arr.length - 1)];

      this.currentPrices[name] = price;
    });
  }

  async exchangeItems(player, product, value) {
    const {
      price
    } = this.getAllExchangePrices().find(item => item.name === product);
    if (!price) return Promise.reject();
    const item = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(player.inventory, product);
    const count = parseInt(value, 10);

    if (!item || item <= 0 || !lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(count) || count <= 0 || item.count < count) {
      return Promise.reject('bad count value');
    }

    await _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__["default"].decItemCount(player, player.inventory, item, count);
    await _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__["default"].updateInventoryInDb(player.dbId, player.inventory);
    const earnedMoney = count * price;
    await player.moneyHelper.change(earnedMoney, 'bank', 'resources');

    if (item.name === 'weed' || item.name === 'joint') {
      await _basic_prison__WEBPACK_IMPORTED_MODULE_5__["default"].addViolation(player, 1.5);
    }

    _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].success(player, 'Операция успешна!');
  }

  pressedKeyOnMainShape(player) {
    if (player.vehicle) return;
    const products = {};
    Object.keys(this.prices).forEach(name => {
      const item = _basic_player_playerInventory__WEBPACK_IMPORTED_MODULE_6__["default"].getItem(player.inventory, name);
      if (item) products[name] = item.count;
    });
    rage_rpc__WEBPACK_IMPORTED_MODULE_3__["callClient"](player, 'Selling-ShowMenu', [this.currentPrices, products, this.legal]);
  }

}

function setRandomExchangePrice() {
  Object.values(sellPoints).forEach(point => {
    point.setRandomPrices();
  });
}
mp.events.addCommand({
  course: player => {
    if (player.adminLvl < 3) return;
    setRandomExchangePrice();
  }
});
/* harmony default export */ __webpack_exports__["default"] = (SellPoint);

/***/ }),

/***/ "./src/services/selling/legal.ts":
/*!***************************************!*\
  !*** ./src/services/selling/legal.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/services/selling/index.ts");


class LegalSelling extends _index__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const serviceData = {
      name: 'Продажа ресурсов',
      entities: [{
        x: -1079.415,
        y: -2138.506,
        z: 13.395
      }, {
        x: 1963.115,
        y: 5184.533,
        z: 47.979
      }],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 514,
        color: 25
      }
    };
    const prices = {
      orange: [60, 122, 144, 200, 130, 174, 100, 88, 70],
      pineapple: [80, 102, 167, 201, 200, 63, 270, 150, 40],
      gold: [180, 463, 247, 420, 500, 300, 280, 650],
      coral: [522, 360, 580, 250, 628, 723, 444],
      'orange-juice': [144, 245, 800, 750, 240, 160, 600, 320, 400],
      'pineapple-juice': [200, 550, 380, 245, 450, 190, 100, 400]
    };
    super(true, serviceData, prices);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new LegalSelling());

/***/ }),

/***/ "./src/services/service.ts":
/*!*********************************!*\
  !*** ./src/services/service.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/colshapes */ "./src/helpers/colshapes.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");




class Service {
  constructor(name, entities, marker, blip) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "blipData", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "markerData", void 0);

    this.name = name;
    this.markerData = marker;
    this.blipData = blip;
    this.loadEntities(entities);
  }

  onExitShape(player) {}

  enteredMainShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_2__["default"].help(player, 'Нажмите ~INPUT_CONTEXT~ чтобы открыть меню');
  }

  loadEntities(items) {
    items.forEach((entity, index) => this.createEntities(entity, index));
  }

  createEntities(data, index) {
    var _data$radius, _this$markerData;

    const {
      x,
      y,
      z
    } = data;
    const radius = (_data$radius = data.radius) !== null && _data$radius !== void 0 ? _data$radius : (_this$markerData = this.markerData) === null || _this$markerData === void 0 ? void 0 : _this$markerData.radius;
    _helpers_colshapes__WEBPACK_IMPORTED_MODULE_1__["default"].create({
      x,
      y,
      z
    }, radius, {
      onEnter: this.enteredMainShape.bind(this),
      onKeyPress: this.pressedKeyOnMainShape.bind(this),
      onExit: this.onExitShape.bind(this),
      keyName: 'E'
    }, index);

    if (this.markerData) {
      mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), this.markerData.radius, {
        color: [0, 255, 0, 60],
        visible: true
      });
    }

    if (this.blipData) {
      mp.blips.new(this.blipData.model, new mp.Vector3(x, y, z), {
        name: this.name,
        shortRange: true,
        scale: 0.75,
        color: this.blipData.color
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./src/services/tattooParlor.ts":
/*!**************************************!*\
  !*** ./src/services/tattooParlor.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _data_services_tattooParlors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/services/tattooParlors */ "./src/data/services/tattooParlors.js");
/* harmony import */ var _character_clothes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../character/clothes */ "./src/character/clothes.ts");
/* harmony import */ var _character_characterCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../character/characterCreator */ "./src/character/characterCreator.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");









class TattooParlor extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Тату салон',
      entities: _data_services_tattooParlors__WEBPACK_IMPORTED_MODULE_4__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 75,
        color: 61
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      torso: 50000,
      head: 30000,
      leftarm: 40000,
      rightarm: 40000,
      leftleg: 35000,
      rightleg: 35000
    };
    this.subsribeToEvents();
  }

  async buyTattoo(player, tattoo) {
    try {
      const price = this.prices[tattoo.bodyPosition];
      if (!price) return;
      await player.moneyHelper.different(price, 'tattoo');
      player.appearance.tattoos.push(tattoo);
      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          'character.tattoos': player.appearance.tattoos
        }
      });
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  async removeTattoo(player, tattoo) {
    try {
      const price = this.prices[tattoo.bodyPosition];
      if (!price) return;
      await player.moneyHelper.different(price, 'tattoo');
      const tattoos = player.appearance.tattoos.filter(item => tattoo.texture !== item.texture);
      player.appearance.tattoos = tattoos;
      await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(player.dbId, {
        $set: {
          'character.tattoos': tattoos
        }
      });
      _character_characterCreator__WEBPACK_IMPORTED_MODULE_6__["default"].setTattoos(player, tattoos);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_7__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

  pressedKeyOnMainShape(player) {
    if (player.vehicle || player.faction.working) return;
    player.dimension = player.id + 1;
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].clear(player);
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'TattooParlor-ShowBuyerMenu', [player.appearance.tattoos, this.prices]);
  }

  subsribeToEvents() {
    mp.events.subscribe({
      'TattooParlor-Buy': this.buyTattoo.bind(this),
      'TattooParlor-Remove': this.removeTattoo.bind(this),
      'TattooParlor-CloseMenu': this.onCloseMenu.bind(this)
    });
  }

  onCloseMenu(player) {
    _character_characterCreator__WEBPACK_IMPORTED_MODULE_6__["default"].loadPlayerCharacter(player, player.appearance, true);
    _character_clothes__WEBPACK_IMPORTED_MODULE_5__["default"].load(player);
    player.dimension = 0;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TattooParlor());

/***/ }),

/***/ "./src/services/vehicle-rent/index.ts":
/*!********************************************!*\
  !*** ./src/services/vehicle-rent/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_services_scooterRental__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/services/scooterRental */ "./src/data/services/scooterRental.js");
/* harmony import */ var _data_services_boatRental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/services/boatRental */ "./src/data/services/boatRental.js");
/* harmony import */ var _rent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rent */ "./src/services/vehicle-rent/rent.ts");



const points = [{
  name: 'Аренда скутеров',
  blip: {
    model: 522,
    color: 4
  },
  coords: _data_services_scooterRental__WEBPACK_IMPORTED_MODULE_0__["default"],
  vehicleModel: 'faggio2',
  price: 150,
  dist: 2
}, {
  name: 'Аренда лодок',
  blip: {
    model: 780,
    color: 4
  },
  coords: _data_services_boatRental__WEBPACK_IMPORTED_MODULE_1__["default"],
  vehicleModel: 'dinghy',
  price: 2500,
  dist: 5,
  license: 'boat'
}];
points.forEach(point => {
  const {
    name,
    blip,
    coords,
    vehicleModel,
    price,
    dist,
    license
  } = point;
  return new _rent__WEBPACK_IMPORTED_MODULE_2__["default"](name, blip, coords, dist, vehicleModel, price, license);
});

/***/ }),

/***/ "./src/services/vehicle-rent/rent.ts":
/*!*******************************************!*\
  !*** ./src/services/vehicle-rent/rent.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "lodash/random");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _basic_vehicle_tuning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/vehicle/tuning */ "./src/basic/vehicle/tuning.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");








class VehicleRent extends _service__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(name, blip, coords, dist, model, price, license) {
    super(name, coords, {
      radius: 0.75
    }, blip);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "model", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "price", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "dist", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "license", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "rented", void 0);

    this.price = price;
    this.model = model;
    this.dist = dist;
    this.license = license;
    this.rented = new Map();
    mp.events.subscribeToDefault({
      playerQuit: this.terminateRent.bind(this),
      playerEnterVehicle: this.onEnterInVehicle.bind(this),
      playerExitVehicle: this.onExitFromVehicle.bind(this)
    });
  }

  pressedKeyOnMainShape(player) {
    if (this.license && !player.isHasLicense(this.license)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'У вас нет лицензии на данное ТС!');
    }

    return this.rentVehicle(player);
  }

  isAlreadyRented(player) {
    return this.rented.has(player.dbId);
  }

  enteredMainShape(player) {
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].help(player, this.isAlreadyRented(player) ? 'Нажмите ~INPUT_CONTEXT~ чтобы сдать арендованное ТС' : `Нажмите ~INPUT_CONTEXT~ для аренды транспорта за ${this.price}$`);
  }

  async rentVehicle(player) {
    if (this.isAlreadyRented(player)) {
      return this.terminateRent(player);
    }

    await player.moneyHelper.different(this.price);
    await this.spawnVehicle(player);
  }

  terminateRent(player) {
    const rent = this.rented.get(player.dbId);
    if (!rent) return;
    if (mp.vehicles.exists(rent.vehicle)) rent.vehicle.destroy();
    clearTimeout(rent.timer);
    this.rented.delete(player.dbId);
  }

  async spawnVehicle(player) {
    const position = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_2__["xyInFrontOfPos"])(player.position, player.heading, this.dist);
    const vehicle = await _basic_vehicle__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.model, { ...position,
      dimension: 0
    }, {
      type: 'user',
      id: player.dbId
    }, true);
    _basic_vehicle_tuning__WEBPACK_IMPORTED_MODULE_5__["default"].setPaint(vehicle, [lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, 255), lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, 255), lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, 255)]);
    this.rented.set(player.dbId, {
      vehicle
    });
  }

  onEnterInVehicle(player, vehicle) {
    if (vehicle.name === this.model) {
      const rent = this.rented.get(player.dbId);
      if (rent) clearTimeout(rent.timer);
    }
  }

  onExitFromVehicle(player, vehicle) {
    if (vehicle.name === this.model) {
      const rent = this.rented.get(player.dbId);
      if (!rent) return;
      rent.timer = setTimeout(this.terminateRent.bind(this, player), 15 * 60 * 1000);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].info(player, 'Через 15 минут аренда закончится, если вы не сядете в ТС');
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (VehicleRent);

/***/ }),

/***/ "./src/services/vehicle-shop/air-shop.ts":
/*!***********************************************!*\
  !*** ./src/services/vehicle-shop/air-shop.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_services_airShop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/services/airShop */ "./src/data/services/airShop.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop */ "./src/services/vehicle-shop/shop.ts");



const items = ['havok', 'swift2', 'duster', 'dodo', 'vestra', 'luxor2', 'shamal'];

class AirShop extends _shop__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super('airshop', {
      name: 'Авиасалон',
      entities: _data_services_airShop__WEBPACK_IMPORTED_MODULE_1__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 602,
        color: 4
      }
    }, items);
  }

  canHaveVehicle(player) {
    const vehCount = Object.keys(player.vehicles).length;

    if (vehCount >= player.vehicleSlots) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'Нужно больше слотов для ТС!');
    }

    if (!player.isHasLicense('air')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'У вас нет лицензии на воздушный транспорт!');
    }

    return true;
  }

}

const shop = new AirShop();

/***/ }),

/***/ "./src/services/vehicle-shop/boat-shop.ts":
/*!************************************************!*\
  !*** ./src/services/vehicle-shop/boat-shop.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_services_boatShop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/services/boatShop */ "./src/data/services/boatShop.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop */ "./src/services/vehicle-shop/shop.ts");



const items = ['dinghy', 'jetmax', 'seashark', 'speeder', 'toro', 'tropic2'];

class BoatShop extends _shop__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super('boatshop', {
      name: 'Магазин лодок',
      entities: _data_services_boatShop__WEBPACK_IMPORTED_MODULE_1__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 455,
        color: 60
      }
    }, items);
  }

  canHaveVehicle(player) {
    const vehCount = Object.keys(player.vehicles).length;

    if (vehCount >= player.vehicleSlots) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'Нужно больше слотов для ТС!');
    }

    if (!player.isHasLicense('boat')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'У вас нет лицензии на водный транспорт!');
    }

    return true;
  }

}

const shop = new BoatShop();

/***/ }),

/***/ "./src/services/vehicle-shop/car-shop.ts":
/*!***********************************************!*\
  !*** ./src/services/vehicle-shop/car-shop.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_services_carShops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/services/carShops */ "./src/data/services/carShops.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop */ "./src/services/vehicle-shop/shop.ts");



const items = ['vwtoua19c', 'q820', 'pts21', 'bmwg07', 'cullinan', 'rs7', 'divo', 'lx2018', 'C7', 'gx71', 'e92', 'tahoe', 'e63', 'supra2', 'camry55', 'lc100', 'm5e60', '500w124', '63lb', 'm4f82', 'teslax', 'tts', 'models', 'brabus700', 'dl2016', 'srt8', 'svr16', 'bmm', '675lt', 'urus', 'lamboavj', 'supersport', 'ff', 'evo10', 'skyline', 'gs350', 'cox2013', 'f458', 'r8v10', '16challenger', '17m760i', '69charger', 'a8audi', 'ap2', 'bentayga17', 'm5f90', 'm5', 'bmwe36', 'c63w204', 'civic', 'focusrs', 'g65amg', 'gtr', 'impala', 'toyotasj', 'lhuracan', 'm2f22', 'm3e46', 'silv86', 'oldm6', 'panamera17turbo', 'AUDIRS6TK', 'S63AMG', 'mustangbkit', 'urban', 'vaz2106', 'volga', 'w140', 'w210', 'wraith', 'x5e53', 'x5m2016', 'gle450', '18performante', 'bmwm5f90'];

class CarShop extends _shop__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super('carshop', {
      name: 'Автосалон',
      entities: _data_services_carShops__WEBPACK_IMPORTED_MODULE_1__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 669,
        color: 24
      }
    }, items);
  }

  canHaveVehicle(player) {
    const vehCount = Object.keys(player.vehicles).length;

    if (vehCount >= player.vehicleSlots) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'Нужно больше слотов для ТС!');
    }

    if (!player.isHasLicense('car')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'У вас нет прав категории B!');
    }

    return true;
  }

}

const shop = new CarShop();

/***/ }),

/***/ "./src/services/vehicle-shop/index.ts":
/*!********************************************!*\
  !*** ./src/services/vehicle-shop/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _air_shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./air-shop */ "./src/services/vehicle-shop/air-shop.ts");
/* harmony import */ var _boat_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boat-shop */ "./src/services/vehicle-shop/boat-shop.ts");
/* harmony import */ var _car_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-shop */ "./src/services/vehicle-shop/car-shop.ts");
/* harmony import */ var _moto_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moto-shop */ "./src/services/vehicle-shop/moto-shop.ts");
/* harmony import */ var _test_drive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-drive */ "./src/services/vehicle-shop/test-drive.ts");






/***/ }),

/***/ "./src/services/vehicle-shop/moto-shop.ts":
/*!************************************************!*\
  !*** ./src/services/vehicle-shop/moto-shop.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_services_motoShops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/services/motoShops */ "./src/data/services/motoShops.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop */ "./src/services/vehicle-shop/shop.ts");



const items = ['bmx', 'cruiser', 'fixter', 'scorcher', 'tribike', 'tribike2', 'tribike3', 'cliffhanger', 'fcr2', 'hakuchou', 'sanctus', 'vader', 'shotaro', 'bati', 'daemon', 'enduro', 'chimera', 'double', 'hexer', 'carbonrs', 'faggio3'];

class MotoShop extends _shop__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super('motoshop', {
      name: 'Мотосалон',
      entities: _data_services_motoShops__WEBPACK_IMPORTED_MODULE_1__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 559,
        color: 46
      }
    }, items);
  }

  canHaveVehicle(player) {
    const vehCount = Object.keys(player.vehicles).length;

    if (vehCount >= player.vehicleSlots) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'Нужно больше слотов для ТС!');
    }

    if (!player.isHasLicense('motorcycle')) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_0__["default"].error(player, 'У вас нет прав категории A!');
    }

    return true;
  }

}

const shop = new MotoShop();

/***/ }),

/***/ "./src/services/vehicle-shop/shop.ts":
/*!*******************************************!*\
  !*** ./src/services/vehicle-shop/shop.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _data_vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/vehicles */ "./src/data/vehicles.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service */ "./src/services/service.ts");







const shops = {};

class VehicleShop extends _service__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(id, data, vehicles) {
    super(data.name, data.entities, data.markerData, data.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicles", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "id", void 0);

    this.id = id;
    this.vehicles = vehicles;
    shops[id] = this;
    VehicleShop.subscribeToEvents();
  }

  static subscribeToEvents() {
    mp.events.subscribe({
      'VehicleShop-Buy': async (player, id, model) => {
        const shop = shops[id];
        await shop.buy(player, model);
      },
      'VehicleShop-Exit': player => {
        player.dimension = 0;
      }
    });
  }

  pressedKeyOnMainShape(player) {
    var _mp$colshapes$at;

    if (player.vehicle) return;
    player.dimension = player.id + 1;
    player.serviceIndex = (_mp$colshapes$at = mp.colshapes.at(player.colshapeId)) === null || _mp$colshapes$at === void 0 ? void 0 : _mp$colshapes$at.customData;
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'VehicleShop-ShowBuyerMenu', [this.id, this.getPrices()]);
  }

  async buy(player, model) {
    try {
      if (!this.canHaveVehicle(player)) return;
      const {
        price
      } = _data_vehicles__WEBPACK_IMPORTED_MODULE_4__["default"][model];
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(price)) return;
      await player.moneyHelper.different(price, 'veh shop');
      const position = {
        x: 0,
        y: 0,
        z: 0,
        dimension: 1000
      };
      const vehicle = await _basic_vehicle__WEBPACK_IMPORTED_MODULE_5__["default"].create(model, position, {
        type: 'user',
        id: player.dbId
      }, false, true, player);
      player.vehicles[vehicle.dbId].id = undefined;
      vehicle.destroy();
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].success(player, 'Успешная покупка! Вызвать ТС можно через телефон');
    } catch (err) {
      return Promise.reject();
    }
  }

  getPrices() {
    const prices = {};
    this.vehicles.forEach(name => {
      prices[name] = _data_vehicles__WEBPACK_IMPORTED_MODULE_4__["default"][name].price;
    });
    return prices;
  }

  canHaveVehicle(player) {
    const vehCount = Object.keys(player.vehicles).length;

    if (vehCount >= player.vehicleSlots) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].error(player, 'Нужно больше слотов для ТС!');
    }

    return true;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (VehicleShop);

/***/ }),

/***/ "./src/services/vehicle-shop/test-drive.ts":
/*!*************************************************!*\
  !*** ./src/services/vehicle-shop/test-drive.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/vehicle */ "./src/basic/vehicle/index.ts");



class TestDrive {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "vehicles", void 0);

    this.vehicles = new Map();
    mp.events.subscribe({
      'TestDrive-Start': this.start.bind(this),
      'TestDrive-Stop': this.stop.bind(this)
    });
  }

  async start(player, position, model) {
    if (this.vehicles.has(player.dbId)) return;
    const vehicle = await _basic_vehicle__WEBPACK_IMPORTED_MODULE_1__["default"].create(model, position, {
      type: 'user',
      id: player.dbId
    }, true);
    vehicle.dimension = player.dimension;
    this.vehicles.set(player.dbId, vehicle);
    player.putIntoVehicle(vehicle, -1);
  }

  stop(player) {
    const vehicle = this.vehicles.get(player.dbId);

    if (vehicle) {
      vehicle.destroy();
      this.vehicles.delete(player.dbId);
    }
  }

}

const testDrive = new TestDrive();

/***/ }),

/***/ "./src/services/vehicleRepair.ts":
/*!***************************************!*\
  !*** ./src/services/vehicleRepair.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _data_services_carRepairs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/services/carRepairs */ "./src/data/services/carRepairs.js");
/* harmony import */ var _utils_vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/vehicles */ "./src/utils/vehicles.ts");
/* harmony import */ var _utils_players__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/players */ "./src/utils/players.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");
/* harmony import */ var _basic_vehicle_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basic/vehicle/state */ "./src/basic/vehicle/state.ts");









class VehicleRepair extends _service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      name: 'СТО',
      entities: _data_services_carRepairs__WEBPACK_IMPORTED_MODULE_3__["default"],
      markerData: {
        radius: 2.5
      },
      blipData: {
        model: 446,
        color: 83
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      repair: 500,
      repairKit: 950
    };
  }

  repairVehicle(vehicle, maxHealth) {
    if (!vehicle) return;
    vehicle.repair();
    _basic_vehicle_state__WEBPACK_IMPORTED_MODULE_7__["default"].setHealth(vehicle, maxHealth, maxHealth);
    _basic_vehicle_state__WEBPACK_IMPORTED_MODULE_7__["default"].setDoors(vehicle, []);
  }

  useRepairKit(player, kits) {
    if (player.vehicle) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Выйдите из ТС, чтобы использовать данный предмет');
    }

    const vehicle = Object(_utils_vehicles__WEBPACK_IMPORTED_MODULE_4__["getNearestVehicleInRange"])(player.position, 3.2);
    if (!vehicle) return;
    this.repairVehicle(vehicle, vehicle.maxHealth / 100 * 80);
    Object(_utils_players__WEBPACK_IMPORTED_MODULE_5__["getStreamedPlayers"])(vehicle.position).forEach(item => rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](item, 'VehicleRepair-Repair', vehicle));
    kits.count--;
  }

  getFinalPrice(products) {
    let finalPrice = 0;

    for (const name in products) {
      if (products[name] > 0) {
        const price = this.prices[name];
        finalPrice += price * products[name];
      }
    }

    return finalPrice;
  }

  async buy(player, products) {
    try {
      const cost = this.getFinalPrice(products);
      await player.moneyHelper.different(cost, 'repair kit');

      for (const name in products) {
        if (products[name]) {
          player.addToInventory({
            name,
            type: 'others',
            count: products[name]
          });
        }
      }

      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

  async buyRepair(player) {
    try {
      if (!player.isDriver()) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Сядьте на водительское место!');
      }

      await player.moneyHelper.different(this.prices.repair, 'repair');
      await this.repairVehicle(player.vehicle, player.vehicle.maxHealth);
      _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject(new Error());
    }
  }

  pressedKeyOnMainShape(player) {
    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'VehicleRepair-ShowBuyerMenu', this.prices);
  }

}

const vehicleRepair = new VehicleRepair();
mp.events.subscribe({
  'VehicleRepair-BuyRepair': player => vehicleRepair.buyRepair(player),
  'VehicleRepair-Buy': (player, basket) => vehicleRepair.buy(player, basket)
});
/* harmony default export */ __webpack_exports__["default"] = (vehicleRepair);

/***/ }),

/***/ "./src/services/vehicleSell.ts":
/*!*************************************!*\
  !*** ./src/services/vehicleSell.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _basic_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic/vehicle */ "./src/basic/vehicle/index.ts");
/* harmony import */ var _data_services_carSell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/services/carSell */ "./src/data/services/carSell.js");
/* harmony import */ var _data_vehicles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/vehicles */ "./src/data/vehicles.ts");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");








class VehicleSell extends _service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    const info = {
      name: 'Продажа транспорта',
      entities: _data_services_carSell__WEBPACK_IMPORTED_MODULE_4__["default"],
      markerData: {
        radius: 2
      },
      blipData: {
        model: 524,
        color: 2
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);
    mp.events.subscribe({
      'VehicleSell-Confirm': this.toSell.bind(this)
    });
  }

  getPrice(player) {
    return player.vehicle && _data_vehicles__WEBPACK_IMPORTED_MODULE_5__["default"][player.vehicle.name].price / 100 * 45;
  }

  async toSell(player) {
    const cost = this.getPrice(player);
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(cost) || cost < 0) return Promise.reject();
    const canSell = await player.moneyHelper.change(cost, 'bank', 'veh gov sell');
    if (!canSell) return Promise.reject();
    await _basic_vehicle__WEBPACK_IMPORTED_MODULE_3__["default"].delete(player.vehicle);
    _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].success(player, 'ТС успешно продано');
  }

  showMenu(player) {
    if (!_basic_vehicle__WEBPACK_IMPORTED_MODULE_3__["default"].isOwner(player.vehicle, player)) {
      return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Нужно быть в своём ТС!');
    }

    rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'VehicleSell-ShowMenu', this.getPrice(player));
  }

  pressedKeyOnMainShape(player) {
    if (!player.vehicle) return _helpers_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].error(player, 'Нужно быть в ТС!');
    this.showMenu(player);
  }

}

const vehicleSell = new VehicleSell();

/***/ }),

/***/ "./src/services/weaponShop.ts":
/*!************************************!*\
  !*** ./src/services/weaponShop.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "lodash/isNumber");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/services/service.ts");
/* harmony import */ var _data_services_weaponShops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/services/weaponShops */ "./src/data/services/weaponShops.js");
/* harmony import */ var _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/notifications */ "./src/helpers/notifications.ts");







class WeaponShop extends _service__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    const info = {
      name: 'Магазин оружия',
      entities: _data_services_weaponShops__WEBPACK_IMPORTED_MODULE_4__["default"],
      markerData: {
        radius: 0.75
      },
      blipData: {
        model: 110,
        color: 75
      }
    };
    super(info.name, info.entities, info.markerData, info.blipData);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "prices", void 0);

    this.prices = {
      melee: 5000,
      handguns: 40000,
      smgs: 60000,
      shotguns: 70000,
      rifles: 90000,
      ammo: {
        handguns: 10,
        rifles: 15,
        shotguns: 25
      }
    };
  }

  pressedKeyOnMainShape(player) {
    if (player.vehicle) return;
    rage_rpc__WEBPACK_IMPORTED_MODULE_2__["callClient"](player, 'WeaponShop-ShowBuyerMenu', this.prices);
  }

  getFinalPrice({
    weapons,
    ammo
  }) {
    let finalPrice = 0;
    Object.keys(weapons).forEach(weapon => {
      finalPrice += this.prices[weapons[weapon]];
    });
    const ammoCount = parseInt(ammo.count, 10);

    if (ammo.type && ammoCount > 0 && ammoCount < 100000) {
      finalPrice += this.prices.ammo[ammo.type] * ammoCount;
    }

    return finalPrice;
  }

  async buy(player, basket) {
    try {
      if (!player.isHasLicense('gun')) {
        return _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].error(player, 'У вас нет лицензии на ношение оружия!');
      }

      const cost = parseInt(this.getFinalPrice(basket), 10);
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(cost) || cost < 0) return;
      await player.moneyHelper.different(cost, 'weapons');
      Object.keys(basket.weapons).forEach(weapon => {
        player.addToInventory({
          type: 'weapons',
          name: weapon,
          count: 1,
          category: basket.weapons[weapon]
        });
      });
      const ammoCount = parseInt(basket.ammo.count, 10);

      if (basket.ammo.type && ammoCount > 0 && ammoCount < 100000) {
        player.addToInventory({
          name: basket.ammo.type,
          type: 'ammo',
          count: basket.ammo.count
        });
      }

      _helpers_notifications__WEBPACK_IMPORTED_MODULE_5__["default"].success(player, 'Успешная покупка!');
    } catch (err) {
      return Promise.reject();
    }
  }

}

const weaponShop = new WeaponShop();
mp.events.subscribe({
  'WeaponShop-Buy': (player, data) => weaponShop.buy(player, data)
});

/***/ }),

/***/ "./src/utils/anim.js":
/*!***************************!*\
  !*** ./src/utils/anim.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

mp.events.add({
  animationEvent: (player, toggle, dirt, name, flag) => {
    if (!toggle) player.stopAnimation();else player.playAnimation(dirt.toString(), name.toString(), 2, flag);
  },
  playerCommand: (player, command) => {
    const args = command.split(/[ ]+/);
    const commandName = args.splice(0, 1)[0];

    switch (commandName) {
      case 'animplayer':
        if (args[0] != undefined && args[0].length && args[0].match(/^[-\+]?\d+/) !== null) {
          const name = args[1] != undefined && args[1].match(/^[-\+]?\d+/) !== null ? parseInt(args[1]) : false;
          player.call('findAnim', [parseInt(args[0]), name]);
        } else player.call('createAnimList', [args[0]]);

        break;

      case 'animflag':
        if (args[0].match(/^[-\+]?\d+/) !== null) player.call('animFlag', [parseInt(args[0])]);else if (args[0] == 'up' || args[0] == 'down') player.call('animFlag', [args[0]]);else player.outputChatBox('Current command: /animflag [up/down]');
        break;
    }
  }
});

/***/ }),

/***/ "./src/utils/animations.ts":
/*!*********************************!*\
  !*** ./src/utils/animations.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/animations */ "./src/data/animations.js");
/* harmony import */ var _data_walkingStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/walkingStyles */ "./src/data/walkingStyles.ts");
/* harmony import */ var _data_moods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/moods */ "./src/data/moods.ts");




class Animations {
  constructor() {
    mp.events.subscribe({
      stopAnimation: this.stop,
      setAnimation: this.set,
      setWalkingStyle: this.setWalkingStyle,
      setMood: this.setMood,
      playServerAnimation: this.playOnServer
    });
  }

  set(player, shortcut) {
    const animation = _data_animations__WEBPACK_IMPORTED_MODULE_0__["default"][shortcut];
    if (!animation || player.vehicle || player.getVariable('isPlayingAnim')) return;
    player.setVariable('animation', animation);
  }

  playScenario(player, name, duration) {
    if (player.vehicle) return;
    player.setVariable('scenario', name);

    if (duration) {
      player.timeout(() => this.stopScenario(player), duration);
    }
  }

  setWalkingStyle(player, name) {
    const style = _data_walkingStyles__WEBPACK_IMPORTED_MODULE_1__["default"][name];
    player.setVariable('walkingStyle', style);
  }

  setMood(player, name) {
    const anim = _data_moods__WEBPACK_IMPORTED_MODULE_2__["default"][name];
    player.data.mood = anim;
  }

  playOnServer(player, shortcut, duration) {
    if (!_data_animations__WEBPACK_IMPORTED_MODULE_0__["default"][shortcut] || player.vehicle) return;
    player.setVariable('animationSync', _data_animations__WEBPACK_IMPORTED_MODULE_0__["default"][shortcut]);
    player.setVariable('isPlayingAnim', true);

    if (duration) {
      player.timeout(() => this.stopOnServer(player), duration);
    }
  }

  stop(player) {
    if (player.cuff || !player.getVariable('animation') || player.getVariable('isPlayingAnim')) return;
    player.setVariable('animation', null);
    player.stopAnimation();
  }

  stopScenario(player) {
    if (player.getVariable('scenario')) player.setVariable('scenario', undefined);
  }

  stopOnServer(player) {
    if (!player.getVariable('isPlayingAnim')) return;
    player.setVariable('animationSync', null);
    player.setVariable('isPlayingAnim', false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Animations());

/***/ }),

/***/ "./src/utils/database.ts":
/*!*******************************!*\
  !*** ./src/utils/database.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


function initDatabase() {
  mongoose__WEBPACK_IMPORTED_MODULE_0__["connect"](process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB connected...');
    mp.events.call('databaseConnected');
  }).catch(err => console.log(err));
}

/* harmony default export */ __webpack_exports__["default"] = (initDatabase);

/***/ }),

/***/ "./src/utils/debug.ts":
/*!****************************!*\
  !*** ./src/utils/debug.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_0__);

rage_rpc__WEBPACK_IMPORTED_MODULE_0__["register"]('debug.log', (data, {
  environment
}) => {
  console.log(`data: ${data}, env:  ${environment}`);
});

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! log4js */ "log4js");
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(log4js__WEBPACK_IMPORTED_MODULE_0__);

log4js__WEBPACK_IMPORTED_MODULE_0___default.a.configure({
  appenders: {
    ban: {
      type: 'file',
      filename: 'logs/ban.log'
    }
  },
  categories: {
    default: {
      appenders: ['ban'],
      level: 'info'
    }
  }
});
log4js__WEBPACK_IMPORTED_MODULE_0___default.a.configure({
  appenders: {
    money: {
      type: 'file',
      filename: 'logs/money.log'
    }
  },
  categories: {
    default: {
      appenders: ['money'],
      level: 'info'
    }
  }
});
log4js__WEBPACK_IMPORTED_MODULE_0___default.a.configure({
  appenders: {
    adminLvl: {
      type: 'file',
      filename: 'logs/adminlvl.log'
    }
  },
  categories: {
    default: {
      appenders: ['adminLvl'],
      level: 'info'
    }
  }
});

/***/ }),

/***/ "./src/utils/mailer.ts":
/*!*****************************!*\
  !*** ./src/utils/mailer.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_1__);



class Mailer {
  constructor() {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "transporter", void 0);
  }

  sendMail(email, subject, text) {
    const mail = {
      subject,
      text,
      from: `NEPALOI PROJECT | HELP | ${'nepaloi.help@gmail.com'}`,
      to: `${email}`
    };
    this.transporter.sendMail(mail);
  }

  init() {
    this.transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__["createTransport"]({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });
    this.transporter.verify(error => {
      if (error) console.log(error);else console.log('Email server ready!');
    });
  }

}

const mailer = new Mailer();
/* harmony default export */ __webpack_exports__["default"] = (mailer);

/***/ }),

/***/ "./src/utils/players.ts":
/*!******************************!*\
  !*** ./src/utils/players.ts ***!
  \******************************/
/*! exports provided: getPlayerByDbId, getStreamedPlayers, getNearestPlayerInRange, getNearestPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayerByDbId", function() { return getPlayerByDbId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamedPlayers", function() { return getStreamedPlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNearestPlayerInRange", function() { return getNearestPlayerInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNearestPosition", function() { return getNearestPosition; });
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/sortBy */ "lodash/sortBy");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__);

function getPlayerByDbId(dbId) {
  if (!dbId) return;
  const player = mp.players.toArray().find(item => item.dbId && item.dbId.toString() === dbId.toString());
  return player;
}
function getStreamedPlayers(position) {
  const players = [];
  mp.players.forEachInRange(position, mp.config['stream-distance'], player => players.push(player));
  return players;
}
function getNearestPlayerInRange(position, range) {
  const playersInRange = [];
  mp.players.forEachInRange(position, range, player => {
    playersInRange.push(player);
  });
  let nearestPlayer;
  playersInRange.forEach((player, index) => {
    const dist = player.dist(position);

    if (dist && (!nearestPlayer || dist < playersInRange[nearestPlayer].dist(position))) {
      nearestPlayer = index;
    }
  });
  return playersInRange[nearestPlayer];
}
function getNearestPosition(player, positions) {
  return lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default()(positions, ({
    x,
    y,
    z
  }) => player.dist(new mp.Vector3(x, y, z)))[0];
}

/***/ }),

/***/ "./src/utils/savepos.ts":
/*!******************************!*\
  !*** ./src/utils/savepos.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js");
/* harmony import */ var rage_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rage_rpc__WEBPACK_IMPORTED_MODULE_1__);



class Savepos {
  constructor() {
    mp.events.addCommand({
      savepos: this.savePlayerPosition,
      savecam: this.saveCameraPosition
    });
  }

  savePlayerPosition(player, name) {
    const {
      position,
      heading,
      vehicle
    } = player;
    fs__WEBPACK_IMPORTED_MODULE_0__["readFile"]('savedposplayer.json', 'utf8', (err, data) => {
      if (err) return console.log(err);
      const list = JSON.parse(data);
      list.push({
        name,
        position,
        rotation: heading,
        vehHead: vehicle === null || vehicle === void 0 ? void 0 : vehicle.heading
      });
      fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"]('savedposplayer.json', JSON.stringify(list), 'utf8', error => {
        if (!error) player.notify(`~g~Player position saved. ~w~(${name})`);
      });
    });
  }

  async saveCameraPosition(player, name) {
    const {
      position,
      point
    } = await rage_rpc__WEBPACK_IMPORTED_MODULE_1__["callClient"](player, 'getCamCoords');
    fs__WEBPACK_IMPORTED_MODULE_0__["readFile"]('savedposcam.json', 'utf8', (err, data) => {
      if (err) return console.log(err);
      const list = JSON.parse(data);
      list.push({
        name,
        position,
        point
      });
      fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"]('savedposcam.json', JSON.stringify(list), 'utf8', error => {
        if (!error) player.notify(`~g~PositionCam saved. ~w~(${name})`);
      });
    });
  }

}

const savepos = new Savepos();

/***/ }),

/***/ "./src/utils/udp.js":
/*!**************************!*\
  !*** ./src/utils/udp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initUdpServer; });
/* harmony import */ var dgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dgram */ "dgram");
/* harmony import */ var dgram__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dgram__WEBPACK_IMPORTED_MODULE_0__);

const server = dgram__WEBPACK_IMPORTED_MODULE_0___default.a.createSocket('udp4');
mp.events.add({
  playerJoin: () => {
    const current = mp.players.toArray().length;
    const max = mp.config.maxplayers;
    const data = JSON.stringify({
      current,
      max
    });
    server.send(data, 0, data.length, process.env.SITE_UDP_PORT, process.env.SITE_IP, err => {
      if (err) throw err;
    });
  }
});
function initUdpServer() {
  server.on('message', data => {
    const {
      productName,
      id: userId,
      ...info
    } = JSON.parse(data);
    const player = mp.players.at(mp.players.toArray().find(item => item.loggedIn && item.dbId === userId).id);
    if (!player || !mp.players.exists(player)) return;

    switch (productName) {
      case 'drivepoints':
        player.money.drivepoints = info.drivepoints;
        player.moneyHelper.updateMoney();
        break;

      case 'money':
        player.money.bank = info.money;
        player.moneyHelper.updateMoney();
        break;

      case 'nickname':
        player.firstName = info.name.firstName;
        player.lastName = info.name.lastName;
        player.updateName();
        break;

      default:
        break;
    }
  });
  server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening UDP: ${address.port}`);
  });
  server.bind(process.env.UDP_PORT);
}

/***/ }),

/***/ "./src/utils/validation.ts":
/*!*********************************!*\
  !*** ./src/utils/validation.ts ***!
  \*********************************/
/*! exports provided: validateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateName", function() { return validateName; });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");


async function validateName(firstName, lastName) {
  let error;

  if (validator__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](firstName) || validator__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lastName)) {
    error = 'Введите имя и фамилию';
  }

  const regexp = /^[a-z\s]+$/i;

  if (!regexp.test(firstName) || !regexp.test(lastName)) {
    error = 'Используйте только латинские символы';
  }

  const isExist = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    firstName,
    lastName
  }).countDocuments();

  if (isExist) {
    error = 'Имя и фамилия уже используется';
  }

  return error;
}

/***/ }),

/***/ "./src/utils/vehicles.ts":
/*!*******************************!*\
  !*** ./src/utils/vehicles.ts ***!
  \*******************************/
/*! exports provided: getNearestVehicleInRange, xyInFrontOfPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNearestVehicleInRange", function() { return getNearestVehicleInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xyInFrontOfPos", function() { return xyInFrontOfPos; });
function getNearestVehicleInRange(position, range) {
  let currentVehicle;
  let tempDist = 99999999;
  mp.vehicles.forEachInRange(position, range, vehicle => {
    const dist = vehicle.dist(position);

    if (dist < range && dist < tempDist) {
      currentVehicle = vehicle;
      tempDist = dist;
    }
  });
  return currentVehicle;
}
function xyInFrontOfPos(position, heading, dist) {
  heading *= Math.PI / 180;
  position.x += dist * Math.sin(-heading);
  position.y += dist * Math.cos(-heading);
  return position;
}

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dgram":
/*!************************!*\
  !*** external "dgram" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "lodash/escape":
/*!********************************!*\
  !*** external "lodash/escape" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/escape");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isNull":
/*!********************************!*\
  !*** external "lodash/isNull" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isNull");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/random":
/*!********************************!*\
  !*** external "lodash/random" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/random");

/***/ }),

/***/ "lodash/round":
/*!*******************************!*\
  !*** external "lodash/round" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/round");

/***/ }),

/***/ "lodash/sample":
/*!********************************!*\
  !*** external "lodash/sample" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/sample");

/***/ }),

/***/ "lodash/sortBy":
/*!********************************!*\
  !*** external "lodash/sortBy" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ "log4js":
/*!*************************!*\
  !*** external "log4js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),

/***/ "math-random":
/*!******************************!*\
  !*** external "math-random" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("math-random");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map