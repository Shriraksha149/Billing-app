import React, {  useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import validator from 'validator'


const AddUser = ({formSubmission}) => {
    const [id,setId]=useState(uuidv4())
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [businessName,setBusinessName] = useState('')
    const [address,setAddress] = useState('')
    const [errorObj,setErrorObj] = useState({})
    let errors = {}



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

    const runValidator = ()=>{
        if(username.trim().length === 0){
            errors.username = 'username cant be blank' 

        }
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
        if(businessName.trim().length === 0){
            errors.businessName = 'bussinessName cant be blank' 
        }
        if(address.trim().length === 0){
            errors.address = 'address cant be blank' 
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidator()
        if(Object.keys(errors).length === 0){
            setErrorObj({})
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
        else{
            setErrorObj(errors)
        }
        }
        
        

    return (
        <div>

        <h1>Register with Us</h1>
            <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={username} onChange={handleChange} placeholder="Enter username"/><br/>
                    <span>{errorObj.username && <span>{errorObj.username}</span>}</span><br/>
                    <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter email"/><br/>
                    <span>{errorObj.email && <span>{errorObj.email}</span>}</span><br/>
                    <input type="text" name="password" value={password} onChange={handleChange} placeholder="Enter password"/><br/>
                    <span>{errorObj.password && <span>{errorObj.password}</span>}</span><br/>
                    <input type="text" name="businessName" value={businessName} onChange={handleChange} placeholder="Enter businessName"/><br/>
                    <span>{errorObj.businessName && <span>{errorObj.businessName}</span>}</span><br/>
                    <input type="text" name="address" value={address} onChange={handleChange} placeholder="Enter address"/><br/>
                    <span>{errorObj.address && <span>{errorObj.address}</span>}</span><br/>
                    
                    <input type="submit" value="register"/>
            </form>
        </div>
    )
}


export default AddUser
