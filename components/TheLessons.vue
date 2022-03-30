<template>
  <div>
    <!-- LESSONS -->
    <section class="lessons" id="lessons">
      <div class="container">
        <h2 class="lessons__title">КУРСЫ ПО КРИПТОВАЛЮТЕ</h2>
        <div class="lessons__wrapper">
          <div class="lessons__left">
            <div class="lessons__left-top">
              <!-- 1-е состояние плеера -->
              <client-only>
                <vue-plyr ref="plyr">
                  <video controls crossorigin playsinline>
                    <source size="" src="" type="video/mp4" />
                  </video>
                </vue-plyr>
              </client-only>

              <!-- 2-е состояние плеера при добавлении active -->
              <!-- <div class="lessons__overlay">
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
              </div> -->

              <!-- 3-e состояние плеера с кнопкой снизу, добавляем к плееру кнопку при active -->
              <div class="lessons__btn-bottom-right active">
                <a
                  href="#register"
                  class="lessons__btn btn"
                  @click="openRegister"
                  ><span>Смотреть курс</span></a
                >
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
            <!-- lessons__left-bottom -->
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
                    <span class="lessons__theme-progress">{{
                      percentProgress + "%"
                    }}</span>
                  </div>

                  <div class="lessons__theme-desc">
                    <div class="lessons__theme-title">{{ lesson.time }}</div>
                    <p class="lessons__theme-text">
                      {{ lesson.about }}
                    </p>
                    <div class="value">
                      <div
                        class="value-box"
                        :style="{ width: percentProgress + '%' }"
                      ></div>
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
  </div>

</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      idx: 0,
      firstLessonTitle: "",
      firstLessonAbout: "",
      lessons: [],
      lesson: {},
      percentProgress: null,
      player: "",
      link: '',
      video: null
    };
  },

  methods: {
    openRegister() {
      this.$store.commit("openRegister");
    },
    openDesc(index) {
      this.idx = index;
      this.lesson = this.lessons.find((item, indx) => indx === index);
      this.firstLessonTitle = this.lesson.name;
      this.firstLessonAbout = this.lesson.about;
      this.percentProgress = 0;
      this.player.source = {
        type: "video",
        title: "",
        sources: [
          {
            src: this.lesson.video,
            type: "video/mp4",
            size: 1080,
          },
        ],
      };
    },
  },
  computed: {},
  async mounted() {
    try {
      // const video = await this.$axios.$get("video/nVtvPQU8gviTrviqz8", {
      //   headers: {
      //     Authorization:
      //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MjM5ODJlMTZkZGRjZTVjNmExNDk2YTEiLCJleHAiOjE2NDgzOTU1MjcsImlhdCI6MTY0ODMwOTEyN30.4YXg_A6HhBOqWadi67fn5mz2OcR-HxWAo85zKJ53lrw",
      //     Range: "bytes=0-",
      //   },
      // });
      // let blob = new Blob([video], {type: 'video/mp4'});
      // this.link = URL.createObjectURL(blob)
      // this.video = this.$refs.videoTag;
      // this.video.src = this.link
      // this.video.src = 'http://localhost:3000/video.mp4'
      // this.video.play()
  

      // URL.revokeObjectURL( this.link );
      // this.video = this.$refs.video
      // console.log(this.video);
      // this.video.src = this.link
      // this.video.load()


    } catch (error) {
      console.log(error);
    }

    const res = await this.$axios.$get("http://localhost:3000/lessons.json");
    this.lessons = res;

    this.player = this.$refs.plyr.player;
    this.player.source = {
      type: "video",
      title: "",
      sources: [
        {
          src: this.lessons[0].video,
          type: "video/mp4",
          size: 1080,
        },
      ],
    };

    this.player.on("timeupdate", (event) => {
      this.percentProgress =
        parseInt(
          (this.player.currentTime / this.player.media.duration) * 100
        ) || 0;
    });
  },
};
</script>

<style scoped>
.lessons__btn-bottom-right {
  background: rgba(0, 0, 0, 0.6);
}
</style>