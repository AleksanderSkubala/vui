'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$4 = vue.defineComponent({
  name: 'VuiInput',
  props: {
    placeholder: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    autocomplete: {
      required: false,
      type: String
    },
    outline: {
      required: false,
      type: Boolean
    }
  }
});var _hoisted_1$3 = {
  class: "vui-input"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createVNode("div", {
  class: "line"
}, null, -1);

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [vue.createVNode("label", {
    for: _ctx.name
  }, vue.toDisplayString(_ctx.label), 9, ["for"]), vue.createVNode("div", {
    class: ['inputWrapper', {
      'inputWrapper--outline': _ctx.outline
    }]
  }, [vue.createVNode("input", {
    type: "text",
    name: _ctx.name,
    placeholder: _ctx.placeholder,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('handler', $event.target.value);
    }),
    autocomplete: _ctx.autocomplete
  }, null, 40, ["name", "placeholder", "autocomplete"]), _hoisted_2$1], 2)]);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$3 = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap\");\n.vui-input {\n  color: gray;\n  font-size: 1.2em;\n  font-weight: 400;\n  font-family: \"Fira Sans\", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.vui-input label {\n  font-size: 0.8em;\n}\n.inputWrapper {\n  margin-top: 10px;\n  position: relative;\n}\n.inputWrapper input {\n  font-family: \"Fira Sans\", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n  font-size: 0.8em;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 4px;\n  background: #ececec;\n  outline: none;\n  caret-color: #2196f3;\n}\n.inputWrapper .line {\n  border-radius: 0 0 3px 3px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2196f3;\n  height: 2px;\n  opacity: 0;\n  transform: scaleX(0.4);\n  transition: transform 0.2s ease;\n}\n.inputWrapper input:focus ~ .line {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.inputWrapper--outline input {\n  box-shadow: none;\n  transition: box-shadow 0.2s ease;\n}\n.inputWrapper--outline input:focus {\n  box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.5);\n}\n.inputWrapper--outline .line {\n  display: none;\n}";
styleInject(css_248z$3);script$4.render = render$4;var script$3 = vue.defineComponent({
  name: "VuiButton",
  props: {
    ghost: {
      required: false,
      type: Boolean
    },
    large: {
      required: false,
      type: Boolean
    }
  }
});function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", {
    class: ['vui-button', {
      'vui-button--ghost': _ctx.ghost
    }, {
      'vui-button--large': _ctx.large
    }]
  }, [vue.renderSlot(_ctx.$slots, "default")], 2);
}var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap\");\n.vui-button {\n  font-family: \"Fira Sans\", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: white;\n  background: #2196f3;\n  position: relative;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.vui-button::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #2196f3;\n  display: block;\n  border-radius: 5px;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  transform: scaleX(1) scaleY(1);\n  opacity: 0.5;\n}\n.vui-button:hover {\n  background: #1085e2;\n}\n.vui-button:focus::before {\n  transform: scaleX(1.15) scaleY(1.45);\n  opacity: 0;\n  transition: transform 0.6s ease, opacity 0.6s ease;\n}\n.vui-button--large {\n  font-size: 1.2em;\n  padding: 11px 21px;\n}\n.vui-button--ghost {\n  color: #2196f3;\n  background: white;\n  border: 1px solid #2196f3;\n}\n.vui-button--ghost:hover {\n  background: #eeeeeeee;\n}";
styleInject(css_248z$2);script$3.render = render$3;var script$2 = vue.defineComponent({
  name: "VuiFormRow"
});var _hoisted_1$2 = {
  class: "vui-form__row"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [vue.renderSlot(_ctx.$slots, "default")]);
}var css_248z$1 = ".vui-form__row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n.vui-form__row * {\n  margin-right: 15px;\n}";
styleInject(css_248z$1);script$2.render = render$2;var script$1 = vue.defineComponent({
  name: "VuiFormWrapper"
});var _hoisted_1$1 = {
  class: "vui-form"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.renderSlot(_ctx.$slots, "default")]);
}script$1.render = render$1;var script = vue.defineComponent({
  name: "VuiCheckbox",
  props: {
    name: {
      required: true,
      type: String
    },
    label: {
      required: false,
      type: String
    }
  }
});var _hoisted_1 = {
  class: "vui-checkbox"
};

var _hoisted_2 = /*#__PURE__*/vue.createVNode("span", null, [/*#__PURE__*/vue.createVNode("svg", {
  width: "12px",
  height: "9px",
  viewbox: "0 0 12 9"
}, [/*#__PURE__*/vue.createVNode("polyline", {
  points: "1 5 4 8 11 1"
})])], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("input", {
    type: "checkbox",
    id: _ctx.name,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('handler', $event.target.checked);
    }),
    class: "vui-checkbox__input",
    style: {
      "display": "none"
    }
  }, null, 8, ["id"]), vue.createVNode("label", {
    class: "vui-checkbox__label",
    for: _ctx.name
  }, [_hoisted_2, vue.createVNode("span", null, vue.toDisplayString(_ctx.label), 1)], 8, ["for"])]);
}var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap\");\n@keyframes check {\n50% {\n    transform: scale(1.2);\n}\n}\n.vui-checkbox {\n  font-family: \"Fira Sans\", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n}\n.vui-checkbox__label {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n}\n.vui-checkbox__label span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vui-checkbox__label span:first-child {\n  position: relative;\n  vertical-align: center;\n  height: 24px;\n  width: 24px;\n  border-radius: 51%;\n  border: 1px solid #CAC9D4;\n}\n.vui-checkbox__label span:first-child svg {\n  position: absolute;\n  z-index: 1;\n  top: 8px;\n  left: 6px;\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  transition: stroke-dashoffset 0.3s ease;\n  transition-delay: 0.1s;\n}\n.vui-checkbox__label span:first-child::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: #506EEC;\n  border-radius: 51%;\n  transform: scale(0);\n  opacity: 1;\n}\n.vui-checkbox__label span:last-child {\n  margin-left: 4px;\n  font-size: 0.9em;\n}\n.vui-checkbox__label:hover span:first-child {\n  border-color: #506EEC;\n}\n.vui-checkbox__input:checked + .vui-checkbox__label span:first-child {\n  border-color: #506EEC;\n  background: #506EEC;\n  animation: check 0.6s ease;\n}\n.vui-checkbox__input:checked + .vui-checkbox__label span:first-child svg {\n  stroke-dashoffset: 0;\n}\n.vui-checkbox__input:checked + .vui-checkbox__label span:first-child::before {\n  transform: scale(2.2);\n  opacity: 0;\n  transition: transform 0.6s ease, opacity 0.6s ease;\n}\n.vui-checkbox__input:focus + .vui-checkbox__label span:first-child {\n  border-color: #506EEC;\n}";
styleInject(css_248z);script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,VuiInput: script$4,VuiButton: script$3,VuiFormRow: script$2,VuiFormWrapper: script$1,VuiCheckbox: script});var install = function installVui(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VuiInput: script$4,VuiButton: script$3,VuiFormRow: script$2,VuiFormWrapper: script$1,VuiCheckbox: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;