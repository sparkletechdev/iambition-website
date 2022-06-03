<template>
  <main class="index-container">
    <!-- <MajorPart /> -->
    <hooper :settings="hooperSettings">
      <slide v-for="(item, i) in $t('index.landing')" :key="i" :index="i">
        <LandingComponent
          :title="item.landingTitle"
          :contents="item.landingContent"
          :image="item.image"
        />
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-progress slot="hooper-addons"></hooper-progress>
    </hooper>
    <HomeSolutions />
    <!-- <Slider /> -->
    <NewsComponent />
    <!-- <SliderOne /> -->
  </main>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Progress as HooperProgress,
} from 'hooper'
export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        wheelControl: false,
        autoPlay: true,
        playSpeed: 2000,
        infiniteScroll: true,
      },
    }
  },
}
</script>

<style scoped>
.hooper {
  width: 100%;
  height: auto;
}
</style>

<style>
.hooper-next {
  right: 2rem;
}
.hooper-prev {
  left: 2rem;
}

@media screen and (max-width: 1200px) {
  .hooper-next {
    right: 1rem;
  }
  .hooper-prev {
    left: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .hooper-next {
    display: none;
  }
  .hooper-prev {
    display: none;
  }
}
</style>