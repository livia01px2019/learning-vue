<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <my-server v-for="i in 5" :key="i" :index="i"></my-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
export default {
  components: {
    "my-server": Server,
  },
};
</script>

// if not scoped, will be applied globally. emulated shadowDOM
<style scoped>
div {
  border: 1px solid blue;
}
</style>