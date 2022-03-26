export default ({
  app,
  store,
}) => {
  store.commit('login/setToken', app.$cookies.get('token'))
  store.commit('login/setBalance', app.$cookies.get('balance'))

}
