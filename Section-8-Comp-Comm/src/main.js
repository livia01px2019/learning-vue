import Vue from 'vue'
import App from './App.vue'

// can communicate between children without needing to go through parents
export const eventBus = new Vue({
  // new way- accessible from anywhere
  data: {

  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
