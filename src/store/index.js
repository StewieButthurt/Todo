import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

// модуль содержащий данные и методы для общего списка заметок
// в основном используется на главной странице
import todoList from './modules/todoList'

// модуль содержащий данные и методы для страницы редактирования заметки
import editNote from './modules/editNote'

Vue.use(Vuex)

export default new Vuex.Store({
    // модуль, синхронизирующий vuex и localStorage
    plugins: [createPersistedState()],
    modules: {
        todoList,
        editNote
    }
})