<script setup>
import WizardProgress from "./WizardProgress.vue";
import {TEST_TYPES} from "./testsData";
import ImageType from "./ImageType.vue";
import QuestionType from "./QuestionType.vue";
import ColorType from "./ColorType.vue";
import Button from "../Button.vue";
import Spinner from '../Spinner.vue';
</script>

<template>
  <section class="test-wizard-container">
    <template v-if="!isLoading">

      <div class="test-wizard-container__progress">
        <WizardProgress :current-step="currentStepIndex" :amount-steps="questionnaireList.length"/>
      </div>

      <ImageType
          v-if="currentQuestion.type === TEST_TYPES.image"
          :question="currentQuestion.question"
          @getAnswer="handleChangeAnswer"
          :key="currentQuestion.id"
      />
      <ColorType
          v-else-if="currentQuestion.type === TEST_TYPES.colors"
          :question="currentQuestion.question"
          @getAnswer="handleChangeAnswer"
          :key="currentQuestion.id"
      />
      <QuestionType
          v-else
          :question="currentQuestion.question"
          @getAnswer="handleChangeAnswer"
          :key="currentQuestion.id"
      />

      <Button
          text="Далее"
          @click="handleSubmitForm"
          :disabled="!userAnswers[currentQuestion.id]"
          style="margin: 0 auto"
      />
    </template>

    <template v-else class="test-loader">
      <div class="test-wizard-container__progress">
        <WizardProgress :current-step="1" :amount-steps="1"/>
      </div>
      <div class="test-loader">
        <p class="test-loader__title">Обработка результатов</p>
        <Spinner/>
        <p class="test-loader__text">Определение стиля мышления...</p>
      </div>
    </template>
  </section>
</template>

<script>
import {useMultistepForm} from "../../hooks/useMultistepForm";
import {ref} from "vue";
export default {
  name: "TestWizard",
  props: ['questionnaireList'],
  data() {
    const {currentStepIndex, currentQuestion, isLastStep, nextStep} = useMultistepForm(this.questionnaireList);
    const userAnswers = ref({});
    const isLoading = false;
    return {
      currentStepIndex,
      currentQuestion,
      isLastStep,
      userAnswers,
      isLoading,
      nextStep
    }
  },
  methods: {
    handleChangeAnswer (answer) {
      this.userAnswers[this.currentQuestion.id] = answer;
    },
    handleSubmitForm () {
      if(!this.isLastStep) {
        this.nextStep();
        return;
      }
      console.log("userAnswers", this.userAnswers);
      this.isLoading = true;

      let stopTimer = new Date();
      stopTimer.setMinutes(stopTimer.getMinutes() + 10);
      localStorage.setItem('testIqTimer', JSON.stringify(stopTimer));

      setTimeout(() => {
        this.$router.push({ path: '/test-result'});
      }, 3000);
    },
  }
}
</script>

<style scoped>
.test-wizard-container {
  flex: 1;
  background-image: url("src/assets/images/stars-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px 0 25px;
  display: flex;
  flex-direction: column;
}
.test-wizard-container__progress {
  padding: 0 30px;
}
@media (min-width: 720px) {
  .test-wizard-container {
    max-width: 60%;
    margin: 0 auto;
  }
}

.test-loader {
  padding: 40px 24px;
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 50px;
  flex: 1;
}
.test-loader__title {
  font-size: 2rem;
}

</style>