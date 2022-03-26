export const state = () => ({
  token: null,
  user: null,
  userBalance: null
})

export const getters = {
  getToken(state) {
    return state.token
  },
  getUser(state) {
    return state.user
  },
  getBalance(state) {
    return state.userBalance
  }
}

export const actions = {
  async login({
    commit
  }, formData) {
    const res = await this.$axios.$post('auth', formData)
    commit('setToken', res.access.token)
  },

  async user({
    commit,
    state
  }) {
    const user = await this.$axios.$get('user/profile/me', {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    })
    commit('setUser', user)
    commit('setBalance', user.balance)
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },

  setBalance(state, balance) {
    this.$cookies.set('balance', balance, {
      maxAge: 60 * 60 * 24 * 7
    })
    state.userBalance = balance

  },
  setToken(state, token) {
    this.$cookies.set('token', token, {
      maxAge: 60 * 60 * 24 * 7
    })
    state.token = token

  },
  removeToken(state) {
    state.token = null
    state.userBalance = null
    this.$cookies.remove('token')
    this.$cookies.remove('balance')
  },
}
