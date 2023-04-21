<script setup>
import ColorAnswers from "./ColorAnswer.vue";
</script>
<template>
  <div class="question-type">
    <p>{{question.text}}</p>
    <ColorAnswers
        :variants="variants"
        @getAnswer="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: "ColorType",
  props: ["question"],
  data () {
    return {
      variants: this.question.variants.sort((a, b) => 0.5 - Math.random())
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