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
}var script = vue.defineComponent({
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
});var _hoisted_1 = {
  class: "vui-input"
};

var _hoisted_2 = /*#__PURE__*/vue.createVNode("div", {
  class: "line"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("label", {
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
      return _ctx.$emit('input', $event.target.value);
    }),
    autocomplete: _ctx.autocomplete
  }, null, 40, ["name", "placeholder", "autocomplete"]), _hoisted_2], 2)]);
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
}var css_248z = ".vui-input {\n  color: gray;\n}\n.inputWrapper {\n  margin-top: 10px;\n  position: relative;\n}\n.inputWrapper input {\n  padding: 10px 12px;\n  border: none;\n  border-radius: 4px;\n  background: #ececec;\n  outline: none;\n  caret-color: #2196f3;\n}\n.inputWrapper .line {\n  border-radius: 0 0 3px 3px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2196f3;\n  height: 2px;\n  opacity: 0;\n  transform: scaleX(0.4);\n  transition: transform 0.2s ease;\n}\n.inputWrapper input:focus ~ .line {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.inputWrapper--outline input {\n  box-shadow: none;\n  transition: box-shadow 0.2s ease;\n}\n.inputWrapper--outline input:focus {\n  box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.5);\n}\n.inputWrapper--outline .line {\n  display: none;\n}";
styleInject(css_248z);script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,VuiInput: script});var install = function installVui(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VuiInput: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;