<template>
  <main class="customers-part-border">
    <!-- <CustomerPart /> -->
    <LandingComponent />
    <CustomerIntroducePart />
    <SliderOne />
  </main>
</template>

<script>
export default {
  mounted() {
    this.sliderpartbackgroundchange()
  },
  methods: {
    sliderpartbackgroundchange() {
      if (this.$route.path === '/customers') {
        const sliderbackground = document.getElementById('slideronepart')
        sliderbackground.style.background = '#e2e2e2'
      }
    },
  },
}
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
