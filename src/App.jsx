import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category1 from './components/Category/Category1';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';

import smartwatch2 from './assets/smartwatch2-removebg-preview.png'
import headphone from "./assets/headphone.png";
import Products from './components/Products/Products';
import Banner2 from './components/Banner/Banner2';
import Blogs from './components/Blogs/Blogs';
import Partner from './components/Partner/Partner';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import Cart from '../Cart/Cart';

const BannerData ={
  discount:"30% OFF",
  title:"Fine Smile",
  data:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"zsdxfcgvhbjnkm",
  bgColor:"#f42c37",
}
const BannerData2 ={
  discount:"30% OFF",
  title:"Happy Hours",
  data:"14 Jan to 28 Jan",
  image:smartwatch2,
  title2:"Smart Solo ",
  title3:"Winter Sale",
  title4:"zsdxfcgvhbjnkm",
  bgColor:"#2dcc6f",
}

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <div>
    <Router>
    <Navbar cart={cart} />
    <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
      <Hero/>
      <Category/>
      <Category1/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner2 data={BannerData2}/>
     <Blogs/>
     <Partner/>
     <Footer/>






     
    </div>
  );
}

export default App;
