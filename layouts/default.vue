<template>
  <div>
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    if (this.$nuxtI18nHead) {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      return {
        title: this.$t('head.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { charset: 'utf-8' },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, user-scalable=yes',
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: '雄欣科技官方網站',
          },
          {
            hid: 'apple-mobile-web-app-title',
            name: 'apple-mobile-web-app-title',
            content: '雄欣科技官方網站',
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'iAMBITION TECHNOLOGY CO., LTD',
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: '雄欣科技股份有限公司',
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: require(`@/assets/images/logo-tw.png`),
          },
          { name: 'format-detection', content: 'telephone=no' },
          ...i18nHead.meta,
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: this.$t('head.favicon') },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
          },
          ...i18nHead.link,
        ],
      }
    } else {
      return {
        title: this.$t('head.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { charset: 'utf-8' },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, user-scalable=yes',
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: '雄欣科技官方网站',
          },
          {
            hid: 'apple-mobile-web-app-title',
            name: 'apple-mobile-web-app-title',
            content: '雄欣科技官方网站',
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'iAMBITION TECHNOLOGY CO., LTD',
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: '雄欣科技股份有限公司',
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: require(`@/assets/images/logo-tw.png`),
          },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Noto+Sans+TC:wght@300;400;500&family=Noto+Serif+TC&display=swap',
          },
        ],
      }
    }
  },
}
</script>
<style>
html:lang(en) {
  font-family: 'Montserrat', sans-serif;
}
.yt-vid {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>