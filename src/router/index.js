import Vue from "vue";
import Router from 'vue-router'
import Store from '~/store/index.js'
import Home from '~/views/Home.vue'
const Edit = () =>
    import ('~/views/Edit.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'Main',
            component: Home,
            meta: {
                title: 'Мои заметки',
                forVisitors: true
            }
        },
        {
            path: '/edit',
            component: Edit,
            meta: {
                title: 'Редактирование заметки',
                forVisitors: true
            },
            beforeEnter: (to, from, next) => {
                if (Store.getters['editNote/editNote'].length === 0) {
                    next({
                        name: 'Main'
                    })
                } else {
                    next()
                }
            }
        }

    ]
})