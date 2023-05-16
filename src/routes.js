import VueRouter from 'vue-router'
import dResults from './components/dResults'
import dMovieCard from './components/dMovieCard'

export default {
  router: new VueRouter({
    routes: [
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
  })
}
