<template>
    <div class="favor">
        <div class="top">
            <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        </div>
        <div v-if="likecity.length"> 
            <template v-for="citem in likecity" >
            <div class="item" @click="gohousedetail(citem.houseId)" >
                <div class="img">
                    <img :src="citem.currentHouse.defaultPictureURL" alt="">
                </div>
                <div class="like">
                    <van-icon v-if="!islike" name="like-o" color="red" @click="click(citem.houseId)" />
                    <van-icon v-if="islike" name="like" color="red" @click="click(citem.houseId)" />
                </div>
                <div class="logo">
                    <img :src="citem?.mainPart?.dynamicModule?.landlordModule.hotelLogo" alt="">
                </div>
                <div class="houseName">{{citem.mainPart.topModule.houseName}}</div>
                <div class="houseTags">
                    <template v-for="(item,index) in citem.mainPart.topModule.houseTags" :key="index">
                        <div class="item" v-if="item.tagText"
                            :style="{color:item.tagText.color,background:item.tagText.background.color}">
                            {{item.tagText.text}}
                        </div>
                    </template>
                </div>
            </div>
        </template> </div>
        <div v-else class="no">
            <van-button type="primary" plain hairline round icon="plus" @click="gohome">点我新增收藏</van-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { usehome } from '@/store/modules/home'
import { toNumber } from '@vue/shared';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const islike = ref(true)
const homestore = usehome()
const { likecity } = storeToRefs(homestore)


const onClickLeft = () => {
    router.push('/home/')
}
const click = () => {
    islike.value = !islike.value
}
const gohousedetail = (payload) => {
    console.log(payload)

    router.push("/detail/" + payload)

}
const gohome=()=>{
    router.push('/home/')
}
</script>

<style lang="less" scoped>
.favor {
    padding: 0px 8px;
    margin-top: 49px;
    margin-bottom: 49px;

    .top {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;

    }

    .item {
        margin-bottom: 10px;
        position: relative;

        .img {

            width: 90%;
            margin: 30px auto;

            img {
                width: 100%;

            }

        }

        .like {
            position: absolute;
            top: -5px;
            left: 18px;
            font-size: 45px;
        }

        .logo {
            position: absolute;
            bottom: 55px;
            right: 5px;

            img {
                width: 70px;
                border-radius: 30px;
            }


        }

        .houseName {
            margin: 0px 10px;
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .houseTags {
            display: flex;
            margin-top: 5px;
            margin-left: 10px;

            .item {
                margin-right: 1px;
                font-size: 10px;
                padding: 1px;
                border-radius: 5px;
            }
        }
    }
    .no{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }

}
</style>