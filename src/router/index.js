import { createRouter, createWebHashHistory } from 'vue-router'
// import dMain from '../components/dMain'
import dResults from '../components/dResults'
import dMovieCard from '../components/dMovieCard'

const routes = [
  {
    path: '',
    name: 'start',
    component: dResults
  },
  {
    path: '/results/:searchQuery',
    name: 'results',
    component: dResults
  },
  {
    path: '/movie-card/:id',
    name: 'movieCard',
    component: dMovieCard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
