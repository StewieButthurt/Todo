import 'normalize.css'
import '~/assets/fonts/roboto.css'

import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import store from './store'

Vue.use(Vuex);

new Vue({
    el: "#app",
    store: store,
    render: h => h(App)
});