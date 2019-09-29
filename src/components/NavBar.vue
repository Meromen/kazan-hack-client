<template>
  <div class="nav-bar">
    <div class="logo"><img src="../assets/logo.jpg" alt="" srcset=""></div>
    <svg @click="toProfile" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.06848" cy="3" r="3" fill="#F1F1F1"/>
      <path d="M13.0685 12H1.0685C1.0685 12 0.914372 11.0651 1.0685 10.5C1.18338 10.0788 1.31997 9.85899 1.5685 9.5C2.12423 8.69729 2.38478 8.4678 3.06848 8C4.08769 7.30264 4.53454 7.19147 5.56848 7C6.52847 6.82222 7.60851 6.82222 8.5685 7C9.60244 7.19147 10.21 7.39287 11.0685 8C12.0893 8.72189 12.8065 9.27747 13.0685 10.5C13.1912 11.0728 13.0685 12 13.0685 12Z" fill="#F1F1F1" stroke="#F1F1F1"/>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    toProfile () {
      this.$router.push('/profile')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 5%;
  background: linear-gradient(90deg, #000000 1.56%, rgba(0, 0, 0, 0.41) 51.36%, #000000 100%), #292D39;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  .logo {
    width: 20px;
    height: 20px; 
    
    img {
      width: 20px;
      height: 20px;      
    }
  }
}
</style>
