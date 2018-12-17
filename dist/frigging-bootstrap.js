(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("frig"), require("react-addons-css-transition-group"), require("react-dom"), require("colr"), require("numeral"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "frig", "react-addons-css-transition-group", "react-dom", "colr", "numeral"], factory);
	else if(typeof exports === 'object')
		exports["FriggingBootstrap"] = factory(require("react"), require("classnames"), require("frig"), require("react-addons-css-transition-group"), require("react-dom"), require("colr"), require("numeral"));
	else
		root["FriggingBootstrap"] = factory(root["react"], root["classnames"], root["frig"], root["react-addons-css-transition-group"], root["react-dom"], root["colr"], root["numeral"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_31__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(1);

	var _checkbox = __webpack_require__(5);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _color = __webpack_require__(17);

	var _color2 = _interopRequireDefault(_color);

	var _form_error_list = __webpack_require__(24);

	var _form_error_list2 = _interopRequireDefault(_form_error_list);

	var _file = __webpack_require__(27);

	var _file2 = _interopRequireDefault(_file);

	var _form = __webpack_require__(28);

	var _form2 = _interopRequireDefault(_form);

	var _input = __webpack_require__(29);

	var _input2 = _interopRequireDefault(_input);

	var _number = __webpack_require__(30);

	var _number2 = _interopRequireDefault(_number);

	var _select = __webpack_require__(32);

	var _select2 = _interopRequireDefault(_select);

	var _submit = __webpack_require__(33);

	var _submit2 = _interopRequireDefault(_submit);

	var _switch = __webpack_require__(34);

	var _switch2 = _interopRequireDefault(_switch);

	var _text = __webpack_require__(35);

	var _text2 = _interopRequireDefault(_text);

	var _timepicker = __webpack_require__(36);

	var _timepicker2 = _interopRequireDefault(_timepicker);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Checkbox: _checkbox2.default,
	  Color: _color2.default,
	  FormErrorList: _form_error_list2.default,
	  File: _file2.default,
	  Form: _form2.default,
	  Input: _input2.default,
	  Number: _number2.default,
	  Select: _select2.default,
	  Submit: _submit2.default,
	  Switch: _switch2.default,
	  Text: _text2.default,
	  Timepicker: _timepicker2.default,
	  InputErrorList: _input_error_list2.default,
	  Saved: _saved2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./index.styl", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./index.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".frigb-error {\n  animation: friggingBootstrapErrorHeight 2.5s linear 0s 1 normal both;\n  margin: 0 0 15px 0;\n}\n.frigb-error .alert {\n  animation: friggingBootstrapErrorOpacity 0.6s linear 0s 1 normal both;\n}\n.errorLabel-appear {\n  opacity: 0;\n  max-height: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  transition: max-height 0.7s ease, margin-top 0.5s ease, margin-bottom 0.5s ease, opacity 0.5s ease;\n}\n.errorLabel-appear.errorLabel-appear-active {\n  opacity: 1;\n  max-height: 30px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n@-moz-keyframes friggingBootstrapErrorHeight {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 300px;\n  }\n}\n@-webkit-keyframes friggingBootstrapErrorHeight {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 300px;\n  }\n}\n@-o-keyframes friggingBootstrapErrorHeight {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 300px;\n  }\n}\n@keyframes friggingBootstrapErrorHeight {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 300px;\n  }\n}\n@-moz-keyframes friggingBootstrapErrorOpacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes friggingBootstrapErrorOpacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-o-keyframes friggingBootstrapErrorOpacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes friggingBootstrapErrorOpacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.frigb-ta .form-control {\n  cursor: text;\n  height: auto;\n}\n.frigb-ta-selection {\n  cursor: pointer;\n  float: left;\n  margin-right: 8px;\n  margin-top: 1px;\n  margin-bottom: 6px;\n  padding: 4px 12px;\n}\n.frigb-ta-input {\n  outline: none;\n  border: none !important;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n  width: 70%;\n  padding: 0px;\n}\n.frigb-ta-suggestions li {\n  cursor: pointer;\n}\n.bootstrap-switch-base {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: border-radius-base;\n  border: 1px solid;\n  border-color: btn-default-border;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  line-height: 8px;\n  z-index: 0;\n  vertical-align: middle;\n}\n.bootstrap-switch-base .bootstrap-switch-base-container {\n  display: inline-block;\n  top: 0;\n  border-radius: border-radius-base;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off,\n.bootstrap-switch-base .bootstrap-switch-base-label {\n  cursor: pointer;\n  display: inline-block !important;\n  height: 100%;\n  padding: padding-base-vertical padding-base-horizontal;\n  font-size: font-size-base;\n  line-height: line-height-computed;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off {\n  text-align: center;\n  z-index: 1;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on.bootstrap-switch-base-primary,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off.bootstrap-switch-base-primary {\n  color: #fff;\n  background: btn-primary-bg;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on.bootstrap-switch-base-info,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off.bootstrap-switch-base-info {\n  color: #fff;\n  background: btn-info-bg;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on.bootstrap-switch-base-success,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off.bootstrap-switch-base-success {\n  color: #fff;\n  background: btn-success-bg;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on.bootstrap-switch-base-warning,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off.bootstrap-switch-base-warning {\n  background: btn-warning-bg;\n  color: #fff;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on.bootstrap-switch-base-danger,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off.bootstrap-switch-base-danger {\n  color: #fff;\n  background: btn-danger-bg;\n}\n.bootstrap-switch-base .bootstrap-switch-base-handle-on.bootstrap-switch-base-default,\n.bootstrap-switch-base .bootstrap-switch-base-handle-off.bootstrap-switch-base-default {\n  color: #000;\n  background: gray-lighter;\n}\n.bootstrap-switch-base .bootstrap-switch-base-label {\n  text-align: center;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  z-index: 100;\n  color: btn-default-color;\n  background: btn-default-bg;\n}\n.bootstrap-switch-base input[type='radio'],\n.bootstrap-switch-base input[type='checkbox'] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  margin: 0;\n  z-index: -1;\n}\n.bootstrap-switch-base.bootstrap-switch-base-mini .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base.bootstrap-switch-base-mini .bootstrap-switch-base-handle-off,\n.bootstrap-switch-base.bootstrap-switch-base-mini .bootstrap-switch-base-label {\n  padding: padding-xs-vertical padding-xs-horizontal;\n  font-size: font-size-small;\n  line-height: line-height-small;\n}\n.bootstrap-switch-base.bootstrap-switch-base-small .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base.bootstrap-switch-base-small .bootstrap-switch-base-handle-off,\n.bootstrap-switch-base.bootstrap-switch-base-small .bootstrap-switch-base-label {\n  padding: padding-small-vertical padding-small-horizontal;\n  font-size: font-size-small;\n  line-height: line-height-small;\n}\n.bootstrap-switch-base.bootstrap-switch-base-large .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base.bootstrap-switch-base-large .bootstrap-switch-base-handle-off,\n.bootstrap-switch-base.bootstrap-switch-base-large .bootstrap-switch-base-label {\n  padding: padding-base-vertical padding-large-horizontal;\n  font-size: font-size-large;\n  line-height: line-height-large;\n}\n.bootstrap-switch-base.bootstrap-switch-base-disabled,\n.bootstrap-switch-base.bootstrap-switch-base-readonly,\n.bootstrap-switch-base.bootstrap-switch-base-indeterminate {\n  cursor: default !important;\n}\n.bootstrap-switch-base.bootstrap-switch-base-disabled .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base.bootstrap-switch-base-readonly .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base.bootstrap-switch-base-indeterminate .bootstrap-switch-base-handle-on,\n.bootstrap-switch-base.bootstrap-switch-base-disabled .bootstrap-switch-base-handle-off,\n.bootstrap-switch-base.bootstrap-switch-base-readonly .bootstrap-switch-base-handle-off,\n.bootstrap-switch-base.bootstrap-switch-base-indeterminate .bootstrap-switch-base-handle-off,\n.bootstrap-switch-base.bootstrap-switch-base-disabled .bootstrap-switch-base-label,\n.bootstrap-switch-base.bootstrap-switch-base-readonly .bootstrap-switch-base-label,\n.bootstrap-switch-base.bootstrap-switch-base-indeterminate .bootstrap-switch-base-label {\n  cursor: default !important;\n}\n.bootstrap-switch-base.bootstrap-switch-base-focused {\n  border-color: #66afe9;\n  outline: 0;\n}\n.bootstrap-switch {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: #ccc;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  line-height: 8px;\n  z-index: 0;\n  width: 102px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.bootstrap-switch .bootstrap-switch-container {\n  display: inline-block;\n  top: 0;\n  border-radius: 4px;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  width: 150px;\n  margin-left: 0px;\n}\n.bootstrap-switch .bootstrap-switch-label {\n  text-align: center;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  z-index: 100;\n  color: #333;\n  background: #fff;\n}\n.bootstrap-switch .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.bootstrap-switch .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n  -webkit-transition: margin-left 0.5s;\n  -o-transition: margin-left 0.5s;\n  transition: margin-left 0.5s;\n}\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-focused {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);\n}\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off,\n.bootstrap-switch .bootstrap-switch-label {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block !important;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 20px;\n  width: 50px;\n}\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-align: center;\n  z-index: 1;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary {\n  color: #fff;\n  background: #337ab7;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info {\n  color: #fff;\n  background: #5bc0de;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success {\n  color: #fff;\n  background: #5cb85c;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning {\n  background: #f0ad4e;\n  color: #fff;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger {\n  color: #fff;\n  background: #d9534f;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default {\n  color: #000;\n  background: #eee;\n}\n.bootstrap-switch input[type='radio'],\n.bootstrap-switch input[type='checkbox'] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  margin: 0;\n  z-index: -1;\n  opacity: 0;\n}\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n  padding: 6px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.bootstrap-switch.bootstrap-switch-disabled,\n.bootstrap-switch.bootstrap-switch-readonly,\n.bootstrap-switch.bootstrap-switch-indeterminate {\n  cursor: default !important;\n}\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label {\n  opacity: 0.5;\n  cursor: default !important;\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-off .bootstrap-switch-label {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-on .bootstrap-switch-label {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.frigb-popup-container {\n  display: block;\n  padding: 1em;\n  width: 30em;\n  max-width: 30em;\n  left: auto;\n  top: 65px;\n}\n.frigb-timepicker-input {\n  position: relative;\n}\n.frigb-color-input {\n  position: relative;\n}\n.frigb-color-block {\n  position: relative;\n  float: right;\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  margin-top: -26px;\n  margin-right: 8px;\n}\n.frigb-colorpicker {\n  height: 15em;\n  width: 95%;\n  position: absolute;\n  z-index: 999;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 0.3em;\n  box-shadow: 0.2em 0.2em 0.1em #ccc;\n  padding: 0.5em;\n  margin-top: 0.5em;\n}\n.frigb-colorpicker .frigb-map {\n  display: block;\n  position: absolute;\n  top: 1em;\n  bottom: 1em;\n  left: 1em;\n  right: 2.3em;\n  user-select: none;\n  overflow: visible;\n  cursor: pointer;\n}\n.frigb-colorpicker .frigb-map.dark .frigb-pointer {\n  border-color: #fff;\n}\n.frigb-colorpicker .frigb-map.light .frigb-pointer {\n  border-color: #000;\n}\n.frigb-colorpicker .frigb-map .frigb-pointer {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  margin-left: -5px;\n  margin-bottom: -5px;\n  border-radius: 100%;\n  border: 1px solid #fff;\n}\n.frigb-colorpicker .frigb-map .frigb-background {\n  top: 0;\n  left: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.frigb-colorpicker .frigb-map .frigb-background:before,\n.frigb-colorpicker .frigb-map .frigb-background:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.frigb-colorpicker .frigb-map .frigb-background:after {\n  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%);\n}\n.frigb-colorpicker .frigb-map .frigb-background:before {\n  background: linear-gradient(to right, #fff 0%, rgba(255,255,255,0) 100%);\n}\n.frigb-colorpicker .frigb-slider {\n  position: absolute;\n  user-select: none;\n}\n.frigb-colorpicker .frigb-slider.frigb-vertical {\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 10px;\n  cursor: pointer;\n}\n.frigb-colorpicker .frigb-slider.frigb-vertical .frigb-track {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 6px;\n  margin-left: -3px;\n}\n.frigb-colorpicker .frigb-slider .frigb-track {\n  border-radius: 3px;\n  background: #888;\n}\n.frigb-colorpicker .frigb-slider .frigb-pointer {\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  width: 14px;\n  height: 14px;\n  background: #ddd;\n  margin-left: -7px;\n  margin-bottom: -7px;\n  border-radius: 14px;\n}\n.frigb-colorpicker .frigb-hue-slider {\n  display: block;\n  position: absolute;\n  top: 1em;\n  bottom: 1em;\n  left: auto;\n  right: 1.7em;\n}\n.frigb-colorpicker .frigb-hue-slider .frigb-track {\n  background: linear-gradient(to bottom, #f00 0%, #f09 10%, #cd00ff 20%, #3200ff 30%, #06f 40%, #00fffd 50%, #0f6 60%, #35ff00 70%, #cdff00 80%, #f90 90%, #f00 100%);\n}\n.frigb-saved {\n  font-size: 14px;\n  color: #3c763d;\n}\n.frigb-saved-inline {\n  position: absolute;\n  top: -1px;\n  right: 32px;\n  padding: 9px 2px;\n  font-size: 14px;\n  color: #3c763d;\n  text-align: center;\n  width: 33px;\n}\n.frigb-colorpicker-inline {\n  right: 56px;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _frig = __webpack_require__(8);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Checkbox = (_dec = _frig.HigherOrderComponents.Boolean, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox() {
	    _classCallCheck(this, Checkbox);

	    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
	  }

	  _createClass(Checkbox, [{
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        type: 'checkbox',
	        value: this.props.value,
	        onChange: this.props.onChange
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	          _react2.default.createElement(
	            'div',
	            { className: (0, _util.formGroupCx)(this.props) },
	            _react2.default.createElement(
	              'label',
	              this.props.labelHtml,
	              _react2.default.createElement('input', this._inputHtml()),
	              this.props.label ? ' ' + this.props.label : ''
	            ),
	            _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          )
	        )
	      );
	    }
	  }]);

	  return Checkbox;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.Checkbox', _class2.defaultProps = _default_props2.default, _class2.propTypes = _default_prop_types2.default, _temp)) || _class);
	exports.default = Checkbox;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _input_error = __webpack_require__(10);

	var _input_error2 = _interopRequireDefault(_input_error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputErrorList = (_temp = _class = function (_React$Component) {
	  _inherits(InputErrorList, _React$Component);

	  function InputErrorList() {
	    _classCallCheck(this, InputErrorList);

	    return _possibleConstructorReturn(this, (InputErrorList.__proto__ || Object.getPrototypeOf(InputErrorList)).apply(this, arguments));
	  }

	  _createClass(InputErrorList, [{
	    key: 'render',
	    value: function render() {
	      var errors = this.props.errors;

	      if (!errors) return null;
	      return _react2.default.createElement(
	        'div',
	        null,
	        errors.map(function (msg, i) {
	          return _react2.default.createElement(_input_error2.default, { msg: msg, i: i, key: i });
	        })
	      );
	    }
	  }]);

	  return InputErrorList;
	}(_react2.default.Component), _class.propTypes = {
	  errors: _react2.default.PropTypes.array
	}, _temp);
	exports.default = InputErrorList;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(11);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _input_error_body = __webpack_require__(12);

	var _input_error_body2 = _interopRequireDefault(_input_error_body);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputError = (_temp = _class = function (_React$Component) {
	  _inherits(InputError, _React$Component);

	  function InputError() {
	    _classCallCheck(this, InputError);

	    return _possibleConstructorReturn(this, (InputError.__proto__ || Object.getPrototypeOf(InputError)).apply(this, arguments));
	  }

	  _createClass(InputError, [{
	    key: 'render',
	    value: function render() {
	      var transtionAttrs = {
	        transitionName: 'errorLabel',
	        transitionAppear: true,
	        transitionAppearTimeout: 0,
	        transitionEnterTimeout: 0,
	        transitionLeaveTimeout: 0,
	        key: 'error-transition-' + this.props.i
	      };
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        transtionAttrs,
	        _react2.default.createElement(_input_error_body2.default, this.props)
	      );
	    }
	  }]);

	  return InputError;
	}(_react2.default.Component), _class.propTypes = {
	  msg: _react2.default.PropTypes.string.isRequired,
	  i: _react2.default.PropTypes.number
	}, _class.defaultProps = {
	  i: 0
	}, _temp);
	exports.default = InputError;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputErrorBody = (_temp = _class = function (_React$Component) {
	  _inherits(InputErrorBody, _React$Component);

	  function InputErrorBody() {
	    _classCallCheck(this, InputErrorBody);

	    return _possibleConstructorReturn(this, (InputErrorBody.__proto__ || Object.getPrototypeOf(InputErrorBody)).apply(this, arguments));
	  }

	  _createClass(InputErrorBody, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "span",
	        { className: "help-block", key: "error-" + this.props.i },
	        _react2.default.createElement("i", {
	          className: "fa fa-exclamation-circle",
	          key: "error-label-" + this.props.i
	        }),
	        ' ',
	        this.props.msg
	      );
	    }
	  }]);

	  return InputErrorBody;
	}(_react2.default.Component), _class.propTypes = {
	  msg: _react2.default.PropTypes.string.isRequired,
	  i: _react2.default.PropTypes.number
	}, _class.defaultProps = {
	  i: 0
	}, _temp);
	exports.default = InputErrorBody;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Saved = (_temp = _class = function (_React$Component) {
	  _inherits(Saved, _React$Component);

	  function Saved() {
	    _classCallCheck(this, Saved);

	    return _possibleConstructorReturn(this, (Saved.__proto__ || Object.getPrototypeOf(Saved)).apply(this, arguments));
	  }

	  _createClass(Saved, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          saved = _props.saved,
	          className = _props.className;

	      if (!saved) return null;
	      return _react2.default.createElement(
	        'span',
	        { className: className, key: 'saved' },
	        'saved'
	      );
	    }
	  }]);

	  return Saved;
	}(_react2.default.Component), _class.propTypes = {
	  saved: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string.isRequired
	}, _class.defaultProps = {
	  className: 'frigb-saved pull-right'
	}, _temp);
	exports.default = Saved;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formGroupCx = exports.inputContainerCx = exports.sizeClassNames = undefined;

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var sizeClassNames = function sizeClassNames() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { offsets: true };

	  var classes = {};
	  var sizes = ['xs', 'sm', 'md', 'lg'];
	  // Adding column classes
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = sizes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _k = _step.value;

	      if (props[_k] != null) classes['col-' + _k + '-' + props[_k]] = true;
	    }
	    // Adding offset classes
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (opts.offsets) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = sizes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var size = _step2.value;

	        var k = size + 'Offset';
	        if (props[k] == null) continue;
	        classes['col-' + size + '-offset-' + props[k]] = true;
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	  }
	  return (0, _classnames2.default)(classes);
	};

	var inputContainerCx = function inputContainerCx(props) {
	  var labelWidth = props.labelWidth || {};
	  var inputWidth = {};
	  // The width of the input is the number of columns left after the label
	  // is placed on the row. If the label takes a full row (12 coluns) then
	  // the input is given another row (12 columns wide).
	  Object.keys(labelWidth).forEach(function (k) {
	    inputWidth[k] = 12 - labelWidth[k] || 12;
	  });

	  var horizontalClasses = sizeClassNames(inputWidth, { offsets: false });
	  return (0, _classnames2.default)(_defineProperty({
	    'col-xs-12': props.layout === 'horizontal' && props.block
	  }, horizontalClasses, props.layout === 'horizontal' && !props.block));
	};

	var formGroupCx = function formGroupCx(props) {
	  var inputHtml = props.inputHtml;

	  var isCheckbox = inputHtml ? inputHtml.type === 'checkbox' : false;

	  return (0, _classnames2.default)(Object.assign({
	    'form-group': !isCheckbox,
	    checkbox: isCheckbox,
	    'has-error': props.errors != null,
	    'has-success': props.modified && props.errors == null
	  }));
	};

	exports.sizeClassNames = sizeClassNames;
	exports.inputContainerCx = inputContainerCx;
	exports.formGroupCx = formGroupCx;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	var defaultProps = {
	  // Sizes
	  xs: 12,
	  // Block changes inputs with layout: "horizontal" to use the full width of
	  // their container and disables the label.
	  block: false,
	  // Label width for horizontal labels
	  labelWidth: {
	    xs: 12,
	    sm: 2
	  },
	  inputHtml: {}
	};

	Object.freeze(defaultProps);

	module.exports = defaultProps;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	  onChange: _react2.default.PropTypes.func.isRequired,
	  inputHtml: _react2.default.PropTypes.object,
	  className: _react2.default.PropTypes.string,
	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	};

	Object.freeze(propTypes);

	exports.default = propTypes;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _colr = __webpack_require__(19);

	var _colr2 = _interopRequireDefault(_colr);

	var _frig = __webpack_require__(8);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _map = __webpack_require__(21);

	var _map2 = _interopRequireDefault(_map);

	var _hue_slider = __webpack_require__(23);

	var _hue_slider2 = _interopRequireDefault(_hue_slider);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Color = (_dec = _frig.HigherOrderComponents.Focusable, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(Color, _React$Component);

	  function Color() {
	    _classCallCheck(this, Color);

	    var _this = _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this));

	    _this.state = { colr: _colr2.default.fromHex('#fff') };

	    _this._onColorBlockClick = _this._onColorBlockClick.bind(_this);
	    return _this;
	  }

	  // Color information is stored in state (as well as being received in props)
	  // because the HSV format we use looses some accuracy when converted to the
	  // RGB format (ie. it is a lossy conversion). To maintain information we
	  // have to maintain the HSV non-lossy intermediate value.
	  //
	  // As an example if you were to set the saturation to 0 then the RGB color
	  // would set hue and value to zero as well (#000) loosing that hue and value
	  // context we need for the color map.


	  _createClass(Color, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._updateColrCache(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._updateColrCache(nextProps);
	    }
	  }, {
	    key: '_updateColrCache',
	    value: function _updateColrCache(nextProps) {
	      var nextColr = this._normalizeColr(nextProps.value);
	      if (this.state.colr.toHex() === nextColr.toHex()) return;
	      this.setState({ colr: nextColr });
	    }
	  }, {
	    key: '_normalizeColr',
	    value: function _normalizeColr(hex) {
	      var colour = hex || '#fff';
	      if (!colour.match(/^#?([a-f0-9]{3}|[a-f0-9]{6})$/i)) colour = '#fff';
	      return _colr2.default.fromHex(colour);
	    }
	  }, {
	    key: '_requestColrChange',
	    value: function _requestColrChange(colr) {
	      var _this2 = this;

	      // Update state and then props so that the cache invalidation for incomming
	      // props (_updateColrCache) always sees the latest state.
	      var updateProps = function updateProps() {
	        return _this2.props.onChange(colr.toHex());
	      };
	      this.setState({ colr: colr }, updateProps);
	    }
	  }, {
	    key: '_colrLink',
	    value: function _colrLink() {
	      return {
	        value: this.state.colr,
	        requestChange: this._requestColrChange.bind(this)
	      };
	    }
	  }, {
	    key: '_hsv',
	    value: function _hsv() {
	      return this.state.colr.toHsvObject();
	    }
	  }, {
	    key: '_onColorBlockClick',
	    value: function _onColorBlockClick() {
	      _reactDom2.default.findDOMNode(this.refs.frigColorInput).select();
	    }
	  }, {
	    key: '_colorPopup',
	    value: function _colorPopup() {
	      if (this.props.focused === false) return undefined;
	      return _react2.default.createElement(
	        'div',
	        { className: 'controls frigb-colorpicker' },
	        _react2.default.createElement(
	          'div',
	          { className: 'frigb-hue-slider' },
	          _react2.default.createElement(_hue_slider2.default, {
	            max: 360,
	            colrLink: this._colrLink(),
	            hsv: this._hsv()
	          })
	        ),
	        _react2.default.createElement(_map2.default, {
	          max: 100,
	          colrLink: this._colrLink(),
	          hsv: this._hsv()
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        value: this.props.value,
	        onChange: this.props.onChange,
	        ref: 'frigColorInput',
	        className: (0, _classnames2.default)(this.props.inputHtml.className, 'frigb-color-input', 'form-control')
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement('input', inputProps),
	          _react2.default.createElement('div', {
	            className: 'frigb-color-block',
	            style: { backgroundColor: this.state.colr.toHex() },
	            onClick: this._onColorBlockClick
	          }),
	          this._colorPopup(),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return Color;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.Color', _class2.defaultProps = _default_props2.default, _class2.propTypes = Object.assign({}, _default_prop_types2.default, {
	  focused: _react2.default.PropTypes.bool
	}), _temp)) || _class);
	exports.default = Color;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(14);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Label = (_temp = _class = function (_React$Component) {
	  _inherits(Label, _React$Component);

	  function Label() {
	    _classCallCheck(this, Label);

	    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
	  }

	  _createClass(Label, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return !this.props.label;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var horizontalClasses = (0, _util.sizeClassNames)(this.props.labelWidth, { offsets: false });

	      if (this.props.block) return null;
	      if (this.props.layout === 'horizontal' && this.isEmpty()) {
	        return _react2.default.createElement('div', { className: horizontalClasses });
	      }

	      var labelHtml = {};
	      labelHtml.className = (0, _classnames2.default)(labelHtml.className, _defineProperty({}, horizontalClasses, this.props.layout === 'horizontal'));

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'label',
	          labelHtml,
	          this.props.label
	        )
	      );
	    }
	  }]);

	  return Label;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Label', _class.propTypes = {
	  labelWidth: _react2.default.PropTypes.object.isRequired,
	  layout: _react2.default.PropTypes.string,
	  block: _react2.default.PropTypes.bool,
	  label: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element, _react2.default.PropTypes.bool] // can set label={false} to not show a label
	  )
	}, _class.defaultProps = {
	  block: false,
	  label: '',
	  layout: 'vertical'
	}, _temp);
	exports.default = Label;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _colr = __webpack_require__(19);

	var _colr2 = _interopRequireDefault(_colr);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _draggable = __webpack_require__(22);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorMap = (_dec = (0, _draggable2.default)({
	  // See this for the below issue with eslint and higher order components - https://github.com/yannickcr/eslint-plugin-react/issues/322
	  updateClientCoords: function updateClientCoords(_ref) {
	    var clientX = _ref.clientX,
	        clientY = _ref.clientY;
	    // eslint-disable-line react/prop-types
	    var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
	    var x = (clientX - rect.left) / rect.width;
	    var y = (rect.bottom - clientY) / rect.height;
	    var saturation = this.getScaledValue(x);
	    var value = this.getScaledValue(y);
	    var colr = _colr2.default.fromHsv(this.props.hsv.h, saturation, value);

	    this.props.colrLink.requestChange(colr);
	  }
	}), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(ColorMap, _React$Component);

	  function ColorMap() {
	    _classCallCheck(this, ColorMap);

	    return _possibleConstructorReturn(this, (ColorMap.__proto__ || Object.getPrototypeOf(ColorMap)).apply(this, arguments));
	  }

	  _createClass(ColorMap, [{
	    key: 'render',
	    value: function render() {
	      var x = this.props.hsv.s;
	      var y = this.props.hsv.v;
	      var hue = _colr2.default.fromHsv(this.props.hsv.h, 100, 100).toHex();
	      var luminosity = this.props.colrLink.value.toGrayscale();

	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'frigb-map': true,
	            'frigb-dark': luminosity <= 128,
	            'frigb-light': luminosity > 128
	          }),
	          onMouseDown: this.props.startDragging,
	          onTouchStart: this.props.startDragging
	        },
	        _react2.default.createElement('div', {
	          className: 'frigb-background',
	          style: {
	            backgroundColor: hue
	          }
	        }),
	        _react2.default.createElement('div', {
	          className: 'frigb-pointer',
	          style: {
	            left: this.props.getPercentageValue(x),
	            bottom: this.props.getPercentageValue(y)
	          }
	        })
	      );
	    }
	  }]);

	  return ColorMap;
	}(_react2.default.Component), _class2.displayName = 'ColorMap', _class2.defaultProps = _default_props2.default, _class2.propTypes = {
	  hsv: _react2.default.PropTypes.shape({
	    h: _react2.default.PropTypes.number.isRequired,
	    s: _react2.default.PropTypes.number.isRequired,
	    v: _react2.default.PropTypes.number.isRequired
	  }).isRequired,

	  colrLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.object.isRequired,
	    requestChange: _react2.default.PropTypes.func.isRequired
	  }).isRequired,

	  startDragging: _react2.default.PropTypes.func.isRequired,
	  getPercentageValue: _react2.default.PropTypes.func.isRequired
	}, _temp)) || _class);
	exports.default = ColorMap;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (_ref) {
	  var updateClientCoords = _ref.updateClientCoords;

	  return function (ComponentClass) {
	    var _class, _temp2;

	    // eslint-disable-line arrow-body-style
	    return _temp2 = _class = function (_React$Component) {
	      _inherits(Draggable, _React$Component);

	      function Draggable() {
	        var _ref2;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Draggable);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
	          dragging: false
	        }, _this.getPercentageValue = function (value) {
	          var percentage = value / _this.props.max * 100;
	          return percentage + '%';
	        }, _this.getScaledValue = function (value) {
	          var clamp = value;
	          if (value < 0) clamp = 0;
	          if (value > 1) clamp = 1;
	          return clamp * _this.props.max;
	        }, _this.startDragging = function (e) {
	          _this.setState({
	            dragging: true
	          });
	          _this._updateClientCoords(e);
	        }, _this._onMouseMove = function (e) {
	          if (_this.state.dragging) {
	            _this._updateClientCoords(e);
	          }
	        }, _this._onMouseUp = function (e) {
	          if (_this.state.dragging) {
	            _this.setState({
	              dragging: false
	            });
	            _this._updateClientCoords(e);
	          }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _createClass(Draggable, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          document.addEventListener('mousemove', this._onMouseMove);
	          document.addEventListener('touchmove', this._onMouseMove);
	          document.addEventListener('mouseup', this._onMouseUp);
	          document.addEventListener('touchend', this._onMouseUp);
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          document.removeEventListener('mousemove', this._onMouseMove);
	          document.removeEventListener('touchmove', this._onMouseMove);
	          document.removeEventListener('mouseup', this._onMouseUp);
	          document.removeEventListener('touchend', this._onMouseUp);
	        }
	      }, {
	        key: '_updateClientCoords',
	        value: function _updateClientCoords(e) {
	          e.preventDefault();

	          var _ref3 = e.touches == null ? e : e.touches[0],
	              clientX = _ref3.clientX,
	              clientY = _ref3.clientY;

	          updateClientCoords.bind(this)({ clientX: clientX, clientY: clientY });
	        }
	      }, {
	        key: '_childProps',
	        value: function _childProps() {
	          var startDragging = this.startDragging,
	              getPercentageValue = this.getPercentageValue,
	              getScaledValue = this.getScaledValue,
	              active = this.active;

	          return Object.assign({}, this.props, {
	            active: active,
	            startDragging: startDragging,
	            getPercentageValue: getPercentageValue,
	            getScaledValue: getScaledValue
	          });
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(ComponentClass, this._childProps());
	        }
	      }]);

	      return Draggable;
	    }(_react2.default.Component), _class.displayName = 'Draggable', _class.propTypes = {
	      clientY: _react2.default.PropTypes.number,
	      clientX: _react2.default.PropTypes.number,
	      max: _react2.default.PropTypes.number
	    }, _class.defaultProps = {
	      max: 1
	    }, _temp2;
	  };
	};

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _colr = __webpack_require__(19);

	var _colr2 = _interopRequireDefault(_colr);

	var _draggable = __webpack_require__(22);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HueSlider = (_dec = (0, _draggable2.default)({
	  // See this for the below issue with eslint and higher order components - https://github.com/yannickcr/eslint-plugin-react/issues/322
	  updateClientCoords: function updateClientCoords(_ref) {
	    var clientY = _ref.clientY;
	    // eslint-disable-line react/prop-types
	    var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
	    var hue = this.getScaledValue((rect.bottom - clientY) / rect.height);
	    var colr = _colr2.default.fromHsv(hue, this.props.hsv.s, this.props.hsv.v);

	    this.props.colrLink.requestChange(colr);
	  }
	}), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(HueSlider, _React$Component);

	  function HueSlider() {
	    _classCallCheck(this, HueSlider);

	    return _possibleConstructorReturn(this, (HueSlider.__proto__ || Object.getPrototypeOf(HueSlider)).apply(this, arguments));
	  }

	  _createClass(HueSlider, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'frigb-slider frigb-vertical',
	          onMouseDown: this.props.startDragging,
	          onTouchStart: this.props.startDragging
	        },
	        _react2.default.createElement('div', { className: 'frigb-track' }),
	        _react2.default.createElement('div', {
	          className: 'frigb-pointer',
	          style: {
	            bottom: this.props.getPercentageValue(this.props.hsv.h)
	          }
	        })
	      );
	    }
	  }]);

	  return HueSlider;
	}(_react2.default.Component), _class2.displayName = 'HueSlider', _class2.defaultProps = _default_props2.default, _class2.propTypes = {
	  hsv: _react2.default.PropTypes.shape({
	    h: _react2.default.PropTypes.number.isRequired
	  }).isRequired,

	  startDragging: _react2.default.PropTypes.func.isRequired,
	  getPercentageValue: _react2.default.PropTypes.func.isRequired
	}, _temp)) || _class);
	exports.default = HueSlider;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _humanizeString = __webpack_require__(25);

	var _humanizeString2 = _interopRequireDefault(_humanizeString);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormErrorList = (_temp = _class = function (_React$Component) {
	  _inherits(FormErrorList, _React$Component);

	  function FormErrorList() {
	    _classCallCheck(this, FormErrorList);

	    return _possibleConstructorReturn(this, (FormErrorList.__proto__ || Object.getPrototypeOf(FormErrorList)).apply(this, arguments));
	  }

	  _createClass(FormErrorList, [{
	    key: 'render',
	    value: function render() {
	      var errorObj = this.props.errors;
	      // `errorObj` e.g. { name: ['is invalid'], phone: ['must be a number']}
	      // convert to: [`name is invalid`, 'must be a number']
	      var errors = Object.keys(errorObj).map(function (k) {
	        return (0, _humanizeString2.default)(k) + ' ' + errorObj[k];
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        errors.map(function (error) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-xs-12', key: 'error-' + error },
	            _react2.default.createElement(
	              'div',
	              { className: 'frigb-error', ref: 'error-' + error },
	              _react2.default.createElement(
	                'div',
	                { className: 'alert alert-danger' },
	                _react2.default.createElement('i', { className: 'fa fa-exclamation-circle' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'sr-only' },
	                  'Error:'
	                ),
	                ' ' + error,
	                _react2.default.createElement('div', { className: 'clearfix' })
	              )
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return FormErrorList;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Errors', _class.defaultProps = _default_props2.default, _class.propTypes = {
	  errors: _react2.default.PropTypes.array.isRequired
	}, _temp);
	exports.default = FormErrorList;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var decamelize = __webpack_require__(26);

	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		str = decamelize(str);
		str = str.toLowerCase().replace(/[_-]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
		str = str.charAt(0).toUpperCase() + str.slice(1);

		return str;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (str, sep) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		sep = typeof sep === 'undefined' ? '_' : sep;

		return str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2').toLowerCase();
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FileInput = (_temp = _class = function (_React$Component) {
	  _inherits(FileInput, _React$Component);

	  function FileInput() {
	    _classCallCheck(this, FileInput);

	    return _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).apply(this, arguments));
	  }

	  _createClass(FileInput, [{
	    key: '_input',
	    value: function _input() {
	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        className: (0, _classnames2.default)(this.props.className, 'form-control'),
	        type: 'file',
	        accept: 'image/png,image/gif,image/jpeg',
	        ref: 'frigFile',
	        onChange: this._loadFile.bind(this)
	      });
	      return _react2.default.createElement('input', inputProps);
	    }
	  }, {
	    key: '_loadFile',
	    value: function _loadFile() {
	      this.fReader = new FileReader();
	      this.fReader.onloadend = this._onFileLoad.bind(this);
	      var file = _reactDom2.default.findDOMNode(this.refs.frigFile).files[0];
	      this.fReader.readAsDataURL(file);
	    }
	  }, {
	    key: '_onFileLoad',
	    value: function _onFileLoad() {
	      this.props.requestChange(this.fReader.result.slice(0));
	    }
	  }, {
	    key: '_image',
	    value: function _image() {
	      if (this.props.value == null) return '';
	      return _react2.default.createElement('img', {
	        className: 'thumbnail',
	        height: '125',
	        width: '125',
	        src: this.props.value,
	        role: 'presentation'
	      });
	    }
	  }, {
	    key: '_inputPrefix',
	    value: function _inputPrefix() {
	      if (this.props.prefix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.prefix
	      );
	    }
	  }, {
	    key: '_inputSuffix',
	    value: function _inputSuffix() {
	      if (this.props.suffix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.suffix
	      );
	    }
	  }, {
	    key: '_inputGroup',
	    value: function _inputGroup() {
	      if (this.props.prefix || this.props.suffix) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'input-group' },
	          this._inputPrefix(),
	          this._input(),
	          this._inputSuffix()
	        );
	      }

	      return this._input();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement(
	            'div',
	            { className: 'controls' },
	            _react2.default.createElement(
	              'div',
	              { className: 'image-upload' },
	              this._image(),
	              this._inputGroup(),
	              _react2.default.createElement(_saved2.default, { saved: this.props.saved })
	            )
	          ),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return FileInput;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.FileInput', _class.defaultProps = _default_props2.default, _class.propTypes = Object.assign({}, _default_prop_types2.default, {
	  prefix: _react2.default.PropTypes.string,
	  suffix: _react2.default.PropTypes.string
	}), _temp);
	exports.default = FileInput;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = (_temp = _class = function (_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form() {
	    _classCallCheck(this, Form);

	    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	  }

	  _createClass(Form, [{
	    key: '_formHtml',
	    value: function _formHtml() {
	      var layoutClassName = 'form-' + this.props.layout;
	      var className = this.props.formHtml ? this.props.formHtml.className : '';
	      return Object.assign({}, this.props.formHtml, {
	        ref: 'form',
	        className: (className + ' ' + layoutClassName).trim()
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        this._formHtml(),
	        this.props.children
	      );
	    }
	  }]);

	  return Form;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Form', _class.defaultProps = {
	  layout: 'vertical'
	}, _class.propTypes = {
	  formHtml: _react2.default.PropTypes.shape({
	    className: _react2.default.PropTypes.string
	  }),
	  layout: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.any.isRequired
	}, _temp);
	exports.default = Form;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = (_temp = _class = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input() {
	    _classCallCheck(this, Input);

	    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
	  }

	  _createClass(Input, [{
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: (0, _classnames2.default)(this.props.className, 'form-control'),
	        value: this.props.value,
	        onChange: this.props.onChange
	      });
	    }
	  }, {
	    key: '_inputPrefix',
	    value: function _inputPrefix() {
	      if (this.props.prefix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.prefix
	      );
	    }
	  }, {
	    key: '_input',
	    value: function _input() {
	      var props = this._inputHtml();
	      return _react2.default.createElement('input', props);
	    }
	  }, {
	    key: '_inputSuffix',
	    value: function _inputSuffix() {
	      if (this.props.suffix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.suffix
	      );
	    }
	  }, {
	    key: '_inputGroup',
	    value: function _inputGroup() {
	      var labelProps = {
	        label: this.props.label,
	        labelWidth: this.props.labelWidth,
	        layout: this.props.layout
	      };
	      var inputLabel = _react2.default.createElement(_label2.default, labelProps);
	      var saved = _react2.default.createElement(_saved2.default, { saved: this.props.saved });

	      if (this.props.prefix || this.props.suffix) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          inputLabel,
	          _react2.default.createElement(
	            'div',
	            { className: 'input-group' },
	            this._inputPrefix(),
	            this._input(),
	            saved,
	            this._inputSuffix()
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        inputLabel,
	        this._input(),
	        saved
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(
	            'div',
	            { className: (0, _util.inputContainerCx)(this.props) },
	            this._inputGroup(),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          )
	        )
	      );
	    }
	  }]);

	  return Input;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Input', _class.propTypes = Object.assign({}, _default_prop_types2.default, {
	  prefix: _react2.default.PropTypes.string,
	  suffix: _react2.default.PropTypes.string
	}), _class.defaultProps = Object.assign({}, _default_props2.default, {
	  // Bootstrap input addon texts
	  prefix: undefined,
	  suffix: undefined
	}), _temp);
	exports.default = Input;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _numeral = __webpack_require__(31);

	var _numeral2 = _interopRequireDefault(_numeral);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Number = (_temp2 = _class = function (_React$Component) {
	  _inherits(Number, _React$Component);

	  function Number() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Number);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Number.__proto__ || Object.getPrototypeOf(Number)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      formattedValue: ''
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Number, [{
	    key: '_formatNumber',
	    value: function _formatNumber(currentNumber) {
	      return currentNumber ? currentNumber.format(this.props.format) : '';
	    }
	  }, {
	    key: '_onBlur',
	    value: function _onBlur() {
	      var value = this.props.value;
	      value = value.toString().replace(/,/g, '');
	      value = this._toNumeral(value) || '';
	      value = this._formatNumber(value);

	      this.setState({ formattedValue: value });
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(e) {
	      var value = e.target.value;
	      this.setState({ formattedValue: value });

	      this.props.onChange(value.replace(/,/g, ''));
	    }
	  }, {
	    key: '_inputCx',
	    value: function _inputCx() {
	      return (0, _classnames2.default)(this.props.inputHtml.className, 'form-control');
	    }
	  }, {
	    key: '_input',
	    value: function _input() {
	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        className: this._inputCx(),
	        onBlur: this._onBlur.bind(this),
	        value: this.state.formattedValue || this._formatNumber(this._toNumeral(this.props.value) || ''),
	        onChange: this._onChange.bind(this)
	      });

	      return _react2.default.createElement('input', inputProps);
	    }
	  }, {
	    key: '_toNumeral',
	    value: function _toNumeral(value) {
	      var n = (0, _numeral2.default)(value); // eslint-disable-line new-cap

	      // numeral.js converts empty strings into 0 for no reason, so if given
	      // value was not '0' or 0, treat it as null.
	      // or
	      // numeral.js can sometimes convert values (like '4.5.2') into NaN
	      // and we would rather null than NaN.
	      if (n.value() === 0 && value !== 0 && value !== '0' || isNaN(n.value())) {
	        return null;
	      }

	      return n;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_label2.default, this.props)
	          ),
	          this._input(),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return Number;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Number', _class.defaultProps = Object.assign({}, _default_props2.default, {
	  format: '0,0[.][00]'
	}), _class.propTypes = Object.assign({}, _default_prop_types2.default, {
	  format: _react2.default.PropTypes.string
	}), _temp2);
	exports.default = Number;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = (_temp = _class = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  function Select() {
	    _classCallCheck(this, Select);

	    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
	  }

	  _createClass(Select, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var hasOptions = this.props.options.length !== 0;
	      if (hasOptions && this.props.value === '') {
	        this._setInitialValue(this.props);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var hasOptions = nextProps.options.length !== 0;
	      // Setting the intial value of the select when the options load
	      if (hasOptions && nextProps.value === '') {
	        this._setInitialValue(nextProps);
	      }
	      // Blanking the select's value when the options are removed
	      if (!hasOptions && nextProps.value !== '') {
	        nextProps.onChange(undefined, { setModified: false });
	      }
	    }

	    // Default a blank value to the first option (if there are no blank options)

	  }, {
	    key: '_setInitialValue',
	    value: function _setInitialValue(nextProps) {
	      if (nextProps.options.filter(function (_ref) {
	        var value = _ref.value;
	        return value === '';
	      }).length > 0) {
	        return;
	      }
	      var value = nextProps.value || nextProps.options[0].value;
	      nextProps.onChange(value, { setModified: false });
	    }

	    // Reads the value from the DOM for the select input fields

	  }, {
	    key: '_getValue',
	    value: function _getValue() {
	      var el = _reactDom2.default.findDOMNode(this.refs.input);
	      // The value is cast to a string when we get it from DOM.value. This is a
	      // mapping of those strings to their original values in the options list.
	      var originalValues = {};
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var option = _step.value;

	          var valueHash = option.value.toString();
	          originalValues[valueHash] = option.value;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return originalValues[el.value] || el.value;
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      this.props.onChange(this._getValue());
	    }
	  }, {
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        key: 'input',
	        ref: 'input',
	        className: 'form-control',
	        value: this.props.value,
	        onChange: this.props.onChange
	      });
	    }
	  }, {
	    key: '_selectOption',
	    value: function _selectOption(o) {
	      var attrs = {
	        key: 'option-' + (o.value || ''),
	        value: o.value || ''
	      };
	      return _react2.default.createElement(
	        'option',
	        attrs,
	        o.label
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var labelProps = Object.assign({}, this.props, { className: '' });
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, labelProps),
	          _react2.default.createElement(
	            'div',
	            { className: 'controls' },
	            _react2.default.createElement(
	              'select',
	              this._inputHtml(),
	              this.props.options.map(this._selectOption)
	            ),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          ),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved })
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Select', _class.defaultProps = Object.assign({}, _default_props2.default, {
	  options: []
	}), _class.propTypes = Object.assign({}, _default_prop_types2.default, {
	  options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.any.isRequired,
	    label: _react2.default.PropTypes.string.isRequired
	  }).isRequired)
	}), _temp);
	exports.default = Select;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(14);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Submit = (_temp = _class = function (_React$Component) {
	  _inherits(Submit, _React$Component);

	  function Submit() {
	    _classCallCheck(this, Submit);

	    return _possibleConstructorReturn(this, (Submit.__proto__ || Object.getPrototypeOf(Submit)).apply(this, arguments));
	  }

	  _createClass(Submit, [{
	    key: '_inputCx',
	    value: function _inputCx() {
	      var _optionalClasses;

	      var optionalClasses = (_optionalClasses = {
	        'btn-block': this.props.block
	      }, _defineProperty(_optionalClasses, 'btn-' + this.props.bsSize, this.props.bsSize != null), _defineProperty(_optionalClasses, 'pull-right', this.props.align === 'right'), _optionalClasses);
	      return (0, _classnames2.default)(this.props.className, 'btn btn-' + this.props.bsStyle, optionalClasses);
	    }
	  }, {
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: this._inputCx(),
	        type: 'submit'
	      });
	    }
	  }, {
	    key: '_submitContainerCx',
	    value: function _submitContainerCx() {
	      var block = this.props.block;
	      var layout = this.context.frigForm.layout;

	      if (layout !== 'horizontal') return '';
	      return (0, _classnames2.default)({
	        'col-sm-9 col-sm-offset-3': block === false,
	        'col-sm-12': block === true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: this._submitContainerCx() },
	            _react2.default.createElement(
	              'button',
	              this._inputHtml(),
	              this.props.title
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Submit;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Submit', _class.defaultProps = Object.assign({}, _default_props2.default, {
	  bsStyle: 'default',
	  bsSize: undefined,
	  block: false
	}), _class.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  align: _react2.default.PropTypes.string,
	  bsSize: _react2.default.PropTypes.string,
	  bsStyle: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  title: _react2.default.PropTypes.string.isRequired,
	  block: _react2.default.PropTypes.bool
	}, _class.contextTypes = {
	  frigForm: _react2.default.PropTypes.shape({
	    layout: _react2.default.PropTypes.string.isRequired
	  }).isRequired
	}, _temp);
	exports.default = Submit;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _frig = __webpack_require__(8);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Switch = (_dec = _frig.HigherOrderComponents.Boolean, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(Switch, _React$Component);

	  function Switch() {
	    _classCallCheck(this, Switch);

	    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

	    _this._onClick = _this._onClick.bind(_this);
	    return _this;
	  }

	  _createClass(Switch, [{
	    key: '_isChecked',
	    value: function _isChecked() {
	      return this.props.value;
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      if (this.props.disabled === true) return false;

	      return this.props.onChange(!this.props.value);
	    }
	  }, {
	    key: '_switchCx',
	    value: function _switchCx() {
	      var _cx;

	      return (0, _classnames2.default)('bootstrap-switch', 'bootstrap-switch-wrapper', 'bootstrap-switch-on', 'bootstrap-switch-id-switch-state', 'bootstrap-switch-animate', (_cx = {}, _defineProperty(_cx, 'bootstrap-switch-' + this.props.bsSize, this.props.bsSize != null), _defineProperty(_cx, 'bootstrap-switch-disabled', this.props.disabled), _defineProperty(_cx, 'pull-right', this.props.align === 'right'), _cx));
	    }
	  }, {
	    key: '_switchStyle',
	    value: function _switchStyle() {
	      var handleWidth = this.props.handleWidth;

	      return { width: handleWidth ? handleWidth * 2 + 2 + 'px' : undefined };
	    }
	  }, {
	    key: '_onSpanCx',
	    value: function _onSpanCx() {
	      return (0, _classnames2.default)('bootstrap-switch-handle-on', _defineProperty({}, 'bootstrap-switch-' + this.props.onColor, this.props.onColor != null));
	    }
	  }, {
	    key: '_offSpanCx',
	    value: function _offSpanCx() {
	      return (0, _classnames2.default)('bootstrap-switch-handle-off', _defineProperty({}, 'bootstrap-switch-' + this.props.offColor, this.props.offColor != null));
	    }
	  }, {
	    key: '_input',
	    value: function _input() {
	      var handleWidth = this.props.handleWidth;

	      var handleStyle = { width: handleWidth };
	      var checkedOffset = handleWidth || 50;
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'bootstrap-switch-container',
	          ref: 'switchContainer',
	          onClick: this._onClick,
	          style: {
	            marginLeft: this._isChecked() ? '0px' : '-' + checkedOffset + 'px',
	            width: handleWidth ? handleWidth * 3 : undefined
	          }
	        },
	        _react2.default.createElement(
	          'span',
	          { className: this._onSpanCx(), style: handleStyle },
	          this.props.onText
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'bootstrap-switch-label', style: handleStyle },
	          ' '
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: this._offSpanCx(), style: handleStyle },
	          this.props.offText
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)), tabIndex: 0 },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(
	            'div',
	            { className: (0, _util.inputContainerCx)(this.props) },
	            _react2.default.createElement(
	              'div',
	              { className: this._switchCx(), style: this._switchStyle() },
	              this._input()
	            ),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          )
	        )
	      );
	    }
	  }]);

	  return Switch;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.Switch', _class2.defaultProps = Object.assign({}, _default_props2.default, {
	  onColor: 'primary',
	  onText: 'ON',
	  offColor: 'default',
	  offText: 'OFF',
	  bsSize: undefined,
	  disabled: false,
	  handleWidth: undefined
	}), _class2.propTypes = Object.assign({}, _default_prop_types2.default, {
	  align: _react2.default.PropTypes.string,
	  onColor: _react2.default.PropTypes.string,
	  onText: _react2.default.PropTypes.string,
	  offColor: _react2.default.PropTypes.string,
	  offText: _react2.default.PropTypes.string,
	  bsSize: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  handleWidth: _react2.default.PropTypes.number
	}), _temp)) || _class);
	exports.default = Switch;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Text = (_temp = _class = function (_React$Component) {
	  _inherits(Text, _React$Component);

	  function Text() {
	    _classCallCheck(this, Text);

	    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
	  }

	  _createClass(Text, [{
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: (0, _classnames2.default)(this.props.className, 'form-control'),
	        value: this.props.value || '',
	        onChange: this.props.onChange,
	        rows: this.props.rows
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement(
	            'div',
	            { className: 'controls' },
	            _react2.default.createElement('textarea', this._inputHtml())
	          ),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return Text;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Text', _class.defaultProps = _default_props2.default, _class.propTypes = Object.assign({}, _default_prop_types2.default, {
	  rows: _react2.default.PropTypes.number
	}), _temp);
	exports.default = Text;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _frig = __webpack_require__(8);

	var _time_formatter = __webpack_require__(37);

	var _time_formatter2 = _interopRequireDefault(_time_formatter);

	var _timepicker_popup = __webpack_require__(38);

	var _timepicker_popup2 = _interopRequireDefault(_timepicker_popup);

	var _input_error_list = __webpack_require__(9);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(13);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(20);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(14);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	var _default_prop_types = __webpack_require__(16);

	var _default_prop_types2 = _interopRequireDefault(_default_prop_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimePicker = (_dec = _frig.HigherOrderComponents.Focusable, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(TimePicker, _React$Component);

	  function TimePicker() {
	    _classCallCheck(this, TimePicker);

	    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this));

	    _this._onTimeChange = _this._onTimeChange.bind(_this);
	    return _this;
	  }

	  _createClass(TimePicker, [{
	    key: '_inputCx',
	    value: function _inputCx() {
	      return (0, _classnames2.default)(this.props.inputHtml.className, 'frigb-timepicker-input', 'form-control');
	    }
	  }, {
	    key: '_input',
	    value: function _input() {
	      var _this2 = this;

	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        value: this.props.value,
	        onChange: this.props.onChange,
	        className: this._inputCx(),
	        onFocus: function onFocus() {
	          if (_this2.props.value == null || _this2.props.value === '') {
	            _this2.props.onChange('12:00 AM');
	            return true;
	          }

	          return false;
	        }
	      });
	      return _react2.default.createElement('input', inputProps);
	    }
	  }, {
	    key: '_onTimeChange',
	    value: function _onTimeChange(newTime) {
	      var time = new _time_formatter2.default(newTime);
	      this.props.onChange(time.toString());
	    }
	  }, {
	    key: '_timePopup',
	    value: function _timePopup() {
	      if (this.props.focused === false) return false;
	      var value = this.props.value;
	      var props = {};

	      try {
	        var time = new _time_formatter2.default(value);
	        props = {
	          hours: time.hours,
	          minutes: time.minutes,
	          amPm: time.amPm
	        };
	      } catch (ex) {
	        props = {
	          hours: '12',
	          minutes: '00',
	          amPm: 'AM'
	        };
	      }

	      return _react2.default.createElement(_timepicker_popup2.default, _extends({}, props, {
	        onTimeChange: this._onTimeChange
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_label2.default, this.props)
	          ),
	          this._input(),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        ),
	        this._timePopup()
	      );
	    }
	  }]);

	  return TimePicker;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.TimePicker', _class2.defaultProps = _default_props2.default, _class2.propTypes = Object.assign({}, _default_prop_types2.default, {
	  focused: _react2.default.PropTypes.bool.isRequired
	}), _temp)) || _class);
	exports.default = TimePicker;

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TimeFormatter = (_temp = _class = function () {
	  function TimeFormatter(timeString) {
	    _classCallCheck(this, TimeFormatter);

	    this.timeString = timeString.trim();
	    this.matches = this.timeString.match(TimeFormatter.regex);

	    if (this.matches == null) {
	      throw new Error('invalid time ' + timeString + ' supplied to TimeFormatter');
	    }

	    if (this._hours() > 24) throw new RangeError('hour must not be >24');
	    if (this._minutes() > 59) throw new RangeError('minute must not be >59');
	  }

	  _createClass(TimeFormatter, [{
	    key: 'toString',
	    value: function toString() {
	      return this.timeString;
	    }
	  }, {
	    key: '_hours',
	    value: function _hours() {
	      return this.matches[1];
	    }
	  }, {
	    key: '_minutes',
	    value: function _minutes() {
	      return this.matches[2];
	    }
	  }, {
	    key: '_amPm',
	    value: function _amPm() {
	      return this.matches[3];
	    }
	  }, {
	    key: 'hours',
	    get: function get() {
	      var nextHour = this._hours() % 12;
	      if (nextHour === 0) nextHour = 12;

	      return nextHour.toString();
	    }
	  }, {
	    key: 'minutes',
	    get: function get() {
	      return this._minutes();
	    }
	  }, {
	    key: 'amPm',
	    get: function get() {
	      var hours = parseInt(this._hours(), 10);
	      var amPmProvided = this._amPm() != null;

	      // special case: handle e.g. 00:00 => 12:00 AM
	      if (hours === 0) return 'AM';

	      // special case: handle 12:00 without AM/PM as 12:00 PM
	      if (hours === 12 && !amPmProvided) return 'PM';

	      // handle 24 hour time (e.g. 14:50) as PM
	      if (hours > 12) return 'PM';

	      // if AM/PM provided, and none of the special cases above,
	      // use provided AM/PM
	      if (amPmProvided) return this._amPm().toUpperCase();

	      // if no AM/PM provided, and none of the special cases above,
	      // treat as 24 hour time (AM)
	      return 'AM';
	    }
	  }]);

	  return TimeFormatter;
	}(), _class.regex = /^(\d{1,2}):(\d{2}) ?([APap][Mm])?$/, _temp);
	exports.default = TimeFormatter;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _input = __webpack_require__(29);

	var _input2 = _interopRequireDefault(_input);

	var _switch = __webpack_require__(34);

	var _switch2 = _interopRequireDefault(_switch);

	var _default_props = __webpack_require__(15);

	var _default_props2 = _interopRequireDefault(_default_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimePickerPopup = (_temp = _class = function (_React$Component) {
	  _inherits(TimePickerPopup, _React$Component);

	  function TimePickerPopup() {
	    _classCallCheck(this, TimePickerPopup);

	    var _this = _possibleConstructorReturn(this, (TimePickerPopup.__proto__ || Object.getPrototypeOf(TimePickerPopup)).call(this));

	    _this.onMinuteChange = _this.onMinuteChange.bind(_this);
	    _this.onHourChange = _this.onHourChange.bind(_this);
	    _this.onAmPmChange = _this.onAmPmChange.bind(_this);
	    return _this;
	  }

	  _createClass(TimePickerPopup, [{
	    key: 'onHourChange',
	    value: function onHourChange(e) {
	      var newHour = e.target.value;
	      var hours = newHour;
	      var minutes = this._getMinutesFromProps();
	      var amPm = this._getAmPmFromProps();
	      this.onPopupTimeChange(hours, minutes, amPm);
	    }
	  }, {
	    key: 'onMinuteChange',
	    value: function onMinuteChange(e) {
	      var newMinute = e.target.value;
	      var hours = this._getHoursFromProps();
	      var minutes = newMinute;
	      var amPm = this._getAmPmFromProps();
	      this.onPopupTimeChange(hours, minutes, amPm);
	    }

	    // note: Switch does not send a SyntheticEvent, it sends the boolean value

	  }, {
	    key: 'onAmPmChange',
	    value: function onAmPmChange(isAm) {
	      var hours = this._getHoursFromProps();
	      var minutes = this._getMinutesFromProps();
	      var amPm = isAm ? 'AM' : 'PM';

	      this.onPopupTimeChange(hours, minutes, amPm);
	    }

	    // Sends a new time string to the <TimePicker>.
	    //
	    // The value we send must be a valid time parseable by TimeFormatter.
	    //
	    // Since we use <input type="number" step="..." />, this is
	    // the final chance to normalize values like "3:-15" and "3:75".

	  }, {
	    key: 'onPopupTimeChange',
	    value: function onPopupTimeChange(hours, minutes, amPm) {
	      var normalizedHours = this.normalizeHours(hours);
	      var normalizedMinutes = this.normalizeMinutes(minutes);

	      var newTimeString = normalizedHours + ':' + normalizedMinutes + ' ' + amPm;
	      this.props.onTimeChange(newTimeString);
	    }
	  }, {
	    key: 'normalizeHours',
	    value: function normalizeHours(strHours) {
	      var hours = parseInt(strHours, 10);
	      if (hours <= 0) return 12;
	      if (hours >= 13) return 1;
	      return hours;
	    }
	  }, {
	    key: 'normalizeMinutes',
	    value: function normalizeMinutes(strMinutes) {
	      var minutes = parseInt(strMinutes, 10);

	      // if minutes=75 (e.g. <input type="number" step="15">),
	      // "roll over" to 15
	      minutes = minutes % 60;

	      // if minutes=-15 (e.g. <input type="number" step="15">),
	      // "roll over" to 45
	      if (minutes < 0) {
	        minutes = 60 - Math.abs(minutes);
	      }

	      // left-pad single digit minute numbers
	      if (minutes >= 0 && minutes <= 9) {
	        return '0' + minutes;
	      }

	      return minutes.toString();
	    }
	  }, {
	    key: '_getMinutesFromProps',
	    value: function _getMinutesFromProps() {
	      return this.refs.minutes.props.value;
	    }
	  }, {
	    key: '_getHoursFromProps',
	    value: function _getHoursFromProps() {
	      return this.refs.hours.props.value;
	    }
	  }, {
	    key: '_getAmPmFromProps',
	    value: function _getAmPmFromProps() {
	      return this.refs.amPm.props.value ? 'AM' : 'PM';
	    }
	  }, {
	    key: '_hourProps',
	    value: function _hourProps() {
	      return {
	        value: this.props.hours,
	        onChange: this.onHourChange,
	        name: 'hours',
	        label: 'Hours',
	        required: false,
	        xs: 4,
	        inputHtml: {
	          type: 'number',
	          step: 1
	        }
	      };
	    }
	  }, {
	    key: '_minuteProps',
	    value: function _minuteProps() {
	      return {
	        value: this.props.minutes,
	        onChange: this.onMinuteChange,
	        name: 'minutes',
	        label: 'Minutes',
	        required: false,
	        xs: 4,
	        inputHtml: {
	          type: 'number',
	          step: 15
	        }
	      };
	    }
	  }, {
	    key: '_meridiemProps',
	    value: function _meridiemProps() {
	      return {
	        value: this.props.amPm === 'AM',
	        onChange: this.onAmPmChange,
	        label: 'AM/PM',
	        required: false,
	        xs: 4,
	        name: 'meridiem',
	        onText: 'AM',
	        onColor: 'warning',
	        offText: 'PM',
	        offColor: 'primary'
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'frigb-popup-container popover bottom' },
	        _react2.default.createElement('div', { className: 'arrow' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_input2.default, _extends({ ref: 'hours' }, this._hourProps())),
	          _react2.default.createElement(_input2.default, _extends({ ref: 'minutes' }, this._minuteProps())),
	          _react2.default.createElement(_switch2.default, _extends({ ref: 'amPm' }, this._meridiemProps()))
	        )
	      );
	    }
	  }]);

	  return TimePickerPopup;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.TimePickerPopup', _class.defaultProps = _default_props2.default, _class.propTypes = {
	  onTimeChange: _react2.default.PropTypes.func.isRequired,
	  hours: _react2.default.PropTypes.string.isRequired,
	  minutes: _react2.default.PropTypes.string.isRequired,
	  amPm: _react2.default.PropTypes.string.isRequired
	}, _temp);
	exports.default = TimePickerPopup;

/***/ }
/******/ ])
});
;