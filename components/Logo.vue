<template>
  <div @click="onClick()">
    <nuxt-link :to="localePath('/')"
      ><img v-if="$i18n.locale === 'en'" class="company-logo" :src="require('@/assets/images/logo-sg.svg')" alt="Singapore Company Logo"/>
      <img
        v-else
        class="company-logo"
        :src="require('@/assets/images/logo-tw.png')"
        alt="Taiwan Company Logo"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('logoClick')
      if (this.$store.state.hamburger.isActive)
        this.$store.commit('toggleHamburger')
    },
  },
}
</script>

<style scoped>
.company-logo {
  height: 32px;
  margin: 16px 0 16px 0;
}
.company-logo:hover {
  cursor: pointer;
}

@media screen and (max-width: 992px) {
  .company-logo {
    height: 24px;
    margin: 12px 0 12px 0;
  }
}
</style>
