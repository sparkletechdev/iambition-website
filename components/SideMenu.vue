<template>
  <div
    ref="hiddenHeaderContainer"
    class="hidden-header-container"
    :style="style"
  >
    <div class="menu">
      <div
      v-for="item in data"
      :key="item.title"
      class="hidden-header-container-middle"
      @click="onClick"
    >
      <div
        v-if="item.title !== 'navbar.index'"
        :key="item.title"
        class="hidden-header-container-title-border"
      >
        <nuxt-link
          :to="localePath(`/${item.route}`)"
          class="hidden-header-container-title"
        >
          {{ $t(item.title) }}
        </nuxt-link>
        <div
          v-for="subItem in item.items"
          :key="subItem.id"
          class="hidden-header-container-subtitle-border"
        >
          <nuxt-link
            v-if="subItem.title != 'none'"
            :to="localePath(`/${subItem.route}`)"
            class="hidden-header-container-subtitle"
          >
            {{ $t(subItem.title) }}
          </nuxt-link>
        </div>
      </div>
    </div>
    </div>
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
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    top: {
      type: Number,
      default: 0,
    },
    right: {
      type: String,
      default: '-100%',
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    style() {
      return { top: `${this.top}px`, right: `${this.right}` }
    },
  },
  methods: {
    onClick() {
      // eslint-disable-next-line no-console
      this.$emit('sideMenuClick')
      this.$store.commit('toggleHamburger')
    },
  },
}
</script>
<style scoped>
.hidden-header-container {
  display: none;
}
@media screen and (max-width: 768px) {
  .language {
    color: white;
    font-size: 0.8rem;
  }
  .hidden-header-container {
    /* background-color: rgba(23, 75, 88, 0.815); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    position: fixed;
    width: 100%;
    min-height: 750px;
    height: 100vh;
    padding: 25% 0 25%;
    transition: all 0.4s ease-in-out;
  }
  .hidden-header-container-middle {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5%;
  }
  .hidden-header-container-title-border {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 3% 0 0;
  }
  .hidden-header-container-title {
    font-size: 1.3rem;
    font-weight: 500;
    color: white;
    margin: 0.5%;
  }
  .hidden-header-container-subtitle-border {
    margin: 2% 0 2% 10%;
  }
  .hidden-header-container-subtitle {
    background-clip: text;
    color: white;
    font-size: 1.1rem;
  }
  .hidden-header-container-title:hover {
    color: #0cf;
  }
  .hidden-header-container-subtitle:hover {
    color: #0cf;
  }
}

@media screen and (max-width: 576px) {
  .hidden-header-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10px;
    min-height: 720px;
  }
}
@media screen and (max-width: 414px) {
  .hidden-header-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10px;
  }
}
</style>
