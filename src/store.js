import Vue from 'vue'
import Vuex from 'vuex'
import { router } from './router'
import { apiResources } from './services/resources'
import { tokenManager } from './services/token-manager'
import { checkAnswer } from './helpers/check-answer'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    questions: null,
    count: null,
    currentQuestion: null,
    correct: 0
  },
  actions: {
    async startQuiz({ dispatch }) {
      try {
        if (!tokenManager.token) {
          const response = await apiResources.getToken.perform()
          tokenManager.saveToken(response)
        }
        dispatch('getQuestions')
        router.push('/quiz')
      }
      catch (err) {
        console.log(err)
      }
    },
    async getQuestions({ commit }) {
      try {
        const response = await apiResources.getQuestions.perform({
          amount: 10,
          type: 'multiple',
          token: tokenManager.token,
        })
        commit('setQuestions', response.data.results)
        commit('nextQuestion')
      } catch (err) {
        console.log(err)

      }
    },
    async postAnswer({ state, commit }, data) {
      try {
        const response = await apiResources.postAnswer.perform(data);
        if (response) {
          const result = checkAnswer(data);
          if (result) {
            commit('incrementCorrect')
          }
          commit('incrementCount')
          if (state.questions.length > state.count) {
            commit('nextQuestion')
          } else {
            router.push("/score")
          }

        }
      }
      catch (err) {
        console.log(err)
      }
    },
    replay({ dispatch, commit }) {
      commit('clearStore')
      dispatch('getQuestions')
      router.push('/quiz')
    }
  },
  mutations: {
    setQuestions(state, array) {
      state.questions = array
      state.count = 0

    },
    incrementCount(state) {
      state.count++
    },
    incrementCorrect(state) {
      state.correct++
    },
    nextQuestion(state) {
      state.currentQuestion = state.questions[state.count]
    },
    clearStore(state) {
      state.questions = null,
        state.count = null,
        state.currentQuestion = null,
        state.correct = 0
    }
  }
})