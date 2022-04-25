<template>
  <div class="language">
    <fa :icon="['fas', 'globe']" class="language-switch-icon" />
    <a class="locale">
      {{ currentLocale }}
    </a>
    <div class="language-list">
      <div
        v-for="locale in availableLocales"
        :key="locale.code"
        href="#"
        class="subtitle"
        @click.prevent.stop="$i18n.setLocale(locale.code)"
      >
        <div class="list-content">
          <div class="flag">{{ $t(`locale.flags.${locale.name}`) }}</div>
          <div>{{ $t(`locale.names.${locale.name}`) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
    currentLocale() {
      const code = this.$i18n.locales.filter(
        (i) => i.code === this.$i18n.locale
      )[0].name
      return this.$t(`locale.names.${code}`)
    },
  },
}
</script>

<style scoped>
.language {
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 300;
  position: relative;
  cursor: pointer;
}

.language:hover {
  color: #0cf;
}

.language-switch-icon {
  margin: 0 5px 0 0;
}

.language-list {
  position: absolute;
  left: 0%;
  top: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: white;

  /* align-items: center;
  justify-content: center;
  font-size: 0.8rem; */
}

.list-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flag {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.subtitle {
  white-space: nowrap;
  margin-bottom: 10px;
  margin-top: 15px;
  margin-left: 10px;
  width: 320px;
  color: #333;
  display: none;
}

.subtitle :hover {
  color: #0cf;
}

.language:hover .subtitle {
  display: block;
}
@media screen and (max-width: 768px) {
  .language {
    display: none;
  }
}
</style>
