<template>
  <main class="awards-container">
    <LandingComponent
      :title="$t('awards.landingTitle')"
      :contents="$t('awards.landingContent')"
    >
      <hooper :settings="hooperSettings">
        <slide v-for="(item, i) in $t('awards.carousel')" :key="i" :index="i">
          <img
            :src="require(`@/assets/images/${item.image}`)"
            :alt="item.alt"
          />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </LandingComponent>

    <SlideInContent :content="$t('awards.content')" />
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
        centerMode: true,
        wheelControl: false,
        autoPlay: true,
      },
    }
  },
}
</script>


<style scoped>
.hooper {
  width: 50%;
  height: auto;
}

.awards-container {
  overflow: hidden;
  padding-bottom: 8%;
}

::v-deep .landing-container {
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/awards.jpg');
}

::v-deep .g-item-container:nth-child(even) > .g-item-image {
  order: 0;
}

@media screen and (max-width: 1200px) {
  ::v-deep .g-item-content-container {
    align-items: center;
  }

  ::v-deep .g-img {
    margin-left: auto;
    margin-right: auto;
  }

  .hooper {
    width: 70%;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .hooper {
    width: 84%;
    height: auto;
  }
}
</style>