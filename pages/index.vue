<template>
  <main class="index-container">
    <!-- <MajorPart /> -->
    <LandingComponent />
    <ProductionPart />
    <!-- <Slider /> -->
    <NewsComponent />
    <!-- <SliderOne /> -->
  </main>
</template>

<style scoped>
::v-deep .landing-container {
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/home.jpg');
}
</style>