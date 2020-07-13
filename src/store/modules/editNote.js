const state = () => ({
    editNote: {},
    editNoteHistory: [],
    editNoteStatus: 0
})

const mutations = {
    // очистка объекта editNote
    // очистка массива editNoteHistory
    clearNote(state) {
        state.editNote = {}
        state.editNoteHistory = []
    },
    // очистка массива editNoteHistory
    clearEditNoteHistory(state) {
        state.editNoteHistory = []
    },
    // получение объекта заметки для редактирование
    setNote(state, { todo, index }) {
        state.editNote = JSON.parse(JSON.stringify(todo))
        state.editNote.index = index
        state.editNoteHistory = []
    },
    // установка статуса у checkbox
    setStatus(state, { index, status, history, commit }) {
        state.editNote.todo[index].status = status

        // параметр history определяет откуда мы вызываем метод
        // при кликах по кнопкам "назад" и "вперед"
        // условие не сработает
        if (!history) {

            // записываем в историю,что мы вызывали метод
            // записываем параметры на момент вызова функции
            state.editNoteHistory.push({
                methods: 'setStatus',
                index: index,
                oldStatus: !status,
                newStatus: status
            })

            // указывает на момент истории изменений
            // другими словами
            // указывает на элемент массива где содержатся данные
            state.editNoteStatus++
        }

    },
    // добавляем новый подпункт у заметки
    addTodo(state, { title, history, index, back }) {

        // параметр back, указывает, что мы вызвали функцию
        // при клике на кнопку "назад"
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
    // удаляем подпункт у заметки
    deleteTodo(state, { title, index, history, back, status }) {

        if (!history) {
            var oldTitle = state.editNote.todo[index].title
            var oldStatus = state.editNote.todo[index].status
        }

        if (history && back) {


            state.editNote.todo.push({
                status: status,
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
                oldTitle: oldTitle,
                oldStatus: oldStatus
            })

            state.editNoteStatus++
        }
    },
    // устанавливаем заголвок у подпункта
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
    // устанавливаем заголовок заметки 
    // на странице редактирования
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
    // устанавливаем значение счетчика-указателя
    setEditNoteStatus(state, num) {
        state.editNoteStatus = num
    }
}

const actions = {
    async clearNote({ commit }) {
        commit('clearNote')
    },
    async clearEditNoteHistory({ commit }) {
        commit('clearEditNoteHistory')
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
    // метод вызывается при клике на кнопку "назад"
    // метод по указателю получает данные из массива истории
    // позволяя перемещаться по истории изменений
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
    // метод вызывается при клике на кнопку "вперед"
    // метод по указателю получает данные из массива истории
    // позволяя перемещаться по истории изменений
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