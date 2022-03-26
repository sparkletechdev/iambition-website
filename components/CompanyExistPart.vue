<template>
  <div class="main-container">
    <div class="column-container">
      <h1 class="company-exist-title">Why We Exist?</h1>
      <div class="company-exist-content-border">
        <div class="company-exist-content-container">
          <p class="company-exist-content">
            We believe that the human mind is built for creativity and not for
            dealing with technological redundancies. We strive to create a
            balance between human creativity and machine technology using data.
            A natural collaboration which will fuel our desire for exploration
            and problem-solving.
          </p>
          <p class="company-exist-content">
            A union which will drive innovation for decades to come. Finding the
            right data to solve the most challenging problems has always been a
            driving force of exploration within human nature. This desire has
            inspired all the great inventions since the beginning of time.
          </p>
          <p class="company-exist-content">
            Over the years we have seen how data is used to propel most optimal
            decisions in the organizations. These organizations have used data
            as a weapon to stay ahead of the competition, to manage change, to
            delight customers and to ensure survival regardless of the changing
            technological landscape.
          </p>
        </div>
        <div class="divider"></div>
        <div class="company-exist-content-container">
          <p class="company-exist-content">
            However, we noticed that the power to bring data-driven innovation
            is limited to a few organizations. Several reasons contribute to
            this situation like shortage of people who can effectively utilize
            the data, heavy infrastructure requirement to utilize the technology
            and lack of know-how about steering technological changes bought by
            modern technologies like Big Data, Machine Learning, and Artificial
            Intelligence.
          </p>
          <p class="company-exist-content">
            We decided to go back to the drawing board and think with first
            principles about how modern organizations can collect, combine,
            analyze and utilize their data for decision making. We decided to
            create a platform which will help business leaders exploit the
            data-driven insights for their decisions without having to worry
            about all the technical complexities.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main-container {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4% 25%;
}
.column-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.company-exist-title {
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 8px;
}
.company-exist-content-border {
  display: flex;
  justify-content: space-around;
}
.company-exist-content-container {
  display: flex;
  flex-wrap: wrap;
}
.company-exist-content {
  line-height: 1.8;
}
.divider {
  width: 10rem;
}
@media screen and (max-width: 1200px) {
  .main-container {
    padding: 4% 15%;
  }
  .company-exist-content-border {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 992px) {
  .main-container {
    padding: 4% 15%;
  }
}

@media screen and (max-width: 768px) {
  .main-container {
    padding: 4% 8%;
  }
}

@media screen and (max-width: 572px) {
  .main-container {
    padding: 4% 8%;
  }
}
</style>