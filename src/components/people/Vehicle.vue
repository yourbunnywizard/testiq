<script setup>
import { PhCar } from "@phosphor-icons/vue";
</script>
<template>
  <div class="vehicle">
    <ul>
      <li>Name: <span>{{data.name}}</span></li>
      <li>Model: <span>{{data.model}}</span></li>
      <li>Manufacturer: <span>{{data.manufacturer}}</span></li>
      <li>Max speed: <span>{{data.max_atmosphering_speed}} atm</span></li>
    </ul>
    <PhCar :size="50"/>
  </div>
</template>

<script>
export default {
  name: "Vehicle",
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
.vehicle {
  display: grid;
  grid-template-columns: 1fr 60px;
}
.vehicle li > span {
  color: var(--color-success);
  font-weight: 700;
}
</style>