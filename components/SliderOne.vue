<template>
  <div id="slideronepart" class="slideronepart">
    <h1 class="slideronetitle">See What Our Clients Are Saying</h1>
    <h3 class="slideronesubtitle">Take an inside look at how Industry leaders leveraged Tuple's Data Science Platform to achieve real results.</h3>
    <ElementSliderOneBorder />
    <ElementSliderOneButton />
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .slideronepart{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    position: relative;
    overflow: hidden;
  }
  .slideronetitle{
    margin-top: 20px;
    font-size: 2.5em;
    font-weight: bold;
  }
  .slideronesubtitle{
    margin-top: 10px;
    font-size: 12px;
  }
</style>