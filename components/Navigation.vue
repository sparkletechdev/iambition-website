<template>
  <header ref="headerContainer" class="header-container">
    <Logo />
    <div v-for="post in posts" :key="post.title" class="header-link">
      <div
        v-if="post.title !== 'navbar.index'"
        :key="post.title"
        class="title"
        @click.once="reload(post.route)"
      >
        <nuxt-link :to="`/${post.route}`">
          {{ $t(post.title) }}
        </nuxt-link>
        <div
          v-if="post.items.length != '0'"
          :key="post.title"
          class="triangle"
        ></div>
        <div class="subtitle-container">
          <div v-for="item in post.items" :key="item.id" class="subtitle">
            <nuxt-link
              v-if="item.title != 'none'"
              :to="`/subPage/${item.route}`"
            >
              {{ $t(item.title) }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="hamburger-border">
      <div
        class="hamburger-middle-border hamburger-middle-border-small"
        @click="hiddenHeaderContainerMove()"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>
    </div>
    <div ref="hiddenHeaderContainer" class="hidden-header-container">
      <div class="hidden-header-container-border">
        <div
          v-for="post in posts"
          :key="post.title"
          class="hidden-header-container-middle"
        >
          <div
            v-if="post.title !== 'navbar.index'"
            :key="post.title"
            class="hidden-header-container-title-border"
            @click.once="reload(post.route)"
          >
            <nuxt-link
              :to="`/${post.route}`"
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
                :to="`/subPage//${item.route}`"
                class="hidden-header-container-subtitle"
              >
                {{ $t(item.title) }}
              </nuxt-link>
            </div>
          </div>
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
    }
  },
  mounted() {
    this.screen()
  },
  methods: {
    reload(data) {
      setTimeout(() => {
        window.location.reload()
      }, 10)
    },
    screen() {
      const ref = this.$refs
      window.addEventListener('scroll', () => {
        if (window.innerWidth < 768 && scrollY !== 0) {
          ref.headerContainer.style.backgroundColor = 'rgba(255,255,255,.8)'
        } else if (window.innerWidth < 768 && scrollY === 0) {
          ref.headerContainer.style.backgroundColor = ''
        }
      })
    },
    hiddenHeaderContainerMove() {
      const ref = this.$refs
      const hiddenHeaderContainerStyle = ref.hiddenHeaderContainer.style
      hiddenHeaderContainerStyle.right =
        hiddenHeaderContainerStyle.right === '0%' ? '-100%' : '0%'
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
.triangle {
  border-style: solid;
  border-width: 10px 7px 0 7px;
  border-color: #fff transparent transparent transparent;
  margin: 0 0 0 5px;
  transition: 0.4s;
}
.title:hover .triangle {
  border-style: solid;
  border-width: 10px 7px 0 7px;
  border-color: #0cf transparent transparent transparent;
}
.subtitle-container {
  /* border: 1px solid black; */
  position: absolute;
  left: 0%;
  top: 105%;
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
  .titleChangeColor {
    color: #000;
  }
}
@media screen and (max-width: 992px) {
  .titleChangeColor {
    color: #000;
  }
}
@media screen and (max-width: 768px) {
  .header-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0);
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
    margin-left: 300px;
  }
  .hamburger-middle-border {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 60%;
    justify-content: space-around;
  }
  .hamburger-middle-border-small {
    width: 70px;
  }
  .hamburger-line {
    width: 75px;
    border-radius: 1.5px;
    border-top: 3px solid rgba(193, 226, 233, 0.863);
    box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.24);
    position: relative;
  }
  .hamburger-line::before {
    content: '';
    position: absolute;
    bottom: 0%;
    left: -110%;
    width: 100%;
    height: 100%;
    border-top: 3px solid black;
    transition: all 0.6s ease-in-out;
  }
  .hamburger-border:hover {
    cursor: pointer;
  }
  .hamburger-border:hover .hamburger-line::before {
    animation-name: animate;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
  @keyframes animate {
    0% {
      left: -110%;
    }
    50% {
      left: 0%;
    }
    100% {
      left: 110%;
    }
  }
  .hidden-header-container {
    /* background-color: rgba(23, 75, 88, 0.815); */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(90, 171, 196, 0.952);
    position: fixed;
    right: -100%;
    top: 0%;
    width: 100%;
    min-height: 750px;
    height: 100vh;
    margin-top: 92px;
    transition: all 0.6s ease-in-out;
  }
  .hidden-header-container-border {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hidden-header-container-middle {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
  }
  .hidden-header-container-title-border {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
  .hidden-header-container-title {
    color: #fff;
    text-shadow: 3px 5px 2px #474747;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 2%;
  }
  .hidden-header-container-subtitle-border {
    margin: 1% 0;
  }
  .hidden-header-container-subtitle {
    color: transparent;
    background: #666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0 3px 3px rgba(255, 255, 255, 0.5);
    font-weight: bold;
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 576px) {
  .hamburger-border {
    margin-left: 100px;
  }
  .hamburger-middle-border {
    width: 90%;
    height: 50%;
  }
  .nuxt-logo {
    height: 60px;
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
</style>