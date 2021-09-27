<template>
  <div class="productionborder">
    <div v-for="test in tests" :key="test.id" class="production">
      <img :src="test.url" class="productionimages">
      <ElementDeepElementDeephone :title="test.title" />
      <ElementDeepElementDeephthree :subtitle="test.subtitle"/>
      <ElementDeepElementProductionButton />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tests:[
        {
          "id": '1',
          "name": '1',
          "url" : 'https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/technologytwo.jpg',
          "title": "Universal Data Ingestion",
          "subtitle" : "Nash360 can efficiently process any data in any format through any database using Distributed Computing with Spark"
        },
        {
          "id": '2',
          "name": '2',
          "url" : 'https://testjusttestdontdoit.s3.ap-southeast-1.amazonaws.com/technology.jpg',
          "title": "Predictive Behavioral Intelligence",
          "subtitle" : "Predict provides accurate behavioral forecasts for each customer using Automated Machine Learning"
        }
      ],
    }
  },
}
</script>

<style>
  .productionborder{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 60%;
    margin-top: 80px;
  }
  .production{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 48%;
    height: 80%;
    overflow: hidden;
  }
  .productionimages{
    position: absolute;
    top: 50%;
    z-index: 0;
    transform: translateY(-50%);
    width: 100%;
  }
</style>