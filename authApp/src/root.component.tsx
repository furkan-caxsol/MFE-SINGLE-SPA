import Err from "./App";
import Login from "./pages/Login";

export default function Root(props) {

  const value = localStorage.getItem('test')
  console.log('value',value)
  // <style>

  
  // </style>
  return (<div style={{border:'1px solid red'}}>

{/* <Err onError={()=> new Error('ss')}> */}
    <Login/>
{/* </Err> */}



  </div>)
  
 
}
