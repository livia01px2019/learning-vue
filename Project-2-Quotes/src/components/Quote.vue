<template>
  <div class="col-xs-6 col-md-4 col-lg-3 outer" @click="deleteQuote">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteQuote() {
      this.$emit("deleteQuote");
    },
  },
};
</script>

<style scoped>
.inner {
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  color: #6e6e6e;
  font-family: "Arizonia";
  font-size: 25px;
}
.inner:hover {
  background-color: #ffe2e2;
}
</style>