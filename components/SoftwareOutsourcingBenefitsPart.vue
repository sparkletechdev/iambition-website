<template>
  <div class="softwareoutsourcingbenefitspart">
    <div class="softwareoutsourcingbenefitscontain">
      <h1 class="softwareoutsourcingbenefitstitle">
        Benefits of Software Development Outsourcing
      </h1>
      <div class="softwareoutsourcingbenefitscontainer">
        <div class="softwareoutsourcingbenefitsleftborder">
          <ul class="softwareoutsourcingbenefitslistborder">
            <li v-for="(item, index) in data" :key="index" type="disc" class="softwareoutsourcingbenefitslist">
              {{item.content}}
            </li>
          </ul>
          <div class="softwareoutsourcingbenefitscontentborder">
            <p class="softwareoutsourcingbenefitscontent">
              If you’re wondering if software development outsourcing is the right match for your business needs, take into consideration your project’s schedule, study your available internal skills and resources, analyze your budget, and the risks involved with your line of work. Outsourcing software engineers can help you achieve product-market fit in no time with unmatched results.
            </p>
          </div>
        </div>
        <div class="softwareoutsourcingbenefitsrightborder">
          <fa :icon="['fas', 'desktop']" class="desktopicon" />
          <fa :icon="['far', 'keyboard']" class="keyboardicon" />
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
          content: 'Access and work with the top talented software engineers in the industry.',
        },
        {
          content: 'Improve your project’s productivity and performance.',
        },
        {
          content: 'Enjoy working with a flexible business partner.',
        },
        {
          content: 'Reduce inherent project risks.',
        },
        {
          content: 'Boost your product’s security.',
        },
        {
          content: 'Start your project immediately.',
        },
      ],
    }
  },
}
</script>

<style>
  .softwareoutsourcingbenefitspart{
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 335px 100px;
    background: #edecea;
  }
  .softwareoutsourcingbenefitscontain{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .softwareoutsourcingbenefitstitle{
    text-align: center;
    color: #0272B1; 
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 100px;
  }
  .softwareoutsourcingbenefitscontainer{
    display: flex;
  }
  .softwareoutsourcingbenefitsleftborder{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    padding-right: 30px;
  }
  .softwareoutsourcingbenefitslistborder{
    padding-left: 20px;
  }
  .softwareoutsourcingbenefitslist{
    font-weight: bold;
    line-height: 1.5;
    font-size: 1.2rem;
  }
  .softwareoutsourcingbenefitscontentborder{
    margin-top: 15px;
  }
  .softwareoutsourcingbenefitscontent{
    font-weight: bold;
    line-height: 1.5;
    font-size: 1rem;
    padding-right: 50px;
  }
  .softwareoutsourcingbenefitsrightborder{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .desktopicon{
    color: white;
    width: 200px !important;
    height: auto !important;
  }
  .keyboardicon{
    color: white;
    width: 120px !important;
    height: auto !important;
  }
  @media screen and (max-width: 1400px) {
    .softwareoutsourcingbenefitspart{
      padding: 100px 150px 100px;
    }
  }
  @media screen and (max-width: 992px) {
    .softwareoutsourcingbenefitspart{
      padding: 100px 50px 100px;
    }
  }
  @media screen and (max-width: 786px) {
    .softwareoutsourcingbenefitspart{
      padding: 50px 50px 50px;
    }
    .softwareoutsourcingbenefitstitle{
      font-size: 2rem;
      margin-bottom: 20px;
    }
    .softwareoutsourcingbenefitscontainer{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .softwareoutsourcingbenefitscontent{
      padding-right: 0;
    }
    .desktopicon{
      display: none;
    }
    .keyboardicon{
      display: none;
    }
    .softwareoutsourcingbenefitsleftborder{
      width: 90%;
      padding-right: 0;
    }
  }
  @media screen and (max-width: 576px) {
    .softwareoutsourcingbenefitspart{
      padding: 50px 10px 50px;
    }
  }
</style>