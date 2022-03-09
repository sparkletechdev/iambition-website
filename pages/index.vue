<template>
  <main class="index-container">
    <MajorPart />
    <ProductionPart />
    <Slider />
    <SliderOne />
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
    animationHeaderContainerBackground() {
      this.$gsap.to('.header-container', {
        scrollTrigger: {
          trigger: '.header-container',
          start: 'top 1% top',
          end: 'bottom 5% top',
          // markers: true,
          toggleClass: 'header-container-white',
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
            toggleClass: 'title-change-color',
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
            toggleClass: 'triangle-change',
          },
        })
      })
    },
  },
}
</script>

<style>
.index-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.header-container-white {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  transition: 1s;
}
.title-change-color {
  color: white;
}
.triangle-change {
  border-style: solid;
  border-width: 10px 7px 0 7px;
  border-color: #fff transparent transparent transparent;
  margin: 0 0 0 5px;
}
</style>