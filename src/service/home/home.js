import JMRequest from '@/service/index'
export function getsuggestscity(){
    return JMRequest.get({
        url:"/home/hotSuggests"
    })
}
export function getCategories(){
    return JMRequest.get({
        url:"/home/categories"
    })
}
export function gethouselist(currentpage){
    return JMRequest.get({
        url:"/home/houselist",
        params:{
            page:currentpage
        }
    })
}