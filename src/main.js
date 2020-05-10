import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import index from "./assets/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  index,
  render: h => h(App)
}).$mount("#app");
