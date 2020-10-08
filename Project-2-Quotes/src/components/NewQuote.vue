<template>
  <div>
    <textarea v-model="quote" />
    <br />
    <button @click="addQuote">Add Quote</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "Add a new quote here!",
    };
  },
  methods: {
    addQuote() {
      this.$emit("quoteAdded", this.quote);
      this.quote = "Add a new quote here!";
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  width: fit-content;
  padding: 10px;
}
textarea {
  height: 100px;
  width: 80%;
}
</style>