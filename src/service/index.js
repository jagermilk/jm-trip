import axios from 'axios'
import {BASE_URL} from './config'
import {usemain} from '@/store/modules/main'
import { storeToRefs } from "pinia";
const mainstore=usemain()
const {loadingshow} =storeToRefs(mainstore)


class JMRequest{
    constructor(baseURL,timeout=5000){
        this.instance=axios.create({
            baseURL,
            timeout
        })
        this.instance.interceptors.request.use(config=>{
            loadingshow.value=true
            return config
        },err=>{
            return err
        })
        this.instance.interceptors.response.use(res=>{
            loadingshow.value=false
            return res
        },err=>{
            loadingshow.value=false
            return err
        })
    }
    request(config){
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    get(config){
        return this.request({...config,method:"get"})
    }
    post(config){
        return this.request({...config,method:"post"})
    }
}
export default new JMRequest(BASE_URL)