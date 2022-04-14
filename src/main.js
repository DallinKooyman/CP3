import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./data.js";

let data = {
  players: mock,
  cart: [],
  numItems: 0,
};

new Vue({
  // eslint-disable-next-line no-undef
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
