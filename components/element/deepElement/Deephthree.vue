<template>
    <h3 :class="subtitlestyle.styleName" :style="subtitlestyle.style">
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
    subtitlestyle : {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
  /* .deephthreetitle{
    margin-top: 10px;
    font-size: 13px;
    color: white;
    z-index: 1;
  } */
</style>