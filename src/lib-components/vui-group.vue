<template>
  <div class="vui-group">
    <div class="vui-group__header" @click="foldGroup">
      <h3>{{ name }}</h3>
      <svg :class="{'svg-up': !folded}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
    <div :class="[
      'vui-group__content',
      {'vui-group__content--folded': folded}
    ]">
      <slot/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VuiGroup',
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      folded: true,
    };
  },
  methods: {
    foldGroup() {
      this.folded = !this.folded;
      console.log(this.folded);
    },
  },
});
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap");

  .vui-group {
    font-family: "Fira Sans", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    padding: 20px;
    background: rgba(253, 253, 253);
    border: 1px solid rgb(230, 235, 244);
    border-radius: 7px;

    & .vui-form__row {
      margin: 0;
    }
  }

  .vui-group__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    & svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transform: rotate(0);
      transition: transform .3s ease;

      path {
        stroke-width: 3px;
        stroke: gray;
      }

      &.svg-up {
        transform: rotate(180deg);
      }
    }

    & h3 {
      margin: 0;
    }

    &:hover {
      color: #2196f3;

      & svg path {
        stroke: #2196f3;
      }
    }
  }

  .vui-group__content {
    transition: opacity .3s ease;
    margin-top: 20px;
  }

  .vui-group__content--folded {
    visibility: hidden;
    opacity: 0;
    height: 0;
    margin-top: 0;
  }
</style>