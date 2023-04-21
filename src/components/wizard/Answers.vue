<template>
  <ul :class="`answers ${variantsInRow && 'inRow'}`">
    <label v-for="variant in variants">
      <li :class="`answers__item ${answer === variant.value && 'active'}`" >
        <input type="radio" :value="variant.value" v-model="answer" @change="handleChangeAnswer">
        <p class="answers__item-text">{{variant.label}}</p>
      </li>
    </label>
  </ul>
</template>

<script>
export default {
  name: "Answers",
  props: ['variants', 'variantsInRow'],
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
  .answers {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .answers__item {
    background-color: var(--color-answer);
    padding: 9px 30px;
    display: flex;
    gap: 30px;
    transition: 0.2s;
  }
    .answers__item.active {
      background-color: var(--color-text-attention);
    }
  .answers__item input {
    flex: 0;
  }
  .answers__item-text {
    flex: 1;
  }

  .answers.inRow {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 15px;
  }
  .inRow .answers__item {
    background-color: var(--color-text-light);
    color: var(--color-text-primary);
    padding: 0;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .inRow .answers__item.active {
      border: 4px solid var(--color-text-attention);
    }

  .inRow .answers__item input {
    flex: 0;
    display: none;
  }
  .inRow .answers__item-text {
    flex: 1;
  }
</style>