<template>
    <!-- Компонент включающий в себя панель управления,
        которая содержит кнопки, для управления правки заметки
     -->
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
                paddingLeft: 46,
                height: 45
            })"
            @mouseleave="leaveButton()"
            @click="clickEditCancel()"
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
                title: 'Отменить изменение',
                ref: `dashboard__button-back`,
                paddingLeft: 46,
                height: 45
            })"
            @mouseleave="leaveButton()"
            @click="returnEditBack()"
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
        <div class="dashboard__button"
            ref="dashboard__button-forward"
            @mouseenter="enterButton({
                title: 'Повторить изменение',
                ref: `dashboard__button-forward`,
                paddingLeft: 46,
                height: 45
            })"
            @mouseleave="leaveButton()"
            @click="returnEditForward()"
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M21.6376 17.1766L27.1454 10.8718L21.6376 4.56698C21.1925 4.05692 21.2444 3.28237 21.7545 2.83688C22.2646 2.39181 23.0387 2.44413 23.4846 2.95378L29.697 10.0654C30.1008 10.5272 30.1008 11.2167 29.697 11.6786L23.4845 18.7902C23.2418 19.0673 22.9021 19.2096 22.5605 19.2096C22.2744 19.2096 21.9871 19.1098 21.7545 18.9067C21.2444 18.4612 21.1921 17.6866 21.6376 17.1766Z" fill="white" fill-opacity="0.65"/>
                <path d="M8.91023 9.64565L28.7737 9.64565C29.451 9.64565 29.9999 10.1945 29.9999 10.8718C29.9999 11.549 29.451 12.0979 28.7737 12.0979L8.91023 12.0979C5.34914 12.0979 2.45214 14.9948 2.45214 18.5556C2.45214 22.1163 5.34914 25.0133 8.91023 25.0133L27.1389 25.0133C27.8161 25.0133 28.365 25.5622 28.365 26.2394C28.365 26.9166 27.8161 27.4655 27.1389 27.4655L8.91023 27.4655C3.9975 27.4655 -0.000120862 23.4683 -0.000121291 18.5556C-0.000121721 13.6429 3.99709 9.64565 8.91023 9.64565Z" fill="white" fill-opacity="0.65"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="30" height="30" fill="white" transform="matrix(-1 8.74228e-08 8.74228e-08 1 29.9999 0)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div class="dashboard__button"
            ref="dashboard__button-save"
            @mouseenter="enterButton({
                title: 'Сохранить изменения',
                ref: `dashboard__button-save`,
                paddingLeft: 46,
                height: 45
            })"
            @mouseleave="leaveButton()"
            @click="clickSave()"
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C6.72923 0 0 6.72865 0 15C0 23.2713 6.72923 30 15 30C23.2708 30 30 23.2713 30 15C30 6.72865 23.2708 0 15 0ZM15 28.8462C7.36558 28.8462 1.15385 22.6344 1.15385 15C1.15385 7.36558 7.36558 1.15385 15 1.15385C22.6344 1.15385 28.8462 7.36558 28.8462 15C28.8462 22.6344 22.6344 28.8462 15 28.8462Z" fill="white"/>
                <path d="M22.0684 8.84769L13.2017 18.8227L7.85998 14.5494C7.61191 14.3504 7.24787 14.3913 7.04941 14.6394C6.85037 14.8887 6.89075 15.2515 7.13941 15.4506L12.9086 20.066C13.0148 20.1508 13.1423 20.1923 13.2692 20.1923C13.4284 20.1923 13.5871 20.1265 13.7008 19.9985L22.9315 9.61385C23.1433 9.37615 23.1219 9.01096 22.8836 8.79981C22.6448 8.5875 22.2808 8.60885 22.0684 8.84769Z" fill="white"/>
            </svg>
        </div>
        <div class="dashboard__button"
            ref="dashboard__button-delete"
            @mouseenter="enterButton({
                title: 'Удалить заметку',
                ref: `dashboard__button-delete`,
                paddingLeft: 46,
                height: 45
            })"
            @mouseleave="leaveButton()"
            @click="clickDelete()"
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M19.1381 10.869C18.75 10.869 18.4355 11.1835 18.4355 11.5716V24.8503C18.4355 25.2381 18.75 25.5529 19.1381 25.5529C19.5261 25.5529 19.8406 25.2381 19.8406 24.8503V11.5716C19.8406 11.1835 19.5261 10.869 19.1381 10.869Z" fill="white"/>
                <path d="M10.8477 10.869C10.4596 10.869 10.1451 11.1835 10.1451 11.5716V24.8503C10.1451 25.2381 10.4596 25.5529 10.8477 25.5529C11.2357 25.5529 11.5502 25.2381 11.5502 24.8503V11.5716C11.5502 11.1835 11.2357 10.869 10.8477 10.869Z" fill="white"/>
                <path d="M4.80554 8.93119V26.2411C4.80554 27.2642 5.18071 28.2251 5.83608 28.9145C6.48843 29.6058 7.39628 29.9982 8.3464 29.9999H21.6393C22.5897 29.9982 23.4976 29.6058 24.1496 28.9145C24.805 28.2251 25.1802 27.2642 25.1802 26.2411V8.93119C26.483 8.58539 27.3271 7.3268 27.1529 5.98999C26.9783 4.65345 25.8397 3.65366 24.4916 3.65338H20.8945V2.77517C20.8986 2.03664 20.6066 1.32748 20.0838 0.805765C19.561 0.284324 18.8507 -0.00603698 18.1122 7.59676e-07H11.8735C11.135 -0.00603698 10.4248 0.284324 9.90195 0.805765C9.37913 1.32748 9.08712 2.03664 9.09124 2.77517V3.65338H5.49412C4.14606 3.65366 3.00739 4.65345 2.83285 5.98999C2.65858 7.3268 3.50276 8.58539 4.80554 8.93119V8.93119ZM21.6393 28.5947H8.3464C7.14517 28.5947 6.21069 27.5628 6.21069 26.2411V8.99294H23.775V26.2411C23.775 27.5628 22.8406 28.5947 21.6393 28.5947ZM10.4964 2.77517C10.4917 2.40933 10.6355 2.05722 10.8952 1.79897C11.1545 1.54072 11.5074 1.39884 11.8735 1.40515H18.1122C18.4783 1.39884 18.8312 1.54072 19.0906 1.79897C19.3502 2.05695 19.494 2.40933 19.4893 2.77517V3.65338H10.4964V2.77517ZM5.49412 5.05853H24.4916C25.1901 5.05853 25.7562 5.62471 25.7562 6.32316C25.7562 7.02162 25.1901 7.5878 24.4916 7.5878H5.49412C4.79566 7.5878 4.22949 7.02162 4.22949 6.32316C4.22949 5.62471 4.79566 5.05853 5.49412 5.05853V5.05853Z" fill="white"/>
                <path d="M14.9929 10.869C14.6048 10.869 14.2903 11.1835 14.2903 11.5716V24.8503C14.2903 25.2381 14.6048 25.5529 14.9929 25.5529C15.3809 25.5529 15.6954 25.2381 15.6954 24.8503V11.5716C15.6954 11.1835 15.3809 10.869 14.9929 10.869Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="30" height="30" fill="white"/>
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
            // обработка наведения на кнопку
            // функция получает координаты, для отрисовки подсказки
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
            // обработка потери наведения на кнопках
            async leaveButton() {
                this.$emit('leaveButtonDashboard')
            },
            // обработка клика по кнопке "Отменить редактирование"
            async clickEditCancel() {
                this.$emit('clickEditCancelDashboard')
            },
            // обработка клика по кнопке "Отменить изменение"
            async returnEditBack() {
                this.$emit('returnEditBackDashboard')
            },
            // обработка клика по кнопке "Повторить изменение"
            async returnEditForward() {
                this.$emit('returnEditForwardDasboard')
            },
            // обработка клика по кнопке "Удалить заметку"
            async clickDelete() {
                this.$emit('clickDeleteDashboard')
            },
            // обработка клика по кнопке "Сохранить изменения"
            async clickSave() {
                this.$emit('clickSaveDashboard')
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
        padding-top: 20px
        padding-bottom: 20px
    
    .dashboard__button
        cursor: pointer
        transform: scale(.8)
        transition: opacity .2s
        opacity: .5
    
    .dashboard__button:hover
        opacity: 1
</style>