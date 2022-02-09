module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "19b0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("a8ab")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"025c84ce-vue-loader-template"}!/home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/Component.vue?vue&type=template&id=ff51406e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid grid-cols-6 gap-4"},[_c('div',{staticClass:"col-span-6"},[_vm._v("Translation:")]),_vm._m(0),_vm._m(1),_vm._m(2),_vm._m(3),_vm._m(4),_vm._m(5),_vm._m(6),_vm._m(7),_vm._m(8),_vm._m(9),_vm._m(10),_vm._m(11),_vm._m(12),_vm._m(13),_vm._m(14),_vm._m(15),_vm._m(16),_vm._m(17),_vm._m(18),_vm._m(19),_vm._m(20),_vm._m(21),_vm._m(22),_vm._m(23),_vm._m(24),_vm._m(25),_vm._m(26),_vm._m(27),_vm._m(28),_vm._m(29),_vm._m(30),_vm._m(31),_vm._m(32),_vm._m(33),_vm._m(34),_vm._m(35),_vm._m(36),_vm._m(37),_vm._m(38),_vm._m(39),_vm._m(40),_vm._m(41),_vm._m(42),_vm._m(43),_vm._m(44),_vm._m(45),_vm._m(46),_vm._m(47),_vm._m(48),_vm._m(49),_vm._m(50),_vm._m(51),_vm._m(52),_vm._m(53),_vm._m(54),_vm._m(55),_vm._m(56),_vm._m(57),_vm._m(58),_vm._m(59),_vm._m(60),_vm._m(61),_vm._m(62),_vm._m(63),_vm._m(64),_vm._m(65),_vm._m(66),_vm._m(67),_vm._m(68),_vm._m(69),_vm._m(70),_vm._m(71),_vm._m(72),_vm._m(73),_vm._m(74),_vm._m(75),_vm._m(76),_vm._m(77),_vm._m(78),_c('div',{staticClass:"col-span-6"},[_c('button',{staticClass:"button-primary",on:{"click":_vm.save}},[_vm._v("Save")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"en","value":"en"}}),_c('label',{attrs:{"for":"en"}},[_vm._v("en")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"af","value":"af"}}),_c('label',{attrs:{"for":"af"}},[_vm._v("af")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ar","value":"ar"}}),_c('label',{attrs:{"for":"ar"}},[_vm._v("ar")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"az","value":"az"}}),_c('label',{attrs:{"for":"az"}},[_vm._v("az")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"be","value":"be"}}),_c('label',{attrs:{"for":"be"}},[_vm._v("be")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"bg","value":"bg"}}),_c('label',{attrs:{"for":"bg"}},[_vm._v("bg")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"bn","value":"bn"}}),_c('label',{attrs:{"for":"bn"}},[_vm._v("bn")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"bs","value":"bs"}}),_c('label',{attrs:{"for":"bs"}},[_vm._v("bs")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ca","value":"ca"}}),_c('label',{attrs:{"for":"ca"}},[_vm._v("ca")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"cs","value":"cs"}}),_c('label',{attrs:{"for":"cs"}},[_vm._v("cs")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"cy","value":"cy"}}),_c('label',{attrs:{"for":"cy"}},[_vm._v("cy")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"da","value":"da"}}),_c('label',{attrs:{"for":"da"}},[_vm._v("da")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"de","value":"de"}}),_c('label',{attrs:{"for":"de"}},[_vm._v("de")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"de_CH","value":"de_CH"}}),_c('label',{attrs:{"for":"de_CH"}},[_vm._v("de_CH")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"el","value":"el"}}),_c('label',{attrs:{"for":"el"}},[_vm._v("el")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"es","value":"es"}}),_c('label',{attrs:{"for":"es"}},[_vm._v("es")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"et","value":"et"}}),_c('label',{attrs:{"for":"et"}},[_vm._v("et")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"eu","value":"eu"}}),_c('label',{attrs:{"for":"eu"}},[_vm._v("eu")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"fa","value":"fa"}}),_c('label',{attrs:{"for":"fa"}},[_vm._v("fa")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"fi","value":"fi"}}),_c('label',{attrs:{"for":"fi"}},[_vm._v("fi")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"fil","value":"fil"}}),_c('label',{attrs:{"for":"fil"}},[_vm._v("fil")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"fr","value":"fr"}}),_c('label',{attrs:{"for":"fr"}},[_vm._v("fr")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"gl","value":"gl"}}),_c('label',{attrs:{"for":"gl"}},[_vm._v("gl")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"gu","value":"gu"}}),_c('label',{attrs:{"for":"gu"}},[_vm._v("gu")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"he","value":"he"}}),_c('label',{attrs:{"for":"he"}},[_vm._v("he")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"hi","value":"hi"}}),_c('label',{attrs:{"for":"hi"}},[_vm._v("hi")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"hr","value":"hr"}}),_c('label',{attrs:{"for":"hr"}},[_vm._v("hr")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"hu","value":"hu"}}),_c('label',{attrs:{"for":"hu"}},[_vm._v("hu")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"hy","value":"hy"}}),_c('label',{attrs:{"for":"hy"}},[_vm._v("hy")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"id","value":"id"}}),_c('label',{attrs:{"for":"id"}},[_vm._v("id")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"is","value":"is"}}),_c('label',{attrs:{"for":"is"}},[_vm._v("is")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"it","value":"it"}}),_c('label',{attrs:{"for":"it"}},[_vm._v("it")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ja","value":"ja"}}),_c('label',{attrs:{"for":"ja"}},[_vm._v("ja")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ka","value":"ka"}}),_c('label',{attrs:{"for":"ka"}},[_vm._v("ka")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"kk","value":"kk"}}),_c('label',{attrs:{"for":"kk"}},[_vm._v("kk")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"km","value":"km"}}),_c('label',{attrs:{"for":"km"}},[_vm._v("km")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"kn","value":"kn"}}),_c('label',{attrs:{"for":"kn"}},[_vm._v("kn")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ko","value":"ko"}}),_c('label',{attrs:{"for":"ko"}},[_vm._v("ko")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"lt","value":"lt"}}),_c('label',{attrs:{"for":"lt"}},[_vm._v("lt")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"lv","value":"lv"}}),_c('label',{attrs:{"for":"lv"}},[_vm._v("lv")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"mk","value":"mk"}}),_c('label',{attrs:{"for":"mk"}},[_vm._v("mk")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"mn","value":"mn"}}),_c('label',{attrs:{"for":"mn"}},[_vm._v("mn")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"mr","value":"mr"}}),_c('label',{attrs:{"for":"mr"}},[_vm._v("mr")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ms","value":"ms"}}),_c('label',{attrs:{"for":"ms"}},[_vm._v("ms")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"nb","value":"nb"}}),_c('label',{attrs:{"for":"nb"}},[_vm._v("nb")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ne","value":"ne"}}),_c('label',{attrs:{"for":"ne"}},[_vm._v("ne")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"nl","value":"nl"}}),_c('label',{attrs:{"for":"nl"}},[_vm._v("nl")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"nn","value":"nn"}}),_c('label',{attrs:{"for":"nn"}},[_vm._v("nn")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"oc","value":"oc"}}),_c('label',{attrs:{"for":"oc"}},[_vm._v("oc")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"pl","value":"pl"}}),_c('label',{attrs:{"for":"pl"}},[_vm._v("pl")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ps","value":"ps"}}),_c('label',{attrs:{"for":"ps"}},[_vm._v("ps")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"pt","value":"pt"}}),_c('label',{attrs:{"for":"pt"}},[_vm._v("pt")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"pt_BR","value":"pt_BR"}}),_c('label',{attrs:{"for":"pt_BR"}},[_vm._v("pt_BR")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ro","value":"ro"}}),_c('label',{attrs:{"for":"ro"}},[_vm._v("ro")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ru","value":"ru"}}),_c('label',{attrs:{"for":"ru"}},[_vm._v("ru")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sc","value":"sc"}}),_c('label',{attrs:{"for":"sc"}},[_vm._v("sc")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"si","value":"si"}}),_c('label',{attrs:{"for":"si"}},[_vm._v("si")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sk","value":"sk"}}),_c('label',{attrs:{"for":"sk"}},[_vm._v("sk")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sl","value":"sl"}}),_c('label',{attrs:{"for":"sl"}},[_vm._v("sl")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sq","value":"sq"}}),_c('label',{attrs:{"for":"sq"}},[_vm._v("sq")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sr_Cyrl","value":"sr_Cyrl"}}),_c('label',{attrs:{"for":"sr_Cyrl"}},[_vm._v("sr_Cyrl")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sr_Latn","value":"sr_Latn"}}),_c('label',{attrs:{"for":"sr_Latn"}},[_vm._v("sr_Latn")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sr_Latn_ME","value":"sr_Latn_ME"}}),_c('label',{attrs:{"for":"sr_Latn_ME"}},[_vm._v("sr_Latn_ME")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sv","value":"sv"}}),_c('label',{attrs:{"for":"sv"}},[_vm._v("sv")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"sw","value":"sw"}}),_c('label',{attrs:{"for":"sw"}},[_vm._v("sw")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"tg","value":"tg"}}),_c('label',{attrs:{"for":"tg"}},[_vm._v("tg")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"th","value":"th"}}),_c('label',{attrs:{"for":"th"}},[_vm._v("th")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"tk","value":"tk"}}),_c('label',{attrs:{"for":"tk"}},[_vm._v("tk")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"tl","value":"tl"}}),_c('label',{attrs:{"for":"tl"}},[_vm._v("tl")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"tr","value":"tr"}}),_c('label',{attrs:{"for":"tr"}},[_vm._v("tr")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ug","value":"ug"}}),_c('label',{attrs:{"for":"ug"}},[_vm._v("ug")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"uk","value":"uk"}}),_c('label',{attrs:{"for":"uk"}},[_vm._v("uk")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"ur","value":"ur"}}),_c('label',{attrs:{"for":"ur"}},[_vm._v("ur")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"uz_Cyrl","value":"uz_Cyrl"}}),_c('label',{attrs:{"for":"uz_Cyrl"}},[_vm._v("uz_Cyrl")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"uz_Latn","value":"uz_Latn"}}),_c('label',{attrs:{"for":"uz_Latn"}},[_vm._v("uz_Latn")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"vi","value":"vi"}}),_c('label',{attrs:{"for":"vi"}},[_vm._v("vi")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"zh_CN","value":"zh_CN"}}),_c('label',{attrs:{"for":"zh_CN"}},[_vm._v("zh_CN")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"zh_HK","value":"zh_HK"}}),_c('label',{attrs:{"for":"zh_HK"}},[_vm._v("zh_HK")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{staticClass:"form-checkbox",attrs:{"type":"checkbox","name":"translation","id":"zh_TW","value":"zh_TW"}}),_c('label',{attrs:{"for":"zh_TW"}},[_vm._v("zh_TW")])])}]


// CONCATENATED MODULE: ./src/Component.vue?vue&type=template&id=ff51406e&

// CONCATENATED MODULE: /home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--13-1!/home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--1-0!/home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/Component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Componentvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      translation: '',
      pluginData: {}
    };
  },
  created: function created() {
    this.pluginData = window.vemtoApi.getPluginData();
    this.translation = this.pluginData.translation;
  },
  methods: {
    save: function save() {
      window.vemtoApi.savePluginData({
        translation: this.translation
      });
    }
  }
});
// CONCATENATED MODULE: ./src/Component.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Componentvue_type_script_lang_js_ = (Componentvue_type_script_lang_js_); 
// CONCATENATED MODULE: /home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Component.vue





/* normalize component */

var component = normalizeComponent(
  src_Componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Component = (component.exports);
// CONCATENATED MODULE: /home/robison/.nvm/versions/node/v17.3.0/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Component);



/***/ }),

/***/ "a8ab":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ })

/******/ })["default"];
//# sourceMappingURL=translation.common.js.map