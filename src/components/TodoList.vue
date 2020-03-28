<template>
  <div class="todo-list">
    <todo-item :title="'Walk the Dog'" :description="'Go to the forest near zoo'" />
    <todo-item :title="'Learn React Native'" :description="'Learn from Udemy'" />
    <todo-item :title="todoTitle" :description="todoDescription" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoTitle: "Learn Vue.js",
      todoDescription: "Learn from docs"
    };
  }
};
</script>