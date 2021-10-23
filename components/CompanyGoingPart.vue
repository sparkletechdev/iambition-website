<template>
  <div class="companygoingpartborder">
    <div class="companygoingcontain">
      <div class="companygoingtitleborder">
        <h1 class="companygoingtitle">
          Where Are We Going ?
        </h1>
        <p class="companygoingsubtitle">
          Tuple is being deployed by organizations across the globe for their most critical operations. Businesses are finding their best customers, designing the best customer experiences and developing exciting new products with Tuple.
        </p>
      </div>
      <div class="companygoingitemborder">
        <div v-for="(item,index) in data" :key="index" class="companygoingitemcontain">
          <div class="companygoingitemimage companygoingitemimageactive">
            <img :src="item.img">
          </div>
          <div class="companygoingitem companygoingitemaactive">
            <h1 class="companygoingitemtitle companygoingitemtitleactive">
              {{item.title}}
            </h1>
            <p class="companygoingitemcontent companygoingitemcontentactive">
              {{item.subtitle}}
            </p>
          </div>
        </div>
      </div>
      <div class="companygoingclientsborder">
        <div>
          <p class="companygoingclientscontent">
            We are working with leading organizations to prepare them for a future where utilizing the data is a necessity. We are designing products which can withstand digital disruption and keep bringing value to the companies willing to change with time.
          </p>
        </div>
        <div ref="companygoingclients" class="companygoingclients" @click="customerreload()">
          <nuxt-link to="/CUSTOMERS" class="companygoingclientsbutton">
            Meet Our Clients
          </nuxt-link>
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
          title:"Financial Services",
          subtitle: "Financial Services are finding ways to collate their data at a single location so that they have a real-time overview of all the customer activity. It is allowing them to cater to the preferences of their consumer and keep a close watch on the changing digital landscape.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingone.jpg"
        },
        {
          title:"Retailers",
          subtitle: "Retailers are innovating with the check-out technologies so that their customers can have a hassle-free experience. The industry is looking at modern data-driven technologies to create unique experiences for the consumers and fight the onslaught of e-commerce. They are refining their processes of payments, marketing, and inventory management.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingtwo.jpg"
        },
        {
          title:"Manufacturing",
          subtitle: "Manufacturing has not been an early adopter of the technology but they are opening their eyes to the apparent truth. Organizations are automating the way they cater their customer needs by refining the process of quotation management, deploying media listening to generate leads and recommendation engines to optimize lifecycle management of the customers.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingthree.jpg"
        },
        {
          title:"Telecom",
          subtitle: "Telecom sector is creating Intelligent Sales and Marketing engines to enhance the process of customer acquisition, retention, cross-sell and up-sell opportunities.",
          img:"https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/companygoingfour.jpg"
        },
      ],
    }
  },
  mounted() {
    this.companygoingscrollitem()
  },
  methods: {
    customerreload(){
      if (window.location.href === "http://localhost:3010/CUSTOMERS") {
        setTimeout(()=>{
          window.location.reload();
        },15)
      }
    },
    companygoingscrollitem(){
      if ( window.location.href === "http://localhost:3010/COMPANY"  || 
           window.location.href === "http://localhost:3010/subPage/About%20Us") {
        window.addEventListener("scroll", function(){
          const companygoingitemcontain = document.getElementsByClassName("companygoingitemcontain");
          const companygoingitemimage = document.getElementsByClassName("companygoingitemimage");
          const companygoingitem = document.getElementsByClassName("companygoingitem");
          const companygoingitemtitle = document.getElementsByClassName("companygoingitemtitle");
          const companygoingitemcontent = document.getElementsByClassName("companygoingitemcontent");

          companygoingitemcontain.forEach((value,index) => {
            if (value.offsetTop - scrollY > 300 && value.offsetTop - scrollY < 650) {
              companygoingitemimage[index].classList.remove("companygoingitemimageactive");
              companygoingitem[index].classList.remove("companygoingitemaactive");
              companygoingitemtitle[index].classList.remove("companygoingitemtitleactive");
              companygoingitemcontent[index].classList.remove("companygoingitemcontentactive");
            }
          });
        })
      }
    }
  },
}
</script>

<style>
  .companygoingpartborder{
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .companygoingcontain{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .companygoingtitleborder{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 250px 0;
  }
  .companygoingtitle{
    font-size: 1.75rem;
    font-weight: bolder;
    line-height: 1.2;
    margin-bottom: .5rem;
  }
  .companygoingsubtitle{
    font-size: 16px;
    font-weight: lighter;
    text-align: center;
  }
  .companygoingitemborder{
    padding: 0 250px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .companygoingitemcontain{
    display: flex;
    justify-content: space-between;
    width: 1140px;
    padding-top: 150px;
  }
  .companygoingitemimage{
    width: 49%;
    max-height: 360px;
    overflow: hidden;
    opacity: 1;
    transform: translateX(0);
    transition: all .6s ease-in-out;
  }
  .companygoingitemcontain:nth-child(2) > .companygoingitemimage,
  .companygoingitemcontain:nth-child(4) > .companygoingitemimage{
    order: 2;
  }
  .companygoingitem{
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    transform: translateX(0);
    transition: all .6s ease-in-out;
  }
  .companygoingitemimageactive{
    opacity: 0;
    transform: translateX(-270px);
  }
  .companygoingitemaactive{
    opacity: 0;
    transform: translateX(270px);
  }
  .companygoingitemtitle{
    color: #005592;
    font-size: 1.74rem;
    line-height: 2.5;
    font-weight: bolder;
    position: relative;
    opacity: 1;
    transform: translateX(0);
    transition: all 1s ease;
  }
  .companygoingitemtitleactive{
    opacity: 0;
    transform: translateX(70px);
  }
  .companygoingitemtitle::before{
    position: absolute;
    content: "";
    width: 83px;
    height: 3px;
    background: #005592;
  }
  .companygoingitemcontent{
    font-size: 16px;
    font-weight: lighter;
    opacity: 1;
    transform: translateX(0);
    transition: all 1.2s ease;
  }
  .companygoingitemcontentactive{
    opacity: 0;
    transform: translateX(90px);
  }
  .companygoingclientsborder{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 250px;    
  }
  .companygoingclientscontent{
    line-height: 1.5;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 1rem;
  }
  .companygoingclients{
    margin: 50px 0 55px 0;
  }
  .companygoingclientsbutton{
    background:linear-gradient(to right, #145484 50%, #1868a4 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    font-weight: bolder;
    padding: 15px 50px;
    border-radius: 30px;
    transition: all .5s ease-out;
    color: white;
    outline: none;
  }
  .companygoingclientsbutton:hover{
    background-position: left bottom;
    cursor: pointer;
  }
  .companygoingclientsbutton:not(:hover){
    background-position: right bottom;
  }
</style>