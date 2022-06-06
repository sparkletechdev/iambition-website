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
    <div class="videos">
      <video
        v-for="(video, index) in $t('solutions.aiCare.videos')"
        :key="index"
        controls
        class="client-video"
      >
        <source :src="staticPath(video.path)" :type="video.type" />
      </video>
    </div>
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

.videos {
  margin: 2rem 15% 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 1.5rem;
}

.client-video {
  margin-bottom: 1.5rem;
}

::v-deep .landing-container {
  background-position: 50%;
}

@media screen and (max-width: 2048px) {
  .videos {
    margin: 2rem 15% 4%;
    flex-direction: column;
    row-gap: 1rem;
  }
}

@media screen and (max-width: 1200px) {
  .videos {
    margin: 1rem 8% 4%;
    row-gap: 1rem;
  }
}

@media screen and (max-width: 576px) {
  .videos {
    margin: 0 5% 4%;
    row-gap: 0.5rem;
  }
}
</style>