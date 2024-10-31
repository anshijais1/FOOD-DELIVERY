import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../Styles/Homestyle.css';
import healthy from "../../Food_Assets/assets/menu/menu4.jpeg";

// Example function to simulate adding items to cart
const addToCart = (item) => {
  console.log(`Added to cart: ${item}`); // Replace with your actual cart logic
};

const Option = () => {
  const [showHealthyOption, setShowHealthyOption] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (item) => {
    addToCart(item); // Add normal item to cart
    
  };

  const handleAddHealthyOption = () => {
    const healthyItem = { name: "Onion Salad", image: healthy }; // Define your healthy item
    // Clear current cart (if applicable), then add healthy option
    addToCart(healthyItem);
    navigate('/add'); // Navigate to the cart
  };

  const handleNoThanks = () => {
    const normalItem = { name: "Regular Item" }; // Define your normal item
    addToCart(normalItem); // Add normal item to cart
    navigate('/add'); // Navigate to the cart
  };

  return (
    <div className="option-container">
        <div className="healthy-option-prompt">
          <h2>Would you like to choose this healthy option?</h2>
          <div className="option-div">
            <img src={healthy} alt="Healthy Option" className="option-image" />
            <p>Onion Salad</p>
            <div className="button-container">
              <button className="add-button" onClick={handleAddHealthyOption}>
                Add Healthy Option
              </button>
              <button className="no-thanks-button" onClick={handleNoThanks}>
                No Thanks
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Option;

 
 