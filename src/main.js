// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import './assets/globalStyles/styles.less'

// createApp(App)
//   .use(store)
//   .use(router)
//   .mount('#app')

import { Vue, createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import store from './store'
import './assets/globalStyles/styles.less'
import dResults from './components/dResults'
import dMovieCard from './components/dMovieCard'

// Vue.use(VueRouter)

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

// const router = new VueRouter({
//   routes
// })

// eslint-disable-next-line no-new
// const app = new Vue({
//   router
// }).$mount('#app')

createApp(App)
  // .use(store)
  .mount('#app')
  // .use(VueRouter)
