<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <TheRegister v-if="popRegisterShow" />
    <TheLogin v-if="popLoginShow" />
    <AcceptRegister v-if="acceptRegisterShow" />
    <SaccessAlert v-if="saccessAlertShow" />
    <ForgotPassword v-if="forgotPasswordShow" />
    <ProfileSettings v-if="profileSettingsShow" />
    <TopBalance v-if="topBalanceShow" />
    <BuyPopup v-if="buyPopup" />
    <SaccessPay v-if="saccessPay" />
    <ErrorPay v-if="errorPay" />
  </div>
</template>

<script>
export default {
  computed: {
    errorPay() {
      return this.$store.state.popup.errorPay;
    },
    saccessPay() {
      return this.$store.state.popup.saccessPay;
    },
    buyPopup() {
      return this.$store.state.popup.buy;
    },
    topBalanceShow() {
      return this.$store.state.topBalance;
    },
    profileSettingsShow() {
      return this.$store.state.profileSettings;
    },
    popRegisterShow() {
      return this.$store.state.popRegisterShow;
    },
    popLoginShow() {
      return this.$store.state.popLoginShow;
    },
    acceptRegisterShow() {
      return this.$store.state.acceptRegister;
    },
    saccessAlertShow() {
      return this.$store.state.saccessAlert;
    },
    forgotPasswordShow() {
      return this.$store.state.forgotPassword;
    },
  },
  watch: {
    $route: function (newVal) {
      if (newVal.hash == "#login") {
        this.$store.commit("openLogin");
      } else if (newVal.hash == "#register") {
        this.$store.commit("openRegister");
      }
      if (newVal.query.pay === "ok") {
        this.$store.commit("popup/openSaccessPay");
        this.$store.dispatch("login/user");
      }
      if (newVal.query.pay === "fail") {
        this.$store.commit("popup/openErrorPay");
        this.$store.dispatch("login/user");
      }
    },
  },
  mounted() {
    if (this.$route.hash == "#login") {
      this.$store.commit("openLogin");
    } else if (this.$route.hash == "#register") {
      this.$store.commit("openRegister");
    }
    if (this.$route.query.pay === "ok") {
      this.$store.commit("popup/openSaccessPay");
      this.$store.dispatch("login/user");
    }
    if (this.$route.query.pay === "fail") {
      this.$store.commit("popup/openErrorPay");
      this.$store.dispatch("login/user");
    }
  },
};
</script>


