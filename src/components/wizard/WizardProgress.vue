<template>
  <div class="wizard-progress-bar">
    <div :style="styles" class="wizard-progress-bar__success" />
  </div>
</template>

<script>
export default {
  name: "WizardProgress",
  props: {
    currentStep: {
      default: 2
    },
    amountSteps: {
      type: Number,
      default: 5
    }
  },
  computed: {
    styles() {
      return `width: ${100 * this.currentStep / this.amountSteps}%`;
    }
  }
}
</script>

<style scoped>
  .wizard-progress-bar {
    width: 100%;
    height: 11px;
    background-color: var(--color-paper);
    border-radius: 10px;
    overflow: hidden;
  }
  .wizard-progress-bar__success {
    width: 20%;
    height: 100%;
    border-radius: 10px;
    background-color: var(--color-success);
  }
</style>