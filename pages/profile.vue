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
            <div
              class="profile_tabs__tab"
              :class="{ active: index === currentIndex }"
              @click="changeTab(index)"
              v-for="(tab, index) in profileTabs"
              :key="index"
            >
              {{ tab }}
            </div>
          </div>
          <div class="profile_tabs_header__line">
            <div
            class="active_line"
            :class="lineActive"
            ></div>
          </div>
        </div>
        <component :is="currentTabContent"></component>
      </div>
      <!-- container -->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileTabs: ["Academy", "LIVE TRADING", "PRIVAT CLUB"],
      currentTabContent: 'the-academy',
      currentIndex: 0,
      lineActive: 'left'
    };
  },
  methods: {
    changeTab(index) {
    this.currentIndex = this.profileTabs.findIndex((item, idx) => index === idx)
    if(this.currentIndex === 0) {
      this.currentTabContent = 'the-academy'
      this.lineActive = 'left'
    } else if(this.currentIndex === 1) {
      this.currentTabContent = 'live-trading'
      this.lineActive = 'center'
    } else if(this.currentIndex === 2) {
      this.currentTabContent = 'private-club'
      this.lineActive = 'right'
    }

    },
  },
};
</script>

<style lang="sass">

</style>