import Vue from 'vue'
import App from './App.vue'
import {
  MdField
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import {
  MdButton
} from "vue-material/dist/components";
import {
  MdCard
} from "vue-material/dist/components";
import {
  MdRipple
} from "vue-material/dist/components";

Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdRipple);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')