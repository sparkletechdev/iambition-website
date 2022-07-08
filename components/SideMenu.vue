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
        <div :key="item.title" class="hidden-header-container-title-border">
          <nuxt-link
            v-if="item.route"
            :to="localePath(`/${item.route}`)"
            class="hidden-header-container-title"
          >
            {{ $t(item.title) }}
          </nuxt-link>
          <div v-else class="not-link">{{ $t(item.title) }}</div>
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
    <div class="language invisible">
      <div class="region-title">{{ $t('menu.selectRegion') }}</div>
      <div class="countries">
        <div
          v-for="locale in availableLocales"
          :key="locale.code"
          class="country"
        >
          <fa
            v-if="currentLocale === locale.name"
            :icon="['fas', 'check']"
            class="language-switch-icon"
          />
          <a href="#" @click.prevent.stop="$i18n.setLocale(locale.code)">
            {{ $t(`locale.names.${locale.name}`) }}
          </a>
        </div>
      </div>
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
      return this.$i18n.locales
    },
    currentLocale() {
      const code = this.$i18n.locales.filter(
        (i) => i.code === this.$i18n.locale
      )[0].name
      return code
    },
    style() {
      return { top: `${this.top}px`, right: `${this.right}` }
    },
  },
  methods: {
    onClick() {
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
.menu {
  padding: 0 25%;
  overflow: scroll;
}
.not-link {
  color: white;
  cursor: default;
}
@media screen and (max-width: 992px) {
  .language {
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 8rem;
  }
  .region-title {
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .countries {
    align-self: center;
    display: flex;
    flex-direction: row;
    row-gap: 16px;
    column-gap: 24px;
  }
  .country {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .language-switch-icon {
    margin-right: 5px;
  }
  .hidden-header-container {
    /* background-color: rgba(23, 75, 88, 0.815); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    background-color: #333;
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 4rem 0 6rem;
    overflow: scroll;
    transition: all 0.3s ease-in-out;
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
    font-size: 1.2rem;
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
    font-size: 1rem;
  }
  .hidden-header-container-title:hover {
    color: #0cf;
  }
  .hidden-header-container-subtitle:hover {
    color: #0cf;
  }
}

/* @media screen and (max-width: 576px) {
  .hidden-header-container-title {
    font-size: 1.2rem;
  }
  .hidden-header-container-subtitle  {
    font-size: 1.0rem;
  }
  .language {
    font-size: 0.8rem;
  }
} */

/* @media screen and (max-width: 414px) {
  .hidden-header-container-title {
    font-size: 1.2rem;
  }
  .hidden-header-container-subtitle  {
    font-size: 1.0rem;
  }
} */
</style>
