import React,{useState} from "react"
import NavBar from "./components/NavBar"
function App(props) {
  const [userLoggedIn,setUserLoggedIn]= useState(false)

  const handleAuth = () =>{
    setUserLoggedIn(!userLoggedIn)
  }

  return (
    <div>
        <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
    </div>
  )
}

export default App
