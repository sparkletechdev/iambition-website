<template>
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
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
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
  font-size: 0.8rem;
}

.language:hover {
  color: #0cf;
}

.language-switch-icon {
  margin: 0 5px 0 0;
}

@media screen and (max-width: 768px) {
  .language {
    display: none;
  }
}
</style>
