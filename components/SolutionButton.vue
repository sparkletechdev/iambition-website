<template>
  <div
    v-if="button"
    ref="solutionButton"
    class="solution-button"
    @mouseenter="show()"
    @mouseleave="hide()"
    @click="reload"
  >
    <nuxt-link :to="localePath(`${button.link}`)">
      <button type="button">
        {{ button.button }}
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    show() {
      const ref = this.$refs
      ref.solutionButton.style.backgroundPosition = 'left bottom'
      ref.solutionButton.style.cursor = 'pointer'

      ref.solutionButton.style.color = 'white'
    },
    hide() {
      const ref = this.$refs
      ref.solutionButton.style.backgroundPosition = 'right bottom'
      ref.solutionButton.style.cursor = 'pointer'

      ref.solutionButton.style.color = '#369'
      ref.solutionButton.style.transition = '.2s'
    },
    reload() {
      setTimeout(() => {
        window.location.reload()
      }, 500)
    },
  },
}
</script>

<style>
.solution-button {
  z-index: 1;
  font-size: 16px;
  background: linear-gradient(to right, #369 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: #369;
  padding: 10px 50px;
  border-radius: 30px;
  font-weight: 800;
  margin: 10px 0 10px 0;
  transition: 0.4s;
}
</style>