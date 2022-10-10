<script setup>
import { useRoute } from 'vue-router';
import Tabbar2 from './components/common/tabbar/tabbar2.vue';
import Loading from './components/content/loading/loading.vue';
import Tabbar3 from './components/common/tabbar/tabbar3.vue';
const route=useRoute()
</script>

<template>

  <router-view v-slot="props">
    <keep-alive include="home">
    <component :is="props.Component"> </component>
    </keep-alive>
  </router-view>
  <Tabbar3 v-show="!$route.meta.hideTabBar"></Tabbar3>
  <Loading></Loading>
</template>

<style scoped>




</style>
