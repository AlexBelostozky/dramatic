<template>
  <dHeader
    @shareResultsData="updateResultsData"
  />
  <dMain
    v-bind:resultsDataMain="resultsData"
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
      resultsData: {}
    }
  },
  methods: {
    updateResultsData (data) {
      this.resultsData = data
    }
  }
}
</script>

<style lang="less">

</style>
