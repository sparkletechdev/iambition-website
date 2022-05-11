<template>
  <main class="customers-part-border">
    <!-- <CustomerPart /> -->
    <LandingComponent />
    <CustomerIntroducePart />
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.customers-part-border {
  width: 100%;
  position: relative;
}

::v-deep .landing-container {
  background-image: linear-gradient(
      rgba(51, 102, 153, 0.75),
      rgba(39, 50, 68, 1)
    ),
    url('~@/assets/images/client.jpg');
  background-position: 50%;
}
</style>
