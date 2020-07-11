<template>
    <div class="todo__container">
        <div class="todo__header">
            <div class="todo__header-title">
                Todo List
            </div>
        </div>
        <div class="todo__wrapper">
            <div class="todo-edit">
                <div class="todo-edit__text-wrapper">
                    <div class="todo-edit__text">
                        {{editNote.title}}
                    </div>
                </div>
            </div>
            <div class="todo-edit__todo-list"
                id="todo-edit__todo-list"
            >
                <app-todo 
                    v-for="(item, index) in editNote.todo"
                    :key="item.title"
                    v-if="!item.status"
                    :index="index"
                    :title="item.title"
                    :status="item.status"
                    :edit="true"
                    @clickCheckbox="clickCheckbox"
                />
            </div>
            <div class="todo-edit__line"
                v-if="todoEnabled > 0"
            >

            </div>
            <div class="todo-edit__todo-list-enabled"
                id="todo-edit__todo-list-enabled"
                v-if="todoEnabled > 0"
            >
                <app-todo 
                    v-for="(item, index) in editNote.todo"
                    :key="item.title"
                    v-if="item.status"
                    :index="index"
                    :title="item.title"
                    :status="item.status"
                    :edit="true"
                    @clickCheckbox="clickCheckbox"
                />
            </div>
        </div>
    </div>
</template>

<script>
    const AppTodo = () => import('~/components/todo.vue')
    export default {
        computed: {
            editNote() {
                return this.$store.getters['editNote/editNote']
            },
            todoDisabled() {
                let counter = 0
                this.editNote.todo.forEach(element => {
                    if(!element.status) {
                        counter++
                    }
                });
                return counter
            },
            todoEnabled() {
                let counter = 0
                this.editNote.todo.forEach(element => {
                    if(element.status) {
                        counter++
                    }
                });
                return counter
            }
        },
        components: {
            AppTodo
        },
        methods: {
            async clickCheckbox({index, title, status}) {
                this.$store.dispatch('editNote/setStatus', {
                    index: index,
                    status: !status
                })
            }
        }
    }
</script>

<style lang="sass">
    .todo-edit
        display: flex
    
    .todo-edit__text-wrapper
        display: flex
        width: 100%
        box-shadow: 0 2px 5px rgba(0,0,0,0.2)
    
    .todo-edit__text
        font-size: 32px
        font-family: 'Roboto-Medium'
        margin: 20px 0px 20px 20px
    
    .todo-edit__todo-list,
    .todo-edit__todo-list-enabled
        display: flex
        flex-direction: column
        padding-left: 25px
        padding-right: 30px
        margin-top: 20px
    
    #todo-edit__todo-list,
    #todo-edit__todo-list-enabled
        font-size: 20px
    
    #todo-edit__todo-list .todo-component,
    #todo-edit__todo-list-enabled .todo-component
        margin-top: 7px
        margin-bottom: 7px
        width: 100%
        max-width: none
    
    #todo-edit__todo-list-enabled .todo-component
        opacity: .5
    
    #todo-edit__todo-list .todo-component__checkbox,
    #todo-edit__todo-list-enabled .todo-component__checkbox
        align-self: flex-start
    
    #todo-edit__todo-list .todo-component__title,
    #todo-edit__todo-list-enabled .todo-component__title
        display: flex
        white-space: normal
        margin-left: 15px
    
    #todo-edit__todo-list-enabled .todo-component__title
        text-decoration: line-through

    #todo-edit__todo-list .todo-component__checkbox,
    #todo-edit__todo-list-enabled .todo-component__checkbox
        width: 20px
        min-width: 20px
        height: 20px
        cursor: pointer
    
    #todo-edit__todo-list .todo-component__checkbox svg,
    #todo-edit__todo-list-enabled .todo-component__checkbox svg
        width: 16px
        height: 16px
    
    .todo-edit__line
        width: auto
        display: flex
        height: 1px
        background-color: #d3d3d3
        margin: 20px 30px 0px 25px
</style>