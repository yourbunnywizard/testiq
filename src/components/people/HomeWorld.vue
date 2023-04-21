<template>
  <div class="homeworld">
    <div class="homeworld__preview">
      <ul>
        <li>Name: <span>{{data.name}}</span></li>
        <li>Population: <span>{{data.population}}</span></li>
        <li>Rotation period: <span>{{data.rotation_period}}</span></li>
        <li>Orbital period: <span>{{data.orbital_period}}</span></li>
        <li>Diametr: <span>{{data.diameter}}</span></li>
        <li>Gravity: <span>{{data.gravity}}</span></li>
        <li>Terrain: <span>{{data.terrain}}</span></li>
      </ul>
      <img :src="planetImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWorld",
  props: ['api'],
  data () {
    return {
      data: {},
      planetImg: "../src/assets/images/person/planet.webp",
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
.homeworld {}
.homeworld__preview {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: center;
}
.homeworld__preview img {
  width: 100%;
}
.homeworld li > span {
  color: var(--color-success);
  font-weight: 700;
}
</style>