import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import router from './router/index';
import Auth from './components/Auth.vue';

import './stylus/main.styl';

Vue.use(Router);
Vue.use(Vuetify);
Vue.component('aria2-auth', Auth);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new Router(router)
});
