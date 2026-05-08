import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const [qty, setQty] = useState(1);

  const [address, setAddress] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    pincode: ''
  });

  if (!product) 
    return <h2>No product selected ❌</h2>;
  

  const total = product.price * qty;

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  

    const saveOrder = (cartItems, total) => {
      const existing = JSON.parse(localStorage.getItem("orders") || "[]")
      const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleDateString("en-In"),
        items: cartItems,
        total: total,
        status: "Confirmed"
      }
      localStorage.setItem("orders", JSON.stringify([newOrder, ...existing]))
    }
    const handleOrder = async () => {
      if (!address.name || !address.phone || !address.street || !address.city || !address.pincode) {
        alert("Please fill all address fields!");
        return;
      }
      const orderData = {
        ...product,
        quantity: qty,
        total: total,
        address: address,
        status: 'active',
        date: new Date().toISOString()
      };

      try {
        await axios.post("http://localhost:5000/orders", orderData);
        saveOrder([{ name: product.name, price: product.price, quantity: qty }], total);
        navigate("/success");
      } catch (err) {
        console.log(err);
        alert("order failed! please try again.");
      }
    };

    return (
      <Container className="my-4 checkout">

        <Row className="g-4">
          <Col md={6}>
            <div className="checkout-card">
              <img src={`/src/assets/images/${product.image}`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
              <h4>Total: ₹{total}</h4>
            </div>
          </Col>
          <Col md={6}>
            <div className="address-card">
              <h5 className="address-title">Delivery Address</h5>
              <input type="text" name="name" placeholder="Full Name" onChange={handleAddressChange} />
              <input type="text" name="phone" placeholder="Phone Number" onChange={handleAddressChange} />
              <input type="text" name="street" placeholder="Street Address" onChange={handleAddressChange} />
              <input type="text" name="city" placeholder="City" onChange={handleAddressChange} />
              <input type="text" name="pincode" placeholder="Pincode" onChange={handleAddressChange} />

              <div className="checkout-btn-row">
                <button onClick={handleOrder}>Place Order </button>

                <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  export default Checkout;