import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedMovieId: 0,
    someResults: false
  },
  getters: {
  },
  mutations: {
    updateSelectedMovieId (oldId, newId) {
      this.state.selectedMovieId = newId
    },

    updateSomeResults (oldValue, newValue) {
      this.state.someResults = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
