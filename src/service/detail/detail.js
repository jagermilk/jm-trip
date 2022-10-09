import JMRequest from '../index'
export function getdetailInfos(houseId){
    return JMRequest.get({
        url:'/detail/infos',
        params:{
            houseId
        }
    })
}