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
    }]
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
    }
}

const actions = {
    async addTodo({ commit }) {
        commit('addTodo')
    },
    async setTitle({ commit }, { title, index }) {
        commit('setTitle', { title, index })
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