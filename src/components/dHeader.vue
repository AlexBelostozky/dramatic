<template>
  <header class="d-header">
    <div class="d-header__container">
      <h1 class="visually-hidden">Dramatic – Movie streaming platform</h1>

      <a class="d-header__logo" href="#">
        <img src="../assets/d-logo.svg" width="180" height="49" alt="Dramatic logo.">
      </a>

      <form class="d-header__search-form" action="#">
        <input class="d-header__search-line" type="search" placeholder="Search">
        <button class="d-header__search-button" type="submit">
          <svg class="d-header__search-button-icon" width="21" height="21" fill="currentColor">
            <title>Submit search query.</title>
            <use href="../assets/icons/stack.svg#search-icon"></use>
          </svg>
        </button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'dHeader',
  components: {},
  props: {},
  data () {
    return {
      title: 'Header'
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
