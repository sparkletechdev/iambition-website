<template>
  <div class="ilc-container">
    <FsLightbox
      :toggler="toggler"
      :slide="lbIndex"
      :sources="lightboxImages()"
    />
    <div class="ilc-content">
      <h1 class="ilc-title">{{ section.title }}</h1>
      <div class="ilc-text-container">
        <div class="ilc-text">
          <p
            v-for="(item, index) in section.content"
            :key="index"
            class="ilc-paragraph"
          >
            {{ item }}
          </p>
        </div>
        <div v-if="section.images.length > 1" class="ilc-image-grid">
          <div
            v-for="(image, i) in section.images"
            :key="i"
            class="image-caption"
          >
            <div class="grid-cell">
              <img
                :src="staticPath(image.path)"
                :alt="image.alt"
                class="ilc-image"
                @click="showLightbox(i)"
              />
              <!-- <p v-if="image.caption">
                {{ image.caption }}
              </p> -->
            </div>
          </div>
        </div>
        <img
          v-else
          :src="staticPath(section.images[0].path)"
          :alt="section.images[0].alt"
          class="ilc-image-single"
          @click="showLightbox(0)"
        />
        <!-- <div class="ilc-image-container">
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
              <img
                :src="staticPath(media)"
                :alt="media.alt"
                class="ilc-image"
                @click="toggler = !toggler"
              />
            </stack-item>
          </stack>
        </div> -->
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
  },
  data() {
    return {
      toggler: false,
      lbIndex: 1,
    }
  },
  methods: {
    lightboxImages() {
      const newArr = this.section.images.map((image) =>
        this.staticPath(image.path)
      )
      return newArr
    },
    showLightbox(index) {
      this.lbIndex = index + 1
      this.toggler = !this.toggler
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
  flex-direction: column;
  gap: 1rem;
}
.ilc-text {
  width: 100%;
}
.ilc-paragraph {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.ilc-image {
  /* border: 1px solid black; */
  width: 100%;
  height: 95%;
  cursor: zoom-in;
}
.ilc-image-single {
  height: 480px;
  aspect-ratio: 16/9;
  align-self: center;
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
.ilc-image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 480px;
  row-gap: 2.5rem;
  column-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.image-caption {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
}

.grid-cell {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

@media screen and (max-width: 1440px) {
  .ilc-image-grid {
    grid-auto-rows: 320px;
  }
}

@media screen and (max-width: 1200px) {
  .ilc-container {
    padding: 2.5rem 8% 2.5rem;
  }
  .ilc-title {
    font-size: 2.5rem;
  }
  .ilc-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ilc-text {
    width: 100%;
  }
  .ilc-image {
    width: 100%;
  }
  .ilc-image-container {
    margin-bottom: 0;
  }
  .ilc-image-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 320px;
    row-gap: 2rem;
  }
  .ilc-image-single {
    width: 90%;
  }
}
@media screen and (max-width: 992px) {
  .ilc-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .ilc-paragraph {
    font-size: 1rem;
  }
  .ilc-image-single {
    height: 280px;
  }
}

@media screen and (max-width: 425px) {
  .ilc-image-grid {
    grid-auto-rows: 180px;
    gap: 2rem;
  }
  .ilc-image-single {
    width: 100%;
    height: 120px;
    padding: 0 0.8rem;
  }
}
</style>