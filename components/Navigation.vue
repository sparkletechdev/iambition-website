<template>
  <header ref="headerContainer" class="header-container">
    <Logo />
    <div v-for="post in posts" :key="post.title" class="header-link">
      <div v-if="post.title !== 'navbar.index'" :key="post.title" class="title">
        <nuxt-link :to="localePath(`/${post.route}`)">
          {{ $t(post.title) }}
        </nuxt-link>
        <div v-if="post.items.length != '0'" :key="post.title">
          <fa :icon="['fas', 'angle-down']" class="chevron-icon" />
        </div>
        <div class="subtitle-container">
          <div v-for="item in post.items" :key="item.id" class="subtitle">
            <nuxt-link
              v-if="item.title != 'none'"
              :to="localePath(`/${item.route}`)"
            >
              {{ $t(item.title) }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <LanguageSwitcher />
    <Hamburger
      class="hamburger-border"
      @click.native="hiddenHeaderContainerMove()"
    />

    <div ref="hiddenHeaderContainer" class="hidden-header-container">
      <div
        v-for="post in posts"
        :key="post.title"
        class="hidden-header-container-middle"
      >
        <div
          v-if="post.title !== 'navbar.index'"
          :key="post.title"
          class="hidden-header-container-title-border"
        >
          <nuxt-link
            :to="localePath(`/${post.route}`)"
            class="hidden-header-container-title"
          >
            {{ $t(post.title) }}
          </nuxt-link>
          <div
            v-for="item in post.items"
            :key="item.id"
            class="hidden-header-container-subtitle-border"
          >
            <nuxt-link
              v-if="item.title != 'none'"
              :to="localePath(`/${item.route}`)"
              class="hidden-header-container-subtitle"
            >
              {{ $t(item.title) }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="hidden-header-container-subtitle mt-5">
        <div class="language">
          <fa :icon="['fas', 'random']" class="language-switch-icon" />
          <a
            v-for="locale in availableLocales"
            :key="locale.code"
            href="#"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
          >
            {{ locale.name }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import data from '~/assets/data/nav.json'

export default {
  data() {
    return {
      posts: data,
      currentRoute: '/',
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  mounted() {
    this.hiddenContainerMarginTop()
    this.animationHeaderContainerBackground()
    // this.animationBoxColor()
  },
  methods: {
    switchLanguage(code) {
      this.$i18n.switchLocalePath(code)
    },
    hiddenContainerMarginTop() {
      const headerRef = this.$refs.headerContainer
      const hiddenRef = this.$refs.hiddenHeaderContainer
      hiddenRef.style.top = `${headerRef.offsetHeight}px`
    },
    hiddenHeaderContainerMove() {
      const ref = this.$refs
      const hiddenHeaderContainerStyle = ref.hiddenHeaderContainer.style
      hiddenHeaderContainerStyle.right =
        hiddenHeaderContainerStyle.right === '0%' ? '-100%' : '0%'
    },
    animationHeaderContainerBackground() {
      const gsap = this.$gsap
      this.$ScrollTrigger.matchMedia({
        // eslint-disable-next-line object-shorthand
        '(min-width: 768px)': function () {
          gsap.to('.header-container', {
            scrollTrigger: {
              trigger: '.header-container',
              start: 'top 1% top',
              end: 'bottom 5% top',
              // markers: true,
              toggleClass: 'header-container-white',
            },
          })
        },
      })
    },
    animationBoxColor() {
      const gsap = this.$gsap
      const title = gsap.utils.toArray('.title')

      title.forEach((title) => {
        gsap.to('.header-container', {
          scrollTrigger: {
            trigger: title,
            start: 'top 10% top',
            end: 'bottom top',
            // markers: true,
            toggleClass: 'title-change-color',
          },
        })
      })
    },
  },
}
</script>

<style>
.header-container {
  box-shadow: 0 0 2px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: #333;
  transition: 1s;
  z-index: 5;
}
.header-link {
  /* border: 1px solid black; */
  margin: 0 40px 0 0;
  display: flex;
  align-items: center;
}
.title {
  /* border: 1px solid black; */
  font-weight: 600;
  display: flex;
  align-items: center;
  color: white;
  transition: 0.4s;
  position: relative;
}
.title:hover {
  color: #0cf;
}

.chevron-icon {
  margin: 5px 0 0 5px;
}

.subtitle-container {
  /* border: 1px solid black; */
  position: absolute;
  left: 0%;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 8px;
}
.subtitle {
  /* border: 1px solid black; */
  white-space: nowrap;
  margin-bottom: 10px;
  margin-top: 15px;
  margin-left: 10px;
  width: 320px;
  color: rgba(0, 0, 0, 0.7);
  display: none;
}
.subtitle:hover {
  color: #0cf;
  cursor: pointer;
}
.title:hover .subtitle {
  display: block;
}

.hidden-header-container {
  display: none;
}

@media screen and (max-width: 1200px) {
  .title-change-color {
    color: #fff;
  }
}
@media screen and (max-width: 992px) {
  .title-change-color {
    color: #fff;
  }
}
@media screen and (max-width: 768px) {
  .header-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #333;
  }
  .header-link {
    display: none;
  }
  .hamburger-border {
    /* border: 1px solid black; */
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10rem;
  }
  @keyframes animate {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  .hidden-header-container {
    /* background-color: rgba(23, 75, 88, 0.815); */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #333;
    position: fixed;
    right: -100%;
    top: 0%;
    width: 100%;
    min-height: 750px;
    height: 100vh;
    transition: all 0.4s ease-in-out;
  }
  .hidden-header-container-middle {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
  }
  .hidden-header-container-title-border {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hidden-header-container-title {
    font-size: 1.3rem;
    font-weight: 500;
    color: white;
    margin: 0.5%;
  }
  .hidden-header-container-subtitle-border {
    margin: 1% 0;
  }
  .hidden-header-container-subtitle {
    background-clip: text;
    color: white;
    font-size: 1rem;
  }
  .hidden-header-container-title:hover {
    color: #0cf;
  }
  .hidden-header-container-subtitle:hover {
    color: #0cf;
  }
}
@media screen and (max-width: 576px) {
  .hamburger-border {
    margin-left: 100px;
  }
  .hidden-header-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10px;
    min-height: 720px;
  }
}
@media screen and (max-width: 414px) {
  .hamburger-border {
    margin-left: 70px;
  }
  .hidden-header-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10px;
  }
}
@media screen and (max-width: 361px) {
  .hidden-header-container {
    padding-top: 0;
  }
}

.index-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.header-container-white {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  transition: 1s;
}

.title-change-color {
  color: white;
}
</style>