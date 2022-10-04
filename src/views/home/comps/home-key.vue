<template>
    <div class="key">
            <div class="top bottom-gray-line">
                <div class="price">价格不限</div>
                <div class="person">人数不限</div>
            </div>
            <div class="bottom">关键字/位置/民宿名</div>
    </div>
</template>

<script lang="ts" setup>
   
</script>

<style lang="less" scoped>
    .key{
        font-size: 14px;
        color: gray;
        display: flex;
        flex-direction: column;
        padding:1px 10px;
        .top{
            display: flex;
            flex-direction: row;
            .price{
                margin-left: 10px;
                text-align: left;
                flex:1
            }
            .person{
                margin-left: 113px;
                width: 100px;
                text-align: left;
                
            }
        }
        .bottom{
            margin: 20px 0px 0px 10px;
        }
    }
</style>