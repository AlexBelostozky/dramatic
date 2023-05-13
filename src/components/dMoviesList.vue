<template>
  <ul class="d-movies-list">
    {{ title }}
  </ul>
</template>

<script>
export default {
  name: 'dMoviesList',
  components: {},
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
