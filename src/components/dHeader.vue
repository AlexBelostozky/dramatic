<template>
  <header class="d-header">
    <div class="d-header__container">
      <h1 class="visually-hidden">Dramatic – Movie streaming platform</h1>

      <a class="d-header__logo" href="#">
        <img src="../assets/d-logo.svg" width="180" height="49" alt="Dramatic logo.">
      </a>

      <form class="d-header__search-form" action="#">
        <label class="visually-hidden" for="search-line">What you want to watch?</label>
        <input class="d-header__search-line" v-model="searchQuery" id="#search-line" type="search" placeholder="Search">
        <button class="d-header__search-button" @click="searchMovies" type="submit">
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
      title: 'Header',
      searchQuery: '',
      resultsData: {}
    }
  },
  computed: {},
  methods: {
    async searchMovies () {
      if (this.searchQuery) {
        const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${this.searchQuery}&include_adult=false&language=en-US&page=1`
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDNkZDMxMjNhZDA3ZTVlNTNiNjQ0NDVkYTgwYWRlMCIsInN1YiI6IjY0NjMzYWRmZGJiYjQyMDE3MGFhM2Q5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LHyQAdPEGj3bwKPx7bpmqyFi7CKrru1cinr28gel-ik'
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
          }
        }

        try {
          const response = await fetch(searchUrl, options)
          const apiResponseData = await response.json()
          console.log(apiResponseData)
          this.resultsData = apiResponseData.results
          this.$emit('shareResultsData', apiResponseData.results)
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/globalStyles/styles.less';
  .d-header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: linear-gradient(
      90.53deg,
      rgba(0, 0, 0, 0.75) 0.45%,
      rgba(102, 80, 165, 0.75) 105.51%
    );
    backdrop-filter: blur(40px);
    z-index: 2;
  }
  .d-header__container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    min-height: 93px;
    margin: 0 auto;
    padding: 26px;
  }

  .d-header__search-form {
    display: flex;
  }
  .d-header__search-line {
    padding: 8px 19px;
    background-color: @blue;
    border-radius: 19px 0 0 19px;
    border: none;
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: @white;
    text-transform: uppercase;
    width: 269px;
    height: 37px;
    transition: all .2s ease-in-out;

    &::placeholder {
      font-family: 'Montserrat', "Arial", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: @light-white;
      text-transform: uppercase;
    }

    &:hover,
    &:focus {
      background-color: @darker-blue;
      outline: none;
    }
  }

  .d-header__search-button {
    color: @white;
    background-color: @blue;
    border: none;
    width: 55px;
    height: 37px;
    line-height: 0;
    font-size: 0;
    margin: 0;
    padding: 0;
    border-radius: 0 19px 19px 0;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover,
    &:focus {
      background-color: @darker-blue;
      outline: none;
    }

    &:active {
      background-color: @darkest-blue;
    }
  }
</style>
