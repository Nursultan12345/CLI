import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



Vue.config.productionTip = false
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app')
