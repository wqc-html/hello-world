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

import Vant from 'vant';
import 'vant/lib/index.css';

/**
 *  使用组件
 */
// Vue.use(MuseUI);
Vue.use(Vant);


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
