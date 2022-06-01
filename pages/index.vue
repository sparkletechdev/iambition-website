<template>
  <main class="index-container">
    <!-- <MajorPart /> -->
    <LandingComponent
      :title="$t('index.landingTitle')"
      :contents="$t('index.landingContent')"
      image="home2.jpg"
    />
    <HomeSolutions />
    <!-- <Slider /> -->
    <NewsComponent />
    <!-- <SliderOne /> -->
  </main>
</template>

<style scoped>
/* ::v-deep .landing-container {
  background-image: linear-gradient(#336699bf, #273244),
    url('~@/assets/images/home2.jpg');
} */
</style>