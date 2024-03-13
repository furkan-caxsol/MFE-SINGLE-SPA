import React from 'react'
import '../assests/style.css'
//@ts-ignore
import { getAuthToken, setAuthToken } from "@hr/services";
import { useNavigate } from 'react-router-dom';

type Props = {}

function Dashbaord({}: Props) {
    const navigate = useNavigate()  
  const handleLogOut = ()=>{
    localStorage.removeItem("authToken")
    navigate('/auth/login')
  }
  return (
    <div className='container'>
        <h1>This is Dashbaord</h1>
        <div>
         <button style={{alignItems:'center'}} onClick={handleLogOut}>Logout</button>
        </div>
        </div>
         
  )
}

export default Dashbaord