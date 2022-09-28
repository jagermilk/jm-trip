<template>
    <div class="city-search" >
        <van-search
        v-model="searchvalue"
        shape="round"
        show-action
        autofocus
        placeholder="请输入搜索关键词"
        @cancel="canceclick"/>
    </div>
</template>

<script lang="ts" setup>
   import router from '@/router';
import { ref } from 'vue';

   const searchvalue=ref('')
   const canceclick=()=>{
    router.back()
   }
</script>

<style lang="less" scoped>

</style>