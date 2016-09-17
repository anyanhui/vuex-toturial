import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [{"body":"aaaa"},{"body":"bbbb"},{"body":"cccc"},{"body":"dddd"},{"body":"eeee"}],
    completed: [{"body":"0123"},{"body":"4567"},{"body":"8910"},{"body":"1112"},{"body":"1314"}],
    newTodo: ''
  },
  mutations: {
    GET_TODO(state, newTodo) {
      state.newTodo = newTodo
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    },
    CLEAR_TODO(state) {
      state.newTodo = ''
    },
    TODO_TODO(state, todo) {
      const completed = state.completed
      const completedTodo = completed.splice(completed.indexOf(todo), 1)
      state.todos.push(completedTodo[0])
    },
    REMOVE_COMPELETED_TODO(state, todo) {
      const completed = state.completed
      completed.splice(completed.indexOf(todo), 1)
    },
    EDIT_TODO(state, todo) {
      const todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.newTodo = todo.body
    },
    COMPLETE_TODO(state, todo) {
      const todos = state.todos
      const completedTodo = todos.splice(todos.indexOf(todo), 1)
      state.completed.push(completedTodo[0])
    },
    REMOVE_TODO(state, todo) {
      const todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    completedTodos: state => state.completed,
    todos: state => state.todos
  }
})