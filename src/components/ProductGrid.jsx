import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

function ProductGrid() {
  const [plants, setPlants] = useState([]);

  const currentCategory = useSelector(state => state.filter.category);
  const searchQuery = useSelector(state => state.filter.searchQuery);

  // 🔥 JSON Server fetch
  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  // 🔍 filter logic (same as yours)
  const filteredPlants = plants.filter(p => {
    const matchCategory =
      currentCategory === "all" || p.category === currentCategory;

    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <Row className="g-3">
      {filteredPlants.map(p => (
        <Col key={p.id} xs={6} md={4}>
          <ProductCard plant={p} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductGrid;