<template>
  <li class="d-member-card">
    <img class="d-member-card__photo" src="{{ memberPhotoSrc }}" width="110" height="145" alt="Crew member photo.">

    <dl class="d-member-card__description">
      <dt class="d-member-card__name">{{ memberName }}</dt>

      <dd class="d-member-card__role">{{ memberRole }}</dd>
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
  @import '../assets/globalStyles/styles.less';

  .d-member-card {
    width: 110px;
  }

  .d-member-card__photo {
    margin-bottom: 8px;
  }
  .d-member-card__description {
    margin: 0;
    padding: 0;
  }

  .d-member-card__name {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: @white;
    word-break: break-word;
    margin: 0;
    margin-bottom: 2px;
    padding: 0;
  }

  .d-member-card__role {
    font-family: 'Montserrat', "Arial", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: @light-gray;
    word-break: break-word;
    margin: 0;
    padding: 0;
  }
</style>
