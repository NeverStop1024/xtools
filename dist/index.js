(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.XTools = factory());
})(this, (function () { 'use strict';

  /**
   * window.localStorage 浏览器永久缓存
   * @method set 设置永久缓存
   * @method get 获取永久缓存
   * @method remove 移除永久缓存
   * @method clear 移除全部永久缓存
   */
  var Local = {
      // 设置永久缓存
      set: function (key, val) {
          window.localStorage.setItem(key, JSON.stringify(val));
      },
      // 获取永久缓存
      get: function (key) {
          var json = window.localStorage.getItem(key);
          return JSON.parse(json);
      },
      // 移除永久缓存
      remove: function (key) {
          window.localStorage.removeItem(key);
      },
      // 移除全部永久缓存
      clear: function () {
          window.localStorage.clear();
      }
  };

  var index = {
      Local: Local
  };

  return index;

}));
