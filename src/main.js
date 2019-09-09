// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRessource from "vue-resource";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import en from "vee-validate/dist/locale/fr";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.use(VueRessource);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: en.messages[rule] // add its message
  });
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
