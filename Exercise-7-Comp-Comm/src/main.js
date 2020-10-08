import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverClicked(serverData) {
      console.log(serverData);
      this.$emit('serverClicked', serverData);
    },
    serverStatusChanged(serverData) {
      console.log(serverData);
      this.$emit('serverStatusChanged', serverData);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
