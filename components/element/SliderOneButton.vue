<template>
  <div class="sliderbuttononeborder" @click="reload">
    <nuxt-link to="/" class="sliderbuttonone"> Meet Our Clients </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    hone: {
      type: Object,
      default: () => {},
    },
    honetitle: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    reload() {
      setTimeout(() => {
        window.location.reload()
      }, 500)
    },
  },
}
</script>

<style>
.sliderbuttononeborder {
  margin: 10px 0 55px 0;
}
.sliderbuttonone {
  background: linear-gradient(to right, #145484 50%, #1868a4 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  font-weight: bolder;
  padding: 15px 50px;
  border-radius: 30px;
  transition: all 0.5s ease-out;
  color: white;
}
.sliderbuttonone:hover {
  background-position: left bottom;
  cursor: pointer;
}
.sliderbuttonone:not(:hover) {
  background-position: right bottom;
}
</style>