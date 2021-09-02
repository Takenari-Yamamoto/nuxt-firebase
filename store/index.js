import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const actions = {
  // なんか作動しないので一旦コメントアウト
  // async nuxtServerInit({ dispatch, store }) {
  //   await dispatch('user/getAuthenticatedUserInformation')
  // },
  // とりあえず期待通りの挙動にはなってるが描画が遅い
  async nuxtClientInit({ dispatch }) {
    await dispatch('user/getAuthenticatedUserInformation')
    console.log('INIT')
  },
}
