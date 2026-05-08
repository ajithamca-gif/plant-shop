import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container className="success-container">
      <div className="success-card">
        <div className="success-icon">🎉</div>
        <h2 className="success-title">Order Placed Successfully!</h2>
        <p className="success-msg">Thank you for your purchase 🌱</p>
        <p className="success-redirect">Redirecting to home in 5 seconds...</p>
        <Button className="success-btn" onClick={() => navigate("/")}>
          Go to Home
        </Button>
        <Button className="success-orders-btn" onClick={() => navigate("/orders")}>
          View Orders
        </Button>
      </div>
    </Container>
  );
}

export default Success;