<template>
    <h3 class="deephthreetitle">
      {{subtitle}}
    </h3>
</template>

<script>
export default {
  props: {
    subtitle : {
      type: String,
      default: () => {},
    },
  },
}
</script>

<style>
  .deephthreetitle{
    margin-top: 10px;
    font-size: 13px;
    color: white;
    z-index: 1;
  }
</style>