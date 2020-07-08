const state = () => ({
    todoList: [{
        title: 'Новая задача',
        todo: [

            {
                status: false,
                title: 'Пункт 1'
            },
            {
                status: false,
                title: 'Пункт 2'
            }

        ]
    }]
})

const mutations = {
    addTodo(state, todo) {
        console.log('test')
    }
}

const actions = {
    async addTodo({ commit }, todo) {
        commit('addTodo', todo)
    }
}

const getters = {
    todoList: state => state.todoList
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};