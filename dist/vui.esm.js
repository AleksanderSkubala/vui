import { defineComponent, openBlock, createBlock, createVNode, toDisplayString, renderSlot } from 'vue';

var script$2 = defineComponent({
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
});

const _hoisted_1$2 = {
  class: "vui-input"
};

const _hoisted_2 = /*#__PURE__*/createVNode("div", {
  class: "line"
}, null, -1);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$2, [createVNode("label", {
    for: _ctx.name
  }, toDisplayString(_ctx.label), 9, ["for"]), createVNode("div", {
    class: ['inputWrapper', {
      'inputWrapper--outline': _ctx.outline
    }]
  }, [createVNode("input", {
    type: "text",
    name: _ctx.name,
    placeholder: _ctx.placeholder,
    onInput: _cache[1] || (_cache[1] = $event => _ctx.$emit('input', $event.target.value)),
    autocomplete: _ctx.autocomplete
  }, null, 40, ["name", "placeholder", "autocomplete"]), _hoisted_2], 2)]);
}

function styleInject(css, ref) {
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
}

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap\");\n.vui-input {\n  color: gray;\n  font-size: 18px;\n  font-weight: 400;\n  font-family: \"Fira Sans\", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n}\n.inputWrapper {\n  margin-top: 10px;\n  position: relative;\n}\n.inputWrapper input {\n  padding: 10px 12px;\n  border: none;\n  border-radius: 4px;\n  background: #ececec;\n  outline: none;\n  caret-color: #2196f3;\n}\n.inputWrapper .line {\n  border-radius: 0 0 3px 3px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2196f3;\n  height: 2px;\n  opacity: 0;\n  transform: scaleX(0.4);\n  transition: transform 0.2s ease;\n}\n.inputWrapper input:focus ~ .line {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.inputWrapper--outline input {\n  box-shadow: none;\n  transition: box-shadow 0.2s ease;\n}\n.inputWrapper--outline input:focus {\n  box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.5);\n}\n.inputWrapper--outline .line {\n  display: none;\n}";
styleInject(css_248z$1);

script$2.render = render$2;

var script$1 = {
  name: "VuiFormRow"
};

const _hoisted_1$1 = {
  class: "vui-form__row"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")]);
}

var css_248z = ".form__row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n.form__row * {\n  margin-right: 15px;\n}";
styleInject(css_248z);

script$1.render = render$1;

var script = {
  name: "VuiForm"
};

const _hoisted_1 = {
  class: "vui-form"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VuiInput: script$2,
  VuiFormRow: script$1,
  VuiForm: script
});

// Import vue components

const install = function installVui(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as VuiForm, script$1 as VuiFormRow, script$2 as VuiInput };
