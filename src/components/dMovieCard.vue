<template>
  <article class="d-movie-card" :style="posterSrc">
    <div class="d-movie-card__wrapper">
      <a class="d-movie-card__back-button" href="/results/:searchQuery" @click.prevent="closeMovieCard">&lt; Back to results</a>
      <div class="d-movie-card__info-wrapper">
        <h2 class="d-movie-card__title">{{ movieTitle }}</h2>

        <p class="d-movie-card__description">{{ description }}</p>

        <dl class="d-movie-card__chars-list">
          <dt class="d-movie-card__chars-genres">Genres</dt>
          <dd class="d-movie-card__chars-genres-value">{{ genres }}</dd>

          <div class="d-movie-card__rating-year-wrapper">
            <dt class="d-movie-card__chars-rating">
              <span class="visually-hidden">IMDb rating.</span>
            </dt>
            <dd class="d-movie-card__chars-rating-value">{{ ImdbRating }}</dd>

            <dt class="visually-hidden">Year.</dt>
            <dd class="d-movie-card__chars-year-value">{{ year }}</dd>
          </div>
        </dl>
      </div>

      <div class="d-movie-card__trailer-crew-wrapper">
        <div class="d-movie-card__trailer-wrapper">
          <h3 class="d-movie-card__trailer-heading">Trailer</h3>

          <a class="d-movie-card__trailer-link" href="{{ trailerSrc }}">
            <img class="d-movie-card__trailer-image" src="{{ trailerImageSrc }}" width="307" height="170" alt="Trailer.">
          </a>
        </div>

        <div class="d-movie-card__crew-wrapper">
          <h3 class="d-movie-card__crew-heading">Cast and crew info</h3>

          <ul class="d-movie-card__crew-list">
            <dMemberCard />
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import dMemberCard from '../components/dMemberCard'
// import store from '@/store'

export default {
  name: 'dMovieCard',
  components: {
    dMemberCard
  },
  props: {},
  data () {
    return {
      movieTitle: 'Movie Title',
      // imageSrc: 'poster.jpg',
      posterSrc: {
        backgroundImage: `linear-gradient(
          90deg,
          #000000 25%,
          rgba(0, 0, 0, 0.687449) 40%,
          rgba(196, 196, 196, 0) 100%
        ),
        linear-gradient(
          0deg, #000000 15%,
          rgba(0, 0, 0, 0.687449) 30%,
          rgba(255, 255, 255, 0) 40%
        ),
        url(${require('@/assets/poster.jpg')})`
      },
      description: 'Movie description very long and interesting. Best movie in the whole world. Best cast and crew. Movie description very long and interesting. Best movie in the whole world. Best cast and crew.',
      genres: 'Genre1, genre2',
      ImdbRating: 7.3,
      year: 2015,
      trailerSrc: '#',
      trailerImageSrc: '#'
    }
  },
  computed: {},
  methods: {
    // создать методы для составления альтернативного описания превью и лого
    // создать метод для составления перечисления жанров
    // создать метод для добавления участников команды

    closeMovieCard () {
      this.$emit('closeMovieCard')
    }
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/globalStyles/styles.less';

  .d-movie-card {
    box-sizing: border-box;
    padding-top: 170px;
    height: 100%;
    // background:
    // linear-gradient(
    //    90deg,
    //    #000000 25%,
    //    rgba(0, 0, 0, 0.687449) 40%,
    //    rgba(196, 196, 196, 0) 100%
    //   ),
    //   linear-gradient(
    //    0deg, #000000 15%,
    //    rgba(0, 0, 0, 0.687449) 30%,
    //    rgba(255, 255, 255, 0) 40%
    //   ),
    //   url('../assets/poster.jpg');
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: contain;
  }

  .d-movie-card__back-button {
    display: block;
    box-sizing: border-box;
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: @white;
    text-decoration: none;
    width: 165px;
    margin-bottom: 50px;
    padding: 15px 10px;
    background-color: @dark-gray;
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

  .d-movie-card__wrapper {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 26px;
  }

  .d-movie-card__image {
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .d-movie-card__info-wrapper {
    width: 666px;
  }

  .d-movie-card__title {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
    color: @white;
    margin: 0;
    margin-bottom: 35px;
  }

  .d-movie-card__description {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: @white;
    margin: 0;
    margin-bottom: 35px;
  }

  .d-movie-card__chars-list {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
  }

  .d-movie-card__chars-genres {
    color: @red;
    text-transform: uppercase;
  }

  .d-movie-card__chars-genres-value {
    margin: 0;
    margin-bottom: 25px;
  }

  .d-movie-card__chars-rating {
    display: block;
    box-sizing: border-box;
    width: 54px;
    height: 27px;
    background-image: url("../assets/icons/imdb-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 11px;
  }

  .d-movie-card__rating-year-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  .d-movie-card__chars-rating-value {
    margin: 0;
    color: @yellow;
    margin-right: 27px;
  }

  .d-movie-card__chars-year-value {
    color: @light-gray;
    margin: 0;
  }

  .d-movie-card__trailer-crew-wrapper {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 307px auto;
    width: 100%;
    padding: 20px 30px 56px;
    border-radius: 24px;
    background-color: rgba(11, 15, 22, 0.47);
    box-shadow: 8px -8px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(7.5px);
  }

  .d-movie-card__trailer-heading,
  .d-movie-card__crew-heading {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .d-movie-card__trailer-link {
    text-decoration: none;
    color: @white;
  }

  .d-movie-card__crew-list {
    display: grid;
    grid-template-columns: repeat(7, min-content);
    grid-column-gap: 41px;
    grid-row-gap: 10px;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
