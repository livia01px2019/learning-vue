<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>