<template>
  <div v-if="production" 
       :class="production[0].productionBorderName" 
       :style="production[0].productionBorderStyle[0].style">
    <div v-for="product in production" 
         :key="product.productionBorderId" 
         :class="product.productionBorderName"
         :style="product.productionBorderStyle[1].style">
      <img :src="product.productionUrl" 
           :class="product.productionBorderStyle[2].styleName"
           :style="product.productionBorderStyle[2].style">
      <ElementDeepElementDeephone :title="product.productionBorderTitle" :titlestyle="product.productionBorderStyle[3]" />
      <ElementDeepElementDeephthree :subtitle="product.productionBorderContent" :subtitlestyle="product.productionBorderStyle[4]"/>
      <ElementDeepElementProductionButton v-if="product" :button="product" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    production: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style>
  /* .productionborder{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 60%;
    margin-top: 80px;
  }
  .production{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 48%;
    height: 80%;
    overflow: hidden;
  }
  .productionimages{
    position: absolute;
    top: 50%;
    z-index: 0;
    transform: translateY(-50%);
    width: 100%;
  } */
</style>