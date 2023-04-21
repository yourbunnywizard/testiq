<template>
  <ul class="color-answers">
    <label v-for="variant in variants">
      <li :class="`color-answers__item ${answer === variant.value && 'active'}`" :style="[{backgroundColor: variant.label}]">
        <input type="radio" :value="variant.value" v-model="answer" @change="handleChangeAnswer">
      </li>
    </label>
  </ul>
</template>

<script>
export default {
  name: "ColorAnswer",
  props: ['variants'],
  data() {
    return {
      answer: null,
    }
  },
  methods: {
    handleChangeAnswer (input) {
      this.$emit('getAnswer', input.target.value);
    }
  }
}
</script>

<style scoped>
  .color-answers {
    display: grid;
    grid-template-columns: repeat(3, 75px);
    gap: 15px;
    justify-content: center;
  }
  .color-answers__item {
    width: 75px;
    height: 75px;
    transition: 0.2s;
  }
  .color-answers__item.active {
    border: 4px solid var(--color-text-attention);
  }
  .color-answers__item input {
    display: none;
  }

</style>