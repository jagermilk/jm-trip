<template>
    <div class="detail">
        <div class="top">
            <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        </div>
    </div>

         <DetailSwiper :swiperlist="mainpart?.topModule?.housePicture?.housePics"></DetailSwiper>
        <Detail02Infos :topModule="mainpart?.topModule"></Detail02Infos>
    <Detail03Facility :facilityModule="mainpart?.dynamicModule?.facilityModule"></Detail03Facility>
    <Detail04Lord :landlordModule="mainpart?.dynamicModule?.landlordModule"></Detail04Lord>
    <Detail05Comment :commentModule="mainpart?.dynamicModule?.commentModule"></Detail05Comment>
    <Detail06Notice :rulesModule="mainpart?.dynamicModule?.rulesModule"></Detail06Notice>
    <DetailMap :positionModule="mainpart?.dynamicModule?.positionModule"></DetailMap>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { getdetailInfos } from '@/service/detail/detail'
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import DetailSwiper from './cmps/detail-swiper.vue';
import Detail02Infos from './cmps/detail-02-infos.vue';
import Detail03Facility from './cmps/detail-03-facility.vue';
import DetailMap from './cmps/detail-map.vue';
import Detail04Lord from './cmps/detail-04-lord.vue';
import Detail05Comment from './cmps/detail-05-comment.vue';
import Detail06Notice from './cmps/detail-06-notice.vue';
const detailInfos = ref()
const mainpart = computed(() => detailInfos.value.mainPart)
const router = useRouter()
const route = useRoute()
const onClickLeft = () => {
    router.go(-1)
}
getdetailInfos(route.params.houseId).then(res => {
    detailInfos.value = res.data
})

</script>

<style lang="less" scoped>

</style>