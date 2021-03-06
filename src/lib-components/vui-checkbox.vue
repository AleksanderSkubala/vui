<template>
  <div class="vui-checkbox">
    <input
      type="checkbox"
      :id="name"
      @click="$emit('handler', $event.target.checked)"
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

@keyframes check {
  50% {
    transform: scale(1.2);
  }
}

.vui-checkbox {
  font-family: "Fira Sans", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
}

.vui-checkbox__label {
  cursor: pointer;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  span {
    display: inline-block;
    vertical-align: middle;

    &:first-child {
      position: relative;
      vertical-align: center;
      height: 24px;
      width: 24px;
      border-radius: 51%;
      border: 1px solid #CAC9D4;

      svg {
        position: absolute;
        z-index: 1;
        top: 8px;
        left: 6px;
        fill: none;
        stroke: white;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;

        transition: stroke-dashoffset .3s ease;
        transition-delay: .1s;
      }

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #506EEC;
        border-radius: 51%;
        transform: scale(0);
        opacity: 1;
      }
    }

    &:last-child {
      margin-left: 4px;
      font-size: .9em;
    }
  }

  &:hover {
    span:first-child {
      border-color: #506EEC;
    }
  }
}

.vui-checkbox__input:checked + .vui-checkbox__label {
  span {
    &:first-child {
      border-color: #506EEC;
      background: #506EEC;
      animation: check .6s ease;

      svg {
        stroke-dashoffset: 0;
      }

      &::before {
        transform: scale(2.2);
        opacity: 0;
        transition: transform .6s ease, opacity .6s ease;
      }
    }
  }
}

.vui-checkbox__input:focus + .vui-checkbox__label {
  span:first-child {
    border-color: #506EEC;
  }
}
</style>
