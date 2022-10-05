import { defineStore } from "pinia"
import {getsuggestscity,getCategories,gethouselist} from '@/service/home/home'
export const usehome=defineStore("home",{
    state:()=>{
        return{
        suggests:{},
        starttime:'',
        endtime:'',
        categories:{},
        houselist:[],
        currentpage:1
        }
    },
    actions:{
        async getsuggests(){
            const res=await getsuggestscity()
            this.suggests=res.data
        },
        async getCategories(){
            const res=await getCategories()
            this.categories=res.data
        },
        async gethouselist(currentpage){
            const res=await gethouselist(currentpage)
            this.houselist.push(...res.data)
        }
    }
    
})