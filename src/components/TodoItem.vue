<template>
  <div class="todo-item" v-if="!editMode">
    <div class="todo-item-content">
      <div class="todo-item-content-title">{{title}}</div>
      <div class="todo-item-content-description">{{description}}</div>
    </div>
    <button class="app-button is-warning" @click="editMode = true">Edit</button>
    <button class="app-button is-danger" @click="deleteTodo">Delete</button>
  </div>
  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input class="form-input" type="text" :value="title" />
      </div>
      <div class="form-control form-control-last">
        <label class="label">Description</label>
        <textarea class="form-input" cols="30" rows="2" :value="description"></textarea>
      </div>
      <button class="app-button is-warning" @click.prevent="editTodo">Update</button>
      <button class="app-button is-danger" @click.prevent="editMode = false">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: "Default description"
    }
  },
  data() {
    return {
      editMode: false
    };
  },
  methods: {
    editTodo() {
    },
    deleteTodo() {
      alert("Deleting Todo");
    }
  }
};
</script>

<style lang="scss" scoped>
.app-button {
  font-size: 15px;

  &.is-warning {
    margin-right: 5px;
  }
}
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
      margin-bottom: 10px;

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