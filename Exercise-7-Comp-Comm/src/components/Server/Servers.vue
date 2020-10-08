<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server
        v-for="s in servers"
        :key="s.id"
        :index="s.id"
        :status="s.status"
        :isActive="s.isActive"
      ></server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
import { eventBus } from "../../main";

export default {
  data: function () {
    return {
      servers: [
        { id: 1, status: "Normal", isActive: false },
        { id: 2, status: "Critical", isActive: false },
        { id: 3, status: "Unknown", isActive: false },
        { id: 4, status: "Normal", isActive: false },
      ],
    };
  },
  components: {
    server: Server,
  },
  created() {
    eventBus.$on("serverStatusChanged", (data) => {
      for (var s of this.servers) {
        if (s.id == data.index) {
          s.status = data.status;
        }
      }
    });
    eventBus.$on("serverClicked", (data) => {
      for (var s of this.servers) {
        if (s.id == data.index) {
          s.status = data.status;
          s.isActive = true;
        } else {
          s.isActive = false;
        }
      }
    });
  },
};
</script>

<style>
</style>
