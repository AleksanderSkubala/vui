<template>
  <div class="vui-form__row">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "VuiFormRow",
};
</script>

<style lang="scss">
.vui-form__row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  * {
    margin-right: 15px;
  }
}
</style>
