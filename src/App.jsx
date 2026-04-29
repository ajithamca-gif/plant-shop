import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Whishlist';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import Success from './pages/Success';
import Checkout from './pages/Checkout';


const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <MyNavbar />
      <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/success" element={<Success/>}/>

      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;