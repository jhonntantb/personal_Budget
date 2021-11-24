import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from "./models/NavBar"
import './App.css';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={< NavBar/>} />
      </Routes>
    </div>
  );
}

export default App;
