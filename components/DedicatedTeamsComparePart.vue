<template>
  <div id="dedicatedteamscomparepartborder" class="dedicatedteamscomparepartborder dedicatedteamscomparepartbordermove">
    <div class="dedicatedteamscomparecontain">
      <h1 id="dedicatedteamscomparetitle" class="dedicatedteamscomparetitle dedicatedteamscomparetitlemove">
        Dedicated Team vs. Time and Materials Model
      </h1>
      <p class="dedicatedteamscomparecontent dedicatedteamscomparecontentmove">
        When outsourcing your development, you’ll have to decide on an engagement model, a structured plan that defines the basis of the collaboration between you, the client, and BairesDev, the software development company. This engagement model establishes your needs while ensuring the level of control, flexibility, and responsibility involved in the project development. Additionally, any given engagement model has its impact on pricing.
      </p>
      <p class="dedicatedteamscomparecontent dedicatedteamscomparecontentmove">
        There are 3 common engagement models: dedicate teams, time and materials, and fixed price.
      </p>
      <div id="dedicatedteamscompareborder" class="dedicatedteamscompareborder dedicatedteamscomparebordermove">
        <div class="dedicatedteamscompareleftborder">
          <div class="dedicatedteamscompareleftteamcover"></div>
          <div class="dedicatedteamscompareleftteamborder">
            <h1 class="dedicatedteamscompareleftteamtitle">
              Dedicated Team
            </h1>
            <p class="dedicatedteamscompareleftteamcontent">
              A dedicated team model is mostly used for long-term projects with unclear requirements and potential changes in scope. It’s also common when the client doesn’t have the necessary skills to tackle the project at hand. The pricing model in dedicated teams is often monthly payments based on the team’s size.
            </p>
          </div>
          <div class="dedicatedteamscompareleftteamdetailborder">
            <div v-for="(item,index) in dataleft" :key="index" class="dedicatedteamscompareleftteamdetailcontain">
              <h1 class="dedicatedteamscompareleftteamdetailtitle">
                {{item.title}}
              </h1>
              <p v-for="(i,n) in item.content" :key="n" class="dedicatedteamscompareleftteamdetailcontent">
                <fa :icon="['far', 'hand-point-right']" class="handpointright" />
                {{i}}
              </p>
            </div>
          </div>
        </div>
        <div class="dedicatedteamscomparerightborder">
          <div class="dedicatedteamscomparerightmodecover"></div>
          <div class="dedicatedteamscomparerightmodeborder">
            <h1 class="dedicatedteamscomparerightmodetitle">
              Time and Materials model
            </h1>
            <p class="dedicatedteamscomparerightmodecontent">
              In this model, you only pay for the time and effort the developers spend on your project working on predefined features and functionality. It’s a flexible model that’s widely considered to be the most convenient, as you only pay for actual work performed on a specific timeframe (daily, weekly, or monthly basis, for example).
            </p>
          </div>
          <div class="dedicatedteamscomparerightmodedetailborder">
            <div v-for="(item,index) in dataright" :key="index" class="dedicatedteamscomparerightmodedetailcontain">
              <h1 class="dedicatedteamscomparerightmodedetailtitle">
                {{item.title}}
              </h1>
              <p v-for="(i,n) in item.content" :key="n" class="dedicatedteamscomparerightmodedetailcontent">
                <fa :icon="['far', 'hand-point-right']" class="handpointright" />
                {{i}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataleft:[
        {
          title:"A dedicated team model implies the following:",
          content:[
            "The outsourcing company manages the project and the team but offers multiple feedback options for the client.",
            "The outsourcing company is responsible for gathering the right professionals in a dedicated team to meet the client’s needs and requirements.",
            "Client and team coordinate the project’s workflow, including development schedules and deliverables."
          ]
        },
        {
          title:"Pros of a dedicated team model:",
          content:[
            "More affordable option than hiring an in-house team.",
            "Team dedicated exclusively to the project at hand.",
            "Continuous development and delivery for improved flexibility and scalability.",
            "Faster workflow when compared to more strictly planned models.",
          ]
        },
        {
          title:"Cons of a dedicated team model:",
          content:[
            "Efficient only for long-term projects.",
            "Less control over the development.",
          ]
        },
      ],
      dataright:[
        {
          title:"A time and materials model implies the following:",
          content:[
            "The client has to provide a precise scope and oversee the project to ensure the work being performed is relevant.",
            "Cooperation between the client and the development team is closer than with the dedicated team model, as the client needs to be more involved in the decisions.",
          ]
        },
        {
          title:"Pros of a time and materials model:",
          content:[
            "Flexible approach to development that gives room for changing requirements.",
            "Highly scalable and rapidly adaptable to new needs.",
            "Tight time management that ensures a faster development.",
            "Increased cost control and budget flexibility.",
            "Closer monitoring of the development by the client.",
          ]
        },
        {
          title:"Cons of a time and materials model:",
          content:[
            "Difficult to accurately estimate the required time for project completion.",
            "Closer monitoring implies less time for the client to focus on other business tasks.",
            "Flexible timeframes make it difficult to define a finish date.",
            "Loose client controls can lead to wasted time and inflated costs.",
          ]
        },
      ],
    }
  },
  mounted() {
    this.dedicatedteamscomparepartscroll();
  },
  methods: {
    dedicatedteamscomparepartscroll(){
      window.addEventListener("scroll", ()=>{
        const dedicatedteamscomparepartborder = document.getElementById("dedicatedteamscomparepartborder");
        const dedicatedteamscomparetitle = document.getElementById("dedicatedteamscomparetitle");
        const dedicatedteamscomparecontent = document.getElementsByClassName("dedicatedteamscomparecontent");
        const dedicatedteamscompareborder = document.getElementById("dedicatedteamscompareborder");


        if (Math.abs(dedicatedteamscomparepartborder.offsetTop - scrollY) > (window.innerHeight / 10) &&
            (window.innerHeight) > Math.abs(dedicatedteamscomparepartborder.offsetTop - scrollY)) {
          dedicatedteamscomparepartborder.classList.remove("dedicatedteamscomparepartbordermove");
          dedicatedteamscomparetitle.classList.remove("dedicatedteamscomparetitlemove");
          dedicatedteamscomparecontent.forEach(i => {
            i.classList.remove("dedicatedteamscomparecontentmove");
          });
          dedicatedteamscompareborder.classList.remove("dedicatedteamscomparebordermove");
        }
      })
    },
  },
}
</script>

<style>
  .dedicatedteamscomparepartborder {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #edecea;
    padding: 100px 0 100px;
    opacity: 1;
    transition: all .6s ease-in-out;
    transform: translateY(0);
  }
  .dedicatedteamscomparepartbordermove{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamscomparecontain {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dedicatedteamscomparetitle {
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 40px;
    padding: 0 550px 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out .3s;
  }
  .dedicatedteamscomparetitlemove{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamscomparecontent {
    font-size: 15px;
    font-weight: bold;
    line-height: 1.7;
    margin-bottom: 20px;
    text-align: center;
    padding: 0 335px 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out .5s;
  }
  .dedicatedteamscomparecontentmove{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamscompareborder {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out .7s;
  }
  .dedicatedteamscomparebordermove{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamscompareleftborder {
    background: rgb(10, 63, 116);
    border-radius: 15px;
    display: flex;
    width: 1024px;
    position: relative;
    overflow: hidden;
    margin-bottom: 80px;
  }  
  .dedicatedteamscompareleftteamcover{
    position: absolute;
    top: 0%;
    right: -45%;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: url("https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamscompareteam.jpg");
    background-position: center;
    transform: skewX(-25deg);
    transition: all .6s ease-in-out;
  }
  .dedicatedteamscompareleftteamborder{
    width: 55%;
    padding: 20px 35px;
    transform: translateX(0);
    transition: all .6s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .dedicatedteamscompareleftborder:hover .dedicatedteamscompareleftteamborder{
    transform: translateX(25%);
    opacity: 0;
  }
  .dedicatedteamscompareleftborder:not(:hover) .dedicatedteamscompareleftteamborder{
    transition: all .6s ease-in-out .3s;
  }
  .dedicatedteamscompareleftborder:hover .dedicatedteamscompareleftteamcover{
    right: 70%;
  }
  .dedicatedteamscompareleftborder:not(:hover) .dedicatedteamscompareleftteamcover{
    transition: all .6s ease-in-out .2s;
  }
  .dedicatedteamscompareleftteamtitle{
    color: white;
    font-weight: bold;
    font-size: 1.74rem;
    line-height: 3;
  }
  .dedicatedteamscompareleftteamcontent{
    color: white;
    font-weight: bold;
    line-height: 1.8;
  }
  .dedicatedteamscompareleftteamdetailborder{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    transform: translateX(100%);
    transition: all .6s ease-in-out .5s;
    padding: 20px 30px;
  }
  .dedicatedteamscompareleftborder:hover .dedicatedteamscompareleftteamdetailborder{
    transform: translateX(0);
  }
  .dedicatedteamscompareleftborder:not(:hover) .dedicatedteamscompareleftteamdetailborder{
    transition: all .5s ease-in-out;
    opacity: 0;
  }
  .dedicatedteamscompareleftteamdetailtitle{
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.5;
    margin: 15px 0;
  }
  .dedicatedteamscompareleftteamdetailcontent{
    color: white;
    font-weight: lighter;
    line-height: 1.5;
    margin: 10px 0;
  }
  .handpointright{
    color: cornflowerblue;
  }
  .dedicatedteamscomparerightborder{
    background: rgb(10, 63, 116);
    border-radius: 15px;
    display: flex;
    width: 1024px;
    position: relative;
    overflow: hidden;
  }
  .dedicatedteamscomparerightmodecover{
    position: absolute;
    top: 0%;
    right: -45%;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: url("https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamscomparetime.jpg");
    background-position: center;
    transform: skewX(-25deg);
    transition: all .6s ease-in-out;
  }
  .dedicatedteamscomparerightmodeborder{
    width: 55%;
    padding: 20px 35px;
    transform: translateX(0);
    transition: all .6s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .dedicatedteamscomparerightborder:hover .dedicatedteamscomparerightmodeborder{
    transform: translateX(25%);
    opacity: 0;
  }
  .dedicatedteamscomparerightborder:not(:hover) .dedicatedteamscomparerightmodeborder{
    transition: all .6s ease-in-out .3s;
  }
  .dedicatedteamscomparerightborder:hover .dedicatedteamscomparerightmodecover{
    right: 70%;
  }
  .dedicatedteamscomparerightborder:not(:hover) .dedicatedteamscomparerightmodecover{
    transition: all .6s ease-in-out .2s;
  }
  .dedicatedteamscomparerightmodetitle{
    color: white;
    font-weight: bold;
    font-size: 1.74rem;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .dedicatedteamscomparerightmodecontent{
    color: white;
    font-weight: bold;
    line-height: 1.8;
  }
  .dedicatedteamscomparerightmodedetailborder{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    transform: translateX(100%);
    transition: all .6s ease-in-out .5s;
    padding: 20px 20px;
    margin-top: 60px;
  }
  .dedicatedteamscomparerightborder:hover .dedicatedteamscomparerightmodedetailborder{
    transform: translateX(0);
  }
  .dedicatedteamscomparerightborder:not(:hover) .dedicatedteamscomparerightmodedetailborder{
    transition: all .5s ease-in-out;
    opacity: 0;
  }
  .dedicatedteamscomparerightmodedetailtitle{
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.5;
    margin: 15px 0;
  }
  .dedicatedteamscomparerightmodedetailcontent{
    color: white;
    font-weight: lighter;
    line-height: 1.5;
    margin: 10px 0;
  }
</style>