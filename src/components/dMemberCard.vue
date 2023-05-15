<template>
  <li class="d-member-card">
    <img class="d-member-card__photo" src="{{ memberPhotoSrc }}" width="110" height="145" alt="Crew member photo.">

    <dl class="d-member-card__description">
      <dt class="d-member-card__role">{{ memberRole }}</dt>

      <dd class="d-member-card__name">{{ memberName }}</dd>
    </dl>
  </li>
</template>

<script>
export default {
  name: 'dMemberCard',
  components: {},
  props: {},
  data () {
    return {
      memberPhotoSrc: '#',
      memberRole: 'As ',
      memberName: 'Member Name'
    }
  },
  computed: {},
  methods: {
    // создать методы для вставки фото, роли, имени
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
