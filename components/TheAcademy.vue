<template>
  <div>
    <div class="profile_course_block single">
      <h3 class="profile_course_block__title">Academy</h3>
      <div class="profile_course_block_count">
        <h4 class="profile_course_block_count__num">15</h4>
        <h5 class="profile_course_block_count__about">уроков</h5>
      </div>
      <div class="profile_course_block_about">
        <p class="profile_course_block_about__text">$ 700 за весь курс</p>
        <p class="profile_course_block_about__price">
          15 уроков с абсолютно новым подходом
        </p>
      </div>
      <button class="btn profile_course_block__btn">
        <span>Купить весь курс</span>
      </button>
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
      <div class="lesson_btn">
        <span>КУПИТЬ ВЕСЬ КУРС ЗА $ 700</span>
      </div>
    </div>
    <!-- lessons__left-bottom -->
    <div class="profile_video_lessons">
      <h3 class="profile_video_lessons__title">Криптокурс, 1-12 частей</h3>
      <div class="profile_video_lessons_grid">
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
                src="~/assets/img/profile/video-prev.jpg"
                alt=""
                class="blocked_overlay_content__bg"
              />
              <img
                src="~/assets/img/profile/lock.svg"
                alt=""
                class="block_content_icon"
              />
              <!-- <p class="blocked-overlay__title">
                Для просмотра<br />необходимо купить урок
              </p>
              <button class="btn"><span>Купить урок</span></button> -->
            </div>
          </div>
        </div>

        <div class="profile_video_lessons_grid_item blocked">
          <img
            src="~/assets/img/profile/video-prev.jpg"
            alt=""
            class="profile_video_lessons_grid_item__image"
          />
          <p class="profile_video_lessons_grid_item__title">
            2. Что такое блокчейн?
          </p>
          <div class="blocked_overlay">
            <div class="blocked_overlay_content">
              <img
                src="~/assets/img/profile/video-prev.jpg"
                alt=""
                class="blocked_overlay_content__bg"
              />
              <img
                src="~/assets/img/profile/lock.svg"
                alt=""
                class="block_content_icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- profile_video_lessons -->
    <div class="profile_video_lessons_grid_mob">
      <div class="profile_video_lessons_grid_mob_item">
        <span>1. Что такое блокчейн?</span>
        <img
          src="~/assets/img/profile/lock.svg"
          alt=""
          class="profile-video-item-mob-lock"
        />
      </div>
      <div class="profile_video_lessons_grid_mob_item purchased">
        <span>2. Что такое блокчейн?</span>
        <img src="~/assets/img/profile/play-gold.svg" alt="" />
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
