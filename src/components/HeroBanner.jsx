import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function HeroBanner() {
  return (
    <div className="hero-wrapper py-5"style={{ marginTop: 0 }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="d-flex flex-column gap-3">
            <div>
              <Badge className="hero-badge">
                Fresh arrivals every week
              </Badge>
            </div>
            <h1 className="hero-title">
              Bring Nature<br />Into Your Home
            </h1>
            <p className="hero-subtitle">
              Handpicked indoor & outdoor plants delivered to your doorstep across Tamil Nadu.
            </p>
            <div className="d-flex gap-3">
              <Button className="hero-btn-primary" size="lg">
                Shop Now
              </Button>
              <Button className="hero-btn-outline" size="lg" variant="outline-success">
                Explore Plants
              </Button>
            </div>
            <Row className="mt-2 g-3">
              {[
                { value: '200+', label: 'Plant varieties' },
                { value: 'Free', label: 'Delivery above ₹499' },
                { value: '5★', label: 'Rated by customers' },
              ].map((stat, i) => (
                <Col xs="auto" key={i}>
                  <p className="hero-stat-value">{stat.value}</p>
                  <p className="hero-stat-label">{stat.label}</p>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={5} className="d-none d-lg-flex flex-column gap-3 align-items-end mt-4 mt-lg-0">
            {[
              { emoji: '🌵', name: 'Cactus' },
              { emoji: '🌿', name: 'Money Plant' },
              { emoji: '🌸', name: 'Rose' },
            ].map((plant, i) => (
              <div key={i} className="hero-plant-card">
                <div style={{ fontSize: '36px' }}>{plant.emoji}</div>
                <p className="hero-plant-name">{plant.name}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroBanner;