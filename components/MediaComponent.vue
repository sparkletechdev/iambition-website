<template>
  <div class="media-view">
    <img
      class="media-img"
      :src="require(`@/assets/images/${media.image}`)"
      :alt="media.alt"
    />
    <a class="media-link" :href="media.url" target="_blank">{{
      media.title
    }}</a>
  </div>
</template>
<script>
export default {
  props: {
    media: {
      default: () => {},
      type: Object,
    },
  },
}
</script>
<style scoped>
.media-view {
  width: 100%;
}
.media-img {
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
}

.media-link {
  color: #369;
  font-weight: 600;
  text-align: start;
}
</style>