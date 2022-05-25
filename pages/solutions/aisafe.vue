<template>
  <main class="staffaugmentationborder">
    <LandingComponent :title="$t('solutions.aiSafe.landingTitle')" :contents="$t('solutions.aiSafe.landingContent')"/>
    <StaffAugmentationExtraTalentPart />
    <StaffAugmentationDifferencePart />
    <UpdatePart />
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.staffaugmentationborder {
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