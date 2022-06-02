import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const finalApp = createApp(App)
finalApp.use(router)

import titleMixin from './titleMixin'
finalApp.mixin(titleMixin)

finalApp.mount('#app')