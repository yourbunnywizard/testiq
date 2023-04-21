<script setup>
import { PhRocket } from "@phosphor-icons/vue";
</script>
<template>
  <div class="starship">
    <PhRocket :size="50"/>
    <ul>
      <li>Name: <span>{{data.name}}</span></li>
      <li>Class: <span>{{data.starship_class}}</span></li>
      <li>Model: <span>{{data.model}}</span></li>
      <li>Manufacturer: <span>{{data.manufacturer}}</span></li>
      <li>Max speed: <span>{{data.max_atmosphering_speed}} atm</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Starship",
  props: ['api'],
  data () {
    return {
      data: {}
    }
  },
  mounted() {
    fetch(this.api)
        .then(response => response.json())
        .then(data => {
          this.data = data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },
}
</script>

<style scoped>
.starship {
  display: grid;
  grid-template-columns: 60px 1fr;
}
.starship li > span {
  color: var(--color-success);
  font-weight: 700;
}
</style>