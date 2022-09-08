'use strict';
!function(data) {
  /**
   * @param {!Array} arr
   * @return {?}
   */
  function push(arr) {
    var key;
    var opt;
    var r = arr[0];
    var query = arr[1];
    var cur = arr[2];
    /** @type {number} */
    var o = 0;
    /** @type {!Array} */
    var _sizeAnimateTimeStamps = [];
    for (; o < r.length; o++) {
      opt = r[o];
      if (Object.prototype.hasOwnProperty.call(args, opt) && args[opt]) {
        _sizeAnimateTimeStamps.push(args[opt][0]);
      }
      /** @type {number} */
      args[opt] = 0;
    }
    for (key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        data[key] = query[key];
      }
    }
    if (indexOfLike) {
      indexOfLike(arr);
    }
    for (; _sizeAnimateTimeStamps.length;) {
      _sizeAnimateTimeStamps.shift()();
    }
    return result.push.apply(result, cur || []), x();
  }
  /**
   * @return {?}
   */
  function x() {
    var x;
    /** @type {number} */
    var i = 0;
    for (; i < result.length; i++) {
      var val = result[i];
      /** @type {boolean} */
      var n = true;
      /** @type {number} */
      var j = 1;
      for (; j < val.length; j++) {
        var p = val[j];
        if (0 !== args[p]) {
          /** @type {boolean} */
          n = false;
        }
      }
      if (n) {
        result.splice(i--, 1);
        x = s(s.s = val[0]);
      }
    }
    return x;
  }
  /**
   * @param {number} i
   * @return {?}
   */
  function s(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return data[i].call(module.exports, module, module.exports, s), module.l = true, module.exports;
  }
  var n = {};
  var args = {
    1 : 0
  };
  /** @type {!Array} */
  var result = [];
  /** @type {!Array} */
  s.m = data;
  s.c = n;
  /**
   * @param {!Function} e
   * @param {string} n
   * @param {!Function} val
   * @return {undefined}
   */
  s.d = function(e, n, val) {
    if (!s.o(e, n)) {
      Object.defineProperty(e, n, {
        enumerable : true,
        get : val
      });
    }
  };
  /**
   * @param {!Object} x
   * @return {undefined}
   */
  s.r = function(x) {
    if ("undefined" !== typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(x, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(x, "__esModule", {
      value : true
    });
  };
  /**
   * @param {number} e
   * @param {number} a
   * @return {?}
   */
  s.t = function(e, a) {
    if (1 & a && (e = s(e)), 8 & a) {
      return e;
    }
    if (4 & a && "object" === typeof e && e && e.__esModule) {
      return e;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (s.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : e
    }), 2 & a && "string" != typeof e) {
      var key;
      for (key in e) {
        s.d(d, key, function(childProp) {
          return e[childProp];
        }.bind(null, key));
      }
    }
    return d;
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  s.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return s.d(n, "a", n), n;
  };
  /**
   * @param {!Function} e
   * @param {string} x
   * @return {?}
   */
  s.o = function(e, x) {
    return Object.prototype.hasOwnProperty.call(e, x);
  };
  /** @type {string} */
  s.p = "/src/notehub/";
  var node = this.webpackJsonpweread_helper_notehub = this.webpackJsonpweread_helper_notehub || [];
  var controlFlowActionMsg = node.push.bind(node);
  /** @type {function(!Array): ?} */
  node.push = push;
  node = node.slice();
  /** @type {number} */
  var ii = 0;
  for (; ii < node.length; ii++) {
    push(node[ii]);
  }
  var indexOfLike = controlFlowActionMsg;
  x();
}([]);
