<template>
    <div class="tab">
        <van-tabs v-model:active="active">
            <template v-for="(value,key,index) in cities" >
            <van-tab :title="value?.title" :name="key"></van-tab>
        </template>
        </van-tabs>
    </div>
</template>

<script lang="ts" setup>

import { handleError, ref ,watch} from 'vue';
import {usecity} from '@/store/modules/city'
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';
const cityStore=usecity()
cityStore.getcities()
const active = ref('')
let {cities}=storeToRefs(cityStore)
watch(active,(newName,oldName)=>{
    console.log(newName)
    cityStore.clicktitle=newName
})

</script>

<style lang="less" scoped>
.tab {
    --van-tabs-line-height: 35px;
}
</style>