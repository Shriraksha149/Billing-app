import React,{useEffect,useState} from 'react'
import CustomerList from './CustomerList'
import AddCustomer from './AddCustomer'
import { useDispatch, useSelector } from 'react-redux'
import { listsAllCustomers } from '../../actions/customersAction'

const Customer = (props) => {
    const [data,setdata]=useState([])
    const [term ,setTerm] = useState('')

    const dispatch = useDispatch()


    const customer = useSelector((state)=>{
        return state.customers
    })
    useEffect(()=>{
        if(customer.length!==0){
            setdata([...customer])
        }
    },[customer])

    useEffect(()=>{
        dispatch(listsAllCustomers())
    },[dispatch])

    const handleSearch = (e)=>{
        const term = e.target.value
        setTerm(term)

    }
    const filtered = ()=>{
        const result = data.filter((value)=>{
            return value.name.toLowerCase().includes(term) || value.mobile.toString().includes(term)
        })
        return result
    }

    return (
        <div>
            <h2>Customer  List :{data.length}</h2>

            <CustomerList data={filtered()} term={term} handleSearch={handleSearch}/>
            <AddCustomer/>
        </div>
    )
}

export default Customer
