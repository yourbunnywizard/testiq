<script setup>
import Navigation from "../components/Navigation.vue";
import Person from "../components/people/Person.vue";
</script>
<template>
  <div class="result-page">
    <Navigation heading="Person info" />
    <main>
      <section class="response">
        <Person :id="id" />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Response",
  props: ['id']
}
</script>

<style scoped>
.response {
  margin: 0 auto;
}
@media (min-width: 720px) {
  .response {
    width: 60%;
    max-width: 600px;
  }
}
</style>