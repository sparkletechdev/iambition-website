<template>
  <div v-if="production.productionStyle" 
       :id="production.productionStyle[0].styleName" 
       :class="production.productionStyle[0].styleName" 
       :style="production.productionStyle[0].style">
    <ElementHone v-if="production.productionStyle[1]" :hone="production.productionStyle[1]" :honetitle="production.production[0]" />
    <ElementHthree v-if="production.productionStyle[2]" :hthree="production.productionStyle[2]" :hthreetitle="production.production[0]" />
    <ElementProductionBorder v-if="production.productionBorderAndButton" :production="production.productionBorderAndButton" />
  </div>
</template>

<script>
export default {
  props: {
    production: {
      type: Object,
      default: () => {},
    } 
  },
}
</script>

<style>
  /* .productionContainer{
    position: relative;
    width: 100%;
    height: 85vh;
    min-height: 780px;
    background-color: rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: end;
  } */
</style>