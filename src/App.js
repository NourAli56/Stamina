import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProductsDetails from './pages/product-details';


const App = () => {
  return (
    <body>
      <TopBar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductsDetails />} />
      </Routes>
      <Footer />
    </body>
  )
}

export default App;


