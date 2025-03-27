import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  getters: {
    count: (state) => state.count,
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
})

export default store
