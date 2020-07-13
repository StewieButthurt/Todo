<template>
    <div class="todo__container">
        <div class="todo__header">
            <div class="todo__header-title">
                Редактирование заметки
            </div>
        </div>
        <div class="todo__wrapper"
            id="todo__wrapper-ref"
            v-resize
        >
            <div class="todo-edit">
                <div class="todo-edit__text-wrapper">
                    <div class="todo-edit__text">
                        <input 
                            type="text"
                            v-model="localTitle"
                            placeholder="Untitled"
                            @blur="changeTitle()"
                            @keyup.enter="changeTitle()"
                        >
                    </div>
                </div>
            </div>
            <div class="todo-edit__todo-list"
                id="todo-edit__todo-list"
            >
                <app-todo 
                    v-for="(item, index) in editNote.todo"
                    :key="`${item.title}_${index}_edit`"
                    v-if="!item.status"
                    :index="index"
                    :title="item.title"
                    :status="item.status"
                    :edit="true"
                    @clickCheckbox="clickCheckbox"
                    @clickDeleteTodo="clickDeleteTodo"
                    @blurInputTodo="blurInputTodo"
                    @enterDeleteTodo="enterDeleteTodo"
                    @leaveDeleteTodo="leaveDeleteTodo"
                />
                <div class="todo-edit__input">
                    <div class="todo-edit__input-logo">
                    </div>
                    <input type="text" 
                    placeholder="Новый пункт"
                    spellcheck="false"
                    v-model="todo"
                    @blur="blurInput()"
                    @keyup.enter="blurInput()"
                    >
                </div>
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
                    :key="`${item.title}_${index}_edit`"
                    v-if="item.status"
                    :index="index"
                    :title="item.title"
                    :status="item.status"
                    :edit="true"
                    @clickCheckbox="clickCheckbox"
                    @clickDeleteTodo="clickDeleteTodo"
                    @blurInputTodo="blurInputTodo"
                    @enterDeleteTodo="enterDeleteTodo"
                    @leaveDeleteTodo="leaveDeleteTodo"
                />
            </div>
        </div>
        <app-dashboard 
            :top="`${top}px`"
            :right="`${left}px`"
            :position="'fixed'"
            :width="'60px'"
            :height="'80vh'"
            @enterButtonDashboard="enterButtonDashboard"
            @leaveButtonDashboard="leaveButtonDashboard"
            @clickEditCancelDashboard="clickEditCancelDashboard"
            @returnEditBackDashboard="returnEditBackDashboard"
            @returnEditForwardDasboard="returnEditForwardDasboard"
        />
        <transition 
            name="fade-hint"
            mode="out-in"
        >
            <app-hint 
                :title="titleHints"
                :top="hintTop"
                :left="hintLeft"
                :paddingLeft="paddingLeft"
                v-show="hintStatus"
            />
        </transition >
    </div>
</template>

<script>
    const AppTodo = () => import('~/components/todo.vue')
    const AppDashboard = () => import('~/components/dashboard.vue')
    const AppHint = () => import('~/components/hints/index.vue')
    export default {
        async mounted() {
            this.localTitle = this.title
            this.getCoord()
        },
        data() {
            return {
                todo: '',
                top: 0,
                right: 0,
                left: 0,
                localTitle: '',
                titleHints: false,
                hintStatus: false,
                paddingLeft: false,
                hintTop: false,
                hintLeft: false
            }
        },
        watch: {
            title(val) {
                this.localTitle = val
            }
        },
        directives: {
            resize: {
                inserted: (el, binding, vnode) => {
                    const f = (evt) => {
                        vnode.context.getCoord()
                    }
                    window.onresize = f
                }
            }
        },
        computed: {
            editNote() {
                return this.$store.getters['editNote/editNote']
            },
            title() {
                return this.editNote.title
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
            AppTodo,
            AppDashboard,
            AppHint
        },
        methods: {
            async changeTitle() {
                if(this.localTitle !== '') {
                    this.$store.dispatch('editNote/setTitle', {
                        title: this.localTitle
                    })
                } else {
                    this.localTitle = this.title
                }
                
            },
            async clickCheckbox({index, title, status}) {
                this.$store.dispatch('editNote/setStatus', {
                    index: index,
                    status: !status
                })
            },
            async blurInput() {
                if(this.todo !== '') {
                    await this.$store.dispatch('editNote/addTodo', {
                        title: this.todo
                    })
                    this.todo = ''
                }
            },
            async clickDeleteTodo({index, title, status}) {
                this.$store.dispatch('editNote/deleteTodo', {
                    index: index
                })
                this.hintStatus = false
            },
            async blurInputTodo({index, title, status}) {
                this.$store.dispatch('editNote/setTitleTodo', {
                    index: index,
                    title: title,
                    status: status
                })
            },
            async enterDeleteTodo({title, top, left, paddingLeft}) {
                this.titleHints = title
                this.paddingLeft = paddingLeft
                this.hintTop = top
                this.hintLeft = left
                this.hintStatus = true
            },
            async leaveDeleteTodo() {
                this.hintStatus = false
            },
            async getCoord() {
                const top = document
                    .getElementById('todo__wrapper-ref')
                    .getBoundingClientRect()
                    .top
            
                const right = document
                    .getElementById('todo__wrapper-ref')
                    .getBoundingClientRect()
                    .right
                
                const left = document
                    .getElementById('todo__wrapper-ref')
                    .getBoundingClientRect()
                    .left

                this.top = top
                this.left = left
                this.right = right
            },
            async enterButtonDashboard({title, top, left, paddingLeft}) {
                this.titleHints = title
                this.paddingLeft = paddingLeft
                this.hintTop = top
                this.hintLeft = left
                this.hintStatus = true
            },
            async leaveButtonDashboard() {
                this.hintStatus = false
            },
            async clickEditCancelDashboard() {
                this.$router.push('/')
                await this.$store.dispatch('editNote/clearNote')
            },
            async returnEditBackDashboard() {
                this.$store.dispatch('editNote/returnEditBack')
            },
            async returnEditForwardDasboard() {
                this.$store.dispatch('editNote/returnEditForward')
            }
        }
    }
</script>

<style lang="sass">
    .todo-edit
        display: flex
        user-select: none
    
    .todo-edit__text-wrapper
        display: flex
        width: 100%
        box-shadow: 0 2px 5px rgba(0,0,0,0.2)
    
    .todo-edit__text
        font-size: 25px
        font-family: 'Roboto-Medium'
        margin: 20px 90px 20px 20px
        user-select: none
    
    .todo-edit__text input
        outline: none
        border: none
    
    .todo-edit__todo-list,
    .todo-edit__todo-list-enabled
        display: flex
        flex-direction: column
        padding-left: 25px
        margin-top: 20px
        margin-bottom: 20px
    
    #todo-edit__todo-list,
    #todo-edit__todo-list-enabled
        font-size: 18px
    
    .todo-edit__input
        display: flex
        align-items: center
        margin-top: 7px
        color: #202124
        user-select: none

    .todo-edit__input input
        outline: none
        border: none
    
    .todo-edit__input-logo
        opacity: .7
        width: 20px
        height: 20px
        margin-right: 15px
        background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMzggMjZoLTEydjEyaC00di0xMmgtMTJ2LTRoMTJ2LTEyaDR2MTJoMTJ2NHoiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K) no-repeat center
    
    #todo-edit__todo-list .todo-component,
    #todo-edit__todo-list-enabled .todo-component
        margin-top: 7px
        margin-bottom: 7px
        width: 100%
        padding-right: 145px
        max-width: none
        cursor: text
    
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
    
    #todo-edit__todo-list .todo-component__checkbox,
    #todo-edit__todo-list-enabled .todo-component__checkbox
        width: 18px
        min-width: 18px
        height: 18px
        cursor: pointer
    
    #todo-edit__todo-list .todo-component__checkbox svg,
    #todo-edit__todo-list-enabled .todo-component__checkbox svg
        width: 14px
        height: 14px
    
    .todo-edit__line
        width: auto
        display: flex
        height: 1px
        background-color: #d3d3d3
        margin: 20px 90px 0px 25px
    
    
</style>