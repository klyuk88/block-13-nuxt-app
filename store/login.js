export const state = () => ({
  token: null,
  user: null,
  userBalance: null,
  userEmail: null,
  error: {
    message: '',
    code: null
  }
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
  async acceptRegister({commit, dispatch}, formData) {
    try {
     await this.$axios.$post('auth/registration/accept', formData)
    
    } catch (error) {
      console.log(error.response);
      commit('setErrorMessage', {
        message: error.response.data.message,
        code: error.response.data.code
      })
    }
  },
  async register({commit, dispatch}, formData) {
    try {
     await this.$axios.$post('auth/registration', {
       'email': formData.email,
       'phone': formData.phone.replace(/-/g,""),
       'password': formData.password,
       'news': formData.news
     })
    
    } catch (error) {
      console.log('error', error);
      commit('setErrorMessage', {
        message: error.response.data.message,
        code: error.response.data.code
      })
    }
  },
  async login({
    commit, dispatch
  }, formData) {
    try {
      const res = await this.$axios.$post('auth', formData)
      commit('setToken', res.access.token)
      await dispatch('user')

    } catch (error) {
      console.log(error);
      commit('setErrorMessage', {
        message: error.response.data.message,
        code: error.response.data.code
      })
    }
    
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
  setUserMail(state, mail) {
    state.userEmail = mail
  },
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
    state.error.message = ''
    state.error.code = null

  },
  removeToken(state) {
    state.token = null
    state.userBalance = null
    this.$cookies.remove('token')
    this.$cookies.remove('balance')
  },
  setErrorMessage(state, payload) {
    state.error.code = payload.code
    state.error.message = payload.message
  }
}
