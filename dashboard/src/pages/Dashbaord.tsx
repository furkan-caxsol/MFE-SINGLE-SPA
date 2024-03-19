import React from "react";
import "../assests/style.css";
//@ts-ignore
import { getAuthToken, setAuthToken } from "@hr/services";
//@ts-ignore
import {Main} from "@hr/style-guide";
import { useNavigate } from "react-router-dom";

type Props = {};

function Dashboard({}: Props) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/auth/login");
  };
  return (
    <div >
      {/* <h1>This is Dashboard</h1>
      <div>
        <button style={{ alignItems: "center" }} onClick={handleLogOut}>
          Logout
        </button>
      </div> */}
      {/* <Main/> */}
    </div>
  );
}

export default Dashboard;
