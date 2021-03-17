<template>
  <div class="vui-input">
    <label :for="name">{{ label }}</label>
    <div :class="['inputWrapper', { 'inputWrapper--outline': outline }]">
      <input
        type="text"
        :name="name"
        :placeholder="placeholder"
        @input="$emit('handleInput', $event.target.value)"
        :autocomplete="autocomplete"
      />
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VuiInput',
  props: {
    placeholder: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    autocomplete: {
      required: false,
      type: String,
    },
    outline: {
      required: false,
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap");

  .vui-input {
    color: gray;
    font-size: 1.2em;
    font-weight: 400;
    font-family: "Fira Sans", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    label {
      font-size: .8em;
    }
  }

  .inputWrapper {
    margin-top: 10px;
    position: relative;

    input {
      font-family: "Fira Sans", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
      font-size: .8em;
      padding: 10px 12px;
      border: none;
      border-radius: 4px;
      background: #ececec;
      outline: none;
      caret-color: #2196f3;
    }

    .line {
      border-radius: 0 0 3px 3px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: #2196f3;
      height: 2px;
      opacity: 0;
      transform: scaleX(0.4);
      transition: transform 0.2s ease;
    }

    input:focus ~ .line {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  .inputWrapper--outline {
    input {
      box-shadow: none;
      transition: box-shadow 0.2s ease;
    }

    input:focus {
      box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.5);
    }

    .line {
      display: none;
    }
  }
</style>
