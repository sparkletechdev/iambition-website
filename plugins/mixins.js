import Vue from 'vue'

const mixin = {
  methods: {
    staticPath(path) {
      return this.$store.state.baseUrl + path
    },
  },
}

Vue.mixin(mixin)
