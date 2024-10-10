import { createStore } from 'vuex'

const store = createStore({
  state: {
    counter: 0,
    color: 'red'
  },
  mutations: {
    increment(state, value = 1) {
      state.counter++

      if (value) {
        state.counter += value
      }
    },
    decrement(state) {
      state.counter--
    },
    setColor(state, value) {
      state.color = value
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment', 0)
    },
    decrement({ commit }) {
      commit('decrement')
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  modules: {}
})

export default store
