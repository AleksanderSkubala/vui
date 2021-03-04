<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VuiSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VuiSample,
  // }
});
</script>

<template>
  <div id="app">
    <vui-form>
      <vui-form-row>
        <vui-input
          name="firstName"
          label="First Name"
          placeholder="e.g. John"
          autocomplete="fname"
        />
        <vui-input
          name="firstName"
          label="First Name"
          placeholder="e.g. John"
          autocomplete="fname"
        />
      </vui-form-row>
    </vui-form>
  </div>
</template>
