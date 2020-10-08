<template>
  <div>
    <slot name="redContent">
      <p>Default red</p>
    </slot>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>