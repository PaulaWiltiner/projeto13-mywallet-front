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

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Records />} />
          <Route path="/newexit" element={<NewExit />} />
          <Route path="/newentry" element={<NewEntry />} />
          <Route path="/editentry" element={<EditEntry />} />
          <Route path="/editexit" element={<EditExit />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
