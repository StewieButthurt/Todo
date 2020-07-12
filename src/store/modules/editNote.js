const state = () => ({
    editNote: false,
    editNoteHistory: [],
    editNoteStatus: 0
})

const mutations = {
    clearNote(state) {
        state.editNote = []
        state.editNoteHistory = []
    },
    clearEditNoteHistory(state) {
        state.editNoteHistory = []
    },
    setNote(state, { todo, index }) {
        state.editNote = todo
        state.editNote.index = index
        state.editNoteHistory = []
    },
    setStatus(state, { index, status, history }) {
        console.log('setStatus')
        state.editNote.todo[index].status = status

        if (!history) {

            if (state.editNoteStatus !== state.editNoteHistory.length) {

                console.log('заменяем массив')
                let arr = []
                state.editNoteHistory.forEach((item, index) => {
                    if (index <= state.editNoteStatus - 1) {
                        arr.push(item)
                    }
                });

                state.editNoteHistory = arr

            }


            state.editNoteHistory.push({
                methods: 'setStatus',
                index: index,
                oldStatus: !status,
                newStatus: status
            })

            state.editNoteStatus++
        }

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
    },
    setEditNoteStatus(state, num) {
        state.editNoteStatus = num
    }
}

const actions = {
    async clearNote({ commit }) {
        commit('clearNote')
    },
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
    },
    async returnEditBack({ state, commit }) {
        if (state.editNoteStatus !== 0) {

            console.log(state.editNoteStatus)

            let methods = state.editNoteHistory[state.editNoteStatus - 1].methods

            let oldTitle = state.editNoteHistory[state.editNoteStatus - 1].oldTitle ?
                state.editNoteHistory[state.editNoteStatus - 1].oldTitle :
                false

            let oldStatus = state.editNoteHistory[state.editNoteStatus - 1].oldStatus ?
                state.editNoteHistory[state.editNoteStatus - 1].oldStatus :
                false

            let index = state.editNoteHistory[state.editNoteStatus - 1].index ?
                state.editNoteHistory[state.editNoteStatus - 1].index :
                false

            commit('setEditNoteStatus', state.editNoteStatus - 1)

            console.log(state.editNoteStatus)

            commit(`${methods}`, {
                history: true,
                index: index ? index : false,
                title: oldTitle ? oldTitle : false,
                status: oldStatus ? oldStatus : false
            })

        }
    },
    async setEditNoteStatus({ commit }, num) {
        commit('setEditNoteStatus', num)
    },
    async clearEditNoteHistory({ commit }) {
        commit('clearEditNoteHistory')
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