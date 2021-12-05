<template>
    <h3 :class="hthree.styleName" :style="hthree.style">
      {{hthreetitle.productionContent}}
    </h3>
</template>

<script>
export default {
  props: {
    hthree: {
      type: Object,
      default: () => {},
    },
    hthreetitle: {
      type: Object,
      default: () => {},
    } 
  },
}
</script>

<style>
  /* .hthreetitle{
    margin-top: 10px;
    font-size: .5em;
    color: rgba(0, 0, 0, .8);
  } */
</style>