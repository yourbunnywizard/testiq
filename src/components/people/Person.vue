<script setup>
import HomeWorld from "./HomeWorld.vue";
import Film from "./Film.vue";
import Vehicle from "./Vehicle.vue";
import Starship from "./Starship.vue";
</script>
<template>
  <div class="person">
    <div v-show="!!personData">
      <h1>{{personData.name}}</h1>
      <div class="person__profile">
        <img :src="personImg" alt="">
        <ul>
          <li>Gender: <span>{{personData.gender}}</span></li>
          <li>Birth year: <span>{{personData.birth_year}}</span></li>
          <li>Height: <span>{{personData.height}}</span></li>
          <li>Mass: <span>{{personData.mass}}</span></li>
          <li>Hair color: <span>{{personData.hair_color}}</span></li>
          <li>Eye color: <span>{{personData.eye_color}}</span></li>
          <li>Skin color: <span>{{personData.skin_color}}</span></li>
        </ul>
      </div>

      <h1>Home world</h1>
      <HomeWorld v-if="!!personData.homeworld" :api="personData.homeworld" :key="(new Date()).toString"/>

      <h1>Films</h1>
      <div class="person__films">
        <Film v-for="(film, index) in personData.films" :api="film" :key="index"/>
      </div>

      <h1>Vehicles</h1>
      <div class="person__vehicle">
        <Vehicle v-for="(vehicle, index) in personData.vehicles" :api="vehicle" :key="index" />
      </div>

      <h1>Starships</h1>
      <div class="person__starship">
        <Starship v-for="(starship, index) in personData.starships" :api="starship" :key="index" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: ['id'],
  data () {
    return {
      personImg: "../src/assets/images/person/person.jpg",
      personData: {}
    }
  },
  mounted() {
    fetch(`https://swapi.dev/api/people/${this.id}`)
        .then(response => response.json())
        .then(data => {
          this.personData = data
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },
}
</script>

<style scoped>
.person {
  padding: 20px;
}
.person h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5em 0;
}
.person li > span {
  color: var(--color-success);
  font-weight: 700;
}

.person__profile {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 30px;
}
.person__profile img {
  width: 100%;
}
.person__films, .person__vehicle, .person__starship {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

</style>