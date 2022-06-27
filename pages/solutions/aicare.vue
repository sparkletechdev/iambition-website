<template>
  <main class="ai-care-container">
    <LandingComponent
      :title="$t('solutions.aiCare.landingTitle')"
      :contents="$t('solutions.aiCare.landingContent')"
      image="solutions/ai-care.jpg"
    />
    <div
      v-for="(item, index) in $t('solutions.aiCare.sections')"
      :key="index"
      class="section-container"
    >
      <ImageTextColumn :section="item" :align-left="index % 2 === 0" />
      <div class="video-container">
        <div v-if="item.videos" class="videos">
          <!-- <video
            v-for="(video, i) in item.videos"
            :key="i"
            controls
            class="client-video"
          >
            <source :src="staticPath(video.path)" :type="video.type" />
          </video> -->
          <iframe
            v-for="(video, i) in item.videos"
            :key="i"
            width="1080"
            height="608"
            :src="video.path"
          >
          </iframe>
        </div>
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
  background-color: transparent;
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

.section-container {
  background-color: white;
}

.section-container:nth-child(odd) {
  background-color: #273244;
  color: white;
}

::v-deep .ilc-container {
  background-color: transparent;
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