<template>
    <keep-alive>
        <div class="city tophidden">
            <CitySearch></CitySearch>
            <CityTab></CityTab>
            <CityContent></CityContent>
        </div>
    </keep-alive>
</template>

<script lang="ts" setup>
import CitySearch from "./comps/city-search.vue";
import CityTab from "./comps/city-tab.vue";
import CityContent from "./comps/city-content.vue";

</script>

<style lang="less" scoped>

</style>