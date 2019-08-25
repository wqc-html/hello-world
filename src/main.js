/**
 *  导入依赖
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'es6-promise/auto'
import store from './store/VuexStore'; 

// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';

//导入Vant ui组件
import Vant from 'vant';
import 'vant/lib/index.css';

//导入签名组件
import VueSignaturePad from 'vue-signature-pad';

/**
 *  使用组件
 */
// Vue.use(MuseUI);
Vue.use(Vant);
Vue.use(VueSignaturePad)


/**
 *  关闭生产消息
 */
Vue.config.productionTip = false


/**
 *  初始化Vue
 */
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
