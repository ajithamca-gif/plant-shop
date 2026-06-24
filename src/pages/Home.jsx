import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function Home() {
  const currentCategory = useSelector(state => state.filter.category);

  return (
    <div>
      {/* category 'all' na matum banner show aagum */}
      {currentCategory === 'all' && <HeroBanner />}

      <Container className="my-4 px-3">
        <Row>
          <Col xs={0} md={2} className="d-none d-md-block">
            <FilterSidebar />
          </Col>
          <Col xs={12} md={10}>
            <ProductGrid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;