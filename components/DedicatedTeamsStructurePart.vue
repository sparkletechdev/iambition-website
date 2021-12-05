<template>
  <div id="dedicatedteamsstructurepart" class="dedicatedteamsstructurepart dedicatedteamsstructurepartactive">
    <div class="dedicatedteamsstructurecontain">
      <h1 id="dedicatedteamsstructuretitle" class="dedicatedteamsstructuretitle dedicatedteamsstructuretitleactive">
        What is a dedicated project team structure ?
      </h1>
      <p id="dedicatedteamsstructurecontent" class="dedicatedteamsstructurecontent dedicatedteamsstructurecontentactive">
        When you hire a dedicated team, you hire the services of an autonomously-managed team of engineers that will take care of your project. As such, a dedicated team needs a complete structure that can tackle the project as per your requirements and following your feedback. To do so, these teams usually include key roles that lead the project to successful completion. These include:
      </p>
      <div id="dedicatedteamsstructuremiddleborder" class="dedicatedteamsstructuremiddleborder dedicatedteamsstructuremiddleborderactive">
        <div v-for="(item,index) in data" :key="index" class="dedicatedteamsstructuremiddle">
          <div class="dedicatedteamsstructuremiddlecoverborder">
            <h1 class="dedicatedteamsstructuremiddlecovertitle">
              {{item.title}}
            </h1>
            <img :src="item.img" class="dedicatedteamsstructuremiddlecover">
          </div>
          <div class="dedicatedteamsstructuremiddletitleborder">
            <h1 class="dedicatedteamsstructuremiddletitle">
              {{item.title}}
            </h1>
            <p class="dedicatedteamsstructuremiddlecontent">
              {{item.content}}
            </p>
          </div>
        </div>
      </div>
      <div class="dedicatedteamsstructurebottomborder">
        <p class="dedicatedteamsstructurebottomcontent">
          At BairesDev, we personalize our dedicated teams to your unique business needs, which means that this structure can look different for your project. Our main goal, however, remains the same – to gather the perfect team to create the digital solution you’re looking for.
        </p>
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
          title: "Frontend engineers",
          content: "Responsible for developing the “visible” part of the project, these professionals are the ones that code and test user interface elements and functionality.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamsfrontend.jpg"
        },
        {
          title: "Backend engineers",
          content: "These are the experts that take care of everything that happens backstage. In other words, they focus on developing the inner logic and the background components.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamsbackend.jpg"
        },
        {
          title: "QA engineers",
          content: "These professionals are in charge of the quality of the entire development lifecycle. They don’t just ensure that the product is as bug-free as possible but also that the processes used to build it have optimal quality",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamsqaengineer.jpg"
        },
        {
          title: "UX/UI designers",
          content: "They are responsible for ensuring that the user experience is intuitive, simple, and engaging.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamsuiuxdevelopers.jpg"
        },
        {
          title: "IT consultant",
          content: "They are responsible for ensuring that the user experience is intuitive, simple, and engaging.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamsitconsultant.jpg"
        },
        {
          title: "Project managers",
          content: "The leaders of the development team, they initiate, plan, design, execute, and monitor the entire development process.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteamsprojectmanager.jpg"
        },
      ],
    }
  },
  mounted() {
    this.dedicatedteamsstructurepart();
  },
  methods: {
    dedicatedteamsstructurepart(){
      window.addEventListener("scroll", () => {
        const dedicatedteamsstructurepart = document.getElementById("dedicatedteamsstructurepart");
        const dedicatedteamsstructuretitle = document.getElementById("dedicatedteamsstructuretitle");
        const dedicatedteamsstructurecontent = document.getElementById("dedicatedteamsstructurecontent");
        const dedicatedteamsstructuremiddleborder = document.getElementById("dedicatedteamsstructuremiddleborder");
        if (Math.abs(dedicatedteamsstructurepart.offsetTop - scrollY) > (window.innerHeight / 10) &&
            (window.innerHeight) > Math.abs(dedicatedteamsstructurepart.offsetTop - scrollY)) {
          dedicatedteamsstructurepart.classList.remove("dedicatedteamsstructurepartactive");
          dedicatedteamsstructuretitle.classList.remove("dedicatedteamsstructuretitleactive");
          dedicatedteamsstructurecontent.classList.remove("dedicatedteamsstructurecontentactive");
          dedicatedteamsstructuremiddleborder.classList.remove("dedicatedteamsstructuremiddleborderactive");
        }
      })
    },
  },
}
</script>

<style>
  .dedicatedteamsstructurepart {
    width: 100%;
    background: #edecea;
    display: flex;
    justify-content: center;
    padding: 100px 0 100px;
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out;
  }
  .dedicatedteamsstructurepartactive{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamsstructuretitle{
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 40px;
    padding: 0 335px 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out .3s;
  }
  .dedicatedteamsstructuretitleactive{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamsstructurecontent {
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
  .dedicatedteamsstructurecontentactive{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamsstructuremiddleborder {
    width: 100%;
    display: flex;
    margin: 70px 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out .7s;
  }
  .dedicatedteamsstructuremiddleborderactive{
    opacity: 0;
    transform: translateY(100px);
  }
  .dedicatedteamsstructuremiddle {
    /* border: 1px solid black; */
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16.66%;
    margin: 0 5px;
    position: relative;
    background: linear-gradient(to left, rgba(57, 114, 186,.6) 50%, rgba(0, 0, 0, 0) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    opacity: .85;
  }
  .dedicatedteamsstructuremiddle:hover {
    transition: all .4s ease-in-out .5s;
    background-position: right bottom;
  }
  .dedicatedteamsstructuremiddle:not(:hover) {
    transition: all .4s ease-in-out;
    background-position: left bottom;
  }
  .dedicatedteamsstructuremiddlecoverborder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 1;
  }
  .dedicatedteamsstructuremiddle:hover .dedicatedteamsstructuremiddlecoverborder {
    transition: all .35s ease-in-out;
    transform: rotateY(90deg);
    opacity: 0;
  }
  .dedicatedteamsstructuremiddle:not(:hover) .dedicatedteamsstructuremiddlecoverborder {
    transition: all .35s ease-in-out .45s;
    transform: rotateY(0deg);
    opacity: 1;
  }
  .dedicatedteamsstructuremiddlecovertitle{
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-weight: bold;
    z-index: 2;
    font-size: 20px;
    white-space: nowrap;
    text-align: center;
  }
  .dedicatedteamsstructuremiddlecover{
    filter: blur(2px);
    z-index: 1;
  }
  .dedicatedteamsstructuremiddletitleborder{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-bottom: 30px;
    transform: translateX(-100%);
    transition: all .6s ease-in-out .5s;
  }
  .dedicatedteamsstructuremiddle:hover .dedicatedteamsstructuremiddletitleborder{
    transform: translateX(0);
  }
  .dedicatedteamsstructuremiddle:not(:hover) .dedicatedteamsstructuremiddletitleborder{
    transform: translateX(-100%);
    transition: all .6s ease-in-out .1s;
  }
  .dedicatedteamsstructuremiddletitle{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 7;
  }
  .dedicatedteamsstructuremiddlecontent{
    text-align: center;
    padding: 0 5px;
    line-height: 2;
  }

  .dedicatedteamsstructurebottomcontent{
    font-size: 15px;
    font-weight: bold;
    line-height: 1.7;
    margin-bottom: 20px;
    text-align: center;
    padding: 0 335px 0;
  }
  @media screen and (max-width: 1800px) {
    .dedicatedteamsstructurecontain{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .dedicatedteamsstructuretitle{
      padding: 0 250px;
    }
    .dedicatedteamsstructuremiddleborder{
      width: 950px;
      flex-wrap: wrap;
    }
    .dedicatedteamsstructuremiddle{
      width: 305px;
      margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 1200px) {
    .dedicatedteamsstructuretitle {
      padding: 0 100px;
      font-size: 3rem;
    }
    .dedicatedteamsstructurecontent{
      padding: 0 100px;
    }
    .dedicatedteamsstructuremiddleborder {
      margin-bottom: 40px;
    }
    .dedicatedteamsstructurebottomcontent {
      padding: 0 100px;
    }
  }
  @media screen and (max-width: 992px) {
    .dedicatedteamsstructuretitle {
      font-size: 2.5rem;
    }
    .dedicatedteamsstructuremiddleborder{
      width: 650px;
    }
  }
  @media screen and (max-width: 786px) {
    .dedicatedteamsstructuretitle {
      font-size: 2rem;
    }
    .dedicatedteamsstructuremiddleborder{
      width: 320px;
    }
  }
  @media screen and (max-width: 576px) {
    .dedicatedteamsstructurepart {
      padding: 50px 0;
    }
    .dedicatedteamsstructuretitle,
    .dedicatedteamsstructurecontent,
    .dedicatedteamsstructurebottomcontent {
      padding: 0 50px;
    }
  }
</style>