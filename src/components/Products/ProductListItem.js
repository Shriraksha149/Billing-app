import React from 'react' 
import EditProduct from './EditProduct'
const ProductListItem = ({data}) => {
    
    return (
        <div>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((ele)=>{
                    return  <EditProduct key={ele._id} {...ele}/>  
                                     
            })}
            </tbody>
        </table>

    </div>
    )
}

export default ProductListItem
