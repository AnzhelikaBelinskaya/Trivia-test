import { store } from '../store'

export function checkAnswer(answer) {
  return store.state.currentQuestion.correct_answer === answer.answer
}