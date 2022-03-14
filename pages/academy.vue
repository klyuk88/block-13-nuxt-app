<template>
  <div>
    <!-- INTRO -->
    <section class="intro" id="intro">
      <div class="container-lg">
        <div
          class="intro__baner bg-set"
          :style="{ backgroundImage: `url('${mainBannerBg}')` }"
        >
          <div class="intro__shadow">
            <div class="intro__offer">
              <div class="intro__video-btn course">
                <img src="~/assets/img/intro/video-btn.svg" alt="video-btn" />
              </div>
              <h1 class="intro__title section-title">Бесплатные видео уроки</h1>
              <span class="intro__subtitle"
                >Бесплатный курс с новым подходом к криптовалюте и
                блокчейн</span
              >
              <div class="intro__btns">
                <a href="#" class="intro__btn btn">Подробнее</a>
                <a href="#" class="intro__btn btn">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //INTRO -->

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
              <div class="advantages__icon-desc">В УПРАВЛЕНИИ</div>
            </div>
          </li>
          <li class="advantages__icon">
            <div class="advantages__icon-top">
              <div class="advantages__icon-rounded">
                <div class="advantages__icon-title">>1000</div>
              </div>
            </div>
            <div class="advantages__icon-bottom">
              <div class="advantages__icon-desc">
                ПРИБЫЛЬНЫХ СДЕЛОК <br />
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
                Средний риск <br />
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
                ДОХОДНОСТЬ с 2019 <br />
                С РИСКОМ ДО 20% <br />
                НА ДЕПОЗИТ
              </div>
            </div>
          </li>
        </ul>
        <!-- //advantages__icons -->
        <div class="advantages__cards">
          <div class="advantages__card">
            <div class="advantages__card-inner">
              <h3 class="advantages__card-title">Название</h3>
              <p class="advantages__card-text">
                Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы
                торговали на рынке криптовалют, Forex, CME, NYSE и NASDAQ еще
                тогда, когда современные гуру-трейдеры в интернете только ходили
                в школу.
              </p>
            </div>
          </div>
          <div class="advantages__card">
            <div class="advantages__card-inner">
              <h3 class="advantages__card-title">Название</h3>
              <p class="advantages__card-text">
                Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы
                торговали на рынке криптовалют, Forex, CME, NYSE и NASDAQ еще
                тогда, когда современные гуру-трейдеры в интернете только ходили
                в школу.
              </p>
            </div>
          </div>
          <div class="advantages__card">
            <div class="advantages__card-inner">
              <h3 class="advantages__card-title">Название</h3>
              <p class="advantages__card-text">
                Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы
                торговали на рынке криптовалют, Forex, CME.
              </p>
            </div>
          </div>
          <div class="advantages__card">
            <div class="advantages__card-inner">
              <h3 class="advantages__card-title">Название</h3>
              <p class="advantages__card-text">
                Block #13 - команда трейдеров с высшим уровнем экспертизы. Мы
                торговали на рынке криптовалют, Forex, CME, NYSE и NASDAQ еще
                тогда, когда современные гуру-трейдеры в интернете только ходили
                в школу.
              </p>
            </div>
          </div>
        </div>
        <!-- //advantages__cards -->
      </div>
      <!-- //container -->
      <div class="advantages__star">
        <img
          src="~/assets/img/advantages/advantages-img2.svg"
          alt="right-icon"
        />
      </div>
      <div class="advantages__rhombus">
        <img
          src="~/assets/img/advantages/advantages-img1.svg"
          alt="left-icon"
        />
      </div>
    </section>
    <!-- //ADVANTAGES -->

    <TheLessons />

    <!-- INSTRUCTION -->
    <section class="instruction" id="instruction">
      <div class="container-1680">
        <div class="instruction__offer">
          <h2 class="instruction__title section-title">
            инструкция для новичка
          </h2>
          <p class="instruction__desc">
            Бесплатное подробное описание как начать свой путь трейдера с
            инструкцией и видео уроками
          </p>
          <a href="#" class="instruction__btn btn">Начать путь</a>
        </div>
        <div class="instruction__text-large">bloсk13</div>
      </div>
    </section>
    <!-- //INSTRUCTION -->
  </div>
</template>

<script>
import mainBannerBg from "~/assets/img/intro/intro-baner1.png";
export default {
  data() {
    return {
      mainBannerBg,
    };
  },
};
</script>