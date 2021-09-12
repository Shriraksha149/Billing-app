import React, { useEffect, useState } from 'react'
import BillsList from './BillsList'
import Addbill from './Addbill'
import { useDispatch, useSelector } from 'react-redux'
import  {listsAllCustomers } from  '../../actions/customersAction'
import  { listsAllProducts}  from '../../actions/productsAction'

const Bills = (props) => {
      const [customersLocal,setCustomersLocal]=useState([])
      const [productsLocal,setProductsLocal]=useState([]) 

     const dispatch=useDispatch()

     useEffect(()=>{ 
         dispatch(listsAllCustomers())
         dispatch(listsAllProducts())
     },[dispatch])
     const {customers,products}=useSelector((state)=>{
         return state
     })

     useEffect(()=>{
         setCustomersLocal([...customers])
         setProductsLocal([...products])

     },[customers,products])

    return (
        <div>
            <h2>bills Customer -{customersLocal.length} Products-{productsLocal.length}</h2>
            <BillsList/>
            <Addbill  customersLocal={customersLocal} productsLocal={productsLocal} />
        </div>
    )
}

export default Bills
