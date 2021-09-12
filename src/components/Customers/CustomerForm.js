import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import validator from 'validator'

const CustomerForm = ({formSubmission,handleToggle}) => {
    const [id,setId]=useState( uuidv4())
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile] = useState('')
    const [errorObj,setErrorObj] = useState({})
    let errors = {}
    
    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="name"){
            setName(e.target.value)
        }
        else if(input==="email"){
            setEmail(e.target.value)
        }
        else if(input === "mobile"){
            setMobile(e.target.value)
        }
    }

    const runValidator = ()=>{
        if(name.trim().length === 0){
          errors.name = 'name cant be blank'
        }
        if(email.trim().length === 0){
            errors.email = 'email cant be blank'
        }else if(!validator.isEmail(email)){
            errors.email = 'email is not valid'
        }
        if(mobile.trim().length === 0){
            errors.mobile = 'mobile number cant be blank'
        }else if(mobile.length<10){
            errors.mobile = 'mobile number is too short'
        }
         
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidator()
        if(Object.keys(errors).length === 0){
         setErrorObj({})
            const formData={
                id:id,
                name:name,
                email:email,
                mobile:mobile
            }
            if(handleToggle){
                handleToggle()
            }
           
            formSubmission(formData)  
            setId(uuidv4())
            setName('')
            setEmail('')
            setMobile('')

           }else{
           setErrorObj(errors)
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Customer</h2>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter name" name="name"/><br/>
                <span>{errorObj.name && <span>{errorObj.name}</span>}</span><br/>
                <input type="text" value={email} onChange={handleChange} placeholder="Enter email id" name="email"/><br/>
                <span>{errorObj.email && <span>{errorObj.email}</span>}</span><br/>
                <input type="text" value={mobile} onChange={handleChange} placeholder="Enter mobile number" name="mobile"/><br/>
                <span>{errorObj.mobile && <span>{errorObj.mobile}</span>}</span><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default CustomerForm
