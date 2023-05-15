<template>
  <section class="d-results">
    <div class="d-results__wrapper">
      <h2 class="d-results__title">{{ title }}</h2>
      <p class="d-results__description">{{ description }}</p>
      <!-- Добавить список с результатами выдачи -->
      <dMoviesList />
    </div>
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
  @import '../assets/globalStyles/styles.less';

  .d-results__wrapper {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
    padding: 45px 26px;
  }

  .d-results__title {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    margin: 0;
    margin-bottom: 32px;
    padding: 0;
  }

  .d-results__description {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin: 0;
    margin-bottom: 32px;
    padding: 0;
  }
</style>
