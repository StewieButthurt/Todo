<template>
    <div class="todo">
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