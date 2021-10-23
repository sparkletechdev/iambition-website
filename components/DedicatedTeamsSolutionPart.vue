<template>
  <div class="dedicatedteamssolutionpartborder">
    <div class="dedicatedteamssolutionpartcontain">
      <h1 class="dedicatedteamssolutiontitle">
        An Autonomous Expert Team that Delivers Technology Solutions and Value
      </h1>
      <div class="dedicatedteamssolutioncontentborder">
        <div class="dedicatedteamssolutioncontentleftborder">
          <p v-for="(item,index) in data" :key="index" class="dedicatedteamssolutioncontent">
            {{item.content}}
          </p>
        </div>
        <div class="dedicatedteamssolutioncontentrightborder">
          <img src="https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamssolutionpart.png" class="dedicatedteamssolutioncontentrightimage" >
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
          content:"Sparkle provides all the roles needed to complete the team you require. This team is typically composed by a PM, SW engineers, QA engineers, and other roles that are defined for each specific project. Management is conducted jointly by Sparkle Scrum Master / Engineering Manager and Client’s Product Owner."
        },
        {
          content:"All our team members are 100% bilingual and have 10+ years of experience in their field. Our rigorous selection process ensures that we only work with the experienced Top 1% of IT talent."
        },
        {
          content:"The Dedicated Team works autonomously, but communicates and reports status as often as requested by you. Using the Agile Methodology, it relies heavily on feedback and discoveries made during testing to shape its design and functions."
        },
        {
          content:"Our expert Dedicated Teams work swiftly in sprints to efficiently attack the backlog while maintaining the flexibility to re-prioritize and adjust to deliver the best possible product."
        },
        {
          content:"Applying the highest skilled engineering talent through the dedicated team approach, Sparkle’s Dedicated Teams can start delivering technology solutions and value immediately since teams are quickly formed to implement and execute agreed plans."
        }
      ],
    }
  },
}
</script>

<style>
  .dedicatedteamssolutionpartborder {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 335px 100px;
  }
  .dedicatedteamssolutionpartcontain {
    display: flex;
    flex-direction: column;
  }
  .dedicatedteamssolutiontitle {
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 100px;
  }
  .dedicatedteamssolutioncontentborder {
    display: flex;
  }
  .dedicatedteamssolutioncontentleftborder {
    width: 50%;
  }
  .dedicatedteamssolutioncontent {
    font-size: 15px;
    font-weight: bold;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .dedicatedteamssolutioncontentrightborder {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dedicatedteamssolutioncontentrightimage {
    /* border: 1px solid black; */
    width: 70%;
    border-radius: 20px;
  }
  .dedicatedteamssolutioncontentrightimage:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    opacity: .8;
    transition: all .4s ease-in-out;
  }
  .dedicatedteamssolutioncontentrightimage:not(:hover){
    box-shadow: none;
    opacity: 1;
    transition: all .4s ease-in-out;
  }
</style>