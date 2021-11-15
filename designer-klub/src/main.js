import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { Row, Column } from "vue-grid-responsive";

Vue.component("row", Row);
Vue.component("column", Column);


import _ from "lodash"; 
Vue.prototype._ = _;

import route from "vue-router";
import home from "./Home.vue";
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

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
