<script setup>
import { PhArrowUp } from "@phosphor-icons/vue";
import Navigation from "../components/Navigation.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <div class="home-page">
    <Navigation/>
    <main>
      <section class="banner">
        <h1 class="banner__title">
          <span class="banner__subtitle">Пройдите точный и быстрый</span><br>
          тест на<br>определение<br>IQ
        </h1>

        <div class="banner__image-container">
          <img :src="imageBrain" alt="" class="banner__image">
        </div>

        <RouterLink to="/test" class="home-link" ><Button text="Пройти тест" text-uppercase/></RouterLink>

        <p class="banner__text">
          <span>И получите рекомендации по&nbsp;развитию своего&nbsp;интеллекта</span><br>
          и улучшению финансового благосостояния и&nbsp;личной&nbsp;жизни
        </p>

        <div class="banner__more-btn" @click="scrollToInfo">
          <span><PhArrowUp :size="12" weight="bold" /></span>
          Подробнее
        </div>
      </section>

      <section id="about-test" class="banner-quote">
        <p>Профессиональный IQ-тест позволяет не&nbsp;только определить коэффициент вашего интеллекта,
          но&nbsp;и&nbsp;выработать список рекомендаций для&nbsp;повышения этого показателя.</p>
      </section>

      <section class="about">
        <p class="about__text">Также по&nbsp;результатам теста
          <span>вы&nbsp;получите</span> подробные <span>советы</span> по&nbsp;определению наиболее перспективной
          <span>для вашей сферы деятельности</span>,
          которая принесет вам скорейший финансовый результат.
        </p>
        <img :src="imageColoredBrain" alt="" class="about__image">
        <RouterLink to="/test" class="home-link" ><Button text="Пройти тест" text-uppercase/></RouterLink>
      </section>

      <section class="bottom-banner">
        <p class="bottom-banner__text">Прохождение теста займет у&nbsp;вас не&nbsp;более <span>12&nbsp;минут</span>,
          а&nbsp;его результаты вы сможете <span>использовать всю жизнь.</span></p>

        <div class="bottom-banner__paper">
          <p>Профессиональная интерпретация и&nbsp;детально <span>проработанные рекомендации</span>
            позволят вам качественно <span>изменить все&nbsp;аспекты своей жизни</span>: от&nbsp;финансового
            до&nbsp;любовного.</p>
        </div>

        <RouterLink to="/test" class="home-link"><Button text="Пройти тест" text-uppercase /></RouterLink>

      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imageBrain: "src/assets/images/brain.png",
      imageColoredBrain: "src/assets/images/colored-brain.png",
    }
  },
  created() {
    const hash = window.location.hash;
    if(hash) {
      setTimeout(() => {
        this.scrollToInfo()
      }, 600);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  beforeRouteUpdate(to, from, next) {
    const hash = to.hash;
    if(hash) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    next();
  },
  methods: {
    scrollToInfo() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.home-link {
  display: block;
  width: max-content;
  margin: 0 auto;
}

/* section: banner */
.banner {
  height: calc(100vh - var(--nav-heigth));
  max-height: 800px;
  background-image: url("src/assets/images/stars-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 27px 24px 12px;

  color: var(--color-text-light);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-height: 550px) {
  .banner {
    height: max-content;
  }
}
.banner__title {
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-text-attention);
}
.banner__subtitle {
  font-size: 18px;
  color: var(--color-text-light);
  text-transform: none;
}
.banner__text {
  font-size: 15px;
  margin-top: 10px;
}
.banner__text span {
  color: var(--color-text-attention);
}
.banner__image-container {
  position: relative;
}
.banner__image {
  max-width: 150px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.banner__image-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 1px;
  height: 1px;
  z-index: 0;
  box-shadow: 0 0 120px 100px rgba(255, 255, 255, .2);
}

@media (min-width: 720px) and (min-height: 700px) {
  .banner__image {
    max-width: 250px;
  }
}

.banner__more-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto 0;
  gap: 5px;
  cursor: pointer;
  width: max-content;
}
.banner__more-btn:hover {
  text-decoration: underline;
}
.banner__more-btn span {
  display: grid;
  place-items: center;
  color: var(--color-text-primary);
  background-color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  animation: bubbling 2s infinite ease-in-out;
}

/* section: banner-quote */
.banner-quote {
  min-height: 300px;
  max-height: max-content;
  background-image: url("src/assets/images/quote-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--color-text-light);
  padding: 80px 36px 40px;
  display: grid;
  place-items: center;
}
.banner-quote:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 0;
  height: 0;
  z-index: 0;
  box-shadow: 0 0 120px 100px rgba(0, 0, 255, .6);
}
.banner-quote p {
  display: block;
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 18px;
}
.banner-quote p::before, .banner-quote p::after {
  position: absolute;
  font-size: 5rem;
  font-family: "Felix Titling",serif;
}
.banner-quote p::before {
  content: '“';
  top: -40px;
  left: -30px;
}
.banner-quote p::after {
  content: '„';
  bottom: -30px;
  right: -30px;
}

@media (min-width: 720px) {
  .banner-quote p {
    max-width: 60%;
  }
}


/* section: about */

.about {
  padding: 40px 12px;
}
.about__text {
  margin: 0 auto;
}
.about__text span {
  font-weight: 700;
  text-transform: uppercase;
}
.about__image {
  display: block;
  max-width: 300px;
  margin: 15px auto;
}
@media (min-width: 720px) {
  .about__text {
    max-width: 60%;
  }
  .about__image {
    max-width: 600px;
    width: 60%;
  }
}

/* section bottom-banner */
.bottom-banner {
  padding: 54px 12px 60px;
  height: max-content;
  background-image: url("src/assets/images/lightning_left.png"), url("src/assets/images/lightning_right.png"), url('src/assets/images/stars-back.png') ;
  background-repeat: no-repeat;
  background-position: left 70%, right 20%, center;
  background-size: auto 350px, auto 200px, cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom-banner__text {
  color: var(--color-text-light);
}
.bottom-banner__text span {
  color: var(--color-text-attention);
  font-weight: 700;
}
.bottom-banner__paper {
  background-color: var(--color-paper);
  padding: 30px 14px;
  border-radius: 20px;
  margin: 15px 0 30px;
}
.bottom-banner__paper span {
  font-weight: 700;
}
@media (min-width: 720px) {
  .bottom-banner__text, .bottom-banner__paper {
    max-width: 60%;
  }
}

/* animation */
@keyframes bubbling {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>