import Vue from 'vue'
import Router from 'vue-router'
import indexLayout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexLayout',
      component: indexLayout
    }
  ]
})
