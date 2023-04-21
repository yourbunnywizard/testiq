<script setup>
import { PhList, PhX } from "@phosphor-icons/vue";
</script>

<template>
  <header>
    <nav>
      <ul v-show="!isMobile" class="navigation">
        <li><RouterLink to="/">Главная</RouterLink></li>
        <li><RouterLink to="/#test-info">Информация о тесте</RouterLink></li>
        <li><RouterLink to="/test" >Пройти тест</RouterLink></li>
      </ul>

      <div class="menu-mobile">
        <div v-show="isMobile" class="menu-open-btn" @click="expandMenu">
          <PhList :size="24" weight="bold" />
        </div>
        <p v-show="isMobile && !!heading" class="menu-heading" @click="expandMenu">
          <img :src="img" alt="">{{heading}}
        </p>
      </div>
    </nav>
  </header>
  <Transition>
    <nav v-show="isMobileMenuExpanded" class="nav_mobile">
      <ul class="navigation">
        <li><RouterLink to="/" @click="collapseMenu">Главная</RouterLink></li>
        <li><RouterLink to="/#about-test" @click="collapseMenu">Информация о тесте</RouterLink></li>
        <li><RouterLink to="/test" @click="collapseMenu">Пройти тест</RouterLink></li>
      </ul>
      <div class="menu-close-btn" @click="collapseMenu">
        <PhX :size="28" weight="bold" />
      </div>
    </nav>
  </Transition>
</template>

<script>
export default {
  name: "Navigation",
  props: ['heading'],
  data() {
    return {
      isMobile: true,
      isMobileMenuExpanded: false,
      img: "../src/assets/images/brain.png"
    }
  },
  created() {
    window.addEventListener('resize', this.checkResolution);
    this.checkResolution();
  },
  methods: {
    expandMenu() {
       this.isMobileMenuExpanded = true;
    },
    collapseMenu() {
      this.isMobileMenuExpanded = false;
    },
    checkResolution() {
      if(window.innerWidth < 720) {
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
      this.isMobileMenuExpanded = false;
    }
  }
}
</script>

<style scoped>
 header {
   position: sticky;
   top: 0;
   z-index: 5;
   background-color: var(--color-dark);
   color: var(--color-text-light);
   padding: 12px;
   height: var(--nav-heigth);
 }

 .navigation {
   display: flex;
   gap: 30px;
   justify-content: space-evenly;
 }

 .menu-mobile {
   display: flex;
   gap: 10px;
 }
 .menu-heading {
   color: var(--color-text-attention);
   display: flex;
   align-items: center;
   gap: 15px;
   font-size: 1.2rem;
   text-transform: uppercase;
   font-weight: 600;
 }
 .menu-heading img {
   height: calc(var(--nav-heigth) - 24px);
 }

 .nav_mobile {
   position: fixed;
   z-index: 10;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   background-color: var(--color-dark);
   padding: 110px 24px;
 }
 .nav_mobile .navigation {
   flex-direction: column;
 }
 .menu-close-btn {
   color: var(--color-text-attention);
   position: absolute;
   right: 24px;
   top: 24px;
 }


 .v-enter-active,
 .v-leave-active {
   transition: opacity 0.5s ease;
 }

 .v-enter-from,
 .v-leave-to {
   opacity: 0;
 }
</style>