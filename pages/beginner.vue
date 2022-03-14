<template>
  <div id="beginner-page">
    <section class="beginner-header">
      <div class="container">
        <h2 class="beginner-header__title">ИНСТРУКЦИЯ НОВИЧКА</h2>
      </div>
    </section>
    <section class="beginner-body">
      <div class="container">
        <div class="beginner-content">
          <div class="beginner-content-helps">
            <div class="beginner-content__title">Подсказки</div>

            <div class="beginner-content-helps-items">
              <div
                class="beginner-content-helps-item"
                v-for="(item, index) in helps"
                :key="index"
              >
                <h3 class="beginner-content-helps-item__title">
                  {{ item.title }}
                </h3>
                <p class="beginner-content-helps-item__about">
                  {{ item.about }}
                </p>
              </div>
            </div>
            <!-- beginner-content-helps-items -->
            <client-only>
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="(item, index) in helps" :key="index">
                <div class="beginner-content-helps-item">
                  <h3 class="beginner-content-helps-item__title">
                    {{ item.title }}
                  </h3>
                  <p class="beginner-content-helps-item__about">
                    {{ item.about }}
                  </p>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            </client-only>

          </div>
          <div class="beginner-content-steps">
            <div class="beginner-content__title">Первый шаг</div>
            <div class="beginner-content-steps-item">
              <h3 class="beginner-content-steps-item__title">
                Зарегистрироваться на одной из бирж:
              </h3>
              <p class="beginner-content-steps-item__about">
                OKX и BINANCE — 20% кешбека на все комиссии биржи пожизненно
              </p>
              <div class="beginner-content-steps-item-btns">
                <a href="#" target="_blank">
                  <div class="beginner-content-steps-item-btns__btn-white">
                    <img src="~/assets/img/beginners/first-btn.svg" alt="" />
                  </div>
                </a>
                <a href="#" target="_blank">
                  <div class="beginner-content-steps-item-btns__btn-black">
                    <img src="~/assets/img/beginners/binance.svg" alt="" /></div
                ></a>
              </div>
            </div>

            <div class="beginner-content__title step-2">Второй шаг</div>
            <div class="beginner-content-steps-item">
              <h3 class="beginner-content-steps-item__title">
                Ознакомиться с бесплатными уроками по пользованию биржами
              </h3>
              <p class="beginner-content-steps-item__about">
                В видеоурках подробно описано как начать путь трейдера
              </p>
            </div>
            <div class="beginner-video-lessons">
              <div
                class="beginner-video-lesson"
                v-for="(lesson, index) in videoLessons"
                :key="index"
              >
                <h4 class="beginner-video-lesson__title">
                  {{ index + 1 }}. {{ lesson.title }}
                </h4>
                <div
                  class="beginner-video-lesson-btn"
                  @click="openVideo(index)"
                >
                  Смотреть
                  <img src="~/assets/img/beginners/youtube.svg" alt="" />
                </div>
              </div>
            </div>

            <div class="beginner-content-steps-links">
              <div class="beginner-content-steps-links-item">
                <div class="beginner-content__title">
                  <span class="steps-links__title">ACADEMY</span>
                </div>
                <div class="beginner-content-steps-item">
                  <h3 class="beginner-content-steps-item__title">
                    Eсли остались вопросы советуем перейти в раздел обучения
                  </h3>
                  <p class="beginner-content-steps-item__about">
                    В видеоурках подробно описано как начать путь трейдера
                  </p>
                  <div class="beginner-content-steps-links-btn">
                    Подробнее
                    <img src="~/assets/img/beginners/arrow.svg" alt="" />
                  </div>
                </div>
              </div>

              <div class="beginner-content-steps-links-item">
                <div class="beginner-content__title">
                  <span class="steps-links__title">LIVE TRANIGN</span>
                </div>
                <div class="beginner-content-steps-item">
                  <h3 class="beginner-content-steps-item__title">
                    Eсли остались вопросы советуем перейти в раздел обучения
                  </h3>
                  <p class="beginner-content-steps-item__about">
                    В видеоурках подробно описано как начать путь трейдера
                  </p>
                  <div class="beginner-content-steps-links-btn">
                    Подробнее
                    <img src="~/assets/img/beginners/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="beginner-content-steps-links-item">
                <div class="beginner-content__title">
                  <span class="steps-links__title">PRIVAT CLUB</span>
                </div>
                <div class="beginner-content-steps-item">
                  <h3 class="beginner-content-steps-item__title">
                    Eсли остались вопросы советуем перейти в раздел обучения
                  </h3>
                  <p class="beginner-content-steps-item__about">
                    В видеоурках подробно описано как начать путь трейдера
                  </p>
                  <div class="beginner-content-steps-links-btn">
                    Подробнее
                    <img src="~/assets/img/beginners/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="video-pop-overlay" v-if="playLesson">
      <div class="video-pop">
        <span class="video-pop-close" @click="playLesson = !playLesson">✕</span>
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              :src="video"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 20
      },
      playLesson: false,
      videoLesson: null,
      video: "",
      videoLessons: [
        {
          videoSrc: "https://www.youtube.com/embed/aFOxDP2xWxI?autoplay=1",
          title: "Что такое блокчейн?",
        },
        {
          videoSrc: "https://www.youtube.com/embed/jMHOYQ8FgSU?autoplay=1",
          title: "Что такое крипта?",
        },
        {
          videoSrc: "https://www.youtube.com/embed/aphTdC1T8KE?autoplay=1",
          title: "Как торговать?",
        },
      ],
      helps: [
        {
          title: "Ознакомиться с бесплатными уроками по пользованию биржами",
          about:
            "Описание чем поможет эта инструкция. Можно в 2 предложения описать что даст курсы, чтобы захотел их посмотреть. Таким образом постоянное информационно-пропагандистское",
        },
        {
          title: "Ознакомиться с бесплатными уроками по пользованию биржами",
          about:
            "Описание чем поможет эта инструкция. Можно в 2 предложения описать что даст курсы, чтобы захотел их посмотреть. Таким образом постоянное информационно-пропагандистское",
        },
        {
          title: "Ознакомиться с бесплатными уроками по пользованию биржами",
          about:
            "Описание чем поможет эта инструкция. Можно в 2 предложения описать что даст курсы, чтобы захотел их посмотреть. Таким образом постоянное информационно-пропагандистское",
        },
        {
          title: "Ознакомиться с бесплатными уроками по пользованию биржами",
          about:
            "Описание чем поможет эта инструкция. Можно в 2 предложения описать что даст курсы, чтобы захотел их посмотреть. Таким образом постоянное информационно-пропагандистское",
        },
      ],
    };
  },

  methods: {
    openVideo(idx) {
      this.videoLesson = this.videoLessons.find((item, index) => index === idx);
      this.video = this.videoLesson.videoSrc;
      this.playLesson = true;
    },
  },
};
</script>



<style lang="sass" scoped>
.swiper-container
    display: none
    margin-top: 60px
    min-height: 75%
    @media (max-width: 960px)
        display: block
    @media (max-width: 420px)
        min-height: 85%

.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active
    background: #fff!important

#beginner-page
    background: linear-gradient(180deg, #181818 -6.87%, #1F1E21 100%)
.video-pop-overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 2
    background: rgba(24, 24, 24, 0.9)
    .video-pop
        position: fixed
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        background: #fff
        max-width: 700px
        width: 700px
        @media (max-width: 450px)
            max-width: 90%
            width: 90%
        .video-pop-close
            position: absolute
            top: -25px
            right: 0
            font-size: 25px
            cursor: pointer
            @media (max-width: 450px)
                font-size: 15px
                top: -20px
                right: 0

.beginner-header
    padding: 80px 0 100px
.beginner-header__title
    font-size: 36px
    font-weight: 900
    color: #fff
    text-align: left
    margin-top: 80px

.beginner-content__title
    font-size: 14
    font-weight: 600
    padding: 8px 22px
    color: #fff
    display: inline-block
    background-color: #282729

.beginner-content
    display: grid
    width: 100%
    grid-template-columns: 35% 1fr
    column-gap: 200px
    padding-bottom: 200px
    @media (max-width: 960px)
        grid-template-columns: 100%
        row-gap: 100px
        padding-bottom: 50px

.beginner-content-helps-items
    margin-top: 120px
    @media (max-width: 960px)
        display: none

.beginner-content-helps-item
    padding: 20px 38px
    background: #282729
    transition: box-shadow .3s ease
    margin-bottom: 40px
    &__about
        color: #8F8E90
        font-size: 15px
        line-height: 150%
        font-weight: 500
        margin-top: 10px
    &__title
        font-weight: 600
        line-height: 140%
        text-transform: none
        font-size: 18px

.beginner-content-helps-item:last-child
    margin-bottom: 0

.beginner-content-steps-item-btns
    display: flex
    align-items: center
    justify-content: center
    margin-top: 20px
    &__btn-white, &__btn-black
        padding: 12px 0
        background: #EFEFEF
        border-radius: 20px
        display: flex
        align-items: center
        justify-content: center
        width: 144px
        cursor: pointer
    &__btn-black
        background: linear-gradient(95.45deg, #3C3E40 0%, #2F3133 104.2%)
        margin-left: 30px

.beginner-content-steps-item
    padding: 40px 70px
    background: #282729
    margin-top: 12px
    transition: box-shadow .3s ease
    &__about
        color: #8F8E90
        font-size: 15px
        line-height: 150%
        font-weight: 500
        margin-top: 10px
    &__title
        font-weight: 600
        line-height: 140%
        text-transform: none
        font-size: 18px

.beginner-content-steps-item:hover, .beginner-content-helps-item:hover, .beginner-video-lesson:hover
    box-shadow: 0px 35px 33px -13px rgba(0, 0, 0, 0.4)

.beginner-content__title.step-2
    margin-top: 120px
    @media (max-width: 960px)
        margin-top: 80px

.beginner-video-lesson
    background: #282729
    padding: 6px
    padding-left: 20px
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 8px
    transition: box-shadow .3s ease
    &__title
        font-size: 15px
        font-weight: 500
        line-height: 100%
    &-btn
        display: flex
        align-items: center
        justify-content: space-between
        padding: 12px
        width: 144px
        border: 1px solid #3E3D3E
        transition: all .1s ease
        border-radius: 18px
        cursor: pointer
    &-btn:hover
        border-color: #fff

.beginner-video-lesson:last-child
    margin-bottom: 0

.beginner-video-lessons
    margin-top: 46px

.beginner-content-steps-links
    margin-top: 120px

.beginner-content-steps-links-btn
    font-size: 16px
    font-weight: 800
    display: flex
    align-items: center
    justify-content: flex-end
    text-transform: uppercase
    margin-top: 10px
    cursor: pointer
    img
        margin-left: 15px

.steps-links__title
    background: linear-gradient(103.31deg, #B3854D 5.67%, #F3D7AF 28.06%, #C6A47C 85.27%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    font-weight: 700

.beginner-content-steps-links-item
    margin-bottom: 80px
</style>