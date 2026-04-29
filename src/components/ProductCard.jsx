import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useNavigate } from 'react-router-dom';

function ProductCard({ plant }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
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
          <Button className="product-cart-btn" onClick={() => dispatch(addToCart(plant))}>
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
  );
}

export default ProductCard;