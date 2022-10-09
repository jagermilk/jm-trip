<template>
    <div class="section">
        <div class="title">
            <h2>
                {{title}}
            </h2>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="more">
                {{more}}
            <van-icon name="arrow" />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title:{
        type:String,
        default:''
    },
    more:{
        type:String,
        default:''
    },

})
</script>

<style lang="less" scoped>
.section {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;

    .title {
        padding:0px;
        height: 50px;
        line-height: 1;
        text-align: left;
        border-bottom: 1px solid rgb(232, 232, 232);
        border-top: 2px solid  rgb(232, 232, 232);
        margin:5px 0px 5px 0px;
    }
    .more {
        padding:0px;
        margin: 10px 0px;
        text-align: right;
        font-size: 13px;
        color: orange;
    }
}
</style>