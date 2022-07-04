// import axios from 'axios'
// import majorPart from '~/assets/data/major-part.json'
export const strict = false
// state
export const state = () => ({
  baseUrl: '/iambition-website/',
  hamburger: {
    isActive: false
  }
})

export const mutations = {
  toggleHamburger(state) {
    state.hamburger.isActive = !state.hamburger.isActive
  }
}
