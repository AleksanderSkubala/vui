<template>
  <div class="vui-checkbox">
    <input
      type="checkbox"
      :id="name"
      class="vui-checkbox__input"
      style="display: none;"
    />
    <label class="vui-checkbox__label" :for="name">
      <span>
        <svg width="12px" height="9px" viewbox="0 0 12 9">
          <polyline points="1 5 4 8 11 1"></polyline>
        </svg>
      </span>
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "VuiCheckbox",
  props: {
    name: {
      required: true,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;700&display=swap");

.vui-checkbox {
  font-family: "Fira Sans", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
}

.vui-checkbox__label {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);

    &:first-child {
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      transform: scale(1);
      vertical-align: middle;
      border: 1px solid #CAC9D4;
      transition: all 0.2s ease;

      svg {
        position: absolute;
        z-index: 1;
        top: 8px;
        left: 6px;
        fill: none;
        stroke: white;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
      }

      &:before {
        content: "";
        width: 100%;
        height: 100%;
        background: #506EEC;
        display: block;
        transform: scale(0);
        opacity: 1;
        border-radius: 50%;
        transition-delay: 0.2s;
      }
    }

    &:last-child {
      margin-left: 4px;
      font-size: .9em;

      &:after {
        content: "";
        position: absolute;
        top: 8px;
        left: 0;
        height: 1px;
        width: 100%;
        background: #CAC9D4;
        transform-origin: 0 0;
        transform: scaleX(0);
      }
    }
  }

  &:hover span:first-child {
    border-color: #2196f3;
  }
}

.vui-checkbox__input:checked + .vui-checkbox__label {
  span {
    &:first-child {
      border-color: #2196f3;
      background: #2196f3;
      animation: check 0.6s ease;

      svg {
        stroke-dashoffset: 0;
      }

      &:before {
        transform: scale(2.2);
        opacity: 0;
        transition: all 0.6s ease;
      }
    }

    &:last-child {
      color: #CAC9D4;
      transition: all 0.3s ease;

      &:after {
        transform: scaleX(0);
        transition: all 0.3s ease;
      }
    }
  }
}

@keyframes check {
  50% {
    transform: scale(1.2);
  }
}
</style>
