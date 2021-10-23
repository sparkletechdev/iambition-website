<template>
  <div id="dedicatedteamsbenefitspartborder" class="dedicatedteamsbenefitspartborder">
    <div class="dedicatedteamsbenefitspartcontain">
      <h1 class="dedicatedteamsbenefitsparttitle">
        Dedicated Teams' Benefits
      </h1>
      <div class="dedicatedteamsbenefitspartmiddleborder">
        <div id="dedicatedteamsbenefitspartmiddlenumber" class="dedicatedteamsbenefitspartmiddlenumber">
            1
        </div>
        <div class="dedicatedteamsbenefitspartmiddleborderhide">
          <div v-for="(item,index) in data" :key="index"  class="dedicatedteamsbenefitspartmiddlecontain">
            <h1 class="dedicatedteamsbenefitspartmiddletitle">
              {{item.title}}
            </h1>
            <p class="dedicatedteamsbenefitspartmiddlecontent">
              {{item.content}}
            </p>
          </div>
        </div>
      </div>
      <div class="dedicatedteamsbenefitspartlink" @click="customerreload()">
        <nuxt-link to="/subPage/Contact Us" class="dedicatedteamsbenefitspartlinkcontactus">
          Contact Us
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[
        {
          title: "Start immediately",
          content: "Teams are quickly spun up and autonomously managed by Sparkle to implement and execute agreed plans."
        },
        {
          title: "Access Top 1% Engineers",
          content: "Our hiring process is constantly active to ensure us immediate access to the best IT professionals in the market. More info about our staffing process can be found here: Top 1% IT Talent."
        },
        {
          title: "Free up internal key resources",
          content: "By only using Sparkle’s resources, you can focus on key growth drivers while still being on control of the whole project."
        },
        {
          title: "Avoid project & team management issues",
          content: "Sparkle is responsible for the Technical lead and team management from start to end."
        },
      ],
    }
  },
  mounted() {
    this.dedicatedteamsbenefitspartmiddleborderhidescroll()
  },
  methods: {
    customerreload(){
      if (window.location.href === "http://localhost:3010/subPage/Contact%20Us") {
        setTimeout(()=>{
          window.location.reload();
        },15)
      }
    },
    dedicatedteamsbenefitspartmiddleborderhidescroll(){
      const dedicatedteamsbenefitspartmiddleborderhide = document.getElementsByClassName("dedicatedteamsbenefitspartmiddleborderhide");
      dedicatedteamsbenefitspartmiddleborderhide[0].addEventListener("scroll", () => {
        const dedicatedteamsbenefitspartmiddlenumber = document.getElementById("dedicatedteamsbenefitspartmiddlenumber");
        dedicatedteamsbenefitspartmiddlenumber.innerText = '1'
        if (dedicatedteamsbenefitspartmiddleborderhide[0].scrollTop > (525/4)) {
          dedicatedteamsbenefitspartmiddlenumber.innerText = '2'
        }
        if (dedicatedteamsbenefitspartmiddleborderhide[0].scrollTop < (131.25*3) &&
            dedicatedteamsbenefitspartmiddleborderhide[0].scrollTop > (131.25*2)) {
          dedicatedteamsbenefitspartmiddlenumber.innerText = '3'
        }
        if (dedicatedteamsbenefitspartmiddleborderhide[0].scrollTop > (131.25*3)) {
          dedicatedteamsbenefitspartmiddlenumber.innerText = '4'
        }
      })
    },
  },
}
</script>

<style>
  .dedicatedteamsbenefitspartborder {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dedicatedteamsbenefitspartcontain{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dedicatedteamsbenefitsparttitle{
    padding: 80px 0;
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
  }
  .dedicatedteamsbenefitspartmiddleborder{
    /* border: 1px solid black; */
    height: 145px;
    display: flex;
    overflow: -moz-hidden-unscrollable;
    position: relative;
  }
  .dedicatedteamsbenefitspartmiddlenumber{
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(2, 114, 177,.3);
    font-weight: bold;
    animation-name: move;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }
  @keyframes move{
    from{
      transform: translateX(-50%) translateY(0);
    }
    50%{
      transform: translateX(-50%) translateY(10px);
    }
    to{
      transform: translateX(-50%) translateY(0);
    }
  }
  .dedicatedteamsbenefitspartmiddleborderhide{
    -ms-overflow-style: none;
    overflow-y: auto;
    width: 520px;
    border-radius: 15px;
  }
  .dedicatedteamsbenefitspartmiddleborderhide::-webkit-scrollbar{
    display: none;
  }
  .dedicatedteamsbenefitspartmiddlecontain{
    /* border: 1px solid black; */
    width: 520px;
    height: 145px;
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    background: #F1F1F1;
  }
  .dedicatedteamsbenefitspartmiddlecontain:last-child{
    margin-bottom: 0;
  }
  .dedicatedteamsbenefitspartmiddletitle{
    font-size: 18px;
    line-height: 3;
    font-weight: bold;
  }
  .dedicatedteamsbenefitspartmiddlecontent{
    text-align: center;
  }

  .dedicatedteamsbenefitspartlink{
    margin: 60px 0;
  }
  .dedicatedteamsbenefitspartlinkcontactus{
    background: linear-gradient(to right, #145484 50%, #1868a4 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    font-weight: bolder;
    padding: 15px 50px;
    border-radius: 30px;
    transition: all .5s ease-out;
    color: white;
  }
  .dedicatedteamsbenefitspartlinkcontactus:hover{
    background-position: left bottom;
  }
  .dedicatedteamsbenefitspartlinkcontactus:not(:hover){
    background-position: right bottom;
  }
</style>