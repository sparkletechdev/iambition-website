<template>
  <main class="ai-safe-container">
    <LandingComponent
      :title="$t('solutions.aiSafe.landingTitle')"
      :contents="$t('solutions.aiSafe.landingContent')"
    />
    <ImageLeftCol
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
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/solutions/ai-safe.jpg');
  background-position: 50%;
}
</style>