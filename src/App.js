import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
