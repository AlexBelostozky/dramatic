import { createApp } from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import router from './router'
import store from './store'
import './assets/globalStyles/styles.less'

createApp(App)
  .use(store)
//   .use(Vuex)
  .use(router)
  .mount('#app')

// const store = new Vuex.Store({

// })
