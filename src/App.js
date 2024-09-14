import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PRODUCTS from './PRODUCTS.json'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Navbar />
  <Header />
<ul className='products'>
  {PRODUCTS.map( (item) => (
<li>
<h3>{item.title}</h3>
<img src={item.images}></img>
<span>Price: {item.price}</span>
<button className='btn btn-outline-primary mt-3'>Add to Card</button>
</li>
  ))}
  </ul>

  <Footer />
    </div>
  );
}

export default App;
