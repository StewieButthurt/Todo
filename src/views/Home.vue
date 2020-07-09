<template>
    <div class="todo__container">
        <div class="todo__header">
            <div class="todo__header-title">
                Todo List
            </div>
        </div>
        <div class="todo__wrapper">
            <app-new-note 
                :todoList="todoList"
                @addTask="addTask"
            />
            <app-notes 
                v-for="(item, index) in todoList"
                :key="`${item.title}_${index}`"
                :title="item.title"
                :todo="item.todo"
                :index="index"
                :todoList="todoList"
                :accessEditTitle="accessEditTitle"
                @changeTitle="changeTitle"
            />
        </div>
    </div>
</template>

<script>

    const AppNewNote = () => import('~/components/new-note.vue')
    const AppNotes = () => import('~/components/notes.vue')
    export default {
        components: {
            AppNewNote,
            AppNotes
        },
        computed: {
            todoList() {
                return this.$store.getters['todoList/todoList']
            },
            accessEditTitle() {
                return this.$store.getters['todoList/accessEditTitle']
            }
        },
        methods: {
            async addTask() {
                this.$store.dispatch('todoList/addTodo')
                if(!this.accessEditTitle) {
                    this.$store.dispatch('todoList/setAccessEditTitle')
                }
            },
            async changeTitle({title, index}) {
                
            }
        }
    }
</script>

<style lang="sass">
    
</style>