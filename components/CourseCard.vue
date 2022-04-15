<template>
  <div class="profile_course_block">
    <h3 class="profile_course_block__title">Academy</h3>
    <div class="profile_course_block_count">
      <h4 class="profile_course_block_count__num">15</h4>
      <h5 class="profile_course_block_count__about">уроков</h5>
    </div>
    <div class="profile_course_block_about">
      <p class="profile_course_block_about__text">$ {{ price }} за весь курс</p>
      <p class="profile_course_block_about__price">
        15 уроков с абсолютно новым подходом
      </p>
    </div>

    <button class="btn profile_course_block__btn" @click="buyCourse" :disabled="courseBougth ? true : false">
      <span v-if="!courseBougth">Купить весь курс</span>
      <img
        v-else
        src="~/assets/img/ci_check.svg"
        alt=""
        class="btn_buy_check"
      />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    price: Number,
  },
  methods: {
    buyCourse() {
      this.$store.commit("popup/setBuyData", {
        title: "Купить весь курс",
        subtitle: "102 часа, 12 уроков",
        price: this.coursePrice,
        id: this.courseId,
        type: 1,
      });
      this.$store.commit("popup/openBuy");
    },
  },
  computed: {
    coursePrice() {
      return this.$store.getters["lessons/getCoursePrice"];
    },
    courseId() {
      return this.$store.getters["lessons/getCourseId"];
    },
    courseBougth() {
      return this.$store.getters["lessons/getCourseBought"];
    },
  },
  async mounted() {
    await this.$store.dispatch("lessons/getCourse");
  },
};
</script>