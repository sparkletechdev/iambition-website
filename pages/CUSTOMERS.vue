<template>
  <main class="customers-part-border">
    <CustomerPart />
    <CustomerIntroducePart />
    <SliderOne />
    <UpdatePart />
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
</style>
