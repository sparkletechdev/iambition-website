<template>
  <div class="softwareoutsourcingendtoendpart">
    <div class="softwareoutsourcingendtoendpartcontain">
      <h1 class="softwareoutsourcingendtoendtitle">
        End-to-End Software Development Outsourcing Solutions
      </h1>
      <div class="softwareoutsourcingendtoendcontentborder">
        <div class="softwareoutsourcingendtoendcontentleftborder">
          <p v-for="(item,index) in data" :key="index" class="softwareoutsourcingendtoendcontent">
            {{item.content}}
          </p>
        </div>
        <div class="softwareoutsourcingendtoendcontentrightborder">
          <img src="https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/softwareoutsourcingendtoendpart.jpg" class="softwareoutsourcingendtoendcontentrightimage" >
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
          content:"Software outsourcing services involve working with a third-party team with special skills and expertise. Today, businesses worldwide work with software outsourcing companies to access expert software engineers who boast a range of tech skills from UX design to blockchain consulting."
        },
        {
          content:"Simply put, outsourcing software developers allows organizations to develop high-quality software products in a cost-efficient way. From smart customization of pre-developed platforms to full-cycle custom solutions, software outsourcing companies like BairesDev are experienced development partners ready to deliver reliable and custom software solutions."
        },
        {
          content:"We are a world-class team of professionals entirely dedicated to driving the digital transformation of our clients. "
        },
      ],
    }
  },
}
</script>

<style>
  .softwareoutsourcingendtoendpart{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 335px 100px;
  }
  .softwareoutsourcingendtoendpartcontain {
    display: flex;
    flex-direction: column;
  }
  .softwareoutsourcingendtoendtitle {
    text-align: center;
    color: #0272B1;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 100px;
  }
  .softwareoutsourcingendtoendcontentborder {
    display: flex;
  }
  .softwareoutsourcingendtoendcontentleftborder {
    width: 50%;
    order: 2;
  }
  .softwareoutsourcingendtoendcontent {
    font-size: 15px;
    font-weight: bold;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  .softwareoutsourcingendtoendcontentrightborder {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
  }
  .softwareoutsourcingendtoendcontentrightimage {
    /* border: 1px solid black; */
    width: 70%;
    border-radius: 20px;
  }
  .softwareoutsourcingendtoendcontentrightimage:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    opacity: .8;
    transition: all .4s ease-in-out;
  }
  .softwareoutsourcingendtoendcontentrightimage:not(:hover){
    box-shadow: none;
    opacity: 1;
    transition: all .4s ease-in-out;
  }
  @media screen and (max-width: 1300px) {
    .softwareoutsourcingendtoendpart{
      padding: 100px 50px 100px;
    }
  }
  @media screen and (max-width: 992px) {
    .softwareoutsourcingendtoendcontentborder{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .softwareoutsourcingendtoendcontentleftborder{
      width: 70%;
    }
    .softwareoutsourcingendtoendcontentrightborder{
      width: 70%;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 786px) {
    .softwareoutsourcingendtoendtitle{
      font-size: 2rem;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 576px) {
    .softwareoutsourcingendtoendpart{
      padding: 50px 10px 50px;
    }
    .softwareoutsourcingendtoendcontentleftborder{
      width: 90%;
    }
    .softwareoutsourcingendtoendcontentrightborder{
      width: 90%;
      margin-bottom: 20px;
    }
  }
</style>