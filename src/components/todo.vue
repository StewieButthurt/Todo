<template>
    <div class="todo-component">
        <div class="todo-component__checkbox">
            <svg viewBox="0 0 14 14" class="check"><polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon></svg>
        </div>
        <div class="todo-component__title">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'index',
            'status'
        ]
    }
</script>

<style lang="sass">
    .todo-component
        display: flex
        margin-top: 2px
        margin-bottom: 2px
        align-items: center
        width: 35vw
        +xs-block
            width: 70vw
    
    .todo-component__checkbox
        width: 16px
        display: flex
        justify-content: center
        align-items: center
        min-width: 16px
        height: 16px
        border: 1px solid black
        fill: black
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
</style>