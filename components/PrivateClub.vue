<template>
  <div>
    <div class="profile-card-mob">
      <ChanelCard/>
    </div>
    
    <img
      src="~/assets/img/profile/arrow.svg"
      alt=""
      class="profile_course_block_arrow"
    />
    <div class="live_trading_grid">
      <h6 class="live_trading__title">Privite club</h6>
      <p class="live_trading__about">
        Экосистема быстрого роста для трейдеров и инвесторов с крупными депозитами. Клуб дает полный доступ к академии и лайв-трейдингу, а также предоставляет эксклюзивную премиальную аналитику с долгосрочными и высокодоходными инвестидеями. Сюда включается поиск перспективных проектов на ранних стадиях, пресейлы, сферы GameFi и DeFi, а также поддержка и курирование торговли.
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
      <nuxt-link to="/private-club">
        <button class="profile-live-trading-btn">
          <span>Больше информации о Privite club</span>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      liveTradingLink: this.$store.getters['login/getChanel']
    };
  },
 
  methods: {
    buyChanel() {
      this.$store.commit("popup/setBuyData", {
        title: "Купить канал",
        subtitle: "Каждый период длится 90 дней.",
        price: this.chanelPrice,
        type: 3,
      });

      this.$store.commit("popup/openBuy");
    },
  },

  computed: {
    chanelPrice() {
      return this.$store.getters["lessons/getChannelPrice"];
    },
    tgChanel() {
      return this.$store.getters['login/getChanel']
    }
  },
};
</script>
<style lang="sass" scoped>
</style>