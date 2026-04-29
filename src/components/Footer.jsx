import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col md={3} xs={12} className="mb-4">
            <h5 className="footer-brand">nammaOorPlants</h5>
            <p className="footer-tagline">Bringing nature to your doorstep across Tamil Nadu.</p>
            
          </Col>
          <Col md={3} xs={12} className="mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li onClick={() => navigate('/')}>Home</li>
              <li onClick={() => navigate('/')}>Indoor Plants</li>
              <li onClick={() => navigate('/')}>Outdoor Plants</li>
              <li onClick={() => navigate('/')}>Decor Plants</li>
            </ul>
          </Col>
          <Col md={3} xs={12} className="mb-4">
            <h6 className="footer-heading">Information</h6>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Returns & Refunds</li>
              <li>Track Your Order</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} xs={12} className="mb-4">
            <h6 className="footer-heading">Contact Us</h6>
            <p className="footer-contact">📧 nammaoorplants@gmail.com</p>
            <p className="footer-contact">📞 +91 9812345678</p>
            <p className="footer-contact">📍 Chennai, Tamil Nadu</p>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>© 2026 nammaOorPlants. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;