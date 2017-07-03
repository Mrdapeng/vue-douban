/**
 * Created by yff on 2017/7/3.
 */
import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: 'movie',
  bgColor: 'rgb(222,122,122)',
  nav: 'back'
}
const mutations = {
  changeTitle(state, status){
      state.title = status[0],
      state.bgColor = status[1],
      state.nav = status[2]
  }
}
const actions = {
  changeTitle:({commit},status)=>commit('changeTitle',status),

}
const getters = {}
export  default  new Vuex.Store(
  {
    state,
    mutations,
    actions,
    getters

  }
)
