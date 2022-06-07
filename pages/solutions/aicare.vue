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
    <div class="video-container">
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
.video-container {
  background-color: #273244;
  padding: 2rem 15% 4%;
}
.videos {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 1.5rem;
}

.client-video {
  margin-bottom: 1.5rem;
}

::v-deep .ilc-container:nth-child(odd) {
  background-color: #273244;
}

::v-deep .ilc-container:nth-child(odd) > .ilc-content > .ilc-text-container {
  color: white;
}

::v-deep .landing-container {
  background-position: 50%;
}

@media screen and (max-width: 2048px) {
  .videos {
    margin: 1rem 15% 4%;
    flex-direction: column;
    row-gap: 1rem;
  }
  .video-container {
    padding: 1rem 0 4%;
  }
}

@media screen and (max-width: 1200px) {
  .videos {
    margin: 0 8%;
    row-gap: 1rem;
  }
  .video-container {
    padding: 0 0 4%;
  }
}

@media screen and (max-width: 576px) {
  .videos {
    margin: 0 5%;
    row-gap: 0.5rem;
  }
  .video-container {
    padding: 0 0 4%;
  }
}
</style>