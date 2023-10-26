import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Register&Login/Login';

function App() {
  return (
    <div className="App">
            <Router> 
              <Navbar />
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<Login />} /> 
                  {/* <Route path="/list/:category" element={<CategoryPage />} />
                  <Route path="/product/:id" element={<SingleProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/payment-success" element={<PaymentSuccess />} /> */}
              </Routes>
              {/* <Footer /> */}
            </Router>
    </div>
  );
}

export default App;
