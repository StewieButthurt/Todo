import Vue from "vue";
import Router from 'vue-router';
import Home from '~/views/Home.vue'
const New = () =>
    import ('~/views/New.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'test',
            component: Home,
            meta: {
                title: 'Todo',
                forVisitors: true
            }
        },
        {
            path: '/new',
            component: New,
            meta: {
                title: 'Create Task',
                forVisitors: true
            }
        }

    ]
})