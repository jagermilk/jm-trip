import JMRequest from '@/service/index'
export function getcityall(){
    return JMRequest.get({
        url:"/city/all"
    })
}
