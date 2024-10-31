import React from "react";
import '../Styles/Homestyle.css'
import { Col, Card } from "react-bootstrap";

function Cards({ image, title, price, addToCart }) {
  const renderRatingIcons = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i className="bi bi-star-fill" key={i}></i>);
    }
    for (let i = rating; i < 5; i++) {
      stars.push(<i className="bi bi-star" key={i}></i>);
    }
    return stars;
  };

  const handleAdd = () => {
    addToCart({ title, price, image });
    const navigate = useNavigate();
  navigate("/option") // Pass necessary item data
  };

  const rating = 4; // Example rating, you can modify as needed

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{/* Add description here */}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <button id="order" onClick={handleAdd}>
              <i className="bi bi-bag me-2"></i>
              Add To Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
