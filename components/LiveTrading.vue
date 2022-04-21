<template>
  <div>
    <div class="profile-card-mob"><ChatCard/></div>
    
    <img
      src="~/assets/img/profile/arrow.svg"
      alt=""
      class="profile_course_block_arrow"
    />
    <div class="live_trading_grid">
      <h6 class="live_trading__title">LIVE TRADING</h6>
      <p class="live_trading__about">
        Закрытый канал с торговлей на крипторынке в режиме реального времени, который включает в себя точки входа и выхода, логику каждой торговой идеи, стоп-ордера и тейк-профиты. Вместе с активным трейдингом вы получаете торговую систему с полным объяснением принципов открытия сделок и доступ в закрытый чат с реальными практиками.
      </p>
      <p class="live_trading__current">
        Один сезон длится: <span>90 дней</span>
      </p>
      <!-- добавить active  -->
      <div class="live_trading_link_wrap">
        <input
          class="live_trading__link"
          type="text"
          placeholder="Здесь будет ваша ссылка в секретный чат"
          v-model="liveTradingLink"
          readonly
        />
        <div class="live_trading_link__btn" v-clipboard:copy="liveTradingLink">
          Копировать
        </div>
      </div>
      <nuxt-link to="/live-rading">
        <button class="profile-live-trading-btn">
          <span>Больше информации о live trading</span>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      liveTradingLink: this.$store.getters['login/getChat'],
    };
  },
  computed: {
    
   
  },
  methods: {
   
  },
};
</script>
<style lang="sass" scoped>
</style>