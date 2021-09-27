<template>
  <div id="productionContainer" class="productionContainer">
    <ElementHone/>
    <ElementHthree/>
    <ElementProductionBorder/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .productionContainer{
    position: relative;
    width: 100%;
    height: 85vh;
    min-height: 780px;
    background-color: rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: end;
  }
</style>