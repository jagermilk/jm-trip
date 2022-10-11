<template>
    <div class="detailmodule" ref="detailRef" v-if="detailInfos">
        <Detail00Tabbar v-if="scroll100" ref="tabbarshow" @showcurrentindex="showcurrentindex"></Detail00Tabbar>
        <div class="detail">
            <div class="top">
                <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
            </div>
        </div>
        <DetailSwiper :swiperlist="mainpart?.topModule?.housePicture?.housePics"></DetailSwiper>
        <Detail02Infos :topModule="mainpart?.topModule"></Detail02Infos>
        <Detail03Facility ref="facility" :facilityModule="mainpart?.dynamicModule?.facilityModule"></Detail03Facility>
        <Detail04Lord ref="lord" :landlordModule="mainpart?.dynamicModule?.landlordModule"></Detail04Lord>
        <Detail05Comment ref="comment" :commentModule="mainpart?.dynamicModule?.commentModule"></Detail05Comment>
        <Detail06Notice ref="notice" :rulesModule="mainpart?.dynamicModule?.rulesModule"></Detail06Notice>
        <DetailMap ref="map" :positionModule="mainpart?.dynamicModule?.positionModule"></DetailMap>
        <DetailBottom :myid="myid"></DetailBottom>
    </div>
    <div v-if="!detailInfos">
        <div class="toperr">
            <img src="@/asset/img/common/icon_nav_back.png" alt="" @click="back">
            <div class="title">泓源旅途</div>

        </div>

        <div class="err">
            出错啦~~
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { getdetailInfos } from '@/service/detail/detail'
import { nextTick, onUpdated, ref, watch } from 'vue';
import { computed } from '@vue/reactivity';
import DetailSwiper from './cmps/detail-swiper.vue';
import Detail02Infos from './cmps/detail-02-infos.vue';
import Detail03Facility from './cmps/detail-03-facility.vue';
import DetailMap from './cmps/detail-map.vue';
import Detail04Lord from './cmps/detail-04-lord.vue';
import Detail05Comment from './cmps/detail-05-comment.vue';
import Detail06Notice from './cmps/detail-06-notice.vue';
import Detail00Tabbar from './cmps/detail-00-tabbar.vue';
import useScroll from '@/hooks/useScroll'
import DetailBottom from './cmps/detail-bottom.vue';

const detailInfos = ref()
const mainpart = computed(() => detailInfos.value.mainPart)
const router = useRouter()
const route = useRoute()
const myid= ref(route.params.houseId)

const onClickLeft = () => {
    router.go(-1)
}
getdetailInfos(route.params.houseId).then(res => {
    detailInfos.value = res.data
})

const { isReachedBottom, scrollTop } = useScroll()
const scroll100 = computed(() => {
    if (scrollTop.value >= 100) {
        return true
    }
    else {
        return false
    }
})
const currentIndex = ref(0)
const detailRef = ref()
const tabbarshow = ref()
const facility = ref()
const lord = ref()
const comment = ref()
const notice = ref()
const map = ref()
const themeTopY = []
onUpdated(() => {
    themeTopY.push(0)
    themeTopY.push(facility.value.$el.offsetTop - 47)
    themeTopY.push(lord.value.$el.offsetTop - 47)
    themeTopY.push(comment.value.$el.offsetTop - 47)
    themeTopY.push(notice.value.$el.offsetTop - 47)
    themeTopY.push(map.value.$el.offsetTop - 47)
})
watch((scrollTop), () => {
    if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < themeTopY[1]) {
        currentIndex.value = 0
    }
    if (document.documentElement.scrollTop >= themeTopY[1] && document.documentElement.scrollTop < themeTopY[2]) {
        currentIndex.value = 1
    }
    if (document.documentElement.scrollTop >= themeTopY[2] && document.documentElement.scrollTop < themeTopY[3]) {
        currentIndex.value = 2
    }
    if (document.documentElement.scrollTop >= themeTopY[3] && document.documentElement.scrollTop < themeTopY[4]) {
        currentIndex.value = 3
    }
    if (document.documentElement.scrollTop >= themeTopY[4] && document.documentElement.scrollTop < themeTopY[5]) {
        currentIndex.value = 4
    }
    if (document.documentElement.scrollTop >= themeTopY[5]) {
        currentIndex.value = 5
    }
    nextTick(() => {
        tabbarshow.value.currentIndex1 = currentIndex.value
    })

})
const showcurrentindex = (index) => {
    console.log(index)
    window.scrollTo(0, themeTopY[index])
}
const back = () => {
    router.go(-1)
}
</script>

<style lang="less" scoped>
.detailmodule{
    padding-bottom: 49px;
}
.toperr {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 10px;
        padding: 10px
    }

    .title {
        color: var(--primary-color);
        font-size: 18px;
        font-weight: 700;
        width: 225px;
    }
}

.err {
    font-size: 16px;
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
}
</style>