<template>
  <div id="profile_page">
    <section class="beginner-header">
      <div class="container">
        <h2 class="beginner-header__title">ЛИЧНЫЙ КАБИНЕТ</h2>
      </div>
    </section>
    <section class="profile_tabs_body">
      <div class="container">
        <div class="profile_tabs_header">
          <div class="profile_tabs_wrap">
            <div class="profile_tabs__tab active">Academy</div>
            <div class="profile_tabs__tab">LIVE TRADING</div>
            <div class="profile_tabs__tab">PRIVAT CLUB</div>
          </div>
          <div class="profile_tabs_header__line">
            <div class="active_line left"></div>
          </div>
        </div>

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
              Равным образом постоянное информационно-пропагандистское
              обеспечение нашей деятельности играет важную роль в формировании
              новых предложений. С другой стороны постоянный количественный рост
              и сфера нашей активности в значительной степени обуславливает
              создание существенных финансовых и административных условий.
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
                  <img src="~/assets/img/profile/block-overlay.jpg" alt="" class="blocked_overlay_content__bg">  
                  <p class="blocked-overlay__title">
                    Для просмотра<br>необходимо купить урок
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
                  <img src="~/assets/img/profile/block-overlay.jpg" alt="" class="blocked_overlay_content__bg">  
                  <p class="blocked-overlay__title">
                    Для просмотра<br>необходимо купить урок
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
                  <img src="~/assets/img/profile/block-overlay.jpg" alt="" class="blocked_overlay_content__bg">  
                  <p class="blocked-overlay__title">
                    Для просмотра<br>необходимо купить урок
                  </p>
                  <button class="btn"><span>Купить урок</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- container -->
    </section>
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

<style lang="sass">
#profile_page
    background: linear-gradient(180deg, #181818 -6.87%, #1F1E21 100%)

.profile_tabs_header
    display: block
    margin: 0 auto
    text-align: center

.profile_tabs_wrap
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    margin: 0 auto
    width: 50%
    padding-bottom: 10px

.profile_tabs_header__line
    background: #575759
    height: 2px
    width: 50%
    margin: 0 auto
    position: relative
    overflow: hidden

.active_line
    position: absolute
    width: 33.333%
    height: 4px
    background: #fff
    transition: transform .3s ease

.active_line.left
    left: 0
.active_line.center
    transform: translateX(100%)
.active_line.right
    transform: translateX(200%)

.profile_tabs__tab
    font-size: 20px
    font-weight: 700
    color: #575759
    text-transform: uppercase
    cursor: pointer
    transition: color .1s ease
    position: relative

.profile_tabs__tab:last-child
    margin-right: 0

.profile_tabs__tab.active
    color: #fff

.profile_course_block
    padding: 44px 50px
    background: #282729
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    &__title
        font-size: 20px
        font-weight: 700
        color: #fff
        text-transform: uppercase
    &_count
        text-align: center
        width: 100%
        background: #232224
        border-radius: 24px
        padding: 15px
        margin-top: 30px
        &__num
            font-size: 96px
            font-weight: 800
        &__about
            font-weight: 700
            font-size: 15px
            line-height: 130%
            text-transform: uppercase
    &_about
        margin-top: 30px
        text-align: center
        &__text
            font-size: 14px
            font-weight: 700
            line-height: 150%
        &__price
            color: #8F8E90
            font-size: 15px
            font-weight: 500
            margin-top: 5px
            line-height: 150%
    &__btn
        margin-top: 55px

.profile_course_blocks
    margin-top: 120px
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    column-gap: 80px

.profile_course_block.no_academy

.profile_course_block_count_days
    display: flex
    align-items: center
    padding-bottom: 20px
    h4
        font-size: 96px
        font-weight: 800
        margin-right: 16px
    span
        width: 20px
        height: 1px
        background: rgba(255, 255, 255, 0.1)
        transform: rotate(90deg)
        margin-right: 16px
    h6
        margin: 0
        padding: 0
        font-size: 15px
        font-weight: 700
        text-transform: uppercase

.profile_course_block_count_time
    display: flex
    align-items: center
    justify-content: center
    padding-top: 20px
    border-top: 1px solid rgba(255, 255, 255, 0.1)
    &__timer
        font-size: 32px
        font-weight: 800
        margin-right: 16px
    .line
        width: 20px
        height: 1px
        background: rgba(255, 255, 255, 0.1)
        transform: rotate(90deg)
        margin-right: 16px
    h6
        font-size: 15px
        font-weight: 700
        text-transform: uppercase
        margin: 0
        padding: 0

.profile_video
    position: relative
    margin-top: 120px

.profile_video_lessons
    margin-top: 100px
    &__title
        font-size: 36px
        font-weight: 800
    &_grid
        margin-top: 50px
        width: 100%
        display: grid
        grid-template-columns: repeat(3, 1fr)
        column-gap: 30px
        &_item
            position: relative
            width: 100%
            height: 265px
            cursor: pointer
            border: 1px solid transparent
            transition: border .3s ease
            overflow: hidden
            &__image
                position: absolute
                width: 100%
                height: 100%
                top: 0
                left: 0
                object-fit: cover
                z-index: 1
            &__title
                z-index: 2
                position: absolute
                bottom: 20px
                left: 20px
        &_item:hover
            border: 1px solid #F3D7AF

.blocked_overlay
    display: none
    position: absolute
    width: 100%
    height: 100%
    align-items: center
    justify-content: center
    z-index: 5
    &_content
        display: flex
        flex-direction: column
        align-items: center
        &__bg
            position: absolute
            width: 100%
            height: 100%
            object-fit: cover
            top: 0
            left: 0
            filter: blur(3px)

    
    
.blocked-overlay__title
    font-size: 16px
    line-height: 150%
    margin-bottom: 16px
    text-align: center
    position: relative


.profile_video_lessons_grid_item.blocked
    .blocked_overlay
        display: flex

</style>