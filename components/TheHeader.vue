<template>
  <div>
    <!-- HEADER -->
    <header class="header" id="header">
      <div class="container">
        <div class="header__inner">
          <a href="/" class="header__logo-link">
            <img src="~/assets/img/header/bloсk13.svg" alt="" />
          </a>

          <!-- Navigation -->
          <div class="header-nav" id="overlaymenu">
            <nav class="header__nav overlay-menu" id="header__nav">
              <ul class="header__nav-list">
                <li class="header__nav-item">
                  <nuxt-link to="/">Главная</nuxt-link>
                </li>
                <li class="header__nav-item">
                  <nuxt-link to="/beginner" class="header__nav-link"
                    >Инструкция новичка</nuxt-link
                  >
                </li>
                <li class="header__nav-item">
                  <span>Разделы</span>
                  <ul class="header__nav-change-list">
                    <li class="header__nav-change-item">
                      <nuxt-link to="/academy">Academy</nuxt-link>
                    </li>
                    <li class="header__nav-change-item">
                      <nuxt-link
                        to="/live-trading"
                        class="header__nav-change-link"
                        >Live Trading</nuxt-link
                      >
                    </li>
                    <li class="header__nav-change-item">
                      <nuxt-link
                        to="/private-club"
                        class="header__nav-change-link"
                        >Privat Club</nuxt-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <!-- //Navigation -->
          </div>

          <!-- Burger -->
          <button class="menu" id="toggle" @click="mobMenuShow">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </button>

          <!-- MOBILE-MENU -->
          <div class="menu-mobile" :class="{ active: mobMenu }">
            <div class="mobile_menu_header">
              <img
                src="~/assets/img/header/bloсk13.svg"
                alt="block13"
                class="mobile_menu_header__logo"
              />
              <img
                src="~/assets/img/modal/btn-close.svg"
                alt=""
                @click="closeMobMenu"
              />
            </div>
            <div class="menu-mobile__wrapper">
              <ul class="menu-mobile__list">
                <li
                  class="menu-mobile__item"
                  v-for="(item, index) in menu"
                  :key="index"
                >
                  <nuxt-link
                    :to="item.slug"
                    class="menu-mobile__link"
                    @click="openPage"
                    >{{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <div class="menu-mobile__registration" v-if="!login">
              <a href="#login" class="registration__link" @click="popLoginShow"
                >ВОЙТИ / РЕГИСТРАЦИЯ
              </a>
            </div>
            <div class="mob_account_wrap" v-if="login">
              <div class="mob_account_wrap_row">
                <span>$ {{balance}}</span>
                <span>/</span>
                <span><nuxt-link to="/profile">Личный кабинет</nuxt-link></span>
              </div>
              <div class="mob_account_wrap_row">
                <span><a href="#">Пополнить</a></span>
                <span>/</span>
                <span
                  ><nuxt-link to="/profile/settings">Настройки</nuxt-link></span
                >
              </div>
            </div>
            <div class="menu-mobile__overlay"></div>
          </div>
          <!-- mobile menu -->
          <div class="header_login_info" v-if="login">
            
            <li class="header_login_account">
              <span class="header_login_account__title"
                >МОЙ АККАУНТ
                <img
                  src="~/assets/img/header/arrow.svg"
                  alt=""
                  class="header_login_account__arrow"
                />
              </span>
              <ul class="header_login_account_menu">
                <li class="header_login_account_item">
                  <nuxt-link to="/profile">Личный кабинет</nuxt-link>
                </li>
                <li class="header_login_account_item">
                  <nuxt-link to="/profile/settings">Настройки</nuxt-link>
                </li>
                <li class="header_login_account_item header_logout_account">
                  <a href="!#" class="" @click.prevent="logout"
                    >Выйти из аккаунта</a
                  >
                </li>
              </ul>
            </li>
          </div>
          
          <div class="header__registration registration" v-else>
            <a href="#login" class="registration__link" @click="popLoginShow"
              >ВОЙТИ / РЕГИСТРАЦИЯ</a
            >
          </div>
        </div>
        <!-- //Header__inner -->
      </div>
      <!-- //Container -->
    </header>
    <!-- //HEADER -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobMenu: false,
      menu: [
        {
          title: "Главная",
          slug: "/",
        },
        {
          title: "Инструкция новичка",
          slug: "/beginner",
        },
        {
          title: "Privat Club",
          slug: "/private-club",
        },
        {
          title: "Academy",
          slug: "/academy",
        },
        {
          title: "Live Trading",
          slug: "/live-trading",
        },
      ],
    };
  },

  computed: {
    login() {
      return this.$store.state.login.token;
    },
    balance() {
      return this.$store.getters['login/getBalance']
    },
  },

  methods: {
    logout() {
      this.$store.commit("login/removeToken");
      this.$router.push("/");
    },
    openPage() {
      setTimeout(() => {
        this.mobMenu = false;
      }, 1000);
    },
    mobMenuShow() {
      this.mobMenu = true;
    },
    closeMobMenu() {
      this.mobMenu = false;
    },
    popLoginShow() {
      this.$store.commit("openLogin");
    },
  },
};
</script>

<style scoped>
</style>

