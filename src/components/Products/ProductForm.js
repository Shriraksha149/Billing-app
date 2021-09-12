import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'

const ProductForm = ({formSubmission,handleIsSaved,isSaved,handleToggle}) => {
    const [id,setId]=useState(uuidv4())
    const [name,setName]=useState('')
    const [price,setPrice] = useState('')
    const [errorObj,setErrorObj] = useState({})
    let errors = {}
    
    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="name"){
            setName(e.target.value)
        }
        else if(input==="price"){
            setPrice(e.target.value)
        }
        
    }

   const runValidator = ()=>{
       if(name.trim().length === 0){
           errors.name = 'name cant be blank'
       }
       if(price.trim().length === 0){
           errors.price = 'price cant be blank'
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
               price:price
            }
            if(handleToggle){
                handleToggle()
            }
           
            formSubmission(formData) 
            setId(uuidv4())
            setName('')
            setPrice('') 
           
        }else{
            setErrorObj(errors)
        }
     }
      
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Product</h2>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter name" name="name"/><br/>
                <span>{errorObj.name && <span>{errorObj.name}</span>}</span><br/>
                <input type="text" value={price} onChange={handleChange} placeholder="Enter price" name="price"/><br/>
                <span>{errorObj.price && <span>{errorObj.price}</span>}</span><br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default ProductForm
