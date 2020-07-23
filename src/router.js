import Vue from 'vue';
import Router from 'vue-router';
import History from '@/components/history/History.vue'
import Homepage from '@/components/Homepage.vue'
import HistoryOfPollokshields from '@/components/history/HistoryOfPollokshields.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
      {
        path: '',
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
          }
        ]
      }
    ]
  })

export default router;
