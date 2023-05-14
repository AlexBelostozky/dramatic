<template>
  <div id="app">
    <dHeader />
    <dAside />
    <dMain />
  </div>
</template>

<script>
import dHeader from './components/dHeader'
import dMain from './components/dMain'
import dAside from './components/dAside'

export default {
  name: 'app',
  components: {
    dHeader,
    dMain,
    dAside
  }
}
</script>

<style lang="less">

</style>
