<template>
  <div class="profile">
    <back-bar></back-bar>
    <h2>Личные Данные</h2>
    <input v-model="name" type="text" class="input" placeholder="ФИО">
    <input v-model="address" type="text" class="input" placeholder="Адрес">
    <input @click="updateInfo" type="button" value="Сохранить" class="btn-2">
    <notifications group="profile" />    
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
      name: '',
      address: ''
    }
  },
  mounted () {
    if (!this.user) { this.$router.push('auth') }
    this.name = this.user.name
    this.address = this.user.address
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    updateInfo () {
      this.$store.dispatch('UPDATE_USER', { name: this.name, address: this.address })
        .then(() => {
          this.$notify({
            group: 'profile',
            title: 'Успех',
            position: ['bottom', 'right'],
            text: 'Данные успешно обновлены',
          });

        })
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 5px;
  height: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
