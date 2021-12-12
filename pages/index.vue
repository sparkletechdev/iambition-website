<template>
  <main class="indexContainer">
    <Header/>
    <MajorPart v-if="data.majorPartAllData[0] && data.majorPartAllData[1] && data.majorPartAllData[2] && data.majorPartAllData[3] && data.majorPartAllData[4] && data.url &&data.major" :major="data.major" :url="data.url" :button="data.button" :majorpartalldata="data.majorPartAllData"/>
    <ProductionPart v-if="data.production" :production="data.production" />
    <Slider/>
    <SliderOne/>
    <UpdatePart/>
    <Footer/>
  </main>  
</template>

<script>
export default {
  computed: {
    data(){
      return this.$store.state
    },
  },
  beforeMount() {
    this.$store.dispatch('fetch');
    this.$store.dispatch('actionProductionPart');
  },
  mounted() {
    this.animationheaderContainerBackground();
    this.animationBoxColor();
    this.anmationTriangleColor();
  },
  methods: {
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
  .indexContainer{
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .headerContainerWhite{
    border: none;
    background-color: rgba(0,0,0,0);
    transition: 1s;
  }
  .titleChangeColor{
    color: white;
  }
  .triangleChange{
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-color: #fff transparent transparent transparent;
    margin: 0 0 0 5px;
  }
</style>