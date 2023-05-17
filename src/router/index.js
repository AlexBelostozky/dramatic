import { createRouter, createWebHistory } from 'vue-router'
import dResultsWrapper from '../components/dResultsWrapper'
import dMovieCard from '../components/dMovieCard'

const routes = [
  {
    path: '',
    name: 'start',
    component: dResultsWrapper,
    props: true
  },
  {
    path: '/results/:searchQuery',
    name: 'results',
    component: dResultsWrapper,
    props: true
  },
  {
    path: '/movie-card/:id',
    name: 'movieCard',
    component: dMovieCard,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
