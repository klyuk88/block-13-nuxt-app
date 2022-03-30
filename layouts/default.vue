<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <TheRegister v-if="popRegisterShow" />
    <TheLogin v-if="popLoginShow" />
    <AcceptRegister v-if="acceptRegisterShow" />
    <SaccessAlert v-if="saccessAlertShow"/>
    <ForgotPassword v-if="forgotPasswordShow" />
  </div>
</template>

<script>
export default {
  computed: {
    popRegisterShow() {
      return this.$store.state.popRegisterShow;
    },
    popLoginShow() {
      return this.$store.state.popLoginShow;
    },
    acceptRegisterShow() {
      return this.$store.state.acceptRegister
    },
    saccessAlertShow() {
      return this.$store.state.saccessAlert
    },
    forgotPasswordShow() {
      return this.$store.state.forgotPassword
    }
  },
  watch: {
    $route: function (newVal) {
      if (newVal.hash == "#login") {
        this.$store.commit("openLogin");
      } else if (newVal.hash == "#register") {
        this.$store.commit("openRegister");
      }
    },
  },
  mounted() {
    if (this.$route.hash == "#login") {
      this.$store.commit("openLogin");
    } else if (this.$route.hash == "#register") {
      this.$store.commit("openRegister");
    }
  },
};
</script>


