import React from "react";
import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/globalStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Records from "./pages/Records";
import NewExit from "./pages/NewExit";
import NewEntry from "./pages/NewEntry";
import EditExit from "./pages/EditExit";
import EditEntry from "./pages/EditEntry";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import TokenContext from "./contexts/TokenContext";

const ProtectedRoute = ({ token }) => {
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        userName,
        setUserName,
      }}
    >
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute token={token} />}>
            <Route path="/records" element={<Records />} />
            <Route path="/newexit" element={<NewExit />} />
            <Route path="/newentry" element={<NewEntry />} />
            <Route path="/editentry/:idRecord" element={<EditEntry />} />
            <Route path="/editexit/:idRecord" element={<EditExit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
