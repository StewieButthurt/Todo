<template>
    <div 
        class="hint" 
        :style="{left: `${left - paddingLeft}px`, top: `${top}px`}"
    >
        <div class="hint__wrapper">
            <div class="hint__text">
                {{title}}
            </div>
            <div class="hint__rect">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'top',
            'left',
            'paddingLeft'
        ],
        data() {
            return {
                leftRect: false
            }
        }
    }
</script>

<style lang="sass">
    .hint
        position: absolute
        padding: 6px 8px
        background-color: #323232
        font-size: 13px
        color: white
        opacity: .8
        width: max-content
        z-index: 20
    
    .hint__wrapper
        display: flex
        justify-content: center
        align-items: center
        position: relative
    
    .hint__rect
        position: absolute
        top: -12px
        width: 12px
        height: 12px
        background-color: #323232
        transform: rotate(45deg)
</style>