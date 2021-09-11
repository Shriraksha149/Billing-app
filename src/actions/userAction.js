import axios from 'axios'


export const userLoginAction=(formData,successFunction,diectLink,handleAuth)=>{

     return (dispatch)=>{

        axios.post(`http://dct-billing-app.herokuapp.com/api/users/login`,formData)
        .then((response)=>{
            const result = response.data
           
            if(result.errors){
                alert(result.errors)
            }
            else if(result){
                successFunction()
                localStorage.setItem('token',`Bearer ${result.token}`)
                diectLink.push('/')
                handleAuth()
              
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
     }
}

export const userRegisterAction = (formData,successFunction,directLink)=>{
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register',formData)
        .then((response)=>{
            const result = response.data
          
            if(result.errors){
                alert(result.errors)
            }
            else if(result){
                dispatch({type:"REGISTER",payload:result})
                successFunction()
                directLink.push("/login")
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}