<template>
  <header ref="headerContainer" class="header-container">
    <!-- <div></div> -->
    <Logo @logoClick="hiddenHeaderContainerClose()" />
    <div class="links">
      <div v-for="post in posts" :key="post.title" class="header-link">
        <div
          v-if="post.title !== 'navbar.index'"
          :key="post.title"
          class="title"
        >
          <nuxt-link v-if="post.route" :to="localePath(`/${post.route}`)">
            {{ $t(post.title) }}
          </nuxt-link>
          <div v-else class="not-link">{{ $t(post.title) }}</div>
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
    </div>

    <LanguageSwitcher />

    <Hamburger
      class="hamburger-border"
      @click.native="hiddenHeaderContainerMove()"
    />
    <SideMenu
      :top="offsetHeight"
      :right="right"
      :data="posts"
      @sideMenuClick="hiddenHeaderContainerMove()"
    />
    <!-- <div ref="hiddenHeaderContainer" class="hidden-header-container">
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
    </div> -->
  </header>
</template>

<script>
import data from '~/assets/data/nav.json'

export default {
  data() {
    return {
      posts: data,
      currentRoute: '/',
      offsetHeight: 0,
      right: '-100%',
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
      this.offsetHeight = headerRef.offsetHeight
    },
    hiddenHeaderContainerMove() {
      this.right = this.right === '0%' ? '-100%' : '0%'
    },
    hiddenHeaderContainerClose() {
      this.right = '-100%'
    },
    animationHeaderContainerBackground() {
      const gsap = this.$gsap
      this.$ScrollTrigger.matchMedia({
        // eslint-disable-next-line object-shorthand
        '(min-width: 992px)': function () {
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
<style scoped>
.header-container {
  box-shadow: 0 0 2px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 0.25rem 3rem;
  background-color: rgb(51, 51, 51);
  transition: 1s;
  z-index: 5;
}
.links {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 3rem;
  row-gap: 0.25rem;
  margin: 0 3rem 0 3rem;
}
.header-link {
  /* border: 1px solid black; */
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
  position: absolute;
  left: 0%;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.subtitle {
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

.not-link {
  cursor: default;
}

@media screen and (max-width: 1200px) {
  .title-change-color {
    color: #fff;
  }
}

/* @media screen and (max-width: 992px) {
  .title-change-color {
    color: #fff;
  }
} */
@media screen and (max-width: 992px) {
  .header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #333;
  }
  .header-link {
    display: none;
  }
  .links {
    display: none;
  }
  .hamburger-border {
    /* border: 1px solid black; */
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes animate {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
}
.index-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.header-container-white {
  border: none;
  background-color: rgba(51, 51, 51, 0.5);
  transition: 1s;
}
.title-change-color {
  color: white;
}
</style>