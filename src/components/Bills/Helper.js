export const getCustomerName=(arr)=>{
    const result=arr.map((ele)=>{ 
        return  { value:ele._id,label:ele.name}
    })
    return result
}
export const getProductsName=(arr)=>{
    const result=arr.map((ele)=>{
        return {value:ele._id,label:ele.name} // start from here
    })
    return result
}