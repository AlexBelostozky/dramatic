<template>
  <article class="d-hero">
    <h2 class="d-hero__title visually-hidden">{{ title }}</h2>
    <img class="d-hero__image" src="{{ imageSrc }}" width="1315" height="907" alt="Preview image.">

    <img class="d-hero__logo" src="{{ logoSrc }}" width="424" height="180" alt="Promo movie logo.">

    <p class="d-hero__description">{{ description }}</p>

    <dl class="d-hero__genres-list">
      <dt class="d-hero__genres-title">Genres</dt>
      <dd class="d-hero__genres-description">{{ genres }}</dd>
    </dl>

    <div class="d-hero__buttons">
      <a class="d-hero__watch-button" href="#">Watch</a>

      <a class="d-hero__list-button" href="#">My list</a>
    </div>

    <dl class="d-hero__chars-list">
      <dt class="d-hero__chars-rating">
        <span class="visually-hidden">IMDb rating.</span>
      </dt>
      <dd class="d-hero__chars-rating-value">{{ ImdbRating }}</dd>

      <dt class="d-hero__chars-restrictions visually-hidden">Restrictions.</dt>
      <dd class="d-hero__chars-restrictions-value">
        <!--  связать с булевым значением наличия ограничений -->
        <img src="../assets/icons/restrictions-icon.svg" alt="Unrestricted public exhibition subject to parental guidance for children below the age of twelve.">
      </dd>

      <dt class="d-hero__chars-resolution visually-hidden">Resolution.</dt>
      <dd class="d-hero__chars-resolution-value">
        <!--  связать с булевым значением наличия ограничений -->
        <img src="../assets/icons/resolution-4k-icon.svg" alt="4K resolution.">
      </dd>

      <dt class="d-hero__chars-year visually-hidden">Resolution.</dt>
      <dd class="d-hero__chars-year-value">{{ year }}</dd>
    </dl>
  </article>
</template>

<script>
export default {
  name: 'dHero',
  components: {},
  props: {},
  data () {
    return {
      title: 'Hero',
      imageSrc: '#',
      logoSrc: '#',
      description: 'Hero description',
      genres: 'Genre1, genre2',
      ImdbRating: 0,
      restrictionUA: 1,
      year: 0
    }
  },
  computed: {},
  methods: {
    // создать методы для составления альтернативного описания превью и лого
    // создать метод для составления перечисления жанров
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
