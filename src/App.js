import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Aboutus from "./components/Aboutus/Aboutus";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/aboutus" element={<Layout><Aboutus /></Layout>} />
      <Route path="/shop" element={<Layout><Products /></Layout>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
