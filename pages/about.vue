<template>
  <main class="about-us-part-border">
    <LandingComponent
      :title="$t('company.aboutUs.landingTitle')"
      :contents="$t('company.aboutUs.landingContent')"
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
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/about-us.jpg');
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