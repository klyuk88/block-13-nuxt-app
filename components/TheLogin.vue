<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">Вход в аккаунт</div>
          <button id="register-form__btn-close" @click="closeLogin"></button>
        </div>
        <form
          class="js-form form-register-form"
          id="form-register-form"
          @submit.prevent="sendForm"
        >
        <FormInput
          :placeHolder="'E-mail'"
          :type="'text'"
          v-model="inputs.email"
          :error="formErrors.emailError"
        />
        <FormInput
          :placeHolder="'Пароль'"
          :type="'password'"
          v-model="inputs.password"
          :error="formErrors.passwordError"
        />
          <button class="register-form__btn btn"><span>Войти</span></button>
          <div class="register-form__account-have">
            <span>Нет аккаунта? </span
            ><a href="#register" @click="openRegister">Зарегистрироваться</a>
          </div>
          <a href="!#" class="register-form__pass-forget" @click.prevent="forgetPasswordShow">Забыли пароль?</a>
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
      test: null,
      formErrors: {
        emailError: "",
        passwordError: "",
      },
      inputs: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    forgetPasswordShow() {
      this.$store.commit("closeLogin");
      this.$router.push("");
      this.$store.commit('openForgotPassword')
    },
    closeLogin() {
      this.$store.commit("closeLogin");
      this.$router.push("");
    },
    openRegister() {
      this.$store.commit("openRegister");
      this.$store.commit("closeLogin");
    },
    async sendForm() {
      await this.$store.dispatch("login/login", this.inputs);
      if (this.$store.state.login.error.message === '') {
        this.inputs.email = null;
        this.inputs.password = null;
        this.closeLogin();
      } else {
        this.formErrors.emailError = null
        this.formErrors.passwordError = null
        if (this.$store.state.login.error.code === 22) {
          this.formErrors.emailError = "Не верно указан e-mail";
        } else if (this.$store.state.login.error.code === 5) {
          this.formErrors.emailError = "Пользователь не найден";
        } else if (this.$store.state.login.error.code === 9) {
          this.formErrors.emailError = "Не верный пароль или e-mail";
          this.formErrors.passwordError = "Не верный пароль или e-mail";
        } else if(this.$store.state.login.error.code === 3) {
          this.formErrors.passwordError = "Не указан пароль";
        } else if(this.$store.state.login.error.code === 2) {
          this.formErrors.emailError = "Не указан e-mail";
        }
      }
    },
  },
  computed: {
    errorMessage() {
      return this.$store.state.login.error.message;
    },
  },
};
</script>
<style scoped>
</style>