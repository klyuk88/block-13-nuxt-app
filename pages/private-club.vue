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
              <h1 class="intro__title section-title">PRIVAT CLUB</h1>
              <span class="intro__subtitle"
                >Уникальный клуб для людей готовых много тратить и еще больше
                заработать. Личными инсайдами, сигналами, советами.
              </span>
              <div class="intro__btns">
                <a href="#register" class="intro__btn btn"
                  ><span>Вступить</span></a
                >
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
        <h2 class="advantages__title section-title">PRIVAT CLUB</h2>
        <TheCards :triggers="triggers"/>
        <div class="private-lines">
          <button class="connect-btn">
            <a href="http://"><span>ПРИСОЕДИНИТСЯ</span> </a>
          </button>
        </div>
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

    <TheInstruction/>


  </div>
</template>

<script>
import mainBannerBg from "~/assets/img/private-club-img.jpg";
export default {
  data() {
    return {
      mainBannerBg,
      triggers: [
        {
          title: "Live Trading",
          about:
            "Приватный канал с реал-тайм трейдингом, торговой системой и чатом практиков. Это экосистема активного извлечения прибыли из рыночных неэффективностей.",
        },
        {
          title: "Academy",
          about:
            "Курс обучения прогрессивному трейдинга с дополнительными привелегиями - своевременной обратной связью от наставника и поддержкой в выполнении домашних заданий.",
        },
        {
          title: "Аналитика",
          about:
            "Долгосрочные инвестидеи, сбор портфелей, pre-sale проекты, diamond монеты на ранних стадиях. Общение и обмен опытом с трейдерами и крупными инвесторами.",
        },
        {
          title: "Эксклюзив",
          about:
            "Возможность тестирования наших передовых разработок в области алгоритмических торговых систем, ботов и копитрейдинга, а также участие в оффлайн мероприятиях.",
        },
      ],
    };
  },
};
</script>