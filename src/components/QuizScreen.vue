<template>
  <div v-if="currentQuestion !== null" class="quiz__container">
    <RadioButton
      :title="currentQuestion.question"
      :options="answers"
      v-model="checkedAnswer"
      @input="onChange"
    />
    <div class="quiz__alert" :class="{ 'quiz__alert-hidden': !alert }">
      {{ alert }}
    </div>
    <div class="quiz__button">
      <CustomButton name="Send" @click="send" />
    </div>
  </div>
</template>

<script>
import RadioButton from "./RadioButton.vue";
import CustomButton from "./CustomButton";
export default {
  components: {
    RadioButton,
    CustomButton,
  },
  data() {
    return {
      checkedAnswer: "",
      alert: null,
    };
  },
  computed: {
    currentQuestion() {
      return this.$store.state.currentQuestion;
    },
    answers() {
      const answers = this.currentQuestion.incorrect_answers.concat(
        this.currentQuestion.correct_answer
      );
      return answers.sort(() => 0.5 - Math.random());
    },
  },
  methods: {
    onChange() {
      this.alert = null;
    },
    send() {
      if (this.checkedAnswer) {
        this.$store.dispatch("postAnswer", {
          question: this.currentQuestion.question,
          answer: this.checkedAnswer,
        });
        this.checkedAnswer = "";
        this.$forceUpdate();
      } else {
        this.alert = "Please, choose an answer";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.quiz__container {
  @include flexcol(center);
  width: 100%;
  height: 100%;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.1rem;
}
.quiz__button {
  justify-self: flex-end;
  width: 15rem;
}
.quiz__alert {
  color: $alert;
  height: 5rem;
  padding: 2rem;
}
.quiz__alert-hidden {
  opacity: 0;
}
</style>
