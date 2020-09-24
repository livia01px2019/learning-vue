<template>
  <li
    class="list-group-item"
    @click="serverIsClicked(index, status)"
    :class="{ active: isActive }"
  >
    Server #{{ index }}
  </li>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: {
    index: Number,
    status: String,
    isActive: Boolean,
  },
  methods: {
    serverIsClicked(index, status) {
      eventBus.serverClicked({
        index: index,
        status: status,
      });
    },
  },
};
</script>

<style scoped>
</style>