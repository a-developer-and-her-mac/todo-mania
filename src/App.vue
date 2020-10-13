<template>
  <div>
    <input
      v-model="currentTodo"
      @keydown.enter="addTodo()"
      placeholder="Add a todo"
    />
    <ul class="todos">
      <li
        v-for="todo in todos"
        :key="todo.id"
        @dblclick="editedToDo(todo)"
        :class="{ completed: todo.completed, editing: todo == editedToDoId }"
      >
        {{ todo.label }}
        <input
          v-model="todo.label"
          v-show="editedToDoId == todo.id"
          v-on:keydown.enter="updateToDo(todo)"
          placeholder="Edit the todo"
        />
        <input
          type="checkbox"
          v-model="todo.completed"
          @click="completedTodo(todo)"
        />
        <button @click="removeTodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedToDoId: null,
      completed: false,
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
    completedTodo(todo) {
      todo.completed = true;
    },
    editedToDo(todo) {
      this.editedToDoId = todo.id;
    },
    updateToDo(todo) {
      this.editedToDoId = null;
    },
  },
};
</script>

<style lang="scss">
.completed {
  text-decoration: line-through;
}

.editing {
  display: none;
}
</style>
