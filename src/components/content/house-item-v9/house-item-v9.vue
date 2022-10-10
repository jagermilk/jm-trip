<template>
    <div class="itemv9">
            <div class="inner">
                <div class="cover">
                    <img :src="itemdata.image.url" alt="">
                </div>
            </div>
            <div class="info">
                <div class="summary">{{itemdata.summaryText}}</div>
                <div class="name">{{itemdata.houseName}}</div>

                <div class="bottom">
                    <van-rate :model-value="Number(itemdata.commentScore)"
                    :count="5"
                    size="16px"
                    void-color="#ff9645"
                    readonly allow-half
                    />
                    <div class="price">¥{{itemdata.finalPrice}}</div></div>
            </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
    itemdata: {
        type: Object,
        default: {}
    }
})
</script>

<style lang="less" scoped>
.itemv9 {
    width: 47%;
    position: relative;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    font-size: 12px;

    .cover {
        img {
            width: 100%;
            opacity: 0.75
        }
    }

    .info {
        color: rgb(255, 255, 255);
        position: absolute;
        margin: 0px;
        bottom: 6px;
        left: calc(calc(100% / 2) - 75px);
        .summary{
            font-size: 14px;
        }
        .bottom{
    margin: 3px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    .price{
       
        margin-right: 5px;
        font-weight: 900;
    }
}

       
    }
}

</style>