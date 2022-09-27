<template>
    <div class="tabbar">
        <div class="tabbaritem">
            <img src="@/asset/img/tabbar/tab_home.png" alt="">
            <span>首页</span>
        </div>
        <div class="tabbaritem">
            <img src="@/asset/img/tabbar/tab_favor.png" alt="">
            <span>收藏</span>
        </div>
        <div class="tabbaritem">
            <img src="@/asset/img/tabbar/tab_order.png" alt="">
            <span>订单</span>
        </div>
        <div class="tabbaritem">
            <img src="@/asset/img/tabbar/tab_home.png" alt="">
            <span>个人中心</span>
        </div>
    </div>
</template>
<script>
import Tabbaritem from './tabbaritem.vue';
export default {
    components: { Tabbaritem }
}
</script>

<style lang="less" scoped>
.tabbar {
    height: 50px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #f3f3f3;
    padding: 3px;
    .tabbaritem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 45px;
        }
    }
}
</style>