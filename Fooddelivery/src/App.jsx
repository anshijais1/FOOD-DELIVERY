import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Menu from "./Pages/Home/Menu";
import Nashta from "./Pages/Home/Nashta";
import Section7 from "./Pages/Home/Section7";
import Section6 from "./Pages/Home/Section6";
import Addtocart from './Pages/Home/Addtocart'
import ShopSections from "./Pages/Home/shopsection";
import Dinnerfod from "./Pages/Home/dinnerfod";
import Dessertfod from "./Pages/Home/dessertfod"
import Mainfod from "./Pages/Home/mainfod";
import Option from "./Pages/Home/option"
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/option" element={<Option />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Section7 />} />
        <Route path="/blog" element={<Section6 />} />
        <Route path="/shop" element={<ShopSections />} />
        <Route path="/startersfod" element={<Nashta addToCart={addToCart} />} />
        <Route path="/dinnerfod" element={<Dinnerfod addToCart={addToCart} />} />
        <Route path="/dessertfod" element={<Dessertfod addToCart={addToCart} />} />
        
      
        <Route path="/main coursefod" element={<Mainfod addToCart={addToCart} />} />
        
        <Route path="/add" element={<Addtocart cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
