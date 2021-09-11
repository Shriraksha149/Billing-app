import React from 'react'
import AddUser from './AddUser'
import { useDispatch } from 'react-redux'
import {userRegisterAction} from '../../../actions/userAction'

const Register = (props) => {
    const dispatch = useDispatch()
    const formSubmission = (FormData)=>{
        const successMessage = () =>{
            alert('Registered successfully')
        }
        dispatch(userRegisterAction(FormData,successMessage,props.history))
    }
    return (
        <div>
            <AddUser formSubmission={formSubmission}/>
            
        </div>
    )
}

export default Register
