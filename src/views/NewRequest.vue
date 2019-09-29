<template>
  <div class="new-request">
    <back-bar></back-bar>
    <textarea v-model="text" class="text-area" placeholder="Сообщите о вашей проблеме"></textarea>
    <input @click="newReq" type="button" value="Оставить заявку" class="btn-2" >
  </div>
</template>

<script>
import backBar from '@/components/BackBar'

export default {
  components: {
    backBar
  },
  data () {
    return {
      text: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    newReq () {
      this.$store.dispatch('CREATE_REQUEST', { text: this.text })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          alert('Пожалуйтста перефразируйте проблему')
        })
    }
  },
  mounted () {
    if (!this.user) { this.$router.push('auth') }
  }
}
</script>

<style lang="scss" scoped>
.new-request {
  height: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

  .text-area {
    resize: none;
    min-height: 40%;
    width: 100%;
    padding: 10px;
    background: #FAFAFA;
    margin: 20px 0;
    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1), inset -2px -2px 10px rgba(0, 0, 0, 0.1);
    
    @media (min-width: 600px) {
      width: 50%;
      border: 3px solid #292D39;
      box-sizing: border-box;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  }
}
</style>
