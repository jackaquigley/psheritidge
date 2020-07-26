import Vue from 'vue';
import Router from 'vue-router';
import History from '@/views/History.vue'
import Homepage from '@/components/Homepage.vue'
import HistoryOfPollokshields from '@/components/history/HistoryOfPollokshields.vue'
import WW1Archives from '@/components/history/WW1Archives.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'homepage',
        component: Homepage
      },
      {
        path: '/history/',
        name: 'history',
        component: History,
        children: [
            {
              path: 'historyofpollokshields',
              name: 'historyofpollokshields',
              component: HistoryOfPollokshields
            },
            {
              path: 'ww1archives',
              name: 'ww1archives',
              component: WW1Archives
            },
          ]
        }
    ]
  })

export default router;
