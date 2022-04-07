<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">ПОПОЛНИТЬ КОШЕЛЕК</div>
          <p class="balance-top-subtitle">
            1$ = 1b монете внутреннего кошелька
          </p>
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <form
          class="js-form form-register-form"
          id="form-register-form"
          @submit.prevent="sendForm"
        >
          <FormInput
            :placeHolder="'Укажите нужную сумму — $'"
            :type="'text'"
            v-model="balance"
          />
          <button class="register-form__btn btn"><span>Продолжить</span></button>
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
        balance: null
    };
  },
  methods: {
    async sendForm() {},
    closePop() {
      this.$store.commit("closeBalance");
    },
  },
  computed: {},
};
</script>


<style lang="sass" scoped>
.balance-top-subtitle
    font-size: 15px
    margin-top: 25px
</style>
