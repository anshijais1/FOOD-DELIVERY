import React from "react";
import { useNavigate } from "react-router-dom";
import MainCourseImage from "../../Food_Assets/assets/hero/hero-2.png";
import "../../Styles/add.css";
import Cards from "../../Components/Cards";

function Addtocart({ cartItems, removeFromCart, addToCart }) {
  const navigate = useNavigate();
  navigate("/option")

  const handleRemove = (id) => {
    removeFromCart(id);
    navigate("/add");
  };

  // Sample data for healthy options
  const healthyOptions = [
    { id: 1, name: "Quinoa Salad", price: 12, image: MainCourseImage },
    { id: 2, name: "Grilled Chicken", price: 15, image: MainCourseImage },
    { id: 3, name: "Fruit Smoothie", price: 8, image: MainCourseImage },
    { id: 4, name: "Veggie Wrap", price: 10, image: MainCourseImage },
  ];

  const renderHealthyOptions = () => {
    return healthyOptions.map((item) => (
      <Cards 
        key={item.id} 
        image={item.image} 
        title={item.name} 
        price={item.price} 
        addToCart={addToCart} 
      />
    ));
  };

  // Calculate total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="add-item">
      <h1>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}
           > 
              {item.name}
              {item.title} - ${item.price}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      
      <h3>Total: ${total}</h3>
      <button onClick={() => navigate('/pay')}>Pay Now</button>

      <h3>Healthy Options</h3>
      <div className="healthy-options-container">
        {renderHealthyOptions()}
      </div>
    </div>
  );
}

export default Addtocart;

