<template>
  <header ref="headerContainer" class="headerContainer" @load="$fetch">
    <NuxtLogo/>
    <div v-for="post in posts.res" :key="post.title" class="headerLink">
      <div
        v-if="post.title != 'INDEX'"
        :key="post.title"
        class="title" @click.once="reload(post.title)">
          <nuxt-link :to="`/${post.title}`">
            {{post.title}}
          </nuxt-link>
        <div v-if="post.subheaders.length != '0'" :key="post.title" class="triangle"></div>
        <div class="subtitleContainer">
          <div v-for="subheader in post.subheaders" :key="subheader.id" class="subtitle">
            <nuxt-link v-if="subheader.title != 'none'" :to="`/subPage/${subheader.title}`">
              {{subheader.title}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="hamburgerborder">
      <div class="hamburgermiddleborder hamburgermiddlebordersmall" @click="hiddenheadercontainermove()">
        <span class="hamburgerline"></span>
        <span class="hamburgerline"></span>
        <span class="hamburgerline"></span>
      </div>
    </div>
    <div ref="hiddenheadercontainer" class="hiddenheadercontainer">
      <div class="hiddenheadercontainerborder">
        <div v-for="post in posts.res" :key="post.title" class="hiddenheadercontainermiddle">
          <div
           v-if="post.title != 'INDEX'"
           :key="post.title"
           class="hiddenheadercontainertitleborder"
           @click.once="reload(post.title)">
            <nuxt-link :to="`/${post.title}`" class="hiddenheadercontainertitle">
              {{post.title}}
            </nuxt-link>
            <div v-for="subheader in post.subheaders" :key="subheader.id" class="hiddenheadercontainersubtitleborder">
              <nuxt-link v-if="subheader.title != 'none'" :to="`/subPage/${subheader.title}`" class="hiddenheadercontainersubtitle">
                {{subheader.title}}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch(
      'http://localhost:3003/headerAll'
    ).then(res => res.json());
  },
  mounted() {
    this.screen();
  },
  methods: {
    reload(data){
      setTimeout(()=>{
        window.location.reload();
      },10)
    },
    screen(){
      const ref = this.$refs;
      window.addEventListener("scroll", ()=> {
        if (window.innerWidth < 768 && scrollY !== 0) {
          ref.headerContainer.style.backgroundColor = "rgba(255,255,255,.8)";
        }else if(window.innerWidth < 768 && scrollY === 0){
          ref.headerContainer.style.backgroundColor = "";
        }
      })
    },
    hiddenheadercontainermove(){
      const ref = this.$refs;
      const hiddenheadercontainerstyle = ref.hiddenheadercontainer.style;
      hiddenheadercontainerstyle.right = (hiddenheadercontainerstyle.right === "0%") ? "-100%" : "0%";
    }
  },
}
</script>

<style>
  .headerContainer{
    box-shadow: 0 0 2px rgb(0 0 0 / 20%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    width: 100%;
    background-color: #fff;
    transition: 1s;
    z-index: 5;
  }
  .headerLink{
    /* border: 1px solid black; */
    margin: 0 40px 0 0;
    display: flex;  
    align-items: center;
  }
  .title{
    /* border: 1px solid black; */
    font-weight: bold;
    display: flex;
    align-items: center;
    color: black;
    padding-top: 10px;
    transition: .4s;
    position: relative;
  }
  .title:hover{
    color: #eda905;
    border-top: 2px solid #eda905;
  }
  .triangle{
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-color: #000 transparent transparent transparent;
    margin: 0 0 0 5px;
    transition: .4s;
  }
  .title:hover .triangle{
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-color: #eda905 transparent transparent transparent;
  }
  .subtitleContainer{
    /* border: 1px solid black; */
    position: absolute;
    left: 0%;
    top: 105%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding-bottom: 10px;
  }
  .subtitle{
    /* border: 1px solid black; */
    white-space: nowrap;
    margin-bottom: 10px;
    margin-top: 15px;
    margin-left: 10px;
    width: 320px;
    color: rgba(0, 0, 0, .7);
    display: none;
  }
  .subtitle:hover{
    color: #eda905;
    cursor: pointer;
  }
  .title:hover .subtitle{
    display: block;
  }
  .hiddenheadercontainer{
    display: none;
  }

  @media screen and (max-width: 1200px) {
    .titleChangeColor{
      color: #000;
    }
  }
  @media screen and (max-width: 992px) {
    .titleChangeColor{
      color: #000;
    }
  }
  @media screen and (max-width: 768px) {
    .headerContainer{
      width: 100%;
      display: flex;
      justify-content: space-around;
      background-color: rgba(0,0,0,0);
    }
    .addheaderContainerwhite{
      background-color: white;
    }
    .headerLink{
      display: none;
    }
    .hamburgerborder{
      /* border: 1px solid black; */
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 300px;
    }
    .hamburgermiddleborder{
      overflow: hidden;
      display: flex;
      flex-direction: column;
      width: auto;
      height: 60%;
      justify-content: space-around;
    }
    .hamburgermiddlebordersmall{
      width: 70px;
    }
    .hamburgerline{
      width: 75px;
      border-radius: 1.5px;
      border-top: 3px solid rgba(193, 226, 233, 0.863);
      box-shadow: .5px .5px 3px rgba(0, 0, 0, 0.24);
      position: relative;
    }
    .hamburgerline::before{
      content: "";
      position: absolute;
      bottom: 0%;
      left: -110%;
      width: 100%;
      height: 100%;
      border-top: 3px solid black;
      transition: all .6s ease-in-out;
    }
    .hamburgerborder:hover{
      cursor: pointer;
    }
    .hamburgerborder:hover .hamburgerline::before{
      animation-name: animate;
      animation-duration: 1.5s;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }
    @keyframes animate {
      0%{
        left: -110%;
      }
      50%{
        left: 0%;
      }
      100%{
        left: 110%;
      }
    }
    .hiddenheadercontainer{
      /* background-color: rgba(23, 75, 88, 0.815); */
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(90, 171, 196, 0.952);
      position: fixed;
      right: -100%;
      top: 0%;
      width: 100%;
      min-height: 750px;
      height: 100vh;
      margin-top: 92px;
      transition: all .6s ease-in-out;
    }
    .hiddenheadercontainerborder{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .hiddenheadercontainermiddle{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
    }
    .hiddenheadercontainertitleborder{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-top: 1px solid rgba(255,255,255,0.5);
    }
    .hiddenheadercontainertitle{
      color: #fff;
      text-shadow: 3px 5px 2px #474747;
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 2%;
    }
    .hiddenheadercontainersubtitleborder{
      margin: 1% 0;
    }
    .hiddenheadercontainersubtitle{
      color: transparent;
      background: #666;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      text-shadow: 0 3px 3px rgba(255,255,255,0.5);
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 576px) {
    .hamburgerborder {
      margin-left: 100px;
    }
    .hamburgermiddleborder {
      width: 90%;
      height: 50%;
    }
    .nuxt-logo{
      height: 60px;
    }
    .hiddenheadercontainer{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 10px;
      min-height: 720px;
    }
  }
  @media screen and (max-width: 414px) {
    .hamburgerborder{
      margin-left: 70px;
    }
    .hiddenheadercontainer{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 10px;
    }
  }
  @media screen and (max-width: 361px) {
    .hiddenheadercontainer{
      padding-top: 0;
    }
  }
</style>