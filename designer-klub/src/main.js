import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { Row, Column } from "vue-grid-responsive";

Vue.component("row", Row);
Vue.component("column", Column);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

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
      path: "/store",
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
