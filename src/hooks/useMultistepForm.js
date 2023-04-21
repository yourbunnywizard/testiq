import {ref} from "vue";

export function useMultistepForm(questions) {
  const currentStepIndex = ref(0);
  const currentQuestion = ref(questions[0]);
  const isLastStep = ref(false);

  function nextStep () {
    if(isLastStep.value) return;

    currentStepIndex.value++;
    currentQuestion.value = questions[currentStepIndex.value];
    isLastStep.value = currentStepIndex.value === questions.length - 1;
  }

  return { currentStepIndex, currentQuestion, isLastStep, nextStep }
}