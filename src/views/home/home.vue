<template>
    <div class="home">
            <HomeNavBar></HomeNavBar>
            <HomeBanner></HomeBanner>
            <HomeLocation></HomeLocation>
    </div>
</template>

<script lang="ts" setup>
import HomeNavBar from "./comps/home-nav-bar.vue";
import HomeBanner from "./comps/home-banner.vue";
import HomeLocation from "./comps/home-location.vue";
   
</script>

<style lang="less" scoped>
    .home{
       
    }
</style>