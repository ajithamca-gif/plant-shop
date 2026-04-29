import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div>
      <HeroBanner />
      <Container className="my-4 px-3">
        <Row>
          <Col xs={12} md={2}>
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
