import React from 'react'
import { Link,Route,Switch,withRouter} from 'react-router-dom'
import Home from './userAuth/Home/Home'
import Login from './userAuth/Login/Login'
import Register from './userAuth/Register/Register'
import Products from './Products/Products'
import Customer from './Customers/Customer'
import Dashboard from './dashboard/Dashboard'
import Bills from './Bills/Bills'
import Profile from './Profile/Profile'
import Logout from './Logout/Logout'

const NavBar = (props) => {
    const {handleAuth}=props
     const localVar=localStorage.getItem('token')  || false

    return (
           <div>
               {localVar ? (
                   <>
                      <Link to="dashboard">  Dashboard  </Link>
                      <Link to="customers">  Customers  </Link>
                      <Link to="products">  Products  </Link>
                      <Link to="bills">  Bill  </Link>
                      <Link to="profile">  Profile  </Link>
                      <Link to="" onClick={()=>{
                          localStorage.removeItem('token')
                          alert('successfully logged out')
                          handleAuth()
                          props.history.push("/")
                      }}>  Logout  </Link>
                  </>
               ):(
                   <>
                    <Link to="/"> Home </Link>
                    <Link to="/register"> Register </Link>
                    <Link to="/login"> Login </Link>
                  </>
          )}
          <Switch>
                <Route path="/" component={Home} exact/>
                <Route  path="/register" component={Register} exact/>
                <Route path="/login"  render ={(props)=><Login handleAuth={handleAuth} {...props}/>} exact/>
                <Route path="/dashboard" component={Dashboard} exact/>
                <Route path="/customers" component={Customer} exact/>
                <Route path="/products" component={Products} exact/>
                <Route path="/bills" component={Bills} exact/>
                <Route path="/profile" component={Profile} exact/>
                <Route path="/logout" component={Logout} exact/>
        </Switch>
               
          </div>
    )
}

const WrapperComponent  = withRouter(NavBar)
export default WrapperComponent
