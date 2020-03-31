<template>
  <div class="modal" :class="{'is-active': isOpen}">
    <div class="modal-content">
      <span class="close" @click="emitCloseModal">&times;</span>
      <p>Modal window</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpen: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    emitCloseModal() {
      this.$emit("modalClosed");
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
</style>