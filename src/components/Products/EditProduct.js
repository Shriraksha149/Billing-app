import React,{useState} from 'react'
import {editProduct} from '../../actions/productsAction'
import { useDispatch } from 'react-redux'
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { v4 as uuidv4} from 'uuid'
import { deleteProduct } from '../../actions/productsAction'

const EditCustomer = ({_id :Eid,name:Ename,price:Eprice}) => {

    const [id]=useState(Eid ? Eid :uuidv4())
    const [name,setName]=useState(Ename ?Ename: '')
    const [price,setPrice]=useState(Eprice ? Eprice :'')
   
    const dispatch=useDispatch()
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="name"){
            setName(e.target.value)
        }
        else if(input==="price"){
            setPrice(e.target.value)
        }
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name:name,
            price:price
        }
        dispatch(editProduct(formData))
    }


    const deleteHandle=(Eid)=>{
        
            dispatch(deleteProduct(Eid))
     }
    return (
        <>
                <tr key={Eid}>
                              <td>{Ename}</td>
                              <td>{Eprice}</td>
                              <td> <button  onClick={toggle}> 
                                      edit
                                   </button>
                                     <button onClick={()=> deleteHandle(Eid)}>
                                   delete
                                   </button></td>
                               </tr>
                               
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>MY Edit</ModalHeader> 
              <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={handleChange} placeholder="Enter name" name="name"/><br/><br/>
                    <input type="text" value={price} onChange={handleChange} placeholder="Enter price" name="price"/><br/><br/>

               <ModalFooter>
                       <Button type="submit" color="primary" onClick={toggle}>Add Changes</Button>{' '}
                       <Button color="secondary" onClick={toggle}>Cancel</Button>
               </ModalFooter>
               </form>
           </Modal>
           </>
         )
}

export default EditCustomer