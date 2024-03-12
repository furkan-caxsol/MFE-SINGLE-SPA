import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"

type Props = {}

export default function App({}: Props) {
  return (
   <Routes>
	 <Route path="/auth/login"  element={<Login />} />
   <Route path="/auth/signup"  element={<Register/>} />
   </Routes>

  )
}