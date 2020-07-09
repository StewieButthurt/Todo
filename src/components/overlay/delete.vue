<template>
    <div class="overlay-delete">
        <div class="overlay-delete__question">
            <div class="overlay-delete__question-text">
                Вы точно хотите удалить заметку? 
            </div>
            <div class="overlay-delete__question-buttons">
                <div class="overlay-delete__button">
                    Отменить
                </div>
                <div class="overlay-delete__button overlay-delete__button-delete">
                    Отменить
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass">
    .overlay-delete
        display: flex
        justify-content: center
        align-items: center
        position: fixed
        top: 0px
        left: 0px   
        width: 100vw
        height: 100vh
        background: rgba(50,50,50,.2)
        z-index: 100
    
    .overlay-delete__question
        display: flex
        flex-direction: column
        align-items: center
        background-color: white
        border-radius: 4px
        max-width: 400px
        width: 100%
        padding: 40px 40px 20px
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.2)
        +xs-block
            width: 85%
    
    .overlay-delete__question-buttons
        display: flex
        margin-top: 16px
        justify-content: flex-end
        +xs-block
            flex-direction: column
            width: 100%
            max-width: 258px
    
    .overlay-delete__button
        display: flex
        justify-content: center
        align-items: center
        padding: 0px 15px
        height: 32px
        cursor: pointer
        margin-right: 16px
        border-radius: 4px
        transition: background-color .15s linear,opacity .15s linear
        box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 1px 0 1px rgba(0,0,0,.05), 0 4px 6px 0 rgba(0,0,0,.05)
        +xs-block
            width: 100%
            margin-right: 0px

    .overlay-delete__button:hover
        background-color: #f5f5f5
        transition: background-color .15s linear,opacity .15s linear
    
    .overlay-delete__button-delete
        background-color: #1867c0
        color: white
        margin-right: 0px
        +xs-block
            margin-top: 16px
    
    .overlay-delete__button-delete:hover
        background-color: #227ce1
</style>