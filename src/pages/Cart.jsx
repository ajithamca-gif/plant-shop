import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/slices/cartSlice';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <Container className="my-4 text-center">
        <h4 className="cart-empty">Your cart is empty</h4>
        <Button className="continue-btn mt-3" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </Container>
    );
  }


  return (
    <Container className="my-4">
      <h4 className="cart-title">Your Cart</h4>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/images/${item.image}`} className="cart-image" />
          <div className="cart-details">
            <p className="cart-name">{item.name}</p>
            <p className="cart-price">₹{item.price}</p>
          </div>
          <div className="cart-quantity">
            <Button className="qty-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
            <span className="qty-count">{item.quantity}</span>
            <Button className="qty-btn" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
          </div>
          <p className="cart-subtotal">₹{item.price * item.quantity}</p>
          <Button className="cart-remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>❌</Button>
        </div>
      ))}
      <div className="cart-total">
        <p>Total: ₹{total}</p>
      </div>
      <div className="cart-total">
        <p>Total: ₹{total}</p>
        <Button className="continue-btn" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </div>
    </Container>
  );
}

export default Cart;