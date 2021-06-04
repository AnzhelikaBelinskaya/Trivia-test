import Vue from 'vue'
import VueRouter from 'vue-router'
import QuizScreen from './components/QuizScreen'
import ScoreScreen from './components/ScoreScreen'
import StartScreen from './components/StartScreen.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: StartScreen },
  { path: '/quiz', component: QuizScreen },
  { path: '/score', component: ScoreScreen }
]


export const router = new VueRouter({
  mode: 'history',
  routes
})