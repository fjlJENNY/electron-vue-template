import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import '@/utils/core'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
/* fixbug: Disable pinch zoom in electron for mac */
require('electron').webFrame.setZoomLevelLimits(1, 1)

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')