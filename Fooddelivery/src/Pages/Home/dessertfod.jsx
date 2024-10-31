import React from 'react';
import MainCourseImage from "../../Food_Assets/assets/menu/menu9.jpeg";
import MainCourseImage1 from "../../Food_Assets/assets/menu/menu10.jpeg";
import MainCourseImage2 from "../../Food_Assets/assets/menu/menu11.jpeg";
import MainCourseImage3 from "../../Food_Assets/assets/menu/menu8.jpeg";
import "../../Styles/Nashta.css";
import { useNavigate } from 'react-router-dom'; 
import Header from '../../Components/Layout/Header';

function Dessertfod({ addToCart }) {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: 'Dish 1', price: 45, image: MainCourseImage },
    { id: 2, name: 'Dish 2', price: 35, image: MainCourseImage2 },
    { id: 3, name: 'Dish 3', price: 95, image: MainCourseImage3 },
    { id: 4, name: 'Dish 4', price: 155, image: MainCourseImage1 },
    { id: 5, name: 'Dish 5', price: 75, image: MainCourseImage },
  ];

  const handleAdd = (item) => {
    addToCart(item);
    
    navigate('/add'); // Navigate to the Add page
  };

  return (
    <>
      <Header />
      <div className="divabout">
        <h1 id='relish'>Relish the taste of delicious Snacks</h1>
        
        <div className="grid-container">
          {menuItems.map((item) => (
            <div className="grid-item" key={item.id}>
            
              <img id='small' src={item.image} alt={item.name} />
              <div className="pricediv">
                <p id='rupay'>${item.price}</p>
                <h3>{item.name}</h3>
                <button id="order" onClick={() => handleAdd(item)}>
                  <i className="bi bi-bag me-2"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dessertfod;
