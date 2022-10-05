<template>
    <div class="suggests">
        <template v-for="(item,key,index) in suggests" :key="index">
            <div class="itemsuggests"
            :style="{color:item.tagText.text,background:item.tagText.background.color}
             "
            >
                {{item.tagText.text}}
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { usehome } from '@/store/modules/home'
import { storeToRefs } from 'pinia';
const homestore=usehome()
homestore.getsuggests()
const {suggests}=storeToRefs(homestore) 

</script>

<style lang="less" scoped>
.suggests{
    margin: 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    .itemsuggests{
        color: gray;
        text-align: center;
        line-height: 12px;
        border-radius: 14px;
        padding:10px;
        font-size: 12px;
        margin:0px!important;
        height: 12px;
    }
}
</style>