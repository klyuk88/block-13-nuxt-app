<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="saccess_alert_content">
        <img src="~/assets/img/check_send.svg" alt="" />
        <div class="register-form__title">
          ВАШ АККАУНТ УСПЕШНО ЗАРЕГЕСТРИРОВАН
        </div>
        <button class="btn btn_saccess_alert" @click="closeSaccessAlert">
          Спасибо
        </button>
      </div>
    </div>
  </div>
  <!-- //register-form -->
</template>

<script>
export default {
  methods: {
    closeSaccessAlert() {
      this.$store.commit("closeSaccessAlert");
    },
  },
};
</script>


<style lang="sass" scoped>
.saccess_alert_content
    display: flex
    flex-direction: column
    align-items: center

.register-form__title
    margin-top: 43px
    font-size: 24px
    line-height: 120%

.btn_saccess_alert
    font-size: 15px
    margin-top: 27px
    width: 100%
    padding: 17px 0
</style>


