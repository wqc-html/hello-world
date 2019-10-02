import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/content',
      name: 'content',
      component() { 
        return import('./views/Content.vue')
      },
      //子路由
      children: [
        {
          //商品
          path: '/',
          name: 'commodity',
          component() { 
            return import('./views/ContentChildrenView/commodity.vue')
          },
        },
        {
          //评论
          path: '/comment',
          name: 'comment',
          component() { 
            return import('./views/ContentChildrenView/comment.vue')
          },
        },
        {
          //商家
          path: '/business',
          name: 'business',
          component() { 
            return import('./views/ContentChildrenView/business.vue')
          },
        },
      ]
    }
  ]
})
