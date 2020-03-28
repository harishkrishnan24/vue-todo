<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.todo-container {
  width: 400px;
  min-height: 400px;
  background-color: #ededed;
}
</style>
