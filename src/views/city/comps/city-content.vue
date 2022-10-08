<template>
    <div class="content">
        <template v-for="(template,key,index) in cities" :key="template">
            <van-index-bar v-show="clicktitle===key" :index-list="indexList" 
            >
                <van-index-anchor index="热门" />
                <div class="list">
                    <template v-for="item in currentGroup?.hotCities">
                        <div class="city" @click="getCurrentCity(item)">
                            {{item.cityName}}
                        </div>
                    </template>
                </div>
                <div class="group">
                    <template v-for="item in currentGroup?.cities">
                        <van-index-anchor :index="item.group"></van-index-anchor>
                        <template v-for="(group,index) in item.cities" :key="item">
                            <van-cell :title="group.cityName" @click="getCurrentCity(group)"/>
                        </template>
                    </template>
                </div>
            </van-index-bar>
        </template>
    </div>



</template>

<script lang="ts" setup>
import { toRaw } from 'vue';
import { usecity } from '@/store/modules/city'
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import {usemain} from '@/store/modules/main'
const mainstore=usemain()
const {currentCity}=storeToRefs(mainstore)
const router=useRouter()
const cityStore = usecity()
const { cities, clicktitle} = storeToRefs(cityStore)
const currentGroup = computed(() => cities.value[clicktitle.value])
const indexList=computed(()=>{
    const list=currentGroup.value.cities.map(item => item.group)
    list.unshift('#')
    return list
})
const getCurrentCity=(payload)=>{
    router.go(-1)
    currentCity.value=payload
    console.log(currentCity.value);
    
}


</script>

<style lang="less" scoped>
.content {
    height: calc(100vh - 98px) !important;
    overflow-y: auto;
}

.list {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    flex-direction: row !important;
    flex-wrap: wrap;
    padding: 5px;

    .city {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 70px;
        border-radius: 14px;
        background-color: #fff4ec;
        font-size: 12px;
        color: #000;
        margin: 3px;
    }

}
</style>