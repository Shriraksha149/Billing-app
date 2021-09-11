import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch} from 'react-redux'
import {createProduct } from '../../actions/productsAction'

const AddProduct = (props) => {
    const  dispatch = useDispatch()

    const formSubmission=(formData)=>{
        dispatch(createProduct(formData))
      
    }

    return (
        <div>
            <ProductForm formSubmission={formSubmission}/>
        </div>
    )
}
export default AddProduct
