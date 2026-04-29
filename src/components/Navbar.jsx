import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory, setSearchQuery } from '../redux/slices/filterSlice';

function MyNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartCount = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const wishlistCount = useSelector(state => state.wishlist.items.length);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  const searchQuery = useSelector(state => state.filter.searchQuery);

  const handleFilter = (category) => {
    dispatch(setCategory(category));
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="px-4">

        {/* Logo */}
        <Navbar.Brand onClick={() => navigate('/')} className="navbar-brand-custom">
          <span style={{ fontSize: "25px" }}>𝓷𓍼ོ</span>ammaOorPlants
        </Navbar.Brand>

        {/* Mobile: icons + toggle — always visible */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <Nav.Link onClick={() => navigate('/wishlist')} className="position-relative p-1">
            <BsHeart size={20} color="#2d5a3d" />
            {wishlistCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {wishlistCount}
              </span>
            )}
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/cart')} className="position-relative p-1">
            <BsCart3 size={20} color="#2d5a3d" />
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarCollapse" />
        </div>

        {/* Collapsible section */}
        <Navbar.Collapse id="navbarCollapse">

          {/* Nav links */}
          <Nav className="me-auto align-items-lg-center">
            <Nav.Link onClick={() => handleFilter('all')} className="nav-link-custom">Home</Nav.Link>
            <Nav.Link onClick={() => handleFilter('indoor')} className="nav-link-custom">Indoor Plants</Nav.Link>
            <Nav.Link onClick={() => handleFilter('outdoor')} className="nav-link-custom">Outdoor Plants</Nav.Link>
            <Nav.Link onClick={() => handleFilter('decor')} className="nav-link-custom">Home&amp;Garden Decor</Nav.Link>
            <Nav.Link onClick={() => handleFilter('pots')} className="nav-link-custom">Pots</Nav.Link>
            <Nav.Link onClick={() => handleFilter('artificial')} className="nav-link-custom">Artificial Plants</Nav.Link>
          </Nav>

          {/* Search */}
          <Form className="d-flex my-2 my-lg-0 me-lg-3">
            <Form.Control
              type="search"
              placeholder="Search plants..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
          </Form>

          {/* Auth + icons (desktop icons here, mobile icons shown above) */}
          <Nav className="align-items-lg-center gap-2">
            {isLoggedIn ? (
              <Nav.Link className="nav-link-custom">Hi, {user.name}!</Nav.Link>
            ) : (
              <>
                <Nav.Link onClick={() => navigate('/login')} className="nav-link-custom">Login</Nav.Link>
                <Nav.Link onClick={() => navigate('/register')} className="nav-link-custom">Register</Nav.Link>
              </>
            )}
            {/* Desktop only icons */}
            <Nav.Link onClick={() => navigate('/wishlist')} className="position-relative d-none d-lg-block">
              <BsHeart size={20} />
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {wishlistCount}
                </span>
              )}
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')} className="position-relative d-none d-lg-block">
              <BsCart3 size={20} />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 

export default MyNavbar;
