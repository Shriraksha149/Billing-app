import React from 'react'
import LoginForm from './LoginForm'
import {useDispatch}  from 'react-redux'

import { userLoginAction} from '../../../actions/userAction'

const Login = (props) => {

    const  {handleAuth} =props

     console.log("from login c",props)

     const dispatch = useDispatch()
        const formSubmission=(formData)=>{
        
            const successMessage=()=>{
                alert("Login successfully")
            }
            dispatch(userLoginAction(formData,successMessage,props.history,handleAuth))
        }
    return (
        <div>
            <LoginForm formSubmission={formSubmission} />
        </div>
    )
}

export default Login
