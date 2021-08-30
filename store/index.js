import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  message: 'Hello Vuex!',
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
     await dispatch('user/onAuth')
  },
}

// firebase.auth().onAuthStateChanged((user) => {
//   context.commit('onAuthStateChanged', user)
//   context.commit('onUserLoginStatusChanged', true)
// })
