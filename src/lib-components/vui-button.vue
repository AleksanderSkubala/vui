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
  position: relative;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 10px 20px;
  cursor: pointer;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: #2196f3;
    display: block;
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    transform: scaleX(1) scaleY(1);
    opacity: .5;
  }

  &:hover {
    background: #1085e2;
  }

  &:focus::before {
    transform: scaleX(1.15) scaleY(1.45);
    opacity: 0;
    transition: transform .6s ease, opacity .6s ease;
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