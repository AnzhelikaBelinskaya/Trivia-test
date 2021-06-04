<template>
  <div class="score__container">
    <div class="score__header">Your score:</div>
    <div class="score__content">
      <span class="score__content-red">{{ score }}</span> correct answers of
      {{ total }}
    </div>
    <div class="score__button">
      <custom-button name="Play again" @click="replay" />
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  computed: {
    score() {
      return this.$store.state.correct;
    },
    total() {
      return this.$store.state.questions.length;
    },
  },
  methods: {
    replay() {
      this.$store.dispatch("replay");
    },
  },
};
</script>


<style lang="scss">
.score__container {
  @include flexcol(flex-start);
  align-items: center;
  width: 90%;
}
.score__header {
  font-weight: 500;
  
}
.score__content {
  font-size: 3rem;
  font-weight: 600;
  color: $dark-blue;
  text-align: center;
}
.score__content-red {
  color: $alert;
}
.score__button {
  margin-top: 4rem;
  width: 20rem;
}
</style>