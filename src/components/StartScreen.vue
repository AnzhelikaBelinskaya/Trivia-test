<template>
  <div class="start__container">
    <div class="start__header">Quiz game</div>
    <div class="start__button">
      <custom-button name="START" @click="start"></custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  methods: {
    start() {
      this.$store.dispatch("startQuiz");
    },
  },
};
</script>

<style lang='scss'>
.start__container {
  @include flexcol(space-between);
  align-items: center;
  height: 10rem;
}
.start__header {
  font-size: 3rem;
  font-weight: 800;
  color: $dark-blue;
}
.start__button {
  box-sizing: border-box;
  width: 16rem;
  margin-top: 30px;
}
</style>