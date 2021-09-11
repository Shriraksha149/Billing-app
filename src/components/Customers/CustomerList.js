import React from 'react'
import CustomerListItem from './CustomerListItem'

const CustomerList = ({data,term,handleSearch}) => {
  
    return (
        <div>
            <input type="text" placeholder="search by name or number"  value={term} onChange={handleSearch}/>
            
            <CustomerListItem data={data}/>
        </div>
    )
}

export default CustomerList
