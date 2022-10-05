<template>
    <div class="itemv3">
        <div class="inner">
            <div class="cover">
                <img :src="itemdata.image.url" alt="">
            </div>
        </div>
        <div class="info">
            <div class="location">
                <img src="@/asset/img/home/location.png" alt="">
                <span>{{itemdata.location}}</span>
            </div>
            <div class="name">{{itemdata.houseName}}</div>
            <div class="summary">{{itemdata.summaryText}}</div>
            <div class="bottom">

                <div class="price">¥{{itemdata.finalPrice}}</div>
                <div class="nowprice">¥{{itemdata.productPrice}}</div>
                <div class="sales">{{itemdata.priceTipBadge.text}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


defineProps({
    itemdata:{
        type:Object,
        default:{}
    }
})
</script>

<style lang="less" scoped>
.itemv3{
    width: 47%;
    position: relative;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    font-size: 12px;
    .cover{
        img{
            width:100%;
            opacity:0.75
        }
    }
    .info{
        margin: 0px auto;
        color:black;
        position: absolute;
        bottom:6px;
        left: calc(calc(100% / 2) - 75px);
        .location {
            display: flex;
            justify-content: left;
            align-items: center;
            font-size: 14px;
            img {
                width: 20px;
                margin-right: 5px;
            }
        }
}
.bottom {
            display: flex;
            justify-content: left;
            font-size: 15px;
            margin-top: 2px;
            .price {
                font-size: 16px;
                color: orange;
                flex: 1;
                margin-right: 3px;
                font-weight: 900;
            }

            .nowprice {
                text-decoration: line-through;
                font-size: 13px;
                flex: 1;
            }

            .sales {
                text-align: center;
                font-size: 5px !important;
                background-color: pink;
                border-radius: 5px;
                width: 53px;
                height: 15px;
                margin-right: 28px;
                color: white;
            }
        }
}
</style>