import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductCard({ plant }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleConfirmAddToCart = () => {
    dispatch(addToCart({ ...plant, quantity }));
    toast.success(`${plant.name} added to cart!`);
    setShowModal(false);
    setQuantity(1); // reset
  };

  return (
    <>
      <Card className="product-card">
        <div className="product-image-wrapper">
          <Card.Img variant="top" src={`/src/assets/images/${plant.image}`} className="product-image" />
          <Badge className="product-category-badge">{plant.category}</Badge>
          {plant.discount > 0 && (
            <Badge className="product-discount-badge">{plant.discount}% off</Badge>
          )}
        </div>
        <Card.Body className="product-body">
          <Card.Title className="product-name">{plant.name}</Card.Title>
          <Card.Text className="product-price">₹{plant.price}</Card.Text>
          <div className="product-btn-row">
            <Button className="product-cart-btn" onClick={() => setShowModal(true)}>
              Add to Cart
            </Button>
            <Button className="product-wishlist-btn" onClick={() => dispatch(addToWishlist(plant))}>
              ♡
            </Button>
          </div>
          <Button className="product-buy-btn" onClick={() => navigate("/checkout", { state: plant })}>
            Buy Now
          </Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{plant.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={`/src/assets/images/${plant.image}`}
            alt={plant.name}
            style={{ width: '150px', marginBottom: '15px' }}
          />
          <p className="cart-price">₹{plant.price}</p>

          {/* Quantity Selector */}
          <div className="d-flex justify-content-center align-items-center gap-3 my-3">
            <Button
              variant="outline-secondary"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              −
            </Button>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{quantity}</span>
            <Button
              variant="outline-secondary"
              onClick={() => setQuantity(q => q + 1)}
            >
              +
            </Button>
          </div>

          <p>Total: ₹{plant.price * quantity}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirmAddToCart}>
            🛒 Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductCard;