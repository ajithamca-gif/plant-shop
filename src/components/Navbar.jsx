import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart3, BsHeart, BsSearch } from 'react-icons/bs';
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
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="custom-navbar" sticky="top">
          <Container className="px-4">
            <Navbar.Brand onClick={() => navigate('/')} className="navbar-brand-custom">
              nammaOorPlants
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>nammaOorPlants</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                {/* Nav links — mobile (Offcanvas) + desktop both use this */}
                <Nav className="mobile-nav-links">
                  <Nav.Link onClick={() => handleFilter('all')} className="nav-link-custom">Home</Nav.Link>
                  <Nav.Link onClick={() => handleFilter('indoor')} className="nav-link-custom">Indoor Plants</Nav.Link>
                  <Nav.Link onClick={() => handleFilter('outdoor')} className="nav-link-custom">Outdoor Plants</Nav.Link>
                  <Nav.Link onClick={() => handleFilter('decor')} className="nav-link-custom">Home&Garden Decor</Nav.Link>
                  <Nav.Link onClick={() => handleFilter('decor')} className="nav-link-custom">Pots</Nav.Link>
                  <Nav.Link onClick={() => handleFilter('decor')} className="nav-link-custom">Artificial Plants</Nav.Link>
                </Nav>

                {/* Search bar — DESKTOP ONLY (mobile has its own bar below navbar) */}
                <Form className="d-none d-lg-flex mx-3">
                  <Form.Control
                    type="search"
                    placeholder="Search plants..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                  />
                </Form>

                {/* Login/Register — DESKTOP ONLY (mobile has its own row below navbar) */}
                <Nav className="d-none d-lg-flex desktop-auth-links me-3">
                  {isLoggedIn ? (
                    <Nav.Link className="nav-link-custom">Hi, {user.name}</Nav.Link>
                  ) : (
                    <>
                      <Nav.Link onClick={() => navigate('/login')} className="nav-link-custom">Login</Nav.Link>
                      <Nav.Link onClick={() => navigate('/register')} className="nav-link-custom">Register</Nav.Link>
                    </>
                  )}
                </Nav>

                {/* Wishlist + Cart icons */}
                <div className="mobile-icon-row">
                  <Nav.Link onClick={() => navigate('/wishlist')} className="position-relative mobile-icon-link">
                    <BsHeart size={20} />
                    <span>Wishlist</span>
                    {wishlistCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {wishlistCount}
                      </span>
                    )}
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate('/cart')} className="position-relative mobile-icon-link">
                    <BsCart3 size={20} />
                    <span>Cart</span>
                    {cartCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartCount}
                      </span>
                    )}
                  </Nav.Link>
                </div>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>

          {/* MOBILE ONLY — full-width search bar + Login/Register below navbar */}
          <div className="mobile-search-bar d-lg-none">
            <div className="mobile-search-row">
              <Form.Control
                type="search"
                placeholder="What are you looking for?"
                className="mobile-search-input"
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              />
              <button className="mobile-search-btn">
                <BsSearch size={16} />
              </button>
            </div>
            <div className="mobile-auth-row">
              {isLoggedIn ? (
                <span className="nav-link-custom">Hi, {user.name}</span>
              ) : (
                <>
                  <span className="nav-link-custom" onClick={() => navigate('/login')}>Login</span>
                  <span className="nav-link-custom" onClick={() => navigate('/register')}>Register</span>
                </>
              )}
            </div>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default MyNavbar;
