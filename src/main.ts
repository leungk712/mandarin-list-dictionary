import Vue from "vue";
import App from "./App.vue";
import VuetifyConfig from "@/plugins/vuetify";
import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(VuetifyConfig),
  render: (h) => h(App),
}).$mount("#app");
