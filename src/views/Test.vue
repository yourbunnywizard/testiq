<script setup>
import TestWizard from "../components/wizard/TestWizard.vue";
import Navigation from "../components/Navigation.vue";
</script>

<template>
  <div class="test-page">
    <Navigation heading="тест на определение IQ" />
    <main>
      <section class="test-container">
        <TestWizard :questionnaire-list="testsList" />
      </section>
    </main>
  </div>
</template>

<script>
import questionnaireList from '../components/wizard/testsData';
export default {
  name: "Test",
  data() {
    return {
      testsList: questionnaireList,
    }
  },
}
</script>

<style scoped>
.test-container {
  height: calc(100vh - var(--nav-heigth));
  background-image: url("src/assets/images/stars-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px 0 25px;
  display: flex;
}
</style>