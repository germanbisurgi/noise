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
    key: "connect",
    value: function connect(destination) {
      this.node.connect(destination.node);
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OYWl2ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmFpdmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL05haXZlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9hdWRpby9nYWluLW5vZGUuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvYXVkaW8vc291cmNlLW5vZGUuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvYXVkaW8vYXVkaW8uanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvbG9hZGVyL2Fzc2V0LmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvbWFjaGluZXMvbWFjaGluZS5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9tYWNoaW5lcy9tYWNoaW5lcy5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9uZXR3b3JrL2pzb24tcGFja2VyLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL2lucHV0cy9rZXlzL2tleS5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbnB1dHMva2V5cy9rZXktbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbnB1dHMvcG9pbnRlcnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbnB1dHMvcG9pbnRlcnMvcG9pbnRlci1tYW5hZ2VyLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL3JlbmRlci9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvcmVuZGVyL3NjZW5lLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL2xvb3BzL3JlbmRlci1sb29wLmpzIiwid2VicGFjazovL05haXZlLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9yZW5kZXIvZ2FtZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvcmVuZGVyL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9yZW5kZXIvdGlsZS1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vTmFpdmUvLi9zcmMvcmVuZGVyL2ZyZWUtaGFuZC5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9sb29wcy91cGRhdGUtbG9vcC5qcyIsIndlYnBhY2s6Ly9OYWl2ZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHYWluTm9kZSIsImF1ZGlvQ29udGV4dCIsIm5vZGUiLCJjcmVhdGVHYWluIiwidHlwZSIsInNldEdhaW4iLCJkZXN0aW5hdGlvbiIsImNvbm5lY3QiLCJ2YWx1ZSIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJTb3VyY2VOb2RlIiwiYXVkaW9CdWZmZXIiLCJwcm9ncmVzcyIsImxvb3BOdW1iZXIiLCJzdGFydFRpbWUiLCJ3aGVuIiwib2Zmc2V0IiwiaXNQbGF5aW5nIiwib3V0cHV0IiwiaW50ZXJydXB0IiwibG9vcCIsInN0YXRlIiwicmVzdW1lIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiYnVmZmVyIiwidG9EZXN0aW5hdGlvbiIsInN0YXJ0Iiwib25lbmRlZCIsImlzUGF1c2UiLCJzdG9wIiwiTWF0aCIsImZsb29yIiwiZHVyYXRpb24iLCJnZXRPZmZzZXQiLCJBdWRpbyIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm5vZGVzIiwiY2hhaW5zIiwicHVzaCIsImNvbm5lY3ROb2RlcyIsImkiLCJuZXh0Tm9kZSIsImlzdExhc3ROb2RlIiwibGVuZ3RoIiwiZmlsdGVyIiwidXBkYXRlIiwiQXNzZXQiLCJpZCIsInVybCIsImNvbnRlbnQiLCJsb2FkSW1hZ2UiLCJsb2FkQXVkaW9CdWZmZXIiLCJsb2FkSlNPTiIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsIm9ubG9hZCIsInN0YXR1cyIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwicmVhc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwib25wcm9ncmVzcyIsImV2ZW50IiwibG9hZGVkIiwidG90YWwiLCJzZW5kIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkpTT04iLCJwYXJzZSIsIkxvYWRlciIsImFzc2V0cyIsImFzc2V0RXhpc3QiLCJnZXQiLCJ3YXJuIiwiYXNzZXQiLCJsb2FkIiwic3VtIiwiZXZlcnkiLCJzb21lIiwiTWFjaGluZSIsImVudHJ5U3RhdGUiLCJzdGF0ZXMiLCJjdXJyZW50U3RhdGUiLCJleGl0ZWQiLCJNYWNoaW5lcyIsIm1hY2hpbmVzIiwibWFjaGluZSIsImRlc3Ryb3kiLCJKU09OUGFja2VyIiwicHJvdG90eXBlIiwicGFjayIsImRhdGEiLCJzY2hlbWFzIiwibWF4U2NoZW1hSW5kZXgiLCJlbmNvZGVBcnJheSIsImxlbiIsImVuY29kZWQiLCJ2IiwiY3VycmVudCIsImVuY29kZSIsImxhc3QiLCJpc0VuY29kZWRPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJjb25jYXQiLCJzbGljZSIsImVuY29kZU9iamVjdCIsInNjaGVtYUtleXMiLCJzb3J0Iiwic2NoZW1hIiwiam9pbiIsInNjaGVtYUluZGV4IiwiayIsInVucGFjayIsInBhcnNlQXJyYXkiLCJkZWNvZGVBcnJheSIsImRlY29kZU9iamVjdCIsImRlY29kZWQiLCJvYmoiLCJkZWNvZGUiLCJzY2hlbWFMZW4iLCJqIiwiZGVjb2RlTmV3T2JqZWN0IiwiS2V5IiwiZGVsdGEiLCJlbmQiLCJob2xkIiwiaG9sZFRpbWUiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJLZXlNYW5hZ2VyIiwiZW5hYmxlZCIsIm5vdyIsInRoZW4iLCJmcmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJiaW5kIiwiaGFuZGxlS2V5VXAiLCJrZXlPYmoiLCJlbmFibGUiLCJmaWx0ZXJlZCIsInBlcmZvcm1hbmNlIiwiUG9pbnRlciIsImFjdGl2ZSIsInN0YXJ0WCIsInN0YXJ0WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwieCIsInkiLCJQb2ludGVyTWFuYWdlciIsImVsZW1lbnQiLCJxdWFudGl0eSIsInBvaW50ZXJzIiwiaW5pdCIsInN0eWxlIiwidG91Y2hBY3Rpb24iLCJ1c2VyU2VsZWN0IiwiaGFuZGxlUG9pbnRlckRvd24iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbCIsImhhbmRsZUNvbnRleHRNZW51IiwicG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwiZ2V0QnlJZCIsInBvaW50ZXJJZCIsImdldEluYWN0aXZlUG9pbnRlciIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJwYWdlWU9mZnNldCIsInN0b3BQcm9wYWdhdGlvbiIsIkNhbWVyYSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJyb3RhdGlvbiIsInpvb20iLCJsZXJwIiwidyIsImgiLCJkZWdyZWVzIiwicSIsIlNjZW5lIiwib2JqZWN0cyIsIm9iamVjdCIsIlJlbmRlckxvb3AiLCJvblNUZXAiLCJwYXVzZWQiLCJvblN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwiUmVuZGVyZXIiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbWVyYSIsInNjZW5lIiwicmVuZGVyTG9vcCIsImRyYXciLCJyZXNpemUiLCJwYXJlbnRSZWN0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwibGVmdCIsImNsZWFyUmVjdCIsInJhZGl1cyIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlIiwidGV4dCIsImZpbGxUZXh0IiwicG9pbnRBIiwicG9pbnRCIiwibW92ZVRvIiwibGluZVRvIiwicmVjdCIsInN4Iiwic3kiLCJzdyIsInNoIiwiZHgiLCJkeSIsImR3IiwiZGgiLCJkcmF3SW1hZ2UiLCJjbGVhciIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJzY2FsZSIsInJlc3RvcmUiLCJHYW1lT2JqZWN0IiwiU3ByaXRlIiwic291cmNlV2lkdGgiLCJzb3VyY2VIZWlnaHQiLCJzb3VyY2VYIiwic291cmNlWSIsImFuaW1hdGlvbnMiLCJkZWxheSIsImNvdW50ZXIiLCJuYW1lIiwic2VxdWVuY2UiLCJtaWxsaXNlY29uZHMiLCJnZXRBbmltYXRpb24iLCJhbmltYXRpb24iLCJjb2x1bW5zIiwicmVuZGVyIiwiVGlsZVNwcml0ZSIsInBpeGVscyIsInRtcENhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJ0bXBDb250ZXh0IiwiZGlyZWN0aW9uIiwiRnJlZUhhbmQiLCJVcGRhdGVMb29wIiwiZnBzIiwiaW50ZXJ2YWwiLCJOdW1iZXIiLCJzZXRJbnRlcnZhbCIsInBhdXNlIiwiY2xlYXJJbnRlcnZhbCIsInZlbG9jaXR5IiwiV3JhcHBlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSw0Rzs7Ozs7O0FDbkJBO0FB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LEVBQUVBLE1BRk07QUFHZGUsVUFBUSxFQUFFQSxRQUhJO0FBSWRJLFlBQVUsRUFBVkEsV0FKYztBQUtkMEMsWUFBVSxFQUFFQSxXQUxFO0FBTWRzQixnQkFBYyxFQUFFQSxlQU5GO0FBT2Q4QyxVQUFRLEVBQVJBLFFBUGM7QUFRZDJDLFFBQU0sRUFBTkEsTUFSYztBQVNkZSxZQUFVLEVBQVZBLFdBVGM7QUFVZE0sVUFBUSxFQUFSQSxTQVZjO0FBV2R0RSxZQUFVLEVBQVZBLFdBWGM7QUFZZHVFLFlBQVUsRUFBRUEsV0FBVUE7QUFaUixDQUFoQjtBQWVlUSxnRkFBZixFIiwiZmlsZSI6Im5haXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTmFpdmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTmFpdmVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiY2xhc3MgR2Fpbk5vZGUge1xuICBjb25zdHJ1Y3RvciAoYXVkaW9Db250ZXh0KSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHRcbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcbiAgICB0aGlzLnR5cGUgPSAnZ2FpbidcbiAgICB0aGlzLnNldEdhaW4oMSlcbiAgfVxuXG4gIGNvbm5lY3QgKGRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5ub2RlLmNvbm5lY3QoZGVzdGluYXRpb24ubm9kZSlcbiAgfVxuXG4gIHRvRGVzdGluYXRpb24gKCkge1xuICAgIHRoaXMubm9kZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKVxuICB9XG5cbiAgc2V0R2FpbiAodmFsdWUpIHtcbiAgICB0aGlzLm5vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2YWx1ZSwgdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUpXG4gIH1cblxuICBnZXRHYWluICgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlLmdhaW4udmFsdWVcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7fVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2Fpbk5vZGVcbiIsImNsYXNzIFNvdXJjZU5vZGUge1xuICBjb25zdHJ1Y3RvciAoYXVkaW9Db250ZXh0LCBhdWRpb0J1ZmZlcikge1xuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0XG4gICAgdGhpcy50eXBlID0gJ3NvdXJjZSdcbiAgICB0aGlzLnByb2dyZXNzID0gMFxuICAgIHRoaXMubG9vcE51bWJlciA9IDFcbiAgICB0aGlzLmF1ZGlvQnVmZmVyID0gYXVkaW9CdWZmZXJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB0aGlzLndoZW4gPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZVxuICAgIHRoaXMubm9kZSA9IG51bGxcbiAgICB0aGlzLm91dHB1dCA9IG51bGxcbiAgfVxuXG4gIGNvbm5lY3QgKGRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5vdXRwdXQgPSBkZXN0aW5hdGlvbi5ub2RlXG4gIH1cblxuICB0b0Rlc3RpbmF0aW9uICgpIHtcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uXG4gIH1cblxuICBwbGF5IChpbnRlcnJ1cHQgPSBmYWxzZSwgbG9vcCA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nICYmICFpbnRlcnJ1cHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgIHRoaXMuYXVkaW9Db250ZXh0LnJlc3VtZSgpXG4gICAgfVxuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKClcbiAgICB0aGlzLm5vZGUuYnVmZmVyID0gdGhpcy5hdWRpb0J1ZmZlclxuICAgIHRoaXMubm9kZS5sb29wID0gbG9vcFxuXG4gICAgaWYgKCF0aGlzLm91dHB1dCkge1xuICAgICAgdGhpcy50b0Rlc3RpbmF0aW9uKClcbiAgICB9XG5cbiAgICB0aGlzLm5vZGUuY29ubmVjdCh0aGlzLm91dHB1dClcbiAgICB0aGlzLm5vZGUuc3RhcnQodGhpcy53aGVuLCB0aGlzLm9mZnNldClcbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lIC0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWVcbiAgICB0aGlzLm5vZGUub25lbmRlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBzdG9wIChpc1BhdXNlID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMubm9kZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5ub2RlLnN0b3AoKVxuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2VcbiAgICB0aGlzLm9mZnNldCA9IGlzUGF1c2UgPyB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSAtIHRoaXMuc3RhcnRUaW1lIDogMFxuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIHRoaXMuc3RvcCh0cnVlKVxuICB9XG5cbiAgZ2V0T2Zmc2V0ICgpIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMubG9vcE51bWJlciA9IE1hdGguZmxvb3IoKHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gdGhpcy5hdWRpb0J1ZmZlci5kdXJhdGlvbilcbiAgICAgIHJldHVybiB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSAtICh0aGlzLnN0YXJ0VGltZSArIHRoaXMuYXVkaW9CdWZmZXIuZHVyYXRpb24gKiB0aGlzLmxvb3BOdW1iZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmdldE9mZnNldCgpICogMTAwIC8gdGhpcy5hdWRpb0J1ZmZlci5kdXJhdGlvblxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5zdG9wKClcblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291cmNlTm9kZVxuIiwiaW1wb3J0IEdhaW5Ob2RlIGZyb20gJy4vZ2Fpbi1ub2RlJ1xuaW1wb3J0IFNvdXJjZU5vZGUgZnJvbSAnLi9zb3VyY2Utbm9kZSdcblxuY2xhc3MgQXVkaW8ge1xuICBjb25zdHJ1Y3RvciAoYXVkaW9Db250ZXh0KSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQgfHwgbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKClcbiAgICB0aGlzLm5vZGVzID0gW11cbiAgICB0aGlzLmNoYWlucyA9IFtdXG4gIH1cblxuICBjcmVhdGVHYWluTm9kZSAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBHYWluTm9kZSh0aGlzLmF1ZGlvQ29udGV4dClcbiAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSlcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgY3JlYXRlU291cmNlTm9kZSAoYXVkaW9CdWZmZXIpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFNvdXJjZU5vZGUodGhpcy5hdWRpb0NvbnRleHQsIGF1ZGlvQnVmZmVyKVxuICAgIHRoaXMubm9kZXMucHVzaChub2RlKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBjcmVhdGVOb2RlQ2hhaW4gKG5vZGVzKSB7XG4gICAgdGhpcy5jaGFpbnMucHVzaChub2RlcylcbiAgICB0aGlzLmNvbm5lY3ROb2Rlcyhub2RlcylcbiAgfVxuXG4gIGNvbm5lY3ROb2RlcyAobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XG4gICAgICBjb25zdCBuZXh0Tm9kZSA9IG5vZGVzW2kgKyAxXVxuICAgICAgY29uc3QgaXN0TGFzdE5vZGUgPSBpID09PSBub2Rlcy5sZW5ndGggLSAxXG5cbiAgICAgIGlmICghaXN0TGFzdE5vZGUpIHtcbiAgICAgICAgbm9kZS5jb25uZWN0KG5leHROb2RlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS50b0Rlc3RpbmF0aW9uKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0Tm9kZXMgKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzXG4gIH1cblxuICBnZXRDaGFpbnMgKCkge1xuICAgIHJldHVybiB0aGlzLmNoYWluc1xuICB9XG5cbiAgZ2V0Tm9kZXNCeVR5cGUgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLnR5cGUgPT09IHR5cGUpXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS51cGRhdGUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9cbiIsIi8qIGdsb2JhbCBJbWFnZSAqL1xuXG5jbGFzcyBBc3NldCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBpZCwgdXJsKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5wcm9ncmVzcyA9IDBcbiAgICB0aGlzLmNvbnRlbnQgPSBudWxsXG4gIH1cblxuICBsb2FkICgpIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICB0aGlzLmxvYWRJbWFnZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdWRpby1idWZmZXInOlxuICAgICAgICB0aGlzLmxvYWRBdWRpb0J1ZmZlcigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgdGhpcy5sb2FkSlNPTigpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgbG9hZEF1ZGlvQnVmZmVyICgpIHtcbiAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICBjb25zdCBBdWRpb0NvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKVxuICAgIHhoci5vcGVuKCdHRVQnLCB0aGlzLnVybCwgdHJ1ZSlcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJ1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIEF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoeGhyLnJlc3BvbnNlLCAoYXVkaW9CdWZmZXIpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBhdWRpb0J1ZmZlclxuICAgICAgICB9LCAocmVhc29uKSA9PiB7fSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIHRoaXMudXJsLCB4aHIuc3RhdHVzVGV4dClcbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSAocmVhc29uKSA9PiB7fVxuICAgIHhoci5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDBcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9XG5cbiAgbG9hZEltYWdlICgpIHtcbiAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICB4aHIub3BlbignR0VUJywgdGhpcy51cmwsIHRydWUpXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1hZ2Uuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoeGhyLnJlc3BvbnNlKVxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBpbWFnZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgdGhpcy51cmwsIHhoci5zdGF0dXNUZXh0KVxuICAgICAgfVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IChyZWFzb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIHRoaXMudXJsKVxuICAgIH1cbiAgICB4aHIub25wcm9ncmVzcyA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwXG4gICAgfVxuICAgIHhoci5zZW5kKClcbiAgfVxuXG4gIGxvYWRKU09OICgpIHtcbiAgICBjb25zdCB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICB4aHIub3BlbignR0VUJywgdGhpcy51cmwsIHRydWUpXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCB0aGlzLnVybCwgeGhyLnN0YXR1c1RleHQpXG4gICAgICB9XG4gICAgfVxuICAgIHhoci5vbmVycm9yID0gKHJlYXNvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgQXNzZXQnKVxuICAgIH1cbiAgICB4aHIub25wcm9ncmVzcyA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwXG4gICAgfVxuICAgIHhoci5zZW5kKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldFxuIiwiaW1wb3J0IEFzc2V0IGZyb20gJy4vYXNzZXQnXG5cbmNsYXNzIExvYWRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmFzc2V0cyA9IFtdXG4gIH1cblxuICBhZGQgKHR5cGUsIGlkLCB1cmwpIHtcbiAgICBjb25zdCBhc3NldEV4aXN0ID0gdGhpcy5nZXQoaWQpXG4gICAgaWYgKGFzc2V0RXhpc3QpIHtcbiAgICAgIGNvbnNvbGUud2FybignYXNzZXQgd2l0aCBpZCcsIGlkLCAnYWxyZWFkeSBleGlzdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IEFzc2V0KHR5cGUsIGlkLCB1cmwpXG4gICAgICB0aGlzLmFzc2V0cy5wdXNoKGFzc2V0KVxuICAgIH1cbiAgfVxuXG4gIGxvYWQgKCkge1xuICAgIHRoaXMuYXNzZXRzLmZvckVhY2goKGFzc2V0KSA9PiB7XG4gICAgICBhc3NldC5sb2FkKClcbiAgICB9KVxuICB9XG5cbiAgbGlzdCAoKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gW11cbiAgICB0aGlzLmFzc2V0cy5mb3JFYWNoKChhc3NldCkgPT4ge1xuICAgICAgb3V0cHV0LnB1c2goYXNzZXQuY29udGVudClcbiAgICB9KVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGdldEJ5VHlwZSAodHlwZSkge1xuICAgIGNvbnN0IG91dHB1dCA9IFtdXG4gICAgdGhpcy5hc3NldHMuZm9yRWFjaCgoYXNzZXQpID0+IHtcbiAgICAgIGlmIChhc3NldC50eXBlID09PSB0eXBlKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKGFzc2V0LmNvbnRlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBnZXQgKGlkKSB7XG4gICAgbGV0IG91dHB1dCA9IG51bGxcbiAgICB0aGlzLmFzc2V0cy5mb3JFYWNoKChhc3NldCkgPT4ge1xuICAgICAgaWYgKGFzc2V0LmlkID09PSBpZCkge1xuICAgICAgICBvdXRwdXQgPSBhc3NldC5jb250ZW50XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICB1cGRhdGUgKCkge31cblxuICBnZXRQcm9ncmVzcyAoKSB7XG4gICAgbGV0IHN1bSA9IDBcblxuICAgIHRoaXMuYXNzZXRzLmZvckVhY2goKGFzc2V0KSA9PiB7XG4gICAgICBzdW0gKz0gYXNzZXQucHJvZ3Jlc3NcbiAgICB9KVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioc3VtIC8gdGhpcy5hc3NldHMubGVuZ3RoKSB8fCAwXG4gIH1cblxuICByZWFkeSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzZXRzLmxlbmd0aCAmJiB0aGlzLmFzc2V0cy5ldmVyeShhc3NldCA9PiBhc3NldC5jb250ZW50ICE9PSBudWxsKVxuICB9XG5cbiAgbG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzZXRzLmxlbmd0aCAmJiB0aGlzLmFzc2V0cy5zb21lKGFzc2V0ID0+ICFhc3NldC5jb250ZW50KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImNsYXNzIE1hY2hpbmUge1xuICBjb25zdHJ1Y3RvciAoZW50cnlTdGF0ZSwgc3RhdGVzKSB7XG4gICAgdGhpcy5zdGF0ZXMgPSBzdGF0ZXMgfHwge31cbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGVzW2VudHJ5U3RhdGVdXG4gICAgdGhpcy5leGl0ZWQgPSBmYWxzZVxuICB9XG5cbiAgZXhpdCAoKSB7XG4gICAgdGhpcy5leGl0ZWQgPSB0cnVlXG4gIH1cblxuICB0cmFuc2l0aW9uIChzdGF0ZSkge1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZXNbc3RhdGVdXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICghdGhpcy5leGl0ZWQpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNoaW5lXG4iLCJpbXBvcnQgTWFjaGluZSBmcm9tICcuL21hY2hpbmUnXG5cbmNsYXNzIE1hY2hpbmVzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubWFjaGluZXMgPSBbXVxuICB9XG5cbiAgY3JlYXRlIChlbnRyeVN0YXRlLCBzdGF0ZXMpIHtcbiAgICBjb25zdCBtYWNoaW5lID0gbmV3IE1hY2hpbmUoZW50cnlTdGF0ZSwgc3RhdGVzKVxuICAgIHRoaXMubWFjaGluZXMucHVzaChtYWNoaW5lKVxuICAgIHJldHVybiBtYWNoaW5lXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMubWFjaGluZXMuZm9yRWFjaCgobWFjaGluZSkgPT4ge1xuICAgICAgbWFjaGluZS51cGRhdGUoKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLm1hY2hpbmVzLmZvckVhY2goKG1hY2hpbmUpID0+IHtcbiAgICAgIG1hY2hpbmUuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjaGluZXNcbiIsImNvbnN0IEpTT05QYWNrZXIgPSBmdW5jdGlvbiAoKSB7fVxuXG5KU09OUGFja2VyLnByb3RvdHlwZS5wYWNrID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3Qgc2NoZW1hcyA9IHt9XG4gIGxldCBtYXhTY2hlbWFJbmRleCA9IDBcblxuICBjb25zdCBlbmNvZGVBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aFxuICAgIGNvbnN0IGVuY29kZWQgPSBbXVxuXG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVuY29kZWQucHVzaCgwKSAvLyAwIGlzIHNjaGVtYSBpbmRleCBmb3IgQXJyYXlcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gdmFsdWVbaV1cbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBlbmNvZGUodilcbiAgICAgIGNvbnN0IGxhc3QgPSBlbmNvZGVkW2VuY29kZWQubGVuZ3RoIC0gMV1cbiAgICAgIGlmICh0aGlzLmlzRW5jb2RlZE9iamVjdChjdXJyZW50KSAmJiBBcnJheS5pc0FycmF5KGxhc3QpICYmIGN1cnJlbnRbMF0gPT09IGxhc3RbMF0pIHtcbiAgICAgICAgLy8gY3VycmVudCBhbmQgcHJldmlvdXMgb2JqZWN0IGhhdmUgc2FtZSBzY2hlbWEsXG4gICAgICAgIC8vIHNvIG1lcmdlIHRoZWlyIHZhbHVlcyBpbnRvIG9uZSBhcnJheVxuICAgICAgICBlbmNvZGVkW2VuY29kZWQubGVuZ3RoIC0gMV0gPSBsYXN0LmNvbmNhdChjdXJyZW50LnNsaWNlKDEpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5jb2RlZC5wdXNoKGN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVkXG4gIH1cblxuICBjb25zdCBlbmNvZGVPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzY2hlbWFLZXlzID0gT2JqZWN0LmtleXModmFsdWUpLnNvcnQoKVxuXG4gICAgaWYgKHNjaGVtYUtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBsZXQgZW5jb2RlZFxuICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYUtleXMubGVuZ3RoICsgJzonICsgc2NoZW1hS2V5cy5qb2luKCd8JylcbiAgICBjb25zdCBzY2hlbWFJbmRleCA9IHNjaGVtYXNbc2NoZW1hXVxuXG4gICAgaWYgKHNjaGVtYUluZGV4KSB7IC8vIGtub3duIHNjaGVtYVxuICAgICAgZW5jb2RlZCA9IFtzY2hlbWFJbmRleF1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGs7IGsgPSBzY2hlbWFLZXlzW2krK107KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgZW5jb2RlZFtpXSA9IGVuY29kZSh2YWx1ZVtrXSlcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBuZXcgc2NoZW1hXG4gICAgICBzY2hlbWFzW3NjaGVtYV0gPSArK21heFNjaGVtYUluZGV4XG4gICAgICBlbmNvZGVkID0ge31cbiAgICAgIGZvciAobGV0IGkgPSAwLCBrOyBrID0gc2NoZW1hS2V5c1tpKytdOykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICAgIGVuY29kZWRba10gPSBlbmNvZGUodmFsdWVba10pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVkXG4gIH1cblxuICBjb25zdCBlbmNvZGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICAgIC8vIG5vbi1vYmplY3RzIG9yIG51bGwgcmV0dXJuIGFzIGlzXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZW5jb2RlQXJyYXkodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVPYmplY3QodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVuY29kZShkYXRhKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gZGF0YSBQYWNrZWQgamF2YXNjcmlwdCBkYXRhLlxuICogQHJldHVybiB7Kn0gT3JpZ2luYWwgZGF0YS5cbiAqL1xuSlNPTlBhY2tlci5wcm90b3R5cGUudW5wYWNrID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3Qgc2NoZW1hcyA9IHt9XG4gIGxldCBtYXhTY2hlbWFJbmRleCA9IDBcblxuICBjb25zdCBwYXJzZUFycmF5ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfSBlbHNlIGlmICh2YWx1ZVswXSA9PT0gMCB8fCB0eXBlb2YgdmFsdWVbMF0gIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZGVjb2RlQXJyYXkodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZWNvZGVPYmplY3QodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVjb2RlQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBsZW4gPSB2YWx1ZS5sZW5ndGhcbiAgICBsZXQgZGVjb2RlZCA9IFtdIC8vIGRlY29kZSBhcnJheSBvZiBzb21ldGhpbmdcblxuICAgIGZvciAobGV0IGkgPSAodmFsdWVbMF0gPT09IDAgPyAxIDogMCk7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgdiA9IHZhbHVlW2ldXG4gICAgICBjb25zdCBvYmogPSBkZWNvZGUodilcbiAgICAgIGlmICh0aGlzLmlzRW5jb2RlZE9iamVjdCh2KSAmJiBBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgLy8gc2V2ZXJhbCBvYmplY3RzIHdhcyBlbmNvZGVkIGludG8gc2luZ2xlIGFycmF5XG4gICAgICAgIGRlY29kZWQgPSBkZWNvZGVkLmNvbmNhdChvYmopXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWNvZGVkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZFxuICB9XG5cbiAgY29uc3QgZGVjb2RlT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc2NoZW1hS2V5cyA9IHNjaGVtYXNbdmFsdWVbMF1dXG4gICAgY29uc3Qgc2NoZW1hTGVuID0gc2NoZW1hS2V5cy5sZW5ndGhcbiAgICBjb25zdCB0b3RhbCA9ICh2YWx1ZS5sZW5ndGggLSAxKSAvIHNjaGVtYUxlblxuICAgIGxldCBkZWNvZGVkXG4gICAgaWYgKHRvdGFsID4gMSkge1xuICAgICAgZGVjb2RlZCA9IFtdIC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCBzYW1lIHNjaGVtYVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9XG4gICAgICAgIGZvciAobGV0IGogPSAwLCBrOyBrID0gc2NoZW1hS2V5c1tqKytdOykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICAgICAgb2JqW2tdID0gZGVjb2RlKHZhbHVlW2kgKiBzY2hlbWFMZW4gKyBqXSlcbiAgICAgICAgfVxuICAgICAgICBkZWNvZGVkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWNvZGVkID0ge31cbiAgICAgIGZvciAobGV0IGogPSAwLCBrOyBrID0gc2NoZW1hS2V5c1tqKytdOykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICAgIGRlY29kZWRba10gPSBkZWNvZGUodmFsdWVbal0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVkXG4gIH1cblxuICBjb25zdCBkZWNvZGVOZXdPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzY2hlbWFLZXlzID0gT2JqZWN0LmtleXModmFsdWUpLnNvcnQoKVxuICAgIGlmIChzY2hlbWFLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICAgIHNjaGVtYXNbKyttYXhTY2hlbWFJbmRleF0gPSBzY2hlbWFLZXlzXG4gICAgY29uc3QgZGVjb2RlZCA9IHt9XG4gICAgZm9yIChsZXQgaSA9IDAsIGs7IGsgPSBzY2hlbWFLZXlzW2krK107KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgIGRlY29kZWRba10gPSBkZWNvZGUodmFsdWVba10pXG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVkXG4gIH1cblxuICBjb25zdCBkZWNvZGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICAgIC8vIG5vbi1vYmplY3RzIG9yIG51bGwgcmV0dXJuIGFzIGlzXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gcGFyc2VBcnJheSh2YWx1ZSlcbiAgICB9IGVsc2UgeyAvLyBvYmplY3Qgd2l0aCBuZXcgc2NoZW1hXG4gICAgICByZXR1cm4gZGVjb2RlTmV3T2JqZWN0KHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWNvZGUoZGF0YSlcbn1cblxuLyoqXG4gKiBPYmplY3QgaXMgZW5jb2RlZCBhcyBhcnJheSBhbmQgb2JqZWN0IHNjaGVtYSBpbmRleCBpcyBzdG9yZWQgYXNcbiAqIGZpcnN0IGl0ZW0gb2YgdGhlIGFycmF5LiBWYWxpZCBzY2hlbWEgaW5kZXggc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiAwLFxuICogYmVjYXVzZSAwIGlzIHJlc2VydmVkIGZvciBBcnJheSBzY2hlbWEuXG4gKiBTZXZlcmFsIG9iamVjdHMgd2l0aCBzYW1lIHNjaGVtYSBjYW4gYmUgc3RvcmVkIGluIHRoZSBvbmUgYXJyYXkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIGVuY29kZWQgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHZhbHVlIGNvbnRhaW5zIGFuIGVuY29kZWQgb2JqZWN0IG9yIHNldmVyYWxcbiAqIG9iamVjdHMgd2l0aCBzYW1lIHNjaGVtYS5cbiAqL1xuSlNPTlBhY2tlci5wcm90b3R5cGUuaXNFbmNvZGVkT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdudW1iZXInICYmIHZhbHVlWzBdICE9PSAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpTT05QYWNrZXJcbiIsImNsYXNzIEtleSB7XG4gIGNvbnN0cnVjdG9yIChrZXkpIHtcbiAgICB0aGlzLmtleSA9IGtleVxuICAgIHRoaXMuZGVsdGEgPSAwXG4gICAgdGhpcy5zdGFydCA9IGZhbHNlXG4gICAgdGhpcy5lbmQgPSBmYWxzZVxuICAgIHRoaXMuaG9sZCA9IDBcbiAgICB0aGlzLmhvbGRUaW1lID0gMFxuICAgIHRoaXMuc3RhcnRGcmFtZSA9IDBcbiAgICB0aGlzLmVuZEZyYW1lID0gMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleVxuIiwiaW1wb3J0IEtleSBmcm9tICcuL2tleSdcblxuY2xhc3MgS2V5TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5rZXlzID0gW11cbiAgICB0aGlzLmRlbHRhID0gMFxuICAgIHRoaXMubm93ID0gMFxuICAgIHRoaXMudGhlbiA9IDBcbiAgICB0aGlzLmZyYW1lID0gMFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcyksIGZhbHNlKVxuICB9XG5cbiAgbGlzdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMua2V5c1xuICB9XG5cbiAgaGFuZGxlS2V5RG93biAoZXZlbnQpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldChldmVudC5rZXkpXG4gICAgaWYgKGtleSkge1xuICAgICAga2V5LmhvbGQgPSAxXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5VXAgKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXQoZXZlbnQua2V5KVxuICAgIGlmIChrZXkpIHtcbiAgICAgIGtleS5ob2xkID0gMFxuICAgIH1cbiAgfVxuXG4gIGVuYWJsZSAoa2V5KSB7XG4gICAgaWYgKCF0aGlzLmdldChrZXkpKSB7XG4gICAgICBjb25zdCBrZXlPYmogPSBuZXcgS2V5KGtleSlcbiAgICAgIHRoaXMua2V5cy5wdXNoKGtleU9iailcbiAgICAgIHJldHVybiBrZXlPYmpcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBlbmFibGVLZXlzIChrZXlzKSB7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZW5hYmxlKGtleSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0IChrZXkpIHtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMua2V5cy5maWx0ZXIoKGtleU9iaikgPT4ga2V5T2JqLmtleSA9PT0ga2V5KVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJlZFswXVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5mcmFtZSsrXG4gICAgICB0aGlzLm5vdyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgICAgdGhpcy5kZWx0YSA9IE1hdGguZmxvb3IodGhpcy5ub3cgLSB0aGlzLnRoZW4pXG4gICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vd1xuICAgICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5LmhvbGQpIHtcbiAgICAgICAgICBrZXkuaG9sZFRpbWUgKz0gdGhpcy5kZWx0YVxuICAgICAgICAgIGtleS5lbmRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKGtleS5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAga2V5LnN0YXJ0RnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleS5ob2xkVGltZSA9IDBcbiAgICAgICAgICBrZXkuc3RhcnRGcmFtZSA9IC0xXG4gICAgICAgICAgaWYgKGtleS5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGtleS5lbmRGcmFtZSA9IHRoaXMuZnJhbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5LnN0YXJ0ID0gKGtleS5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKSA/IDEgOiAwXG4gICAgICAgIGtleS5lbmQgPSAoa2V5LmVuZEZyYW1lID09PSB0aGlzLmZyYW1lKSA/IDEgOiAwXG4gICAgICAgIGtleS5kZWx0YSA9IHRoaXMuZGVsdGFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaG9sZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSkuaG9sZFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlNYW5hZ2VyXG4iLCJjbGFzcyBQb2ludGVyIHtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVsdGEgPSAwXG4gICAgdGhpcy5hY3RpdmUgPSAwXG4gICAgdGhpcy5ob2xkID0gMFxuICAgIHRoaXMuc3RhcnQgPSAwXG4gICAgdGhpcy5lbmQgPSAwXG4gICAgdGhpcy5ob2xkVGltZSA9IDBcbiAgICB0aGlzLnN0YXJ0RnJhbWUgPSAwXG4gICAgdGhpcy5lbmRGcmFtZSA9IDBcbiAgICB0aGlzLmlkID0gMFxuICAgIHRoaXMudHlwZSA9IG51bGxcbiAgICB0aGlzLnN0YXJ0WCA9IDBcbiAgICB0aGlzLnN0YXJ0WSA9IDBcbiAgICB0aGlzLm9mZnNldFggPSAwXG4gICAgdGhpcy5vZmZzZXRZID0gMFxuICAgIHRoaXMueCA9IDBcbiAgICB0aGlzLnkgPSAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclxuIiwiaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi9wb2ludGVyJ1xuXG5jbGFzcyBQb2ludGVyTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yIChlbGVtZW50LCBxdWFudGl0eSA9IDEpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5wb2ludGVycyA9IFtdXG4gICAgdGhpcy5kZWx0YSA9IDBcbiAgICB0aGlzLm5vdyA9IDBcbiAgICB0aGlzLnRoZW4gPSAwXG4gICAgdGhpcy5mcmFtZSA9IDBcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWFudGl0eTsgaSsrKSB7XG4gICAgICB0aGlzLnBvaW50ZXJzLnB1c2gobmV3IFBvaW50ZXIoKSlcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZScgLy8gbmVlZGVkIGZvciBtb2JpbGVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJyAvLyBuZWVkZWQgZm9yIG1vYmlsZVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24uYmluZCh0aGlzKSwgZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmhhbmRsZVBvaW50ZXJVcEFuZENhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdGhpcy5oYW5kbGVQb2ludGVyVXBBbmRDYW5jZWwuYmluZCh0aGlzKSwgZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVDb250ZXh0TWVudS5iaW5kKHRoaXMpLCBmYWxzZSlcbiAgfVxuXG4gIGxpc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnBvaW50ZXJzXG4gIH1cblxuICBnZXRCeUlkIChpZCkge1xuICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5wb2ludGVycy5maWx0ZXIoKHBvaW50ZXIpID0+IHBvaW50ZXIuaWQgPT09IGlkKVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJlZFswXVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldEluYWN0aXZlUG9pbnRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLnBvaW50ZXJzLmZpbHRlcigocG9pbnRlcikgPT4gIXBvaW50ZXIuYWN0aXZlKVxuICAgIGlmIChmaWx0ZXJlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJlZFswXVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGhhbmRsZVBvaW50ZXJEb3duIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRCeUlkKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICAgIGlmIChwb2ludGVyKSB7XG4gICAgICBwb2ludGVyLmFjdGl2ZSA9IDFcbiAgICAgIHBvaW50ZXIuaWQgPSBldmVudC5wb2ludGVySWRcbiAgICAgIHBvaW50ZXIudHlwZSA9IGV2ZW50LnBvaW50ZXJUeXBlIC8vICdtb3VzZScsICdwZW4nLCAndG91Y2gnXG4gICAgICBwb2ludGVyLmhvbGQgPSAxXG4gICAgICBwb2ludGVyLnN0YXJ0WCA9IE1hdGguZmxvb3IoZXZlbnQuY2xpZW50WCAtIGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0KVxuICAgICAgcG9pbnRlci5zdGFydFkgPSBNYXRoLmZsb29yKGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0KVxuICAgICAgcG9pbnRlci54ID0gTWF0aC5mbG9vcihldmVudC5jbGllbnRYIC0gZXZlbnQudGFyZ2V0Lm9mZnNldExlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQpXG4gICAgICBwb2ludGVyLnkgPSBNYXRoLmZsb29yKGV2ZW50LmNsaWVudFkgLSBldmVudC50YXJnZXQub2Zmc2V0VG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBvaW50ZXJNb3ZlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRCeUlkKGV2ZW50LnBvaW50ZXJJZCkgfHwgdGhpcy5nZXRJbmFjdGl2ZVBvaW50ZXIoKVxuICAgIGlmIChwb2ludGVyKSB7XG4gICAgICBwb2ludGVyLmlkID0gZXZlbnQucG9pbnRlcklkXG4gICAgICBwb2ludGVyLnggPSBNYXRoLmZsb29yKGV2ZW50LmNsaWVudFggLSBldmVudC50YXJnZXQub2Zmc2V0TGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldClcbiAgICAgIHBvaW50ZXIueSA9IE1hdGguZmxvb3IoZXZlbnQuY2xpZW50WSAtIGV2ZW50LnRhcmdldC5vZmZzZXRUb3AgKyB3aW5kb3cucGFnZVlPZmZzZXQpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUG9pbnRlclVwQW5kQ2FuY2VsIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwb2ludGVyID0gdGhpcy5nZXRCeUlkKGV2ZW50LnBvaW50ZXJJZClcbiAgICBpZiAocG9pbnRlcikge1xuICAgICAgcG9pbnRlci5hY3RpdmUgPSAwXG4gICAgICBwb2ludGVyLmhvbGQgPSAwXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29udGV4dE1lbnUgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZnJhbWUrK1xuICAgICAgdGhpcy5ub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICAgIHRoaXMuZGVsdGEgPSBNYXRoLmZsb29yKHRoaXMubm93IC0gdGhpcy50aGVuKVxuICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3dcbiAgICAgIHRoaXMucG9pbnRlcnMuZm9yRWFjaCgocG9pbnRlcikgPT4ge1xuICAgICAgICBpZiAocG9pbnRlci5ob2xkKSB7XG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRYID0gKHBvaW50ZXIueCAtIHBvaW50ZXIuc3RhcnRYKVxuICAgICAgICAgIHBvaW50ZXIub2Zmc2V0WSA9IChwb2ludGVyLnkgLSBwb2ludGVyLnN0YXJ0WSlcbiAgICAgICAgICBwb2ludGVyLmhvbGRUaW1lICs9IHRoaXMuZGVsdGFcbiAgICAgICAgICBwb2ludGVyLmVuZEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5zdGFydEZyYW1lID09PSAtMSkge1xuICAgICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gdGhpcy5mcmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb2ludGVyLm9mZnNldFggPSAwXG4gICAgICAgICAgcG9pbnRlci5vZmZzZXRZID0gMFxuICAgICAgICAgIHBvaW50ZXIuaG9sZFRpbWUgPSAwXG4gICAgICAgICAgcG9pbnRlci5zdGFydEZyYW1lID0gLTFcbiAgICAgICAgICBpZiAocG9pbnRlci5lbmRGcmFtZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBvaW50ZXIuZW5kRnJhbWUgPSB0aGlzLmZyYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvaW50ZXIuc3RhcnQgPSAocG9pbnRlci5zdGFydEZyYW1lID09PSB0aGlzLmZyYW1lKSA/IDEgOiAwXG4gICAgICAgIHBvaW50ZXIuZW5kID0gKHBvaW50ZXIuZW5kRnJhbWUgPT09IHRoaXMuZnJhbWUpID8gMSA6IDBcbiAgICAgICAgcG9pbnRlci5kZWx0YSA9IHRoaXMuZGVsdGFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyTWFuYWdlclxuIiwiY2xhc3MgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfVxuICAgIHRoaXMud2lkdGggPSAwXG4gICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgdGhpcy5yb3RhdGlvbiA9IDBcbiAgICB0aGlzLnpvb20gPSAxLjBcbiAgICB0aGlzLmxlcnAgPSAxXG4gIH1cblxuICBzZXRQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgfVxuXG4gIHNldFNpemUgKHcsIGgpIHtcbiAgICB0aGlzLndpZHRoID0gd1xuICAgIHRoaXMuaGVpZ2h0ID0gaFxuICB9XG5cbiAgc2V0QW5nbGUgKGRlZ3JlZXMpIHtcbiAgICB0aGlzLnJvdGF0aW9uID0gZGVncmVlc1xuICB9XG5cbiAgY2VudGVyT24gKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLnpvb20gKiAocG9zaXRpb24ueCkgLSAodGhpcy53aWR0aCAvIDIpIC0gdGhpcy5wb3NpdGlvbi54KSAqIHRoaXMubGVycFxuICAgIHRoaXMucG9zaXRpb24ueSArPSAodGhpcy56b29tICogKHBvc2l0aW9uLnkpIC0gKHRoaXMuaGVpZ2h0IC8gMikgLSB0aGlzLnBvc2l0aW9uLnkpICogdGhpcy5sZXJwXG4gIH1cblxuICB6b29tSW4gKHEpIHtcbiAgICB0aGlzLnpvb20gLT0gcSAvIDEwMDBcblxuICAgIGlmICh0aGlzLnpvb20gPCAwKSB7XG4gICAgICB0aGlzLnpvb20gPSAwXG4gICAgfVxuICB9XG5cbiAgem9vbU91dCAocSkge1xuICAgIHRoaXMuem9vbSArPSBxIC8gMTAwMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYVxuIiwiY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5vYmplY3RzID0gW11cbiAgfVxuXG4gIGFkZCAob2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3RzLnB1c2gob2JqZWN0KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lXG4iLCJjbGFzcyBSZW5kZXJMb29wIHtcbiAgY29uc3RydWN0b3IgKG9uU1RlcCkge1xuICAgIHRoaXMuZnJhbWUgPSAwXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuICAgIHRoaXMub25TdGVwID0gb25TVGVwXG4gICAgdGhpcy5zdGFydCgpXG4gIH1cblxuICBzdGVwICgpIHtcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLmZyYW1lKytcbiAgICAgIHRoaXMub25TdGVwKClcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGVwLmJpbmQodGhpcykpXG4gICAgfVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuZmFsc2UgPSB0cnVlXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0ZXAuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJMb29wXG4iLCJpbXBvcnQgQ2FtZXJhIGZyb20gJy4vY2FtZXJhJ1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUnXG5pbXBvcnQgUmVuZGVyTG9vcCBmcm9tICcuLi9sb29wcy9yZW5kZXItbG9vcCdcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKClcbiAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKClcbiAgICB0aGlzLnJlbmRlckxvb3AgPSBuZXcgUmVuZGVyTG9vcCgoKSA9PiB0aGlzLmRyYXcoKSlcbiAgICB0aGlzLnJlc2l6ZSgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNpemUgKCkge1xuICAgIGNvbnN0IHBhcmVudFJlY3QgPSB0aGlzLmNhbnZhcy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBwYXJlbnRSZWN0LnJpZ2h0IC0gcGFyZW50UmVjdC5sZWZ0XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBwYXJlbnRSZWN0LnJpZ2h0IC0gcGFyZW50UmVjdC5sZWZ0XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLmNhbnZhcy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgIHRoaXMuY2FtZXJhLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGhcbiAgICB0aGlzLmNhbWVyYS5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgfVxuXG4gIGNsZWFyICgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG4gIH1cblxuICBjaXJjbGUgKHgsIHksIHJhZGl1cykge1xuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgfVxuXG4gIHRleHQgKHRleHQsIHgsIHkpIHtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgeSlcbiAgfVxuXG4gIGxpbmUgKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludEEueCwgcG9pbnRBLnkpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludEIueCwgcG9pbnRCLnkpXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gIH1cblxuICByZWN0ICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jb250ZXh0LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgfVxuXG4gIGltYWdlIChpbWFnZSwgc3gsIHN5LCBzdywgc2gsIGR4LCBkeSwgZHcsIGRoKSB7XG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzdywgc2gsIGR4LCBkeSwgZHcsIGRoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgdGhpcy5jbGVhcigpXG4gICAgdGhpcy5jb250ZXh0LnNhdmUoKVxuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoKHRoaXMuY2FtZXJhLndpZHRoIC8gMiksICh0aGlzLmNhbWVyYS5oZWlnaHQgLyAyKSlcbiAgICB0aGlzLmNvbnRleHQucm90YXRlKHRoaXMuY2FtZXJhLnJvdGF0aW9uKVxuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLSh0aGlzLmNhbWVyYS53aWR0aCAvIDIpLCAtKHRoaXMuY2FtZXJhLmhlaWdodCAvIDIpKVxuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLXRoaXMuY2FtZXJhLnBvc2l0aW9uLngsIC10aGlzLmNhbWVyYS5wb3NpdGlvbi55KVxuICAgIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLmNhbWVyYS56b29tLCB0aGlzLmNhbWVyYS56b29tKVxuXG4gICAgdGhpcy5zY2VuZS5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LmRyYXcodGhpcylcbiAgICB9KVxuXG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyXG4iLCJjbGFzcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfVxuICAgIHRoaXMucm90YXRpb24gPSAwXG4gICAgdGhpcy5zY2FsZSA9IDFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0XG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2dhbWUtb2JqZWN0J1xuXG5jbGFzcyBTcHJpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IgKGltYWdlLCB3aWR0aCwgaGVpZ2h0LCBzb3VyY2VXaWR0aCwgc291cmNlSGVpZ2h0KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZVxuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCBpbWFnZS53aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IGltYWdlLmhlaWdodFxuICAgIHRoaXMuc291cmNlV2lkdGggPSBzb3VyY2VXaWR0aCB8fCBpbWFnZS53aWR0aFxuICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gc291cmNlSGVpZ2h0IHx8IGltYWdlLmhlaWdodFxuICAgIHRoaXMuc291cmNlWCA9IDBcbiAgICB0aGlzLnNvdXJjZVkgPSAwXG4gICAgdGhpcy5hbmltYXRpb25zID0gW11cbiAgICB0aGlzLmRlbGF5ID0gMFxuICAgIHRoaXMuY291bnRlciA9IDBcbiAgfVxuXG4gIGFkZEFuaW1hdGlvbiAobmFtZSwgc2VxdWVuY2UsIG1pbGxpc2Vjb25kcykge1xuICAgIGlmICghdGhpcy5nZXRBbmltYXRpb24obmFtZSkpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgc2VxdWVuY2U6IHNlcXVlbmNlLFxuICAgICAgICBtaWxsaXNlY29uZHM6IG1pbGxpc2Vjb25kc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZXRBbmltYXRpb24gKG5hbWUpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcbiAgICB0aGlzLmFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XG4gICAgICBpZiAoYW5pbWF0aW9uLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgb3V0cHV0ID0gYW5pbWF0aW9uXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBwbGF5IChuYW1lLCBkZWx0YSkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0QW5pbWF0aW9uKG5hbWUpXG4gICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLnNvdXJjZVdpZHRoXG4gICAgICB0aGlzLmRlbGF5ICs9IGRlbHRhXG5cbiAgICAgIGlmICh0aGlzLmRlbGF5ID49IGFuaW1hdGlvbi5taWxsaXNlY29uZHMpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gKHRoaXMuY291bnRlciArIDEpICUgYW5pbWF0aW9uLnNlcXVlbmNlLmxlbmd0aFxuICAgICAgICB0aGlzLmRlbGF5ID0gMFxuICAgICAgfVxuICAgICAgdGhpcy5zb3VyY2VZID0gTWF0aC5mbG9vcigoYW5pbWF0aW9uLnNlcXVlbmNlW3RoaXMuY291bnRlcl0gKyAxKSAvIGNvbHVtbnMpICogdGhpcy5zb3VyY2VIZWlnaHRcbiAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMuc291cmNlV2lkdGggKiBhbmltYXRpb24uc2VxdWVuY2VbdGhpcy5jb3VudGVyXSAtIHRoaXMuaW1hZ2Uud2lkdGggKiB0aGlzLnNvdXJjZVkgLyB0aGlzLmhlaWdodFxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKHJlbmRlcikge1xuICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICByZW5kZXIuaW1hZ2UoXG4gICAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAgIHRoaXMuc291cmNlWCxcbiAgICAgICAgdGhpcy5zb3VyY2VZLFxuICAgICAgICB0aGlzLnNvdXJjZVdpZHRoLFxuICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCAqIDAuNSxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKiAwLjUsXG4gICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgIHRoaXMuaGVpZ2h0XG4gICAgICApXG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTcHJpdGVcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZS1vYmplY3QnXG5cbmNsYXNzIFRpbGVTcHJpdGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IgKGltYWdlLCBwaXhlbHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBzdXBlcigpXG4gICAgY29uc3QgdG1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBjb25zdCB0bXBDb250ZXh0ID0gdG1wQ2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0bXBDYW52YXMud2lkdGggPSBpbWFnZS53aWR0aCAqIDJcbiAgICB0bXBDYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogMlxuICAgIHRtcENvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCAqIDAuNSwgaW1hZ2UuaGVpZ2h0ICogMC41KVxuICAgIHRtcENvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBpbWFnZS53aWR0aCAqIDAuNSwgMCwgaW1hZ2Uud2lkdGggKiAwLjUsIGltYWdlLmhlaWdodCAqIDAuNSlcbiAgICB0bXBDb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgaW1hZ2UuaGVpZ2h0ICogMC41LCBpbWFnZS53aWR0aCAqIDAuNSwgaW1hZ2UuaGVpZ2h0ICogMC41KVxuICAgIHRtcENvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBpbWFnZS53aWR0aCAqIDAuNSwgaW1hZ2UuaGVpZ2h0ICogMC41LCBpbWFnZS53aWR0aCAqIDAuNSwgaW1hZ2UuaGVpZ2h0ICogMC41KVxuXG4gICAgdGhpcy5pbWFnZSA9IHRtcENhbnZhc1xuICAgIHRoaXMucGl4ZWxzID0gcGl4ZWxzIHx8IDEwMFxuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCBpbWFnZS53aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IGltYWdlLmhlaWdodFxuICAgIHRoaXMuc291cmNlV2lkdGggPSBpbWFnZS53aWR0aCAqIDAuNVxuICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogMC41XG4gICAgdGhpcy5zb3VyY2VYID0gMFxuICAgIHRoaXMuc291cmNlWSA9IDBcbiAgfVxuXG4gIHNjcm9sbCAoZGlyZWN0aW9uLCBkZWx0YSkge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5zb3VyY2VYICs9IGRlbHRhICogdGhpcy5waXhlbHMgLyAxMDAwXG4gICAgICBpZiAodGhpcy5zb3VyY2VYICsgdGhpcy5zb3VyY2VXaWR0aCA+PSB0aGlzLnNvdXJjZVdpZHRoICogMikge1xuICAgICAgICB0aGlzLnNvdXJjZVggPSAwXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuc291cmNlWCAtPSBkZWx0YSAqIHRoaXMucGl4ZWxzIC8gMTAwMFxuICAgICAgaWYgKHRoaXMuc291cmNlWCA8PSAwKSB7XG4gICAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMuc291cmNlV2lkdGhcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgdGhpcy5zb3VyY2VZICs9IGRlbHRhICogdGhpcy5waXhlbHMgLyAxMDAwXG4gICAgICBpZiAodGhpcy5zb3VyY2VZICsgdGhpcy5zb3VyY2VIZWlnaHQgPj0gdGhpcy5zb3VyY2VIZWlnaHQgKiAyKSB7XG4gICAgICAgIHRoaXMuc291cmNlWSA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICB0aGlzLnNvdXJjZVkgLT0gZGVsdGEgKiB0aGlzLnBpeGVscyAvIDEwMDBcbiAgICAgIGlmICh0aGlzLnNvdXJjZVkgPD0gMCkge1xuICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLnNvdXJjZUhlaWdodFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXcgKHJlbmRlcikge1xuICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICByZW5kZXIuaW1hZ2UoXG4gICAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAgIHRoaXMuc291cmNlWCxcbiAgICAgICAgdGhpcy5zb3VyY2VZLFxuICAgICAgICB0aGlzLnNvdXJjZVdpZHRoLFxuICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCAqIDAuNSxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKiAwLjUsXG4gICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgIHRoaXMuaGVpZ2h0XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbGVTcHJpdGVcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZS1vYmplY3QnXG5cbmNsYXNzIEZyZWVIYW5kIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yIChkcmF3KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuZHJhdyA9IGRyYXdcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRnJlZUhhbmRcbiIsImNsYXNzIFVwZGF0ZUxvb3Age1xuICBjb25zdHJ1Y3RvciAoZnBzID0gNTAsIG9uU1RlcCkge1xuICAgIHRoaXMuZnBzID0gZnBzXG4gICAgdGhpcy5mcmFtZSA9IDBcbiAgICB0aGlzLmludGVydmFsID0gbnVsbFxuICAgIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLmRlbHRhID0gMTAwMCAvIHRoaXMuZnBzXG4gICAgdGhpcy5vblN0ZXAgPSBvblNUZXBcbiAgICB0aGlzLnN0YXJ0KClcbiAgfVxuXG4gIGdldEZwcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnBzXG4gIH1cblxuICBzZXRGcHMgKGZwcykge1xuICAgIHRoaXMuc3RvcCgpXG4gICAgdGhpcy5mcHMgPSBOdW1iZXIoZnBzKVxuICAgIHRoaXMuc3RhcnQoKVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLmRlbHRhID0gMTAwMCAvIHRoaXMuZnBzXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc3RlcCh0aGlzLmRlbHRhKVxuICAgIH0sIHRoaXMuZGVsdGEpXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICB0aGlzLnBhdXNlKClcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gIH1cblxuICBzdGVwIChkZWx0YSkge1xuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMuZnJhbWUrK1xuICAgICAgdGhpcy5vblN0ZXAoZGVsdGEpXG4gICAgfVxuICB9XG5cbiAgdG9QUFMgKHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIHZlbG9jaXR5ICogdGhpcy5kZWx0YSAvIDEwMDBcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc3RvcCgpXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVMb29wXG4iLCJpbXBvcnQgQXVkaW8gZnJvbSAnLi9hdWRpby9hdWRpbydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9sb2FkZXIvbG9hZGVyJ1xuaW1wb3J0IE1hY2hpbmVzIGZyb20gJy4vbWFjaGluZXMvbWFjaGluZXMnXG5pbXBvcnQgSlNPTlBhY2tlciBmcm9tICcuL25ldHdvcmsvanNvbi1wYWNrZXInXG5pbXBvcnQgS2V5TWFuYWdlciBmcm9tICcuL2lucHV0cy9rZXlzL2tleS1tYW5hZ2VyJ1xuaW1wb3J0IFBvaW50ZXJNYW5hZ2VyIGZyb20gJy4vaW5wdXRzL3BvaW50ZXJzL3BvaW50ZXItbWFuYWdlcidcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcidcbmltcG9ydCBTcHJpdGUgZnJvbSAnLi9yZW5kZXIvc3ByaXRlJ1xuaW1wb3J0IFRpbGVTcHJpdGUgZnJvbSAnLi9yZW5kZXIvdGlsZS1zcHJpdGUnXG5pbXBvcnQgRnJlZUhhbmQgZnJvbSAnLi9yZW5kZXIvZnJlZS1oYW5kJ1xuaW1wb3J0IFJlbmRlckxvb3AgZnJvbSAnLi9sb29wcy9yZW5kZXItbG9vcCdcbmltcG9ydCBVcGRhdGVMb29wIGZyb20gJy4vbG9vcHMvdXBkYXRlLWxvb3AnXG5cbmNvbnN0IFdyYXBwZXIgPSB7XG4gIEF1ZGlvOiBBdWRpbyxcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIE1hY2hpbmVzOiBNYWNoaW5lcyxcbiAgSlNPTlBhY2tlcixcbiAgS2V5TWFuYWdlcjogS2V5TWFuYWdlcixcbiAgUG9pbnRlck1hbmFnZXI6IFBvaW50ZXJNYW5hZ2VyLFxuICBSZW5kZXJlcixcbiAgU3ByaXRlLFxuICBUaWxlU3ByaXRlLFxuICBGcmVlSGFuZCxcbiAgUmVuZGVyTG9vcCxcbiAgVXBkYXRlTG9vcDogVXBkYXRlTG9vcFxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyXG4iXSwic291cmNlUm9vdCI6IiJ9