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
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ServerView from "./components/ServerView.vue";
import ServerDetails from "./components/ServerDetails.vue";

export default {
  components: {
    // can use case-sensitive selectors as they are compiled in JS before mounted on DOM
    // can use camelcase here and use kebab in template
    "my-header": Header,
    "my-server-view": ServerView,
    "my-server-details": ServerDetails,
    "my-footer": Footer,
  },
};
</script>

<style>
</style>
