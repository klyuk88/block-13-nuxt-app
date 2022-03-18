
export const state = () => ({
    popRegisterShow: false,
    popLoginShow: false
  })
  
  export const mutations = {
    openLogin(state) {
        state.popLoginShow = true
    },
    closeLogin(state) {
        state.popLoginShow = false
    },
    openRegister(state) {
        state.popRegisterShow = true
    },
    closeRegister(state) {
        state.popRegisterShow = false
    },
  }