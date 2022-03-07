<template>
  <!-- LESSONS -->
  <section class="lessons" id="lessons">
    <div class="container">
      <h2 class="lessons__title">КУРСЫ ПО КРИПТОВАЛЮТЕ</h2>
      <div class="lessons__wrapper">
        <div class="lessons__left">
          <div class="lessons__left-top">
            <!-- 1-е состояние плеера -->
            <div class="video-player-box"
                :playsinline="playsinline"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)"
                v-video-player:myVideoPlayer="playerOptions"
              ></div>
            <!-- <div class="lessons__video-btn">
              <img src="~/assets/img/intro/video-btn.svg" alt="video-btn" />
            </div> -->

            <!-- 2-е состояние плеера при добавлении active -->
            <div class="lessons__overlay">
              <div class="lessons__overlay-title">
                Тизер —Что такое блокчейн?
              </div>
              <div class="lessons__overlay-offer">
                <div class="lessons__overlay-offer-title">
                  Подпишитесь на ACAdemy - Курсы,<br />
                  чтобы продолжить просмотр
                </div>
                <div class="lessons__overlay-offer-desc">
                  От 5400 ₽/мес (оплачивается ежегодно) за неограниченный
                  просмотр всех 12 занятий и сессий
                </div>
                <div class="lessons__overlay-offer-btns">
                  <a href="#" class="btn lessons__questions-btn"
                    >$ 34 ЗА ВЕСЬ КУРС</a
                  >
                  <a href="#" class="btn lessons__questions-btn"
                    >$13.99 ЗА УРОК</a
                  >
                </div>
              </div>
            </div>

            <!-- 3-e состояние плеера с кнопкой снизу, добавляем к плееру кнопку при active -->
            <div class="lessons__btn-bottom-right">
              <a href="#" class="lessons__btn btn">Смотреть курс</a>
            </div>
          </div>
          <div class="lessons__left-bottom">
            <div class="lessons__desc">
              <div class="lessons__desc-title">
                {{ firstLessonTitle }}
              </div>
              <p class="lessons__desc-text">
                {{ firstLessonAbout }}
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
        </div>
        <div class="lessons__right">
          <div class="lessons__right-top">
            <div class="lessons__tabs">
              <button class="lessons__tab active">Тизеры</button>
              <!-- <button class="lessons__tab">Курсы</button> -->
            </div>
            <div class="lessons__themes">
              <div
                class="lessons__theme"
                v-for="(lesson, index) in lessons"
                :key="index"
                @click="openDesc(index)"
                :class="{ active: index === idx ? true : false }"
              >
                <div class="lessons__theme-header">
                  {{ lesson.id }}. {{ lesson.name }}
                  <span class="lessons__theme-arrow">
                    <img src="~/assets/img/lessons/lesson-arrow.svg" alt="" />
                  </span>
                  <span class="lessons__theme-progress">0%</span>
                </div>

                <div class="lessons__theme-desc">
                  <div class="lessons__theme-title">{{ lesson.time }}</div>
                  <p class="lessons__theme-text">
                    {{ lesson.about }}
                  </p>
                  <div class="value">
                    <div class="value-box" style="width: 0%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="lessons__visible-btn">Посмотреть еще</button>
          <div class="lessons__right-bottom">
            <div class="lessons__questions">
              <div class="lessons__questions-title">
                Как получить доступ ко всем курсам?
              </div>
              <div class="lessons__questions-desc">
                при первой покупке скидка 20%
              </div>
              <div class="lessons__questions-btns">
                <a href="#" class="btn lessons__questions-btn"
                  >$ 34 ЗА ВЕСЬ КУРС</a
                >
                <a href="#" class="btn lessons__questions-btn"
                  >$13.99 ЗА УРОК</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- //LESSONS -->
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      idx: "",
      firstLessonTitle: "",
      firstLessonAbout: "",
      lessons: [],
      lesson: {},
      // component options
      playsinline: true,

      // videojs options
      playerOptions: {
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: "http://localhost:3000/video.mp4",
          },
        ],
        // poster: "/static/images/author.jpg",
      },
    };
  },
  async fetch() {
    this.lessons = await this.$axios.$get("http://localhost:3000/lessons.json");
    this.firstLessonTitle = this.lessons[0].name;
    this.firstLessonAbout = this.lessons[0].about;
    
  },
  fetchOnServer: false,
  fetchKey: "the-lessons",

  methods: {
    openDesc(index) {
      this.idx = index;
      this.lesson = this.lessons.find((item, indx) => indx === index);
      console.log(this.lesson);
      this.firstLessonTitle = this.lesson.name;
      this.firstLessonAbout = this.lesson.about;
      this.playerOptions.sources[0].src = this.lesson.video
    },
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example 01: the player is readied', player)
      }
  },
};
</script>

<style scoped>
.video-player-box {
  width: 100%;
  min-height: 520px;
}

 
</style>