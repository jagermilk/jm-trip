<template>
    <div class="tabbar2">
        <van-tabbar v-model="currentIndex" route>
            <van-tabbar-item v-for="(item,index) in tabbarData" :to="item.path">
                <span>{{item.text}}</span>
                <template #icon>
                    <img  :src="getAssetURl(item.image)" v-if="currentIndex!==index">
                    <img  :src="getAssetURl(item.imageActive)" v-else>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getAssetURl } from '@/uitils/get-asset-img'
const currentIndex = ref(0)
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
</script>

<style lang="less" scoped>
    .tabbar2{
        .van-tabbar-item{
            img{
                height: 28px;
            }
        }
    }
</style>