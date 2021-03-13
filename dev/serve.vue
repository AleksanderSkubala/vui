<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VuiSample } from '@/entry.esm';
export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VuiSample,
  // }
  methods: {
    greet() {
      console.log('btn clicked!');
    },
    handleInput(value) {
      console.log(value);
    },
    handleCheck(value) {
      console.log(value);
    },
  },
});
</script>

<template>
  <div id="app">
    <vui-form-wrapper>
      <vui-form-row>
        <vui-input
          name="firstName"
          label="First Name"
          placeholder="e.g. John"
          autocomplete="fname"
        />
        <vui-input
          name="lastName"
          label="Last Name"
          placeholder="e.g. Skubala"
          autocomplete="lname"
          outline
          @handler="handleInput"
        />
      </vui-form-row>
      <vui-form-row>
        <vui-checkbox name="gdpr" label="I agree with terms of GDPR." @handler="handleCheck"/>
      </vui-form-row>
      <vui-form-row>
        <vui-button @click="greet">Send form!</vui-button>
        <vui-button @click="greet" ghost>Send form!</vui-button>
      </vui-form-row>
    </vui-form-wrapper>
  </div>
</template>
