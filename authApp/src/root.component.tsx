import Login from "./pages/Login";
import { ServiceClient, publicApiFunction, getAuthToken } from "@hr/services";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
export default function Root(props) {
  return (
    <BrowserRouter>
      <ApolloProvider client={ServiceClient}>
        <App/>
      </ApolloProvider>
    </BrowserRouter>
  );
}
