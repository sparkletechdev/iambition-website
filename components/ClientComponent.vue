<template>
  <div class="client-container">
    <FsLightbox
      :toggler="toggler"
      :slide="lbIndex"
      :sources="lightboxImages()"
    />
    <div :id="client.id" class="client-name">{{ client.clientName }}</div>
    <div class="client-description">
      <p v-for="(desc, i) in client.description" :key="i">
        {{ desc }}
      </p>
    </div>
    <!-- <video v-if="client.video" controls autoplay muted class="client-video">
      <source :src="staticPath(client.video)" type="video/mp4" />
    </video> -->
    <div v-if="client.video" class="client-video">
      <iframe
        class="yt-vid"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
        :src="client.video"
      ></iframe>
    </div>

    <div class="client-image-grid">
      <img
        v-for="(image, i) in client.images"
        :key="i"
        :src="staticPath(image.path)"
        :alt="image.alt"
        class="client-image"
        @click="showLightbox(i)"
      />
    </div>
  </div>
</template>
<script>
import FsLightbox from 'fslightbox-vue'
export default {
  components: { FsLightbox },
  props: {
    client: {
      default: null,
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
      const newArr = this.client.images.map((image) =>
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
<style scoped>
.client-container {
  padding: 4rem 25% 0 25%;
}

.client-name {
  font-size: 2rem;
  font-weight: 600;
  color: #369;
}

.client-description {
  margin: 1.5rem 0;
}
.client-video {
  margin-bottom: 1.5rem;
}
.client-image {
  cursor: zoom-in;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.client-image:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
}
.client-image:not(:hover) {
  box-shadow: none;
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.client-image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  gap: 1rem;
}

@media screen and (max-width: 1200px) {
  .client-image-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 300px;
  }
}

@media screen and (max-width: 992px) {
  .client-image-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 300px;
  }

  .client-container {
    padding: 4rem 8% 0 8%;
  }

  .client-name {
    text-align: center;
  }
}
</style>
