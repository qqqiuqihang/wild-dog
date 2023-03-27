(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "WdButton", function() { return /* reexport */ WdButton; });
__webpack_require__.d(__webpack_exports__, "makeInstaller", function() { return /* reexport */ makeInstaller; });
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ wild_dog_install; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* reexport */ wild_dog_version; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./package/constants/key.js
const INSTALLED_KEY = Symbol("INSTALLED_KEY");
// CONCATENATED MODULE: ./package/constants/size.js
const componentSizes = ["", "default", "small", "large"];
const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
};
// CONCATENATED MODULE: ./package/constants/index.js
// export * from "./aria";
// export * from "./date";
// export * from "./event";


// CONCATENATED MODULE: ./package/wild-dog/version.js
const version = "1.0.0";
// CONCATENATED MODULE: ./package/wild-dog/make-installer.js
// import { provideGlobalConfig } from "@WildDog/hooks";


const makeInstaller = components => {
  // eslint-disable-next-line no-unused-vars
  const install = (app, options) => {
    if (app[INSTALLED_KEY]) return;
    app[INSTALLED_KEY] = true;
    components.forEach(c => app.use(c));

    // if (options) provideGlobalConfig(options, app, true);
  };

  return {
    version: version,
    install
  };
};
// CONCATENATED MODULE: ./package/utils/vue/install.js
// import { NOOP } from "@vue/shared";

const withInstall = (main, extra) => {
  main.install = app => {
    for (const comp of [main, ...Object.values(extra !== null && extra !== void 0 ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  fn.install = app => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const withInstallDirective = (directive, name) => {
  directive.install = app => {
    app.directive(name, directive);
  };
  return directive;
};

// export const withNoopInstall = (component) => {
//   component.install = NOOP;

//   return component;
// };
// CONCATENATED MODULE: ./package/utils/vue/index.js
// export * from './global-node'
// export * from './icon'

// export * from './props'
// export * from './refs'
// export * from './size'
// export * from './typescript'
// export * from './validator'
// export * from './vnode'
// CONCATENATED MODULE: ./package/utils/index.js
// Internal code, don't use in your app!
// export * from './dom'

// export * from './animation'
// export * from './arrays'
// export * from './browser'
// export * from './error'
// export * from './functions'
// export * from './i18n'
// export * from './objects'
// export * from './raf'
// export * from './rand'
// export * from './strings'
// export * from './types'
// export * from './typescript'
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"47cc87da-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./package/components/button/src/button.vue?vue&type=template&id=2c43d81c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-button', {
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v(_vm._s(_vm.message))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./package/components/button/src/button.vue?vue&type=template&id=2c43d81c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./package/components/button/src/button.vue?vue&type=script&lang=js&
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "MyComponent",
  data() {
    return {
      message: "Hello, world!"
    };
  },
  methods: {
    handleClick(e) {
      this.message = "Clicked!";
      this.$emit("click", e);
    }
  }
});
// CONCATENATED MODULE: ./package/components/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./package/components/button/src/button.vue





/* normalize component */

var component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2c43d81c",
  null
  
)

/* harmony default export */ var src_button = (component.exports);
// CONCATENATED MODULE: ./package/components/button/index.js


const WdButton = withInstall(src_button);
/* harmony default export */ var components_button = (WdButton);

// CONCATENATED MODULE: ./package/wild-dog/component.js

/* harmony default export */ var wild_dog_component = ([WdButton]);
// CONCATENATED MODULE: ./package/wild-dog/defaults.js


// import Plugins from "./plugin";

// export default makeInstaller([...Components, ...Plugins]);
/* harmony default export */ var defaults = (makeInstaller([...wild_dog_component]));
// CONCATENATED MODULE: ./package/components/index.js

// CONCATENATED MODULE: ./package/wild-dog/index.js


// export * from "../constants";
// export * from "../directives";
// export * from "../hooks";
// export * from "../tokens";

const wild_dog_install = defaults.install;
const wild_dog_version = defaults.version;
/* harmony default export */ var wild_dog = (defaults);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (wild_dog);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=WildDog.umd.js.map