<template>
  <div class="main-container">
    <div class="title-container">
      <h1 class="company-doing-title">{{ title }}</h1>
    </div>
    <div class="item-container">
      <div v-for="(item, index) in content" :key="index" class="item">
        <img
          :src="require(`@/assets/images/${item.image}`)"
          class="item-background"
        />
        <div class="item-blue-background"></div>
        <div class="item-content">
          <h1 class="item-content-title">
            {{ item.title }}
          </h1>
          <p class="item-content-subtitle">
            {{ item.description }}
          </p>
        </div>
        <div class="item-title-border">
          <h1 class="item-title">
            {{ item.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // data: [
      //   {
      //     title: 'Creating data-driven applications for end-users',
      //     subtitle:
      //       'We work with business leaders to create products which can consume data & data-driven technologies to deliver values to end-consumers. We handle end-to-end development of the applications from data collection, processing, analysis & delivery. We use the most cutting-edge methods like Distributed Computing, Statistical Modeling, Machine Learning & Customer-Centric Design behind the hood. We aim to develop simple interfaces for our partners to utilize & propel their decisions in the right direction.',
      //     img: 'indexFirstBackground.jpeg',
      //   },
      //   {
      //     title: 'Reaching the heart of the problem',
      //     subtitle:
      //       'We work with our partners very closely and consult them about their pain points, aspirations, priorities, and KPIs. We use first principles to think about situations from different angles. We plan the process until we know exactly where the problem lies so that we have a clear plan of action. The only thing left thereafter is perfect execution.',
      //     img: 'indexFirstBackground.jpeg',
      //   },
      //   {
      //     title: 'Treat Data As a piece of art, Make no assumptions',
      //     subtitle:
      //       "We believe that data alone has the power to bring the truth forward. We make no assumptions about the problem that we are trying to solve and strive to collect as much information as possible. That's why we have designed our platform to consume large amounts of data from various sources without hassle. Our partners define where they want to reach and we define how.",
      //     img: 'indexFirstBackground.jpeg',
      //   },
      //   {
      //     title: 'Automating solutions to stand the test of time',
      //     subtitle:
      //       "We don't work on one-off projects. We don't believe in delivering part of the value. We don't believe in just getting our work done and move on. We create solutions which can be used over and over again without difficulties. The only input that our solutions need to deliver promised value is human creativity in the form of domain inputs.",
      //     img: 'indexFirstBackground.jpeg',
      //   },
      //   {
      //     title: 'Erecting a culture driven by passion and values',
      //     subtitle:
      //       "We treat the workplace as a place of worship. We believe that if people own some tasks, they bring additional value to our clients. We believe in creating communities which are living organisms so that it thrives even without the founders. We believe that innovation is the only true value that can make this world a better place. That's why we provide a comfortable and respectful environment so that people can find purpose in the work that they are doing.",
      //     img: 'indexFirstBackground.jpeg',
      //   },
      // ],
    }
  },
}
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #273244;
  padding: 4% 15%;
}
.company-doing-title {
  margin-bottom: 4rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
}
.item-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  column-gap: 2.5rem;
  justify-content: space-around;
  align-items: center;
}
.item {
  position: relative;
  overflow: hidden;
  max-width: 370px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.item-blue-background {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  background: linear-gradient(
    rgba(39, 50, 68, 0) 0%,
    rgba(39, 50, 68, 0) 75%,
    rgba(51, 102, 153, 0.85) 80%
  );
}
.item-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  opacity: 0;
}
.item:hover .item-blue-background {
  /* background: none; */
  background-color: #273244;
}
.item:hover .item-content {
  opacity: 1;
}
.item-background {
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
}
.item-content-title {
  text-align: center;
  font-weight: 500;
  z-index: 1;
  color: white;
  line-height: 1.5;
  margin: 12px 0 24px;
}
.item-content-subtitle {
  text-align: center;
  font-weight: 300;
  font-size: 0.9rem;
  z-index: 1;
  color: white;
  margin: 0 12px;
}
.item-title-border {
  z-index: 1;
}
.item-title {
  text-align: center;
  z-index: 1;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 25px;
}
@media screen and (max-width: 1440px) {
  .main-container {
    padding: 4% 20%;
  }
}
@media screen and (max-width: 1200px) {
  .main-container {
    padding: 4% 10%;
  }
}
</style>