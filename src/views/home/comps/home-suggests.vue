<template>
    <div class="suggests">
        <template v-for="item in suggests">
            <div class="itemsuggests">
                {{item.tagText.text}}
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { usehome } from '@/store/modules/home'
import { storeToRefs } from 'pinia';
const homestore=usehome()
homestore.getsuggests()
const {suggests}=storeToRefs(homestore) 

</script>

<style lang="less" scoped>
.suggests{              
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:0px 10px 0px 0px;
    .itemsuggests{
        margin: 0px;
        width: 72px;
        height: 40px;
    }
}
</style>