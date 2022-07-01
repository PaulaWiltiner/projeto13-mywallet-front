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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenContext from "./contexts/TokenContext";

const ProtectedRoute = ({ token }) => {
  if (token) {
    return <Records to="/" replace />;
  }

  return <Login to="/" replace />;
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
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={<ProtectedRoute token={token}></ProtectedRoute>}
          />
          <Route path="/records" element={<Records />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newexit" element={<NewExit />} />
          <Route path="/newentry" element={<NewEntry />} />
          <Route path="/editentry/:idRecord" element={<EditEntry />} />
          <Route path="/editexit/:idRecord" element={<EditExit />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
