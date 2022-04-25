<template>
  <main class="awards-container">
    <LandingComponent
      :title="$t('awards.landingTitle')"
      :contents="$t('awards.landingContent')"
    />
    <SlideInContent :content="$t('awards.content')" />
    <!-- <SolutionItemPart /> -->
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.awards-container {
  overflow: hidden;
  padding-bottom: 8%;
}
::v-deep .landing-container {
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/awards.jpg');
}

::v-deep .g-item-container:nth-child(even) > .g-item-image {
  order: 0;
}

@media screen and (max-width: 1200px) {
  ::v-deep .g-item-content-container {
    align-items: center;
  }

  ::v-deep .g-img {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>