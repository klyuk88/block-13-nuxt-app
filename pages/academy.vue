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
              <h1 class="intro__title section-title academy-page">
                Будьте на стороне<br />
                крупного игрока
              </h1>
              <span class="intro__subtitle"
                >Бесплатный курс с новым подходом к криптовалюте и
                блокчейн</span
              >
              <div class="intro__btns">
                <a href="#" class="intro__btn btn"><span>Начать путь</span></a>
                <!-- <a href="#" class="intro__btn btn"><span>Подробнее</span></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //INTRO -->

    <!-- ADVANTAGES -->
    <section class="advantages academy-page" id="advantages">
      <div class="container">
        <h2 class="advantages__title section-title">ACADEMY</h2>
        <TheCards :triggers="triggers" />
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
      <div class="academy-line"></div>
    </section>

 
    <!-- //ADVANTAGES -->
    <TheLessons />
    <TheInstruction />
  </div>
</template>

<script>
import mainBannerBg from "~/assets/img/intro/intro-baner1.png";
export default {
  data() {
    return {
      mainBannerBg,
      triggers: [
        {
          title: "SMART-MONEY",
          about:
            "Концепция «Умных денег» Вы перестанете торговать так, как это делает большинство, научитесь идентифицировать действия и манипуляции крупных инвесторов, что даст вам конкурентное преимущество и позволит стабильно извлекать из этого прибыль.",
        },
        {
          title: "PRICE ACTION",
          about:
            "Фундамент нашего обучения базируется на анализе взаимодействия спроса и предложения с помощью японских свечей и динамики изменения цен на основе механики рынка.",
        },
        {
          title: "Объемный анализ",
          about:
            "Вы будете изучать не индикаторы, а профессиональные инструменты, отображающие первопричину движения котировок, и научитесь опережать движение графика на несколько шагов вперед.",
        },
        {
          title: "С нуля до профессионала",
          about:
            "Самые сложные инструменты и методы аналитики будут разбираться с самых основ. Вы пройдете путь от новичка, изучающего простейшие инструменты, до гуру, анализирующего кластерный график и биржевой стакан.",
        },
      ],
    };
  },

};
</script>