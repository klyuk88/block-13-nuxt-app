<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <SaccessMessage
      v-if="saccessMessage"
      :message="saccessMessage"
      @closeSaccessAlert="closePop"
      />
      <!-- Если нет ошибок -->
      <div class="register-form__content" v-if="!error && !saccessMessage">
        <div class="register-form__title-inner">
          <div class="register-form__title">{{ buyData.title }}</div>
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <div class="pop-buy-content">
          <p class="buy-pop-title">{{ buyData.subtitle }}</p>
          <span class="buy-pop-price">₽ {{ buyData.price }}</span>
        </div>
        <button class="register-form__btn btn" @click="buyProduct">
          <span>Купить</span>
        </button>
      </div>

      <!-- Если есть ошибка  -->
      <div class="register-form__content" v-if="error">
        <div class="register-form__title-inner">
          <div class="register-form__title">НЕДОСТАТОЧНО СРЕДСТВ</div>
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <div class="pop-buy-content">
          <p class="buy-pop-title">
            Необходимо пополнить кошелек для продолжения операции
          </p>
        </div>

        <button class="register-form__btn btn"
        @click="topBalance"
        ><span>Пополнить</span></button>
      </div>
    </div>
  </div>
  <!-- //register-form -->
</template>
<script>
export default {
  data() {
    return {
      saccessMessage: null
    }
  },
  methods: {
    closePop() {
      this.$store.commit('lessons/clearError')
      this.$store.commit("popup/closeBuy");
    },
    topBalance() {
        this.closePop()
        this.$store.commit('openBalance')
    },
    async buyProduct() {
      await this.$store.dispatch("lessons/buyProduct", {
        itemId: this.buyData.id || '',
        type: this.buyData.type,
      });
      await this.$store.dispatch('login/userBalance', this.$cookies.get('token'))
      await this.$store.dispatch('login/user', this.$cookies.get('token'))
      if(!this.error) {
        this.saccessMessage = 'Спасибо за покупку'
        
      } else {
        return;
      }
    },
  },
  computed: {
    buyData() {
      return this.$store.state.popup.buyData;
    },
    error() {
      return this.$store.state.lessons.error.message;
    },
  },
};
</script>

<style lang="sass" scoped>
.pop-buy-content
    margin-bottom: 30px
    text-align: center

.buy-pop-title
    font-size: 15px
    font-weight: 500
    margin-bottom: 10px
</style>