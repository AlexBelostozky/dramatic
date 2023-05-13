<template>
  <li class="d-movie-item">
    {{ title }}
  </li>
</template>

<script>
export default {
  name: 'dMovieItem',
  components: {},
  props: {},
  data () {
    return {
      title: 'MovieItem'
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
