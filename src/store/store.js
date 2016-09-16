import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [{"body":"123"},{"body":"123"},{"body":"123"},{"body":"123"},{"body":"123"}],
    completed: [{"body":"123"},{"body":"123"},{"body":"123"},{"body":"123"},{"body":"123"}],
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
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    completedTodos: state => state.completed,
    todos: state => state.todos
  }
})