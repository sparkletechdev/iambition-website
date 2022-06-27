<template>
  <!-- :class="{ open: isOpen }" @click="isOpen = !isOpen" -->
  <div class="col">
    <div
      id="hamburger-1"
      class="hamburger"
      :class="{ active: $store.state.hamburger.isActive }"
      @click="toggle"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toggle() {
      this.$store.commit('toggleHamburger')
    }
  }
}
</script>
<style scoped>
.row {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #ecf0f1;
  text-align: center;
}

/* COLUMNS */

.col {
  display: none;
  float: left;
}

.col:first-of-type {
  margin-left: 0;
}

.hamburger .line {
  width: 28px;
  height: 2px;
  background-color: white;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover {
  cursor: pointer;
}

/* ONE */

#hamburger-1.active .line:nth-child(2) {
  opacity: 0;
}

#hamburger-1.active .line:nth-child(1) {
  -webkit-transform: translateY(10px) rotate(45deg);
  -ms-transform: translateY(10px) rotate(45deg);
  -o-transform: translateY(10px) rotate(45deg);
  transform: translateY(10px) rotate(45deg);
}

#hamburger-1.active .line:nth-child(3) {
  -webkit-transform: translateY(-10px) rotate(-45deg);
  -ms-transform: translateY(-10px) rotate(-45deg);
  -o-transform: translateY(-10px) rotate(-45deg);
  transform: translateY(-10px) rotate(-45deg);
}

@media screen and (max-width: 768px) {
  .col {
    display: block;
  }
}
</style>