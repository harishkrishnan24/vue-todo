<template>
  <div class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">Walk the dog</div>
      <div class="todo-item-content-description">Go to forest near the zoo</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo {
  &-item {
    background-color: grey;
    min-height: 70px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;

    &-content {
      &-title {
        font-weight: bold;
      }

      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>