const state = () => ({
    todoList: [{
        title: 'Устроиться на работу в TR Logic LLC',
        todo: [

            {
                status: true,
                title: 'Откликнуться на вакансию'
            },
            {
                status: true,
                title: 'Выполнить тестовое задание'
            },
            {
                status: false,
                title: 'Пройти собеседование'
            }

        ]
    }],
    accessEditTitle: false
})

const mutations = {
    // добавляем новую заметку
    addTodo(state) {
        state.todoList.unshift({
            title: '',
            todo: []
        })
    },
    // устанавливаем заголовок заметки
    // на главной странице
    setTitle(state, { title, index }) {
        state.todoList[index].title = title
    },
    // параметр дает или запрещает доступ 
    // на редактирование заголовка
    setAccessEditTitle(state) {
        state.accessEditTitle = true
    },
    // удаляем заметку на главной странице
    deleteItem(state, { index }) {
        state.todoList.splice(index, 1)
    },
    // устанавлваем список заметок
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