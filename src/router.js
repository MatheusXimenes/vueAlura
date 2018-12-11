import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Images.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'images',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      component: Home
    }
  ],
});
