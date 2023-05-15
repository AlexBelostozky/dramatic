<template>
  <article class="d-movie-card">
    <img class="d-movie-card__image" src="{{ imageSrc }}" width="1315" height="907" alt="Poster.">

    <div class="d-movie-card__info-wrapper">
      <h2 class="d-movie-card__title">{{ movieTitle }}</h2>

      <p class="d-movie-card__description">{{ description }}</p>

      <dl class="d-movie-card__chars-list">
        <dt class="d-movie-card__chars-genres">Genres</dt>
        <dd class="d-movie-card__chars-genres-value">{{ genres }}</dd>

        <dt class="d-movie-card__chars-rating">
          <span class="visually-hidden">IMDb rating.</span>
        </dt>
        <dd class="d-movie-card__chars-rating-value">{{ ImdbRating }}</dd>

        <dt class="d-movie-card__chars-year visually-hidden">Year.</dt>
        <dd class="d-movie-card__chars-year-value">{{ year }}</dd>
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
  </article>
</template>

<script>
import dMemberCard from '../components/dMemberCard'

export default {
  name: 'dMovieCard',
  components: {
    dMemberCard
  },
  props: {},
  data () {
    return {
      movieTitle: 'Movie Title',
      imageSrc: '#',
      description: 'Movie description',
      genres: 'Genre1, genre2',
      ImdbRating: 0,
      year: 0,
      trailerSrc: '#',
      trailerImageSrc: '#'
    }
  },
  computed: {},
  methods: {
    // создать методы для составления альтернативного описания превью и лого
    // создать метод для составления перечисления жанров
    // создать метод для добавления участников команды
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
