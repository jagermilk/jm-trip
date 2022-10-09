<template>
    <div class="infos">
        <div class="houseName">{{topModule.houseName}}</div>
        <div class="houseTags">
            <template v-for="(item,index) in topModule.houseTags" :key="index">
                <div class="item" v-if="item.tagText"
                    :style="{color:item.tagText.color,background:item.tagText.background.color}">
                    {{item.tagText.text}}
                </div>
            </template>
        </div>
        <div class="comment">
            <div class="left">{{topModule.commentBrief.overall}}</div>
            <div class="center">{{topModule.commentBrief.scoreTitle}}</div>
            <div class="right">{{topModule.commentBrief.commentBrief}}</div>
            <div class="more">{{topModule.commentBrief.totalCount}}条评论 ></div>
        </div>
        <div class="position">
            <div class="address">
                <span>{{topModule.nearByPosition.address}}</span>
                <div class="nearby">地图 周边 ></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    topModule: {
        type: Array,
        default: []
    }
})
</script>

<style lang="less" scoped>
.infos {
    padding: 0px 8px;

    .houseName {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
    }

    .houseTags {
        display: flex;
        margin-top: 5px;

        .item {
            margin-right: 2px;
            font-size: 10px;
            padding: 1px;
            border-radius: 5px;
        }
    }

    .comment {
        display: flex;
        justify-content: left;
        height: 26px;
        line-height: 26px;
        background-color: rgb(233, 233, 233);
        margin-top: 10px;
        color: rgb(0, 0, 0);
        padding-left: 5px;

        .left {
            font-size: 22px;
            font-weight: 600;
            margin-right: 5px;
        }

        .center {
            font-size: 13px;
            line-height: 35px;
            font-weight: 600;
            margin-right: 5px;
        }

        .right {
            line-height: 35px;
            font-size: 13px;
            color: gray;
        }

        .more {
            font-size: 12px;
            flex: 1;
            text-align: right;
            margin-right: 5px;
            color: rgb(234, 161, 23);
        }
    }

    .position {
        background-color: rgb(233, 233, 233);
        margin-top: 10px;
        color: rgb(0, 0, 0);
        font-size: 12px;
        font-weight: 600;

        .address {
            display: flex;
            justify-content: space-between;
            margin: 0px 5px;

        }

        .nearby {
            color: rgb(234, 161, 23);
            font-size: 12px;
            font-weight: 500;
        }

    }
}
</style>