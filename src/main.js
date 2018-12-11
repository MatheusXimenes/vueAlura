import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import '@/directives/Transform';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/'; //Setting Root Domain in my Api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
