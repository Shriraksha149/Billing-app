import React from 'react'
import CustomerForm from './CustomerForm'
import { useDispatch} from 'react-redux'
import {createCustomer } from '../../actions/customersAction'

const AddCustomer = (props) => {
    const  dispatch = useDispatch()

    const formSubmission=(formData)=>{
        dispatch(createCustomer(formData))
      
    }

    return (
        <div>
            <CustomerForm formSubmission={formSubmission}/>
        </div>
    )
}

export default AddCustomer
