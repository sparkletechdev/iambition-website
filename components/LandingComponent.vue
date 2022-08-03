<template>
  <div id="landing" class="landing-container" :style="inlineStyle">
    <!-- eslint-disable vue/no-v-html -->
    <h1 class="splash-title" v-html="title"></h1>
    <!--eslint-enable-->
    <div content-container>
      <p
        v-for="(content, index) in contents"
        :key="index"
        class="splash-content"
      >
        {{ content }}
      </p>
    </div>

    <slot class="slot-container"></slot>
    <span v-if="showArrow" class="arrow"></span>
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
    image: {
      type: String,
      default: 'home.jpg',
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    background() {
      return require('~/assets/images/' + this.image)
    },
    inlineStyle() {
      return {
        'background-image': `linear-gradient(
      #336699af,
      #273244ee
    ),url(${this.background})`,
      }
    },
  },
}
</script>

<style scoped>
.arrow {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

.splash-title {
  font-weight: 600;
  font-size: 4.5rem;
  margin-bottom: 4rem;
  color: white;
  text-align: center;
  animation: fadeIn linear 2s;
  padding: 0 25%;
}

.splash-content {
  color: white;
  margin: 1rem 0;
  animation: subtitleTransition 1s;
  font-size: 1.5rem;
  padding: 0 25%;
}

.content-container {
  height: 100%;
}

.landing-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  padding: 8rem 0 4rem;
  background-size: cover;
  overflow: auto;
  -ms-overflow-style: none; /* Edge, Internet Explorer */
  scrollbar-width: none; /* Firefox */
}

.landing-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* .landing-container::-webkit-scrollbar {
  display: none;
} */

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
  .landing-container {
    background-size: 150%;
  }
  .splash-title {
    padding: 0 15%;
    font-size: 3rem;
  }
  .splash-content {
    padding: 0 15%;
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 992px) {
  .landing-container {
    background-size: 200%;
  }
  .splash-content,
  .splash-title {
    padding: 0 15%;
  }
}
@media screen and (max-width: 768px) {
  .landing-container {
    background-size: 300%;
  }
  .splash-title {
    font-size: 2.5rem;
  }
  .splash-content,
  .splash-title {
    padding: 0 8%;
  }
}
@media screen and (max-width: 576px) {
  .landing-container {
    background-size: 400%;
    min-height: 320px;
  }
  .splash-title {
    font-size: 1.5rem;
  }
  .splash-content {
    font-size: 1rem;
  }
}
</style>