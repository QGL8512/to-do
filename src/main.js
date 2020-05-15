import Vue from "vue";
import MintUI from "mint-ui"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import index from "./assets/index.css";
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  index,
  render: h => h(App)
}).$mount("#app");
