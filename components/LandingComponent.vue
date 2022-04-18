<template>
  <div class="company-part-container">
    <h1 class="splash-title">{{ title }}</h1>
    <p v-for="(content, index) in contents" :key="index" class="splash-content">
      {{ content }}
    </p>
    <slot class="slot-container"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '{title} props goes here',
    },
    contents: {
      type: Array,
      default() {
        return ['{content} props needed']
      },
    },
  },
  computed: {
    background() {
      return {}
    },
  },
}
</script>

<style scoped>
.splash-title {
  font-weight: 600;
  font-size: 4.5rem;
  margin-bottom: 4rem;
  color: white;
  text-align: center;
  animation: fadeIn linear 2s;
}

.splash-content {
  color: white;
  margin: 1rem 0;
  animation: subtitleTransition 1s;
  font-size: 1.5rem;
  padding: 0 25%;
}

.company-part-container {
  width: 100%;
  min-height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 8rem 0 4rem;
  background-size: cover;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes subtitleTransition {
  0% {
    transform: translate(100%);
    opacity: 0;
  }
  100% {
    transform: translate(0%);
    opacity: 1;
  }
}

@media screen and (max-width: 1200px) {
  .company-part-container {
    background-size: 150%;
  }
  .splash-content {
    padding: 0 15%;
  }
}
@media screen and (max-width: 992px) {
  .company-part-container {
    background-size: 200%;
  }
  .splash-content {
    padding: 0 15%;
  }
}
@media screen and (max-width: 768px) {
  .company-part-container {
    background-size: 300%;
  }
  .splash-title {
    font-size: 3.5rem;
  }
  .splash-content {
    padding: 0 8%;
  }
}
@media screen and (max-width: 576px) {
  .company-part-container {
    background-size: 400%;
    min-height: 320px;
  }
  .splash-title {
    font-size: 3rem;
    text-align: left;
  }
  .splash-content {
    padding: 0 8%;
  }
}
</style>