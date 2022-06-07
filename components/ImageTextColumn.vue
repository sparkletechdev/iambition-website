<template>
  <div class="ilc-container">
    <FsLightbox :toggler="toggler" :sources="lightboxImages()" />
    <div class="ilc-content">
      <h1 class="ilc-title">{{ section.title }}</h1>
      <div class="ilc-text-container">
        <div class="ilc-text" :style="order">
          <p
            v-for="(item, index) in section.content"
            :key="index"
            class="ilc-paragraph"
          >
            {{ item }}
          </p>
        </div>
        <div class="ilc-image-container">
          <img
            v-if="section.images.length === 1"
            :src="staticPath(section.images[0])"
            class="ilc-image"
            @click="toggler = !toggler"
          />
          <stack
            v-else
            :column-min-width="300"
            :gutter-width="8"
            :gutter-height="8"
            :monitor-images-loaded="true"
          >
            <stack-item v-for="(media, i) in section.images" :key="i">
              <!-- <a :href="$store.state.baseUrl + image.path" target="_blank"> -->
              <img
                :src="staticPath(media)"
                :alt="media.alt"
                class="ilc-image"
                @click="toggler = !toggler"
              />
              <!-- </a> -->
            </stack-item>
          </stack>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FsLightbox from 'fslightbox-vue'
export default {
  components: { FsLightbox },
  props: {
    section: {
      default: () => {},
      type: Object,
    },
    alignLeft: {
      default: Number,
      type: Boolean,
    },
  },
  data() {
    return {
      toggler: false,
    }
  },
  computed: {
    order() {
      const newOrder = this.alignLeft ? 0 : 2
      return { order: `${newOrder}` }
    },
  },
  methods: {
    lightboxImages() {
      const newArr = this.section.images.map((image) => this.staticPath(image))
      return newArr
    },
  },
}
</script>

<style>
.ilc-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 15% 4rem;
}
.ilc-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ilc-title {
  text-align: center;
  color: #369;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
}
.ilc-text-container {
  display: flex;
  gap: 1rem;
}
.ilc-text {
  width: 50%;
}
.ilc-paragraph {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.7;
  margin-bottom: 20px;
}
.ilc-image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
}
.ilc-image {
  /* border: 1px solid black; */
  width: 100%;
  cursor: zoom-in;
}
.ilc-video {
  cursor: pointer;
}
.ilc-video:hover,
.ilc-image:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
}
.ilc-image:not(:hover),
.ilc-video:not(:hover) {
  box-shadow: none;
  opacity: 1;
  transition: all 0.2s ease-in-out;
}
@media screen and (max-width: 1200px) {
  .ilc-container {
    padding: 2.5rem 8% 2.5rem;
  }
  .ilc-title {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 992px) {
  .ilc-title {
    margin-bottom: 2rem;
  }
  .ilc-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ilc-text {
    width: 90%;
  }
  .ilc-image-container {
    margin-bottom: 45px;
    width: 90%;
  }
}
@media screen and (max-width: 768px) {
  .ilc-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .ilc-image {
    width: 90%;
  }
  .ilc-image-container {
    margin-bottom: 0;
  }
}
</style>