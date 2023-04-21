<script setup>
import Navigation from "../components/Navigation.vue";
import { PhPhoneOutgoing } from "@phosphor-icons/vue";
</script>
<template>
  <div class="result-page">
    <Navigation heading="Готово!" />
    <main>
      <section class="result">
        <h1 class="result-page__heading">Ваш результат рассчитан:</h1>
        <p class="result-page__text"><span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на
          15 пунктов отличается от среднего в большую или меньшую сторону! </p>
        <h1 class="result-page__heading result-page__heading_green">Скорее получите свой результат!</h1>
        <div class="result__paper">
          В целях защиты персональныхданных результат теста, их подробная
          интерпретация и рекомендации доступны в виде голосового сообщения
          по звонку с вашего мобильного телефона
        </div>
        <div class="result__timer">Звоните скорее, запись доступна всего <span :class="`${timerExpired && 'expired'}`">{{ timeRemaining }}</span> МИНУТ</div>

        <button class="result__call-btn" :disabled="timerExpired" @click="handleCallButtonClick">
          <PhPhoneOutgoing :size="40" weight="bold" /> Позвонить и прослушать
          результат
        </button>
        <RouterLink to="/test" v-show="timerExpired" class="result__call-error">Время истекло. Пройдите тест снова для получения справки о результатах</RouterLink>
      </section>

      <footer>
        <p>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU</p>
        <p>DE DIVERTISMENT. PRIN FOLOSIREA LUI</p>
        <p>DECLARATI CA AVETI 18 ANI IMPLINITI</p>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: "Result",
  data () {
    this.startTimer();
    return {
      timeRemaining: '00:00',
      timerExpired: true
    }
  },
  methods: {
    startTimer() {
      const updateTimer = (endTime) => {
        const timeLeft = Math.round((endTime - Date.now()) / 1000);
        if (timeLeft < 0) {
          clearInterval(timerInterval);
          this.timeRemaining = '00:00';
          this.timerExpired = true;
        } else {
          const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
          const seconds = (timeLeft % 60).toString().padStart(2, '0');
          this.timeRemaining = `${minutes}:${seconds}`;
          this.timerExpired = false;
        }
      }

      if(!JSON.parse(localStorage.getItem('testIqTimer')) ) return;

      const endTimer = new Date( JSON.parse(localStorage.getItem('testIqTimer')) );

      const timerInterval = setInterval(() => updateTimer(endTimer), 1000);
    },

    async handleCallButtonClick  () {
      this.$router.push({ path: '/response/1'});
    }
  }
}
</script>

<style scoped>
.result-page {
  height: 100%;
  background-image: url("src/assets/images/stars-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--color-text-light);
}
main {
  display: grid;
  grid-template-rows: calc(100vh - var(--nav-heigth)) max-content;
  text-align: center;
}
.result {
  padding: 30px 24px;
}
.result > * {
  margin-bottom: 15px;
}
.result-page__heading {
  font-size: 1.7rem;
  line-height: 1;
}
.result-page__heading_green {
  color: var(--color-success);
}
.result-page__text span {
  text-decoration: underline;
}
.result__paper {
  width: 80%;
  margin: 0 auto 15px;
  background: #1C2741;
  border-radius: 6px;
  padding: 12px;
  font-size: 10px;
  text-transform: uppercase;
}
.result__timer {
  color: var(--color-success);
}
.result__timer span {
  font-size: 30px;
}
.result__timer span.expired {
  color: #EB1B00;
}
.result__call-btn {
  background: #EB1B00;
  border-radius: 5px;
  display: flex;
  gap: 25px;
  align-items: center;
  text-align: left;
  padding: 30px 15px;
  margin: 0 auto;
  font-weight: 600;
  border: none;
  outline: none;
  color: var(--color-text-light);
}
.result__call-btn:disabled {
  cursor: default;
  opacity: 30%;
}
.result__call-error {
  font-size:  0.6em;
  text-transform: none;
  text-decoration: underline;
}

footer {
  margin-top: -35px;
  font-size: small;
  opacity: 50%;
}
footer p {
  padding: 0;
  margin: 0;
  height: 15px;
  line-height: 15px;
  text-align: center;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
}

</style>