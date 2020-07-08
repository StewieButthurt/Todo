const state = () => ({
    todoList: [{
        title: 'Разъебать лица компании ',
        // data:
        todo: [

            {
                status: false,
                title: 'Пункт 1 Разъебать лица компании'
            },
            {
                status: false,
                title: 'Пункт 2 Разъебать лица компании'
            },
            {
                status: false,
                title: 'Пункт 3 Разъебать лица компании'
            },
            {
                status: false,
                title: 'Пункт 4 Разъебать лица компании'
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