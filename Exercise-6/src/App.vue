<template>
  <div class="container">
    <my-header class="row"></my-header>
    <hr />
    <div class="row">
      <my-server-view></my-server-view>
      <my-server-details></my-server-details>
    </div>
    <hr />
    <my-footer class="row"></my-footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import ServerView from "./ServerView.vue";
import ServerDetails from "./ServerDetails.vue";

export default {
  components: {
    "my-header": Header,
    "my-server-view": ServerView,
    "my-server-details": ServerDetails,
    "my-footer": Footer,
  },
};
</script>

<style>
</style>
