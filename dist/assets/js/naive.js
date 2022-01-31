(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Naive"] = factory();
	else
		root["Naive"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(6);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(5)["default"];

var assertThisInitialized = __webpack_require__(7);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/audio/gain-node.js



var gain_node_GainNode = /*#__PURE__*/function () {
  function GainNode(audioContext) {
    classCallCheck_default()(this, GainNode);

    this.audioContext = audioContext;
    this.node = this.audioContext.createGain();
    this.type = 'gain';
    this.setGain(1);
  }

  createClass_default()(GainNode, [{
    key: "toDestination",
    value: function toDestination() {
      this.node.connect(this.audioContext.destination);
    }
  }, {
    key: "setGain",
    value: function setGain(value) {
      this.node.gain.setValueAtTime(value, this.audioContext.currentTime);
    }
  }, {
    key: "getGain",
    value: function getGain() {
      return this.node.gain.value;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }]);

  return GainNode;
}();

/* harmony default export */ var gain_node = (gain_node_GainNode);
// CONCATENATED MODULE: ./src/audio/source-node.js



var source_node_SourceNode = /*#__PURE__*/function () {
  function SourceNode(audioContext, audioBuffer) {
    classCallCheck_default()(this, SourceNode);

    this.audioContext = audioContext;
    this.type = 'source';
    this.progress = 0;
    this.loopNumber = 1;
    this.audioBuffer = audioBuffer;
    this.startTime = 0;
    this.when = 0;
    this.offset = 0;
    this.isPlaying = false;
    this.node = null;
    this.output = null;
  }

  createClass_default()(SourceNode, [{
    key: "connect",
    value: function connect(destination) {
      this.output = destination.node;
    }
  }, {
    key: "toDestination",
    value: function toDestination() {
      this.output = this.audioContext.destination;
    }
  }, {
    key: "play",
    value: function play() {
      var _this = this;

      var interrupt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.isPlaying && !interrupt) {
        return;
      }

      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      this.node = this.audioContext.createBufferSource();
      this.node.buffer = this.audioBuffer;
      this.node.loop = loop;

      if (!this.output) {
        this.toDestination();
      }

      this.node.connect(this.output);
      this.node.start(this.when, this.offset);
      this.startTime = this.audioContext.currentTime - this.offset;
      this.isPlaying = true;

      this.node.onended = function () {
        _this.isPlaying = false;
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      var isPause = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.node) {
        return;
      }

      this.node.stop();
      this.isPlaying = false;
      this.offset = isPause ? this.audioContext.currentTime - this.startTime : 0;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.stop(true);
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      if (this.isPlaying) {
        this.loopNumber = Math.floor((this.audioContext.currentTime - this.startTime) / this.audioBuffer.duration);
        return this.audioContext.currentTime - (this.startTime + this.audioBuffer.duration * this.loopNumber);
      }

      return this.offset;
    }
  }, {
    key: "update",
    value: function update() {
      this.progress = this.getOffset() * 100 / this.audioBuffer.duration;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this.stop();
      Object.keys(this).forEach(function (key) {
        delete _this2[key];
      });
    }
  }]);

  return SourceNode;
}();

/* harmony default export */ var source_node = (source_node_SourceNode);
// CONCATENATED MODULE: ./src/audio/audio.js





var audio_Audio = /*#__PURE__*/function () {
  function Audio(audioContext) {
    classCallCheck_default()(this, Audio);

    this.audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    this.nodes = [];
    this.chains = [];
  }

  createClass_default()(Audio, [{
    key: "createGainNode",
    value: function createGainNode() {
      var node = new gain_node(this.audioContext);
      this.nodes.push(node);
      return node;
    }
  }, {
    key: "createSourceNode",
    value: function createSourceNode(audioBuffer) {
      var node = new source_node(this.audioContext, audioBuffer);
      this.nodes.push(node);
      return node;
    }
  }, {
    key: "createNodeChain",
    value: function createNodeChain(nodes) {
      this.chains.push(nodes);
      this.connectNodes(nodes);
    }
  }, {
    key: "connectNodes",
    value: function connectNodes(nodes) {
      nodes.forEach(function (node, i) {
        var nextNode = nodes[i + 1];
        var istLastNode = i === nodes.length - 1;

        if (!istLastNode) {
          node.connect(nextNode);
        } else {
          node.toDestination();
        }
      });
    }
  }, {
    key: "getNodes",
    value: function getNodes() {
      return this.nodes;
    }
  }, {
    key: "getChains",
    value: function getChains() {
      return this.chains;
    }
  }, {
    key: "getNodesByType",
    value: function getNodesByType(type) {
      return this.nodes.filter(function (node) {
        return node.type === type;
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.nodes.forEach(function (node) {
        node.update();
      });
    }
  }]);

  return Audio;
}();

/* harmony default export */ var audio = (audio_Audio);
// CONCATENATED MODULE: ./src/loader/asset.js



/* global Image */
var asset_Asset = /*#__PURE__*/function () {
  function Asset(type, id, url) {
    classCallCheck_default()(this, Asset);

    this.id = id;
    this.url = url;
    this.type = type;
    this.progress = 0;
    this.content = null;
  }

  createClass_default()(Asset, [{
    key: "load",
    value: function load() {
      if (this.content) {
        return;
      }

      switch (this.type) {
        case 'image':
          this.loadImage();
          break;

        case 'audio-buffer':
          this.loadAudioBuffer();
          break;

        case 'json':
          this.loadJSON();
          break;
      }
    }
  }, {
    key: "loadAudioBuffer",
    value: function loadAudioBuffer() {
      var _this = this;

      var xhr = new window.XMLHttpRequest();
      var AudioContext = new (window.AudioContext || window.webkitAudioContext)();
      xhr.open('GET', this.url, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function () {
        if (xhr.status === 200) {
          AudioContext.decodeAudioData(xhr.response, function (audioBuffer) {
            _this.content = audioBuffer;
          }, function (reason) {});
        } else {
          console.log('error', _this.url, xhr.statusText);
        }
      };

      xhr.onerror = function (reason) {};

      xhr.onprogress = function (event) {
        _this.progress = event.loaded / event.total * 100;
      };

      xhr.send();
    }
  }, {
    key: "loadImage",
    value: function loadImage() {
      var _this2 = this;

      var xhr = new window.XMLHttpRequest();
      xhr.open('GET', this.url, true);
      xhr.responseType = 'blob';

      xhr.onload = function () {
        if (xhr.status === 200) {
          var image = new Image();
          image.src = window.URL.createObjectURL(xhr.response);
          _this2.content = image;
        } else {
          console.log('error', _this2.url, xhr.statusText);
        }
      };

      xhr.onerror = function (reason) {
        console.log('error', _this2.url);
      };

      xhr.onprogress = function (event) {
        _this2.progress = event.loaded / event.total * 100;
      };

      xhr.send();
    }
  }, {
    key: "loadJSON",
    value: function loadJSON() {
      var _this3 = this;

      var xhr = new window.XMLHttpRequest();
      xhr.open('GET', this.url, true);

      xhr.onload = function () {
        if (xhr.status === 200) {
          _this3.content = JSON.parse(xhr.response);
        } else {
          console.log('error', _this3.url, xhr.statusText);
        }
      };

      xhr.onerror = function (reason) {
        console.log('error loading Asset');
      };

      xhr.onprogress = function (event) {
        _this3.progress = event.loaded / event.total * 100;
      };

      xhr.send();
    }
  }]);

  return Asset;
}();

/* harmony default export */ var loader_asset = (asset_Asset);
// CONCATENATED MODULE: ./src/loader/loader.js




var loader_Loader = /*#__PURE__*/function () {
  function Loader() {
    classCallCheck_default()(this, Loader);

    this.assets = [];
  }

  createClass_default()(Loader, [{
    key: "add",
    value: function add(type, id, url) {
      var assetExist = this.get(id);

      if (assetExist) {
        console.warn('asset with id', id, 'already exist');
      } else {
        var asset = new loader_asset(type, id, url);
        this.assets.push(asset);
      }
    }
  }, {
    key: "load",
    value: function load() {
      this.assets.forEach(function (asset) {
        asset.load();
      });
    }
  }, {
    key: "list",
    value: function list() {
      var output = [];
      this.assets.forEach(function (asset) {
        output.push(asset.content);
      });
      return output;
    }
  }, {
    key: "getByType",
    value: function getByType(type) {
      var output = [];
      this.assets.forEach(function (asset) {
        if (asset.type === type) {
          output.push(asset.content);
        }
      });
      return output;
    }
  }, {
    key: "get",
    value: function get(id) {
      var output = null;
      this.assets.forEach(function (asset) {
        if (asset.id === id) {
          output = asset.content;
        }
      });
      return output;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "getProgress",
    value: function getProgress() {
      var sum = 0;
      this.assets.forEach(function (asset) {
        sum += asset.progress;
      });
      return Math.floor(sum / this.assets.length) || 0;
    }
  }, {
    key: "ready",
    value: function ready() {
      return this.assets.length && this.assets.every(function (asset) {
        return asset.content !== null;
      });
    }
  }, {
    key: "loading",
    value: function loading() {
      return this.assets.length && this.assets.some(function (asset) {
        return !asset.content;
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }]);

  return Loader;
}();

/* harmony default export */ var loader = (loader_Loader);
// CONCATENATED MODULE: ./src/machines/machine.js



var machine_Machine = /*#__PURE__*/function () {
  function Machine(entryState, states) {
    classCallCheck_default()(this, Machine);

    this.states = states || {};
    this.currentState = this.states[entryState];
    this.exited = false;
  }

  createClass_default()(Machine, [{
    key: "exit",
    value: function exit() {
      this.exited = true;
    }
  }, {
    key: "transition",
    value: function transition(state) {
      this.currentState = this.states[state];
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.exited) {
        this.currentState(this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }]);

  return Machine;
}();

/* harmony default export */ var machines_machine = (machine_Machine);
// CONCATENATED MODULE: ./src/machines/machines.js




var machines_Machines = /*#__PURE__*/function () {
  function Machines() {
    classCallCheck_default()(this, Machines);

    this.machines = [];
  }

  createClass_default()(Machines, [{
    key: "create",
    value: function create(entryState, states) {
      var machine = new machines_machine(entryState, states);
      this.machines.push(machine);
      return machine;
    }
  }, {
    key: "update",
    value: function update() {
      this.machines.forEach(function (machine) {
        machine.update();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      this.machines.forEach(function (machine) {
        machine.destroy();
      });
      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }]);

  return Machines;
}();

/* harmony default export */ var machines = (machines_Machines);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/network/json-packer.js


var JSONPacker = function JSONPacker() {};

JSONPacker.prototype.pack = function (data) {
  var _this = this;

  var schemas = {};
  var maxSchemaIndex = 0;

  var encodeArray = function encodeArray(value) {
    var len = value.length;
    var encoded = [];

    if (len === 0) {
      return [];
    }

    if (typeof value[0] === 'number') {
      encoded.push(0); // 0 is schema index for Array
    }

    for (var i = 0; i < len; i++) {
      var v = value[i];
      var current = encode(v);
      var last = encoded[encoded.length - 1];

      if (_this.isEncodedObject(current) && Array.isArray(last) && current[0] === last[0]) {
        // current and previous object have same schema,
        // so merge their values into one array
        encoded[encoded.length - 1] = last.concat(current.slice(1));
      } else {
        encoded.push(current);
      }
    }

    return encoded;
  };

  var encodeObject = function encodeObject(value) {
    var schemaKeys = Object.keys(value).sort();

    if (schemaKeys.length === 0) {
      return {};
    }

    var encoded;
    var schema = schemaKeys.length + ':' + schemaKeys.join('|');
    var schemaIndex = schemas[schema];

    if (schemaIndex) {
      // known schema
      encoded = [schemaIndex];

      for (var i = 0, k; k = schemaKeys[i++];) {
        // eslint-disable-line no-cond-assign
        encoded[i] = encode(value[k]);
      }
    } else {
      // new schema
      schemas[schema] = ++maxSchemaIndex;
      encoded = {};

      for (var _i = 0, _k; _k = schemaKeys[_i++];) {
        // eslint-disable-line no-cond-assign
        encoded[_k] = encode(value[_k]);
      }
    }

    return encoded;
  };

  var encode = function encode(value) {
    if (typeof_default()(value) !== 'object' || !value) {
      // non-objects or null return as is
      return value;
    } else if (Array.isArray(value)) {
      return encodeArray(value);
    } else {
      return encodeObject(value);
    }
  };

  return encode(data);
};
/**
 * @param {*} data Packed javascript data.
 * @return {*} Original data.
 */


JSONPacker.prototype.unpack = function (data) {
  var _this2 = this;

  var schemas = {};
  var maxSchemaIndex = 0;

  var parseArray = function parseArray(value) {
    if (value.length === 0) {
      return [];
    } else if (value[0] === 0 || typeof value[0] !== 'number') {
      return decodeArray(value);
    } else {
      return decodeObject(value);
    }
  };

  var decodeArray = function decodeArray(value) {
    var len = value.length;
    var decoded = []; // decode array of something

    for (var i = value[0] === 0 ? 1 : 0; i < len; i++) {
      var v = value[i];
      var obj = decode(v);

      if (_this2.isEncodedObject(v) && Array.isArray(obj)) {
        // several objects was encoded into single array
        decoded = decoded.concat(obj);
      } else {
        decoded.push(obj);
      }
    }

    return decoded;
  };

  var decodeObject = function decodeObject(value) {
    var schemaKeys = schemas[value[0]];
    var schemaLen = schemaKeys.length;
    var total = (value.length - 1) / schemaLen;
    var decoded;

    if (total > 1) {
      decoded = []; // array of objects with same schema

      for (var i = 0; i < total; i++) {
        var obj = {};

        for (var j = 0, k; k = schemaKeys[j++];) {
          // eslint-disable-line no-cond-assign
          obj[k] = decode(value[i * schemaLen + j]);
        }

        decoded.push(obj);
      }
    } else {
      decoded = {};

      for (var _j = 0, _k2; _k2 = schemaKeys[_j++];) {
        // eslint-disable-line no-cond-assign
        decoded[_k2] = decode(value[_j]);
      }
    }

    return decoded;
  };

  var decodeNewObject = function decodeNewObject(value) {
    var schemaKeys = Object.keys(value).sort();

    if (schemaKeys.length === 0) {
      return {};
    }

    schemas[++maxSchemaIndex] = schemaKeys;
    var decoded = {};

    for (var i = 0, k; k = schemaKeys[i++];) {
      // eslint-disable-line no-cond-assign
      decoded[k] = decode(value[k]);
    }

    return decoded;
  };

  var decode = function decode(value) {
    if (typeof_default()(value) !== 'object' || !value) {
      // non-objects or null return as is
      return value;
    } else if (Array.isArray(value)) {
      return parseArray(value);
    } else {
      // object with new schema
      return decodeNewObject(value);
    }
  };

  return decode(data);
};
/**
 * Object is encoded as array and object schema index is stored as
 * first item of the array. Valid schema index should be greater than 0,
 * because 0 is reserved for Array schema.
 * Several objects with same schema can be stored in the one array.
 * @param {*} value encoded value to check.
 * @return {boolean} true if value contains an encoded object or several
 * objects with same schema.
 */


JSONPacker.prototype.isEncodedObject = function (value) {
  return Array.isArray(value) && typeof value[0] === 'number' && value[0] !== 0;
};

/* harmony default export */ var json_packer = (JSONPacker);
// CONCATENATED MODULE: ./src/inputs/keys/key.js



var key_Key = /*#__PURE__*/createClass_default()(function Key(key) {
  classCallCheck_default()(this, Key);

  this.key = key;
  this.delta = 0;
  this.start = false;
  this.end = false;
  this.hold = 0;
  this.holdTime = 0;
  this.startFrame = 0;
  this.endFrame = 0;
});

/* harmony default export */ var keys_key = (key_Key);
// CONCATENATED MODULE: ./src/inputs/keys/key-manager.js




var key_manager_KeyManager = /*#__PURE__*/function () {
  function KeyManager() {
    classCallCheck_default()(this, KeyManager);

    this.enabled = true;
    this.keys = [];
    this.delta = 0;
    this.now = 0;
    this.then = 0;
    this.frame = 0;
    document.addEventListener('keydown', this.handleKeyDown.bind(this), false);
    document.addEventListener('keyup', this.handleKeyUp.bind(this), false);
  }

  createClass_default()(KeyManager, [{
    key: "list",
    value: function list() {
      return this.keys;
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var key = this.get(event.key);

      if (key) {
        key.hold = 1;
      }
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      var key = this.get(event.key);

      if (key) {
        key.hold = 0;
      }
    }
  }, {
    key: "enable",
    value: function enable(key) {
      if (!this.get(key)) {
        var keyObj = new keys_key(key);
        this.keys.push(keyObj);
        return keyObj;
      }

      return false;
    }
  }, {
    key: "enableKeys",
    value: function enableKeys(keys) {
      var _this = this;

      keys.forEach(function (key) {
        _this.enable(key);
      });
    }
  }, {
    key: "get",
    value: function get(key) {
      var filtered = this.keys.filter(function (keyObj) {
        return keyObj.key === key;
      });

      if (filtered.length) {
        return filtered[0];
      }

      return false;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.enabled) {
        this.frame++;
        this.now = window.performance.now();
        this.delta = Math.floor(this.now - this.then);
        this.then = this.now;
        this.keys.forEach(function (key) {
          if (key.hold) {
            key.holdTime += _this2.delta;
            key.endFrame = -1;

            if (key.startFrame === -1) {
              key.startFrame = _this2.frame;
            }
          } else {
            key.holdTime = 0;
            key.startFrame = -1;

            if (key.endFrame === -1) {
              key.endFrame = _this2.frame;
            }
          }

          key.start = key.startFrame === _this2.frame ? 1 : 0;
          key.end = key.endFrame === _this2.frame ? 1 : 0;
          key.delta = _this2.delta;
        });
      }
    }
  }, {
    key: "hold",
    value: function hold(key) {
      return this.get(key).hold;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      Object.keys(this).forEach(function (key) {
        delete _this3[key];
      });
    }
  }]);

  return KeyManager;
}();

/* harmony default export */ var key_manager = (key_manager_KeyManager);
// CONCATENATED MODULE: ./src/inputs/pointers/pointer.js



var pointer_Pointer = /*#__PURE__*/function () {
  function Pointer() {
    classCallCheck_default()(this, Pointer);
  }

  createClass_default()(Pointer, [{
    key: "function",
    value: function _function() {
      this.delta = 0;
      this.active = 0;
      this.hold = 0;
      this.start = 0;
      this.end = 0;
      this.holdTime = 0;
      this.startFrame = 0;
      this.endFrame = 0;
      this.id = 0;
      this.type = null;
      this.startX = 0;
      this.startY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.x = 0;
      this.y = 0;
    }
  }]);

  return Pointer;
}();

/* harmony default export */ var pointer = (pointer_Pointer);
// CONCATENATED MODULE: ./src/inputs/pointers/pointer-manager.js




var pointer_manager_PointerManager = /*#__PURE__*/function () {
  function PointerManager(element) {
    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    classCallCheck_default()(this, PointerManager);

    this.enabled = true;
    this.pointers = [];
    this.delta = 0;
    this.now = 0;
    this.then = 0;
    this.frame = 0;
    this.element = element;
    this.quantity = quantity;
    this.init();
  }

  createClass_default()(PointerManager, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < this.quantity; i++) {
        this.pointers.push(new pointer());
      }

      this.element.style.touchAction = 'none'; // needed for mobile

      this.element.style.userSelect = 'none'; // needed for mobile

      this.element.addEventListener('pointerdown', this.handlePointerDown.bind(this), false);
      this.element.addEventListener('pointermove', this.handlePointerMove.bind(this), false);
      this.element.addEventListener('pointerup', this.handlePointerUpAndCancel.bind(this), false);
      this.element.addEventListener('pointercancel', this.handlePointerUpAndCancel.bind(this), false);
      this.element.addEventListener('pointerleave', this.handlePointerUpAndCancel.bind(this), false);
      this.element.addEventListener('contextmenu', this.handleContextMenu.bind(this), false);
    }
  }, {
    key: "list",
    value: function list() {
      return this.pointers;
    }
  }, {
    key: "getById",
    value: function getById(id) {
      var filtered = this.pointers.filter(function (pointer) {
        return pointer.id === id;
      });

      if (filtered.length) {
        return filtered[0];
      }

      return false;
    }
  }, {
    key: "getInactivePointer",
    value: function getInactivePointer() {
      var filtered = this.pointers.filter(function (pointer) {
        return !pointer.active;
      });

      if (filtered.length) {
        return filtered[0];
      }

      return false;
    }
  }, {
    key: "handlePointerDown",
    value: function handlePointerDown(event) {
      event.preventDefault();
      var pointer = this.getById(event.pointerId) || this.getInactivePointer();

      if (pointer) {
        pointer.active = 1;
        pointer.id = event.pointerId;
        pointer.type = event.pointerType; // 'mouse', 'pen', 'touch'

        pointer.hold = 1;
        pointer.startX = Math.floor(event.clientX - event.target.offsetLeft + window.pageXOffset);
        pointer.startY = Math.floor(event.clientY - event.target.offsetTop + window.pageYOffset);
        pointer.x = Math.floor(event.clientX - event.target.offsetLeft + window.pageXOffset);
        pointer.y = Math.floor(event.clientY - event.target.offsetTop + window.pageYOffset);
      }
    }
  }, {
    key: "handlePointerMove",
    value: function handlePointerMove(event) {
      event.preventDefault();
      var pointer = this.getById(event.pointerId) || this.getInactivePointer();

      if (pointer) {
        pointer.id = event.pointerId;
        pointer.x = Math.floor(event.clientX - event.target.offsetLeft + window.pageXOffset);
        pointer.y = Math.floor(event.clientY - event.target.offsetTop + window.pageYOffset);
      }
    }
  }, {
    key: "handlePointerUpAndCancel",
    value: function handlePointerUpAndCancel(event) {
      event.preventDefault();
      var pointer = this.getById(event.pointerId);

      if (pointer) {
        pointer.active = 0;
        pointer.hold = 0;
      }
    }
  }, {
    key: "handleContextMenu",
    value: function handleContextMenu(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      if (this.enabled) {
        this.frame++;
        this.now = window.performance.now();
        this.delta = Math.floor(this.now - this.then);
        this.then = this.now;
        this.pointers.forEach(function (pointer) {
          if (pointer.hold) {
            pointer.offsetX = pointer.x - pointer.startX;
            pointer.offsetY = pointer.y - pointer.startY;
            pointer.holdTime += _this.delta;
            pointer.endFrame = -1;

            if (pointer.startFrame === -1) {
              pointer.startFrame = _this.frame;
            }
          } else {
            pointer.offsetX = 0;
            pointer.offsetY = 0;
            pointer.holdTime = 0;
            pointer.startFrame = -1;

            if (pointer.endFrame === -1) {
              pointer.endFrame = _this.frame;
            }
          }

          pointer.start = pointer.startFrame === _this.frame ? 1 : 0;
          pointer.end = pointer.endFrame === _this.frame ? 1 : 0;
          pointer.delta = _this.delta;
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      Object.keys(this).forEach(function (key) {
        delete _this2[key];
      });
    }
  }]);

  return PointerManager;
}();

/* harmony default export */ var pointer_manager = (pointer_manager_PointerManager);
// CONCATENATED MODULE: ./src/render/camera.js



var camera_Camera = /*#__PURE__*/function () {
  function Camera() {
    classCallCheck_default()(this, Camera);

    this.position = {
      x: 0,
      y: 0
    };
    this.width = 0;
    this.height = 0;
    this.rotation = 0;
    this.zoom = 1.0;
    this.lerp = 1;
  }

  createClass_default()(Camera, [{
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
  }, {
    key: "setSize",
    value: function setSize(w, h) {
      this.width = w;
      this.height = h;
    }
  }, {
    key: "setAngle",
    value: function setAngle(degrees) {
      this.rotation = degrees;
    }
  }, {
    key: "centerOn",
    value: function centerOn(position) {
      this.position.x += (this.zoom * position.x - this.width / 2 - this.position.x) * this.lerp;
      this.position.y += (this.zoom * position.y - this.height / 2 - this.position.y) * this.lerp;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(q) {
      this.zoom -= q / 1000;

      if (this.zoom < 0) {
        this.zoom = 0;
      }
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(q) {
      this.zoom += q / 1000;
    }
  }]);

  return Camera;
}();

/* harmony default export */ var camera = (camera_Camera);
// CONCATENATED MODULE: ./src/render/scene.js



var scene_Scene = /*#__PURE__*/function () {
  function Scene() {
    classCallCheck_default()(this, Scene);

    this.objects = [];
  }

  createClass_default()(Scene, [{
    key: "add",
    value: function add(object) {
      this.objects.push(object);
    }
  }]);

  return Scene;
}();

/* harmony default export */ var scene = (scene_Scene);
// CONCATENATED MODULE: ./src/loops/render-loop.js



var render_loop_RenderLoop = /*#__PURE__*/function () {
  function RenderLoop(onSTep) {
    classCallCheck_default()(this, RenderLoop);

    this.frame = 0;
    this.paused = false;
    this.onStep = onSTep;
    this.start();
  }

  createClass_default()(RenderLoop, [{
    key: "step",
    value: function step() {
      if (!this.paused) {
        this.frame++;
        this.onStep();
        window.requestAnimationFrame(this.step.bind(this));
      }
    }
  }, {
    key: "start",
    value: function start() {
      this["false"] = true;
      window.requestAnimationFrame(this.step.bind(this));
    }
  }, {
    key: "stop",
    value: function stop() {
      this.paused = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }]);

  return RenderLoop;
}();

/* harmony default export */ var render_loop = (render_loop_RenderLoop);
// CONCATENATED MODULE: ./src/render/renderer.js






var renderer_Renderer = /*#__PURE__*/function () {
  function Renderer(canvas) {
    var _this = this;

    classCallCheck_default()(this, Renderer);

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.camera = new camera();
    this.scene = new scene();
    this.renderLoop = new render_loop(function () {
      return _this.draw();
    });
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  createClass_default()(Renderer, [{
    key: "resize",
    value: function resize() {
      var parentRect = this.canvas.parentElement.getBoundingClientRect();
      this.canvas.width = parentRect.right - parentRect.left;
      this.canvas.style.width = parentRect.right - parentRect.left;
      this.canvas.height = this.canvas.parentElement.getBoundingClientRect().height;
      this.canvas.style.height = this.canvas.parentElement.getBoundingClientRect().height;
      this.camera.width = this.canvas.width;
      this.camera.height = this.canvas.height;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "circle",
    value: function circle(x, y, radius) {
      this.context.beginPath();
      this.context.arc(x, y, radius, 0, 2 * Math.PI);
      this.context.stroke();
    }
  }, {
    key: "text",
    value: function text(_text, x, y) {
      this.context.fillText(_text, x, y);
    }
  }, {
    key: "line",
    value: function line(pointA, pointB) {
      this.context.beginPath();
      this.context.moveTo(pointA.x, pointA.y);
      this.context.lineTo(pointB.x, pointB.y);
      this.context.stroke();
    }
  }, {
    key: "rect",
    value: function rect(x, y, width, height) {
      this.context.rect(x, y, width, height);
      this.context.stroke();
    }
  }, {
    key: "image",
    value: function image(_image, sx, sy, sw, sh, dx, dy, dw, dh) {
      this.context.drawImage(_image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this.clear();
      this.context.save();
      this.context.translate(this.camera.width / 2, this.camera.height / 2);
      this.context.rotate(this.camera.rotation);
      this.context.translate(-(this.camera.width / 2), -(this.camera.height / 2));
      this.context.translate(-this.camera.position.x, -this.camera.position.y);
      this.context.scale(this.camera.zoom, this.camera.zoom);
      this.scene.objects.forEach(function (object) {
        object.draw(_this2);
      });
      this.context.restore();
    }
  }]);

  return Renderer;
}();

/* harmony default export */ var renderer = (renderer_Renderer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/render/game-object.js



var game_object_GameObject = /*#__PURE__*/createClass_default()(function GameObject() {
  classCallCheck_default()(this, GameObject);

  this.position = {
    x: 0,
    y: 0
  };
  this.rotation = 0;
  this.scale = 1;
});

/* harmony default export */ var game_object = (game_object_GameObject);
// CONCATENATED MODULE: ./src/render/sprite.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var sprite_Sprite = /*#__PURE__*/function (_GameObject) {
  inherits_default()(Sprite, _GameObject);

  var _super = _createSuper(Sprite);

  function Sprite(image, width, height, sourceWidth, sourceHeight) {
    var _this;

    classCallCheck_default()(this, Sprite);

    _this = _super.call(this);
    _this.image = image;
    _this.width = width || image.width;
    _this.height = height || image.height;
    _this.sourceWidth = sourceWidth || image.width;
    _this.sourceHeight = sourceHeight || image.height;
    _this.sourceX = 0;
    _this.sourceY = 0;
    _this.animations = [];
    _this.delay = 0;
    _this.counter = 0;
    return _this;
  }

  createClass_default()(Sprite, [{
    key: "addAnimation",
    value: function addAnimation(name, sequence, milliseconds) {
      if (!this.getAnimation(name)) {
        this.animations.push({
          name: name,
          sequence: sequence,
          milliseconds: milliseconds
        });
      }
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var output = false;
      this.animations.forEach(function (animation) {
        if (animation.name === name) {
          output = animation;
        }
      });
      return output;
    }
  }, {
    key: "play",
    value: function play(name, delta) {
      var animation = this.getAnimation(name);

      if (animation) {
        var columns = this.image.width / this.sourceWidth;
        this.delay += delta;

        if (this.delay >= animation.milliseconds) {
          this.counter = (this.counter + 1) % animation.sequence.length;
          this.delay = 0;
        }

        this.sourceY = Math.floor((animation.sequence[this.counter] + 1) / columns) * this.sourceHeight;
        this.sourceX = this.sourceWidth * animation.sequence[this.counter] - this.image.width * this.sourceY / this.height;
      }
    }
  }, {
    key: "draw",
    value: function draw(render) {
      if (this.image) {
        render.image(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.position.x - this.width * 0.5, this.position.y - this.height * 0.5, this.width, this.height);
      }
    }
  }]);

  return Sprite;
}(game_object);

/* harmony default export */ var sprite = (sprite_Sprite);
// CONCATENATED MODULE: ./src/render/tile-sprite.js






function tile_sprite_createSuper(Derived) { var hasNativeReflectConstruct = tile_sprite_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function tile_sprite_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var tile_sprite_TileSprite = /*#__PURE__*/function (_GameObject) {
  inherits_default()(TileSprite, _GameObject);

  var _super = tile_sprite_createSuper(TileSprite);

  function TileSprite(image, pixels, width, height) {
    var _this;

    classCallCheck_default()(this, TileSprite);

    _this = _super.call(this);
    var tmpCanvas = document.createElement('canvas');
    var tmpContext = tmpCanvas.getContext('2d');
    tmpCanvas.width = image.width * 2;
    tmpCanvas.height = image.height * 2;
    tmpContext.drawImage(image, 0, 0, image.width * 0.5, image.height * 0.5);
    tmpContext.drawImage(image, image.width * 0.5, 0, image.width * 0.5, image.height * 0.5);
    tmpContext.drawImage(image, 0, image.height * 0.5, image.width * 0.5, image.height * 0.5);
    tmpContext.drawImage(image, image.width * 0.5, image.height * 0.5, image.width * 0.5, image.height * 0.5);
    _this.image = tmpCanvas;
    _this.pixels = pixels || 100;
    _this.width = width || image.width;
    _this.height = height || image.height;
    _this.sourceWidth = image.width * 0.5;
    _this.sourceHeight = image.height * 0.5;
    _this.sourceX = 0;
    _this.sourceY = 0;
    return _this;
  }

  createClass_default()(TileSprite, [{
    key: "scroll",
    value: function scroll(direction, delta) {
      if (direction === 'left') {
        this.sourceX += delta * this.pixels / 1000;

        if (this.sourceX + this.sourceWidth >= this.sourceWidth * 2) {
          this.sourceX = 0;
        }
      }

      if (direction === 'right') {
        this.sourceX -= delta * this.pixels / 1000;

        if (this.sourceX <= 0) {
          this.sourceX = this.sourceWidth;
        }
      }

      if (direction === 'up') {
        this.sourceY += delta * this.pixels / 1000;

        if (this.sourceY + this.sourceHeight >= this.sourceHeight * 2) {
          this.sourceY = 0;
        }
      }

      if (direction === 'down') {
        this.sourceY -= delta * this.pixels / 1000;

        if (this.sourceY <= 0) {
          this.sourceY = this.sourceHeight;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(render) {
      if (this.image) {
        render.image(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.position.x - this.width * 0.5, this.position.y - this.height * 0.5, this.width, this.height);
      }
    }
  }]);

  return TileSprite;
}(game_object);

/* harmony default export */ var tile_sprite = (tile_sprite_TileSprite);
// CONCATENATED MODULE: ./src/render/free-hand.js






function free_hand_createSuper(Derived) { var hasNativeReflectConstruct = free_hand_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function free_hand_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var free_hand_FreeHand = /*#__PURE__*/function (_GameObject) {
  inherits_default()(FreeHand, _GameObject);

  var _super = free_hand_createSuper(FreeHand);

  function FreeHand(draw) {
    var _this;

    classCallCheck_default()(this, FreeHand);

    _this = _super.call(this);
    _this.draw = draw;
    return _this;
  }

  return createClass_default()(FreeHand);
}(game_object);

/* harmony default export */ var free_hand = (free_hand_FreeHand);
// CONCATENATED MODULE: ./src/loops/update-loop.js



var update_loop_UpdateLoop = /*#__PURE__*/function () {
  function UpdateLoop() {
    var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    var onSTep = arguments.length > 1 ? arguments[1] : undefined;

    classCallCheck_default()(this, UpdateLoop);

    this.fps = fps;
    this.frame = 0;
    this.interval = null;
    this.paused = false;
    this.delta = 1000 / this.fps;
    this.onStep = onSTep;
    this.start();
  }

  createClass_default()(UpdateLoop, [{
    key: "getFps",
    value: function getFps() {
      return this.fps;
    }
  }, {
    key: "setFps",
    value: function setFps(fps) {
      this.stop();
      this.fps = Number(fps);
      this.start();
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.paused = false;
      this.delta = 1000 / this.fps;
      this.interval = setInterval(function () {
        _this.step(_this.delta);
      }, this.delta);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      clearInterval(this.interval);
    }
  }, {
    key: "step",
    value: function step(delta) {
      if (!this.paused) {
        this.frame++;
        this.onStep(delta);
      }
    }
  }, {
    key: "toPPS",
    value: function toPPS(velocity) {
      return velocity * this.delta / 1000;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this.stop();
      Object.keys(this).forEach(function (key) {
        delete _this2[key];
      });
    }
  }]);

  return UpdateLoop;
}();

/* harmony default export */ var update_loop = (update_loop_UpdateLoop);
// CONCATENATED MODULE: ./src/index.js












var Wrapper = {
  Audio: audio,
  Loader: loader,
  Machines: machines,
  JSONPacker: json_packer,
  KeyManager: key_manager,
  PointerManager: pointer_manager,
  Renderer: renderer,
  Sprite: sprite,
  TileSprite: tile_sprite,
  FreeHand: free_hand,
  RenderLoop: render_loop,
  UpdateLoop: update_loop
};
/* harmony default export */ var src = __webpack_exports__["default"] = (Wrapper);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OYWl2ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmFpdmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL05haXZlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9hdWRpby9nYWluLW5vZGUuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvYXVkaW8vc291cmNlLW5vZGUuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvYXVkaW8vYXVkaW8uanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvbG9hZGVyL2Fzc2V0LmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvbWFjaGluZXMvbWFjaGluZS5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9tYWNoaW5lcy9tYWNoaW5lcy5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9uZXR3b3JrL2pzb24tcGFja2VyLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL2lucHV0cy9rZXlzL2tleS5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbnB1dHMva2V5cy9rZXktbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbnB1dHMvcG9pbnRlcnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbnB1dHMvcG9pbnRlcnMvcG9pbnRlci1tYW5hZ2VyLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL3JlbmRlci9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvcmVuZGVyL3NjZW5lLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL2xvb3BzL3JlbmRlci1sb29wLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9yZW5kZXIvZ2FtZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvcmVuZGVyL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9yZW5kZXIvdGlsZS1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvcmVuZGVyL2ZyZWUtaGFuZC5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9sb29wcy91cGRhdGUtbG9vcC5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHYWluTm9kZSIsImF1ZGlvQ29udGV4dCIsIm5vZGUiLCJjcmVhdGVHYWluIiwidHlwZSIsInNldEdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJ2YWx1ZSIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJTb3VyY2VOb2RlIiwiYXVkaW9CdWZmZXIiLCJwcm9ncmVzcyIsImxvb3BOdW1iZXIiLCJzdGFydFRpbWUiLCJ3aGVuIiwib2Zmc2V0IiwiaXNQbGF5aW5nIiwib3V0cHV0IiwiaW50ZXJydXB0IiwibG9vcCIsInN0YXRlIiwicmVzdW1lIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiYnVmZmVyIiwidG9EZXN0aW5hdGlvbiIsInN0YXJ0Iiwib25lbmRlZCIsImlzUGF1c2UiLCJzdG9wIiwiTWF0aCIsImZsb29yIiwiZHVyYXRpb24iLCJnZXRPZmZzZXQiLCJBdWRpbyIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm5vZGVzIiwiY2hhaW5zIiwicHVzaCIsImNvbm5lY3ROb2RlcyIsImkiLCJuZXh0Tm9kZSIsImlzdExhc3ROb2RlIiwibGVuZ3RoIiwiZmlsdGVyIiwidXBkYXRlIiwiQXNzZXQiLCJpZCIsInVybCIsImNvbnRlbnQiLCJsb2FkSW1hZ2UiLCJsb2FkQXVkaW9CdWZmZXIiLCJsb2FkSlNPTiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsIm9ubG9hZCIsInN0YXR1cyIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwicmVhc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwib25wcm9ncmVzcyIsImV2ZW50IiwibG9hZGVkIiwidG90YWwiLCJzZW5kIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkpTT04iLCJwYXJzZSIsIkxvYWRlciIsImFzc2V0cyIsImFzc2V0RXhpc3QiLCJnZXQiLCJ3YXJuIiwiYXNzZXQiLCJsb2FkIiwic3VtIiwiZXZlcnkiLCJzb21lIiwiTWFjaGluZSIsImVudHJ5U3RhdGUiLCJzdGF0ZXMiLCJjdXJyZW50U3RhdGUiLCJleGl0ZWQiLCJNYWNoaW5lcyIsIm1hY2hpbmVzIiwibWFjaGluZSIsImRlc3Ryb3kiLCJKU09OUGFja2VyIiwicHJvdG90eXBlIiwicGFjayIsImRhdGEiLCJzY2hlbWFzIiwibWF4U2NoZW1hSW5kZXgiLCJlbmNvZGVBcnJheSIsImxlbiIsImVuY29kZWQiLCJ2IiwiY3VycmVudCIsImVuY29kZSIsImxhc3QiLCJpc0VuY29kZWRPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJjb25jYXQiLCJzbGljZSIsImVuY29kZU9iamVjdCIsInNjaGVtYUtleXMiLCJzb3J0Iiwic2NoZW1hIiwiam9pbiIsInNjaGVtYUluZGV4IiwiayIsInVucGFjayIsInBhcnNlQXJyYXkiLCJkZWNvZGVBcnJheSIsImRlY29kZU9iamVjdCIsImRlY29kZWQiLCJvYmoiLCJkZWNvZGUiLCJzY2hlbWFMZW4iLCJqIiwiZGVjb2RlTmV3T2JqZWN0IiwiS2V5IiwiZGVsdGEiLCJlbmQiLCJob2xkIiwiaG9sZFRpbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJLZXlNYW5hZ2VyIiwiZW5hYmxlZCIsIm5vdyIsInRoZW4iLCJmcmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJiaW5kIiwiaGFuZGxlS2V5VXAiLCJrZXlPYmoiLCJlbmFibGUiLCJmaWx0ZXJlZCIsInBlcmZvcm1hbmNlIiwiUG9pbnRlciIsImFjdGl2ZSIsInN0YXJ0WCIsInN0YXJ0WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsInkiLCJQb2ludGVyTWFuYWdlciIsImVsZW1lbnQiLCJxdWFudGl0eSIsInBvaW50ZXJzIiwiaW5pdCIsInN0eWxlIiwidG91Y2hBY3Rpb24iLCJ1c2VyU2VsZWN0IiwiaGFuZGxlUG9pbnRlckRvd24iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCIsImhhbmRsZUNvbnRleHRNZW51IiwicG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwiZ2V0QnlJZCIsInBvaW50ZXJJZCIsImdldEluYWN0aXZlUG9pbnRlciIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJwYWdlWU9mZnNldCIsInN0b3BQcm9wYWdhdGlvbiIsIkNhbWVyYSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJyb3RhdGlvbiIsInpvb20iLCJsZXJwIiwidyIsImgiLCJkZWdyZWVzIiwicSIsIlNjZW5lIiwib2JqZWN0cyIsIm9iamVjdCIsIlJlbmRlckxvb3AiLCJvblNUZXAiLCJwYXVzZWQiLCJvblN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwiUmVuZGVyZXIiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbWVyYSIsInNjZW5lIiwicmVuZGVyTG9vcCIsImRyYXciLCJyZXNpemUiLCJwYXJlbnRSZWN0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwibGVmdCIsImNsZWFyUmVjdCIsInJhZGl1cyIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlIiwidGV4dCIsImZpbGxUZXh0IiwicG9pbnRBIiwicG9pbnRCIiwibW92ZVRvIiwibGluZVRvIiwicmVjdCIsInN4Iiwic3kiLCJzdyIsInNoIiwiZHgiLCJkeSIsImR3IiwiZGgiLCJkcmF3SW1hZ2UiLCJjbGVhciIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJzY2FsZSIsInJlc3RvcmUiLCJHYW1lT2JqZWN0IiwiU3ByaXRlIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJzb3VyY2VYIiwic291cmNlWSIsImFuaW1hdGlvbnMiLCJkZWxheSIsImNvdW50ZXIiLCJuYW1lIiwic2VxdWVuY2UiLCJtaWxsaXNlY29uZHMiLCJnZXRBbmltYXRpb24iLCJhbmltYXRpb24iLCJjb2x1bW5zIiwicmVuZGVyIiwiVGlsZVNwcml0ZSIsInBpeGVscyIsInRtcENhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJ0bXBDb250ZXh0IiwiZGlyZWN0aW9uIiwiRnJlZUhhbmQiLCJVcGRhdGVMb29wIiwiZnBzIiwiaW50ZXJ2YWwiLCJOdW1iZXIiLCJzZXRJbnRlcnZhbCIsInBhdXNlIiwiY2xlYXJJbnRlcnZhbCIsInZlbG9jaXR5IiwiV3JhcHBlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSw0Rzs7Ozs7O0FDbkJBO0FB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ZHNCLGdCQUFjLEVBQUVBLGVBTkY7QUFPZDhDLFVBQVEsRUFBUkEsUUFQYztBQVFkMkMsUUFBTSxFQUFOQSxNQVJjO0FBU2RlLFlBQVUsRUFBVkEsV0FUYztBQVVkTSxVQUFRLEVBQVJBLFNBVmM7QUFXZHRFLFlBQVUsRUFBVkEsV0FYYztBQVlkdUUsWUFBVSxFQUFFQSxXQUFVQTtBQVpSLENBQWhCO0FBZWVRLGdGQUFmLEUiLCJmaWxlIjoibmFpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOYWl2ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJOYWl2ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBHYWluTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChhdWRpb0NvbnRleHQpIHtcbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dFxuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKVxuICAgIHRoaXMudHlwZSA9ICdnYWluJ1xuICAgIHRoaXMuc2V0R2FpbigxKVxuICB9XG5cbiAgdG9EZXN0aW5hdGlvbiAoKSB7XG4gICAgdGhpcy5ub2RlLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pXG4gIH1cblxuICBzZXRHYWluICh2YWx1ZSkge1xuICAgIHRoaXMubm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZhbHVlLCB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSlcbiAgfVxuXG4gIGdldEdhaW4gKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGUuZ2Fpbi52YWx1ZVxuICB9XG5cbiAgdXBkYXRlICgpIHt9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYWluTm9kZVxuIiwiY2xhc3MgU291cmNlTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChhdWRpb0NvbnRleHQsIGF1ZGlvQnVmZmVyKSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHRcbiAgICB0aGlzLnR5cGUgPSAnc291cmNlJ1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwXG4gICAgdGhpcy5sb29wTnVtYmVyID0gMVxuICAgIHRoaXMuYXVkaW9CdWZmZXIgPSBhdWRpb0J1ZmZlclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMFxuICAgIHRoaXMud2hlbiA9IDBcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlXG4gICAgdGhpcy5ub2RlID0gbnVsbFxuICAgIHRoaXMub3V0cHV0ID0gbnVsbFxuICB9XG5cbiAgY29ubmVjdCAoZGVzdGluYXRpb24pIHtcbiAgICB0aGlzLm91dHB1dCA9IGRlc3RpbmF0aW9uLm5vZGVcbiAgfVxuXG4gIHRvRGVzdGluYXRpb24gKCkge1xuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb25cbiAgfVxuXG4gIHBsYXkgKGludGVycnVwdCA9IGZhbHNlLCBsb29wID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcgJiYgIWludGVycnVwdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXVkaW9Db250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgICAgdGhpcy5hdWRpb0NvbnRleHQucmVzdW1lKClcbiAgICB9XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuICAgIHRoaXMubm9kZS5idWZmZXIgPSB0aGlzLmF1ZGlvQnVmZmVyXG4gICAgdGhpcy5ub2RlLmxvb3AgPSBsb29wXG5cbiAgICBpZiAoIXRoaXMub3V0cHV0KSB7XG4gICAgICB0aGlzLnRvRGVzdGluYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMub3V0cHV0KVxuICAgIHRoaXMubm9kZS5zdGFydCh0aGlzLndoZW4sIHRoaXMub2Zmc2V0KVxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUgLSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZVxuICAgIHRoaXMubm9kZS5vbmVuZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHN0b3AgKGlzUGF1c2UgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5ub2RlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLm5vZGUuc3RvcCgpXG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZVxuICAgIHRoaXMub2Zmc2V0ID0gaXNQYXVzZSA/IHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lIC0gdGhpcy5zdGFydFRpbWUgOiAwXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5zdG9wKHRydWUpXG4gIH1cblxuICBnZXRPZmZzZXQgKCkge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5sb29wTnVtYmVyID0gTWF0aC5mbG9vcigodGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgLyB0aGlzLmF1ZGlvQnVmZmVyLmR1cmF0aW9uKVxuICAgICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lIC0gKHRoaXMuc3RhcnRUaW1lICsgdGhpcy5hdWRpb0J1ZmZlci5kdXJhdGlvbiAqIHRoaXMubG9vcE51bWJlcilcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMuZ2V0T2Zmc2V0KCkgKiAxMDAgLyB0aGlzLmF1ZGlvQnVmZmVyLmR1cmF0aW9uXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnN0b3AoKVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VOb2RlXG4iLCJpbXBvcnQgR2Fpbk5vZGUgZnJvbSAnLi9nYWluLW5vZGUnXG5pbXBvcnQgU291cmNlTm9kZSBmcm9tICcuL3NvdXJjZS1ub2RlJ1xuXG5jbGFzcyBBdWRpbyB7XG4gIGNvbnN0cnVjdG9yIChhdWRpb0NvbnRleHQpIHtcbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dCB8fCBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKVxuICAgIHRoaXMubm9kZXMgPSBbXVxuICAgIHRoaXMuY2hhaW5zID0gW11cbiAgfVxuXG4gIGNyZWF0ZUdhaW5Ob2RlICgpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IEdhaW5Ob2RlKHRoaXMuYXVkaW9Db250ZXh0KVxuICAgIHRoaXMubm9kZXMucHVzaChub2RlKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBjcmVhdGVTb3VyY2VOb2RlIChhdWRpb0J1ZmZlcikge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgU291cmNlTm9kZSh0aGlzLmF1ZGlvQ29udGV4dCwgYXVkaW9CdWZmZXIpXG4gICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGNyZWF0ZU5vZGVDaGFpbiAobm9kZXMpIHtcbiAgICB0aGlzLmNoYWlucy5wdXNoKG5vZGVzKVxuICAgIHRoaXMuY29ubmVjdE5vZGVzKG5vZGVzKVxuICB9XG5cbiAgY29ubmVjdE5vZGVzIChub2Rlcykge1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IG5leHROb2RlID0gbm9kZXNbaSArIDFdXG4gICAgICBjb25zdCBpc3RMYXN0Tm9kZSA9IGkgPT09IG5vZGVzLmxlbmd0aCAtIDFcblxuICAgICAgaWYgKCFpc3RMYXN0Tm9kZSkge1xuICAgICAgICBub2RlLmNvbm5lY3QobmV4dE5vZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnRvRGVzdGluYXRpb24oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXROb2RlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNcbiAgfVxuXG4gIGdldENoYWlucyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhaW5zXG4gIH1cblxuICBnZXROb2Rlc0J5VHlwZSAodHlwZSkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmZpbHRlcihub2RlID0+IG5vZGUudHlwZSA9PT0gdHlwZSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnVwZGF0ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb1xuIiwiLyogZ2xvYmFsIEltYWdlICovXG5cbmNsYXNzIEFzc2V0IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGlkLCB1cmwpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLnByb2dyZXNzID0gMFxuICAgIHRoaXMuY29udGVudCA9IG51bGxcbiAgfVxuXG4gIGxvYWQgKCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIHRoaXMubG9hZEltYWdlKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F1ZGlvLWJ1ZmZlcic6XG4gICAgICAgIHRoaXMubG9hZEF1ZGlvQnVmZmVyKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICB0aGlzLmxvYWRKU09OKClcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBsb2FkQXVkaW9CdWZmZXIgKCkge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IEF1ZGlvQ29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMudXJsLCB0cnVlKVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgQXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIChhdWRpb0J1ZmZlcikgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGVudCA9IGF1ZGlvQnVmZmVyXG4gICAgICAgIH0sIChyZWFzb24pID0+IHt9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgdGhpcy51cmwsIHhoci5zdGF0dXNUZXh0KVxuICAgICAgfVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHt9XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCAqIDEwMFxuICAgIH1cbiAgICB4aHIuc2VuZCgpXG4gIH1cblxuICBsb2FkSW1hZ2UgKCkge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSlcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWFnZS5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh4aHIucmVzcG9uc2UpXG4gICAgICAgIHRoaXMuY29udGVudCA9IGltYWdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCB0aGlzLnVybCwgeGhyLnN0YXR1c1RleHQpXG4gICAgICB9XG4gICAgfVxuICAgIHhoci5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgdGhpcy51cmwpXG4gICAgfVxuICAgIHhoci5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDBcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9XG5cbiAgbG9hZEpTT04gKCkge1xuICAgIGNvbnN0IHhociA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSlcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIHRoaXMudXJsLCB4aHIuc3RhdHVzVGV4dClcbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyBBc3NldCcpXG4gICAgfVxuICAgIHhoci5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDBcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0XG4iLCJpbXBvcnQgQXNzZXQgZnJvbSAnLi9hc3NldCdcblxuY2xhc3MgTG9hZGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuYXNzZXRzID0gW11cbiAgfVxuXG4gIGFkZCAodHlwZSwgaWQsIHVybCkge1xuICAgIGNvbnN0IGFzc2V0RXhpc3QgPSB0aGlzLmdldChpZClcbiAgICBpZiAoYXNzZXRFeGlzdCkge1xuICAgICAgY29uc29sZS53YXJuKCdhc3NldCB3aXRoIGlkJywgaWQsICdhbHJlYWR5IGV4aXN0JylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXNzZXQgPSBuZXcgQXNzZXQodHlwZSwgaWQsIHVybClcbiAgICAgIHRoaXMuYXNzZXRzLnB1c2goYXNzZXQpXG4gICAgfVxuICB9XG5cbiAgbG9hZCAoKSB7XG4gICAgdGhpcy5hc3NldHMuZm9yRWFjaCgoYXNzZXQpID0+IHtcbiAgICAgIGFzc2V0LmxvYWQoKVxuICAgIH0pXG4gIH1cblxuICBsaXN0ICgpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBbXVxuICAgIHRoaXMuYXNzZXRzLmZvckVhY2goKGFzc2V0KSA9PiB7XG4gICAgICBvdXRwdXQucHVzaChhc3NldC5jb250ZW50KVxuICAgIH0pXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZ2V0QnlUeXBlICh0eXBlKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gW11cbiAgICB0aGlzLmFzc2V0cy5mb3JFYWNoKChhc3NldCkgPT4ge1xuICAgICAgaWYgKGFzc2V0LnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgb3V0cHV0LnB1c2goYXNzZXQuY29udGVudClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGdldCAoaWQpIHtcbiAgICBsZXQgb3V0cHV0ID0gbnVsbFxuICAgIHRoaXMuYXNzZXRzLmZvckVhY2goKGFzc2V0KSA9PiB7XG4gICAgICBpZiAoYXNzZXQuaWQgPT09IGlkKSB7XG4gICAgICAgIG91dHB1dCA9IGFzc2V0LmNvbnRlbnRcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7fVxuXG4gIGdldFByb2dyZXNzICgpIHtcbiAgICBsZXQgc3VtID0gMFxuXG4gICAgdGhpcy5hc3NldHMuZm9yRWFjaCgoYXNzZXQpID0+IHtcbiAgICAgIHN1bSArPSBhc3NldC5wcm9ncmVzc1xuICAgIH0pXG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihzdW0gLyB0aGlzLmFzc2V0cy5sZW5ndGgpIHx8IDBcbiAgfVxuXG4gIHJlYWR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NldHMubGVuZ3RoICYmIHRoaXMuYXNzZXRzLmV2ZXJ5KGFzc2V0ID0+IGFzc2V0LmNvbnRlbnQgIT09IG51bGwpXG4gIH1cblxuICBsb2FkaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NldHMubGVuZ3RoICYmIHRoaXMuYXNzZXRzLnNvbWUoYXNzZXQgPT4gIWFzc2V0LmNvbnRlbnQpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiY2xhc3MgTWFjaGluZSB7XG4gIGNvbnN0cnVjdG9yIChlbnRyeVN0YXRlLCBzdGF0ZXMpIHtcbiAgICB0aGlzLnN0YXRlcyA9IHN0YXRlcyB8fCB7fVxuICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZXNbZW50cnlTdGF0ZV1cbiAgICB0aGlzLmV4aXRlZCA9IGZhbHNlXG4gIH1cblxuICBleGl0ICgpIHtcbiAgICB0aGlzLmV4aXRlZCA9IHRydWVcbiAgfVxuXG4gIHRyYW5zaXRpb24gKHN0YXRlKSB7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlc1tzdGF0ZV1cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmV4aXRlZCkge1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUodGhpcylcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY2hpbmVcbiIsImltcG9ydCBNYWNoaW5lIGZyb20gJy4vbWFjaGluZSdcblxuY2xhc3MgTWFjaGluZXMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5tYWNoaW5lcyA9IFtdXG4gIH1cblxuICBjcmVhdGUgKGVudHJ5U3RhdGUsIHN0YXRlcykge1xuICAgIGNvbnN0IG1hY2hpbmUgPSBuZXcgTWFjaGluZShlbnRyeVN0YXRlLCBzdGF0ZXMpXG4gICAgdGhpcy5tYWNoaW5lcy5wdXNoKG1hY2hpbmUpXG4gICAgcmV0dXJuIG1hY2hpbmVcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5tYWNoaW5lcy5mb3JFYWNoKChtYWNoaW5lKSA9PiB7XG4gICAgICBtYWNoaW5lLnVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMubWFjaGluZXMuZm9yRWFjaCgobWFjaGluZSkgPT4ge1xuICAgICAgbWFjaGluZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNoaW5lc1xuIiwiY29uc3QgSlNPTlBhY2tlciA9IGZ1bmN0aW9uICgpIHt9XG5cbkpTT05QYWNrZXIucHJvdG90eXBlLnBhY2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBzY2hlbWFzID0ge31cbiAgbGV0IG1heFNjaGVtYUluZGV4ID0gMFxuXG4gIGNvbnN0IGVuY29kZUFycmF5ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbGVuID0gdmFsdWUubGVuZ3RoXG4gICAgY29uc3QgZW5jb2RlZCA9IFtdXG5cbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgZW5jb2RlZC5wdXNoKDApIC8vIDAgaXMgc2NoZW1hIGluZGV4IGZvciBBcnJheVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSB2YWx1ZVtpXVxuICAgICAgY29uc3QgY3VycmVudCA9IGVuY29kZSh2KVxuICAgICAgY29uc3QgbGFzdCA9IGVuY29kZWRbZW5jb2RlZC5sZW5ndGggLSAxXVxuICAgICAgaWYgKHRoaXMuaXNFbmNvZGVkT2JqZWN0KGN1cnJlbnQpICYmIEFycmF5LmlzQXJyYXkobGFzdCkgJiYgY3VycmVudFswXSA9PT0gbGFzdFswXSkge1xuICAgICAgICAvLyBjdXJyZW50IGFuZCBwcmV2aW91cyBvYmplY3QgaGF2ZSBzYW1lIHNjaGVtYSxcbiAgICAgICAgLy8gc28gbWVyZ2UgdGhlaXIgdmFsdWVzIGludG8gb25lIGFycmF5XG4gICAgICAgIGVuY29kZWRbZW5jb2RlZC5sZW5ndGggLSAxXSA9IGxhc3QuY29uY2F0KGN1cnJlbnQuc2xpY2UoMSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmNvZGVkLnB1c2goY3VycmVudClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZWRcbiAgfVxuXG4gIGNvbnN0IGVuY29kZU9iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYUtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkuc29ydCgpXG5cbiAgICBpZiAoc2NoZW1hS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGxldCBlbmNvZGVkXG4gICAgY29uc3Qgc2NoZW1hID0gc2NoZW1hS2V5cy5sZW5ndGggKyAnOicgKyBzY2hlbWFLZXlzLmpvaW4oJ3wnKVxuICAgIGNvbnN0IHNjaGVtYUluZGV4ID0gc2NoZW1hc1tzY2hlbWFdXG5cbiAgICBpZiAoc2NoZW1hSW5kZXgpIHsgLy8ga25vd24gc2NoZW1hXG4gICAgICBlbmNvZGVkID0gW3NjaGVtYUluZGV4XVxuXG4gICAgICBmb3IgKGxldCBpID0gMCwgazsgayA9IHNjaGVtYUtleXNbaSsrXTspIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICBlbmNvZGVkW2ldID0gZW5jb2RlKHZhbHVlW2tdKVxuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG5ldyBzY2hlbWFcbiAgICAgIHNjaGVtYXNbc2NoZW1hXSA9ICsrbWF4U2NoZW1hSW5kZXhcbiAgICAgIGVuY29kZWQgPSB7fVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGs7IGsgPSBzY2hlbWFLZXlzW2krK107KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgZW5jb2RlZFtrXSA9IGVuY29kZSh2YWx1ZVtrXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZWRcbiAgfVxuXG4gIGNvbnN0IGVuY29kZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgICAgLy8gbm9uLW9iamVjdHMgb3IgbnVsbCByZXR1cm4gYXMgaXNcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBlbmNvZGVBcnJheSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZU9iamVjdCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5jb2RlKGRhdGEpXG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSBkYXRhIFBhY2tlZCBqYXZhc2NyaXB0IGRhdGEuXG4gKiBAcmV0dXJuIHsqfSBPcmlnaW5hbCBkYXRhLlxuICovXG5KU09OUGFja2VyLnByb3RvdHlwZS51bnBhY2sgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBzY2hlbWFzID0ge31cbiAgbGV0IG1heFNjaGVtYUluZGV4ID0gMFxuXG4gIGNvbnN0IHBhcnNlQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9IGVsc2UgaWYgKHZhbHVlWzBdID09PSAwIHx8IHR5cGVvZiB2YWx1ZVswXSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBkZWNvZGVBcnJheSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlY29kZU9iamVjdCh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWNvZGVBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aFxuICAgIGxldCBkZWNvZGVkID0gW10gLy8gZGVjb2RlIGFycmF5IG9mIHNvbWV0aGluZ1xuXG4gICAgZm9yIChsZXQgaSA9ICh2YWx1ZVswXSA9PT0gMCA/IDEgOiAwKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gdmFsdWVbaV1cbiAgICAgIGNvbnN0IG9iaiA9IGRlY29kZSh2KVxuICAgICAgaWYgKHRoaXMuaXNFbmNvZGVkT2JqZWN0KHYpICYmIEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAvLyBzZXZlcmFsIG9iamVjdHMgd2FzIGVuY29kZWQgaW50byBzaW5nbGUgYXJyYXlcbiAgICAgICAgZGVjb2RlZCA9IGRlY29kZWQuY29uY2F0KG9iailcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlY29kZWQucHVzaChvYmopXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVkXG4gIH1cblxuICBjb25zdCBkZWNvZGVPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzY2hlbWFLZXlzID0gc2NoZW1hc1t2YWx1ZVswXV1cbiAgICBjb25zdCBzY2hlbWFMZW4gPSBzY2hlbWFLZXlzLmxlbmd0aFxuICAgIGNvbnN0IHRvdGFsID0gKHZhbHVlLmxlbmd0aCAtIDEpIC8gc2NoZW1hTGVuXG4gICAgbGV0IGRlY29kZWRcbiAgICBpZiAodG90YWwgPiAxKSB7XG4gICAgICBkZWNvZGVkID0gW10gLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHNhbWUgc2NoZW1hXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge31cbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGs7IGsgPSBzY2hlbWFLZXlzW2orK107KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgICBvYmpba10gPSBkZWNvZGUodmFsdWVbaSAqIHNjaGVtYUxlbiArIGpdKVxuICAgICAgICB9XG4gICAgICAgIGRlY29kZWQucHVzaChvYmopXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlY29kZWQgPSB7fVxuICAgICAgZm9yIChsZXQgaiA9IDAsIGs7IGsgPSBzY2hlbWFLZXlzW2orK107KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgZGVjb2RlZFtrXSA9IGRlY29kZSh2YWx1ZVtqXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZWRcbiAgfVxuXG4gIGNvbnN0IGRlY29kZU5ld09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYUtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSkuc29ydCgpXG4gICAgaWYgKHNjaGVtYUtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gICAgc2NoZW1hc1srK21heFNjaGVtYUluZGV4XSA9IHNjaGVtYUtleXNcbiAgICBjb25zdCBkZWNvZGVkID0ge31cbiAgICBmb3IgKGxldCBpID0gMCwgazsgayA9IHNjaGVtYUtleXNbaSsrXTspIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgZGVjb2RlZFtrXSA9IGRlY29kZSh2YWx1ZVtrXSlcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZWRcbiAgfVxuXG4gIGNvbnN0IGRlY29kZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgICAgLy8gbm9uLW9iamVjdHMgb3IgbnVsbCByZXR1cm4gYXMgaXNcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUFycmF5KHZhbHVlKVxuICAgIH0gZWxzZSB7IC8vIG9iamVjdCB3aXRoIG5ldyBzY2hlbWFcbiAgICAgIHJldHVybiBkZWNvZGVOZXdPYmplY3QodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZShkYXRhKVxufVxuXG4vKipcbiAqIE9iamVjdCBpcyBlbmNvZGVkIGFzIGFycmF5IGFuZCBvYmplY3Qgc2NoZW1hIGluZGV4IGlzIHN0b3JlZCBhc1xuICogZmlyc3QgaXRlbSBvZiB0aGUgYXJyYXkuIFZhbGlkIHNjaGVtYSBpbmRleCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDAsXG4gKiBiZWNhdXNlIDAgaXMgcmVzZXJ2ZWQgZm9yIEFycmF5IHNjaGVtYS5cbiAqIFNldmVyYWwgb2JqZWN0cyB3aXRoIHNhbWUgc2NoZW1hIGNhbiBiZSBzdG9yZWQgaW4gdGhlIG9uZSBhcnJheS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgZW5jb2RlZCB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdmFsdWUgY29udGFpbnMgYW4gZW5jb2RlZCBvYmplY3Qgb3Igc2V2ZXJhbFxuICogb2JqZWN0cyB3aXRoIHNhbWUgc2NoZW1hLlxuICovXG5KU09OUGFja2VyLnByb3RvdHlwZS5pc0VuY29kZWRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ251bWJlcicgJiYgdmFsdWVbMF0gIT09IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSlNPTlBhY2tlclxuIiwiY2xhc3MgS2V5IHtcbiAgY29uc3RydWN0b3IgKGtleSkge1xuICAgIHRoaXMua2V5ID0ga2V5XG4gICAgdGhpcy5kZWx0YSA9IDBcbiAgICB0aGlzLnN0YXJ0ID0gZmFsc2VcbiAgICB0aGlzLmVuZCA9IGZhbHNlXG4gICAgdGhpcy5ob2xkID0gMFxuICAgIHRoaXMuaG9sZFRpbWUgPSAwXG4gICAgdGhpcy5zdGFydEZyYW1lID0gMFxuICAgIHRoaXMuZW5kRnJhbWUgPSAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5XG4iLCJpbXBvcnQgS2V5IGZyb20gJy4va2V5J1xuXG5jbGFzcyBLZXlNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLmtleXMgPSBbXVxuICAgIHRoaXMuZGVsdGEgPSAwXG4gICAgdGhpcy5ub3cgPSAwXG4gICAgdGhpcy50aGVuID0gMFxuICAgIHRoaXMuZnJhbWUgPSAwXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKSwgZmFsc2UpXG4gIH1cblxuICBsaXN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlzXG4gIH1cblxuICBoYW5kbGVLZXlEb3duIChldmVudCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0KGV2ZW50LmtleSlcbiAgICBpZiAoa2V5KSB7XG4gICAgICBrZXkuaG9sZCA9IDFcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlVcCAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldChldmVudC5rZXkpXG4gICAgaWYgKGtleSkge1xuICAgICAga2V5LmhvbGQgPSAwXG4gICAgfVxuICB9XG5cbiAgZW5hYmxlIChrZXkpIHtcbiAgICBpZiAoIXRoaXMuZ2V0KGtleSkpIHtcbiAgICAgIGNvbnN0IGtleU9iaiA9IG5ldyBLZXkoa2V5KVxuICAgICAgdGhpcy5rZXlzLnB1c2goa2V5T2JqKVxuICAgICAgcmV0dXJuIGtleU9ialxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGVuYWJsZUtleXMgKGtleXMpIHtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5lbmFibGUoa2V5KVxuICAgIH0pXG4gIH1cblxuICBnZXQgKGtleSkge1xuICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5rZXlzLmZpbHRlcigoa2V5T2JqKSA9PiBrZXlPYmoua2V5ID09PSBrZXkpXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZpbHRlcmVkWzBdXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLmZyYW1lKytcbiAgICAgIHRoaXMubm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgICB0aGlzLmRlbHRhID0gTWF0aC5mbG9vcih0aGlzLm5vdyAtIHRoaXMudGhlbilcbiAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93XG4gICAgICB0aGlzLmtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkuaG9sZCkge1xuICAgICAgICAgIGtleS5ob2xkVGltZSArPSB0aGlzLmRlbHRhXG4gICAgICAgICAga2V5LmVuZEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAoa2V5LnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5LmhvbGRUaW1lID0gMFxuICAgICAgICAgIGtleS5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAoa2V5LmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAga2V5LmVuZEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXkuc3RhcnQgPSAoa2V5LnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpID8gMSA6IDBcbiAgICAgICAga2V5LmVuZCA9IChrZXkuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpID8gMSA6IDBcbiAgICAgICAga2V5LmRlbHRhID0gdGhpcy5kZWx0YVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBob2xkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5KS5ob2xkXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleU1hbmFnZXJcbiIsImNsYXNzIFBvaW50ZXIge1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWx0YSA9IDBcbiAgICB0aGlzLmFjdGl2ZSA9IDBcbiAgICB0aGlzLmhvbGQgPSAwXG4gICAgdGhpcy5zdGFydCA9IDBcbiAgICB0aGlzLmVuZCA9IDBcbiAgICB0aGlzLmhvbGRUaW1lID0gMFxuICAgIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgICB0aGlzLmVuZEZyYW1lID0gMFxuICAgIHRoaXMuaWQgPSAwXG4gICAgdGhpcy50eXBlID0gbnVsbFxuICAgIHRoaXMuc3RhcnRYID0gMFxuICAgIHRoaXMuc3RhcnRZID0gMFxuICAgIHRoaXMub2Zmc2V0WCA9IDBcbiAgICB0aGlzLm9mZnNldFkgPSAwXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyXG4iLCJpbXBvcnQgUG9pbnRlciBmcm9tICcuL3BvaW50ZXInXG5cbmNsYXNzIFBvaW50ZXJNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKGVsZW1lbnQsIHF1YW50aXR5ID0gMSkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLnBvaW50ZXJzID0gW11cbiAgICB0aGlzLmRlbHRhID0gMFxuICAgIHRoaXMubm93ID0gMFxuICAgIHRoaXMudGhlbiA9IDBcbiAgICB0aGlzLmZyYW1lID0gMFxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnF1YW50aXR5ID0gcXVhbnRpdHlcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1YW50aXR5OyBpKyspIHtcbiAgICAgIHRoaXMucG9pbnRlcnMucHVzaChuZXcgUG9pbnRlcigpKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJyAvLyBuZWVkZWQgZm9yIG1vYmlsZVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnIC8vIG5lZWRlZCBmb3IgbW9iaWxlXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bi5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlLmJpbmQodGhpcyksIGZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcyksIGZhbHNlKVxuICB9XG5cbiAgbGlzdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRlcnNcbiAgfVxuXG4gIGdldEJ5SWQgKGlkKSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLnBvaW50ZXJzLmZpbHRlcigocG9pbnRlcikgPT4gcG9pbnRlci5pZCA9PT0gaWQpXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZpbHRlcmVkWzBdXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0SW5hY3RpdmVQb2ludGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMucG9pbnRlcnMuZmlsdGVyKChwb2ludGVyKSA9PiAhcG9pbnRlci5hY3RpdmUpXG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZpbHRlcmVkWzBdXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaGFuZGxlUG9pbnRlckRvd24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldEJ5SWQoZXZlbnQucG9pbnRlcklkKSB8fCB0aGlzLmdldEluYWN0aXZlUG9pbnRlcigpXG4gICAgaWYgKHBvaW50ZXIpIHtcbiAgICAgIHBvaW50ZXIuYWN0aXZlID0gMVxuICAgICAgcG9pbnRlci5pZCA9IGV2ZW50LnBvaW50ZXJJZFxuICAgICAgcG9pbnRlci50eXBlID0gZXZlbnQucG9pbnRlclR5cGUgLy8gJ21vdXNlJywgJ3BlbicsICd0b3VjaCdcbiAgICAgIHBvaW50ZXIuaG9sZCA9IDFcbiAgICAgIHBvaW50ZXIuc3RhcnRYID0gTWF0aC5mbG9vcihldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQpXG4gICAgICBwb2ludGVyLnN0YXJ0WSA9IE1hdGguZmxvb3IoZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQpXG4gICAgICBwb2ludGVyLnggPSBNYXRoLmZsb29yKGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldClcbiAgICAgIHBvaW50ZXIueSA9IE1hdGguZmxvb3IoZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUG9pbnRlck1vdmUgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldEJ5SWQoZXZlbnQucG9pbnRlcklkKSB8fCB0aGlzLmdldEluYWN0aXZlUG9pbnRlcigpXG4gICAgaWYgKHBvaW50ZXIpIHtcbiAgICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICAgIHBvaW50ZXIueCA9IE1hdGguZmxvb3IoZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0KVxuICAgICAgcG9pbnRlci55ID0gTWF0aC5mbG9vcihldmVudC5jbGllbnRZIC0gZXZlbnQudGFyZ2V0Lm9mZnNldFRvcCArIHdpbmRvdy5wYWdlWU9mZnNldClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBvaW50ZXIgPSB0aGlzLmdldEJ5SWQoZXZlbnQucG9pbnRlcklkKVxuICAgIGlmIChwb2ludGVyKSB7XG4gICAgICBwb2ludGVyLmFjdGl2ZSA9IDBcbiAgICAgIHBvaW50ZXIuaG9sZCA9IDBcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDb250ZXh0TWVudSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5mcmFtZSsrXG4gICAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgICAgdGhpcy5kZWx0YSA9IE1hdGguZmxvb3IodGhpcy5ub3cgLSB0aGlzLnRoZW4pXG4gICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgICAgdGhpcy5wb2ludGVycy5mb3JFYWNoKChwb2ludGVyKSA9PiB7XG4gICAgICAgIGlmIChwb2ludGVyLmhvbGQpIHtcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFggPSAocG9pbnRlci54IC0gcG9pbnRlci5zdGFydFgpXG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRZID0gKHBvaW50ZXIueSAtIHBvaW50ZXIuc3RhcnRZKVxuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IC0xKSB7XG4gICAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WCA9IDBcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFkgPSAwXG4gICAgICAgICAgcG9pbnRlci5ob2xkVGltZSA9IDBcbiAgICAgICAgICBwb2ludGVyLnN0YXJ0RnJhbWUgPSAtMVxuICAgICAgICAgIGlmIChwb2ludGVyLmVuZEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRlci5zdGFydCA9IChwb2ludGVyLnN0YXJ0RnJhbWUgPT09IHRoaXMuZnJhbWUpID8gMSA6IDBcbiAgICAgICAgcG9pbnRlci5lbmQgPSAocG9pbnRlci5lbmRGcmFtZSA9PT0gdGhpcy5mcmFtZSkgPyAxIDogMFxuICAgICAgICBwb2ludGVyLmRlbHRhID0gdGhpcy5kZWx0YVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJNYW5hZ2VyXG4iLCJjbGFzcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9XG4gICAgdGhpcy53aWR0aCA9IDBcbiAgICB0aGlzLmhlaWdodCA9IDBcbiAgICB0aGlzLnJvdGF0aW9uID0gMFxuICAgIHRoaXMuem9vbSA9IDEuMFxuICAgIHRoaXMubGVycCA9IDFcbiAgfVxuXG4gIHNldFBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB9XG5cbiAgc2V0U2l6ZSAodywgaCkge1xuICAgIHRoaXMud2lkdGggPSB3XG4gICAgdGhpcy5oZWlnaHQgPSBoXG4gIH1cblxuICBzZXRBbmdsZSAoZGVncmVlcykge1xuICAgIHRoaXMucm90YXRpb24gPSBkZWdyZWVzXG4gIH1cblxuICBjZW50ZXJPbiAocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gKHRoaXMuem9vbSAqIChwb3NpdGlvbi54KSAtICh0aGlzLndpZHRoIC8gMikgLSB0aGlzLnBvc2l0aW9uLngpICogdGhpcy5sZXJwXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLnpvb20gKiAocG9zaXRpb24ueSkgLSAodGhpcy5oZWlnaHQgLyAyKSAtIHRoaXMucG9zaXRpb24ueSkgKiB0aGlzLmxlcnBcbiAgfVxuXG4gIHpvb21JbiAocSkge1xuICAgIHRoaXMuem9vbSAtPSBxIC8gMTAwMFxuXG4gICAgaWYgKHRoaXMuem9vbSA8IDApIHtcbiAgICAgIHRoaXMuem9vbSA9IDBcbiAgICB9XG4gIH1cblxuICB6b29tT3V0IChxKSB7XG4gICAgdGhpcy56b29tICs9IHEgLyAxMDAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtZXJhXG4iLCJjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLm9iamVjdHMgPSBbXVxuICB9XG5cbiAgYWRkIChvYmplY3QpIHtcbiAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVcbiIsImNsYXNzIFJlbmRlckxvb3Age1xuICBjb25zdHJ1Y3RvciAob25TVGVwKSB7XG4gICAgdGhpcy5mcmFtZSA9IDBcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlXG4gICAgdGhpcy5vblN0ZXAgPSBvblNUZXBcbiAgICB0aGlzLnN0YXJ0KClcbiAgfVxuXG4gIHN0ZXAgKCkge1xuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMuZnJhbWUrK1xuICAgICAgdGhpcy5vblN0ZXAoKVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0ZXAuYmluZCh0aGlzKSlcbiAgICB9XG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5mYWxzZSA9IHRydWVcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RlcC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckxvb3BcbiIsImltcG9ydCBDYW1lcmEgZnJvbSAnLi9jYW1lcmEnXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSdcbmltcG9ydCBSZW5kZXJMb29wIGZyb20gJy4uL2xvb3BzL3JlbmRlci1sb29wJ1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yIChjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoKVxuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoKVxuICAgIHRoaXMucmVuZGVyTG9vcCA9IG5ldyBSZW5kZXJMb29wKCgpID0+IHRoaXMuZHJhdygpKVxuICAgIHRoaXMucmVzaXplKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHBhcmVudFJlY3QucmlnaHQgLSBwYXJlbnRSZWN0LmxlZnRcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHBhcmVudFJlY3QucmlnaHQgLSBwYXJlbnRSZWN0LmxlZnRcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgdGhpcy5jYW1lcmEud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxuICAgIHRoaXMuY2FtZXJhLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodFxuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgfVxuXG4gIGNpcmNsZSAoeCwgeSwgcmFkaXVzKSB7XG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICB9XG5cbiAgdGV4dCAodGV4dCwgeCwgeSkge1xuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxuICB9XG5cbiAgbGluZSAocG9pbnRBLCBwb2ludEIpIHtcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50QS54LCBwb2ludEEueSlcbiAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50Qi54LCBwb2ludEIueSlcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgfVxuXG4gIHJlY3QgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICB9XG5cbiAgaW1hZ2UgKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpIHtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLmNsZWFyKClcbiAgICB0aGlzLmNvbnRleHQuc2F2ZSgpXG4gICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgodGhpcy5jYW1lcmEud2lkdGggLyAyKSwgKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpKVxuICAgIHRoaXMuY29udGV4dC5yb3RhdGUodGhpcy5jYW1lcmEucm90YXRpb24pXG4gICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgtKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksIC0odGhpcy5jYW1lcmEuaGVpZ2h0IC8gMikpXG4gICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgtdGhpcy5jYW1lcmEucG9zaXRpb24ueCwgLXRoaXMuY2FtZXJhLnBvc2l0aW9uLnkpXG4gICAgdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FtZXJhLnpvb20sIHRoaXMuY2FtZXJhLnpvb20pXG5cbiAgICB0aGlzLnNjZW5lLm9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QuZHJhdyh0aGlzKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXJcbiIsImNsYXNzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9XG4gICAgdGhpcy5yb3RhdGlvbiA9IDBcbiAgICB0aGlzLnNjYWxlID0gMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3RcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZS1vYmplY3QnXG5cbmNsYXNzIFNwcml0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3RvciAoaW1hZ2UsIHdpZHRoLCBoZWlnaHQsIHNvdXJjZVdpZHRoLCBzb3VyY2VIZWlnaHQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IGltYWdlLndpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgaW1hZ2UuaGVpZ2h0XG4gICAgdGhpcy5zb3VyY2VXaWR0aCA9IHNvdXJjZVdpZHRoIHx8IGltYWdlLndpZHRoXG4gICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBzb3VyY2VIZWlnaHQgfHwgaW1hZ2UuaGVpZ2h0XG4gICAgdGhpcy5zb3VyY2VYID0gMFxuICAgIHRoaXMuc291cmNlWSA9IDBcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIHRoaXMuZGVsYXkgPSAwXG4gICAgdGhpcy5jb3VudGVyID0gMFxuICB9XG5cbiAgYWRkQW5pbWF0aW9uIChuYW1lLCBzZXF1ZW5jZSwgbWlsbGlzZWNvbmRzKSB7XG4gICAgaWYgKCF0aGlzLmdldEFuaW1hdGlvbihuYW1lKSkge1xuICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBzZXF1ZW5jZTogc2VxdWVuY2UsXG4gICAgICAgIG1pbGxpc2Vjb25kczogbWlsbGlzZWNvbmRzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGdldEFuaW1hdGlvbiAobmFtZSkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRpb24pIHtcbiAgICAgIGlmIChhbmltYXRpb24ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBvdXRwdXQgPSBhbmltYXRpb25cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIHBsYXkgKG5hbWUsIGRlbHRhKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5nZXRBbmltYXRpb24obmFtZSlcbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuc291cmNlV2lkdGhcbiAgICAgIHRoaXMuZGVsYXkgKz0gZGVsdGFcblxuICAgICAgaWYgKHRoaXMuZGVsYXkgPj0gYW5pbWF0aW9uLm1pbGxpc2Vjb25kcykge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAodGhpcy5jb3VudGVyICsgMSkgJSBhbmltYXRpb24uc2VxdWVuY2UubGVuZ3RoXG4gICAgICAgIHRoaXMuZGVsYXkgPSAwXG4gICAgICB9XG4gICAgICB0aGlzLnNvdXJjZVkgPSBNYXRoLmZsb29yKChhbmltYXRpb24uc2VxdWVuY2VbdGhpcy5jb3VudGVyXSArIDEpIC8gY29sdW1ucykgKiB0aGlzLnNvdXJjZUhlaWdodFxuICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5zb3VyY2VXaWR0aCAqIGFuaW1hdGlvbi5zZXF1ZW5jZVt0aGlzLmNvdW50ZXJdIC0gdGhpcy5pbWFnZS53aWR0aCAqIHRoaXMuc291cmNlWSAvIHRoaXMuaGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgZHJhdyAocmVuZGVyKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHJlbmRlci5pbWFnZShcbiAgICAgICAgdGhpcy5pbWFnZSxcbiAgICAgICAgdGhpcy5zb3VyY2VYLFxuICAgICAgICB0aGlzLnNvdXJjZVksXG4gICAgICAgIHRoaXMuc291cmNlV2lkdGgsXG4gICAgICAgIHRoaXMuc291cmNlSGVpZ2h0LFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoICogMC41LFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAqIDAuNSxcbiAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgdGhpcy5oZWlnaHRcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNwcml0ZVxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9nYW1lLW9iamVjdCdcblxuY2xhc3MgVGlsZVNwcml0ZSBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3RvciAoaW1hZ2UsIHBpeGVscywgd2lkdGgsIGhlaWdodCkge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCB0bXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGNvbnN0IHRtcENvbnRleHQgPSB0bXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRtcENhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoICogMlxuICAgIHRtcENhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiAyXG4gICAgdG1wQ29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoICogMC41LCBpbWFnZS5oZWlnaHQgKiAwLjUpXG4gICAgdG1wQ29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIGltYWdlLndpZHRoICogMC41LCAwLCBpbWFnZS53aWR0aCAqIDAuNSwgaW1hZ2UuaGVpZ2h0ICogMC41KVxuICAgIHRtcENvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCBpbWFnZS5oZWlnaHQgKiAwLjUsIGltYWdlLndpZHRoICogMC41LCBpbWFnZS5oZWlnaHQgKiAwLjUpXG4gICAgdG1wQ29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIGltYWdlLndpZHRoICogMC41LCBpbWFnZS5oZWlnaHQgKiAwLjUsIGltYWdlLndpZHRoICogMC41LCBpbWFnZS5oZWlnaHQgKiAwLjUpXG5cbiAgICB0aGlzLmltYWdlID0gdG1wQ2FudmFzXG4gICAgdGhpcy5waXhlbHMgPSBwaXhlbHMgfHwgMTAwXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IGltYWdlLndpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgaW1hZ2UuaGVpZ2h0XG4gICAgdGhpcy5zb3VyY2VXaWR0aCA9IGltYWdlLndpZHRoICogMC41XG4gICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiAwLjVcbiAgICB0aGlzLnNvdXJjZVggPSAwXG4gICAgdGhpcy5zb3VyY2VZID0gMFxuICB9XG5cbiAgc2Nyb2xsIChkaXJlY3Rpb24sIGRlbHRhKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLnNvdXJjZVggKz0gZGVsdGEgKiB0aGlzLnBpeGVscyAvIDEwMDBcbiAgICAgIGlmICh0aGlzLnNvdXJjZVggKyB0aGlzLnNvdXJjZVdpZHRoID49IHRoaXMuc291cmNlV2lkdGggKiAyKSB7XG4gICAgICAgIHRoaXMuc291cmNlWCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5zb3VyY2VYIC09IGRlbHRhICogdGhpcy5waXhlbHMgLyAxMDAwXG4gICAgICBpZiAodGhpcy5zb3VyY2VYIDw9IDApIHtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5zb3VyY2VXaWR0aFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICB0aGlzLnNvdXJjZVkgKz0gZGVsdGEgKiB0aGlzLnBpeGVscyAvIDEwMDBcbiAgICAgIGlmICh0aGlzLnNvdXJjZVkgKyB0aGlzLnNvdXJjZUhlaWdodCA+PSB0aGlzLnNvdXJjZUhlaWdodCAqIDIpIHtcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHRoaXMuc291cmNlWSAtPSBkZWx0YSAqIHRoaXMucGl4ZWxzIC8gMTAwMFxuICAgICAgaWYgKHRoaXMuc291cmNlWSA8PSAwKSB7XG4gICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuc291cmNlSGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhdyAocmVuZGVyKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHJlbmRlci5pbWFnZShcbiAgICAgICAgdGhpcy5pbWFnZSxcbiAgICAgICAgdGhpcy5zb3VyY2VYLFxuICAgICAgICB0aGlzLnNvdXJjZVksXG4gICAgICAgIHRoaXMuc291cmNlV2lkdGgsXG4gICAgICAgIHRoaXMuc291cmNlSGVpZ2h0LFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoICogMC41LFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAqIDAuNSxcbiAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgdGhpcy5oZWlnaHRcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlsZVNwcml0ZVxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9nYW1lLW9iamVjdCdcblxuY2xhc3MgRnJlZUhhbmQgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IgKGRyYXcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5kcmF3ID0gZHJhd1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGcmVlSGFuZFxuIiwiY2xhc3MgVXBkYXRlTG9vcCB7XG4gIGNvbnN0cnVjdG9yIChmcHMgPSA1MCwgb25TVGVwKSB7XG4gICAgdGhpcy5mcHMgPSBmcHNcbiAgICB0aGlzLmZyYW1lID0gMFxuICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuICAgIHRoaXMuZGVsdGEgPSAxMDAwIC8gdGhpcy5mcHNcbiAgICB0aGlzLm9uU3RlcCA9IG9uU1RlcFxuICAgIHRoaXMuc3RhcnQoKVxuICB9XG5cbiAgZ2V0RnBzICgpIHtcbiAgICByZXR1cm4gdGhpcy5mcHNcbiAgfVxuXG4gIHNldEZwcyAoZnBzKSB7XG4gICAgdGhpcy5zdG9wKClcbiAgICB0aGlzLmZwcyA9IE51bWJlcihmcHMpXG4gICAgdGhpcy5zdGFydCgpXG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuICAgIHRoaXMuZGVsdGEgPSAxMDAwIC8gdGhpcy5mcHNcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5zdGVwKHRoaXMuZGVsdGEpXG4gICAgfSwgdGhpcy5kZWx0YSlcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIHRoaXMucGF1c2UoKVxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgfVxuXG4gIHN0ZXAgKGRlbHRhKSB7XG4gICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgdGhpcy5mcmFtZSsrXG4gICAgICB0aGlzLm9uU3RlcChkZWx0YSlcbiAgICB9XG4gIH1cblxuICB0b1BQUyAodmVsb2NpdHkpIHtcbiAgICByZXR1cm4gdmVsb2NpdHkgKiB0aGlzLmRlbHRhIC8gMTAwMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5zdG9wKClcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZUxvb3BcbiIsImltcG9ydCBBdWRpbyBmcm9tICcuL2F1ZGlvL2F1ZGlvJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlci9sb2FkZXInXG5pbXBvcnQgTWFjaGluZXMgZnJvbSAnLi9tYWNoaW5lcy9tYWNoaW5lcydcbmltcG9ydCBKU09OUGFja2VyIGZyb20gJy4vbmV0d29yay9qc29uLXBhY2tlcidcbmltcG9ydCBLZXlNYW5hZ2VyIGZyb20gJy4vaW5wdXRzL2tleXMva2V5LW1hbmFnZXInXG5pbXBvcnQgUG9pbnRlck1hbmFnZXIgZnJvbSAnLi9pbnB1dHMvcG9pbnRlcnMvcG9pbnRlci1tYW5hZ2VyJ1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyL3JlbmRlcmVyJ1xuaW1wb3J0IFNwcml0ZSBmcm9tICcuL3JlbmRlci9zcHJpdGUnXG5pbXBvcnQgVGlsZVNwcml0ZSBmcm9tICcuL3JlbmRlci90aWxlLXNwcml0ZSdcbmltcG9ydCBGcmVlSGFuZCBmcm9tICcuL3JlbmRlci9mcmVlLWhhbmQnXG5pbXBvcnQgUmVuZGVyTG9vcCBmcm9tICcuL2xvb3BzL3JlbmRlci1sb29wJ1xuaW1wb3J0IFVwZGF0ZUxvb3AgZnJvbSAnLi9sb29wcy91cGRhdGUtbG9vcCdcblxuY29uc3QgV3JhcHBlciA9IHtcbiAgQXVkaW86IEF1ZGlvLFxuICBMb2FkZXI6IExvYWRlcixcbiAgTWFjaGluZXM6IE1hY2hpbmVzLFxuICBKU09OUGFja2VyLFxuICBLZXlNYW5hZ2VyOiBLZXlNYW5hZ2VyLFxuICBQb2ludGVyTWFuYWdlcjogUG9pbnRlck1hbmFnZXIsXG4gIFJlbmRlcmVyLFxuICBTcHJpdGUsXG4gIFRpbGVTcHJpdGUsXG4gIEZyZWVIYW5kLFxuICBSZW5kZXJMb29wLFxuICBVcGRhdGVMb29wOiBVcGRhdGVMb29wXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=