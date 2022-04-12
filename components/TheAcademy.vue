<template>
  <div>
    <div class="profile_course_block single">
      <h3 class="profile_course_block__title">Academy</h3>
      <div class="profile_course_block_count">
        <h4 class="profile_course_block_count__num">15</h4>
        <h5 class="profile_course_block_count__about">уроков</h5>
      </div>
      <div class="profile_course_block_about">
        <p class="profile_course_block_about__text">$ {{coursePrice}} за весь курс</p>
        <p class="profile_course_block_about__price">
          15 уроков с абсолютно новым подходом
        </p>
      </div>
      <button class="btn profile_course_block__btn">
        <span>Купить весь курс</span>
      </button>
    </div>
    <img
      src="~/assets/img/profile/arrow.svg"
      alt=""
      class="profile_course_block_arrow"
    />
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
      <div class="lessons__desc profile">
        <div class="lessons__desc-title">{{ lessonTitle }}</div>
        <p class="lessons__desc-text">
          {{ lessonAbout }}
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
      <div class="lesson_btn" @click="openBuy">
        <span>КУПИТЬ ВЕСЬ КУРС ЗА $ {{ coursePrice }}</span>
      </div>
    </div>
    <!-- lessons__left-bottom -->
    <div class="profile_video_lessons">
      <h3 class="profile_video_lessons__title">Криптокурс, 1-12 частей</h3>
      <div class="profile_video_lessons_grid">
        <!-- урок  -->
        <div
          class="profile_video_lessons_grid_item"
          v-for="(item, index) in lessons"
          :key="index"
          :class="{
            blocked: item.bought === false && item.price > 0 ? true : false,
          }"
        >
          <img
            :src="`${$config.API_URL}/img/${item.logo}`"
            alt=""
            class="profile_video_lessons_grid_item__image"
            @click="playLesson(item)"
          />
          <p class="profile_video_lessons_grid_item__title">
            {{ index + 1 }}. {{ item.name }}
          </p>
          <div class="blocked_overlay">
            <div class="blocked_overlay_content">
              <img
                :src="`${$config.API_URL}/img/${item.logo}`"
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
        <!-- урок  -->
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
      lessonTitle: "",
      lessonAbout: "",
      isActive: false,
    };
  },
  computed: {
    lessons() {
      return this.$store.getters["lessons/getLessons"];
    },
    videoKey() {
      return this.$store.getters["lessons/getVideoKey"];
    },
    coursePrice() {
      return this.$store.getters["lessons/getCoursePrice"];
    },
    courseId() {
      return this.$store.getters['lessons/getCourseId']
    }
  },
  methods: {
    openBuy() {
      this.$store.commit('popup/setBuyData', {
        title: 'Купить весь курс',
        subtitle: '102 часа, 12 уроков',
        price: this.coursePrice,
        id: this.courseId,
        type: 1
      })
     this.$store.commit('popup/openBuy')
    },
    async playLesson(item) {
      await this.$store.dispatch("lessons/getVideoKey", {
        typeVideo: 2,
        elementId: item.id,
        token: this.$cookies.get("token"),
      });
      this.lessonTitle = item.name;
      this.lessonAbout = item.fullDescription;
      this.player.sourse = {
        type: "video",
        title: "",
        sources: [
          {
            src: `${this.$config.API_URL}/video/${this.videoKey}`,
            type: "video/mp4",
            size: 1080,
          },
        ],
      };
    },
  },
  async mounted() {
    await this.$store.dispatch("lessons/getCourse");
    //получаем уроки c авторизацией
    await this.$store.dispatch("lessons/getLessons", {
      token: this.$cookies.get("token"),
    });

    //получаем видео первого урока
    await this.$store.dispatch("lessons/getVideoKey", {
      typeVideo: 2,
      elementId: this.lessons[0].id,
      token: this.$cookies.get("token"),
    });

    this.lessonTitle = this.lessons[0].name;
    this.lessonAbout = this.lessons[0].fullDescription;

    this.player = this.$refs.plyr.player;
    this.player.source = {
      type: "video",
      title: "",
      sources: [
        {
          src: `${this.$config.API_URL}/video/${this.videoKey}`,
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
