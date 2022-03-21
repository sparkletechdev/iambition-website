<template>
  <div class="company-part-container" :style="background">
    <!-- <div id="patterns" class="patterns"> -->
      <!-- <svg width="100%" height="100%">
        <defs>
          <pattern
            id="polka-dots"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#000" cx="25" cy="25" r="3"></circle>
          </pattern>
        </defs>
        <text x="50%" y="60%" text-anchor="middle">
          About Us hello world a b c
        </text>
      </svg> -->
    <!-- </div> -->
    <h1 class="splash-title">{{ title }}</h1>
    <p v-for="(content, index) in contents" :key="index" class="splash-content">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default:
        '',
    },
    title: {
      type: String,
      default: '{title} props goes here'
    },
    contents: {
      type: Array,
      default() {return ['{content} props needed']}
    }
  },
  computed: {
    background() {
      return {
        background: `linear-gradient(rgba(51, 102, 153, 0.75), rgba(39, 50, 68, 1)), url(${this.imageUrl})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': '100%',
      }
    },
  },
  mounted() {
    this.companyTitleMove()
  },
  methods: {
    companyTitleMove() {
      window.addEventListener('load', function () {
        const patterns = document.getElementById('patterns')
        patterns.classList.add('patternsmove')
      })
    },
  },
}
</script>

<style>
.splash-title {
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: white;
  text-align: center;
  animation: fadeIn linear 2s;
}

.splash-content {
  color: white;
  width: 50%;
  margin: 1rem 0;
  animation: subtitleTransition 1s;
}

.company-part-container {
  width: 100%;
  height: 100vh;
  min-height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding-top: 128px;
}
.patterns {
  width: 100%;
  transform: translateX(230px);
  opacity: 0;
  transition: all 0.6s ease-in-out;
}
.patternsmove {
  transform: translateX(0);
  opacity: 1;
}
svg text {
  letter-spacing: 10px;
  stroke: rgba(28, 75, 102, 0.8);
  font-size: 3.5rem;
  font-weight: 700;
  stroke-width: 1.5;
  animation: textAnimate 8s infinite alternate;
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

@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset: 20%;
    fill: rgb(255, 255, 255);
  }
  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffset: -20%;
    fill: #369;
  }
}
@media screen and (max-width: 1300px) {
  .company-part-container {
    background-size: 150%;
  }
  svg text {
    font-size: 2.5rem;
  }
}
@media screen and (max-width: 992px) {
  .company-part-container {
    background-size: 200%;
  }
  svg text {
    font-size: 2rem;
  }
}
@media screen and (max-width: 768px) {
  .company-part-container {
    background-size: 250%;
  }
  svg text {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 576px) {
  .company-part-container {
    background-size: 270%;
    min-height: 320px;
    height: 60vh;
  }
}
</style>