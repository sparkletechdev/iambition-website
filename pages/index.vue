<template>
  <main class="index-container">
    <!-- <MajorPart /> -->
    <hooper :settings="hooperSettings">
      <slide v-for="(item, i) in $t('index.landing')" :key="i" :index="i">
        <LandingComponent
          :title="item.landingTitle"
          :contents="item.landingContent"
          :image="item.image"
        >
          <div v-if="item.video" class="video">
            <!-- <video v-if="item.video" controls width="1080px">
              <source :src="staticPath(item.video)" type="video/mp4" />
              <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
            </video> -->
            <iframe
              width="1080"
              height="608"
              src="https://www.youtube.com/embed/0IGsRsBHu2c?autoplay=1&mute=1"
            >
            </iframe>
          </div>
        </LandingComponent>
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
        playSpeed: 2500,
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

.video {
  margin: 0 25%;
}

@media screen and (max-width: 1200px) {
  .video {
    margin: 0 15%;
  }
}

@media screen and (max-width: 768px) {
  .video {
    margin: 0 8%;
  }
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