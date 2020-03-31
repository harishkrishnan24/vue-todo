<template>
  <div>
    <div class="app-button" @click="isOpen = true">Create</div>
    <div class="modal" :class="{'is-active': isOpen}">
      <div class="modal-content">
        <span class="close" @click="isOpen = false">&times;</span>
        <form class="app-form">
          <div class="form-control">
            <label class="label">Title</label>
            <input class="form-input" type="text" v-model="form.title" />
          </div>
          <div class="form-control">
            <label class="label">Description</label>
            <input class="form-input" type="text" v-model="form.description" />
          </div>
          <button type="button" class="app-button is-primary" @click="createTodo">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      isOpen: false,
      form: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    createTodo() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &.is-active {
    display: block;
  }
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  line-height: 8px;
  &:hover {
    cursor: pointer;
  }
}

.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  .form-input {
    padding: 10px;
    font-size: 17px;
  }

  .form-control {
    margin-bottom: 10px;
  }
}
</style>