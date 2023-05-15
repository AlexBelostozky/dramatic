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
      <dd class="d-movie-item__chars-rating-value">{{ imdbRating }}</dd>

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
      movieTitle: 'Movie Title',
      imdbRating: 0.1,
      year: 1990
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
  @import '../assets/globalStyles/styles.less';

  .d-movie-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 168px;
  }

  .d-movie-item__image-link {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: @white;
    text-decoration: none;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
  }

  .d-movie-item__image {
    font-size: 16px;
    line-height: 20px;
  }

  .d-movie-item__title-link {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: @white;
    text-decoration: none;
    word-break: break-all;
    margin: 0;
    margin-bottom: 4px;
    padding: 0;
  }

  .d-movie-item__title {
    margin: 0;
    word-break: break-all;
  }

  .d-movie-item__chars-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .d-movie-item__chars-rating {
    display: block;
    box-sizing: border-box;
    width: 28px;
    height: 14px;
    background-image: url("../assets/icons/imdb-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5px;
  }

  .d-movie-item__chars-rating-value {
    margin: 0;
    color: @yellow;
  }

  .d-movie-item__chars-year-value {
    margin-right: 0;
    margin-left: auto;
    color: @light-gray;
  }
</style>
