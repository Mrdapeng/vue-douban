// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  store from './vuex/store'
require('./assets/js/rem')
Vue.config.productionTip = false
/* eslint-disable no-new */22
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store
})
