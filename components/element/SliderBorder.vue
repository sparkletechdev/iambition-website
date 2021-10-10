<template>
    <div class="sliderborderhidden">
      <ElementSliderCard/>
    </div>
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
  .sliderborderhidden{
    /* border: 1px solid blue; */
    overflow: hidden;
    margin-top: 20px;
    width: 1116px;
    height: 364px;
    height: 420px;
    position: relative;
  }
</style>