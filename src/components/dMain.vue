<template>
  <main class="d-main">
    <router-view>
      <!-- <dResults
      v-bind:resultsDataResults="resultsDataMain"
      v-bind:searchQueryResults="searchQueryMain"
      /> -->

      <!-- <dMovieCard /> -->
    </router-view>
  </main>
</template>

<script>
// import dResults from '../components/dResults'
// import dMovieCard from '../components/dMovieCard'

export default {
  name: 'dMain',
  components: {
    // dResults
    // dMovieCard
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
    return {}
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
