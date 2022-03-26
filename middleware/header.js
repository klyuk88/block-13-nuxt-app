export default ({
  app,
  store,
}) => {
  store.commit('login/setToken', app.$cookies.get('token'))
}
