<template>
  <div class="container">
    <progress-bar :progress="quotesNo * 10"></progress-bar>
    <hr />
    <quotes @quotesUpdated="quotesNo = $event"></quotes>
    <hr />
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to Delete</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import Quotes from "./components/Quotes.vue";

export default {
  data() {
    return {
      quotesNo: 0,
    };
  },
  components: {
    progressBar: ProgressBar,
    quotes: Quotes,
  },
};
</script>

<style>
</style>
