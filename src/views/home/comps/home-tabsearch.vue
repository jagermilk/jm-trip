<template>
   <Searchbar>
    <template #left>
        <img src="@/asset/img/common/icon_nav_back.png" alt=""/>
    </template>
    <template #right>
        <img src="@/asset/img/home/icon-right-menu.png" alt=""/>
    </template>
   </Searchbar>

</template>

<script lang="ts" setup>

import Searchbar from '@/components/common/searchbar/searchbar.vue';




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