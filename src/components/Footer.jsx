import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsPinterest, BsWhatsapp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/filterSlice';

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  return (
    <footer className="footer mt-auto py-4">
      <Container>

        {/* logo  */}
        <div className='footer-logo mb-3'>
          <span className='footer-logo-text'> <strong>nammaOoruPlants</strong> </span>
        </div>

        {/* Social Icons  */}
        <div className='footer-icons mb-4 d-flex gap-3'>
          <BsFacebook size={24} />
          <BsInstagram size={24} />
          <BsPinterest size={24} />
          <BsWhatsapp size={24} />
        </div>

        {/* Link  */}

        <Row className="mb-4">
          <Col xs={6} lg={4} className="mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li onClick={() => { dispatch(setCategory('all')); navigate('/'); }}>Home</li>
              <li onClick={() => { dispatch(setCategory('indoor')); navigate('/'); }}>Indoor Plants</li>
              <li onClick={() => { dispatch(setCategory('outdoor')); navigate('/'); }}>Outdoor Plants</li>
              <li onClick={() => { dispatch(setCategory('decor')); navigate('/'); }}>Decor Plants</li>
            </ul>
          </Col>
          <Col xs={6} lg={4} className="mb-4">
            <h6 className="footer-heading">Information</h6>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Returns & Refunds</li>
              <li>Track Your Order</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col xs={12} lg={4} className="mb-4">
            <h6 className="footer-heading">Contact Us</h6>
            <p className="footer-contact">📧 nammaOoruPlants@gmail.com</p>
            <p className="footer-contact">📞 +91 9812345678</p>
            <p className="footer-contact">📍 Chennai, Tamil Nadu</p>
          </Col>
        </Row>
        {/* Tagline  */}
        <div className='footer-tagline'>
          <h6>nammaOoruPlants</h6>
          <p>We believe in the power of plants to lift the spirit, calm the mind and clean the air.</p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 nammaOoruPlants. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;