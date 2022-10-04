import { defineStore } from "pinia"
import {getsuggestscity} from '@/service/home/home'
export const usehome=defineStore("home",{
    state:()=>{
        return{
        suggests:{}
        }
    },
    actions:{
        async getsuggests(){
            const res=await getsuggestscity()
            this.suggests=res.data
        }
    }
})