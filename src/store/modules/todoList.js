const state = () => ({
    todoList: []
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