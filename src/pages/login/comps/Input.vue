<template>
  <div style="padding: 10px;background: pink;">
    <input :value='modelValue' @input='$emit(' updata:modelValue',$event.target.value)'
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
const value = defineProps(['modelValue']);
</script>

<style scoped lang="scss"></style>
