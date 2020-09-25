<template>
  <div>
    <h1>Quotes Added</h1>
    <br />
    <div class="progress">
      <div
        class="progess-bar"
        id="pbar"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress / 10 }} / 10
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: Number,
  },
};
</script>

<style scoped>
#pbar {
  background-color: blue;
  height: 20px;
  color: white;
  text-align: center;
}
</style>