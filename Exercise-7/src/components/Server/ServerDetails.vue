<template>
  <div class="col-xs-12 col-sm-6">
    <p>{{ message }}</p>
    <button v-if="index != 0" @click="updateStatus">
      Click to change status to Normal
    </button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      message: "Server Details are currently not updated.",
      index: 0,
      status: "",
    };
  },
  methods: {
    updateStatus() {
      this.status = "Normal";
      eventBus.serverStatusChanged({
        index: this.index,
        status: this.status,
      });
    },
  },
  watch: {
    index() {
      this.message = "Server #" + this.index + ", status: " + this.status;
    },
    status() {
      this.message = "Server #" + this.index + ", status: " + this.status;
    },
  },
  created() {
    eventBus.$on("serverClicked", (data) => {
      this.status = data.status;
      this.index = data.index;
    });
  },
};
</script>

<style>
</style>
