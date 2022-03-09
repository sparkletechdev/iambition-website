<template>
  <main class="customerspartborder">
    <CustomerPart />
    <CustomerIntroducePart />
    <SliderOne />
    <UpdatePart />
  </main>
</template>

<script>
export default {
  mounted() {
    this.animationheaderContainerBackground()
    this.animationBoxColor()
    this.anmationTriangleColor()
    this.sliderpartbackgroundchange()
  },
  methods: {
    sliderpartbackgroundchange() {
      if (this.$route.path === '/CUSTOMERS') {
        const sliderbackground = document.getElementById('slideronepart')
        sliderbackground.style.background = '#e2e2e2'
      }
    },
    animationheaderContainerBackground() {
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
    anmationTriangleColor() {
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
.customerspartborder {
  width: 100%;
  position: relative;
}
.headerContainerWhite {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  transition: 1s;
}
.titleChangeColor {
  color: white;
}
.triangleChange {
  border-style: solid;
  border-width: 10px 7px 0 7px;
  border-color: #fff transparent transparent transparent;
  margin: 0 0 0 5px;
}
</style>