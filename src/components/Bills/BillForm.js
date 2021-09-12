import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select'

import  {getCustomerName,getProductsName} from './Helper'

    const BillForm = (props) => {
      const {customersLocal,productsLocal}=props
      const [date,setDate]= useState('')
      const [selectCustomer,setSelectCustomer]=useState('')
      const [selectProducts,setSelectProducts]=useState([])

      const [lineItems,setLinesItems]=useState([])

      const {
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
    
      const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

      //for date 
    const handleChange = (e)=>{
        setDate(e.target.value)
    }
    const handleSelectChange=(item)=>{
        setSelectCustomer(item)
    }

      const options = getCustomerName(customersLocal) 
      
      const products=getProductsName(productsLocal)

      const multiHandleChange=(e)=>{
            const result=e.map((ele)=>{
                return ele.value || []
            })
        setSelectProducts(result) 
      }
      return (
        <div>
           <label>Billing date</label>
           <Button color="danger" onClick={toggle}>Generete Bill</Button>
            
            <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                <ModalHeader> Create  Bill </ModalHeader>
                    <ModalBody>
                        <Container> 
                        <Row>
                            <Col xs="6">

                                <h1>   Form  </h1>
                                <input type="date" value={date} onChange={handleChange}/><br/><br/>
                                <Select options={options} 
                                       value={selectCustomer}
                                       onChange={handleSelectChange} /><br/><br/>
                                 <Select
                                    isMulti
                                    name="products"
                                    value={products.filter(ele=> selectProducts.includes(ele.value))}
                                    onChange={multiHandleChange}  
                                    options={products}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                                <button>Add Items cart </button>
                            </Col>
                            <Col xs="6">
                                <h1>Cart Items</h1>
                            </Col>
                        </Row>

                        </Container>

                    </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}> Add Bill</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default BillForm
