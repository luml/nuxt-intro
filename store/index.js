export const state = () => ({
    stars: null,
    reps: []
})

export const mutations = {
    // How many reps from elio's github
    setStars(state, payload) {
        state.stars = {
            ...payload
        }
    },
    setReps(state, payload) {
        state.reps = {
            ...payload
        }
    }
}