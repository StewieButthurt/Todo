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
    }
}

const actions = {
    async setNote({ commit }, { todo, index }) {
        commit('setNote', { todo, index })
    },
    async setStatus({ commit }, { index, status }) {
        commit('setStatus', { index, status })
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