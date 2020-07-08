<template>
    <div class="todo-component">
        <div class="todo-component__checkbox">

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
    
    .todo-component__checkbox
        width: 13px
        min-width: 13px
        height: 13px
        border: 1px solid black
    
    .todo-component__title
        margin-left: 10px
        text-overflow: ellipsis
        display: block
        white-space: nowrap
        overflow: hidden
</style>