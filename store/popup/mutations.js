export default {
    openBuy(state) {
        state.buy = true
    },
    closeBuy(state) {
        state.buy = false
    },
    setBuyData(state, data) {
        state.buyData = data
    },
    openSaccessPay(state) {
        state.saccessPay = true
    },
    closeSaccessPay(state) {
        state.saccessPay = false
    },
    openErrorPay(state) {
        state.errorPay = true
    },
    closeErrorPay(state) {
        state.errorPay = false
    }
}