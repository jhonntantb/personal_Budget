import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from "./models/NavBar"
import RegisterOperation from "./models/RegisterOperation"
import ListOperation from "./models/ListOperations"
import  Home from "./models/Home"
import './App.css';
import Charge from "./models/Charge";

function App() {
  return (
    <div>
      < NavBar/>
      <Routes>
          <Route path="/" element={<Charge/>}/>
          <Route path="/home" element={< Home/>} />
          <Route path="/register" element={<RegisterOperation/>}/>
          <Route path="/list" element={<ListOperation/>}/>
      </Routes>
    </div>
  );
}

export default App;
