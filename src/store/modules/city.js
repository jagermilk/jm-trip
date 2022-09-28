import { defineStore } from "pinia"
import { getcityall } from '@/service/city/city'
export const usecity=defineStore("city",{
    state:()=>({
        cities:{}
    }),
    actions:{
        async getcities(){
            const res=await getcityall()
                this.cities=res.data
      
            
        }
    }
})