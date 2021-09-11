import axios from "axios"

export const createCustomer=(formData)=>{
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/customers',formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
          dispatch({type:"ADD_CUSTOMER",payload:result})
        })
        .catch((err)=>{
            alert(err.message) 
        })
    }
}

export const listsAllCustomers=()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data 
            if(result.errors){
                alert(result.message)
            }
            dispatch({ type:'LIST_ALL_CUSTOMERS',payload:result})              
        })
        .catch((err)=>{
            alert(err.message)
        })
    } 
}


export const editCustomer=(formData)=>{
    
    return (dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${formData.id}`,formData,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
            dispatch({type:'EDIT_CUSTOMER',payload:result})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const deleteCustomer=(id)=>{
    
    return (dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
            dispatch({type:'DELETE_CUSTOMER',payload:result})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}