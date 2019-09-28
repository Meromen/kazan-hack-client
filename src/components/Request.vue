<template>
  <div @click="moreInfo" class="request">
    <span>{{ request.request.kind }}</span>
    <span>{{ request.status }}</span>
  </div>
</template>

<script>
export default {
  props: {
    request: {
      required: true
    }
  },
  methods: {
    moreInfo () {
      this.$router.push(`/request/${this.request.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../main';

.request {
  min-height: 45px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border: 1px solid rgba(0, 0, 0, 0.35);
  box-sizing: border-box;
  color: $black;
  background: $white;
  transition: 0.3s;
  margin: 5px 0;

  &:hover {
    color: $white;
    background: $black;
  }
}
</style>
