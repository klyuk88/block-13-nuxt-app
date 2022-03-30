<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">Регистрация</div>
          <p class="send_mail_alert" v-if="alertMessage">
           {{alertMessage}}
          </p>
          <button id="register-form__btn-close" @click="closeRegister"></button>
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
            v-model="inputs.email"
            :readOnly="false"
            :error="formErrors.emailError"
          />
          <FormInput
            :type="'tel'"
            :placeHolder="'Телефон'"
            v-model="inputs.phone"
            :error="formErrors.phoneError"
          />
          <FormInput
            :type="'password'"
            :placeHolder="'Пароль'"
            v-model="inputs.password"
            :error="formErrors.passwordError"
          />

          <button class="register-form__btn btn">
            <span>Зарегистрироваться</span>
          </button>
          <div class="register-form__account-have">
            <span>Есть аккаунт? </span>
            <a href="#login" @click="openLogin">Войти</a>
          </div>
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
      alertMessage: '',
      formErrors: {
        emailError: "",
        phoneError: "",
        passwordError: "",
      },
      inputs: {
        email: null,
        phone: null,
        password: null,
        news: true,
      },
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.login.error.message;
    },
    errorCode() {
      return this.$store.state.login.error.code;
    },
  },
  methods: {
    closeRegister() {
      this.$store.commit("closeRegister");
      this.$router.push("");
    },
    async sendForm() {
    await this.$store.dispatch("login/register", this.inputs)
      if (this.errorMessage) {
        this.formErrors.emailError = null;
        this.formErrors.phoneError = null;
        this.formErrors.passwordError = null;
        switch (this.errorCode) {
          case 22:
            this.formErrors.emailError = "Не верно указан e-mail";
            break;
          case 2:
            this.formErrors.emailError = "Не указан e-mail";
            break;
          case 3:
            this.formErrors.passwordError = "Не указан пароль";
            break;
          case 23:
            this.formErrors.phoneError = "Неверное значение номера телефона";
            break;
          case 20:
            this.formErrors.phoneError = "Не указан телефон";
            break;
          case 24:
            this.alertMessage = "Код может быть выслан не чаще, чем один раз в минуту";
            break;
        }
      } else {
        this.$store.commit('closeRegister')
        this.$router.push("");
        this.$store.commit('login/setUserMail', this.inputs.email)
        this.$store.commit('openAcceptRegister')

      }
    },
    openLogin() {
      this.$store.commit("openLogin");
      this.$store.commit("closeRegister");
    },
  },
};
</script>

