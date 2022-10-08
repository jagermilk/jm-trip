<template>
    <div class="loading" @click="clickloading" v-if="loadingshow">
        <div class="bg">
            <img src="@/asset/img/home/full-screen-loading.gif" alt="" />
        </div>

    </div>
</template>

<script lang="ts" setup>
import {usemain} from '@/store/modules/main'
import { storeToRefs } from 'pinia';
const mainstore=usemain()
const {loadingshow}=storeToRefs(mainstore)
const clickloading=()=>{
    loadingshow.value=false
}
</script>

<style lang="less" scoped>
.loading {
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;

    .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 104px;
        height: 104px;
        background: url(@/asset/img/home/loading-bg.png)0 0 /100% 100%;

        img {
            width: 70px;
            height: 70px;
            margin-bottom: 10px;
        }
    }
}
</style>