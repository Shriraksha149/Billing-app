
import React,{useEffect,useState} from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { listsAllProducts } from '../../actions/productsAction'


const Products = (props) => {

    const [data,setdata]=useState([])
    const [term ,setTerm] = useState('')

    const dispatch = useDispatch()

    const product = useSelector((state)=>{
        return state.products
    })
 
    useEffect(()=>{
        setdata([...product])
    },[product])  

    useEffect(()=>{
        dispatch(listsAllProducts())
    },[dispatch])

    const handleSearch = (e)=>{
        const term = e.target.value
        setTerm(term)

    }
    const filtered = ()=>{
        const result = data.filter((value)=>{
            return value.name.toLowerCase().includes(term)
        })
        return result
    }
    
    return (
        <div>
           <h2>Product List :{data.length}</h2>
           
            <ProductList data={filtered()} term={term} handleSearch={handleSearch}/>
            <AddProduct/>
        </div>
    )
}

export default Products
