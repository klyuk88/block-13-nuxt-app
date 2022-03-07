<template>
  <div class="lessons__theme"
  @click="openDesc"
  :class="{active: isActive && allActive}"
  >
  <div class="lessons__theme-header">
    {{id}}. {{name}}
    <span class="lessons__theme-arrow">
      <img src="~/assets/img/lessons/lesson-arrow.svg" alt="">
    </span>
    <span class="lessons__theme-progress">0%</span>
  </div>
   
    <div class="lessons__theme-desc">
      <div class="lessons__theme-title">{{time}}</div>
      <p class="lessons__theme-text">
        {{about}}
      </p>
      <div class="value">
        <div class="value-box" style="width: 0%"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
    name: String,
    about: String,
    time: String,
    allActive: Boolean
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openDesc() {
      this.isActive = !this.isActive
    }
  }
};
</script>
<style>
</style>