<template>
  <div class="hidden-header-container">
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
            :to="localePath(`/subPage//${item.route}`)"
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
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default() {
        return []
      },
    },
    margin: {
      type: Number,
      default: 64,
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
