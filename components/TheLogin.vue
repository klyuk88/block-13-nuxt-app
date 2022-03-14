<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">Вход в аккаунт</div>
          <button
            id="register-form__btn-close"
            @click="$emit('closePop')"
          ></button>
        </div>
        <form
          class="js-form form-register-form"
          id="form-register-form"
          @submit.prevent="sendForm"
        >
          <div class="input-wrap">
            <input
              type="text"
              class="register-form__input"
              placeholder="Email"
              name="email"
              :class="{ error: formErrors.emailError }"
              v-model="loginInputs.email"
            />
            <span class="form-error" :class="{ active: formErrors.emailError }">
              {{ formErrors.emailError }}</span>
          </div>

          <div class="input-wrap password-wrap">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="register-form__input"
              placeholder="Пароль"
              name="password"
              :class="{ error: formErrors.passwordError }"
              v-model="loginInputs.password"
            />
            <svg
              class="show-password-icon"
              @click="passwordHide"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14.0005 8.34057 13.943 8.67873 13.83 9L10 5.17C10.3213 5.05698 10.6594 4.99949 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.1839 10.0732 19.7969 11.8727 18 13.19L16.58 11.76C17.9629 10.8034 19.0782 9.50906 19.82 8C19.0116 6.34994 17.7564 4.95977 16.1973 3.9875C14.6381 3.01524 12.8375 2.49988 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C2.98844 9.65006 4.24357 11.0402 5.80273 12.0125C7.36189 12.9848 9.16254 13.5001 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C10.0242 10.9254 9.37482 10.6149 8.87997 10.12C8.38512 9.62518 8.07458 8.97584 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
                :fill="showPassword ? '#fff' : '#575759'"
              />
            </svg>
            <span
              class="form-error"
              :class="{ active: formErrors.passwordError }"
              >{{ formErrors.passwordError }}</span>
          </div>

          <button class="register-form__btn btn">Войти</button>
          <div class="register-form__account-have">
            <span>Нет аккаунта? </span
            ><a href="#register" @click="$emit('openRegisterPop')"
              >Зарегистрироваться</a
            >
          </div>
          <a href="#" class="register-form__pass-forget">Забыли пароль?</a>
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
  emits: ["closePop", "openRegisterPop"],
  data() {
    return {
      showPassword: false,
      formErrors: {
        emailError: "",
        passwordError: "",
      },
      formValidate: {
        email: false,
        password: false,
      },
      loginInputs: {
        email: null,
        password: null,
      },
      token: "",
      user: {}
    };
  },
  methods: {
    passwordHide() {
      this.showPassword = !this.showPassword;
    },
    sendForm() {
      if (this.loginInputs.email) {
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (reg.test(this.loginInputs.email)) {
          this.formValidate.email = true;
          this.formErrors.emailError = ''
        } else {
          this.formErrors.emailError = "*Введите корректный e-mail";
        }
      } else {
        this.formErrors.emailError = "*Заполните поле";
      }

      if (this.loginInputs.password) {
        this.formValidate.password = true
        this.formErrors.passwordError = ''
      } else {
        this.formErrors.passwordError = "*Заполните поле";
      }

      if(this.formValidate.email && this.formValidate.password) {
            this.token = '1234'
            this.user = {
              id: 1,
              name: 'Иван Иванович'
            }
            localStorage.setItem('token', this.token)
            this.loginInputs.email = null
            this.loginInputs.password = null
      }



      // this.token = '1234'
      // localStorage.setItem('token', this.token)
      //   try {
      //     const res = await this.$axios.post(
      //       "https://jsonplaceholder.typicode.com/posts",
      //       {
      //         title: "foo",
      //         body: "bar",
      //         userId: 1,
      //       }
      //     );
      //     console.log(res);
      //   } catch (error) {
      //       console.log(error);
      //   }
    },
  },
};
</script>
<style scoped>
</style>