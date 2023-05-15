<template>
  <li class="d-movie-item">
    <a class="d-movie-item__image-link" href="{{ movieCardSrc }}">
      <img class="d-movie-item__image" src="{{ moviePosterSrc }}" width="168" height="237" alt="moviePosterAltText">
    </a>

    <a class="d-movie-item__title-link" href="{{ movieCardSrc }}">
      <h3 class="d-movie-item__title">{{ movieTitle }}</h3>
    </a>

    <dl class="d-movie-item__chars-list">
      <dt class="d-movie-item__chars-rating">
        <span class="visually-hidden">IMDb rating.</span>
      </dt>
      <dd class="d-movie-item__chars-rating-value">{{ ImdbRating }}</dd>

      <dt class="d-movie-item__chars-year visually-hidden">Year.</dt>
      <dd class="d-movie-item__chars-year-value">{{ year }}</dd>
    </dl>
  </li>
</template>

<script>
export default {
  name: 'dMovieItem',
  components: {},
  props: {},
  data () {
    return {
      movieCardSrc: '#',
      moviePosterSrc: '#',
      moviePosterAltText: 'Poster of ',
      movieTitle: '',
      ImdbRating: 0,
      year: 0
    }
  },
  computed: {},
  methods: {
    // Добавить метод составления ссылки на карточку фильма
    // Добавить метод составления ссылки на постер
    // Добавить метод составления альтернативного описания постера
    // Добавить метод составления названия фильма
    // Добавить метод составления рейтинга
    // Добавить метод составления года
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
