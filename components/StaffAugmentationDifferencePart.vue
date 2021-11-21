<template>
  <div id="staffaugmentationdifferencepart" class="staffaugmentationdifferencepart staffaugmentationdifferencepartactive">
    <div class="staffaugmentationdifferencecontain">
      <h1 id="staffaugmentationdifferencetitle" class="staffaugmentationdifferencetitle staffaugmentationdifferencetitleactive">
        The Difference Between Staff Augmentation and Delivery Teams
      </h1>
      <div id="staffaugmentationdifferencemiddleborder" class="staffaugmentationdifferencemiddleborder staffaugmentationdifferencemiddleborderactive">
        <div v-for="(item,index) in data" :key="index" class="staffaugmentationdifferencecontainer">
          <img :src="item.img" class="staffaugmentationdifferencecontainerimg">
          <div class="staffaugmentationdifferencecontainershadow"></div>
          <h1 class="staffaugmentationdifferencecontainerhovertitle">
            {{item.title}}
          </h1>
          <h1 class="staffaugmentationdifferencecontainertitle">
            {{item.title}}
          </h1>
          <p class="staffaugmentationdifferencecontainercontent">
            {{item.content}}
          </p>
        </div>
      </div>
      <div id="staffaugmentationdifferencelink" class="staffaugmentationdifferencelink staffaugmentationdifferencelinkactive" @click="customerreload()">
        <nuxt-link to="/subPage/Contact Us" class="staffaugmentationdifferencelinkcontactus">
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
          title: "IT Staff Augmentation",
          content: "IT Staff augmentation provides hourly and/or part-time software engineers to support your in-house team’s software development outsourcing cycle as needed. This avoids lengthy sourcing and recruiting processes and facilitates hiring highly-demanded roles that may be needed on a limited basis.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/dedicatedteams.jpg"
        },
        {
          title: "Dedicated Teams",
          content: "An expert autonomous team, typically composed of a PM, SW engineers, QA engineers, and other roles, that is capable of rapidly and efficiently delivering end-to-end technology solutions and value.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/softwareoutsourcingpart.jpg"
        },
      ]
    }
  },
  mounted() {
    this.staffaugmentationdifferencescroll()
  },
  methods: {
    customerreload(){
      if (window.location.href === "http://localhost:3010/subPage/Contact%20Us") {
        setTimeout(()=>{
          window.location.reload();
        },15)
      }
    },
    staffaugmentationdifferencescroll(){
      window.addEventListener("scroll", () => {
        const staffaugmentationdifferencepart = document.getElementById("staffaugmentationdifferencepart");
        const staffaugmentationdifferencetitle = document.getElementById("staffaugmentationdifferencetitle");
        const staffaugmentationdifferencemiddleborder = document.getElementById("staffaugmentationdifferencemiddleborder");
        const staffaugmentationdifferencelink = document.getElementById("staffaugmentationdifferencelink");
        if (Math.abs(staffaugmentationdifferencepart.offsetTop - scrollY) > (window.innerHeight / 10) &&
            (window.innerHeight) > Math.abs(staffaugmentationdifferencepart.offsetTop - scrollY)) {
          staffaugmentationdifferencepart.classList.remove("staffaugmentationdifferencepartactive");
          staffaugmentationdifferencetitle.classList.remove("staffaugmentationdifferencetitleactive");
          staffaugmentationdifferencemiddleborder.classList.remove("staffaugmentationdifferencemiddleborderactive");
          staffaugmentationdifferencelink.classList.remove("staffaugmentationdifferencelinkactive");
        }
      })
    }
  },
  
}
</script>

<style>
  .staffaugmentationdifferencepart{
    padding: 80px 300px;
    width: 100%;
    background: #edecea;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: translateY(0);
    transition: all .6s ease-in-out;
    opacity: 1;
  }
  .staffaugmentationdifferencepartactive{
    transform: translateY(200px);
    opacity: 0;
  }
  .staffaugmentationdifferencecontain{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .staffaugmentationdifferencetitle{
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 100px;
    transform: translateY(0);
    transition: all .6s ease-in-out .3s;
    opacity: 1;
  }
  .staffaugmentationdifferencetitleactive{
    transform: translateY(200px);
    opacity: 0;
  }
  .staffaugmentationdifferencemiddleborder{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 2%;
    transform: translateY(0);
    transition: all .6s ease-in-out .5s;
    opacity: 1;
  }
  .staffaugmentationdifferencemiddleborderactive{
    transform: translateY(200px);
    opacity: 0;
  }
  .staffaugmentationdifferencecontainer {
    overflow: hidden;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
    position: relative;
  }
  .staffaugmentationdifferencecontainerimg {
    position: absolute;
    width: 100%;
    object-fit: fill;
    object-position: center center;
    z-index: 1;
    transform: scale(1.2,1.2);
    transition: all .6s ease-in-out;
  }
  .staffaugmentationdifferencecontainer:hover .staffaugmentationdifferencecontainerimg{
    transform: scale(1,1);
    cursor: pointer;
  }
  .staffaugmentationdifferencecontainershadow{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(-300px);
    z-index: 1;
    background: rgba(255, 255, 255, .6);
    transition: all .6s ease-in-out;
  }
  .staffaugmentationdifferencecontainer:hover .staffaugmentationdifferencecontainershadow{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .6);
    transform: translateY(0);
  }
  .staffaugmentationdifferencecontainerhovertitle{
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: #c4d6e4;
    font-weight: bold;
    font-size: 1.74rem;
    line-height: 2.5;
    z-index: 2;
    width: 100%;
    text-align: center;
    text-shadow: black 0.1em 0.1em 0.7em,black 0.1em 0.1em 0.7em;
    transition: all .4s ease-in-out;
  }
  .staffaugmentationdifferencecontainer:hover .staffaugmentationdifferencecontainerhovertitle{
    opacity: 0;
  }
  .staffaugmentationdifferencecontainertitle{
    color: #005592;
    font-size: 1.74rem;
    line-height: 2.5;
    font-weight: bolder;
    opacity: 0;
    transform: translateY(300px);
    transition: all .6s ease-in-out;
  }
  .staffaugmentationdifferencecontainer:hover .staffaugmentationdifferencecontainertitle{
    transform: translateY(0);
    z-index: 2;
    opacity: 1;
  }
  .staffaugmentationdifferencecontainer:not(:hover) .staffaugmentationdifferencecontainertitle{
    transform: translateY(300px);
    z-index: 0;
    opacity: 0;
  }
  .staffaugmentationdifferencecontainercontent{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5em;
    margin-bottom: 30px;
    opacity: 0;
    transform: translateY(300px);
    transition: all .6s ease-in-out;
  }
  .staffaugmentationdifferencecontainer:hover .staffaugmentationdifferencecontainercontent{
    transform: translateY(0);
    z-index: 2;
    opacity: 1;
  }
  .staffaugmentationdifferencecontainer:not(:hover) .staffaugmentationdifferencecontainercontent{
    transform: translateY(300px);
    z-index: 0;
    opacity: 0;
  }

  .staffaugmentationdifferencelink{
    margin: 60px 0;
    transform: translateY(0);
    transition: all .6s ease-in-out .7s;
    opacity: 1;
  }
  .staffaugmentationdifferencelinkactive{
    transform: translateY(200px);
    opacity: 0;
  }
  .staffaugmentationdifferencelinkcontactus{
    background: linear-gradient(to right, #145484 50%, #1868a4 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    font-weight: bolder;
    padding: 15px 50px;
    border-radius: 30px;
    transition: all .5s ease-out;
    color: white;
  }
  .staffaugmentationdifferencelinkcontactus:hover{
    background-position: left bottom;
  }
  .staffaugmentationdifferencelinkcontactus:not(:hover){
    background-position: right bottom;
  }
</style>