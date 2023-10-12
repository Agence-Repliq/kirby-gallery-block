(function() {
  "use strict";
  const gallery_vue_vue_type_style_index_0_lang = "";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main = {
    computed: {
      layout() {
        return this.content.layout;
      },
      gallery() {
        const gallery2 = [];
        this.content.gallery.forEach((element, index) => {
          gallery2[index] = {
            "image": element.image[0],
            "alt": element.alt,
            "caption": element.caption,
            "class": "",
            "error": false
          };
        });
        return gallery2;
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-block-type-gallery" }, [_vm.content.gallery.length ? [_c("ul", { on: { "click": _vm.open } }, _vm._l(_vm.gallery, function(item, index) {
      return _c("li", { key: index, staticClass: "image-wrapper" }, [_c("img", { attrs: { "src": item.image.url, "alt": item.alt } })]);
    }), 0)] : [_c("ul", { on: { "click": _vm.open } }, _vm._l(5, function(index) {
      return _c("li", { key: index, staticClass: "k-block-type-gallery-placeholder" }, [_c("k-aspect-ratio", { attrs: { "ratio": _vm.ratio } })], 1);
    }), 0)], _vm.content.caption ? _c("figcaption", [_vm._v(" " + _vm._s(_vm.content.caption) + " ")]) : _vm._e()], 2);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/Users/baptistelhopitault/Documents/git/kirby-gallery-block/src/components/gallery.vue";
  const gallery = __component__.exports;
  panel.plugin("repliq/gallery-block", {
    blocks: {
      gallery
    }
  });
})();
