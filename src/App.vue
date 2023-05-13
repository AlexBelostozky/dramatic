<template>
  <div id="app">
    <dHeader />
    <dMain />
  </div>
</template>

<script>
import dHeader from './components/dHeader'
import dMain from './components/dMain'

export default {
  name: 'app',
  components: {
    dHeader,
    dMain
  }
}
</script>

<style lang="less">

</style>
