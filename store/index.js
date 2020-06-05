export const state = () => ({
    stars: null
})

export const mutations = {
    // 设置用户信息
    setStars(state, payload) {
        state.userInfo = {
            ...payload
        }
    }
}