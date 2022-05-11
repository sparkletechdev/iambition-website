<template>
  <div class="client-container">
    <div :id="client.id" class="client-name">{{ client.clientName }}</div>
    <div class="client-description">
      <p
        v-for="(desc, i) in client.description"
        :key="i"
      >
        {{ desc }}
      </p>
    </div>

    <stack
      :column-min-width="300"
      :gutter-width="8"
      :gutter-height="8"
      :monitor-images-loaded="true"
    >
      <stack-item v-for="(image, i) in client.images" :key="i">
        <a :href="image.path" target="_blank">
          <img :src="image.path" :alt="image.alt" />
        </a>
      </stack-item>
    </stack>
  </div>
</template>
<script>
export default {
  props: {
    client: {
      default: null,
      type: Object,
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
</style>
