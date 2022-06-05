import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import titleMixin from './titleMixin'
Vue.config.productionTip = false

Vue.mixin(titleMixin)
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')