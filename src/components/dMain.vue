<template>
  <main class="d-main">
    <dResults />
  </main>
</template>

<script>
import dResults from '../components/dResults'

export default {
  name: 'dMain',
  components: {
    dResults
  },
  props: {},
  data () {
    return {
      title: 'Main'
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
