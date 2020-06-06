export const state = () => ({
    stars: null,
    reps: []
})

export const mutations = {
    // How many reps from elio's github
    SET_STARS(state, payload) {
        state.stars = {
            payload
        }
    },
    SET_REPS(state, payload) {
        state.reps = {
            payload
        }
    }
}

import axios from 'axios'
export const actions = {
    async GET_STARS ({ commit }) {
      await axios.get('https://api.github.com/users/luml/repos')
      .then((res) => {
        commit('SET_STARS', res.data.length)
      })
    },
    async GET_REPS ({ commit }) {
        await axios.get('https://api.github.com/users/luml/repos')
        .then((res) => {
          commit('SET_REPS', res.data)
        })
    },
  }