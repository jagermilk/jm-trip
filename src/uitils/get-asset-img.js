export const getAssetURl=(image)=>{
    return new URL(`../asset/img${image}`,import.meta.url).href//拿到当前文件路径
}