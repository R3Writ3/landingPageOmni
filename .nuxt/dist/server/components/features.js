exports.ids = [1];
exports.modules = {

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("de962d72", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_7cb9e536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_7cb9e536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_7cb9e536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_7cb9e536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_7cb9e536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h2[data-v-7cb9e536]{font-size:3.89em;line-height:120%}h2[data-v-7cb9e536],p[data-v-7cb9e536]{color:#1052a8}p[data-v-7cb9e536]{font-size:1.33em;line-height:150%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Features.vue?vue&type=template&id=7cb9e536&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"px-15",attrs:{"fluid":""}},[_c('v-row',{staticClass:"text-center text-md-left",attrs:{"justify":"justify-sm-space-between"}},[_c('v-col',{staticClass:"col-lg-6 order-last order-sm-first",attrs:{"md":"6"}},[_c('v-img',{staticStyle:{"max-width":"500px","max-height":"500px"},attrs:{"clas":"mb-5","src":"bg-vector.png"}})],1),_vm._v(" "),_c('v-col',{staticClass:"col-lg-6 order-first order-sm-last",attrs:{"md":"6"}},[_c('h2',{staticClass:"my-5",staticStyle:{"max-width":"400px"}},[_vm._v("Integrate to Your Favourite Social Media")]),_vm._v(" "),_c('p',{staticClass:"my-6",staticStyle:{"max-width":"400px"}},[_vm._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                Donec orci odio, gravida sit amet congue nec, pha \n            ")])])],1),_vm._v(" "),_c('v-row',{staticClass:"text-center text-md-left mt-15",attrs:{"justify":"justify-sm-space-between"}},[_c('v-col',{attrs:{"md":"6"}},[_c('h2',{staticClass:"my-5",staticStyle:{"max-width":"400px"}},[_vm._v("Integrate to Your Favourite Social Media")]),_vm._v(" "),_c('p',{staticClass:"my-6",staticStyle:{"max-width":"400px"}},[_vm._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                Donec orci odio, gravida sit amet congue nec, pha \n            ")])]),_vm._v(" "),_c('v-col',{attrs:{"md":"6"}},[_c('v-img',{staticStyle:{"max-width":"500px","max-height":"500px"},attrs:{"clas":"mb-5","src":"bg-vector.png"}})],1)],1),_vm._v(" "),_c('v-row',{staticClass:"text-center text-md-left mt-15",attrs:{"justify":"justify-sm-space-between"}},[_c('v-col',{staticClass:"col-lg-6 order-last order-md-first",attrs:{"md":"6"}},[_c('v-img',{staticStyle:{"max-width":"500px","max-height":"500px"},attrs:{"clas":"mb-5","src":"bg-vector.png"}})],1),_vm._v(" "),_c('v-col',{staticClass:"col-lg-6 order-first order-md-last",attrs:{"md":"6"}},[_c('h2',{staticClass:"my-5",staticStyle:{"max-width":"400px"}},[_vm._v("Integrate to Your Favourite Social Media")]),_vm._v(" "),_c('p',{staticClass:"my-6",staticStyle:{"max-width":"400px"}},[_vm._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                Donec orci odio, gravida sit amet congue nec, pha \n            ")])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Features.vue?vue&type=template&id=7cb9e536&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(7);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(183);

// CONCATENATED MODULE: ./components/Features.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7cb9e536",
  "100b462e"
  
)

/* harmony default export */ var Features = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=features.js.map