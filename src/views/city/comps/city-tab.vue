<template>
    <div class="tab">
        <van-tabs v-model="active">
            <template v-for="(value,key,index) in cities">
           <van-tab :title="value?.title">内容 1</van-tab>
            </template>
        </van-tabs>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import {usecity} from '@/store/modules/city'
import { storeToRefs } from 'pinia';
const active = ref(0)
const cityStore=usecity()
cityStore.getcities()
const {cities}=storeToRefs(cityStore) 
</script>

<style lang="less" scoped>
.tab {
    --van-tabs-line-height: 35px;
}
</style>