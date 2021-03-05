<template>
  <div class="vui-form">
    <slot/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "VuiFormWrapper",
});
</script>
