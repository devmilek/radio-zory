import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'
import VueSimpleMarkdown from 'vue-simple-markdown'

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  router,
  VueSimpleMarkdown,
  render: h => h(App)
}).$mount('#app')
