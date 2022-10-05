<script setup>
import { useRoute } from 'vue-router';
import Tabbar2 from './components/common/tabbar/tabbar2.vue';
const route=useRoute()
</script>

<template>
  <router-view></router-view>
  <Tabbar2 v-if="!$route.meta.hideTabBar"></Tabbar2>
</template>

<style scoped>




</style>
