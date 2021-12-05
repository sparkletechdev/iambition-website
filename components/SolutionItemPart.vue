<template>
  <div class="solutionitemborder">
    <div class="solutionitemitemborder">
      <div v-for="(item,index) in data" :key="index" class="solutionitemcontain">
        <div class="solutionitemimage solutionitemimageactive">
          <img :src="item.img">
        </div>
        <div class="solutionitem solutionitemaactive">
          <h1 class="solutionitemtitle solutionitemtitleactive">
            {{item.title}}
          </h1>
          <h3 class="solutionitemsubtitle solutionitemsubtitleactive">
            {{item.subtitle}}
          </h3>
          <p class="solutionitemcontent solutionitemcontentactive">
            {{item.content}}
          </p>
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
          title: "INSURANCE SECTOR",
          subtitle: "Enabling Insurance Companies to deliver Excellent Customer Experience with ‘Next-best-action’ Automation",
          content:"When we talk about digital transformation in the Insurance industry, customer data is undoubtedly the source that enables analytics, artificial intelligence, and automation. So, whether it is providing return on investment, data security, fraud prevention or increasing ROI, Tuple’s predictive AI enables automation of visual insurance analytics to help insurers develop new product offerings, magnify their revenue & map evolving customer expectations.",
          img: "https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/solutioninsurance.jpg"
        },
        {
          title:"BANKING SECTOR",
          subtitle: "Transforming the Traditional Security Defences of Banking Sector with A.I powered Predictive Analytics",
          content:"To fasten up the pace of innovation, banking sector needs to dissolve the inaccessibility to data silos. The foremost challenge banks face is associated with accessing, processing and analysing the huge data. Tuple’s data driven applications help them with a real-time overview of every customer’s activity. We use customer data and analytics to help them redefine the customer experience through new level of customer insights.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/solutionbanking.jpg"
        },
        {
          title:"MANUFACTURING SECTOR",
          subtitle: "Leveraging Advance Data analytics to drive new values with real-time, actionable insights.",
          content:"Manufacturing industries need to gain new visibility by adapting to the disrupting technologies that are led by automation & big data. Tuple offers automated solutions that leverage machine learning, data from IoT & predictive analytics to help them improve throughput in real-time, enhance their supply operations & to optimize the manufacturing processes.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/solutionmanufacturing.jpg"
        },
        {
          title:"RETAIL SECTOR",
          subtitle: "Accelerating retail journey to AI with automation that makes shopping experience more efficient",
          content:"The retail sector has huge data siloed from their customers’ shopping experiences alone. Analysing that big data is a challenge for many businesses. Tuple’s predictive analysis helps businesses overcome the lower conversion rates & deliver targeted shopping experience. The AI powered conversational interface Nova, enables them to deliver interactive customer experience in real-time.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/solutionretail.jpg"
        },
        {
          title:"TELECOM SECTOR",
          subtitle: "Creating next-gen customer experiences by leveraging AI for faster & more accurate decisions",
          content:"The need to simplify operations is high in telecom sector & businesses need a consolidated view of their constantly changing customer data, a unified view for network management & faster resolution of issues. Tuple maximizes the operational effectiveness with its AI and advanced machine learning embedded applications that thrive on big data. Businesses employ our automation for efficient & faster resolution of network issues.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/solutiontelecom.jpg"
        },
        {
          title:"BLOCKCHAIN",
          subtitle: "Creating next-gen customer experiences by leveraging AI for faster & more accurate decisions",
          content:"Blockchain has practically rewired the technology sphere and its evolution has practically transformed many other sectors including health, IT, food & finance. With the adoption of this technology, the amount of transactional data accumulated is huge. Tuple’s advanced analytics, businesses can process & analyse the blockchain data for accurate predictions, enhanced security & improved scalability.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/solutionblockchain.jpg"
        },
      ],
    }
  },
  mounted() {
    this.companygoingscrollitem()
  },
  methods: {
    companygoingscrollitem(){
      if ( window.location.href === "http://localhost:3010/SOLUTIONS") {
        window.addEventListener("scroll", function(){
          const solutionitemcontain = document.getElementsByClassName("solutionitemcontain");
          const solutionitemimage = document.getElementsByClassName("solutionitemimage");
          const solutionitem = document.getElementsByClassName("solutionitem");
          const solutionitemtitle = document.getElementsByClassName("solutionitemtitle");
          const solutionitemsubtitle = document.getElementsByClassName("solutionitemsubtitle");
          const solutionitemcontent = document.getElementsByClassName("solutionitemcontent");

          solutionitemcontain.forEach((value,index) => {
            if (value.offsetTop - scrollY > 500 && value.offsetTop - scrollY < 650) {
              solutionitemimage[index].classList.remove("solutionitemimageactive");
              solutionitem[index].classList.remove("solutionitemaactive");
              solutionitemtitle[index].classList.remove("solutionitemtitleactive");
              solutionitemsubtitle[index].classList.remove("solutionitemsubtitleactive");
              solutionitemcontent[index].classList.remove("solutionitemcontentactive");
            }
          });
        })
      }
    }
  },
}
</script>

<style>
  .solutionitemborder{
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;
  }
  .solutionitemitemborder{
    padding: 0 250px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .solutionitemcontain{
    display: flex;
    justify-content: space-between;
    width: 1140px;
    padding-top: 150px;
  }
  .solutionitemimage{
    width: 49%;
    max-height: 360px;
    overflow: hidden;
    opacity: 1;
    transform: translateX(0);
    transition: all .6s ease-in-out;
  }
  .solutionitemimage:hover{
    box-shadow: 5px 5px 10px 5px rgb(31 110 159 / 20%);
    transition: all .1s ease;
  }
  .solutionitemcontain:nth-child(2) > .solutionitemimage,
  .solutionitemcontain:nth-child(4) > .solutionitemimage,
  .solutionitemcontain:nth-child(6) > .solutionitemimage{
    order: 2;
  }
  .solutionitem{
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    transform: translateX(0);
    transition: all .6s ease-in-out;
  }
  .solutionitemimageactive{
    opacity: 0;
    transform: translateX(-270px);
  }
  .solutionitemaactive{
    opacity: 0;
    transform: translateX(270px);
  }
  .solutionitemtitle{
    color: #005592;
    font-size: 1.74rem;
    line-height: 2.5;
    font-weight: bolder;
    position: relative;
    opacity: 1;
    transform: translateX(0);
    transition: all 1s ease;
  }
  .solutionitemtitleactive{
    opacity: 0;
    transform: translateX(70px);
  }
  .solutionitemtitle::before{
    position: absolute;
    content: "";
    width: 83px;
    height: 3px;
    background: #005592;
  }
  .solutionitemsubtitle{
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 15px;
    opacity: 1;
    transform: translateX(0);
    transition: all 1.2s ease;
  }
  .solutionitemsubtitleactive{
    opacity: 0;
    transform: translateX(90px);
  }
  .solutionitemcontent{
    font-size: 16px;
    font-weight: lighter;
    margin: 0 0 15px;
    opacity: 1;
    transform: translateX(0);
    transition: all 1.2s ease;
  }
  .solutionitemcontentactive{
    opacity: 0;
    transform: translateX(120px);
  }
</style>