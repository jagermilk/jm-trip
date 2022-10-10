<template>
    <div class="detailtabbar">
            <TabbarShow>
                <template #middle>
                <div class="detailnavitems">
                    <div v-for="(item,index) in ['详情', '价格', '房东', '评论','须知', '位置']" @click="showdetailtab(index)"
                        :class="{active:index==currentIndex1}">
                        {{item}}</div>
                </div>
            </template>
            </TabbarShow>
    </div>
</template>

<script lang="ts" setup>
import TabbarShow from '@/components/common/tabbar/tabbar-show.vue';
import { ref,defineEmits } from 'vue';

const emit=defineEmits([
    'showcurrentindex'
])
const currentIndex1=ref(0)
const showdetailtab=(index)=>{
    currentIndex1.value=index,
    emit("showcurrentindex",index)
}
defineExpose({
    currentIndex1
})
</script>

<style lang="less" scoped>
.detailtabbar {
    position: fixed;
    z-index: 9;

    .detailnavitems {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        div {
            font-size: 15px;
            font-weight: 600;
            height: 47px;
        }
    }
}

.active {
    color: orange !important;
}
</style>