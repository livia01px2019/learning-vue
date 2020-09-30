import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes, //key and value are both routes shortcut
  mode: 'history' // need to configure server to always return index.html so hash is not used
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
