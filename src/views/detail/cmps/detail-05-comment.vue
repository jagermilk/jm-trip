<template>
    <div class="comment">
        <DetailSection title="热门评论" :more="'查看更多'+commentModule.totalCount+'条评论'">
            <template #content>
                <div class="content">
                    <div class="overall">
                        <div class="score">{{commentModule.overall}}</div>
                        <div class="center">
                            <div class="brief">{{commentModule.scoreTitle}}</div>
                            <div class="total">{{commentModule.totalCount}}条评论</div>
                            <div class="rate">
                                <van-rate v-model="commentModule.overall" readonly allow-half size="10" />
                            </div>
                        </div>
                        <div class="right">
                            <template v-for="item in commentModule.subScores">
                                <div class="sub">
                                    {{item}}
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="tags">
                        <template v-for="item in commentModule.commentTagVo">
                            <div class="tagitem">
                                {{item.text}}
                            </div>
                        </template>
                    </div>
                    <div class="comments">
                        <div class="user">
                            <div class="avatars">
                                <img :src="commentModule.comment.userAvatars" alt=""/>
                                <div class="userinfo">
                                <div class="name">
                                    
                                    {{commentModule.comment.userName}}</div>
                                <div class="time">
                                    {{commentModule.comment.checkInDate}}
                                </div>
                            </div>   
                            </div>
                           
                            <div class="context">
                                {{commentModule.comment.commentDetail}}
                            </div>
                        </div>
                    </div>
                </div>

            </template>
        </DetailSection>
    </div>
</template>

<script lang="ts" setup>
import DetailSection from '@/components/content/detail-section/detail-section.vue';
defineProps({
    commentModule: {
        type: Object,
        default: {}
    }
})
</script>

<style lang="less" scoped>
.content {

    .overall {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .score{
            width: 40px;
            font-size: 35px;
            padding-right: 10px;
            margin-right: 12px;
            border-bottom: 4px solid orange;
            margin-bottom: 4px;
        }
        .center{
            flex: 1;
            font-size: 12px;
            .brief{
                margin-bottom: 2px;
            }
            .total{
                margin-bottom: 2px;
            }
        }
        .right{
            width: 180px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            font-size: 12px;
            .sub{
                margin: 0px;
                padding:0px;
                flex:50%;
            }
        }
    }

    .tags {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        .tagitem{
            font-size: 13px;
            margin: 3px;
            background-color: rgba(0,0,0,.03);
            padding:2px;
            border-radius: 2px;
        }
    }

    .comments {
        margin-top: 10px;
        background-color: rgba(0,0,0,.02);
        .avatars{
            display: flex;
            flex-direction: row;
            img{
                width: 40px;
                border-radius: 30px;
                margin-right: 10px;
            }
            .userinfo{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
        .context{
            display: flex;
            justify-content: center;
            align-items: left;
            padding:20px 0px;
        }
    }
}
</style>