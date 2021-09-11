import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = ({data,term,handleSearch}) => {
    
    return (
        <div>
            <input type="text" placeholder="search by name"  value={term} onChange={handleSearch}/>
            <ProductListItem data={data}/>
        </div>
    )
}

export default ProductList