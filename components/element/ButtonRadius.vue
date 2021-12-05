<template>
  <div v-if="button.data" :ref="button.data.buttonName" :class="button.data.buttonstyles[0].className" :style="button.data.buttonstyles[0].style" @mouseenter="hover(button.data.buttonName)" @mouseleave="hoverNone(button.data.buttonName)">
    <button type="button" :class="button.data.buttonstyles[1].className" :style="button.data.buttonstyles[1].style">
      <nuxt-link :to="`${button.data.link}`">
        {{button.data.title}}
      </nuxt-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      default: () => {},
    } 
  },
  methods: {
    hover(buttonName){
      const ref = this.$refs;
      ref[buttonName].style.backgroundPosition = 'left bottom'
      ref[buttonName].style.cursor = 'pointer'
    },
    hoverNone(buttonName){
      const ref = this.$refs;
      ref[buttonName].style.backgroundPosition = 'right bottom'
    },
  },
}
</script>