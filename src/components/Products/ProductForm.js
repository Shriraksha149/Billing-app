import React, { useState ,useEffect} from 'react'
import { v4 as uuidv4} from 'uuid'

const ProductForm = ({formSubmission,handleIsSaved,isSaved,id:Aid,name:Aname,price:Aprice,handleToggle}) => {
    const [id,setId]=useState(Aid ?Aid : uuidv4())
    const [name,setName]=useState(Aname ? Aname: '')
    const [price,setPrice] = useState(Aprice? Aprice:'')
   
    

    useEffect(()=>{
        if(isSaved){
            setId(uuidv4())
            setName('')
             setPrice('')
            handleIsSaved()
        }
    },[isSaved,handleIsSaved])
   

    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="name"){
            setName(e.target.value)
        }
        else if(input==="price"){
            setPrice(e.target.value)
        }
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name:name,
           price:price
        }
        if(handleToggle){
            handleToggle()
        }
       
        formSubmission(formData)  
        setName('')
        setPrice('') 
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Product</h2>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter name" name="name"/><br/><br/>
                <input type="text" value={price} onChange={handleChange} placeholder="Enter price" name="price"/><br/><br/>
               
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default ProductForm
