<template>
  <li class="d-movie-item">
    <a class="d-movie-item__link" @click.prevent="shareSelectedMovieId" :href="`/movie-card/${movieData.id}`">
      <img class="d-movie-item__image" :src="getPosterUrl()" width="168" height="237" :alt="getPosterAltText()">

      <h3 class="d-movie-item__title">{{ movieData.original_title }}</h3>

      <dl class="d-movie-item__chars-list">
        <dt class="d-movie-item__chars-rating">
          <span class="visually-hidden">IMDb rating.</span>
        </dt>
        <dd class="d-movie-item__chars-rating-value">{{ fixRating() }}</dd>

        <dt class="d-movie-item__chars-year visually-hidden">Year.</dt>
        <dd class="d-movie-item__chars-year-value">{{ getYear() }}</dd>
      </dl>
    </a>
  </li>
</template>

<script>
// import { url } from 'inspector'

import store from '@/store'

export default {
  name: 'dMovieItem',
  components: {},
  props: {
    movieData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      movieCardSrc: '#',
      moviePosterSrc: '#',
      movieTitle: 'Movie Title',
      emptyPosterSrc: `${require('@/assets/empty-poster.jpg')}`
    }
  },
  computed: {},
  methods: {
    // Метод передачи ID выбранного фильма
    shareSelectedMovieId () {
      store.commit('updateSelectedMovieId', this.movieData.id)
    },

    // Добавить метод составления ссылки на постер
    getPosterUrl () {
      if (this.movieData.poster_path !== null) {
        return `https://image.tmdb.org/t/p/w500${this.movieData.poster_path}`
      } else {
        return this.emptyPosterSrc
      }
    },

    // Добавить метод составления альтернативного описания постера
    getPosterAltText () {
      return `Poster of ${this.movieData.original_title}.`
    },

    // Метод для округления рейтинга
    fixRating () {
      const rawRating = this.movieData.vote_average

      if (Math.floor(rawRating) === rawRating) {
        return rawRating
      } else {
        return rawRating.toFixed(1)
      }
    },

    // Метод для получения года выпуска
    getYear () {
      const rawDate = this.movieData.release_date

      if (rawDate !== '') {
        return rawDate.split('-')[0]
      }
      return '🤷‍♂️'
    }
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

  .d-movie-item__link {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: @white;
    text-decoration: none;
    margin: 0;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 8px;
    transition: all .2s ease-in-out;

    &:hover,
    &:focus {
      background-color: @gray;
      transform: scale(1.02);
      outline: none;
    }

    &:active {
      transform: scale(1);
    }
  }

  .d-movie-item__image {
    font-size: 16px;
    line-height: 20px;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .d-movie-item__title {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    margin-bottom: 10px;
    word-break: break-word;
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
    margin-right: 8px;
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
