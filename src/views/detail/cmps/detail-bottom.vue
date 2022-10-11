<template>
    <div class="bottom">
        <van-action-bar>
            <van-action-bar-icon icon="more-o" text="客服" />
            <van-action-bar-icon icon="shopping-cart-o" text="购物车" />
            <van-action-bar-icon v-show="!isActive" icon="like-o"  text="收藏" color="#ff5000" @click="onClickIcon(myid)"/>
            <van-action-bar-icon v-show="isActive" icon="like"  text="收藏" color="#ff5000" @click="onClickIcon(myid)"/>
            <van-action-bar-button  disabled type="danger" color="rgb(251, 157, 56)" text="暂不能预定" />
        </van-action-bar>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {usehome} from '@/store/modules/home'
import { toNumber } from '@vue/shared';
import router from '@/router';
const homestore=usehome()
const isActive=ref(false)
defineProps({
    myid:{
        type:String
    }
})
const onClickIcon = (myid) => {
    isActive.value=!isActive.value
    if(isActive.value){
        const numid=toNumber(myid)
        homestore.addlike(numid)
    }
    if(!isActive.value){
        const numid=toNumber(myid)
        homestore.poplike(numid)
    }
}



</script>

<style lang="less" scoped>
.bottom{
    position: fixed;
    bottom: 0;
    &.active{
        background-color: orange;
    }
}
</style>