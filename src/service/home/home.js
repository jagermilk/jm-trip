import JMRequest from '@/service/index'
export function getsuggestscity(){
    return JMRequest.get({
        url:"/home/hotSuggests"
    })
}