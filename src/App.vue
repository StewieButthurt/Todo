<template>
    <div class="todo">
        <transition 
            name="fade-page" 
            appear
            mode="out-in"
        >
            <router-view />
        </transition>
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
        height: 100%
        background-color: #F8F8F8
        display: flex
        flex-direction: column
        font-family: 'Roboto-Regular'
    
    .fade-page-enter-active
        animation: fade-page-enter .3s linear

    .fade-page-leave-active
        animation: fade-page-enter .3s linear reverse
    
    @keyframes fade-page-enter
        0%
            opacity: 0
        100%
            opacity: 1
    .todo__wrapper
        +size(10)
        +size-xs(11)
        height: 80vh
        max-width: 1140px
        border-top: 1px solid #e4e4e4
        background-color: #fff
        margin: 0 auto
        margin-top: 20px
        margin-bottom: 40px
        border-radius: 4px
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15)
        overflow-x: hidden
        overflow-y: auto
        position: relative
    
    .todo__header
        +size(10)
        +size-xs(11)
        max-width: 1140px
        display: flex
        align-items: center
        margin: 0 auto
        margin-top: 20px
    
    .todo__header-title
        font-size: 40px
        font-family: 'Roboto-Medium'
        color: rgb(55, 53, 47)
    
    .fade-hint-enter-active
        animation: fade-hint-enter .3s linear 

    .fade-hint-leave-active
        animation: fade-hint-enter .3s linear reverse
    
    @keyframes fade-hint-enter
        0%
            opacity: 0
        100%
            opacity: .8
    
</style>