<template>
  <div class="media-container">
    <LandingComponent
      :title="$t('media.landingTitle')"
      :contents="$t('media.landingContent')"
      image="awards.jpg"
    >
    </LandingComponent>
    <div class="media-grid">
      <MediaComponent
        v-for="(content, i) in $t('media.content')"
        :key="i"
        :media="content"
      />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>

.media-container {
  overflow: hidden;
  padding-bottom: 4rem;
}
.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  row-gap: 6rem;
  column-gap: 2rem;
  padding: 4rem 25%;
}

@media screen and (max-width: 1680px) {
  .media-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    padding: 4rem 15%;
  }
}

@media screen and (max-width: 1200px) {
  .media-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 300px;
    padding: 4rem 15%;
  }
}

@media screen and (max-width: 992px) {
  .media-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 300px;
    padding: 4rem 12%;
  }
}

@media screen and (max-width: 576px) {
  .media-grid {
    padding: 4rem 8%;
    grid-auto-rows: 200px;
  }
}
</style>