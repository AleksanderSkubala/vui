<template>
  <button
    :class="[
      'vui-button',
      { 'vui-button--ghost': ghost },
      { 'vui-button--large': large },
    ]"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "VuiButton",
  props: {
    ghost: {
      required: false,
      type: Boolean,
    },
    large: {
      required: false,
      type: Boolean,
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap");

.vui-button {
  font-family: "Fira Sans", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
  background: #2196f3;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #1085e2;
  }
}

.vui-button--large {
  font-size: 1.2em;
  padding: 11px 21px;
}

.vui-button--ghost {
  color: #2196f3;
  background: white;
  border: 1px solid #2196f3;

  &:hover {
    background: #eeeeeeee;
  }
}
</style>