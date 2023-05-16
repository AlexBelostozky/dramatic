<template>
  <footer class="d-footer">
    <div class="d-footer__wrapper">
      <img class="d-footer__api-logo" src="../assets/tmdb-logo.svg" width="200" height="14" alt="The Movie Database logo.">
      <p class="d-footer__api-description">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      <p class="d-footer__copyright">© 2023 Dramatic. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'dFooter',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/globalStyles/styles.less';
  .d-footer {
    background-color: @dark-grey;
    padding: 0;
  }

  .d-footer__wrapper {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
    padding: 41px 26px;
  }

  .d-footer__api-logo {
    display: block;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  .d-footer__api-description {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: @light-gray;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 5px;
  }
  .d-footer__copyright {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: @light-gray;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
</style>
