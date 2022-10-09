<template>
    <div class="facility">
        <DetailSection title="价格说明" more="查看更多">
            <template #content>
                <div v-for="(item,index) in facilityModule?.houseFacility?.houseFacilitys" :key="index"
                    class="content">
                    <div class="contentitem" v-if="facilityModule?.houseFacility?.facilitySort?.includes(item.groupId)">
                        <div class="head">
                            <img :src="item.icon" alt="">
                            {{item.groupName}}
                        </div>
                        <div class="body">
                            <div class="childrenitem" v-for="childrenitem in item.facilitys.slice(0,4)">
                                <img src="@/asset/img/detail/icon_check.png" alt="">
                                {{childrenitem.name}}
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
    facilityModule: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="less" scoped>
.content {
    background-color: rgb(241, 241, 241);
    .contentitem {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .head {
            flex: 3;
            padding: 10px 0px;
            img {
                width: 20px;
            }

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .body {
            padding: 10px 0px;
            display: flex;
            flex: 7;
            flex-direction: row;
            flex-wrap: wrap;
            font-size: 11px;

            .childrenitem {
                width: 45%;
                margin: 3px;

                img {
                    width: 13px;
                }
            }
        }
    }
}
</style>