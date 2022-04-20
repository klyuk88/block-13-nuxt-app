export const state = () => ({
  token: null,
  user: {},
  userBalance: null,
  error: {},
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
  },
  getError(state) {
    if(state.error) {
      return state.error.message
    } else {
      return ''
    }
    
  },
  getErrorCode(state) {
    if(state.error) {
      return state.error.code
    } else {
      return ''
    }
  },
  getChanel(state) {
    return state.user.tgChannel
  },
  getChat(state) {
    return state.user.tgChat
  }
}
export const actions = {

  //пополние баланса
  async payBalance({
    state,
    commit,
    dispatch
  }, payload) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      }
      await this.$axios.post(`/payment/${payload.type || 'freecassa'}/pay`, {
        count: payload.count
      }, config)
      await dispatch('userBalance')
      commit('clearErrors')

    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },

  //запрос на смему телефона
  async changePhone({
    state,
    commit,
    dispatch
  }, formData) {
    try {
      await this.$axios.post('user/change/phone', formData, {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      })
      // перезапрашиваем юзера
      await dispatch('user', state.token)
      //чистим ошибки
      commit('clearErrors')

    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },
  //запрос на смему пароля
  async changePassword({
    state,
    commit
  }, formData) {
    try {
      await this.$axios.post('user/change/password', formData, {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      })
      //чистим ошибки
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },
  //запрос на смену почты
  async setEmail({
    state,
    commit
  }, formData) {
    try {
      await this.$axios.post('/user/change/email', formData, {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      })
      //код уходит на указанную почту

    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }

  },

  //подтверджение на смену почты
  async acceptMail({
    state,
    commit,
    dispatch
  }, formData) {
    try {
      await this.$axios.post('/user/change/email/accept', formData, {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      })
      //обновляем пользователя
      await dispatch('user')
      //чистим ошибки
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },
  //подтверждение на восстановление пароля
  async acceptRestorePassword({
    state,
    commit,
    dispatch
  }, formData) {
    try {
      const res = await this.$axios.post('auth/restore/accept', formData)
      //пишем токен в куки
      this.$cookies.set('token', res.data.access.token, {
        maxAge: res.data.access.liveTime
      })
      commit('setToken', res.data.access.token)
      //получаем баланс
      await dispatch('userBalance')
      //чистим ошибки
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)

    }
  },
  //запрос на восстановление пароля
  async restorePassword({
    commit,
  }, email) {
    try {
      await this.$axios.post('auth/restore', {
        'email': email
      })
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)

    }
  },
  //запрос на регистрацию
  async register({
    commit
  }, formData) {
    try {
      await this.$axios.$post('auth/registration', formData)
      commit('clearErrors')
      //уходит код на почту
    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },
  //подтверждение регистрации
  async acceptRegister({
    state,
    commit,
    dispatch,
  }, formData) {
    try {
      const res = await this.$axios.$post('auth/registration/accept', {
        code: formData.code,
        email: formData.email
      })
      await this.$cookies.set('token', res.access.token, {
        maxAge: res.access.liveTime
      })
      commit('setToken', res.access.token)

      await dispatch('userBalance')
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },
  //логин в системе
  async login({
    state,
    commit,
    dispatch
  }, formData) {
    try {
      const res = await this.$axios.$post('auth', formData)
      this.$cookies.set('token', res.access.token, {
        maxAge: res.access.liveTime
      })
      //пишем токен в куки
      commit('setToken', res.access.token)
      //получаем баланс
      await dispatch('userBalance')
      //чистим ошибки
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }

  },
  //запрос баланса
  async userBalance({
    state,
    commit
  }) {
    try {
      const resData = {
        "page": 0,
        "count": 10
      }
      const resConfig = {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      }
      //запрашиваем баланс
      const res = await this.$axios.post('user/balance', resData, resConfig)
      //пишем баланс в куки
      await this.$cookies.set('balance', res.data.current, {
        maxAge: 60 * 60 * 24 * 7
      })
      //пишем баланс в состоянии
      commit('setBalance', res.data.current)
      //чистим ошибки
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },
  //получаем пользователя
  async user({
    state,
    commit,
  }, ) {
    try {
      const user = await this.$axios.$get('user/profile/me', {
        headers: {
          'Authorization': `Bearer ${state.token}`
        }
      })
      commit('setUser', user)
      commit('clearErrors')
    } catch (error) {
      commit('setErrorMessage', error.response.data)
    }
  },
}

export const mutations = {
  setUserMail(state, mail) {
    state.userEmail = mail
  },
  setUser(state, user) {
    state.user = user
  },

  setBalance(state, balance) {
    state.userBalance = balance

  },
  setToken(state, token) {
    state.token = token
    state.error = null

  },
  removeToken(state) {
    state.token = null
    state.userBalance = null
    this.$cookies.remove('token')
    this.$cookies.remove('balance')
  },
  setErrorMessage(state, payload) {
    console.log(payload);
    state.error = payload
  },
  clearErrors(state) {
    state.error = {}
  }
}
