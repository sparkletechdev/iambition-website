<template>
  <div v-if="production.productionStyle" class="solution-main-container">
    <!-- <ElementHone
      v-if="production.productionStyle[1]"
      :hone="production.productionStyle[1]"
      :honetitle="production.production[0]"
    /> -->
    <div class="solution-title">
      {{ $t('index.solution.title') }}
    </div>
    <div class="solution-desc">
      {{ $t('index.solution.description') }}
    </div>
    <ElementProductionBorder
      :production="$t('index.solution.solutions')"
    />
  </div>
</template>

<script>
import production from '@/assets/data/production.json'
export default {
  data() {
    return {
      production,
    }
  },
}
</script>

<style scoped>
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

.solution-main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: end;
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 780px;
  background-color: rgba(255, 255, 255, 1);
}

.solution-title {
  margin-top: 80px;
  font-size: 2.5em;
  font-weight: 600;
}

.solution-desc {
  margin-top: 10px;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 1700px) {
  .solution-main-container{
    height: auto !important;
  }
  .solution-banners-container {
    width: 80% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 800px !important;
    margin-top: 3% !important;
  }
  .solution-title {
    font-size: 1rem !important;
  }
}
</style>