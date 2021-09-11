import React, { useState } from 'react'

const LoginForm = ({formSubmission}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   
    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="email"){
            setEmail(e.target.value)
        }
        else if(input==="password"){
            setPassword(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:email,
            password:password
        }  
        formSubmission(formData)
        
            setEmail('')
            setPassword('')
        
       
    }
    
    return (
        <div>
         <h1>Login</h1>

         <form onSubmit={handleSubmit}>
            <input type="text" value={email} name="email" onChange={handleChange} placeholder="Enter email"/><br/><br/>
            <input type="text" value={password}  name="password" onChange={handleChange} placeholder="Enter password"/><br/><br/>
            <input type="submit" value="login"/>     
        </form>       
        </div>
    )
}

export default LoginForm
