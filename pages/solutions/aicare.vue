<template>
  <main class="dedicatedteamsborder">
    <LandingComponent :title="$t('solutions.aiCare.landingTitle')" :contents="$t('solutions.aiCare.landingContent')"/>
    <DedicatedTeamsSolutionPart />
    <DedicatedTeamsStructurePart />
    <DedicatedTeamsBenefitsPart />
    <DedicatedTeamsComparePart />
    <DedicatedTeamsComparePartTwo />
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.dedicatedteamsborder {
  overflow: hidden;
}

::v-deep .landing-container {
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/solutions/ai-care.jpg');
  background-position: 50%;
}
</style>