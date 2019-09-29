<template>
  <div id="app">
    <navbar v-show="$route.name != 'auth' && $route.name != 'registration'"></navbar>
    <router-view/>
    <notifications group="foo" />
  </div>
</template>

<script>
import navbar from '@/components/NavBar'

export default {
  components: {
    navbar
  }

}
</script>

<style lang="scss">
@import "main";

body, html {
  margin: 0;
}

#app {
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: $font-family;

  @media (min-width: 500px) {
  }
}

.input {
  border: 1px solid #292D39;
  box-sizing: border-box;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 320px;
  height: 30px;
  margin: 10px 0;
  padding: 0 10px;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;

  &:focus {
    outline: none;
  }
}

.btn {
  background: $black;
  box-shadow: 0px 0px 10px rgba(40, 49, 129, 0.73);
  border-radius: 10px;
  width: 250px;
  height: 36px;
  margin: 10px;
  border: 1px solid $black;
  color: $white;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  transition: 0.3s;

  &:hover {
    background: $white;
    color: $black;
    border: 1px solid $white;
  }

  &:active {
    background: $white;
    color: $black;
    border: 1px solid $white;
  }

  &:focus {
    outline: none;
  }
}

.btn-2 {
  background: $white;
  border-radius: 10px;
  width: 250px;
  height: 36px;
  margin: 10px;
  border: 1px solid $black;
  color: $black;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  transition: 0.3s;

  &:hover {
    background: $black;
    color: $white;
  }

  &:active {
    background: $black;
    color: $white;
  }

  &:focus {
    outline: none;
  }
}

.input-form {
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.link {
  margin: 10px;
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
}

</style>
