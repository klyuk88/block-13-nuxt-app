import axios from 'axios'
export default ({
  app,
  store,
}) => {
  if (app.$cookies.get('token')) {
    //записываем токен из куки в состояние при перезагрузке
    store.commit('login/setToken', app.$cookies.get('token'))
    //записываем баланс из куки в состояниепри перезагрузке
    store.commit('login/setBalance', app.$cookies.get('balance'))

  }


}
