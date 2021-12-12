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

<style scoped>
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
  @media screen and (max-width: 1700px) {
    .ProductionBorder{
      width: 80% !important;
      margin-bottom: 5%;
    }
    .ProductionBorder .deephthreetitle{
      width: 80% !important;
      text-align: center;
    }
  }
  @media screen and (max-width: 992px) {
    .ProductionBorder{
      width: 500px !important;
      height: 700px !important;
    }
    .nash{
      margin-bottom: 5% !important;
    }
    .predict{
      margin-bottom: 10% !important;
    }
  }
  @media screen and (max-width: 576px) {
    .ProductionBorder{
      width: 350px !important;
      height: 600px !important;
    }
    .nash{
      margin-bottom: 10% !important;
    }
    .predict{
      margin-bottom: 15% !important;
    }
  }
</style>