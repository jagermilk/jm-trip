<template>
    <div class="categories">
            <template v-for="item in categories">
                <div class="item">
                    <img :src="item.pictureUrl" alt="">
                    <div>{{item.title}}</div> 
                </div>
            </template>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    categories:{
        type:Object,
        default:{}
    }
})
</script>

<style lang="less" scoped>
.categories{
    width: 90%;
    margin: auto;
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
    display: none;
}
    margin-top: 20px;
    .item{
        padding:1px;
        line-height: 1;
        text-align: center;
        width: 65px;
        flex-shrink: 0;
        font-size: 13px;
        img{
            width: 32px;
            height: 32px;
        }

    }
}
</style>