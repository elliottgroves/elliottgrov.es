import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './routes'

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(VueRouter)

import titleMixin from './titleMixin'
Vue.mixin(titleMixin)

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')