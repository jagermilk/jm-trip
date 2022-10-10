import { onDeactivated, onMounted, onUnmounted, ref } from "vue";
export default function useScroll(){
    const isReachedBottom=ref(false)
    const scrollTop=ref(0)
    const fetchmore=()=>{
        const clientHight=document.documentElement.clientHeight
        scrollTop.value=document.documentElement.scrollTop
        const scrollHeight=document.documentElement.scrollHeight
        if(scrollHeight===scrollTop.value+clientHight){
            isReachedBottom.value=true
        }
    }
    onMounted(()=>{
        window.addEventListener("scroll",fetchmore)
    })
    
    onUnmounted(() => {
        window.removeEventListener("scroll",fetchmore)
    })

    onDeactivated(()=>{
        window.removeEventListener("scroll",fetchmore)
    })
    return {isReachedBottom,scrollTop}
}