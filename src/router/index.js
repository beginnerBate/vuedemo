import Vue from 'vue'
import Router from 'vue-router'
import vueChart from '@/components/vue-chart/vue-chart'
import vueList from '@/components/vue-list/vue-list'
import vueNote from '@/components/vue-note/vue-note'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vue-chart',
      component: vueChart
    },
    {
      path: '/vue-list',
      component: vueList
    },
    {
      path: '/vue-note',
      component: vueNote
    }
  ]
})
