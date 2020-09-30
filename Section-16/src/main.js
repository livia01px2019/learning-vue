import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes, //key and value are both routes shortcut
  mode: 'history', // need to configure server to always return index.html so hash is not used
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 700 };
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash };
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
  // next(false) abort
  // next('pathname') go to path
  // next({pathobject}) go to path
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
