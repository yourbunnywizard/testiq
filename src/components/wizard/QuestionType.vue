<script setup>
import Answers from "./Answers.vue";
</script>

<template>
  <div class="question-type">
    <p>{{question.text}}</p>
    <Answers
        :variants="variants"
        :variants-in-row="question.variantsInRow"
        @getAnswer="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: "QuestionType",
  props: ["question"],
  data () {
    const sortedVariants =
        !this.question.disableShuffle
            ? this.question.variants.sort((a, b) => 0.5 - Math.random())
            : this.question.variants;
    return {
      variants: sortedVariants
    }
  },
  methods: {
    handleChange(answer) {
      this.$emit('getAnswer', answer);
    }
  }
}
</script>

<style scoped>
.question-type {
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
}
.question-type>p {
  text-align: center;
}
</style>