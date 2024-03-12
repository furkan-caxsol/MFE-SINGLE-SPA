import Demo from "./pages/Demo";
import Login from "./pages/Login";
// import {FormGroup} from "@hr/style-guide"

export default function Root(props) {
  return (
  <div style={{border:'1px solid red'}}>
    <Login/>
    <Demo/>
    {/* <FormGroup/> */}
  </div>
  
  )
}
