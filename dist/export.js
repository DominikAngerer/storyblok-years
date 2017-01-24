(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugin: 'years',
  mixins: [window.Storyblok.plugin],
  data: {
    years: []
  },
  methods: {
    initWith: function initWith() {
      return '';
    }
  },
  events: {
    'plugin:created': function pluginCreated() {
      var options = {
        start: 1990,
        end: new Date().getFullYear()
      };
      if (!this.schema.options) {
        console.error('years: Define the following options: 0 : start, 1 : end (default current Year)');
      }
      for (option in this.schema.options) {
        if (options[option.name]) {
          options[option.name] = option.value;
        }
      }
      var years = [];
      for (var i = options.end; i >= options.start; i--) {
        years.push(i);
      }
      this.$set('data.years', years);
    },
    'plugin:destroyed': function pluginDestroyed() {}
  },
  watch: {
    'model': {
      handler: function handler(value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<div class=uk-form-row><select class=uk-width-1-1 v-model=model><option><option v-for=\"year in data.years\" v-bind:value=year>{{ year }}</select></div>"

},{}],2:[function(require,module,exports){
'use strict';

var _Plugin = require('../Plugin.vue');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.storyblok.field_types[_Plugin2.default.plugin] = _Plugin2.default;

},{"../Plugin.vue":1}]},{},[2]);
