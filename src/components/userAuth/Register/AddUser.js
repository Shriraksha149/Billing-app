import React, {  useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const AddUser = ({formSubmission}) => {
    const [id,setId]=useState(uuidv4())
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [businessName,setBusinessName] = useState('')
    const [address,setAddress] = useState('')



    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="username"){
            setUsername(e.target.value)
        }
        else if(input==='email'){
            setEmail(e.target.value)
        }
        else if(input==="password"){
            setPassword(e.target.value)
        }
        else if(input==='businessName'){
            setBusinessName(e.target.value)
        }
        else if(input==='address'){
            setAddress(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const formData={
            id:id,
            username:username,
            email:email,
            password:password,
            businessName:businessName,
            address:address
        }
       formSubmission(formData)
       
      
            setId(uuidv4())
            setEmail('')
            setUsername('')
            setPassword('')
            setBusinessName('')
            setAddress('')
        
        
    }

    return (
        <div>

        <h1>Register with Us</h1>
            <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={username} onChange={handleChange} placeholder="Enter username"/><br/><br/>
                    <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter email"/><br/><br/>
                    <input type="text" name="password" value={password} onChange={handleChange} placeholder="Enter password"/><br/><br/>
                    <input type="text" name="businessName" value={businessName} onChange={handleChange} placeholder="Enter businessName"/><br/><br/>
                    <input type="text" name="address" value={address} onChange={handleChange} placeholder="Enter address"/><br/><br/>
                    
                    <input type="submit" value="register"/>
            </form>
        </div>
    )
}


export default AddUser
