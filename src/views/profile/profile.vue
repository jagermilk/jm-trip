<template>
    <div class="proflie">
            <div class="top">
                <img src="@/asset/img/order/icon-order.png" alt="">
            </div>
            <div class="info">
                您还没有登录,请登录后查看订单~
            </div>
            <div class="btn">
            <van-button type="primary" plain hairline round  disabled>暂不能登录/注册</van-button>
            </div>
    
    </div>
</template>

<script lang="ts" setup>
   
</script>

<style lang="less" scoped>
.proflie{
    height: 100vh;
    display: flex;
    flex-direction: column;

}
.top{
    width: 100%;
    img{
        width: 100%;
    }
    margin: 40px 0px;
}
.info{
    display: flex;
    justify-content: center;
    color: gray;
    margin: 20px 0px;
}
.btn{
    display: flex;
    justify-content: center;
    color: gray;
    margin: 20px 0px;
}
</style>