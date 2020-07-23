import Vue from 'vue';
import Router from 'vue-router';
import History from '@/components/history/History.vue'
import Homepage from '@/components/Homepage.vue'


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
        path: '/history',
        name: 'history',
        component: History
      }
    ]
  })

export default router;
