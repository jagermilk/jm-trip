<script setup>
import { useRoute } from 'vue-router';
import Tabbar2 from './components/common/tabbar/tabbar2.vue';
import Loading from './components/content/loading/loading.vue';
const route=useRoute()
</script>

<template>
  <router-view></router-view>
  <Tabbar2 v-if="!$route.meta.hideTabBar"></Tabbar2>
  <Loading></Loading>
</template>

<style scoped>




</style>
