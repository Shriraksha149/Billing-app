import axios from "axios"

export const createProduct=(formData)=>{
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/products',formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
          dispatch({type:"ADD_PRODUCT",payload:result})
        })
        .catch((err)=>{
            alert(err.message) 
        })
    }
}
export const listsAllProducts=()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data 
          
            if(result.errors){
                alert(result.message)
            }
            dispatch({ type:'LIST_ALL_PRODUCTS',payload:result})              
        })
        .catch((err)=>{
            alert(err.message)
        })
    } 
}


export const editProduct=(formData)=>{
    
    return (dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${formData.id}`,formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
            dispatch({type:'EDIT_PRODUCT',payload:result})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const deleteProduct=(id)=>{
    
    return (dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
            dispatch({type:'DELETE_PRODUCT',payload:result})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
