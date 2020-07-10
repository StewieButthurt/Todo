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
                @clickDelete="clickDelete"
            />
        </div>
        <app-overlay
            :question="question"
            @clickOverlayCancel="clickOverlayCancel"
            @clickOverlayDelete="clickOverlayDelete"
        />
    </div>
</template>

<script>

    const AppNewNote = () => import('~/components/new-note.vue')
    const AppNotes = () => import('~/components/notes.vue')
    const AppOverlay = () => import('~/components/overlay/delete.vue')
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
            AppNotes,
            AppOverlay
        },
        computed: {
            todoList() {
                return this.$store.getters['todoList/todoList']
            },
            accessEditTitle() {
                return this.$store.getters['todoList/accessEditTitle']
            }
        },
        data() {
            return {
                question: 'default',
                noteIndex: false
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
            },
            async clickDelete({index}) {
                this.question = true
                this.noteIndex = index
            },
            async clickOverlayCancel() {
                this.question = false
            },
            async clickOverlayDelete() {
                this.question = false
                const arr = []
                this.todoList.forEach((item, index) => {
                    if(this.noteIndex !== index) {
                        arr.push(item)
                    }
                })
                this.$store.dispatch('todoList/setTodoList', arr)
            }
        }
    }
</script>

<style lang="sass">
    
</style>