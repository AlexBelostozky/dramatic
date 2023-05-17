<template>
  <main class="d-main">
    <dResults
    v-if="!showMovieCard"
    v-bind:resultsDataResults="resultsDataMain"
    v-bind:searchQueryResults="searchQueryMain"
    />

    <dMovieCard v-if="showMovieCard"
      @closeMovieCard="escapeMovieCard"
    />
  </main>
</template>

<script>
import dResults from '../components/dResults'
import dMovieCard from '../components/dMovieCard'
// import store from '@/store'

export default {
  name: 'dMain',
  components: {
    dResults,
    dMovieCard
  },
  props: {
    resultsDataMain: {
      type: Object,
      default () {
        return {}
      }
    },
    searchQueryMain: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      showMovieCard: false
    }
  },
  computed: {},
  methods: {
    //
    escapeMovieCard () {
      this.showMovieCard = false
    }
  },
  watch: {
    '$store.state.selectedMovieId': function () {
      this.showMovieCard = true
      console.log(this.$store.state.selectedMovieId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
