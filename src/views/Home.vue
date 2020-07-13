<template>
    <div class="todo__container">
        <div class="todo__header">
            <div class="todo__header-title">
                Мои заметки
            </div>
        </div>
        <div class="todo__wrapper">
            <app-new-note 
                :todoList="todoList"
                @addTask="addTask"
            />
            <app-notes 
                v-for="(item, index) in todoList"
                :key="`${item.title}_${index}`"
                :title="item.title"
                :todo="item.todo"
                :index="index"
                :todoList="todoList"
                :accessEditTitle="accessEditTitle"
                :edit="false"
                @changeTitle="changeTitle"
                @clickNotes="clickNotes"
                @clickDelete="clickDelete"
                @enterButtonDelete="enterButtonDelete"
                @leaveButtonDelete="leaveButtonDelete"
            />
        </div>
        <app-overlay
            :message="message"
            :question="question"
            @clickOverlayCancel="clickOverlayCancel"
            @clickOverlayDelete="clickOverlayDelete"
        />
        <transition 
            name="fade-hint"
            mode="out-in"
        >
            <app-hint 
                :title="'Delete note'"
                :top="top"
                :left="left"
                :paddingLeft="28"
                v-show="hintStatus"
        />
        </transition>
    </div>
</template>

<script>

    // компонент, при клике на который добавляется новая заметка 
    const AppNewNote = () => import('~/components/new-note.vue')

    // компонент включающий в себя превью заметки, 
    // которая содержит заголовок и три подпункта
    const AppNotes = () => import('~/components/notes.vue')

    // компонент включающий в себя оверлей с вопросом об удалении,
    // с возможностью отмены или подтверждения
    const AppOverlay = () => import('~/components/overlay/delete.vue')

    // Компонент включающий в себя подсказки, при наведении на кнопки 
    const AppHint = () => import('~/components/hints/index.vue')
    export default {
        async mounted() {
            this.todoList.forEach((item, index) => {
                if(item.title === '') {
                    this.$store.dispatch('todoList/deleteItem', {
                        index: index
                    })
                }
            })

            await this.$store.dispatch('editNote/clearEditNoteHistory')
            await this.$store.dispatch('editNote/clearNote')
            await this.$store.dispatch('editNote/setEditNoteStatus', 0)
        },
        components: {
            AppNewNote,
            AppNotes,
            AppOverlay,
            AppHint
        },
        computed: {
            // получаем список заметок
            todoList() {
                return this.$store.getters['todoList/todoList']
            },
            // параметр дает или запрещает доступ 
            // на редактирование заголовка
            accessEditTitle() {
                return this.$store.getters['todoList/accessEditTitle']
            }
        },
        data() {
            return {
                question: 'default',
                message: 'Вы точно хотите удалить заметку?',
                noteIndex: false,
                hintStatus: false,
                top: false, 
                left: false
            }
        },
        methods: {
            // добавляем новую заметку
            async addTask() {
                this.$store.dispatch('todoList/addTodo')

                // параметр дает или запрещает доступ 
                // на редактирование заголовка
                if(!this.accessEditTitle) {
                    this.$store.dispatch('todoList/setAccessEditTitle')
                }
            },
            // устанавливаем заголовок заметки
            // на главной странице
            async changeTitle({title, index}) {
                this.$store.dispatch('todoList/setTitle', {
                    title: title,
                    index: index
                })
            },
            // записывам объект заметки для редактирование
            // переходим на страницу редактирования
            async clickNotes({index, title}) {
                if(title !== '') {
                    let todo = [...this.todoList]
                    await this.$store.dispatch('editNote/setNote', {
                        todo: todo[index],
                        index: index
                    })
                    this.$router.push('/edit')
                }
            },
            // обработка клика по кнопке delete у превью заметки
            // включаем overlay
            async clickDelete({index}) {
                this.question = true
                this.noteIndex = index
            },
            // обработка клика по кнопке 'отменить'
            // выключаем overlay
            async clickOverlayCancel() {
                this.question = false
            },
            // обработка клика по кнопке 'удалить' у overlay
            // удаляем выбранную заметку
            async clickOverlayDelete() {
                this.question = false
                const arr = []
                this.todoList.forEach((item, index) => {
                    if(this.noteIndex !== index) {
                        arr.push(item)
                    }
                })
                this.$store.dispatch('todoList/setTodoList', arr)
            },
            // обрабатываем наведение на кнопку удаления
            // у превью заметки
            // получаем координаты для отрисовки подсказки
            // включаем подсказку
            async enterButtonDelete({top, left}) {
                this.hintStatus = true
                this.top = top,
                this.left = left
            },
            // обрабатываем потерю наведения у кнопку удаления
            // выключаем подсказку
            async leaveButtonDelete() {
                this.hintStatus = false
            }
        }
    }
</script>

<style lang="sass">
    
</style>