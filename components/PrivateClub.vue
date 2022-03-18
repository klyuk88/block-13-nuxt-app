<template>
  <div>
    <div class="live_trading_grid">
      <div>
        <div class="profile_course_block">
          <h3 class="profile_course_block__title">PRIVAT CLUB</h3>
          <div class="profile_course_block_count">
            <div class="profile_course_block_count_days">
              <h4>29</h4>
              <span></span>
              <h6>Дней</h6>
            </div>
            <div class="profile_course_block_count_time">
              <div class="profile_course_block_count_time__timer">
                <span class="minute">23</span>:<span class="second">00</span>
              </div>
              <div class="line"></div>
              <h6>Минут</h6>
            </div>
          </div>
          <div class="profile_course_block_about">
            <p class="profile_course_block_about__text">
              Время до следующего сезона
            </p>
            <p class="profile_course_block_about__price">
              Каждый период длится 90 дней. ₽ 24000 за каждый сезон
            </p>
          </div>
          <button class="btn profile_course_block__btn">
            <span>Приобрести</span>
          </button>
        </div>
      </div>
      <div>
        <h6 class="live_trading__title">PRIVAT CLUB</h6>
        <p class="live_trading__about">
          Равным образом постоянное информационно-пропагандистское обеспечение
          нашей деятельности играет важную роль в формировании новых
          предложений. С другой стороны постоянный количественный рост и сфера
          нашей активности в значительной степени обуславливает создание
          существенных финансовых и административных условий.
        </p>
        <p class="live_trading__current">
          Один сезон длится: <span>90 дней</span>
        </p>
        <div class="live_trading_link_wrap">
          <input
            class="live_trading__link"
            type="text"
            placeholder="Здесь будет ваша ссылка в секретный чат"
            v-model="liveTradingLink"
            readonly
          />
          <div
            class="live_trading_link__btn"
            v-clipboard:copy="liveTradingLink"
          >
            Копировать
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liveTradingLink: null
    }
  },
};
</script>

<style lang="sass" scoped>
</style>