<template>
    <h1 :class="hone.styleName" :style="hone.style">
      {{honetitle.productionTitle}}
    </h1>
</template>

<script>
export default {
  props: {
    hone: {
      type: Object,
      default: () => {},
    },
    honetitle: {
      type: Object,
      default: () => {},
    } 
  },
}
</script>

<style>
  /* .honetitle{
    margin-top: 80px;
    font-size: 2.5em;
    font-weight: bold;
  } */
</style>