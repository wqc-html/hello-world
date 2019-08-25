/**
 *  导入依赖
 */
import Vue from 'vue'
import Vuex from 'vuex';
import state from './state'

/**
 *  使用组件
 */
Vue.use(Vuex);

/**
 *  Vuex
 *  状态管理模式
 *  集中式存储管理
 */
const store = new Vuex.Store({
    //state 放对象参数
    state,
    //getters 存放方法
    getters : {
        flag : function(){
            return 123;
        }
    }
});

export default store;