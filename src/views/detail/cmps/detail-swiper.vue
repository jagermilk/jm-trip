<template>
    <div class="swiper">
        <van-swipe class="my-swipe" height="260" :autoplay="3000" indicator-color="white">
            <template v-for="image in swiperlist ">
                <van-swipe-item>
                    <img :src="image.url" alt="">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-for="(item,key,index) in swiperGroup" :key="key">
                        <span class="item" :class="{active:swiperlist[active]?.enumPictureCategory==key}">{{getname(item[0].title)}}
                        <span class="count" v-if="swiperlist[active]?.enumPictureCategory==key">{{getcategoryindex(swiperlist[active])}}/{{item.length}}</span>
                        </span>
                        
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    swiperlist: {
        type: Array,
        default: []
    }
})
const swiperGroup = {}
for (const item of props.swiperlist) {
    let valuearry = swiperGroup[item.enumPictureCategory]
    if (!valuearry) {
        valuearry = []
        swiperGroup[item.enumPictureCategory] = valuearry
    }
    valuearry.push(item)
}
console.log(swiperGroup)
const getname=(name)=>{
    return name.replace("：","").replace("【","").replace("】","")
}
const getcategoryindex=(item)=>{
    const valuearry=swiperGroup[item.enumPictureCategory]
    return valuearry.findIndex(data=>data==item)+1
}
</script>

<style lang="less" scoped>
.swiper {
    img {
        width: 100%;
    }
    .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 10px;
    padding: 2px 5px;
    font-size: 12px;
    color: white;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    
    .item{
        margin-right: 5px;
        
        padding:2px;
        &.active{
        background-color: white;
        color: rgb(132, 132, 132);
        border-radius: 8px;
        
    }
    }
  
  }
}
</style>
