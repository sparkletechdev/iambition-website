<template>
  <div class="media-container">
    <LandingComponent
      :title="$t('media.landingTitle')"
      :contents="$t('media.landingContent')"
      image="media.jpg"
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
  column-gap: 2rem;
  padding: 4rem 25%;
}

.media-grid:lang(zh) {
  row-gap: 6rem;
}

.media-grid:lang(en) {
  row-gap: 10rem;
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
    display: flex;
    padding: 4rem 8%;
    row-gap: 2rem !important;
    flex-direction: column;
  }
}
</style>