<template>
    <h1 :class="titlestyle.styleName" :style="titlestyle.style">
      {{title}}
    </h1>
</template>

<script>
export default {
  props: {
    title : {
      type: String,
      default: () => '',
    },
    titlestyle : {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
  /* .deephonetitle{
    z-index: 1;
    font-size: 17px;
    font-weight: bold;
    color: white;
  } */
</style>