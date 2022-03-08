<template>
  <div
    :ref="button.buttonName"
    :class="button.buttonstyles[0].className"
    :style="button.buttonstyles[0].style"
    @mouseenter="hover(button.buttonName)"
    @mouseleave="hoverNone(button.buttonName)"
  >
    <button
      type="button"
      :class="button.buttonstyles[1].className"
      :style="button.buttonstyles[1].style"
      @click="reload"
    >
      <nuxt-link :to="`${button.link}`">
        {{ button.title }}
      </nuxt-link>
    </button>
  </div>
</template>

<script>
import button from '@/assets/data/button.json'
export default {
  data() {
    return {
      button,
    }
  },
  methods: {
    hover(buttonName) {
      const ref = this.$refs
      ref[buttonName].style.backgroundPosition = 'left bottom'
      ref[buttonName].style.cursor = 'pointer'
    },
    hoverNone(buttonName) {
      const ref = this.$refs
      ref[buttonName].style.backgroundPosition = 'right bottom'
    },
    reload() {
      setTimeout(() => {
        window.location.reload()
      }, 500)
    },
  },
}
</script>