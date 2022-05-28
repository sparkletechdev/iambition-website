<template>
  <div class="ilc-container">
    <div class="ilc-content">
      <h1 class="ilc-title">{{ section.title }}</h1>
      <div class="ilc-text-container">
        <div class="ilc-text" :style="order">
          <p
            v-for="(item, index) in section.content"
            :key="index"
            class="ilc-paragraph"
          >
            {{ item }}
          </p>
        </div>
        <div class="ilc-image-container">
          <img
            :src="require(`@/assets/images/${section.image}`)"
            class="ilc-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      default: () => [],
      type: Array,
    },
    alignLeft: {
      default: Number,
      type: Boolean,
    },
  },
  computed: {
    order() {
      const newOrder = this.alignLeft ? 0 : 2
      return { order: `${newOrder}` }
    },
  },
}
</script>

<style>
.ilc-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 10%;
}
.ilc-content {
  display: flex;
  flex-direction: column;
}
.ilc-title {
  text-align: center;
  color: #369;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
}
.ilc-text-container {
  display: flex;
}
.ilc-text {
  width: 50%;
}
.ilc-paragraph {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.7;
  margin-bottom: 20px;
}
.ilc-image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
}
.ilc-image {
  /* border: 1px solid black; */
  width: 90%;
}
.ilc-image:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  opacity: 0.8;
  transition: all 0.4s ease-in-out;
}
.ilc-image:not(:hover) {
  box-shadow: none;
  opacity: 1;
  transition: all 0.4s ease-in-out;
}
@media screen and (max-width: 1200px) {
  .ilc-container {
    padding: 3rem 8%;
  }
  .ilc-title {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 992px) {
  .ilc-title {
    margin-bottom: 50px;
  }
  .ilc-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ilc-text {
    width: 90%;
  }
  .ilc-image-container {
    margin-bottom: 45px;
    width: 90%;
  }
}
@media screen and (max-width: 786px) {
  .ilc-title {
    font-size: 2rem;
  }
  .ilc-image {
    width: 90%;
  }
}
@media screen and (max-width: 576px) {
  .ilc-container {
    padding: 2rem 10%;
  }
}
</style>