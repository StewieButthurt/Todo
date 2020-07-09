import 'normalize.css'
import '~/assets/fonts/roboto.css'

import Vue from "vue";
import App from './App.vue'
import Vuex from 'vuex';
import store from './store'
import router from './router';

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

Vue.use(Vuex);

new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app');