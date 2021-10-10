<template>
    <div v-if="button" :ref="button.buttonName" 
         :class="button.buttonName"
         :style="button.buttonStyles"
         @mouseenter="show(button.buttonName)" 
         @mouseleave="hidde(button.buttonName)">
      <nuxt-link :to="`${button.buttonLink}`">
        <button type="button">
          {{button.buttonTitle}}
        </button>
      </nuxt-link>
    </div>
</template>

<script>
export default {
  props: {
    button : {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    show(buttonName){
      const ref = this.$refs;
      ref[buttonName].style.backgroundPosition = 'left bottom';
      ref[buttonName].style.cursor = 'pointer';

      ref[buttonName].style.color = 'white';
    },
    hidde(buttonName){
      const ref = this.$refs;
      ref[buttonName].style.backgroundPosition = 'right bottom';
      ref[buttonName].style.cursor = 'pointer';

      ref[buttonName].style.color = '#114a6e';
      ref[buttonName].style.transition = '.2s';
    },
  },
}
</script>

<style>
  /* .productionbutton{
    z-index: 1;
    font-size: 16px;
    background: linear-gradient(to right, #145484 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    color: #114a6e;
    padding: 10px 50px;
    border-radius: 30px;
    font-weight: 800;
    margin: 10px 0 18px 0;
    transition: .4s;
  } */
</style>