<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <TheRegister v-if="popRegisterShow" />
    <TheLogin v-if="popLoginShow" />
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
      // this.$store.commit("closeRegister");
    } else if (this.$route.hash == "#register") {
      this.$store.commit("openRegister");
      // this.$store.commit("closeLogin");
    }
  },
};
</script>


