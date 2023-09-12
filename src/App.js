import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Store from './Pages/Store';
import { Routes, Route } from 'react-router-dom';
import React, { Profiler } from 'react';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cancel from './Pages/Cancel';
import Success from './Pages/Success';
import { Container } from 'react-bootstrap';
import CartProvider from './CartContext';



function App() {
  return (

    <CartProvider>
      <div className="App">
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </CartProvider>

  );
}

export default App;
