// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
require('./assets/scss/index.scss')

Vue.use(Vuetify, { theme: {
  primary: '#1976D2', //ee44aa
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = true

new Vue({
  el: '#app',
  data: {
    language: ''
  },
  router,
  components: { App },
  template: '<App/>'
});