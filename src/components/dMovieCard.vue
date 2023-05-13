<template>
  <article class="d-movie-card">
    {{ title }}
  </article>
</template>

<script>
export default {
  name: 'dMovieCard',
  components: {},
  props: {},
  data () {
    return {
      title: 'MovieCard'
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
