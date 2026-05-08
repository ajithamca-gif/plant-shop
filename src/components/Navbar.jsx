import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsCart3, BsHeart, BsPerson } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory, setSearchQuery } from '../redux/slices/filterSlice';
import { logout } from '../redux/slices/authSlice';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function MyNavbar() {
  const [expanded, setExpanded]=useState(false);
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
    setExpanded(false)
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="custom-navbar" expanded={expanded} onToggle={setExpanded} >
      <Container className="px-4">

        {/* Logo */}
        <Navbar.Brand onClick={() => navigate('/')} className="navbar-brand-custom">
          nammaOoruPlants
        </Navbar.Brand>

        {/* Mobile: always visible */}
        <div className="d-flex align-items-center gap-2 d-lg-none">

          {/* Mobile auth */}
          {isLoggedIn ? (
            <Button variant="outline-success" size="sm" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          ) : (
            <NavDropdown
              title={<BsPerson size={20} color="#2d5a3d" />}
              id="user-dropdown-mobile"
              align="end"
            >
              <NavDropdown.Item onClick={() => {navigate('/register'); setExpanded(false);} }>
                Register
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {navigate('/login'); setExpanded(false);} }>
                Login
              </NavDropdown.Item>
            </NavDropdown>
          )}

          <Nav.Link onClick={() => {navigate('/wishlist'); setExpanded(false);} } className="position-relative p-1">
            <BsHeart size={20} color="#2d5a3d" />
            {wishlistCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {wishlistCount}
              </span>
            )}
          </Nav.Link>
          <Nav.Link onClick={() => {navigate('/cart'); setExpanded(false);} } className="position-relative p-1">
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
            <Nav.Link onClick={() => handleFilter('all')} className="nav-link-custom">All Plants</Nav.Link>
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

          {/* Desktop auth + icons */}
          <Nav className="align-items-lg-center gap-2">
            {isLoggedIn ? (
              <>
                <Nav.Link className="nav-link-custom">Hi, {user.name}!</Nav.Link>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </>

            ) : (
              <NavDropdown
                title={<BsPerson size={22} />}
                id="user-dropdown"
                align="end"
                className="d-none d-lg-flex align-items-center"
              >
                <NavDropdown.Item onClick={() => navigate('/register')}>
                  Register
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/login')}>
                  Login
                </NavDropdown.Item>
              </NavDropdown>
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