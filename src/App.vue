<template>
  <app-header></app-header>
  <side-bar></side-bar>
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    SideBar,
  },
};
</script>

<style>
</style>
