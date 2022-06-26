<template>
  <main class="about-us-part-border">
    <LandingComponent
      :title="$t('company.aboutUs.landingTitle')"
      :contents="$t('company.aboutUs.landingContent')"
      image="about-us.jpg"
    />
    <Mission />
    <CoreValues
      :title="$t('company.aboutUs.coreValues.title')"
      :content="$t('company.aboutUs.coreValues.content')"
    />
    <!-- <CompanyGoingPart /> -->
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.about-us-part-border {
  overflow: hidden;
}

::v-deep .landing-container {
  justify-content: flex-start;
}

@media screen and (max-width: 768px) {
  ::v-deep .splash-content:lang(en) {
    font-size: 1rem;
  }

  ::v-deep .splash-title:lang(zh) {
    font-size: 4rem;
  }
}

@media screen and (max-width: 576px) {
  ::v-deep .splash-title:lang(zh) {
    font-size: 3.5rem;
  }
}
</style>