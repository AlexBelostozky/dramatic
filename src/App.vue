<template>
  <dHeader />
  <dMain />
  <dFooter />
</template>

<script>
import dHeader from './components/dHeader'
import dMain from './components/dMain'
import dFooter from './components/dFooter'

export default {
  name: 'dramatic-app',
  components: {
    dHeader,
    dMain,
    dFooter
  }
}
</script>

<style lang="less">

</style>
