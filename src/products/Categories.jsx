import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const categoryStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    margin: '10px 0',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    color: 'black',
    display: 'block',
  };

  const headerStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  return (
    <>
      <h1 style={headerStyle}>Categories</h1>
      <div className="list-group">
        {categories.map((category, index) => (
          <Link
            to={`/products/category/${category}`}
            key={index}
            style={categoryStyle}
            className="list-group-item list-group-item-action"
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;
