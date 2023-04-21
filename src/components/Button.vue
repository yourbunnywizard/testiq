<template>
  <button :style="[{...styles}]" class="button">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    styles: Object
  }
}
</script>

<style scoped>
  .button, .button:hover, .button:focus, .button:active {
    border: none;
    outline: none;
  }

  .button {
    display: block;
    height: 40px;
    min-width: 190px;
    max-width: max-content;
    color: var(--color-text-primary);
    font-size: 14px;
    background-color: var(--color-text-attention);
    border-radius: 20px;
    font-weight: 600;
    box-shadow: none;
    transition: 0.2s;
    cursor: pointer;
    text-transform: uppercase;
  }

  .button:active {
    background-color: #DADADA;
    box-shadow: inset 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  }

  .button:disabled {
    background-color: #DADADA;
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.25);
  }

  @media (hover: hover) {
    .button:hover {
      box-shadow: inset 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    }
  }
</style>