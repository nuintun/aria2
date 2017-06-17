import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import Auth from './components/Auth.vue';

Vue.use(Vuetify);
Vue.component('aria2-auth', Auth);

new Vue({
  el: '#app',
  render: h => h(App)
});
