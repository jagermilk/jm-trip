import { defineStore } from "pinia"
import { getcityall } from '@/service/city/city'

export const usecity=defineStore("city",{
    state:()=>{
        return{
        cities:{},
        clicktitle:'cityGroup',
        suggests:{}
        }
    },
    actions:{
        async getcities(){
            const res=await getcityall()
                this.cities=res.data
        },
        async getsuggests(){
            const res=await getsuggestscity()
            this.suggests=res.data
        }
    }
})