<template>
  <section id="tof" class="section-container" :class="bgColor">
    <h1 class="section-title">{{ item.title }}</h1>
    <img
      v-if="item.image"
      :class="float"
      :src="require(`@/assets/images/${item.image}`)"
    />
    <!-- eslint-disable vue/no-v-html -->
    <div class="tech-content" :class="textColor" v-html="item.content" />
    <!--eslint-enable-->
  </section>
</template>
<script>
export default {
  props: {
    item: {
      default: () => {},
      type: Object,
    },
    sectionIndex: {
      default: () => 0,
      type: Number,
    },
  },
  computed: {
    float() {
      return this.sectionIndex % 2 === 0 ? 'float-left' : 'float-right'
    },

    bgColor() {
      return this.sectionIndex % 2 === 0 ? 'bg-light' : 'bg-dark'
    },

    textColor() {
      return this.sectionIndex % 2 === 0 ? 'text-dark' : 'text-light'
    },
  },
}
</script>
<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: #369;
}

.float-right {
  float: right;
  margin: 0 1rem 1rem;
  max-height: 240px;
}

.float-left {
  float: left;
  margin: 0 1rem 1rem;
  max-height: 240px;
}

.bg-light {
  background-color: white;
}

.bg-dark {
  background-color: #273244;
}

.text-light {
  color: white;
}

.text-dark {
  color: black;
}

.section-container {
  padding: 4rem 25%;
}
</style>