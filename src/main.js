import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import '@/assets/styles/styles.css';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
routes,
mode: 'history'
});


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
