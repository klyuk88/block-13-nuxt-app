<template>
<div>

   <!-- INTRO -->
  <section class="intro" id="intro">
    <div class="container-lg">
      <div class="intro__baner bg-set"
      :style="{backgroundImage: `url(${introBannerBg})`}"
      >
        <div class="intro__shadow">
          <div class="intro__offer">
            <div class="intro__video-btn">
              <img src="~/assets/img/intro/video-btn.svg" alt="video-btn">
            </div>
            <h1 class="intro__title section-title">Исскуство видеть деньги</h1>
            <span class="intro__subtitle">Бесплатный курс с новым подходом к криптовалюте и блокчейн</span>
            <a href="#" class="intro__btn btn"><span>Подробнее</span></a>
          </div>
        </div>
      </div>
    </div>
  </section><!-- //INTRO -->

  <!-- ADVANTAGES -->
  <section class="advantages" id="advantages">
    <div class="container">
      <h2 class="advantages__title section-title">С НАМИ ОБРЕТАЮТ СИЛУ</h2>
      <ul class="advantages__icons">
        <li class="advantages__icon">
          <div class="advantages__icon-top">
            <div class="advantages__icon-rounded">
              <div class="advantages__icon-title">1M $</div>
            </div>
          </div>
          <div class="advantages__icon-bottom">
            <div class="advantages__icon-desc">
              В УПРАВЛЕНИИ
            </div>
          </div>
        </li>
        <li class="advantages__icon">
          <div class="advantages__icon-top">
            <div class="advantages__icon-rounded">
              <div class="advantages__icon-title"> >1000</div>
            </div>
          </div>
          <div class="advantages__icon-bottom">
            <div class="advantages__icon-desc">
              ПРИБЫЛЬНЫХ СДЕЛОК <br>
              с 2017
            </div>
          </div>
        </li>
        <li class="advantages__icon">
          <div class="advantages__icon-top">
            <div class="advantages__icon-rounded">
              <div class="advantages__icon-title">1.5%</div>
            </div>
          </div>
          <div class="advantages__icon-bottom">
            <div class="advantages__icon-desc">
              Средний риск <br>
              на сделку
            </div>
          </div>
        </li>
        <li class="advantages__icon">
          <div class="advantages__icon-top">
            <div class="advantages__icon-rounded">
              <div class="advantages__icon-title">5500%</div>
            </div>
          </div>
          <div class="advantages__icon-bottom">
            <div class="advantages__icon-desc">
              ДОХОДНОСТЬ с 2019 <br>
              С РИСКОМ ДО 20% <br>
              НА ДЕПОЗИТ
            </div>
          </div>
        </li>
      </ul><!-- //advantages__icons -->
      <div class="advantages__cards">

        <div class="advantages__card">
          <div class="advantages__card-inner">
            <h3 class="advantages__card-title">Название</h3>
            <p class="advantages__card-text">Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы торговали
              на рынке криптовалют, Forex, CME, NYSE и NASDAQ еще тогда, когда современные гуру-трейдеры в интернете
              только ходили в школу. </p>
          </div>
        </div>
        <div class="advantages__card">
          <div class="advantages__card-inner">
            <h3 class="advantages__card-title">Название</h3>
            <p class="advantages__card-text">Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы торговали
              на рынке криптовалют, Forex, CME, NYSE и NASDAQ еще тогда, когда современные гуру-трейдеры в интернете
              только ходили в школу. </p>
          </div>
        </div>
        <div class="advantages__card">
          <div class="advantages__card-inner">
            <h3 class="advantages__card-title">Название</h3>
            <p class="advantages__card-text">Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы торговали
              на рынке криптовалют, Forex, CME. </p>
          </div>
        </div>
        <div class="advantages__card">
          <div class="advantages__card-inner">
            <h3 class="advantages__card-title">Название</h3>
            <p class="advantages__card-text">Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы торговали
              на рынке криптовалют, Forex, CME, NYSE и NASDAQ еще тогда, когда современные гуру-трейдеры в интернете
              только ходили в школу. </p>
          </div>
        </div>
      </div><!-- //advantages__cards -->
    </div><!-- //container -->
    <div class="advantages__star">
      <img src="~/assets/img/advantages/advantages-img2.svg" alt="right-icon">
    </div>
    <div class="advantages__rhombus">
      <img src="~/assets/img/advantages/advantages-img1.svg" alt="left-icon">
    </div>
  </section><!-- //ADVANTAGES -->

  <!-- COURSES -->
  <section class="courses" id="courses">
    <div class="container-1680">
      <ul class="courses__list">
        <li class="courses__item">
          <a href="#" class="courses__item-link">
            <div class="courses__item-top bg-set"
              :style="{backgroundImage: `url('${itemOneBg}')`}">
              <div class="courses__video-btn">
                <img src="~/assets/img/intro/video-btn.svg" alt="video-btn">
              </div>
            </div>
          </a>
          <div class="courses__item-bottom">
            <div class="courses__text">
              <h2 class="courses__text-title section-title">LIVE TRADING</h2>
              <ul class="courses__text-list">
                <li class="courses__text-item">Публичная торговля на фьючерсом
                  спотовом рынке </li>
                <li class="courses__text-item">Торговая система</li>
                <li class="courses__text-item">Закрытый чат для участников </li>
              </ul>
              <nuxt-link to="/live-trading" class="courses__btn"><span>Подробнее</span></nuxt-link>
            </div>
          </div>
        </li><!-- //courses__item -->
        <li class="courses__item">
          <a href="#" class="courses__item-link">
            <div class="courses__item-top bg-set"
              :style="{backgroundImage: `url('${itemTwoBg}')`}">
              <div class="courses__video-btn">
                <img src="~/assets/img/intro/video-btn.svg" alt="video-btn">
              </div>
            </div>
          </a>
          <div class="courses__item-bottom">
            <div class="courses__text">
              <h2 class="courses__text-title section-title">ACADEMY</h2>
              <ul class="courses__text-list">
                <li class="courses__text-item">Обучение, построенное исключительно на механике рынка. Методология
                  хедж-фондов
                  и институциональных инвесторов</li>
                <li class="courses__text-item">Курс рассчитан на обучение новичка до уровня профессионального трейдера
                </li>
                <li class="courses__text-item">Торговая стратегия, риск-менеджмент</li>
              </ul>
              <nuxt-link to="/academy" class="courses__btn"><span>Подробнее</span></nuxt-link>
            </div>
          </div>
        </li><!-- //courses__item -->
        <li class="courses__item">
          <a href="#" class="courses__item-link">
            <div class="courses__item-top bg-set"
              :style="{backgroundImage: `url('${itemThreeBg}')`}">
              <div class="courses__video-btn">
                <img src="~/assets/img/intro/video-btn.svg" alt="video-btn">
              </div>
            </div>
          </a>
          <div class="courses__item-bottom">
            <div class="courses__text">
              <h2 class="courses__text-title section-title">PRIVATE CLUB</h2>
              <ul class="courses__text-list">
                <li class="courses__text-item">Курирование торговли</li>
                <li class="courses__text-item">Долгосрочные портфели</li>
                <li class="courses__text-item">Приватный чат инвесторов</li>
                <li class="courses__text-item">Перспективные проекты</li>
                <li class="courses__text-item">Доступ к ACADEMY и LIVE TRADING</li>
              </ul>
              <nuxt-link to="/private-club" class="courses__btn"><span>Подробнее</span></nuxt-link>
            </div>
          </div>
        </li><!-- //courses__item -->
      </ul>
    </div><!-- //container -->
  </section><!-- //COURSES -->

  <!-- INSTRUCTION -->
  <section class="instruction" id="instruction">
    <div class="container-1680">
      <div class="instruction__offer">
        <h2 class="instruction__title section-title">инструкция для новичка</h2>
        <p class="instruction__desc">Бесплатное подробное описание как начать свой путь трейдера с инструкцией и видео
          уроками</p>
        <nuxt-link to="/beginner" class="instruction__btn btn"><span>Начать путь</span></nuxt-link>
      </div>
      <div class="instruction__text-large">bloсk13</div>
    </div>
  </section><!-- //INSTRUCTION -->


</div>
</template>

<script>
import introBannerBg from '~/assets/img/intro/intro-baner.png'
import itemOneBg from '~/assets/img/courses/courses-img1.jpg'
import itemTwoBg from '~/assets/img/courses/courses-img2.jpg'
import itemThreeBg from '~/assets/img/courses/courses-img3.jpg'
export default {
  data() {
    return {
      introBannerBg,
      itemOneBg,
      itemTwoBg,
      itemThreeBg
    }
  },
}
</script>

<style lang="sass" scoped>
  .courses__btn
    text-transform: uppercase
    font-size: 20px
    font-weight: 700
    background: linear-gradient(103.31deg, #B3854D 5.67%, #F3D7AF 28.06%, #C6A47C 85.27%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
</style>
