import { createRouter, createWebHashHistory  } from 'vue-router'

import IndexPage from '../pages/IndexPage.vue'
import ResultPage from '../pages/ResultPage.vue'

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/result',
    name: 'ResultPage',
    component: ResultPage
  }
]

const router = createRouter({
  history: createWebHashHistory (),
  routes
})

export default router
