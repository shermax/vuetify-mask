import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'

import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
