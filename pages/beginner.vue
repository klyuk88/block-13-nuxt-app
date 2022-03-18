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



<style lang="sass">
</style>