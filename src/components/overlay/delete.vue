<template>
    <div class="overlay-delete" 
        :class="{
            'overlay-delete_fade-on' : question === true,
            'overlay-delete_fade-off' : question === false
        
        }"
        >
        <div class="overlay-delete__question"
            :class="{
                'overlay-delete__question_fade-on' : question === true,
                'overlay-delete__question_fade-off' : question === false
            }"
        >
            <div class="overlay-delete__question-text">
                Вы точно хотите удалить заметку? 
            </div>
            <div class="overlay-delete__question-buttons">
                <div class="overlay-delete__button"
                    @click="clickOverlayCancel()"
                >
                    Отменить
                </div>
                <div class="overlay-delete__button overlay-delete__button-delete"
                    @click="clickOverlayDelete()"
                >
                    Удалить
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'question'
        ],
        methods: {
            async clickOverlayCancel() {
                this.$emit('clickOverlayCancel')
            },
            async clickOverlayDelete() {
                this.$emit('clickOverlayDelete')
            }
        },
        data() {
            return {
                status: false
            }
        },
        watch: {
            question(val) {
                if(!val) {
                    setTimeout(() => {

                        this.status = false 
                    }, 200);
                }
            }
        }
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
        width: 100%
        height: 100%
        opacity: 0
        background: rgba(50,50,50,.2)
        z-index: -5
    
    .overlay-delete_fade-on
        animation: overlay-delete_fade-on .3s forwards
    
    @keyframes overlay-delete_fade-on
        0% 
            z-index: -5
            opacity: 0
        100%
            z-index: 100
            opacity: 1
    
    .overlay-delete_fade-off
        animation: overlay-delete_fade-off .3s forwards
    
    @keyframes overlay-delete_fade-off
        0%
            z-index: 100
            opacity: 1
        100%
            z-index: -5
            opacity: 0
    
    .overlay-delete__question
        display: flex
        flex-direction: column
        align-items: center
        background-color: white
        border-radius: 4px
        transform: scale(0)
        opacity: 0
        max-width: 400px
        width: 100%
        padding: 40px 40px 20px
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.2)
        +xs-block
            width: 85%
    
    .overlay-delete__question_fade-on
        animation: question-fade-on .3s forwards

    @keyframes question-fade-on
        0% 
            opacity: 0
            transform: scale(0)
        100%
            opacity: 1
            transform: scale(1)

    .overlay-delete__question_fade-off
        animation: question-fade-off .3s forwards
    
    @keyframes question-fade-off
        0%  
            opacity: 1
            transform: scale(1)
        100%
            opacity: 0
            transform: scale(0)
    
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
        user-select: none
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