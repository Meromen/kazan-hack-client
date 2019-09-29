<template>
  <div class="auth">
    <div class="logo"><img src="../assets/logo.jpg" alt=""></div>
    <div class="input-form">
      <input v-model="number" type="text" placeholder="Номер телефона" class="input">
      <input v-model="password" type="password" placeholder="Пароль" class="input">
    </div>
    <input @click="login" :disabled="disabled" type="button" value="Войти" class="btn">
    <span>или</span>
    <router-link to="/registration" class="link">Зарегистрироваться</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: '',
      password: '',
      disabled: false
    }
  },
  methods: {
    login () {
      this.disabled = true
      this.$store.dispatch('LOGIN', { phone: this.number, password: this.password })
        .then(() => {
          this.$router.push('/')
          this.disabled = false          
        })
        .catch(err => {
          this.$notify({
            group: 'foo', 
            title: 'ошибка',
            position: ['bottom', 'right'],
            text: err,
          });
          this.disabled = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 0;
  background: inherit;
  
  .logo {
    height: 128px;
    width: 128px;
  }

  span {
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
