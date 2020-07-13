<template>
    <!-- Компонент включающий в себя превью заметки, которая содержит 
        заголовок и три подпункта
     -->
    <div class="notes-wrapper"
        @click="clickNotes()"
        :class="{'notes-hover' : enter}"
        @mouseenter="enter = true"
        @mouseleave="enter = false"
    >
        <div class="notes"
        :class="{'notes-fade' : index === 0 && title === ''}"
        >
            <div class="notes__title"
                v-if="index > 0 || 
                !accessEditTitle ||
                todoList[0].title !== ''"
            >
                {{title}}
            </div>
            <input class="notes__title notes__title-write-text"
                v-model="localTitle"
                placeholder="Без названия"
                @blur="changeTitle()"
                v-if="index === 0 && 
                accessEditTitle && 
                todoList[0].title === ''"
            >
            <div class="notes__todo" 
                id="notes__todo"
                :class="{'notes__todo-padding' : padding}"
            >
                <app-todo 
                    v-for="(item, index) in threeTodo"
                    :key="item.title"
                    :index="index"
                    :title="item.title"
                    :status="item.status"
                    :edit="edit"
                    @clickCheckbox="clickCheckbox"
                />
            </div>
            <div class="notes__button-delete"
                :ref="`${title}${index}`"
                :class="{'notes__button-delete-mouseenter' : enter}"
                @click.stop="clickDelete()"
                @mouseenter.stop="enterButtonDelete()"
                @mouseleave.stop="leaveButtonDelete()"
            >  
                <svg viewBox="-47 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m416.875 114.441406-11.304688-33.886718c-4.304687-12.90625-16.339843-21.578126-29.941406-21.578126h-95.011718v-30.933593c0-15.460938-12.570313-28.042969-28.027344-28.042969h-87.007813c-15.453125 0-28.027343 12.582031-28.027343 28.042969v30.933593h-95.007813c-13.605469 0-25.640625 8.671876-29.945313 21.578126l-11.304687 33.886718c-2.574219 7.714844-1.2695312 16.257813 3.484375 22.855469 4.753906 6.597656 12.445312 10.539063 20.578125 10.539063h11.816406l26.007813 321.605468c1.933594 23.863282 22.183594 42.558594 46.109375 42.558594h204.863281c23.921875 0 44.175781-18.695312 46.105469-42.5625l26.007812-321.601562h6.542969c8.132812 0 15.824219-3.941407 20.578125-10.535157 4.753906-6.597656 6.058594-15.144531 3.484375-22.859375zm-249.320312-84.441406h83.0625v28.976562h-83.0625zm162.804687 437.019531c-.679687 8.402344-7.796875 14.980469-16.203125 14.980469h-204.863281c-8.40625 0-15.523438-6.578125-16.203125-14.980469l-25.816406-319.183593h288.898437zm-298.566406-349.183593 9.269531-27.789063c.210938-.640625.808594-1.070313 1.484375-1.070313h333.082031c.675782 0 1.269532.429688 1.484375 1.070313l9.269531 27.789063zm0 0"/><path d="m282.515625 465.957031c.265625.015625.527344.019531.792969.019531 7.925781 0 14.550781-6.210937 14.964844-14.21875l14.085937-270.398437c.429687-8.273437-5.929687-15.332031-14.199219-15.761719-8.292968-.441406-15.328125 5.925782-15.761718 14.199219l-14.082032 270.398437c-.429687 8.273438 5.925782 15.332032 14.199219 15.761719zm0 0"/><path d="m120.566406 451.792969c.4375 7.996093 7.054688 14.183593 14.964844 14.183593.273438 0 .554688-.007812.832031-.023437 8.269531-.449219 14.609375-7.519531 14.160157-15.792969l-14.753907-270.398437c-.449219-8.273438-7.519531-14.613281-15.792969-14.160157-8.269531.449219-14.609374 7.519532-14.160156 15.792969zm0 0"/><path d="m209.253906 465.976562c8.285156 0 15-6.714843 15-15v-270.398437c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v270.398437c0 8.285157 6.714844 15 15 15zm0 0"/></svg>
            </div>
        </div>
    </div>
    
</template>

<script>
    // импорт компонента, который содержит чекбокс и заговок подпункта
    const AppTodo = () => import('~/components/todo.vue')
    export default {
        async mounted() {
            this.localTitle = this.title

            // фильтр подпунктов
            // получаем три подпункта
            this.todo.forEach((item, index) => {
                if(index < 3) {
                    this.threeTodo.push(item)
                }
            });
        },
        props: [
            'title',
            'todo',
            'index',
            'todoList',
            'accessEditTitle',
            'edit'
        ],
        components: {
            AppTodo
        },
        data() {
            return {
                threeTodo: [],
                localTitle: '',
                enter: false
            }
        },
        computed: {
            padding() {
                if(this.todo.length > 3) {
                    return true
                } else {
                    return false
                }
            }
        },
        watch: {
            title(val) {
                this.localTitle = val
            }
        },
        methods: {
            // обработка потери фокуса у инпута
            async changeTitle() {
                this.$emit('changeTitle', {
                    title: this.localTitle,
                    index: this.index
                })
            },
            // обработка клика по превью заметки
            async clickNotes() {
                this.$emit('clickNotes',{
                    index: this.index,
                    title: this.title
                })
            },
            // обработка клика по кнопке delete у превью заметки
            async clickDelete() {
                this.$emit('clickDelete', {
                    index: this.index
                })
            },
            // обработка при наведении на кнопку delete
            // получаем координаты для отрисовки подсказки
            async enterButtonDelete() {
                const left = this.$refs[`${this.title}${this.index}`]
                    .getBoundingClientRect()
                    .left

                const top = this.$refs[`${this.title}${this.index}`]
                    .getBoundingClientRect()
                    .top
                
                const height = this.$refs[`${this.title}${this.index}`]
                    .getBoundingClientRect()
                    .height 

                this.$emit('enterButtonDelete', {
                    top: top + height + 10,
                    left: left
                })
            },
            // обработка потери наведения у кнопки delete
            async leaveButtonDelete() {
                this.$emit('leaveButtonDelete')
            },
            // обработка клика по checkbox
            async clickCheckbox({index, title, status}) {
                this.$emit('clickCheckbox',{
                    index: index,
                    title: title,
                    status: status
                })
            }
        }
    }
</script>

<style lang="sass">
    .notes-wrapper
        position: relative
        width: 100%
        z-index: 1
        overflow: hidden
        
    .notes
        display: flex
        align-items: center
        height: 72px
        justify-content: space-between
        border-bottom: 1px solid #e4e4e4
        user-select: none
        cursor: pointer
        transition-duration: .15s
        overflow: hidden
        position: relative
        +xs-block
            flex-direction: column
            height: auto
            align-items: flex-start
            padding-top: 20px
            padding-bottom: 20px
    
    .notes-hover
        background-color: #f2f2f2
        transition-duration: .15s
    
    .notes-fade
        animation: notesFade .5s forwards
        position: relative
        top: -72px
        height: 0px
    
    @keyframes notesFade
        0%
            top: -75px
            height: 0px
        100%
            top: 0
            height: 72px
    
    .notes__title
        margin-left: 10px
        white-space: nowrap
        text-overflow: ellipsis
        max-width: 30vw
        width: 100%
        overflow: hidden
        +xs-block
            max-width: 100%
        
    
    .notes__title-write-text
        width: inherit
        min-width: 150px
        padding: 4px 6px
        outline: none
        text-overflow: clip
        border: none
        background-color: transparent 
    
    .notes__todo
        display: flex
        flex-direction: column
        margin-left: 20px
        opacity: .3
    
    .notes__todo-padding
        padding-top: 28px
        +xs-block
            padding-top: 15px
    
    .notes__button-delete
        display: flex
        justify-content: center
        align-items: center
        width: 20px
        min-width: 20px
        height: 30px
        margin-right: 20px
        margin-left: 20px
        position: relative
        fill: black
        transition: opacity .2s
        opacity: 0
        +xs-block
            position: absolute
            right: 20px
            margin-right: 0px
            margin-left: 0px
            top: 10px

    .notes__button-delete-mouseenter
        opacity: .5
    
    .notes__button-delete:hover
        opacity: 1
    
    .notes__button-delete svg
        width: 100%
        height: 100%
</style>