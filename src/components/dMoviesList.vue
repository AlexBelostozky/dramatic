<template>
  <ul class="d-movies-list">
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
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0;
    padding: 26px 23px;
    list-style: none;
  }
</style>
