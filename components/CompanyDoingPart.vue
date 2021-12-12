<template>
  <div class="companydoingpartborder">
    <div class="companydoingtitleborder">
      <h1 class="companydoingtitle">
        What We Do
      </h1>
    </div>
    <div class="companydoingitemborder">
      <div v-for="(item , index) in  data"
           :key="index" 
           class="companydoingitem">
        <img :src="item.img" class="companydoingitembackground">
        <div class="companydoingitembluebackground"></div>
        <div class="companydoingitemcontent">
          <h1 class="companydoingitemcontenttitle">
            {{item.title}}
          </h1>
          <p class="companydoingitemcontentsubtitle">
            {{item.subtitle}}
          </p>
        </div>
        <div class="companydoingitemtitleborder">
          <h1 class="companydoingitemtitle">
            {{item.title}}
          </h1>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title:"Creating data-driven applications for end-users",
          subtitle: "We work with business leaders to create products which can consume data & data-driven technologies to deliver values to end-consumers. We handle end-to-end development of the applications from data collection, processing, analysis & delivery. We use the most cutting-edge methods like Distributed Computing, Statistical Modeling, Machine Learning & Customer-Centric Design behind the hood. We aim to develop simple interfaces for our partners to utilize & propel their decisions in the right direction.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companydoingone.jpg"
        },
        {
          title:"Reaching the heart of the problem",
          subtitle: "We work with our partners very closely and consult them about their pain points, aspirations, priorities, and KPIs. We use first principles to think about situations from different angles. We plan the process until we know exactly where the problem lies so that we have a clear plan of action. The only thing left thereafter is perfect execution.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companydoingtwo.jpg"
        },
        {
          title:"Treat Data As a piece of art, Make no assumptions",
          subtitle: "We believe that data alone has the power to bring the truth forward. We make no assumptions about the problem that we are trying to solve and strive to collect as much information as possible. That's why we have designed our platform to consume large amounts of data from various sources without hassle. Our partners define where they want to reach and we define how.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companydoingthree.jpg"
        },
        {
          title:"Automating solutions to stand the test of time",
          subtitle: "We don't work on one-off projects. We don't believe in delivering part of the value. We don't believe in just getting our work done and move on. We create solutions which can be used over and over again without difficulties. The only input that our solutions need to deliver promised value is human creativity in the form of domain inputs.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companydoingfour.jpg"
        },
        {
          title:"Erecting a culture driven by passion and values",
          subtitle: "We treat the workplace as a place of worship. We believe that if people own some tasks, they bring additional value to our clients. We believe in creating communities which are living organisms so that it thrives even without the founders. We believe that innovation is the only true value that can make this world a better place. That's why we provide a comfortable and respectful environment so that people can find purpose in the work that they are doing.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companydoingfive.jpg"
        },
      ],
    }
  },
}
</script>

<style>
  .companydoingpartborder{
    border-top: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .companydoingtitle{
    padding: 100px 200px 50px;
    font-size: 1.75rem;;
    font-weight: bold;
  }
  .companydoingitemborder{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .companydoingitem{
    /* border: 1px solid black; */
    position: relative;
    overflow: hidden;
    max-width: 370px;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2%;
  }
  .companydoingitembluebackground{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: all .4s ease;
    background: linear-gradient(180deg, rgba(226,226,226,0.1) 0%, rgba(255,255,255,.1) 65%, rgba(255,255,255,.1) 66%, rgba(255,253,253,.1) 70%, rgba(198,196,196,.1) 75%, rgba(131,131,131,1) 80%, rgba(0,0,0,0.7063200280112045) 85%);
  }
  .companydoingitemcontent{
    /* border: 1px solid black; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    transition: all .4s ease;
    opacity: 0;
  }
  .companydoingitem:hover .companydoingitembluebackground{
    /* background: none; */
    background-color: rgba(57, 115, 186, 0.85);
  }
  .companydoingitem:hover .companydoingitemcontent{
    opacity: 1;
  }
  .companydoingitembackground{
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 0;
  } 
  .companydoingitemcontenttitle{
    text-align: center;
    z-index: 1;
    color: white;
    line-height: 1.5;
    margin-bottom: 25px;
  }
  .companydoingitemcontentsubtitle{
    text-align: center;
    z-index: 1;
    color: white;
  }
  .companydoingitemtitleborder{
    z-index: 1;
  }
  .companydoingitemtitle{
    text-align: center;
    z-index: 1;
    color: white;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 1300px) {
    .companydoingtitle{
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 992px) {
    .companydoingtitle{
      padding: 10% 0;
    }
  }
</style>