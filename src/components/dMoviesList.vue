<template>
  <ul class="d-movies-list">
    <dMovieItem />
    <dMovieItem />
    <dMovieItem />
    <dMovieItem />
  </ul>
</template>

<script>
import dMovieItem from '../components/dMovieItem'

export default {
  name: 'dMoviesList',
  components: {
    dMovieItem
  },
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

  .d-movies-list {
    box-sizing: border-box;
    display: grid;
    grid-row-gap: 42px;
    grid-column-gap: 42px;
    grid-template-columns: repeat(6, 1fr);
    margin: 0;
    padding: 26px 23px;
    list-style: none;
  }
</style>
