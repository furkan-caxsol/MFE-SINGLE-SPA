import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Dashbaord from "./pages/Dashbaord";
import PrivateRoute from "./HOC/ProtectedRoute";

export default function Root(props) {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            // element={<PrivateRoute element={<Dashbaord />}></PrivateRoute>}
            element={<Dashbaord/>}
          ></Route>
        </Routes>
      </BrowserRouter>
  );
}
