import Vue from 'vue';
import Router from 'vue-router';
import History from '@/views/History.vue'
import Homepage from '@/components/Homepage.vue'
import HistoryOfPollokshields from '@/components/history/HistoryOfPollokshields.vue'
import WW1Archives from '@/components/history/WW1Archives.vue'
import WW2Archives from '@/components/history/WW2Archives.vue'
import FalklandWarArchives from '@/components/history/FalklandWarArchives.vue'

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
            {
              path: 'ww2archives',
              name: 'ww2archives',
              component: WW2Archives
            },
            {
              path: 'falklandwararchives',
              name: 'falklandwararchives',
              component: FalklandWarArchives
            }
          ]
        }
    ]
  })

export default router;
