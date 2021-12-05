<template>
    <div class="slideroneborderhidden">
      <ElementSliderOneCard/>
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
  .slideroneborderhidden{
    /* border: 3px solid gold; */
    overflow: hidden;
    margin-top: 20px;
    width: 100%;
    height: 420px;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }
</style>