<template>
  <div class="staffaugmentationextratalentpart">
    <div class="staffaugmentationextratalentpartcontain">
      <h1 class="staffaugmentationextratalenttitle">
        The Extra Talent Needed to Boost Your Projects
      </h1>
      <div class="staffaugmentationextratalentcontentborder">
        <div class="staffaugmentationextratalentcontentleftborder">
          <p v-for="(item,index) in data" :key="index" class="staffaugmentationextratalentcontent">
            {{item.content}}
          </p>
        </div>
        <div class="staffaugmentationextratalentcontentrightborder">
          <img src="https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/staffaugmentationextratalentpart.jpg" class="staffaugmentationextratalentcontentrightimage" >
        </div>
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
          content:"Having the right-sized team is critical to any successful project and, as they enter new phases of maturity, sometimes it’s necessary to add new members who are just right for the job. Our IT staffing services provide the speed, professional acumen and flexibility your team needs to scale quickly and complete development on time."
        },
        {
          content:"Your Extended Team works as part of your local team, attending your regular daily meetings and reporting directly to your managers, proving to be a real competitive advantage for your business."
        },
        {
          content:"Our IT staffing services are available for every type of project. No matter how simple or complex: from prototyping to full-scale development of desktop, mobile or web applications, testing and systems management."
        },
        {
          content:"BairesDev’s Extended Team services are a proven, reliable and cost-effective way for our clients to increase the size and productivity of their internal development teams in minimal time. Comprised of Top 1% of IT Professionals that integrate with your current workflow, our dedicated software engineers are the best option to rapidly build up a conveniently located, highly qualified, creative, and experienced team."
        },
      ],
    }
  },
}
</script>

<style>
  .staffaugmentationextratalentpart{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 335px 100px;
  }
  .staffaugmentationextratalentpartcontain {
    display: flex;
    flex-direction: column;
  }
  .staffaugmentationextratalenttitle {
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 100px;
  }
  .staffaugmentationextratalentcontentborder {
    display: flex;
  }
  .staffaugmentationextratalentcontentleftborder {
    width: 50%;
    order: 2;
  }
  .staffaugmentationextratalentcontent {
    font-size: 15px;
    font-weight: bold;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .staffaugmentationextratalentcontentrightborder {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
  }
  .staffaugmentationextratalentcontentrightimage {
    /* border: 1px solid black; */
    width: 70%;
    border-radius: 20px;
  }
  .staffaugmentationextratalentcontentrightimage:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    opacity: .8;
    transition: all .4s ease-in-out;
  }
  .staffaugmentationextratalentcontentrightimage:not(:hover){
    box-shadow: none;
    opacity: 1;
    transition: all .4s ease-in-out;
  }
  @media screen and (max-width: 1500px) {
    .staffaugmentationextratalentpart{
      padding: 100px 150px 100px;
    }
  }
  @media screen and (max-width: 1200px) {
    .staffaugmentationextratalentpart{
      padding: 100px 50px 100px;
    }
    .staffaugmentationextratalenttitle{
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 992px) {
    .staffaugmentationextratalenttitle{
      margin-bottom: 50px;
    }
    .staffaugmentationextratalentcontentborder{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .staffaugmentationextratalentcontentleftborder{
      width: 90%;
    }
    .staffaugmentationextratalentcontentrightborder{
      margin-bottom: 45px;
      width: 90%;
    }
  }
  @media screen and (max-width: 786px) {
    .staffaugmentationextratalenttitle{
      font-size: 2rem;
    }
    .staffaugmentationextratalentcontentrightimage{
      width: 90%;
    }
  }
  @media screen and (max-width: 576px) {
    .staffaugmentationextratalentpart{
      padding: 50px 10px 50px;
    }
  }
</style>