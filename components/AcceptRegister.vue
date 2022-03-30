<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">Регистрация</div>
          <p class="send_mail_alert">
            Мы отправили вам электронное письмо со ссылкой на подтверждение
            регистрации.
          </p>
          <button
            id="register-form__btn-close"
            @click="closeAcceptRegister"
          ></button>
        </div>
        <form
          class="js-form form-register-form"
          action="mail.php"
          id="form-register-form"
          @submit.prevent="sendForm"
        >
          <FormInput
            :type="'text'"
            :placeHolder="'Код из письма'"
            v-model="codeInput"
          />
          <button class="register-form__btn btn">
            <span>Зарегистрироваться</span>
          </button>
          <!-- <div class="register-form__account-have">
            <span>Есть аккаунт? </span>
            <a href="#login" @click="openLogin">Войти</a>
          </div> -->
          <div class="register-form__personal">
            <span>Входя в систему вы соглашаесть с нашими условиями</span>
            <a href="#">Политика конфиденциальности</a>
            <span>и</span>
            <a href="#">Условия использования</a>
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
      codeInput: null,
    };
  },
  methods: {
    closeAcceptRegister() {
      this.$store.commit("closeAcceptRegister");
    },
    async sendForm() {
      console.log(this.$store.state.login.userEmail);
      //отправить форму с почтой и кодом
        this.$store.commit("closeAcceptRegister");
        this.$store.commit("openSaccessAlert");
        
        
    },
    openLogin() {
      this.$store.commit("openLogin");
      this.$store.commit("closeAcceptRegister");
    },
  },
};
</script>


