import 'normalize.css'
import '~/assets/fonts/roboto.css'

import Vue from "vue";
import App from './App.vue'
import Vuex from 'vuex';
import store from './store'
import router from './router';

import VueYandexMetrika from 'vue-yandex-metrika'

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

Vue.use(Vuex);

Vue.use(VueYandexMetrika, {
    id: 65592406,
    router: router,
    env: process.env.NODE_ENV
})

new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app');