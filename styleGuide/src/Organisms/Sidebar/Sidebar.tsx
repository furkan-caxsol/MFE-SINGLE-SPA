// import { NavLink, Outlet } from 'react-router-dom';
// import "./Sidebar.css";

// export const Sidebar = () => {
//   const menuItems = [
//     { label: "Link1", path: "/Dashboard" },
//     { label: "Link2", path: "/auth/login" },
//     { label: "Link3", path: "/auth/signup" },
//   ];
//   return (
//     <div className="sidebar-box">
//       {menuItems.map(({ label, path }) => (
//         <NavLink
//           key={path}
//           to={path}
//           className="sidebar-link"
//         >
//           {label}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// import React from 'react';
// import { Navigate } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Navigate to="/Dashboard">Home</Navigate>
//         </li>
//         <li>
//           <Navigate to="/auth/login">Profile</Navigate>
//         </li>
//         {/* Add more sidebar items as needed */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './sidebar.css'

interface RouteConfig {
  path: string;
  label: string;
}

const routes: RouteConfig[] = [
  {
    path: "/Link1",
    label: "Link1"
  },
  {
    path: "/Link2",
    label: "Link2"
  },
  {
    path: "/Link3",
    label: "Link3"
  }
];

export const Sidebar: React.FC = () => {
  return (
    <Router>
      <div>
        <ul style={{ listStyleType: "none", padding: 0, paddingLeft: '50px' }}>
          {routes.map((route, index) => (
            <li key={index} className="link-style">
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}




