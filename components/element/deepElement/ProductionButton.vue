<template>
    <div ref="showbgc" class="productionbutton" @mouseenter="show()" @mouseleave="hidde()" >
      <nuxt-link to="/">
        <button ref="buttonfont" type="button" class="productionButton">
          Explore Nash 360
        </button>
      </nuxt-link>
    </div>
</template>

<script>
export default {
  methods: {
    show(){
      const ref = this.$refs;
      ref.showbgc.style.backgroundPosition = 'left bottom'
      ref.showbgc.style.cursor = 'pointer'

      ref.showbgc.style.color = 'white'
    },
    hidde(){
      const ref = this.$refs;
      ref.showbgc.style.backgroundPosition = 'right bottom'
      ref.showbgc.style.cursor = 'pointer'

      ref.showbgc.style.color = '#114a6e'
    },
  },
}
</script>

<style>
  .productionbutton{
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
  }
  .productionButton{
    transition: .2s;
  }
</style>