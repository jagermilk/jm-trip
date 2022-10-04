import { defineStore } from "pinia"
import { getcityall } from '@/service/city/city'
export const usecity=defineStore("city",{
    state:()=>{
        return{
        cities:{},
        clicktitle:'cityGroup',
        currentCity:{
            "cityName":'成都'
        }
        }
    },
    actions:{
        async getcities(){
            const res=await getcityall()
                this.cities=res.data
        }
    }
})