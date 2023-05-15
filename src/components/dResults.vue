<template>
  <section class="d-results">
    <h2 class="d-results__title">{{ title }}</h2>
    <p class="d-results__description">{{ description }}</p>
    <!-- Добавить список с результатами выдачи -->
    <dMoviesList />
  </section>
</template>

<script>
import dMoviesList from '../components/dMoviesList'

export default {
  name: 'dResults',
  components: {
    dMoviesList
  },
  props: {},
  data () {
    return {
      title: 'Here will be the results of your search',
      description: 'Use the field above to search movies'
    }
  },
  computed: {},
  methods: {
    // Добавить метод замены заголовка и удаления описания
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
