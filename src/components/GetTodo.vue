<template>
  <div id="get-todo" class="container">
    <input class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to...">
    <button type="button" class="btn btn-primary" @click="addTodo">Add Todo</button>
  </div>
</template>
<script>
  import {getTodo, addTodo, clearTodo} from '../store/actions';
  export default{
    methods: {
      getTodo(e) {
        var value = e.target.value;
        if (value) {
          getTodo(this.$store, value)
        }
      },
      addTodo() {
        if (this.$store.state.newTodo) {
          addTodo(this.$store)
          clearTodo(this.$store)
        }
      }
    },
    computed: {
      newTodo: function () {
        return this.$store.getters.newTodo;
      }
    }
  }
</script>
