<template>
    <div class="location"> 
        <div class="city" @click="router.push('/city')">{{currentCity.cityName}}</div>
        <div class="location" @click="positionClick">
            <span class="text">我的位置</span>
            <img src="@/asset/img/home/icon_location.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

import {usecity} from '@/store/modules/city'
import { storeToRefs } from "pinia";
const cityStore=usecity()
const {currentCity}=storeToRefs(cityStore)


const router=useRouter()
const positionClick=()=>{    
    navigator.geolocation.getCurrentPosition(res=>{
        console.log('获取成功'+res)
    },err=>{
        console.log(err)})
        
    }

</script>

<style lang="less" scoped>
.location {
    padding: 0px 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 44px;
    .city {
        margin-left: 10px;
        flex: 1;
        font-size: 18px;
    }
    .location{
        
        width: 74px;
        .text{
            font-size: 14px;
        }
        img{
            width: 18px;
            height: 18px;
        }
    }
}
</style>