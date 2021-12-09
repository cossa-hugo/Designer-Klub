import Vue from "vue";
import App from "./App.vue";
import "./firebase"

Vue.config.productionTip = false;

import { Row, Column } from "vue-grid-responsive";
Vue.component("row", Row);
Vue.component("column", Column);

import _ from "lodash"; 
Vue.prototype._ = _;

import route from "vue-router";
import home from "./Home.vue";
import mode from "./Mode.vue";
import store from "./Store.vue";

Vue.use(route);

const router = new route({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/mode",
      name: "mode",
      component: mode,
    },
    {
      path: "/store/:id",
      name: "store",
      component: store,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
