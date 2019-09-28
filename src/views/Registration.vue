<template>
  <div class="registration">
    <div class="logo"></div>
    <div class="input-form">
      <input v-model="number" type="text" placeholder="Номер телефона" class="input">
      <input v-model="address" type="text" placeholder="Адрес" class="input">
      <input v-model="name" type="text" placeholder="Ф.И.О" class="input">
      <input v-model="password" type="password" placeholder="Пароль" class="input">
    </div>
    <input @click="registration" type="button" value="Зарегистрироваться" class="btn">
    <router-link to="/auth" class="link">Назад</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: '',
      name: '',
      address: '',
      password: ''
    }
  },
  methods: {
    registration () {
      this.$store.dispatch('REGISTRATION', {
        phone: this.number,
        name: this.name,
        address: this.address,
        password: this.password
      })
        .then(() => {
          this.$router.push('/auth')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem 0;
  position: relative;

  .logo {
    height: 100px;
    width: 100px;
    background: red;
  }
}
</style>
