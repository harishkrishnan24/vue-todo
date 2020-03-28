<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: "App",
  components: {
    TodoList
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  }
}
</style>
