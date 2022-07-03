<template>
  <main class="ai-safe-container">
    <LandingComponent
      :title="$t('solutions.aiSafe.landingTitle')"
      :contents="$t('solutions.aiSafe.landingContent')"
      image="solutions/ai-safe.jpg"
    />
    <ImageTextColumn
      v-for="(item, index) in $t('solutions.aiSafe.sections')"
      :key="index"
      :section="item"
    />
    <!-- <p
      v-for="(content, index) in $t('solutions.aiSafe.sections')"
      :key="index"
    >
      {{ content.title }}
    </p> -->
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.ai-safe-container {
  overflow: hidden;
}
::v-deep .ilc-container:nth-child(odd) {
  background-color: #273244;
}
::v-deep .ilc-text-container {
  justify-content: center;
}
::v-deep .ilc-container:nth-child(odd) > .ilc-content > .ilc-text-container {
  color: white;
}
::v-deep .landing-container {
  background-position: 50%;
}
::v-deep .ilc-image {
  width: auto;
}

::v-deep .ilc-image-grid {
  grid-auto-rows: auto;
}
</style>