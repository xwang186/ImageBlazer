import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Cloudinary from "cloudinary-vue";

Vue.config.productionTip = false
Vue.use(Cloudinary)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
