<template>
    <div class="location">
        <div class="city">广州</div>
        <div class="location">
            <span class="text">我的位置</span>
            <img src="@/asset/img/home/icon_location.png" alt="">
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.location {
    padding: 0px 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 44px;
    .city {
        flex: 1;
        font-size: 18px;
    }
    .location{
        width: 74px;
        .text{
            font-size: 14px;
        }
        img{
            width: 18px;
            height: 18px;
        }
    }
}
</style>