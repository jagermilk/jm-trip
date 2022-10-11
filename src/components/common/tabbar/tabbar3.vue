<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path" :icon="item.icon">
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>


import { ref } from "vue";
const tabbarData = [
    {
        text: "首页",
        image: "/tabbar/tab_home.png",
        imageActive: "/tabbar/tab_home_active.png",
        path: "/home",
        icon:"home-o"
    },
    {
        text: "收藏",
        image: "/tabbar/tab_favor.png",
        imageActive: "/tabbar/tab_favor_active.png",
        path: "/favor",
        icon:"like-o"
    },
    {
        text: "订单",
        image: "/tabbar/tab_order.png",
        imageActive: "/tabbar/tab_order_active.png",
        path: "/order",
        icon:"cart-o"
    },
    {
        text: "个人中心",
        image: "/tabbar/tab_message.png",
        imageActive: "/tabbar/tab_message.png",
        path: "/profile",
        icon:"friends-o"
    },
]
const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tab-bar {
  // 局部定义一个变量: 只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px !important;

  // 找到类, 对类中的CSS属性重写
  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 28px;
  }

  img {
    width: 20px;
  }
}

</style>
