<script>
import { defineComponent } from 'vue';
import vuiFormRow from '../src/lib-components/vui-form-row.vue';
import VuiInput from '../src/lib-components/vui-input.vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VuiSample } from '@/entry.esm';
export default defineComponent({
  components: { vuiFormRow, VuiInput },
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
          @handleInput="handleInput"
        />
        <vui-input
          name="lastName"
          label="Last Name"
          placeholder="e.g. Skubala"
          autocomplete="lname"
          outline
          @handleInput="handleInput"
        />
      </vui-form-row>
      <vui-form-row>
        <vui-checkbox name="gdpr" label="I agree with terms of GDPR." @handleCheck="handleCheck"/>
      </vui-form-row>
      <vui-form-row>
        <vui-button @click="greet">Send form!</vui-button>
        <vui-button @click="greet" ghost>Send form!</vui-button>
      </vui-form-row>
      <vui-form-row>
        <vui-group name="Group">
          <vui-form-row>
            <vui-input
              name="testText"
              label="testText"
            />
            <vui-button @click="greet">Do it!</vui-button>
          </vui-form-row>
        </vui-group>
        <vui-group name="Group">
          <vui-form-row>
            <vui-input
              name="testText"
              label="testText"
            />
            <vui-button @click="greet">Do it!</vui-button>
          </vui-form-row>
        </vui-group>
      </vui-form-row>
    </vui-form-wrapper>
  </div>
</template>
