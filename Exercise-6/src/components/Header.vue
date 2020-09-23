<template>
  <div class="col-xs-12">
    <header>
      <h1>{{ headerText }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerText: "Server Status",
    };
  },
};
</script>