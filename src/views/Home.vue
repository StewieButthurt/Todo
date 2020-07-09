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
                @clickNotes="clickNotes"
            />
        </div>
    </div>
</template>

<script>

    const AppNewNote = () => import('~/components/new-note.vue')
    const AppNotes = () => import('~/components/notes.vue')
    export default {
        async mounted() {
            this.todoList.forEach((item, index) => {
                if(item.title === '') {
                    this.$store.dispatch('todoList/deleteItem', {
                        index: index
                    })
                }
            })
        },
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
                this.$store.dispatch('todoList/setTitle', {
                    title: title,
                    index: index
                })
            },
            async clickNotes({index, title}) {
                if(title !== '') {
                    this.$router.push('/edit')
                }
            }
        }
    }
</script>

<style lang="sass">
    
</style>