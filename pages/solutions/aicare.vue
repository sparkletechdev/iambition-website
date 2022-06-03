<template>
  <main class="ai-care-container">
    <LandingComponent
      :title="$t('solutions.aiCare.landingTitle')"
      :contents="$t('solutions.aiCare.landingContent')"
      image="solutions/ai-care.jpg"
    />
    <ImageTextColumn
      v-for="(item, index) in $t('solutions.aiCare.sections')"
      :key="index"
      :section="item"
      :align-left="index % 2 === 0"
    />
    <!-- <DedicatedTeamsSolutionPart />
    <DedicatedTeamsStructurePart />
    <DedicatedTeamsBenefitsPart />
    <DedicatedTeamsComparePart />
    <DedicatedTeamsComparePartTwo /> -->
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.ai-care-container {
  overflow: hidden;
}

::v-deep .landing-container {
  background-position: 50%;
}
</style>