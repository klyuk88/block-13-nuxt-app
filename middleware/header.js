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
    //получаем и записываем юзера
    // axios.get(`http://176.99.9.44:8086/api/user/profile/me`, {
    //     headers: {
    //       'Authorization': `Bearer ${app.$cookies.get('token')}`
    //     }
    //   })
    //   .then((user) => {
    //     console.log(user.data);
    //     // store.commit('login/setUser', user)
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //   })

  }


}
