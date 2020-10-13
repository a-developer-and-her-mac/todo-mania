<template>
  <div>
    <input
      v-model="currentTodo"
      @keydown.enter="addTodo()"
      placeholder="Add a todo"
    />
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.label }}
      </li>
      <button @click="removeTodo(todo)">Delete</button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style lang="scss"></style>
