<template>
  <div id="completed-todos">
    <h3 v-if="completed.length > 0">
      Completed({{completed.length}})
    </h3>
    <ul class="list-group">
      <li class="list-group-item clearfix" v-for="todo in completed">
        {{todo.body}}
        <div class="btn-group">
          <button type="button" @click="current(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-ok-circle"></span> Todo
          </button>
          <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-remove-circle"></span> Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {current, removeCompeletedTodo} from '../store/actions'
  export default{
    methods: {
      current: function (todo) {
        current(this.$store, todo)
      },
      remove: function (todo) {
        removeCompeletedTodo(this.$store, todo)
      }
    },
    computed: {
      completed: function () {
        return this.$store.getters.completedTodos;
      }
    }
  }
</script>
<style scoped>
  .btn-group {
    float: right;
  }
</style>