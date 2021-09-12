import React, { useState } from 'react'
import validator from 'validator'

const LoginForm = ({formSubmission}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorObj,setErrorObj] = useState({})
    let errors = {}
   
    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="email"){
            setEmail(e.target.value)
        }
        else if(input==="password"){
            setPassword(e.target.value)
        }
    }
      const runValidator = ()=>{
        if(email.trim().length === 0){
            errors.email = 'email cant be blank'
        }else if(!validator.isEmail(email)){
            errors.email = 'email is not valid'
        }
        if(password.trim().length === 0){
            errors.password = 'password cannot be blank'
        }else if(password.length<5){
            errors.password = 'password is too short'
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidator()
        if(Object.keys(errors).length === 0){
         setErrorObj({})
         const formData={
            email:email,
            password:password
        }  
        formSubmission(formData)
        
            setEmail('')
            setPassword('')
        
       
    } else{
        setErrorObj(errors)
    }
 }
      
    
    return (
        <div>
         <h1>Login</h1>

         <form onSubmit={handleSubmit}>
            <input type="text" value={email} name="email" onChange={handleChange} placeholder="Enter email"/><br/>
            <span>{errorObj.email && <span>{errorObj.email}</span>}</span><br/>
            <input type="text" value={password}  name="password" onChange={handleChange} placeholder="Enter password"/><br/>
            <span>{errorObj.password && <span>{errorObj.password}</span>}</span><br/>
            <input type="submit" value="login"/>     
        </form>       
        </div>
    )
}

export default LoginForm
