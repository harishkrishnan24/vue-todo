<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <Modal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";
export default {
  name: "App",
  components: {
    TodoList,
    Modal
  },
  data() {
    return {
      isModalOpen: false,
      todos: [
        {
          _id: "1",
          title: "Walk the dog",
          description: "Go to park near supermarket"
        },
        {
          _id: "2",
          title: "Learn VueJs",
          description: "Learn from the official Documentation"
        },
        {
          _id: "3",
          title: "Learn Typescript",
          description: "Learn from the udemy course"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.is-primary {
  background-color: #47ca47 !important;
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &-container {
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  &-create-btn-container {
    margin: 10px;
  }
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
}
</style>
