<template>
    <div class="notice">
        <DetailSection title="预定须知" more="查看更多">
            <template #content>
                <div v-for="item in rulesModule.orderRules" class="rules">
                    <div class="rulesitem">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="introduction">
                            {{item.introduction}}
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
    rulesModule: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="less" scoped>
.rules {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.02);
    .rulesitem {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        margin: 8px 0px;
        .title {
            margin-right: 20px;
            width: 59px;
        }
    }
}
</style>