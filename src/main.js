import Vue from "vue";
import router from "@/router";
import App from "@/App.vue";
import store from "@/store";
import Notifications from 'vue-notification';

Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
