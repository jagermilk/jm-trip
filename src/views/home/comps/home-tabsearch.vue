<template>
   <Searchbar>
    <template #left>
        <img src="@/asset/img/common/icon_nav_back.png" alt="" @click="goback"/>
    </template>
    <template #right>
        <img src="@/asset/img/home/icon-right-menu.png" alt=""/>
    </template>
   </Searchbar>

</template>

<script lang="ts" setup>

import Searchbar from '@/components/common/searchbar/searchbar.vue';
const goback=()=>{
    window.scrollTo(0,0)
}



</script>

<style lang="less" scoped>
      .left {
        flex: 1;

        img {
            margin-left: 6px;
            width: 8px;
        }
    }
    .menu {
        flex: 1;

        img {
            padding-right: 5px;
            width: 17px;
        }

    }
</style>