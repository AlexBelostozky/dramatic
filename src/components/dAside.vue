<template>
  <aside class="d-aside">
    <nav class="d-aside__user-nav">
      <ul class="d-aside__user-nav-list">
        <li class="d-aside__user-nav-item">
          <a class="d-aside__user-nav-link" href="#">
            <svg class="d-aside__user-nav-icon" width="30" height="30" fill="currentColor">
              <title>Your friends.</title>
              <use href="../assets/icons/stack.svg#users-icon"></use>
            </svg>
          </a>
        </li>

        <li class="d-aside__user-nav-item">
          <a class="d-aside__user-nav-link" href="#">
            <svg class="d-aside__user-nav-icon" width="30" height="30" fill="currentColor">
              <title>Your lists.</title>
              <use href="../assets/icons/stack.svg#lists-icon"></use>
            </svg>
          </a>
        </li>

        <li class="d-aside__user-nav-item">
          <a class="d-aside__user-nav-link" href="#">
            <svg class="d-aside__user-nav-icon" width="30" height="30" fill="currentColor">
              <title>Your downloads.</title>
              <use href="../assets/icons/stack.svg#downloads-icon"></use>
            </svg>
          </a>
        </li>

        <li class="d-aside__user-nav-item">
          <a class="d-aside__user-nav-link" href="#">
            <svg class="d-aside__user-nav-icon" width="30" height="30" fill="currentColor">
              <title>Your settings.</title>
              <use href="../assets/icons/stack.svg#settings-icon"></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'dAside',
  components: {},
  props: {},
  data () {
    return {
      title: 'Aside'
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
