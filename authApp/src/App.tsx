import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Demo from "./pages/Demo";

type Props = {};

export default function App({}: Props) {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Register />} />
      <Route path="/auth/demo" element={<Demo />} />
    </Routes>
  );
}
