<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="scss">
#app {
  @include flexcol(center);
  align-items: center;
  width: 99vw;
  height: 99vh;
}
</style>
