import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(state => state.wishlist.items);

  if (wishlistItems.length === 0) {
    return (
      <Container className="my-4 text-center">
        <h4 className="cart-empty">Your wishlist is empty</h4>
        <Button className="continue-btn mt-3" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h4 className="cart-title">Your Wishlist</h4>
      {wishlistItems.map(item => (
        <div key={item.id} className="wishlist-card">
          <img
            src={`/images/${item.image}`}
            alt={item.name}
            className="cart-image"
          />
          <div className="cart-details">
            <p className="cart-name">{item.name}</p>
            <p className="cart-price">₹{item.price}</p>
          </div>
          <div className="wishlist-actions">
            <Button
              className="wishlist-cart-btn"
              onClick={() => dispatch(addToCart(item))}
            >
              Add to Cart
            </Button>
            <button
              className="cart-remove-btn"
              onClick={() => dispatch(removeFromWishlist(item.id))}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
      <div className="mt-3">
        <Button className="continue-btn" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </div>
    </Container>
  );
}

export default Wishlist;