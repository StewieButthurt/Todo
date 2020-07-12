<template>
    <div class="dashboard"
        :style="{
            position: `${position}`,
            left: `${left}`, 
            top: `${top}`, 
            right: `${right}`,
            bottom: `${bottom}`,
            width: `${width}`,
            height: `${height}`
        }"
    >

    </div>
</template>

<script>
    export default {
        props: {
            left: {
                type: String,
                default: 'auto'
            },
            top: {
                type: String,
                default: 'auto'
            },
            right: {
                type: String,
                default: 'auto'
            },
            bottom: {
                type: String,
                default: 'auto'
            },
            position: {
                type: String,
                default: 'fixed'
            },
            width: {
                type: String,
                default: '0px'
            },
            height: {
                type: String,
                default: '0px'
            }
        }
    }
</script>

<style lang="sass">
    .dashboard
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-around
        background: #383838
        border-radius: 0px 5px 0px 0px
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15)
</style>