import { Navigate } from "react-router-dom"
type Props = {}
//@ts-ignore
import { getAuthToken } from "@hr/services";


const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({
    element,
    ...rest
  }) => {
    const token = getAuthToken();
    return token ? element : <Navigate to="/auth/login" />;
  };

export default PrivateRoute