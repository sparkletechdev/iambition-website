<template>
  <div v-if="production" class="solution-banners-container">
    <div
      v-for="(product, index) in production"
      :key="index"
      class="solution-banner"
    >
      <img
        :src="require(`@/assets/images/${product.image}`)"
        class="banner-background"
      />
      <div class="text-container">
        <div class="banner-title">{{ product.title }}</div>
        <div class="banner-desc">{{ product.description }}</div>

        <SolutionButton :button="product" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    production: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.solution-banners-container {
  display: flex;
  justify-content: space-around;
  row-gap: 0.5rem;
  align-items: center;
  height: 60%;
  margin-top: 80px;
}

.solution-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 48%;
  height: 80%;
  overflow: hidden;
}

.banner-background {
  position: absolute;
  height: 100%;
  z-index: 0;
  width: 100%;
  object-fit: cover;
}

.banner-title {
  z-index: 1;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.banner-desc {
  margin-top: 10px;
  font-size: 1rem;
  color: white;
  z-index: 1;
  text-align: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  background: rgba(51, 51, 51, 0.45);
}

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
@media screen and (max-width: 1200px) {
  .solution-banners-container {
    width: 80% !important;
    margin-bottom: 5%;
  }
  .solution-banners-container .banner-title {
    width: 80% !important;
    text-align: center;
  }

  .solution-banner {
    width: 100%;
  }
}
@media screen and (max-width: 992px) {
  .solution-banners-container {
    width: 500px !important;
    height: 700px !important;
  }
  .nash {
    margin-bottom: 5% !important;
  }
  .predict {
    margin-bottom: 10% !important;
  }
}
@media screen and (max-width: 576px) {
  .solution-banners-container {
    width: 350px !important;
    height: 600px !important;
  }
  .nash {
    margin-bottom: 10% !important;
  }
  .predict {
    margin-bottom: 15% !important;
  }
  .text-container {
    justify-content: flex-end;
    height: 100%;
  }
}
</style>