<template>
    <div class="search">
            <button @click="searchBtnClick">开始搜索</button>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import {usemain} from '@/store/modules/main'
import { storeToRefs } from 'pinia';
const storemain=usemain()
const {starttime,endtime,currentCity}=storeToRefs(storemain)

const searchBtnClick=()=>{

    router.push({
        path:"/search",
        query:{
            starttime:starttime.value,
            endtime:endtime.value,
            currentCity:currentCity.value.cityName
            
        }
    })
}
</script>

<style lang="less" scoped>
    .search{
        width: 90%;
        margin:0px auto;
        button{
            width: 342px;
            height: 38px;
            max-height: 50px;
            font-weight: 500;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            border-radius: 20px;
            color: #fff;
            background-image: var(--theme-linear-gradient);
            border:0px;
        }
    }
</style>