<template>
  <div class="image-type">
    <p>{{question.text}}</p>
    <img :src="question.source" alt="" class="image-type__image">
    <Answers
        :variants="variants"
        :variants-in-row="question.variantsInRow"
        @getAnswer="handleChange"
    />
  </div>
</template>

<script>
import Answers from "./Answers.vue";
export default {
  name: "ImageType",
  components: {
    Answers,
  },
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
.image-type {
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
}
.image-type>p {
  text-align: center;
}
.image-type__image {
  max-width: 90%;
  display: block;
  margin: 0 auto;
}
</style>