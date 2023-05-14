<template>
  <header class="d-header">
    <div class="d-header__container">
      <h1 class="visually-hidden">Dramatic – Movie streaming platform</h1>

      <a class="d-header__logo" href="#">
        <img src="../assets/d-logo.svg" width="180" height="49" alt="Dramatic logo.">
      </a>

      <nav class="d-header__nav">
        <ul class="d-header__nav-list">
          <li class="d-header__nav-item">
            <a class="d-header__nav-link d-header__nav-link--current" href="#">
              Home
            </a>
          </li>

          <li class="d-header__nav-item">
            <a class="d-header__nav-link" href="#">
              TV Show
            </a>
          </li>

          <li class="d-header__nav-item">
            <a class="d-header__nav-link" href="#">
              Movies
            </a>
          </li>

          <li class="d-header__nav-item">
            <a class="d-header__nav-link" href="#">
              New
            </a>
          </li>
        </ul>
      </nav>

      <form class="d-header__search-form" action="#">
        <input class="d-header__search-line" type="search" placeholder="Search">
        <button class="d-header__search-button" type="submit">
          <svg class="d-header__search-button-icon" width="21" height="21" fill="currentColor">
            <title>Submit search query.</title>
            <use href="../assets/icons/stack.svg#search-icon"></use>
          </svg>
        </button>
      </form>

      <a class="d-header__gift-button" href="#">
        <svg class="d-header__gift-button-icon" width="31" height="31" fill="currentColor">
          <title>Your gifts.</title>
          <use href="../assets/icons/stack.svg#gift-icon"></use>
        </svg>
      </a>

      <a class="d-header__notification-button" href="#">
        <svg class="d-header__notification-button-icon" width="31" height="31" fill="currentColor">
          <title>Your notifications.</title>
          <use href="../assets/icons/stack.svg#notification-icon"></use>
        </svg>
      </a>

      <a class="d-header__account-button" href="#">
        <svg class="d-header__account-button-icon" width="23" height="31" fill="currentColor">
          <title>Your account.</title>
          <use href="../assets/icons/stack.svg#account-icon"></use>
        </svg>
      </a>
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
