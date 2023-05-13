<template>
  <header class="d-header">
    <div class="d-header__container">
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

      <form action="#">
        <input type="search" placeholder="Search">
        <input type="submit">
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
