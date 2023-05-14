<template>
  <main class="d-main">
    {{ title }}
    <dHero />
  </main>
</template>

<script>
import dHero from '../components/dHero'

export default {
  name: 'dMain',
  components: {
    dHero
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
