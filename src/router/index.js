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
                title: 'Todo',
                forVisitors: true
            }
        },
        {
            path: '/edit',
            component: Edit,
            meta: {
                title: 'Edit Task',
                forVisitors: true
            }
        }

    ]
})