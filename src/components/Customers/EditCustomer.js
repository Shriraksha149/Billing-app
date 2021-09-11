import React,{useState} from 'react'
import {editCustomer} from '../../actions/customersAction'
import { useDispatch } from 'react-redux'
import { Button, Modal, ModalHeader,ModalFooter } from 'reactstrap'
import { v4 as uuidv4} from 'uuid'
import { deleteCustomer } from '../../actions/customersAction'

const EditCustomer = ({_id :Eid,name:Ename,email:Eemail,mobile:Emobile,user:Euser}) => {

    const [id]=useState(Eid ? Eid :uuidv4())
    const [name,setName]=useState(Ename ?Ename: '')
    const [email,setEmail]=useState(Eemail ? Eemail :'')
    const [mobile,setMobile] = useState(Emobile ? Emobile :'')
    
    const dispatch=useDispatch()
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const handleChange=(e)=>{
        const input=e.target.name
        if(input==="name"){
            setName(e.target.value)
        }
        else if(input==="email"){
            setEmail(e.target.value)
        }
        else if(input === "mobile"){
            setMobile(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name:name,
            email:email,
            mobile:mobile
        }
        dispatch(editCustomer(formData))
    }


    const deleteHandle=(Eid)=>{
        const sure = window.confirm("Are you sure")
         if(sure){
            dispatch(deleteCustomer(Eid))
         }
        
           
     }
    return (
        <>
                <tr key={Eid}>
                              <td>{Ename}</td>
                              <td>{Emobile}</td>
                              <td>{Eemail}</td>
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
                    <input type="text" value={email} onChange={handleChange} placeholder="Enter email id" name="email"/><br/><br/>
                    <input type="text" value={mobile} onChange={handleChange} placeholder="Enter mobile number" name="mobile"/><br/><br/>
            

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