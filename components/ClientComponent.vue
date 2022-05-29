<template>
  <div class="client-container">
    <FsLightbox :toggler="toggler" :sources="lightboxImages()" />
    <div :id="client.id" class="client-name">{{ client.clientName }}</div>
    <div class="client-description">
      <p v-for="(desc, i) in client.description" :key="i">
        {{ desc }}
      </p>
    </div>
    <video v-if="client.video" controls autoplay muted class="client-video">
      <source :src="$store.state.baseUrl + client.video" type="video/mp4" />
    </video>
    <client-only>
      <stack
        :column-min-width="300"
        :gutter-width="8"
        :gutter-height="8"
        :monitor-images-loaded="true"
      >
        <stack-item v-for="(image, i) in client.images" :key="i">
          <!-- <a :href="$store.state.baseUrl + image.path" target="_blank"> -->
          <img
            :src="$store.state.baseUrl + image.path"
            :alt="image.alt"
            @click="toggler = !toggler"
          />
          <!-- </a> -->
        </stack-item>
      </stack>
    </client-only>
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
    }
  },
  methods: {
    lightboxImages() {
      const newArr = this.client.images.map(
        (image) => this.$store.state.baseUrl + image.path
      )
      return newArr
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
</style>
