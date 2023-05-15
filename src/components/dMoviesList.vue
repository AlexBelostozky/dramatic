<template>
  <ul class="d-movies-list">
    {{ title }}
    <dMovieItem />
  </ul>
</template>

<script>
import dMovieItem from '../components/dMovieItem'

export default {
  name: 'dMoviesList',
  components: {
    dMovieItem
  },
  props: {},
  data () {
    return {
      title: 'MoviesList'
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
