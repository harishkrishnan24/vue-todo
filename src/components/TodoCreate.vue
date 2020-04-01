<template>
  <modal ref="modal">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input class="form-input" type="text" v-model="form.title" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <textarea class="form-input" v-model="form.description" cols="30" rows="5"></textarea>
      </div>
      <button type="button" class="app-button is-primary" @click="submitForm">Create</button>
    </form>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      form: {
        title: "",
        description: ""
      },
      forceClose: false
    };
  },
  computed: {
    isFormValid() {
      return this.form.title.length > 8 && this.form.description.length > 10
        ? true
        : false;
    },
    modal() {
      return this.$refs.modal;
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.$emit("formSubmitted", { ...this.form });
        this.modal.close();
        this.resetForm();
      }
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>