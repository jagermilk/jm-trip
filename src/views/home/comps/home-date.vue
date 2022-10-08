<template>
    <div class="date" @click="show=!show">
            <div class="start">
                <div class="title">入住</div>
                <div class="date">{{nowdate}}</div>
            </div>
            <div class="period">共{{difdate}}晚</div>
            <div class="end">
                <div class="title">离开</div>
                <div class="date">{{enddate}}</div>
            </div>
    </div>
    <div class="pickdate">
       <van-calendar v-model:show="show" type="range" @confirm="onConfirm" color="#ff9854" :round="false" />
    </div>
   </template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import {useRouter} from 'vue-router'

import {usemain} from '@/store/modules/main'
import { storeToRefs } from 'pinia';

const nowdate=ref(dayjs(new Date()).format('MM月DD日'))
const end=dayjs(new Date()).add(1, 'day')
const enddate=ref(dayjs(end).format('MM月DD日'))
const difdate=ref(1)

const mainstore=usemain()
const {starttime,endtime}=storeToRefs(mainstore)
starttime.value=nowdate.value
endtime.value=enddate.value

const show=ref(false)

const onConfirm=(value)=>{
    nowdate.value=dayjs(value[0]).format('MM/DD')
    enddate.value=dayjs(value[1]).format('MM/DD')
    starttime.value=nowdate.value
    endtime.value=enddate.value
    difdate.value=dayjs(value[1]).diff(dayjs(value[0]), 'day') 
    show.value=false
}
</script>

<style lang="less" scoped>
.date{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:10px;
    .start{
        margin-left: 10px;
        text-align: left;
        flex:1;
        .title{
            margin: 0px !important;
            padding:0px !important;
            font-size: 12px;
            color: rgb(88, 88, 88);
        }
        .date{
            margin-top: 1px !important;
            padding:0px !important;
            font-size: 16px;
            color: black;
        }
    }
    .end{
        width: 100px;
        text-align: left;
        .title{
            margin: 0px !important;
            padding:0px !important;
            font-size: 12px;
            color: rgb(88, 88, 88);
        }
        .date{
            margin-top: 1px !important;
            padding:0px !important;
            font-size: 16px;
            color: black;
        }
    }
    .period{
        width: 120px;
        color: rgb(88, 88, 88);
    }
}
.pickdate{
    --van-calendar-popup-height:100%;
}
</style>