<template>
  <div class="companyexistpart">
    <div class="companyexistcontain">
      <h1 class="companyexisttitle">
        Why We Exist ??
      </h1>
      <div class="companyexistcontentborder">
        <div class="companyexistcontentcontain">
          <p class="companyexistcontent">
            We believe that the human mind is built for creativity and not for dealing with technological redundancies. We strive to create a balance between human creativity and machine technology using data. A natural collaboration which will fuel our desire for exploration and problem-solving.
          </p>
          <p class="companyexistcontent">
            A union which will drive innovation for decades to come. Finding the right data to solve the most challenging problems has always been a driving force of exploration within human nature. This desire has inspired all the great inventions since the beginning of time.
          </p>
          <p class="companyexistcontent">
            Over the years we have seen how data is used to propel most optimal decisions in the organizations. These organizations have used data as a weapon to stay ahead of the competition, to manage change, to delight customers and to ensure survival regardless of the changing technological landscape.
          </p>
        </div>
        <div class="companyexistcontentcontain">
          <p class="companyexistcontent">
            However, we noticed that the power to bring data-driven innovation is limited to a few organizations. Several reasons contribute to this situation like shortage of people who can effectively utilize the data, heavy infrastructure requirement to utilize the technology and lack of know-how about steering technological changes bought by modern technologies like Big Data, Machine Learning, and Artificial Intelligence.
          </p>
          <p class="companyexistcontent">
            We decided to go back to the drawing board and think with first principles about how modern organizations can collect, combine, analyze and utilize their data for decision making. We decided to create a platform which will help business leaders exploit the data-driven insights for their decisions without having to worry about all the technical complexities.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .companyexistpart{
    /* border: 1px solid black; */
    width: 100%;
    min-height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .companyexistcontain{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1140px;
  }
  .companyexisttitle{
    font-size: 2.5rem;
    font-weight: bolder;
    margin-bottom: 8px;
    margin-left: 15px;
  }
  .companyexistcontentborder{
    display: flex;
    justify-content: space-around;
  }
  .companyexistcontentcontain{
    display: flex;
    flex-wrap: wrap;
  }
  .companyexistcontent{
    line-height: 1.8;
    margin: 10px 15px;
  }
</style>