<template>
  <footer class="d-footer">
    <div class="d-footer__wrapper">
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
    max-width: 1440px;
    margin: 0 auto;
    padding: 41px;
  }

  .d-footer__copyright {
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
</style>
