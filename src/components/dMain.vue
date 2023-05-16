<template>
  <main class="d-main">
    <dResults
      v-bind:resultsDataResults="resultsDataMain"
    />
    <!-- <dMovieCard /> -->
  </main>
</template>

<script>
import dResults from '../components/dResults'
// import dMovieCard from '../components/dMovieCard'

export default {
  name: 'dMain',
  components: {
    dResults
    // dMovieCard
  },
  props: {
    resultsDataMain: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      title: 'Main'
    }
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
