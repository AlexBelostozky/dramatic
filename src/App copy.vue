<template>
  <dHeader
    @shareResultsData="updateResultsData"
    @shareSearchQuery="updateSearchQuery"
  />
  <dMain
    v-bind:resultsDataMain="resultsData"
    v-bind:searchQueryMain="searchQuery"
  />
  <dFooter />
</template>

<script>
import dHeader from './components/dHeader'
import dMain from './components/dMain'
import dFooter from './components/dFooter'

export default {
  name: 'dramatic-app',
  components: {
    dHeader,
    dMain,
    dFooter
  },
  data () {
    return {
      resultsData: {},
      searchQuery: ''
    }
  },
  methods: {
    updateResultsData (data) {
      this.resultsData = data
    },

    updateSearchQuery (query) {
      this.searchQuery = query
    }
  }
}
</script>

<style lang="less">

</style>
