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
      :align-left="index % 2 === 0"
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

::v-deep .landing-container {
  background-position: 50%;
}
</style>