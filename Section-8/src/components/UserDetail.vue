<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  // can use camelcase for props here
  props: {
    name: {
      type: String,
      required: true,
      //   default: "Livia"
      // if type is object, default would be a function that returns an object
    },
    // do not need to have custom event in this case (in resetName)
    resetFn: Function,
    userAge: Number,
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
  created() {
    eventBus.$on("ageWasEdited", (age) => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
