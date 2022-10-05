<template>
    <div class="home">
            <HomeNavBar></HomeNavBar>
            <HomeBanner></HomeBanner>
            <HomeLocation></HomeLocation>
            <HomeDate></HomeDate>
            <HomeKey></HomeKey>
            <HomeSuggests></HomeSuggests>
            <HomeSearch></HomeSearch>
            <HomeCatagories :categories="categories"></HomeCatagories>
            <HomeList></HomeList>
    </div>
</template>

<script lang="ts" setup>
import HomeNavBar from "./comps/home-nav-bar.vue";
import HomeBanner from "./comps/home-banner.vue";
import HomeLocation from "./comps/home-location.vue";
import HomeDate from "./comps/home-date.vue";
import HomeKey from "./comps/home-key.vue";
import HomeSuggests from "./comps/home-suggests.vue";
import HomeSearch from "./comps/home-search.vue";
import HomeCatagories from "./comps/home-catagories.vue";

import {usehome} from '@/store/modules/home'
import { storeToRefs } from "pinia";
import HomeList from "./comps/home-list.vue";
const storehome=usehome()
storehome.getCategories()
const {categories}=storeToRefs(storehome)

</script>

<style lang="less" scoped>
    .home{
       
    }
</style>