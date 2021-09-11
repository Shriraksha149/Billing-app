import React from 'react'
import EditCustomer from './EditCustomer'

const CustomerListItem = ({data}) => {

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                 </thead>
                 <tbody>
                    {data.map((ele)=>{
                        return  <EditCustomer key={ele._id} {...ele}/>  
                                         
                  })}
                 </tbody>
            </table>
        </div>
    )
}

export default CustomerListItem
