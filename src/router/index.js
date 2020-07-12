import Vue from "vue";
import Router from 'vue-router';
import Home from '~/views/Home.vue'
const Edit = () =>
    import ('~/views/Edit.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'test',
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
            }
        }

    ]
})