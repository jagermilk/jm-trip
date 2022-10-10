<template>
    <div class="showtabbar">
        <div class="left"><slot name="left">
            <img src="" alt="" @click="goback">
        </slot></div>
        <div class="middle"><slot name="middle"></slot></div>
        <div class="right"><slot name="right">
            <img src="" alt="">
        </slot></div>    
    </div>
</template>

<script lang="ts" setup>
   
</script>

<style lang="less" scoped>
  .showtabbar{
        background-color: white;
        height: 50px;
        line-height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position:fixed;
        top:0px;
        font-size:30px;
        .left{
            height: 50px;
            width: 0px;
            text-align: center;
        }
        .middle{
            color:gray;
            font-size:27px;
            height: 50px;
            flex:1;
            text-align: center;
        }
        .right{
            height: 50px;
            width:0px;
            text-align: center;
        }
    }
</style>