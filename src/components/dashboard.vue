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
        <div class="dashboard__button"
            ref="dashboard__button-cancel-edit"
            @mouseenter="enterButton({
                title: 'Отменить редактирование',
                ref: `dashboard__button-cancel-edit`,
                paddingLeft: 43,
                height: 45
            })"
            @mouseleave="leaveButton()"
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M21.8749 30C17.3949 30 13.7499 26.355 13.7499 21.875C13.7499 17.395 17.3949 13.75 21.8749 13.75C26.3549 13.75 29.9999 17.395 29.9999 21.875C29.9999 26.355 26.3549 30 21.8749 30ZM21.8749 15.625C18.4286 15.625 15.6249 18.4288 15.6249 21.875C15.6249 25.3213 18.4286 28.125 21.8749 28.125C25.3211 28.125 28.1249 25.3213 28.1249 21.875C28.1249 18.4288 25.3211 15.625 21.8749 15.625Z" fill="white"/>
                <path d="M25.3124 22.8125H18.4374C17.9199 22.8125 17.4999 22.3925 17.4999 21.875C17.4999 21.3575 17.9199 20.9375 18.4374 20.9375H25.3124C25.8299 20.9375 26.2499 21.3575 26.2499 21.875C26.2499 22.3925 25.8299 22.8125 25.3124 22.8125Z" fill="white"/>
                <path d="M24.8386 11.2638C24.5986 11.2638 24.3586 11.1725 24.1761 10.9888L19.0074 5.82125C18.6411 5.455 18.6411 4.86125 19.0074 4.495C19.3736 4.12875 19.9674 4.12875 20.3336 4.495L25.5024 9.6625C25.8686 10.0288 25.8686 10.6225 25.5024 10.9888C25.3186 11.1725 25.0786 11.2638 24.8386 11.2638Z" fill="white"/>
                <path d="M0.937375 30C0.693625 30 0.453625 29.905 0.274875 29.725C0.0173751 29.4675 -0.0676249 29.0837 0.0561251 28.7425L3.03113 20.5425C3.07863 20.4125 3.15238 20.2962 3.24988 20.2L22.0999 1.3625C23.8399 -0.392501 26.8949 -0.395001 28.6411 1.365C29.5161 2.24125 29.9999 3.4 29.9999 4.625C29.9999 5.87375 29.5136 7.03875 28.6324 7.90625L24.7136 11.825C24.3474 12.1912 23.7536 12.1912 23.3874 11.825C23.0211 11.4587 23.0211 10.865 23.3874 10.4987L27.3124 6.57375C27.8386 6.05625 28.1249 5.365 28.1249 4.62375C28.1249 3.89875 27.8361 3.21125 27.3124 2.68625C26.2711 1.63625 24.4636 1.63875 23.4286 2.68375L4.72238 21.3787L2.50238 27.4988L8.62238 25.2787L10.4999 23.4C10.8661 23.0337 11.4599 23.0337 11.8261 23.4C12.1924 23.7662 12.1924 24.36 11.8261 24.7262L9.79988 26.75C9.70238 26.8475 9.58613 26.9225 9.45738 26.9688L1.25738 29.9438C1.15238 29.9813 1.04488 30 0.937375 30Z" fill="white"/>
                <path d="M9.13485 27.025C8.89485 27.025 8.65485 26.9337 8.47235 26.75L3.24985 21.5287C2.8836 21.1625 2.8836 20.5687 3.24985 20.2025C3.6161 19.8362 4.20985 19.8362 4.5761 20.2025L9.7986 25.425C10.1648 25.7912 10.1648 26.385 9.7986 26.7512C9.61485 26.9337 9.37485 27.025 9.13485 27.025Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="30" height="30" fill="white" transform="translate(-0.00012207)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div class="dashboard__button"
            ref="dashboard__button-back"
            @mouseenter="enterButton({
                title: 'Отменить действие',
                ref: `dashboard__button-back`,
                paddingLeft: 43,
                height: 45
            })"
            @mouseleave="leaveButton()"
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M8.36214 17.1766L2.85433 10.8718L8.36214 4.56698C8.80722 4.05692 8.75531 3.28237 8.24525 2.83689C7.73519 2.39181 6.96105 2.44413 6.51515 2.95378L0.302748 10.0654C-0.10108 10.5272 -0.101081 11.2167 0.302747 11.6786L6.51521 18.7902C6.75796 19.0673 7.09763 19.2096 7.43929 19.2096C7.7254 19.2096 8.01269 19.1098 8.24524 18.9067C8.75536 18.4612 8.80763 17.6866 8.36214 17.1766Z" fill="white" fill-opacity="0.65"/>
                <path d="M21.0895 9.64564L1.22601 9.64564C0.548784 9.64564 -0.000122166 10.1945 -0.000122285 10.8718C-0.000122403 11.549 0.548784 12.0979 1.22601 12.0979L21.0895 12.0979C24.6506 12.0979 27.5476 14.9948 27.5476 18.5556C27.5476 22.1163 24.6506 25.0133 21.0895 25.0133L2.86089 25.0133C2.18366 25.0133 1.63476 25.5622 1.63476 26.2394C1.63476 26.9166 2.18366 27.4655 2.86089 27.4655L21.0895 27.4655C26.0023 27.4655 29.9999 23.4683 29.9999 18.5556C29.9999 13.6429 26.0027 9.64564 21.0895 9.64564Z" fill="white" fill-opacity="0.65"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="30" height="30" fill="white" transform="translate(-0.00012207)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
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
        },
        methods: {
            async enterButton({title, ref, paddingLeft, height}) {
                const left = this.$refs[`${ref}`]
                    .getBoundingClientRect()
                    .left
                
                const top = this.$refs[`${ref}`]
                    .getBoundingClientRect()
                    .top

                this.$emit('enterButtonDashboard', {
                    title: title,
                    top: top + height,
                    left: left,
                    paddingLeft: paddingLeft
                })
            },
            async leaveButton() {
                this.$emit('leaveButtonDashboard')
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
    
    .dashboard__button
        cursor: pointer
</style>