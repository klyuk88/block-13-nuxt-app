<template>
  <div>
    <div class="profile_course_blocks">
      <div class="profile_course_block">
        <h3 class="profile_course_block__title">Academy</h3>
        <div class="profile_course_block_count">
          <h4 class="profile_course_block_count__num">102</h4>
          <h5 class="profile_course_block_count__about">
            Часа Подробных видеоуроков По криптовалюте
          </h5>
        </div>
        <div class="profile_course_block_about">
          <p class="profile_course_block_about__text">
            12 уроков с абсолютно новым подходом
          </p>
          <p class="profile_course_block_about__price">
            ₽ 24000 за все курсы / ₽ 4000 за курс
          </p>
        </div>
        <button class="btn profile_course_block__btn">
          <span>Купить весь курс</span>
        </button>
      </div>


      <div class="profile_course_block">
        <h3 class="profile_course_block__title">LIVE TRADING</h3>
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

      <div class="profile_course_block">
        <h3 class="profile_course_block__title">privat club</h3>
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
    <img src="~/assets/img/profile/arrow.svg" alt="" class="profile_course_block_arrow">

    <!-- profile_course_blocks -->
    <div class="profile_video">
      <div class="profile_video_player">
        <vue-plyr ref="plyr">
          <video controls crossorigin playsinline>
            <source size="" src="" type="video/mp4" />
          </video>
        </vue-plyr>
      </div>

      <div class="lessons__btn-bottom-right active">
        <a href="#register" class="lessons__btn btn"
          ><span>Смотреть курс</span></a
        >
      </div>
    </div>
    <div class="lessons__left-bottom">
      <div class="lessons__desc">
        <div class="lessons__desc-title">Что такое блокчейн</div>
        <p class="lessons__desc-text">
          Равным образом постоянное информационно-пропагандистское обеспечение
          нашей деятельности играет важную роль в формировании новых
          предложений. С другой стороны постоянный количественный рост и сфера
          нашей активности в значительной степени обуславливает создание
          существенных финансовых и административных условий.
        </p>
        <div class="lessons__desc-parametres">
          <div class="lessons__desc-duration">
            <span class="lessons__desc-duration-name">
              Среднее время курса:
            </span>
            <span class="lessons__desc-duration-sum"> 45 минут </span>
          </div>
          <div class="lessons__desc-topic">
            <span class="lessons__desc-topic-name">Тема: </span>
            <div class="lessons__desc-topic-list">
              Блокчейн, Криптовалюта, Рынок, Анализ и др.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- lessons__left-bottom -->
    <div class="profile_video_lessons">
      <h3 class="profile_video_lessons__title">Криптокурс, 1-12 частей</h3>
      <div class="profile_video_lessons_grid">
        <div class="profile_video_lessons_grid_item blocked">
          <img
            src="~/assets/img/profile/video-prev.jpg"
            alt=""
            class="profile_video_lessons_grid_item__image"
          />
          <p class="profile_video_lessons_grid_item__title">
            1. Что такое блокчейн?
          </p>
          <div class="blocked_overlay">
            <div class="blocked_overlay_content">
              <img
                src="~/assets/img/profile/block-overlay.jpg"
                alt=""
                class="blocked_overlay_content__bg"
              />
              <p class="blocked-overlay__title">
                Для просмотра<br />необходимо купить урок
              </p>
              <button class="btn"><span>Купить урок</span></button>
            </div>
          </div>
        </div>
        <div class="profile_video_lessons_grid_item">
          <img
            src="~/assets/img/profile/video-prev.jpg"
            alt=""
            class="profile_video_lessons_grid_item__image"
          />
          <p class="profile_video_lessons_grid_item__title">
            1. Что такое блокчейн?
          </p>
          <div class="blocked_overlay">
            <div class="blocked_overlay_content">
              <img
                src="~/assets/img/profile/block-overlay.jpg"
                alt=""
                class="blocked_overlay_content__bg"
              />
              <p class="blocked-overlay__title">
                Для просмотра<br />необходимо купить урок
              </p>
              <button class="btn"><span>Купить урок</span></button>
            </div>
          </div>
        </div>
        <div class="profile_video_lessons_grid_item">
          <img
            src="~/assets/img/profile/video-prev.jpg"
            alt=""
            class="profile_video_lessons_grid_item__image"
          />
          <p class="profile_video_lessons_grid_item__title">
            1. Что такое блокчейн?
          </p>
          <div class="blocked_overlay">
            <div class="blocked_overlay_content">
              <img
                src="~/assets/img/profile/block-overlay.jpg"
                alt=""
                class="blocked_overlay_content__bg"
              />
              <p class="blocked-overlay__title">
                Для просмотра<br />необходимо купить урок
              </p>
              <button class="btn"><span>Купить урок</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- profile_video_lessons -->
    <div class="profile_video_lessons_grid_mob">

      <div class="profile_video_lessons_grid_mob_item">
        <span>1. Что такое блокчейн?</span>
        <img src="~/assets/img/profile/play-white.svg" alt="">
      </div>
      <div class="profile_video_lessons_grid_mob_item purchased">
        <span>2. Что такое блокчейн?</span>
        <img src="~/assets/img/profile/play-gold.svg" alt="">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: "",
    };
  },
  mounted() {
    this.player = this.$refs.plyr.player;
    this.player.source = {
      type: "video",
      title: "",
      sources: [
        {
          src: "http://localhost:3000/video.mp4",
          type: "video/mp4",
          size: 1080,
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>
