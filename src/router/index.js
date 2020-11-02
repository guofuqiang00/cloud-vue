import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/page/app/Index/index'
import Test from '@/page/admin/Index/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        tree: 0,
        type: 'header'
      }
    },
    {
      path: '/admin/Index/test',
      component: Test,
      meta: {
        title: '自述文件'
      },
      children: [
        {
          path: '/admin/MemberCentre',
          component: () => import('../components/admin/MemberCentre.vue'),
          meta: {
            title: '会员中心-个人'
          }
        },
        {
          path: '/admin/Society',
          component: () => import('../components/admin/MemberSociety.vue'),
          meta: {
            title: '会员中心-协会'
          }
        }
      ]
    }

  ]
})
