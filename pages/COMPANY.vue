<template>
  <main class="companypartborder">
    <Header />
    <CompanyPart />
    <CompanyExistPart />
    <CompanyDoingPart />
    <CompanyGoingPart />
    <UpdatePart />
    <Footer />
  </main>
</template>

<script>
export default {
  mounted() {
    this.animationheaderContainerBackground();
    this.animationBoxColor();
    this.anmationTriangleColor();
  },
  methods: {
    sliderpartbackgroundchange(){
      if (window.location.href === "http://localhost:3010/CUSTOMERS") {
        const sliderbackground = document.getElementById("slideronepart");
        sliderbackground.style.background = "#e2e2e2";
      }
    },
    animationheaderContainerBackground(){
      this.$gsap.to('.headerContainer', {
        scrollTrigger: {
          trigger: ".headerContainer",
          start: "top 1% top",
          end: "bottom 5% top",
          // markers: true,
          toggleClass: "headerContainerWhite"
        }
      });
    },
    animationBoxColor(){
      const gsap = this.$gsap;
      const title = gsap.utils.toArray('.title');

      title.forEach((title) => {
        gsap.to(".headerContainer",{
          scrollTrigger:{
            trigger: title,
            start: "top 10% top",
            end: "bottom top",
            // markers: true,
            toggleClass: "titleChangeColor"
          }
        })
      });
    },
    anmationTriangleColor(){
      const gsap = this.$gsap;
      const triangle = gsap.utils.toArray('.triangle');

      triangle.forEach((triangle) => {
        gsap.to(".headerContainer",{
          scrollTrigger:{
            trigger: triangle,
            start: "top 10% top",
            end: "bottom top",
            // markers: true,
            toggleClass: "triangleChange"
          }
        })
      });
    },
  },
}
</script>

<style>
  .companypartborder{
    overflow: hidden;
  }
</style>