<template>
    <!-- Компонент включающий в себя checkbox 
        и заголовок подпункта
    -->
    <div class="todo-component"
        @mouseenter="enter = true"
        @mouseleave="enter = false"
    >
        <div class="todo-component__checkbox"
            :class="{'todo-component__checkbox-active' : status}"
            @click="clickCheckbox()"
        >
            <svg v-if="status" viewBox="0 0 14 14" class="check"><polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon></svg>
        </div>
        <div class="todo-component__title"
            v-if="!edit || status"
            :class="{'todo-component__title-decoration' : status}"
        >
            {{title}}
        </div>
        <input 
            type="text"
            v-model="localTitle"
            v-if="edit && !status"
            @blur="blurInput()"
        >
        <div class="todo-component__button-delete-wrapper"
            ref="todo-component__button-delete"
            v-if="edit"
            @mouseenter="enterDeleteTodo()"
            @mouseleave="leaveDeleteTodo()"
            :class="{'todo-component__button-delete-wrapper-enter' : enter}"
            @click="clickDeleteTodo()"
        >
            <div class="todo-component__button-delete"
                :class="{'todo-component__button-delete-enter': enter}"
            >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        async mounted() {
            this.localTitle = this.title
        },
        data() {
            return {
                enter: false,
                localTitle: ''
            }
        },
        props: [
            'title',
            'index',
            'status',
            'edit'
        ],
        methods: {
            // обработка клика по checkbox
            async clickCheckbox() {
                if(this.edit) {
                    this.$emit('clickCheckbox', {
                        index: this.index,
                        title: this.title,
                        status: this.status
                    })
                }
            },
            // обработка клика по кнопке удаления подпункта
            async clickDeleteTodo() {
                if(this.edit) {
                    this.$emit('clickDeleteTodo', {
                        index: this.index,
                        title: this.title,
                        status: this.status
                    })
                }
            },
            // обработка потери фокуса у input
            async blurInput() {
                if(this.edit) {
                    if(this.localTitle !== '') {
                        await this.$emit('blurInputTodo', {
                            index: this.index,
                            title: this.localTitle,
                            status: this.status
                        })
                    } else {
                        this.localTitle = this.title
                    }
                }
            },
            // обработка наведения на кнопку удаления подпункта
            // получения координат для отрисовки подсказки
            async enterDeleteTodo() {
                if(this.edit) {

                    const left = this.$refs['todo-component__button-delete']
                        .getBoundingClientRect()
                        .left
                    
                    const top = this.$refs['todo-component__button-delete']
                        .getBoundingClientRect()
                        .top

                    this.$emit('enterDeleteTodo', {
                        title: 'Удалить пункт',
                        top: top + 40,
                        left: left,
                        paddingLeft: 38
                    })
                }
            },
            // обработка потери навдении у кнопки удаления подпункта
            async leaveDeleteTodo() {
                if(this.edit) {
                    this.$emit('leaveDeleteTodo')
                }
            }
        }
    }
</script>

<style lang="sass">
    .todo-component
        display: flex
        margin-top: 2px
        margin-bottom: 2px
        position: relative
        user-select: none
        align-items: center
        width: 35vw
        max-width: 490px
        +xs-block
            width: 70vw
    
    .todo-component input
        outline: none
        border: none
        margin-left: 15px
        text-overflow: ellipsis
        width: 100%
    
    .todo-component__checkbox
        width: 16px
        display: flex
        justify-content: center
        align-items: center
        min-width: 16px
        height: 16px
        border: 1px solid #202124
        border-radius: 2px
        fill: black
        opacity: .8

    .todo-component__checkbox:hover    
        opacity: 1
    
    .todo-component__checkbox-active
        opacity: 1
        background-color: rgb(46, 170, 220)
    
    .todo-component__checkbox svg
        width: 12px
        height: 12px
    
    .todo-component__title
        margin-left: 10px
        text-overflow: ellipsis
        display: block
        white-space: nowrap
        overflow: hidden
        color: #202124
    
    .todo-component__title-decoration
        text-decoration: line-through
    
    .todo-component__button-delete-wrapper
        width: 25px
        height: 25px
        border-radius: 50%
        position: absolute
        right: 100px
        top: 0px
        display: flex
        justify-content: center
        align-items: center
        background-color: #c0bfbf
        cursor: pointer
        opacity: 0
        transition: opacity .2s
    
    .todo-component__button-delete
        width: 17px
        height: 17px
        opacity: 0
        transition: opacity .2s
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=) no-repeat center
        background-size: cover

    
    .todo-component__button-delete-wrapper-enter
        opacity: .5
    
    .todo-component__button-delete-wrapper:hover,
    .todo-component__button-delete-enter
        opacity: 1
</style>