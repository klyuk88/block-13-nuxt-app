<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">ВОССТАНОВЛЕНИЯ ПАРОЛЯ</div>
          <p class="send_mail_alert">
            Мы отправили вам электронное письмо со ссылкой на подтверждение
            регистрации.
          </p>
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <form
          class="js-form form-register-form"
          action="mail.php"
          id="form-register-form"
          @submit.prevent="sendForm"
        >
          <FormInput
            :type="'text'"
            :placeHolder="'E-mail'"
            v-model="emailInput"
          />
          <button class="register-form__btn btn">
            <span>Восстановить</span>
          </button>
          <div class="register-form__account-have">
            <span>вспомнили свой пароль?</span>
            <a href="#login" @click="openLogin">Войти</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- //register-form -->
</template>

<script>
export default {
  data() {
    return {
      emailInput: null
    }
  },
  methods: {
    closePop() {
      this.$store.commit("closeForgotPassword");
    },
    openLogin() {
      this.$store.commit("openLogin");
      this.$store.commit("closeForgotPassword");
    },
  },
};
</script>


