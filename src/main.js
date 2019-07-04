// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'


// import 'lib-flexible'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import '../node_modules/swiper/dist/css/swiper.min.css';

Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false

const lang = navigator.language || navigator.userLanguage; 

const i18n = new VueI18n({
  locale: lang,    // 语言标识
  messages: {
    'zh-CN': require('./assets/lang/cn').message,   // 中文语言包
    'en-us': require('./assets/lang/en').message    // 英文语言包
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
