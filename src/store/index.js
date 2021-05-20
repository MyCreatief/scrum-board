import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import cards from './modules/cards'

const vuexPersist = new VuexPersist({
  key: 'scrum-bord',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    'cards':  cards
  }
})
