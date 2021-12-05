<template>
  <div class="dedicatedteamscompareparttwoborder">
    <div class="dedicatedteamscompareparttwocontain">
      <h1 class="dedicatedteamscompareparttwotitle">
        Dedicated team vs. Fixed-price
      </h1>
      <p class="dedicatedteamscompareparttwocontent">
        The fixed-price model is the third most common engagement model for development (the others being the dedicated team and the time and materials models). Here’s how it compares to the dedicated team model, the most common of the engagement models. 
      </p>
      <div class="dedicatedteamscompareparttwoteamandpriceborder">
        <div class="dedicatedteamscompareparttwoteamborder">
          <h1 class="dedicatedteamscompareparttwoteamtitle">
            Dedicated Team
          </h1>
          <p class="dedicatedteamscompareparttwoteamcontent">
            A dedicated team model is mostly used for long-term projects with unclear requirements and potential changes in scope. It’s also common when the client doesn’t have the necessary skills to tackle the project at hand. The pricing model in dedicated teams is often monthly payments based on the team’s size.
          </p>
          <div class="dedicatedteamscompareparttwoteamintroductionborder">
            <div v-for="(item,index) in dataleft" :key="index" class="dedicatedteamscompareparttwoteamintroductions">
              <div class="dedicatedteamscompareparttwoteamintroductionnumber">{{index+1}}</div>
              <h1 class="dedicatedteamscompareparttwoteamintroductiontitle">
                {{item.title}}
              </h1>
              <p v-for="(n,i) in item.content" :key="i"  class="dedicatedteamscompareparttwoteamintroductioncontent">
                {{n}}
              </p>
            </div>
          </div>
        </div>
        <div class="dedicatedteamscompareparttwopriceborder">
          <h1 class="dedicatedteamscompareparttwopricetitle">
            Fixed-price Model
          </h1>
          <p class="dedicatedteamscompareparttwopricecontent">
            A fixed price model (also known as fixed budget model) takes place when the client and the development company agree on a fixed cost for the entire project. That means that by using this model, you’ll pay only that predefined sum regardless of the amount of time or resources that the company needed to complete the project.  It’s mostly used for short-term projects, especially if they are small or medium-size or have limited scope. 
          </p>
          <div class="dedicatedteamscompareparttwopriceintroductionborder">
            <div v-for="(item,index) in dataright" :key="index"  class="dedicatedteamscompareparttwopriceintroductions">
              <div class="dedicatedteamscompareparttwopriceintroductionnumber">{{index+1}}</div>
              <h1 class="dedicatedteamscompareparttwopriceintroductiontitle">
                {{item.title}}
              </h1>
              <p v-for="(n,i) in item.content" :key="i" class="dedicatedteamscompareparttwopriceintroductioncontent">
                {{n}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="dedicatedteamscompareparttwolink" @click="customerreload()">
        <nuxt-link to="/subPage/Contact Us" class="dedicatedteamscompareparttwolinkcontactus">
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
      dataleft:[
        {
          id: 1,
          title: "It implies:",
          content: [
            "The outsourcing company manages the project and the team but offers multiple feedback options for the client.",
            "",
            "The outsourcing company is responsible for gathering the right professionals in a dedicated team to meet the client’s needs and requirements.",
            "Client and team coordinate the project’s workflow, including development schedules and deliverables."
          ]
        },
        {
          id: 2,
          title: "Pros:",
          content: [
            "More affordable option than hiring an in-house team.",
            "Team dedicated exclusively to the project at hand.",
            "Continuous development and delivery for improved flexibility and scalability.",
            "Faster workflow when compared to more strictly planned models."
          ],
        },
        {
          id: 3,
          title: "Cons",
          content: [
            "Efficient only for long-term projects.",
            "Less control over the development."
          ],
        },
      ],
      dataright:[
        {
          id: 1,
          title: "It implies:",
          content: [
            "The outsourcing company manages the project and the team but offers multiple feedback options for the client.",
            "",
            "The outsourcing company is responsible for gathering the right professionals in a dedicated team to meet the client’s needs and requirements.",
            "Client and team coordinate the project’s workflow, including development schedules and deliverables."
          ]
        },
        {
          id: 2,
          title: "Pros:",
          content: [
            "More affordable option than hiring an in-house team.",
            "Team dedicated exclusively to the project at hand.",
            "Continuous development and delivery for improved flexibility and scalability.",
            "Faster workflow when compared to more strictly planned models."
          ],
        },
        {
          id: 3,
          title: "Cons",
          content: [
            "Efficient only for long-term projects.",
            "Less control over the development."
          ],
        },
      ],
    }
  },
  methods: {
    customerreload(){
      if (window.location.href === "http://localhost:3010/subPage/Contact%20Us") {
        setTimeout(()=>{
          window.location.reload();
        },15)
      }
    },
  }
}
</script>

<style>
  .dedicatedteamscompareparttwoborder {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0 100px;
    opacity: 1;
    transition: all .6s ease-in-out;
    transform: translateY(0);
  }
  .dedicatedteamscompareparttwocontain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .dedicatedteamscompareparttwotitle{
    padding: 0 0 80px;
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
  }
  .dedicatedteamscompareparttwocontent{
    font-size: 15px;
    font-weight: bold;
    line-height: 1.7;
    margin-bottom: 20px;
    text-align: center;
    padding: 0 335px 0;
  }
  .dedicatedteamscompareparttwoteamandpriceborder{
    width: 1440px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
  }
  .dedicatedteamscompareparttwoteamborder,
  .dedicatedteamscompareparttwopriceborder{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 40px;
  }
  .dedicatedteamscompareparttwoteamtitle,
  .dedicatedteamscompareparttwopricetitle{
    color: #005592;
    font-size: 1.74rem;
    line-height: 2.5;
    font-weight: bolder;
  }
  .dedicatedteamscompareparttwoteamcontent,
  .dedicatedteamscompareparttwopricecontent{
    text-align: center;
    font-weight: bold;
    line-height: 1.8;
    margin-bottom: 45px;
  }
  .dedicatedteamscompareparttwoteamintroductionborder,
  .dedicatedteamscompareparttwopriceintroductionborder{
    display: flex;
    flex-direction: column;
    padding: 0 50px;
  }
  .dedicatedteamscompareparttwoteamintroductions,
  .dedicatedteamscompareparttwopriceintroductions{
    padding: 25px 35px;
    position: relative;
  }
  .dedicatedteamscompareparttwoteamintroductions:nth-child(1),
  .dedicatedteamscompareparttwoteamintroductions:nth-child(3),
  .dedicatedteamscompareparttwopriceintroductions:nth-child(1),
  .dedicatedteamscompareparttwopriceintroductions:nth-child(3){
    border-left: 3px solid cornflowerblue;
    border-bottom: 3px solid cornflowerblue;
  }
  .dedicatedteamscompareparttwoteamintroductions:nth-child(2),
  .dedicatedteamscompareparttwopriceintroductions:nth-child(2){
    border-right: 3px solid cornflowerblue;
    border-bottom: 3px solid cornflowerblue;
  }
  .dedicatedteamscompareparttwoteamintroductionnumber,
  .dedicatedteamscompareparttwopriceintroductionnumber{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, 0);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #0272B1;
    color: white;
    font-weight: bold;
  }
  .dedicatedteamscompareparttwoteamintroductiontitle,
  .dedicatedteamscompareparttwopriceintroductiontitle{
    color: cornflowerblue;
    font-size: 1.5rem;
    line-height: 2.5;
    font-weight: bolder;
  }
  .dedicatedteamscompareparttwoteamintroductioncontent,
  .dedicatedteamscompareparttwopriceintroductioncontent{
    color: #34435E;
    font-weight: bolder;
  }

  .dedicatedteamscompareparttwolink{
    margin-top: 60px;
  }
  .dedicatedteamscompareparttwolinkcontactus{
    background: linear-gradient(to right, #145484 50%, #1868a4 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    font-weight: bolder;
    padding: 15px 50px;
    border-radius: 30px;
    transition: all .5s ease-out;
    color: white;
  }
  .dedicatedteamscompareparttwolinkcontactus:hover{
    background-position: left bottom;
  }
  .dedicatedteamscompareparttwolinkcontactus:not(:hover){
    background-position: right bottom;
  }
  @media screen and (max-width: 1400px) {
    .dedicatedteamscompareparttwoteamandpriceborder{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    .dedicatedteamscompareparttwotitle{
      padding-bottom: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    .dedicatedteamscompareparttwotitle{
      font-size: 3rem;
    }
    .dedicatedteamscompareparttwocontent {
      padding: 0 100px;
    }
  }
  @media screen and (max-width: 992px) {
    .dedicatedteamscompareparttwotitle{
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 786px) {
    .dedicatedteamscompareparttwotitle{
      font-size: 2rem;
    }
    .dedicatedteamscompareparttwoteamtitle, 
    .dedicatedteamscompareparttwopricetitle {
      font-size: 1.5rem;
    }
    .dedicatedteamscompareparttwocontent {
      padding: 0 50px;
    }
    .dedicatedteamscompareparttwoteamcontent,
    .dedicatedteamscompareparttwopricecontent{
      width: 80%;
      padding: 0 50px;
    }
    .dedicatedteamscompareparttwoteamintroductions,
    .dedicatedteamscompareparttwopriceintroductions{
      width: 350px;
    }
  }
  @media screen and (max-width: 576px) {
    .dedicatedteamscompareparttwoteamcontent,
    .dedicatedteamscompareparttwopricecontent{
      width: 60%;
    }
    .dedicatedteamscompareparttwoteamintroductions,
    .dedicatedteamscompareparttwopriceintroductions{
      width: 320px;
    }
  }
</style>