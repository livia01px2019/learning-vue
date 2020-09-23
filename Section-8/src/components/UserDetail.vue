<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  // can use camelcase for props here
  props: {
    name: {
      type: String,
      required: true,
      //   default: "Livia"
      // if type is object, default would be a function that returns an object
    },
  },
  methods: {
    switchName() {
      return this.name.split("").reverse().join("");
    },
    resetName() {
      this.myName = "Livia";
      // emit custom event to notify parent component
      this.$emit("nameWasReset", this.myName);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
