import React from 'react'
import BillForm from './BillForm'

const Addbill = ({customersLocal,productsLocal}) => {
    return (
        <div>
            <h1>Addbill</h1>
            <BillForm customersLocal={customersLocal} productsLocal={productsLocal}/>
        </div>
    )
}

export default Addbill
