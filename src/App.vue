<template>
  <div id="app" class="container">
    <CompletedTodos></CompletedTodos>
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
  </div>
</template>
<script>
  import CompletedTodos from './components/CompletedTodos.vue'
  import GetTodo from './components/GetTodo.vue'
  import CurrentTodos from './components/CurrentTodos.vue'
  export default {
    components: {
      CompletedTodos,
      GetTodo,
      CurrentTodos
    }
  }
</script>
<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>