const state = () => ({
    editNote: {},
    editNoteHistory: [],
    editNoteStatus: 0
})

const mutations = {
    clearNote(state) {
        state.editNote = {}
        state.editNoteHistory = []
    },
    clearEditNoteHistory(state) {
        state.editNoteHistory = []
    },
    setNote(state, { todo, index }) {
        state.editNote = JSON.parse(JSON.stringify(todo))
        state.editNote.index = index
        state.editNoteHistory = []
    },
    setStatus(state, { index, status, history, commit }) {
        state.editNote.todo[index].status = status

        if (!history) {
            state.editNoteHistory.push({
                methods: 'setStatus',
                index: index,
                oldStatus: !status,
                newStatus: status
            })

            state.editNoteStatus++
        }

    },
    addTodo(state, { title, history, index, back }) {

        if (history && back) {
            return state.editNote.todo.splice(index, 1)
        }

        state.editNote.todo.push({
            status: false,
            title: title
        })

        let newIndex = state.editNote.todo.length - 1

        if (!history) {
            state.editNoteHistory.push({
                methods: 'addTodo',
                newTitle: title,
                index: newIndex
            })

            state.editNoteStatus++
        }
    },
    deleteTodo(state, { title, index, history, back }) {

        if (!history) {
            var oldTitle = state.editNote.todo[index].title
        }

        if (history && back) {


            state.editNote.todo.push({
                status: false,
                title: title
            })

            let newIndex = state.editNote.todo.length - 1
            return state.editNoteHistory[state.editNoteStatus]
                .index = newIndex
        }

        state.editNote.todo.splice(index, 1)

        if (!history) {

            state.editNoteHistory.push({
                methods: 'deleteTodo',
                index: index,
                oldTitle: oldTitle
            })

            state.editNoteStatus++
        }
    },
    setTitleTodo(state, { index, title, history }) {

        if (!history) {
            var oldTitle = state.editNote.todo[index].title
        }

        state.editNote.todo[index].title = title

        if (!history) {

            state.editNoteHistory.push({
                methods: 'setTitleTodo',
                index: index,
                oldTitle: oldTitle,
                newTitle: title,
            })

            state.editNoteStatus++
        }
    },
    setTitle(state, { title, history }) {

        if (!history) {
            var oldTitle = state.editNote.title
        }

        state.editNote.title = title

        if (!history) {

            state.editNoteHistory.push({
                methods: 'setTitle',
                oldTitle: oldTitle,
                newTitle: title,
            })

            state.editNoteStatus++
        }
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
        commit('setStatus', { index, status, commit })
    },
    async addTodo({ commit }, { title }) {
        commit('addTodo', { title })
    },
    async deleteTodo({ commit }, { index }) {
        commit('deleteTodo', { index })
    },
    async setTitleTodo({ commit }, { index, title }) {
        commit('setTitleTodo', { index, title })
    },
    async setTitle({ commit }, { title }) {
        commit('setTitle', { title })
    },
    async returnEditBack({ state, commit }) {
        if (state.editNoteStatus !== 0) {

            let history = state.editNoteHistory[state.editNoteStatus - 1]

            let methods = history.methods

            let oldTitle = history.oldTitle

            let oldStatus = history.oldStatus

            let index = history.index

            commit('setEditNoteStatus', state.editNoteStatus - 1)

            commit(`${methods}`, {
                history: true,
                back: true,
                index: index,
                title: oldTitle,
                status: oldStatus,
            })

        }
    },
    async returnEditForward({ state, commit }) {
        if (state.editNoteStatus <= state.editNoteHistory.length - 1) {

            let history = state.editNoteHistory[state.editNoteStatus]

            let methods = history.methods

            let newTitle = history.newTitle

            let newStatus = history.newStatus

            let index = history.index

            commit('setEditNoteStatus', state.editNoteStatus + 1)

            commit(`${methods}`, {
                history: true,
                index: index,
                title: newTitle,
                status: newStatus,
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