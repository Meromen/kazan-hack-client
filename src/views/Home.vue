<template>
  <div class="home">
    <p>Телефон для связи <a href="tel:7-999-999-9999"><span>+7 (999) 999-99-99</span></a></p>
    <input @click="goToNewRequest" type="button" value="Оставить заявку" class="btn-2">
    <div class="history-header">
      <p>История</p>
      <p class="columns"><span>Заявка</span> <span>Статус</span></p>
    </div>
    <div class="requests">
      <request v-for="(req, index) in requests" :key="index" :request="req" ></request>
    </div>
  </div>
</template>

<script>
import request from '@/components/Request'

export default {
  components: {
    request
  },
  data () {
    return {

    }
  },
  mounted () {
    if (!this.user) { this.$router.push('auth') }
  },
  computed: {
    requests () {
      return this.$store.state.requests
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    goToNewRequest () {
      this.$router.push('/newrequest')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .history-header {
    border: 1px solid #C4C4C4;
    box-shadow: 0px 2px 5px rgba(97, 97, 97, 0.27);
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    p {
      margin: 8px;
    }

    .columns {
      display: flex;
      justify-content: space-around;
      align-items: center;

      font-style: normal;
      font-weight: 900;
      font-size: 14px;
      line-height: 16px;
    }
  }

  .requests {
    height: (8 * 50px);
    max-height: (8 * 50px);
    overflow-y: scroll;
    width: 100%;
  }
}
</style>
