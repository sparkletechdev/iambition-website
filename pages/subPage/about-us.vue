<template>
  <main class="about-us-part-border">
    <CompanyPart />
    <CompanyExistPart />
    <CompanyDoingPart />
    <CompanyGoingPart />
    <UpdatePart />
  </main>
</template>

<script>
export default {
  mounted() {
    this.animationHeaderContainerBackground()
    this.animationBoxColor()
    this.animationTriangleColor()
  },
  methods: {
    sliderPartBackgroundChange() {
      if (this.$route.path === '/CUSTOMERS') {
        const sliderBackground = document.getElementById('slideronepart')
        sliderBackground.style.background = '#e2e2e2'
      }
    },
    animationHeaderContainerBackground() {
      this.$gsap.to('.header-container', {
        scrollTrigger: {
          trigger: '.header-container',
          start: 'top 1% top',
          end: 'bottom 5% top',
          // markers: true,
          toggleClass: 'headerContainerWhite',
        },
      })
    },
    animationBoxColor() {
      const gsap = this.$gsap
      const title = gsap.utils.toArray('.title')

      title.forEach((title) => {
        gsap.to('.header-container', {
          scrollTrigger: {
            trigger: title,
            start: 'top 10% top',
            end: 'bottom top',
            // markers: true,
            toggleClass: 'titleChangeColor',
          },
        })
      })
    },
    animationTriangleColor() {
      const gsap = this.$gsap
      const triangle = gsap.utils.toArray('.triangle')

      triangle.forEach((triangle) => {
        gsap.to('.header-container', {
          scrollTrigger: {
            trigger: triangle,
            start: 'top 10% top',
            end: 'bottom top',
            // markers: true,
            toggleClass: 'triangleChange',
          },
        })
      })
    },
  },
}
</script>

<style>
.about-us-part-border {
  overflow: hidden;
}
</style>