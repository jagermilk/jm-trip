<template>
    <div class="order">
      
        <div class="top">
            <van-nav-bar title="订单详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        </div>

        <div  class="no">
            <van-button type="primary" plain hairline round icon="plus" @click="gohome">点我去预定</van-button>
        </div>
    </div>
   
</template>

<script lang="ts" setup>
import router from '@/router';

const onClickLeft = () => {
    router.push('/home/')
}
   const gohome=()=>{
    router.push('/home/')
}
</script>

<style lang="less" scoped>
   .no{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
</style>