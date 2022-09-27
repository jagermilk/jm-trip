<template>
    <div class="tabbar">
        <div class="tabbaritem"
        v-for="(item,index) in tabbarData"
        :key="item.text"
        @click="itemclick(index,item.path)"
        :class="{active:currentIndex===index}"
        >
            <img :src="getAssetURl(item.image)" v-if="currentIndex!==index">
            <img :src="getAssetURl(item.imageActive)" v-else>
            <div >{{item.text}}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getAssetURl } from '@/uitils/get-asset-img'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()
let currentIndex=ref(0)
const tabbarData = [
    {
        text: "首页",
        image: "/tabbar/tab_home.png",
        imageActive: "/tabbar/tab_home_active.png",
        path: "/home"
    },
    {
        text: "收藏",
        image: "/tabbar/tab_favor.png",
        imageActive: "/tabbar/tab_favor_active.png",
        path: "/favor"
    },
    {
        text: "订单",
        image: "/tabbar/tab_order.png",
        imageActive: "/tabbar/tab_order_active.png",
        path: "/order"
    },
    {
        text: "个人中心",
        image: "/tabbar/tab_message.png",
        imageActive: "/tabbar/tab_message.png",
        path: "/profile"
    },
]
const itemclick=(index,item)=>{
    console.log(index);
    currentIndex.value=index
    router.push(item)
}
</script>

<style lang="less" scoped>
.tabbar {
    height: 50px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #f3f3f3;
    padding: 3px;

    .tabbaritem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 45px;
        }
    }
}
.active{
    color:#ff9854;
}
</style>