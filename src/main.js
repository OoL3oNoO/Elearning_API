// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRessource from 'vue-resource'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRessource)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
window.rootURL =
  'http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io//api/v1/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
