<template>
  <main class="indexContainer">
    <Header/>
    <MajorPart :major="major" :url="url" :button="button" :majorpartalldata="majorpartalldata"/>

    <!-- <ProductionPart/> -->
    <div class="div1">{{majorpartalldata}}</div>
    <div class="div2">
      <div class="square"></div>
    </div>
    
  </main>  
</template>

<script>
export default {
  data() {
    return {
      major: {},
      url: {},
      majorpartalldata: [],
      button: {},
    }
  },
  async fetch() {
    this.major = await fetch(
      'http://localhost:3003/component/MajorPart'
    ).then(res => res.json());

    this.url = await fetch(
      'http://localhost:3003/component/getComponentUrl/MajorPart'
    ).then(res => res.json());

    this.majorPartName = await fetch(
      'http://localhost:3003/componentstylename/allComponent/MajorPart'
    ).then(res => res.json());

    const majorPartAllData = [];
    Promise.all(
      this.majorPartName.data.map(async (res) => {
        const majorPart = await fetch(`http://localhost:3003/componentstyle/${res.className}`);
        const majorPartAll = await majorPart.json();
        majorPartAllData.push(majorPartAll.data);
        this.majorpartalldata = majorPartAllData;
      })
    )

    this.button = await fetch(
      'http://localhost:3003/button/buttonIndexMajorPart'
    ).then(res => res.json());
  },
  beforeMount() {
    // this.majorPart();
  },
  mounted() {
    this.animationheaderContainerBackground();
    this.animationBoxColor();
    this.anmationTriangleColor();
  },
  methods: {
    // majorPart(){

    //   fetch('http://localhost:3003/componentstylename/allComponent/MajorPart')
    //   .then(res=>{
    //     return res.json()
    //   })
    //   .then(res => {
    //     this.majorPartName = res;

    //     const majorPartAllData = [];
    //     Promise.all(
    //       this.majorPartName.data.map(async (res) => {
    //         const majorPart = await fetch(`http://localhost:3003/componentstyle/${res.className}`);
    //         const majorPartAll = await majorPart.json();
    //         majorPartAllData.push(majorPartAll.data);
    //         this.majorpartalldata = majorPartAllData;
    //       })
    //     )
    //   })      
    
    //   fetch('http://localhost:3003/component/getComponentUrl/MajorPart')
    //   .then(res=>{
    //     return res.json()
    //   })
    //   .then(res => {
    //     this.url = res;
    //   })

    //   fetch('http://localhost:3003/component/MajorPart')
    //   .then(res=>{
    //     return res.json()
    //   })
    //   .then(res => {
    //     this.major = res;
    //   })

    //   fetch('http://localhost:3003/button/buttonIndexMajorPart')
    //   .then(res=>{
    //     return res.json()
    //   })
    //   .then(res => {
    //     this.button = res;
    //   })
    // },
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
    height: 2000px;
    background-color: #000;
    position: relative;
  }
  .div1, .div2{
    height: 100vh;
  }
  .div1{
    background-color: pink;
  }
  .div2{
    background-color: salmon;
  }
  .square{
    width: 150px;
    height: 150px;
    background-color: fuchsia;
  }
  .headerContainerWhite{
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