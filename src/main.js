import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './pages/home/Home.vue';
import Currency from './pages/currency/Currency.vue';
import About from './pages/about/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/conversor',
      component: Currency,
    },
    {
      path: '/sobre',
      component: About,
    },

  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
