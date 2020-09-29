import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', function (value) {
  return value.toLowerCase();
});

// global mixin is added into everything, use with caution
// mixins are not shared, they are replicated
Vue.mixin({
  created() {
    console.log('global mixin - created');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

