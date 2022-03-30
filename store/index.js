export const state = () => ({
  popRegisterShow: false,
  popLoginShow: false,
  acceptRegister: false,
  saccessAlert: false,
  forgotPassword: false
})


export const mutations = {
  closeForgotPassword(state) {
    state.forgotPassword = false
  },
  openForgotPassword(state) {
    state.forgotPassword = true
  },
  closeSaccessAlert(state) {
    state.saccessAlert = false
  },
  openSaccessAlert(state) {
    state.saccessAlert = true
  },
  openAcceptRegister(state) {
    state.acceptRegister = true
  },
  closeAcceptRegister(state) {
    state.acceptRegister = false
  },
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
