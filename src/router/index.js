import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import log from '@/components/log'
import vip from '@/components/vip'
import onsale from'@/components/onsale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/log',
      name: 'log',
      component: log
      
    } ,
    {
      path: '/vip',
      name: 'vip',
      component: vip
      
    },
    {
      path:'/onsale',
      name:onsale,
      component:onsale
    }
  ]
})
