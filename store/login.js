export const state = () => ({
  token: null
})

export const getters = {
    getToken(state) {
        return state.token
    }
}

export const mutations = {
  setToken(state, token) {
    this.$cookies.set('token', token, {
      maxAge: 60 * 60 * 24 * 7
    })
    state.token = token

  },
  removeToken(state) {
    state.token = null
    this.$cookies.remove('token')
  },
}
