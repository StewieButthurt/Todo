<template>
    <div class="new-note"
        @click="addTask()"
    >
        <div class="new-note__svg">
            <svg viewBox="0 0 426.66667 426.66667" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg>        </div>
        <div class="new-note__text">
            New Notes
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'todoList'
        ],
        methods: {
            async addTask() {
                if(this.todoList[0].title !== '') {
                    this.$emit('addTask')
                }
            }
        }
    }
</script>

<style lang="sass">

    .new-note
        display: flex
        align-items: center
        height: 72px
        border-bottom: 1px solid #e4e4e4
        user-select: none
        width: 100%
        cursor: pointer
        transition-duration: .15s
        z-index: 5
    
    .new-note:hover
        background-color: #f2f2f2
        transition-duration: .15s
    
    .new-note__svg
        width: 20px
        height: 20px
        margin-left: 20px
    
    .new-note__svg svg
        width: 100%
        height: 100%
    
    .new-note__text
        margin-left: 20px
</style>