const state = () => ({
    todoList: [{
        title: 'Текст для теста ',
        todo: [

            {
                status: true,
                title: 'Пункт 1 текст для теста'
            },
            {
                status: false,
                title: 'Пункт 2 текст для теста'
            },
            {
                status: false,
                title: 'Пункт 3 текст для теста'
            },
            {
                status: false,
                title: 'Пункт 4 текст для теста'
            }

        ]
    }],
    accessEditTitle: false
})

const mutations = {
    addTodo(state) {
        state.todoList.unshift({
            title: '',
            todo: []
        })
    },
    setTitle(state, { title, index }) {
        state.todoList[index].title = title
    },
    setAccessEditTitle(state) {
        state.accessEditTitle = true
    },
    deleteItem(state, { index }) {
        state.todoList.splice(index, 1)
    },
    setTodoList(state, arr) {
        state.todoList = arr
    }
}

const actions = {
    async addTodo({ commit }) {
        commit('addTodo')
    },
    async setTitle({ commit }, { title, index }) {
        commit('setTitle', { title, index })
    },
    async setAccessEditTitle({ commit }) {
        commit('setAccessEditTitle')
    },
    async deleteItem({ commit }, { index }) {
        commit('deleteItem', { index })
    },
    async setTodoList({ commit }, arr) {
        commit('setTodoList', arr)
    }
}

const getters = {
    todoList: state => state.todoList,
    accessEditTitle: state => state.accessEditTitle
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};