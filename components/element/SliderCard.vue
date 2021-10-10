<template>
    <div class="sliderborder">
      <div ref="sliderbordercontain" class="sliderbordercontain" @mouseenter="mousehover()" @mouseleave="mouseleave()">
        <div v-for="data in datas" :key="data.id" class="slidercardborder">
          <h1 class="slidercardtitle">
            {{data.title.titleelement}}
          </h1>
          <p class="sliderbordersbutitle">
            Featured among Singapore’s Top IT companies by Connectbit for Tuple’s new approach to AI Technology Innovation.
          </p>
          <nuxt-link class="sliderborderbuttton" to="/">
            read me
          </nuxt-link>
        </div>
      </div>
      <div class="sliderdotcontain">
        <div v-for="data in datas" :key="data.id" class="sliderdotborder" @click="dotclick(data.id-1)">
          <div :data-id="data.id-1" class="dot" ></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    hone: {
      type: Object,
      default: () => {},
    },
    honetitle: {
      type: Object,
      default: () => {},
    } 
  },
  data() {
    return {
      datas:[
        {
          id:'1',
          title: {titleelement:'intel',titlestyle:``},
          subtitle: [{subtitleelement:'just test'},{subtitlestyle:``}],
          button: [{buttonelement:'read me'},{buttonstyle:``},{buttonlink:'/'}],
        },
        {
          id:'2',
          title: {titleelement:'google',titlestyle:``},
          subtitle: [{subtitleelement:'do not test'},{subtitlestyle:``}],
          button: [{buttonelement:'read me'},{buttonstyle:``},{buttonlink:'/'}],
        },
        {
          id:'3',
          title: {titleelement:'facebook',titlestyle:``},
          subtitle: [{subtitleelement:'do you like it'},{subtitlestyle:``}],
          button: [{buttonelement:'read me'},{buttonstyle:``},{buttonlink:'/'}],
        },
        {
          id:'4',
          title: {titleelement:'telegram',titlestyle:``},
          subtitle: [{subtitleelement:'talk to me'},{subtitlestyle:``}],
          button: [{buttonelement:'read me'},{buttonstyle:``},{buttonlink:'/'}],
        },
        {
          id:'5',
          title: {titleelement:'line',titlestyle:``},
          subtitle: [{subtitleelement:'hi ding dong'},{subtitlestyle:``}],
          button: [{buttonelement:'read me'},{buttonstyle:``},{buttonlink:'/'}],
        },
        {
          id:'6',
          title: {titleelement:'microsoft',titlestyle:``},
          subtitle: [{subtitleelement:'hello bye bye'},{subtitlestyle:``}],
          button: [{buttonelement:'read me'},{buttonstyle:``},{buttonlink:'/'}],
        },
        {
          id:'7',
          title: {titleelement:'test',titlestyle:``},
          subtitle: [{subtitleelement:'just test'},{subtitlestyle:``}],
          button: [{buttonelement:'read me'},{buttonstyle:``},{buttonlink:'/'}],
        },
      ],
      index: 0,
      stop: 0,
    }
  },
  mounted() {
    this.slider();
  },
  updated() {
    this.slider();
  },
  methods: {
    slider(i){
      const sliderdotborder = document.getElementsByClassName('sliderdotborder');
      const lastElement = sliderdotborder.length;
      sliderdotborder[lastElement-1].style.display = "none";
      sliderdotborder[lastElement-2].style.display = "none";

      const darkdot = document.getElementsByClassName('darkdot');
      if (darkdot.length === 0) {
        const dot = document.getElementsByClassName('dot');
        dot[0].classList.add("darkdot");
      }

      this.stop = setInterval(()=>{
        
        this.index = this.index + 1;
        if (this.index === 5) {
          this.index = 0;
        };

        if (i !== undefined) {
          this.index = i;
          i = i + 1
          if (i === 5) {
            i = 0
          }
        }

        // window.console.log(this.index);
        this.looppic(this.index);
        this.loopdot(this.index);
      },1500);
      // window.console.log(i)
      
    },
    looppic(i){
      const ref = this.$refs;

      const slidercardborderWidth = 342;
      const margin = 15;
      const original = (slidercardborderWidth * 1) + (margin * 2);
      ref.sliderbordercontain.style.transform = `translateX(-${original * i}px)`;
    },
    loopdot(i){
      const dot = document.getElementsByClassName('dot');
      const darkdot = document.getElementsByClassName('darkdot');

      dot[i].classList.add("darkdot");

      if (darkdot.length >= 2) {
        for (let index = 0; index < dot.length; index++) {
          dot[index].classList.remove("darkdot");
        }
        dot[i].classList.add("darkdot");
      }
      // if (i !== 0) {
      //   dot[i-1].classList.remove("darkdot");
      // }
      // if (i === 1 && dot[0].classList.contains("darkdot")) {
      //   dot[0].classList.remove("darkdot");
      // }
      // if (i === 0 && dot[4].classList.contains("darkdot")) {
      //   dot[4].classList.remove("darkdot");
      // }
    },
    mousehover(){
      clearInterval(this.stop);
    },
    mouseleave(){
      this.slider();
    },
    dotclick(i){
      clearInterval(this.stop);
      this.slider(i);
      this.looppic(i);
      this.loopdot(i);
    },
  },
}
</script>

<style>
  .sliderborder{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .sliderbordercontain{
    /* border: 1px solid darkmagenta; */
    width: 100%;
    display: flex;
    transition: .6s;
  }
  .slidercardborder{
    /* border: 1px solid black; */
    background-color: #fff;
    padding: 42px 25px;
    border-radius: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px 0 15px;
  }
  .slidercardtitle{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 15px;
  }
  .sliderbordersbutitle{
    width: 290px;
    height: 120px;
    max-height: 120px;
    text-align: center;
    font-size: 8px;
  }
  .sliderborderbuttton{
    display: flex;
    justify-content: center;
    border-radius: 30px;
    background: linear-gradient(to right, #145484 50%, #1868a4 50%);
    background-size:200% 100%;
    background-position: right bottom;
    color: white;
    padding: 15px 50px;
    font-weight: bold;
    width: 60%;
    transition: .4s;
  }
  .sliderborderbuttton:hover{
    background-position: left bottom;
  }
  .sliderborderbuttton:not(:hover){
    background-position: right bottom;
  }
  .sliderdotcontain{
    display: flex;
  }
  .sliderdotborder{
    /* border: 1px solid green; */
    display: flex;
    justify-content: center;
    margin: 0 15px;
  }
  .dot{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: silver;
  }
  .dot:hover{
    cursor: pointer;
  }
  .darkdot{
    background-color: rgb(44, 141, 201);
  }
</style>