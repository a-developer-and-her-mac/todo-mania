<template>
  <div class="flex-container">
    <md-card md-with-hover class="todo-card">
      <md-ripple>
        <md-card-header>
          <div>Todo-Mania</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <md-input
              v-model="currentTodo"
              @keydown.enter="addTodo()"
              placeholder="Add a todo"
            />
          </md-field>
          <ul class="todos">
            <li
              v-for="todo in todos"
              :key="todo.id"
              @dblclick="editedToDo(todo)"
              :class="{
                completed: todo.completed,
                editing: todo == editedToDoId,
              }"
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
                class="checkbox"
              />
            </li>
          </ul>
          <md-card-actions>
            <md-button @click="removeTodo(todo)" v-if="todoItem"
              >Delete</md-button
            >
          </md-card-actions>
        </md-card-content>
      </md-ripple>
    </md-card>
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
      todoItem: false,
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
      this.todoItem = true;
      this.saveToStorage();
    },
    removeTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      this.saveToStorage();
    },
    completedTodo(todo) {
      todo.completed = true;
      this.saveToStorage();
    },
    editedToDo(todo) {
      this.editedToDoId = todo.id;
    },
    updateToDo(todo) {
      this.editedToDoId = null;
      this.saveToStorage();
    },
    saveToStorage() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    },
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todoItem = true;
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
}

li {
  margin-right: 20%;
}

.completed {
  text-decoration: line-through;
}

.editing {
  display: none;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.md-card {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 4px;
  background-color: #fc9d9d;

  @media (max-width: 600px) {
    margin-top: 50%;
  }

  @media (min-width: 601px) {
    margin-top: 20%;
  }
}

.md-card-header {
  text-align: center;
  font-size: 20px;
}

.checkbox {
  float: right;
}

.md-field input {
  text-align: center;
}
</style>
