import Vue from "vue";
import App from "./App.vue";
import JSONdata from "./data.json";
import moment from "moment";

Vue.config.productionTip = false;

// initializing moment library
Vue.prototype.moment = moment;

new Vue({
  data: JSONdata,
  render: (h) => h(App)
}).$mount("#app");
