<template>
    <DetailSection title="地理位置" more="查看更多">
        <template #content>
          <div class="baidu" ref="mapRef">
    </div>
        </template>
    </DetailSection>
    
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import DetailSection from '@/components/content/detail-section/detail-section.vue';
const mapRef=ref()
const props=defineProps({
    positionModule:{
        type:Object,
        default:{}
    }
})
onMounted(()=>{
var map = new BMapGL.Map(mapRef.value);          
var point = new BMapGL.Point(props.positionModule.longitude, props.positionModule.latitude);  
var marker = new BMapGL.Marker(point);        // 创建标注   
map.addOverlay(marker);  
map.enableScrollWheelZoom(true); 
map.centerAndZoom(point, 15);                 
}) 
</script>

<style lang="less" scoped>
.baidu{
    height: 250px;
}
</style>