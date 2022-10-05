<template>
    <div class="list">
        <div class="title">热门精选</div>
        
        <div class="content">
            <template v-for="(item,index) in houselist" :key="item.data.houseId">
                <HouseItemV3 v-if="item.discoveryContentType===3" :itemdata="item.data"></HouseItemV3>
                <HouseItemV9 v-if="item.discoveryContentType===9" :itemdata="item.data"></HouseItemV9>
            </template>
        </div>
        <button @click="more">加载更多</button>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
        
    </div>
</template>

<script lang="ts" setup>
import { usehome } from '@/store/modules/home'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import HouseItemV3 from '../../../components/content/house-item-v3/house-item-v3.vue';
import HouseItemV9 from '../../../components/content/house-item-v9/house-item-v9.vue';
const storehome = usehome()
const { houselist, currentpage } = storeToRefs(storehome)
storehome.gethouselist(currentpage.value)
defineProps({
    houselist: {
        type: Array,
        default: []
    }
})

const more = () => {
    currentpage.value++
    console.log(currentpage.value)
    storehome.gethouselist(currentpage.value)


}
</script>

<style lang="less" scoped>
.list {
    padding: 10px 8px;

    .title {
        font-size: 20px;
        font-weight: 600;
    }
}
.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>