<template>
  <main class="awards-container">
    <LandingComponent
      :title="$t('awards.landingTitle')"
      :contents="$t('awards.landingContent')"
      image="awards.jpg"
    >
    </LandingComponent>

    <SlideInContent
      v-for="(content, index) in $t('awards.content')"
      :key="index"
      :content="content"
    >
      <hooper :settings="hooperSettings">
        <slide v-for="(item, i) in content.img" :key="i" :index="i">
          <img
            :src="require(`@/assets/images/${item.image}`)"
            :alt="item.alt"
            class="landing-img"
          />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination> </hooper
    ></SlideInContent>
    <!-- <SolutionItemPart /> -->
  </main>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from 'hooper'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  data() {
    return {
      hooperSettings: {
        wheelControl: false,
        autoPlay: true,
      },
    }
  },
}
</script>


<style scoped>
.hooper {
  width: 720px;
  height: 480px;
}

.landing-img {
  width: 100%;
  height: 100%;
}

.awards-container {
  overflow: hidden;
  padding-bottom: 8%;
}

.g-img {
  min-width: 100%;
  min-height: 480px;
  object-fit: cover;
}

::v-deep .g-item-container:nth-child(even) > .g-item-left {
  order: 1;
}

@media screen and (max-width: 1200px) {
  ::v-deep .g-item-content-container {
    align-items: center;
  }

  .hooper {
    width: 70%;
    height: auto;
  }

  .g-img {
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 768px) {
  .hooper {
    width: 84%;
    height: auto;
  }
}
</style>