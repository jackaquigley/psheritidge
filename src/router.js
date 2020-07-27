import Vue from 'vue';
import Router from 'vue-router';
import History from '@/views/History.vue'
import Homepage from '@/components/Homepage.vue'
import HistoryOfPollokshields from '@/components/history/HistoryOfPollokshields.vue'
import WW1Archives from '@/components/history/WW1Archives.vue'
import WW2Archives from '@/components/history/WW2Archives.vue'
import FalklandWarArchives from '@/components/history/FalklandWarArchives.vue'
import Leisure from '@/components/history/Leisure.vue'
import PlacesOfWorship from '@/components/history/PlacesOfWorship.vue'
import NotableResidents from '@/components/history/NotableResidents.vue'
import Articles from '@/components/history/Articles.vue'
import NotableArchitecture from '@/components/history/NotableArchitecture.vue'
import VirtualPollokshields from '@/components/history/VirtualPollokshields.vue'
import ThomasSBodyPhotographs from '@/components/history/ThomasSBodyPhotographs.vue'
import ExternalLinks from '@/components/history/ExternalLinks.vue'
import Guide from '@/components/Guide.vue'
import Donate from '@/components/Donate.vue'

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
        path: 'guide',
        name: 'guide',
        component: Guide
      },
      {
        path: 'donate',
        name: 'donate',
        component: Donate
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
            },
            {
              path: 'leisure',
              name: 'leisure',
              component: Leisure
            },
            {
              path: 'placesofworship',
              name: 'placesofworship',
              component: PlacesOfWorship
            },
            {
              path: 'notableresidents',
              name: 'notableresidents',
              component: NotableResidents
            },
            {
              path: 'articles',
              name: 'articles',
              component: Articles
            },
            {
              path: 'notablearchitecture',
              name: 'notablearchitecture',
              component: NotableArchitecture
            },
            {
              path: 'virtualpollokshields',
              name: 'virtualpollokshields',
              component: VirtualPollokshields
            },
            {
              path: 'thomassbodyphotographs',
              name: 'thomassbodyphotographs',
              component: ThomasSBodyPhotographs
            },
            {
              path: 'externallinks',
              name: 'externallinks',
              component: ExternalLinks
            }
          ]
        }
    ]
  })

export default router;
