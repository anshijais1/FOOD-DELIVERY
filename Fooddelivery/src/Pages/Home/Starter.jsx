import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you import Link from react-router-dom
import Burger from "../../Food_Assets/assets/hero/hero-2.png";
import MainCourseImage from "../../Food_Assets/assets/menu/menu5.jpeg"; // Replace with actual image paths
import DinnerImage from "../../Food_Assets/assets/menu/menu7.jpeg"; // Replace with actual image paths
import DessertImage from "../../Food_Assets/assets/menu/menu11.jpeg"; // Replace with actual image paths

function Starter({ menu }) {
    let imageSrc;
    let title;

    switch (menu) {
        case 'starter':
            imageSrc = Burger;
            title = "Starters";
            
            break;
        case 'maincourse':
            imageSrc = MainCourseImage; // Change to your actual image
            title = "Main Course";
            break;
        case 'Dinner':
            imageSrc = DinnerImage; // Change to your actual image
            title = "Dinner";
            break;
        case 'Desert':
            imageSrc = DessertImage; // Change to your actual image
            title = "Dessert";
            break;
        default:
            imageSrc = Burger; // Fallback image
            title = "Menu not found";
            break;
    }

    return (
        <div className="divmain">
            <div className="divstarter">
                <img src={imageSrc} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0' }} />
                <div className="overlay">
                    <h2>
                    <Link to={`/${title.toLowerCase()}fod`} style={{ color: 'white', textDecoration: 'none' }}>
    {title}
</Link>

                        
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Starter;
