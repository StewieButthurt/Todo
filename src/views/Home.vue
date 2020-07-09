<template>
    <div class="todo__wrapper">
        <app-new-note 
            @addTask="addTask"
        />
        <app-notes 
            v-for="(item, index) in todoList"
            :key="item.title"
            :title="item.title"
            :todo="item.todo"
            :index="index"
            @changeTitle="changeTitle"
        />
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
            }
        },
        methods: {
            async addTask() {
                
            },
            async changeTitle({title, index}) {
                
            }
        }
    }
</script>

<style lang="sass">
    .todo__wrapper
        +size(10)
        +size-xs(11)
        height: 80vh
        border-top: 1px solid #e4e4e4
        background-color: #fff
        margin: 0 auto
        margin-top: 20px
        border-radius: 4px
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15)
        overflow-y: auto
        overflow-x: hidden
</style>