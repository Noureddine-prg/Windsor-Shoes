import React from "react";
import Navbar from "./components/Navbar/index";
import Home from "./Pages/Home/index";
import Shop from "./Pages/Shop/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
