const state = () => ({
    editNote: false
})

const mutations = {
    setNote(state, { todo, index }) {
        state.editNote = todo
        state.editNote.index = index
    },
    setStatus(state, { index, status }) {
        state.editNote.todo[index].status = status
    },
    addTodo(state, title) {
        state.editNote.todo.push({
            status: false,
            title: title
        })
    },
    deleteTodo(state, index) {
        state.editNote.todo.splice(index, 1)
    },
    setTitleTodo(state, { index, title }) {
        state.editNote.todo[index].title = title
    },
    setTitle(state, { title }) {
        state.editNote.title = title
    }
}

const actions = {
    async setNote({ commit }, { todo, index }) {
        commit('setNote', { todo, index })
    },
    async setStatus({ commit }, { index, status }) {
        commit('setStatus', { index, status })
    },
    async addTodo({ commit }, title) {
        commit('addTodo', title)
    },
    async deleteTodo({ commit }, index) {
        commit('deleteTodo', index)
    },
    async setTitleTodo({ commit }, { index, title }) {
        commit('setTitleTodo', { index, title })
    },
    async setTitle({ commit }, { title }) {
        commit('setTitle', { title })
    }
}

const getters = {
    editNote: state => state.editNote
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};