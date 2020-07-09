<template>
    <div class="todo">
        <div class="todo__header">
            <div class="todo__header-title">
                Todo List
            </div>
        </div>
        <router-view />
    </div>
    
</template>

<script>
    export default {

    }
</script>

<style lang="sass">

    *
        box-sizing: border-box

    .todo 
        width: 100%
        height: 100vh
        background-color: #F8F8F8
        display: flex
        flex-direction: column
        font-family: 'Roboto-Regular'
    
    .todo__header
        +size(10)
        +size-xs(11)
        display: flex
        align-items: center
        margin: 0 auto
        margin-top: 20px
    
    .todo__header-title
        font-size: 40px
        font-family: 'Roboto-Medium'
        color: rgb(55, 53, 47)
    
</style>