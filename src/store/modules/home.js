import { defineStore } from "pinia"
import {getsuggestscity,getCategories,gethouselist} from '@/service/home/home'
import {getdetailInfos} from '@/service/detail/detail'
export const usehome=defineStore("home",{
    state:()=>{
        return{
        suggests:{},
        categories:{},
        houselist:[],
        currentpage:1,
        likecity:[] 
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
        },
        async addlike(houseId){
            const res=await getdetailInfos(houseId)
            this.likecity.push(res.data)
            console.log(res.data)
        },
        async poplike(houseId){
            const res=await getdetailInfos(houseId)
            this.likecity.forEach((value,index,array)=>{
                if(value == res.data){
                  array.splice(index,1)
                }
              })
        }
    }
    
})