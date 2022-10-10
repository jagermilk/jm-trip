<template>
    <div class="tabsearch">
        <div class="left">
            <slot name="left">
            </slot>
        </div>
        <div class="content">
            <div class="place">{{currentCity.cityName}}</div>
            <div class="time">
                <div class="start">
                    <span>住</span>{{showstarttime}}
                </div>
                <div class="end"><span>离</span>{{showendtime}}</div>
            </div>
            <van-search v-model="value" placeholder="关键字/位置/民宿名" />
        </div>
        <div class="menu">
            <slot name="right">
            </slot>

        </div>
    </div>

</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import {usemain} from '@/store/modules/main'
import { storeToRefs } from 'pinia';
import { usecity } from '@/store/modules/city'
import { computed } from '@vue/reactivity';
const storemain = usemain()
const { starttime, endtime,currentCity } = storeToRefs(storemain)
const showstarttime=computed(()=>{
    //return dayjs(dayjs(starttime.value).format()).format('MM.DD')
    return starttime.value
})
const showendtime=computed(()=>{
    //return dayjs(dayjs(endtime.value).format()).format('MM.DD')
    return endtime.value
})

</script>

<style lang="less" scoped>
.tabsearch {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 50px;
    top: 0;
    background-color: white;
    z-index: 999;

    .left {
        flex: 1;

        img {
            margin-left: 6px;
            width: 8px;
        }
    }

    .content {
        flex: 14;
        display: flex;
        justify-content: left;

        .place {

            line-height: 45px;
            width: 40px;
            text-align: center;
            font-weight: 600;
            font-size: 16px;
            color: orange;
            padding-right: 3px;
            border-radius: 20px;
        }

        .time {
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 1;
            color: orange;
            font-size: 13px;

            span {
                color: gray;
                font-size: 12px;
            }

            .start {
                padding-right: 15px;
                border-right: 1px solid rgb(203, 202, 202);
                line-height: 1;
                padding-bottom: 2px;
            }

            .end {
                padding-right: 15px;
                border-right: 1px solid rgb(203, 202, 202);
                line-height: 1;
            }
        }

        .van-search {
            flex: 1;
            border-radius: 5px;
        }
    }


    .menu {
        flex: 1;

        img {
            padding-right: 5px;
            width: 17px;
        }

    }
}
</style>