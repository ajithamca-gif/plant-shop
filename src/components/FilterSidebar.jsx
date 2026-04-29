import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/filterSlice';

function FilterSidebar() {
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.filter.category);

  const categories = ['all', 'indoor', 'outdoor', 'decor'];

  return (
    <div className="filter-sidebar">
      <h6 className="filter-title">Filter by Category</h6>
      <Nav className="flex-column">
        {categories.map((cat) => (
          <Nav.Link
            key={cat}
            className={`filter-item ${currentCategory === cat ? 'filter-active' : ''}`}
            onClick={() => dispatch(setCategory(cat))}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

export default FilterSidebar;