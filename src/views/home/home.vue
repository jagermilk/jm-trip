<template>
    <div class="home">
            <HomeNavBar></HomeNavBar>
            <HomeBanner></HomeBanner>
            <HomeLocation></HomeLocation>
            <HomeDate></HomeDate>
            <HomeKey></HomeKey>
            <HomeSuggests></HomeSuggests>
    </div>
</template>

<script lang="ts" setup>
import HomeNavBar from "./comps/home-nav-bar.vue";
import HomeBanner from "./comps/home-banner.vue";
import HomeLocation from "./comps/home-location.vue";
import HomeDate from "./comps/home-date.vue";
import HomeKey from "./comps/home-key.vue";
import HomeSuggests from "./comps/home-suggests.vue";

</script>

<style lang="less" scoped>
    .home{
       
    }
</style>