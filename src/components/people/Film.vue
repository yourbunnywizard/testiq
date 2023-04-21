<script setup>
import { PhFilmStrip } from "@phosphor-icons/vue";
</script>
<template>
  <div class="film">
    <PhFilmStrip :size="50"/>
    <ul>
      <li>Title: <span>{{data.title}}</span></li>
      <li>Episode number: <span>{{data.episode_id}}</span></li>
      <li>Director: <span>{{data.director}}</span></li>
      <li>Release date: <span>{{data.release_date}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Film",
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
.film {
  display: grid;
  grid-template-columns: 60px 1fr;
}
.film li > span {
  color: var(--color-success);
  font-weight: 700;
}
</style>