import { defineStore } from "pinia";

export const usemain=defineStore("main",{
    state:()=>{
        return{
            starttime:'',
            endtime:'',
            currentCity:{
                "cityName":'重庆'
            },
            loadingshow:false,
                    
        }

        
    },
})