var app = new Vue({
    el: "#app",
    data: {
        newTodo: '',
        index: null,
        updatedTodo: '',
        todosList: []
    },
    methods: {
        addTodo() {
            var todo = {
                name: this.newTodo,
                completed: false
            }
            this.todosList.push(todo)
            this.newTodo = ''
        },
        editTodo(index) {
            this.updatedTodo = this.todosList[index].name
            this.index = index + 1
        },
        updateTodo() {
            this.todosList[this.index - 1].name = this.updatedTodo
            this.index = null
        },
        completeTodo(index) {
            this.todosList[index].completed = !this.todosList[index].completed
        },
        removeTodo(index) {
            this.todosList.splice(index, 1)
        },
        removeAll() {
            this.todosList = []
        },
        swapUp(index) {
            if (index == 0) return null
            let preEl = this.todosList[index - 1]
            this.todosList.splice(index - 1, 1, this.todosList[index])
            this.todosList.splice(index, 1, preEl)
        },
        swapDown(index) {
            if (index == this.todosList.length - 1) return null
            let nextEl = this.todosList[index + 1]
            this.todosList.splice(index + 1, 1, this.todosList[index])
            this.todosList.splice(index, 1, nextEl)
        }

    },

})