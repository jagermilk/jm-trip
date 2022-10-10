<template>
    <div class="home" ref="homeRef">
            <HomeNavBar></HomeNavBar>
            <HomeBanner></HomeBanner>
            <HomeLocation></HomeLocation>
            <HomeDate></HomeDate>
            <HomeKey></HomeKey>
            <HomeSuggests></HomeSuggests>
            <HomeSearch></HomeSearch>
            <HomeCatagories :categories="categories"></HomeCatagories>
            <HomeTabsearch v-if="scroll100"></HomeTabsearch>
            <HomeList ref="childlist"></HomeList>
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
import HomeList from "./comps/home-list.vue";

import {usehome} from '@/store/modules/home'
import { storeToRefs } from "pinia";
import { onActivated, onMounted, onUnmounted, ref, watch } from "vue";
import useScroll from '@/hooks/useScroll'
import HomeTabsearch from './comps/home-tabsearch.vue'
import { computed } from "@vue/reactivity";
const storehome=usehome()
storehome.getCategories()
const {categories}=storeToRefs(storehome)

const childlist=ref(null);
const {isReachedBottom,scrollTop}=useScroll()
watch(isReachedBottom,((newvalue)=>{
    if(newvalue){
        childlist.value.more()
        isReachedBottom.value=false
    }
}))

const scroll100=computed(()=>{
    if(scrollTop.value>=100){
        return true
    }
    else{
        return false
    }

})
const homeRef=ref()
onActivated(()=>{
    homeRef.value?.scrollTo(0,scrollTop.value)
})
</script>

<style lang="less" scoped>
    .home{
    margin-bottom: 49px;
    overflow: auto;
    }
</style>