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
import Contactus from "./components/Contactus/Contactus";
import Blog from "./components/Blog/Blog";
import BlogAPI from "./components/Blog/BlogAPI";
import ThemeContext from "./components/Context/ThemeContext";



function App() {
  return (
    <ThemeContext.Provider value={{test: 'myTheme'}}>
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/shop" element={<Layout><Products /></Layout>} />
      <Route path="/aboutus" element={<Layout><Aboutus /></Layout>} />
      <Route path="/contactus" element={<Layout><Contactus /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/blog-api" element={<Layout><BlogAPI /></Layout>} />
      </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
