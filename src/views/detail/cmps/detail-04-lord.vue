<template>
    <div class="lord">
            <DetailSection title="房东介绍" more="查看房东主页">
                <template #content>
                    <div class="v">
                        <img :src="landlordModule.topScroll" alt="">
                    </div>
                    <div class="brief">
                        <img :src="landlordModule.hotelLogo" alt="">
                        <div class="name">
                        <span class="hotelname">{{landlordModule.hotelName}}</span>
                        <div class="tags">
                          <template v-for="item in landlordModule.hotelTags">
                           <span class="tagitem">{{item.tagText.text}}</span>  
                        </template>      
                        </div>
                        
                          
                        </div>
                        <button>联系房东</button>
                    </div>
                    <div class="summary">
                        <template v-for="item in landlordModule.hotelSummary">
                            <div class="summaryitem">
                                <div class="title">{{item.title}}</div>
                                <div class="introduction">{{item.introduction}}</div>
                                <div class="tip">{{item.tip}}</div>
                            </div>
                        </template>
                    </div>
                </template>
            </DetailSection>
    </div>
</template>

<script lang="ts" setup>
import DetailSection from '@/components/content/detail-section/detail-section.vue';
defineProps({
    landlordModule:{
        type:Object,
        default:{}
    }
})   
</script>

<style lang="less" scoped>
.content{
    .v{
        img{
            width: 100%;
        }
        margin-bottom: 10px;
    }
    .brief{
        img{
            width: 50px;
        }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .name{
            margin-top: 15px;
            font-size: 17px;
            font-weight: 550;
            margin: 0px 3px;
            flex:1;
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            .hotelname{
                padding-left:4px;
                margin-bottom: 5px;
            }
            .tags{
            display: flex;
            flex-direction: row;
            .tagitem{
            color:rgb(197, 197, 197);
            font-size: 11px;
            font-weight: 500;
            line-height: 12px;
            padding:0px 4px;
            border-right: 1px solid rgb(197, 197, 197);  
            }
            :last-child{
                border-right: 0px;
            }
            
        }
        }
        button{
            font-weight: 600;
            font-size: 13px;
            color:white;
            background-color: orange;
            border: 0px;
            width: 68px;
            padding:5px;
            border-radius: 4px;
        }
       
    }
    .summary{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .summaryitem{
            margin: 50px 0px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .title{
                font-size: 12px;
                color:gray;
                padding-bottom: 5px;
            }
            .introduction{
                font-size: 17px;
                font-weight: 600;
                padding-bottom: 5px;
            }
            .tip{
                font-size: 12px;
                color:gray
            }
        }
    }
}
</style>